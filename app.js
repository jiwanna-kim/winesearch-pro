/* ================================================
   WineSearch Pro — App Logic (Domaine-centric)
   ================================================ */

(function () {
  'use strict';

  // ── STATE ──────────────────────────────────────
  let currentStarFilter = 'all';
  let currentSearch     = '';
  let currentRegion     = 'all';
  let currentType       = 'all';
  let currentSort       = 'stars_desc';
  let isListView        = false;

  // ── DOM REFS ───────────────────────────────────
  const searchInput  = document.getElementById('searchInput');
  const clearBtn     = document.getElementById('clearBtn');
  const wineGrid     = document.getElementById('wineGrid');
  const noResults    = document.getElementById('noResults');
  const resultsCount = document.getElementById('resultsCount');
  const regionFilter = document.getElementById('regionFilter');
  const typeFilter   = document.getElementById('typeFilter');
  const sortFilter   = document.getElementById('sortFilter');
  const gridViewBtn  = document.getElementById('gridViewBtn');
  const listViewBtn  = document.getElementById('listViewBtn');
  const modal        = document.getElementById('wineModal');
  const modalContent = document.getElementById('modalContent');
  const modalClose   = document.getElementById('modalClose');
  const criticsGrid  = document.getElementById('criticsGrid');

  // ── INIT ───────────────────────────────────────
  function init() {
    buildRegionFilter();
    renderCountBadges();
    renderCritics();
    renderDomaines();
    bindEvents();
  }

  // ── BUILD REGION FILTER ────────────────────────
  function buildRegionFilter() {
    const regions = [...new Set(DOMAINES_DATA.map(d => d.region))].sort();
    regions.forEach(r => {
      const opt = document.createElement('option');
      opt.value = r; opt.textContent = r;
      regionFilter.appendChild(opt);
    });
  }

  // ── STAR COUNT BADGES ─────────────────────────
  function renderCountBadges() {
    [1, 2, 3, 4].forEach(s => {
      const el = document.getElementById(`count${s}`);
      if (el) el.textContent = DOMAINES_DATA.filter(d => d.rvf_stars === s).length;
    });
  }

  // ── FILTER & SORT ─────────────────────────────
  function getFilteredDomaines() {
    let list = [...DOMAINES_DATA];

    if (currentStarFilter !== 'all') {
      list = list.filter(d => d.rvf_stars === Number(currentStarFilter));
    }
    if (currentSearch.trim()) {
      const q = currentSearch.trim().toLowerCase();
      list = list.filter(d =>
        d.name.toLowerCase().includes(q) ||
        d.region.toLowerCase().includes(q) ||
        d.village.toLowerCase().includes(q) ||
        d.wines.some(w =>
          w.name.toLowerCase().includes(q) ||
          w.appellation.toLowerCase().includes(q)
        )
      );
    }
    if (currentRegion !== 'all') list = list.filter(d => d.region === currentRegion);
    if (currentType !== 'all') list = list.filter(d => d.type_tags.includes(currentType));

    list.sort((a, b) => {
      switch (currentSort) {
        case 'stars_desc': return b.rvf_stars - a.rvf_stars;
        case 'stars_asc':  return a.rvf_stars - b.rvf_stars;
        case 'name_asc':   return a.name.localeCompare(b.name);
        case 'score_desc': return getBestScore(b) - getBestScore(a);
        default: return 0;
      }
    });
    return list;
  }

  function getBestScore(domaine) {
    let best = 0;
    domaine.wines.forEach(w => {
      w.vintages.forEach(v => {
        if (v.critics.parker?.score > best) best = v.critics.parker.score;
      });
    });
    return best;
  }

  // ── RENDER DOMAINES ────────────────────────────
  function renderDomaines() {
    const list = getFilteredDomaines();
    wineGrid.innerHTML = '';

    if (list.length === 0) {
      noResults.classList.remove('hidden');
      resultsCount.textContent = '검색 결과 없음';
      return;
    }
    noResults.classList.add('hidden');
    resultsCount.textContent = `${list.length}개 도멘`;

    list.forEach(domaine => {
      wineGrid.appendChild(buildDomaineCard(domaine));
    });
  }

  // ── BUILD DOMAINE CARD ────────────────────────
  function buildDomaineCard(domaine) {
    const card = document.createElement('div');
    card.className = 'wine-card domaine-card';
    card.dataset.id = domaine.id;

    const starsHtml = renderStarsHtml(domaine.rvf_stars);
    const badgeClass = `badge-${domaine.rvf_stars}`;
    const typeTags = domaine.type_tags.map(t =>
      `<span class="meta-tag type-${t.toLowerCase()}">${t}</span>`
    ).join('');

    // Pick a representative image from first wine that has one
    const heroImg = domaine.wines.find(w => w.image)?.image || null;

    const scorePreview = getTopScorePreview(domaine);

    card.innerHTML = `
      <div class="card-star-badge ${badgeClass}">${starsHtml.badge}</div>
      ${heroImg
        ? `<div class="card-hero-img"><img src="${heroImg}" alt="${domaine.wines[0]?.name}" loading="lazy" onerror="this.parentElement.classList.add('img-error')"/></div>`
        : `<div class="card-hero-placeholder bar-${(domaine.type_tags[0] || 'rouge').toLowerCase().replace(/\s/g,'-')}">
             <span class="placeholder-icon">🍷</span>
           </div>`
      }
      <div class="card-body">
        <div class="card-appellation">${domaine.region} · ${domaine.village}</div>
        <div class="card-name">${domaine.name}</div>
        <div class="card-stars-row">
          <span class="rvf-label">RVF</span>
          <span class="stars-display ${starsHtml.cls}">${starsHtml.stars}</span>
        </div>
        <div class="card-meta">
          ${typeTags}
          <span class="meta-tag">와인 ${domaine.wines.length}종</span>
        </div>
        <div class="card-desc-preview">${domaine.description.slice(0, 68)}…</div>
        ${scorePreview ? `<div class="card-scores">${scorePreview}</div>` : ''}
      </div>`;

    card.addEventListener('click', () => openModal(domaine));
    return card;
  }

  function getTopScorePreview(domaine) {
    // Find the best vintage across all wines
    let best = null;
    domaine.wines.forEach(w => {
      w.vintages.forEach(v => {
        if (!best || v.critics.parker?.score > best.parker) {
          best = { parker: v.critics.parker?.score, ws: v.critics.wine_spectator?.score, suckling: v.critics.suckling?.score, decanter: v.critics.decanter?.score, year: v.year };
        }
      });
    });
    if (!best) return '';
    return [
      { label: 'Parker',   score: best.parker },
      { label: 'WS',       score: best.ws },
      { label: 'Suckling', score: best.suckling },
      { label: 'Decanter', score: best.decanter }
    ].map(({ label, score }) => {
      if (!score) return '';
      const cls = score >= 100 ? 'perfect' : score >= 95 ? 'excellent' : '';
      return `<div class="score-chip"><span class="score-critic">${label}</span><span class="score-value ${cls}">${score}</span></div>`;
    }).join('');
  }

  // ── MODAL ─────────────────────────────────────
  function openModal(domaine) {
    modalContent.innerHTML = buildModalHtml(domaine);
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    bindModalWineAccordions(domaine);
  }

  function buildModalHtml(domaine) {
    const starsHtml = renderStarsHtml(domaine.rvf_stars);

    const winesHtml = domaine.wines.map(wine => buildWineAccordion(wine, domaine)).join('');

    return `
      <div class="modal-header">
        <div class="modal-badge-row">
          <span class="modal-appellation">${domaine.region} · ${domaine.village}</span>
          ${domaine.type_tags.map(t => `<span class="meta-tag type-${t.toLowerCase()}">${t}</span>`).join('')}
        </div>
        <div class="modal-name">${domaine.name}</div>
        <div class="modal-rvf-stars ${starsHtml.cls}">${starsHtml.stars}</div>
        <div class="modal-description">${domaine.description}</div>
      </div>
      <div class="modal-body">
        <h3 class="modal-section-title">수록 와인 (${domaine.wines.length}종)</h3>
        <div class="wine-accordion-list">${winesHtml}</div>
      </div>`;
  }

  function buildWineAccordion(wine, domaine) {
    const latestVintage = [...wine.vintages].sort((a, b) => b.year - a.year)[0];
    const typeClass = `type-${wine.type.toLowerCase()}`;
    const imgHtml = wine.image
      ? `<img src="${wine.image}" alt="${wine.name}" class="wine-acc-img" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
         <div class="wine-acc-img-placeholder" style="display:none"><span>🍷</span></div>`
      : `<div class="wine-acc-img-placeholder"><span>${wine.type === 'Blanc' ? '🥂' : wine.type === 'Effervescent' ? '🍾' : '🍷'}</span></div>`;

    return `
      <div class="wine-accordion" data-wine-id="${wine.id}">
        <div class="wine-acc-header">
          <div class="wine-acc-img-wrap">${imgHtml}</div>
          <div class="wine-acc-info">
            <div class="wine-acc-appellation">${wine.appellation}</div>
            <div class="wine-acc-name">${wine.name}</div>
            <div class="wine-acc-meta">
              <span class="meta-tag ${typeClass}">${wine.type}</span>
              <span class="meta-tag">최신 ${latestVintage.year}</span>
              <span class="meta-tag">RVF ${latestVintage.rvf_score}/20</span>
            </div>
          </div>
          <span class="wine-acc-arrow">▾</span>
        </div>
        <div class="wine-acc-body hidden">
          <div class="vintage-tabs">
            ${wine.vintages.sort((a,b)=>b.year-a.year).map(v =>
              `<button class="vintage-tab ${v.year===latestVintage.year?'active':''}" data-year="${v.year}">${v.year}</button>`
            ).join('')}
          </div>
          <div class="rvf-score-display">
            <span>RVF 점수</span>
            <strong>${latestVintage.rvf_score}/20</strong>
          </div>
          <div class="critics-reviews">${buildCriticReviews(latestVintage)}</div>
        </div>
      </div>`;
  }

  function buildCriticReviews(vintage) {
    if (!vintage) return '';
    return [
      { key: 'parker',         info: CRITICS.parker },
      { key: 'wine_spectator', info: CRITICS.wine_spectator },
      { key: 'suckling',       info: CRITICS.suckling },
      { key: 'decanter',       info: CRITICS.decanter }
    ].map(({ key, info }) => {
      const data = vintage.critics[key];
      if (!data) return '';
      const scoreClass = data.score >= 100 ? 'perfect' : data.score >= 97 ? 'excellent' : '';
      return `
        <div class="critic-review-card ${key}">
          <div class="critic-review-header">
            <div class="critic-name-row">
              <span class="critic-avatar">${info.avatar}</span>
              <div>
                <div class="critic-name">${info.name}</div>
                <div class="critic-pub">${info.publication}</div>
              </div>
            </div>
            <span class="critic-score-badge ${scoreClass}">${data.score}<span style="font-size:0.7em;opacity:0.6">pts</span></span>
          </div>
          <p class="critic-note">"${data.note}"</p>
        </div>`;
    }).join('');
  }

  // ── ACCORDION INTERACTIONS ────────────────────
  function bindModalWineAccordions(domaine) {
    modalContent.querySelectorAll('.wine-accordion').forEach(acc => {
      const header = acc.querySelector('.wine-acc-header');
      const body   = acc.querySelector('.wine-acc-body');
      const arrow  = acc.querySelector('.wine-acc-arrow');
      const wineId = acc.dataset.wineId;
      const wine   = domaine.wines.find(w => w.id === wineId);

      header.addEventListener('click', () => {
        const isOpen = !body.classList.contains('hidden');
        body.classList.toggle('hidden', isOpen);
        arrow.textContent = isOpen ? '▾' : '▴';
      });

      // Vintage tab switching within accordion
      acc.querySelectorAll('.vintage-tab').forEach(tab => {
        tab.addEventListener('click', e => {
          e.stopPropagation();
          const year = Number(tab.dataset.year);
          const vintage = wine.vintages.find(v => v.year === year);
          if (!vintage) return;
          acc.querySelectorAll('.vintage-tab').forEach(t => t.classList.toggle('active', t === tab));
          acc.querySelector('.rvf-score-display').innerHTML = `<span>RVF 점수</span><strong>${vintage.rvf_score}/20</strong>`;
          acc.querySelector('.critics-reviews').innerHTML = buildCriticReviews(vintage);
        });
      });
    });
  }

  // ── CLOSE MODAL ───────────────────────────────
  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ── OPEN MODAL FROM MAP ───────────────────────
  document.addEventListener('_openModal', e => {
    const domaine = DOMAINES_DATA.find(d => d.id === e.detail);
    if (domaine) openModal(domaine);
  });

  // ── CRITICS SECTION ───────────────────────────
  function renderCritics() {
    criticsGrid.innerHTML = Object.entries(CRITICS).map(([, c]) => `
      <div class="critic-card">
        <div class="critic-card-icon">${c.avatar}</div>
        <div class="critic-card-name">${c.name}</div>
        <div class="critic-card-pub">${c.publication}</div>
        <div class="critic-card-scale">평가 기준: ${c.scale}</div>
        <div class="critic-card-desc">${c.description}</div>
      </div>`).join('');
  }

  // ── STARS HTML ────────────────────────────────
  function renderStarsHtml(n) {
    const filled   = '★'.repeat(n);
    const unfilled = '☆'.repeat(Math.max(0, 4 - n));
    const cls = n === 4 ? 'star-filled-4' : n === 3 ? 'star-filled-3' : n === 2 ? 'star-filled-2' : 'star-filled-1';
    const badgeTxt = n === 4 ? '★★★★ 4 Stars' : n === 3 ? '★★★ 3 Stars' : n === 2 ? '★★ 2 Stars' : '★ 1 Star';
    return { stars: filled + unfilled, cls, badge: badgeTxt };
  }

  // expose for map.js
  window._renderStarsHtml = renderStarsHtml;
  window._openDomaineModal = (id) => {
    const d = DOMAINES_DATA.find(x => x.id === id);
    if (d) openModal(d);
  };

  // ── BIND EVENTS ───────────────────────────────
  function bindEvents() {
    searchInput.addEventListener('input', debounce(e => {
      currentSearch = e.target.value;
      renderDomaines();
    }, 200));

    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearch = '';
      renderDomaines();
      searchInput.focus();
    });

    document.querySelectorAll('.star-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.star-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentStarFilter = btn.dataset.stars;
        renderDomaines();
      });
    });

    regionFilter.addEventListener('change', e => { currentRegion = e.target.value; renderDomaines(); });
    typeFilter.addEventListener('change',   e => { currentType   = e.target.value; renderDomaines(); });
    sortFilter.addEventListener('change',   e => { currentSort   = e.target.value; renderDomaines(); });

    gridViewBtn.addEventListener('click', () => {
      isListView = false;
      wineGrid.classList.remove('list-view');
      gridViewBtn.classList.add('active');
      listViewBtn.classList.remove('active');
    });
    listViewBtn.addEventListener('click', () => {
      isListView = true;
      wineGrid.classList.add('list-view');
      listViewBtn.classList.add('active');
      gridViewBtn.classList.remove('active');
    });
  }

  function debounce(fn, delay) {
    let timer;
    return function (...args) { clearTimeout(timer); timer = setTimeout(() => fn.apply(this, args), delay); };
  }

  init();

})();
