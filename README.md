# 🍇 WineSearch Pro

> **La Revue du vin de France** 기반 프랑스 와인 탐색 프로그램
> RVF 가이드 ★★★ / ★★ / ★ 등급 직관적 검색 + 유수 평론가 평점 통합

---

## 📌 프로젝트 개요

**WineSearch Pro**는 프랑스 최고 권위의 와인 전문지
*La Revue du vin de France (RVF)* 의 스타 등급 시스템을 기반으로,
로버트 파커, 와인 스펙테이터, 제임스 서클링, 드캔터 등
세계 4대 평론가의 평점과 테이스팅 노트를 통합한 와인 검색 프로그램입니다.

---

## 🌐 라이브 데모

```
index.html 파일을 브라우저에서 열거나
GitHub Pages로 배포하여 사용하세요.
```

---

## ✨ 주요 기능

### 🔍 스마트 검색
- 와인 이름, 도멘, 지역, 아펠라시옹 통합 실시간 검색
- 디바운스 처리로 부드러운 검색 경험

### ⭐ RVF 등급 직관적 필터
| 등급 | 의미 | 기준 |
|------|------|------|
| ★★★ 3 Stars | 예외적 명작 | 프랑스 최고의 도멘, 세계 최정상급 와인 |
| ★★ 2 Stars  | 탁월한 품질 | 지역을 대표하는 최상위 생산자 |
| ★ 1 Star    | 우수한 품질 | 품질과 가성비를 겸비한 추천 생산자 |

### 🗺️ 다차원 필터링
- **지역 필터**: 보르도, 부르고뉴, 론, 루아르, 알자스, 샹파뉴 등
- **타입 필터**: 레드(Rouge), 화이트(Blanc), 스파클링(Effervescent)
- **정렬 옵션**: 등급순 · 이름순 · 최고평점순

### 📋 빈티지별 평론가 카드
각 와인 클릭 시 모달로:
- **빈티지 탭**: 여러 빈티지를 탭 전환으로 비교
- **RVF 점수**: /20 기준 블라인드 테이스팅 점수
- **4대 평론가 평점 + 테이스팅 노트**

### 🎨 그리드 / 리스트 뷰 전환
- 카드형 그리드 뷰와 콤팩트 리스트 뷰 지원

---

## 🍷 수록 와인 데이터 (RVF Guide 2026 기준)

### ★★★ 3 Stars (최고 등급)
| 와인 | 도멘 | 지역 |
|------|------|------|
| Romanée-Conti | Domaine de la Romanée-Conti | Bourgogne |
| La Tâche | Domaine de la Romanée-Conti | Bourgogne |
| Pétrus | Pétrus | Bordeaux (Pomerol) |
| Hermitage La Chapelle | Paul Jaboulet Aîné | Rhône Nord |
| Château Rayas | Château Rayas | Rhône Sud |
| Clos de Tart | Clos de Tart | Bourgogne |
| Chapoutier Ermitage L'Orée | M. Chapoutier | Rhône Nord |
| Domaine Duroché Chambertin GC | Domaine Duroché | Bourgogne *(2026 신규)* |
| Montrachet GC | Étienne Sauzet | Bourgogne *(2026 신규)* |
| Château Beauséjour Duffau | Château Beauséjour | Bordeaux *(2026 신규)* |
| Chartogne-Taillet | Chartogne-Taillet | Champagne *(2026 신규)* |
| Clos de la Roilette | Alain Coudert | Beaujolais *(2026 신규)* |

### ★★ 2 Stars
| 와인 | 도멘 | 지역 |
|------|------|------|
| Clos de la Roche GC | Domaine Dujac | Bourgogne |
| Musigny GC | Domaine Leroy | Bourgogne |
| Château Cheval Blanc | Château Cheval Blanc | Bordeaux |
| Château Léoville Las Cases | Château Léoville Las Cases | Bordeaux |
| Corton-Charlemagne GC | Bonneau du Martray | Bourgogne |
| Côte-Rôtie La Mouline | E. Guigal | Rhône Nord |
| Chablis GC Les Clos | Domaine Raveneau | Bourgogne |
| Vouvray Le Haut Lieu Moelleux | Domaine Huet | Loire |

### ★ 1 Star
| 와인 | 도멘 | 지역 |
|------|------|------|
| Sancerre Rouge Les Monts Damnés | Henri Bourgeois | Loire |
| Pouilly-Fumé Baron de L | De Ladoucette | Loire |
| Châteauneuf-du-Pape Blanc | Château Beaucastel | Rhône Sud |
| Gigondas Les Hautes Garrigues | Domaine Santa Duc | Rhône Sud |
| Alsace Riesling GC Schlossberg | Domaine Weinbach | Alsace |
| Gevrey-Chambertin Vieilles Vignes | Rossignol-Trapet | Bourgogne |
| Muscadet Sèvre et Maine Sur Lie | Domaine de la Pépière | Loire |
| Bandol Rouge | Domaine Tempier | Provence |

---

## 🏆 통합 평론가 정보

| 평론가 | 매체 | 평가 척도 |
|--------|------|-----------|
| 🍷 Robert Parker | Wine Advocate | 100점 만점 |
| 📰 Wine Spectator | Wine Spectator Magazine | 100점 만점 |
| 🏆 James Suckling | JamesSuckling.com | 100점 만점 |
| 🥇 Decanter | Decanter Magazine | 20점 만점 |

---

## 📂 파일 구조

```
winesearch-pro/
├── index.html          # 메인 UI
├── style.css           # 스타일시트 (CSS 변수 기반)
├── app.js              # 검색·필터·모달 로직
├── data/
│   └── wines.js        # 와인 데이터 + 평론가 정보
└── README.md
```

---

## 🔧 로컬 실행

```bash
# 별도 서버 불필요 — index.html을 직접 브라우저에서 열기
open index.html
# 또는 로컬 서버
npx serve .
```

---

## 📖 데이터 출처

- **[La Revue du vin de France (RVF)](https://www.larvf.com)** — 스타 등급 시스템, Guide des Meilleurs Vins de France 2026
- **Wine Advocate (Robert Parker)** — 100점 평점 및 테이스팅 노트
- **Wine Spectator** — 100점 평점 및 편집 리뷰
- **JamesSuckling.com** — 100점 평점 및 노트
- **Decanter Magazine** — 20점 평점 및 전문가 노트

---

## 📜 RVF 평가 기준

```
RVF 20점 만점 와인 점수
────────────────────────────────────
20/20   전설적 와인 (Légendaire)
17-19   탁월한 와인 (Exceptionnel)
15-16   우수한 와인 (Très bon)
12-14   양호한 와인 (Bon)
10-11   평범한 와인 (Correct)
 < 10   결함 있는 와인

RVF 도멘 스타 등급
────────────────────────────────────
★★★  최정상 생산자 (약 80여 곳)
★★   탁월한 생산자
★    우수한 생산자
     (전체 1,285개 선정 도멘 수록)
```

---

## 🤖 Built with

[Claude Code](https://claude.ai/claude-code) — Anthropic Claude Sonnet 4.6
