/* ================================================
   WineSearch Pro — Map (Leaflet.js)
   프랑스 와이너리 지도 — 지역/마을 단위 줌
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
      if (target === 'map') {
        initMap();
      }
    });
  });

  // ── INIT MAP ──────────────────────────────────
  function initMap() {
    if (map) {
      // Already initialized — just invalidate size (panel was hidden)
      setTimeout(() => { map.invalidateSize(); }, 100);
      return;
    }

    // France-centered, wine-region zoom level
    map = L.map('leafletMap', {
      center: [46.7, 2.3],
      zoom: 6,
      minZoom: 5,
      maxZoom: 14
    });

    // OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    }).addTo(map);

    buildMapFilters();
    renderMarkers();
  }

  // ── BUILD SIDEBAR FILTERS ─────────────────────
  function buildMapFilters() {
    // Region
    const regionSel = document.getElementById('mapRegionFilter');
    const regions = [...new Set(WINES_DATA.map(w => w.region))].sort();
    regions.forEach(r => {
      const opt = document.createElement('option');
      opt.value = r; opt.textContent = r;
      regionSel.appendChild(opt);
    });

    // Star buttons
    document.querySelectorAll('.map-star-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.map-star-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        mapStarFilter = btn.dataset.mstars;
        renderMarkers();
      });
    });

    document.getElementById('mapTypeFilter').addEventListener('change', e => {
      mapTypeFilter = e.target.value;
      renderMarkers();
    });

    regionSel.addEventListener('change', e => {
      mapRegionFilter = e.target.value;
      renderMarkers();
    });
  }

  // ── RENDER MARKERS ────────────────────────────
  function renderMarkers() {
    // Clear existing
    markers.forEach(m => map.removeLayer(m));
    markers = [];

    const filtered = WINES_DATA.filter(w => {
      if (mapStarFilter !== 'all' && w.rvf_stars !== Number(mapStarFilter)) return false;
      if (mapTypeFilter !== 'all' && w.type !== mapTypeFilter) return false;
      if (mapRegionFilter !== 'all' && w.region !== mapRegionFilter) return false;
      if (!WINE_COORDS[w.id]) return false;
      return true;
    });

    document.getElementById('mapCount').textContent = `와이너리 ${filtered.length}곳`;

    filtered.forEach(wine => {
      const coord = WINE_COORDS[wine.id];
      const icon = makeIcon(wine);
      const marker = L.marker([coord.lat, coord.lng], { icon })
        .addTo(map)
        .bindPopup(makePopupHtml(wine, coord), { maxWidth: 220, className: 'wine-leaflet-popup' });

      // Popup button → open detail modal
      marker.on('popupopen', () => {
        const btn = document.querySelector('.map-popup-btn[data-id="' + wine.id + '"]');
        if (btn) {
          btn.addEventListener('click', () => {
            marker.closePopup();
            // Trigger the main app's modal via custom event
            document.dispatchEvent(new CustomEvent('openWineModal', { detail: wine.id }));
          });
        }
      });

      markers.push(marker);
    });
  }

  // ── CUSTOM MARKER ICON ────────────────────────
  function makeIcon(wine) {
    const starColors = { 3: '#C9A84C', 2: '#9B9B9B', 1: '#B87333' };
    const typeColors = { Rouge: '#6B1A2A', Blanc: '#A89030', Effervescent: '#3A8FC0' };

    const borderColor = starColors[wine.rvf_stars] || '#888';
    const fillColor   = typeColors[wine.type] || '#888';
    const size = wine.rvf_stars === 3 ? 36 : wine.rvf_stars === 2 ? 30 : 24;

    const stars = '★'.repeat(wine.rvf_stars) + '☆'.repeat(3 - wine.rvf_stars);
    const fontSize = wine.rvf_stars === 3 ? 8 : 7;

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size + 8}" viewBox="0 0 ${size} ${size + 8}">
        <circle cx="${size/2}" cy="${size/2}" r="${size/2 - 2}" fill="${fillColor}" stroke="${borderColor}" stroke-width="2.5"/>
        <text x="${size/2}" y="${size/2 + 4}" text-anchor="middle" fill="white" font-size="13" font-family="serif">🍷</text>
        <polygon points="${size/2},${size+8} ${size/2-5},${size+1} ${size/2+5},${size+1}" fill="${fillColor}"/>
      </svg>`;

    return L.divIcon({
      html: `<div style="position:relative">
        <div style="
          width:${size}px; height:${size}px;
          background:${fillColor};
          border:2.5px solid ${borderColor};
          border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);
          box-shadow:0 2px 8px rgba(0,0,0,0.35);
        "></div>
        <div style="
          position:absolute;
          top:${size*0.1}px; left:${size*0.1}px;
          width:${size*0.8}px; height:${size*0.8}px;
          display:flex; align-items:center; justify-content:center;
          font-size:${size*0.42}px;
        ">🍷</div>
      </div>`,
      iconSize: [size, size],
      iconAnchor: [size/2, size],
      popupAnchor: [0, -size],
      className: ''
    });
  }

  // ── POPUP HTML ────────────────────────────────
  function makePopupHtml(wine, coord) {
    const starsLabel = { 3: '★★★ 3 Stars', 2: '★★ 2 Stars', 1: '★ 1 Star' };
    const starClass  = `map-popup-stars-${wine.rvf_stars}`;

    const vintage = [...wine.vintages].sort((a, b) => b.year - a.year)[0];
    const parkerScore = vintage?.critics?.parker?.score;

    return `<div class="map-popup">
      <div class="map-popup-name">${wine.name}</div>
      <div class="map-popup-domaine">${wine.domaine}</div>
      <div class="map-popup-meta">
        <span class="map-popup-tag ${starClass}">${starsLabel[wine.rvf_stars]}</span>
        <span class="map-popup-tag" style="background:#f5f0e8;border:1px solid #ddd;color:#555">${wine.type}</span>
      </div>
      <div class="map-popup-place">📍 ${coord.place}</div>
      <div class="map-popup-place" style="margin-top:4px">🍾 ${wine.appellation}</div>
      ${parkerScore ? `<div class="map-popup-place" style="margin-top:4px">🍷 Parker ${parkerScore}pts (${vintage.year})</div>` : ''}
      <button class="map-popup-btn" data-id="${wine.id}">상세 정보 보기</button>
    </div>`;
  }

  // ── LISTEN FOR MODAL OPEN FROM MAP ────────────
  document.addEventListener('openWineModal', e => {
    const wine = WINES_DATA.find(w => w.id === e.detail);
    if (wine) {
      // Switch to search tab visually isn't needed — just open modal
      document.dispatchEvent(new CustomEvent('_openModal', { detail: wine }));
    }
  });

})();
