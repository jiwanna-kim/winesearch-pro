/* ================================================
   WineSearch Pro — Map (Leaflet.js, Domaine-centric)
   ================================================ */

(function () {
  'use strict';

  let map = null;
  let markers = [];
  let mapStarFilter   = 'all';
  let mapTypeFilter   = 'all';
  let mapRegionFilter = 'all';

  // ── TAB SWITCHING ─────────────────────────────
  document.querySelectorAll('.main-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;
      document.querySelectorAll('.main-tab').forEach(t => t.classList.toggle('active', t === tab));
      document.querySelectorAll('.tab-panel').forEach(p => {
        p.classList.toggle('active', p.id === `tab-${target}`);
        p.classList.toggle('hidden', p.id !== `tab-${target}`);
      });
      if (target === 'map') initMap();
    });
  });

  // ── INIT MAP ──────────────────────────────────
  function initMap() {
    if (map) { setTimeout(() => map.invalidateSize(), 100); return; }

    map = L.map('leafletMap', { center: [46.7, 2.3], zoom: 6, minZoom: 5, maxZoom: 14 });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    }).addTo(map);

    buildMapFilters();
    renderMarkers();
  }

  // ── BUILD SIDEBAR FILTERS ─────────────────────
  function buildMapFilters() {
    const regionSel = document.getElementById('mapRegionFilter');
    const regions = [...new Set(DOMAINES_DATA.map(d => d.region))].sort();
    regions.forEach(r => {
      const opt = document.createElement('option');
      opt.value = r; opt.textContent = r;
      regionSel.appendChild(opt);
    });

    document.querySelectorAll('.map-star-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.map-star-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        mapStarFilter = btn.dataset.mstars;
        renderMarkers();
      });
    });
    document.getElementById('mapTypeFilter').addEventListener('change', e => { mapTypeFilter = e.target.value; renderMarkers(); });
    regionSel.addEventListener('change', e => { mapRegionFilter = e.target.value; renderMarkers(); });
  }

  // ── RENDER MARKERS ────────────────────────────
  function renderMarkers() {
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    const filtered = DOMAINES_DATA.filter(d => {
      if (mapStarFilter !== 'all' && d.rvf_stars !== Number(mapStarFilter)) return false;
      if (mapTypeFilter !== 'all' && !d.type_tags.includes(mapTypeFilter)) return false;
      if (mapRegionFilter !== 'all' && d.region !== mapRegionFilter) return false;
      if (!d.coords) return false;
      return true;
    });

    document.getElementById('mapCount').textContent = `도멘 ${filtered.length}곳`;

    filtered.forEach(domaine => {
      const { lat, lng } = domaine.coords;
      const icon = makeIcon(domaine);
      const marker = L.marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(makePopupHtml(domaine), { maxWidth: 230, className: 'wine-leaflet-popup' });

      marker.on('popupopen', () => {
        const btn = document.querySelector(`.map-popup-btn[data-id="${domaine.id}"]`);
        if (btn) btn.addEventListener('click', () => {
          marker.closePopup();
          if (window._openDomaineModal) window._openDomaineModal(domaine.id);
        });
      });

      markers.push(marker);
    });
  }

  // ── CUSTOM MARKER ICON ────────────────────────
  function makeIcon(domaine) {
    const starColors  = { 4: '#7B5EA7', 3: '#C9A84C', 2: '#9B9B9B', 1: '#B87333' };
    const typeColors  = { Rouge: '#6B1A2A', Blanc: '#A89030', Effervescent: '#3A8FC0', Rosé: '#E8799A' };
    const borderColor = starColors[domaine.rvf_stars] || '#888';
    const fillColor   = typeColors[domaine.type_tags[0]] || '#888';
    const size = domaine.rvf_stars === 4 ? 44 : domaine.rvf_stars === 3 ? 36 : domaine.rvf_stars === 2 ? 30 : 24;
    const emoji = domaine.type_tags[0] === 'Blanc' ? '🥂' : domaine.type_tags[0] === 'Effervescent' ? '🍾' : '🍷';

    return L.divIcon({
      html: `<div style="position:relative;width:${size}px;height:${size}px">
        <div style="
          width:${size}px;height:${size}px;
          background:${fillColor};
          border:2.5px solid ${borderColor};
          border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);
          box-shadow:0 2px 8px rgba(0,0,0,.35);
        "></div>
        <div style="
          position:absolute;top:${size*.08}px;left:${size*.08}px;
          width:${size*.84}px;height:${size*.84}px;
          display:flex;align-items:center;justify-content:center;
          font-size:${size*.42}px;
        ">${emoji}</div>
      </div>`,
      iconSize: [size, size],
      iconAnchor: [size / 2, size],
      popupAnchor: [0, -size],
      className: ''
    });
  }

  // ── POPUP HTML ────────────────────────────────
  function makePopupHtml(domaine) {
    const starsLabel = { 4: '★★★★ 4 Stars', 3: '★★★ 3 Stars', 2: '★★ 2 Stars', 1: '★ 1 Star' };
    const starClass  = `map-popup-stars-${domaine.rvf_stars}`;
    const topWine    = domaine.wines[0];
    const latestV    = topWine ? [...topWine.vintages].sort((a,b)=>b.year-a.year)[0] : null;

    return `<div class="map-popup">
      <div class="map-popup-name">${domaine.name}</div>
      <div class="map-popup-domaine">${domaine.region} · ${domaine.village}</div>
      <div class="map-popup-meta">
        <span class="map-popup-tag ${starClass}">${starsLabel[domaine.rvf_stars]}</span>
        ${domaine.type_tags.map(t =>
          `<span class="map-popup-tag" style="background:#f5f0e8;border:1px solid #ddd;color:#555">${t}</span>`
        ).join('')}
      </div>
      <div class="map-popup-place">📍 ${domaine.coords.place}</div>
      <div class="map-popup-place" style="margin-top:4px">🍾 와인 ${domaine.wines.length}종</div>
      ${latestV ? `<div class="map-popup-place" style="margin-top:4px">🍷 Parker ${latestV.critics.parker?.score}pts (${latestV.year})</div>` : ''}
      <button class="map-popup-btn" data-id="${domaine.id}">도멘 상세 보기</button>
    </div>`;
  }

})();
