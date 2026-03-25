/* ================================================
   WineSearch Pro — App Logic
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
  let activeVintages    = {}; // { wineId: vintageYear }

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
    renderWines();
    bindEvents();
  }

  // ── BUILD REGION FILTER ────────────────────────
  function buildRegionFilter() {
    const regions = [...new Set(WINES_DATA.map(w => w.region))].sort();
    regions.forEach(r => {
      const opt = document.createElement('option');
      opt.value = r;
      opt.textContent = r;
      regionFilter.appendChild(opt);
    });
  }

  // ── STAR COUNT BADGES ─────────────────────────
  function renderCountBadges() {
    [1, 2, 3].forEach(s => {
      const el = document.getElementById(`count${s}`);
      if (el) el.textContent = WINES_DATA.filter(w => w.rvf_stars === s).length;
    });
  }

  // ── FILTER & SORT ─────────────────────────────
  function getFilteredWines() {
    let wines = [...WINES_DATA];

    // Star filter
    if (currentStarFilter !== 'all') {
      wines = wines.filter(w => w.rvf_stars === Number(currentStarFilter));
    }

    // Search
    if (currentSearch.trim()) {
      const q = currentSearch.trim().toLowerCase();
      wines = wines.filter(w =>
        w.name.toLowerCase().includes(q) ||
        w.domaine.toLowerCase().includes(q) ||
        w.region.toLowerCase().includes(q) ||
        w.appellation.toLowerCase().includes(q)
      );
    }

    // Region
    if (currentRegion !== 'all') {
      wines = wines.filter(w => w.region === currentRegion);
    }

    // Type
    if (currentType !== 'all') {
      wines = wines.filter(w => w.type === currentType);
    }

    // Sort
    wines.sort((a, b) => {
      switch (currentSort) {
        case 'stars_desc': return b.rvf_stars - a.rvf_stars;
        case 'stars_asc':  return a.rvf_stars - b.rvf_stars;
        case 'name_asc':   return a.name.localeCompare(b.name);
        case 'score_desc': {
          const aScore = getBestParkerScore(a);
          const bScore = getBestParkerScore(b);
          return bScore - aScore;
        }
        default: return 0;
      }
    });

    return wines;
  }

  function getBestParkerScore(wine) {
    const scores = wine.vintages.map(v => v.critics.parker?.score || 0);
    return Math.max(...scores);
  }

  function getLatestVintage(wine) {
    const vintages = [...wine.vintages].sort((a, b) => b.year - a.year);
    return vintages[0];
  }

  function getActiveVintage(wine) {
    const year = activeVintages[wine.id];
    if (year) return wine.vintages.find(v => v.year === year) || getLatestVintage(wine);
    return getLatestVintage(wine);
  }

  // ── RENDER WINES ──────────────────────────────
  function renderWines() {
    const wines = getFilteredWines();
    wineGrid.innerHTML = '';

    if (wines.length === 0) {
      noResults.classList.remove('hidden');
      resultsCount.textContent = '검색 결과 없음';
      return;
    }

    noResults.classList.add('hidden');
    resultsCount.textContent = `${wines.length}종 와인`;

    wines.forEach(wine => {
      const card = buildCard(wine);
      wineGrid.appendChild(card);
    });
  }

  // ── BUILD CARD ────────────────────────────────
  function buildCard(wine) {
    const vintage = getActiveVintage(wine);
    const card = document.createElement('div');
    card.className = 'wine-card';
    card.dataset.id = wine.id;

    const typeClass = `type-${wine.type.toLowerCase()}`;
    const barClass  = `bar-${wine.type.toLowerCase().replace(/\s/g, '-')}`;
    const badgeClass = `badge-${wine.rvf_stars}`;
    const starsHtml = renderStarsHtml(wine.rvf_stars);

    const scores = buildScoreChips(vintage);

    card.innerHTML = `
      <div class="card-color-bar ${barClass}"></div>
      <div class="card-star-badge ${badgeClass}">${starsHtml.badge}</div>
      <div class="card-body">
        <div class="card-appellation">${wine.appellation}</div>
        <div class="card-name">${wine.name}</div>
        <div class="card-domaine">${wine.domaine}</div>
        <div class="card-stars-row">
          <span class="rvf-label">RVF</span>
          <span class="stars-display ${starsHtml.cls}">${starsHtml.stars}</span>
        </div>
        <div class="card-meta">
          <span class="meta-tag">${wine.region}</span>
          <span class="meta-tag ${typeClass}">${wine.type}</span>
          <span class="meta-tag">빈티지 ${vintage.year}</span>
        </div>
        <div class="card-scores">${scores}</div>
      </div>`;

    card.addEventListener('click', () => openModal(wine));
    return card;
  }

  function buildScoreChips(vintage) {
    if (!vintage) return '';
    const c = vintage.critics;
    return [
      { key: 'parker', label: 'Parker', score: c.parker?.score },
      { key: 'wine_spectator', label: 'WS', score: c.wine_spectator?.score },
      { key: 'suckling', label: 'Suckling', score: c.suckling?.score },
      { key: 'decanter', label: 'Decanter', score: c.decanter?.score }
    ].map(({ label, score }) => {
      if (!score) return '';
      const cls = score >= 100 ? 'perfect' : score >= 95 ? 'excellent' : '';
      return `<div class="score-chip">
        <span class="score-critic">${label}</span>
        <span class="score-value ${cls}">${score}</span>
      </div>`;
    }).join('');
  }

  function renderStarsHtml(n) {
    const filled   = '★'.repeat(n);
    const unfilled = '☆'.repeat(3 - n);
    const cls = n === 3 ? 'star-filled-3' : n === 2 ? 'star-filled-2' : 'star-filled-1';
    const badgeTxt = n === 3 ? '★★★ 3 Stars' : n === 2 ? '★★ 2 Stars' : '★ 1 Star';
    return { stars: filled + unfilled, cls, badge: badgeTxt };
  }

  // ── MODAL ─────────────────────────────────────
  function openModal(wine) {
    const vintage = getActiveVintage(wine);
    modalContent.innerHTML = buildModalHtml(wine, vintage);
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    // Vintage tab listeners
    modalContent.querySelectorAll('.vintage-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        activeVintages[wine.id] = Number(tab.dataset.year);
        const newVintage = getActiveVintage(wine);
        const reviewsEl = modalContent.querySelector('.critics-reviews');
        const rvfEl     = modalContent.querySelector('.rvf-score-display');
        reviewsEl.innerHTML = buildCriticReviews(newVintage);
        rvfEl.innerHTML     = `<span>RVF 점수</span><strong>${newVintage.rvf_score}/20</strong>`;
        modalContent.querySelectorAll('.vintage-tab').forEach(t => t.classList.toggle('active', Number(t.dataset.year) === newVintage.year));
      });
    });
  }

  function buildModalHtml(wine, vintage) {
    const starsHtml = renderStarsHtml(wine.rvf_stars);
    const vintageTabsHtml = wine.vintages
      .sort((a, b) => b.year - a.year)
      .map(v => `<button class="vintage-tab ${v.year === vintage.year ? 'active' : ''}" data-year="${v.year}">${v.year}</button>`)
      .join('');

    return `
      <div class="modal-header">
        <div class="modal-badge-row">
          <span class="modal-appellation">${wine.appellation}</span>
          <span class="meta-tag type-${wine.type.toLowerCase()}">${wine.type}</span>
        </div>
        <div class="modal-name">${wine.name}</div>
        <div class="modal-domaine">${wine.domaine} · ${wine.region}</div>
        <div class="modal-rvf-stars ${starsHtml.cls}">${starsHtml.stars}</div>
        <div class="modal-description">${wine.description}</div>
      </div>
      <div class="modal-body">
        <h3 class="modal-section-title">빈티지 선택</h3>
        <div class="vintage-tabs">${vintageTabsHtml}</div>

        <div class="rvf-score-display">
          <span>RVF 점수</span>
          <strong>${vintage.rvf_score}/20</strong>
        </div>

        <h3 class="modal-section-title">평론가 평점 & 테이스팅 노트</h3>
        <div class="critics-reviews">${buildCriticReviews(vintage)}</div>
      </div>`;
  }

  function buildCriticReviews(vintage) {
    if (!vintage) return '';
    const mapping = [
      { key: 'parker',         info: CRITICS.parker },
      { key: 'wine_spectator', info: CRITICS.wine_spectator },
      { key: 'suckling',       info: CRITICS.suckling },
      { key: 'decanter',       info: CRITICS.decanter }
    ];
    return mapping.map(({ key, info }) => {
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

  // ── CLOSE MODAL ───────────────────────────────
  function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  // ── OPEN MODAL FROM MAP ───────────────────────
  document.addEventListener('_openModal', e => { openModal(e.detail); });

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

  // ── BIND EVENTS ───────────────────────────────
  function bindEvents() {
    // Search input
    searchInput.addEventListener('input', debounce(e => {
      currentSearch = e.target.value;
      renderWines();
    }, 200));

    // Clear
    clearBtn.addEventListener('click', () => {
      searchInput.value = '';
      currentSearch = '';
      renderWines();
      searchInput.focus();
    });

    // Star filter buttons
    document.querySelectorAll('.star-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.star-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentStarFilter = btn.dataset.stars;
        renderWines();
      });
    });

    // Region filter
    regionFilter.addEventListener('change', e => {
      currentRegion = e.target.value;
      renderWines();
    });

    // Type filter
    typeFilter.addEventListener('change', e => {
      currentType = e.target.value;
      renderWines();
    });

    // Sort
    sortFilter.addEventListener('change', e => {
      currentSort = e.target.value;
      renderWines();
    });

    // View toggle
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

  // ── UTILS ─────────────────────────────────────
  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // ── START ─────────────────────────────────────
  init();

})();
