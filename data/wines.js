const WINES_DATA = [

  // ===== 3 STARS =====

  {
    id: 1,
    name: "Romanée-Conti",
    domaine: "Domaine de la Romanée-Conti",
    region: "Bourgogne",
    appellation: "Romanée-Conti Grand Cru",
    type: "Rouge",
    rvf_stars: 3,
    vintages: [
      {
        year: 2018,
        rvf_score: 20,
        critics: {
          parker: { score: 100, note: "The 2018 Romanée-Conti is breathtaking. Layers of red and black fruits, violets, spice, and forest floor with extraordinary depth and precision. A wine for the ages." },
          wine_spectator: { score: 99, note: "Transcendent. Pure elegance with exceptional complexity, silky tannins and a finish that lasts minutes." },
          suckling: { score: 100, note: "Perfection. One of the greatest wines I've ever tasted. Gorgeous red fruit, earth and spice." },
          decanter: { score: 20, note: "Sublime. A wine that redefines what Pinot Noir can achieve. Extraordinary purity and length." }
        }
      },
      {
        year: 2015,
        rvf_score: 20,
        critics: {
          parker: { score: 100, note: "Extraordinary vintage for DRC. Rich, concentrated yet precise with remarkable aromatic complexity." },
          wine_spectator: { score: 99, note: "Benchmark Burgundy. Complex and multi-layered with stunning freshness." },
          suckling: { score: 99, note: "Incredible depth and richness balanced by luminous acidity." },
          decanter: { score: 20, note: "Classic and age-worthy. Shows the full potential of this legendary terroir." }
        }
      }
    ],
    description: "세계에서 가장 희귀하고 비싼 와인. 부르고뉴 코트 드 뉘의 1.8헥타르 단일 포도밭에서 생산되는 전설적인 그랑 크뤼."
  },

  {
    id: 2,
    name: "La Tâche",
    domaine: "Domaine de la Romanée-Conti",
    region: "Bourgogne",
    appellation: "La Tâche Grand Cru",
    type: "Rouge",
    rvf_stars: 3,
    vintages: [
      {
        year: 2019,
        rvf_score: 20,
        critics: {
          parker: { score: 99, note: "Magnificent. Dark cherry, rose petals, and earth mingle with astonishing complexity and a stunning 90-second finish." },
          wine_spectator: { score: 98, note: "Pure and precise with exceptional depth. A benchmark for the appellation." },
          suckling: { score: 99, note: "Almost perfect. The 2019 La Tâche is a hauntingly beautiful wine." },
          decanter: { score: 20, note: "Profound terroir expression. One of the wines of the vintage." }
        }
      },
      {
        year: 2017,
        rvf_score: 19,
        critics: {
          parker: { score: 97, note: "Elegant and fresh, with raspberry, cherry and spice notes on a long, velvety finish." },
          wine_spectator: { score: 96, note: "Vibrant and complex, with great aging potential." },
          suckling: { score: 98, note: "Brilliant purity with silky tannins and great length." },
          decanter: { score: 19, note: "Refined and precise. Shows the elegance of the vintage." }
        }
      }
    ],
    description: "6헥타르 규모의 DRC 독점 그랑 크뤼. 복잡하고 풍성하며 우아한 구조를 지닌 부르고뉴의 아이콘."
  },

  {
    id: 3,
    name: "Pétrus",
    domaine: "Pétrus",
    region: "Bordeaux",
    appellation: "Pomerol",
    type: "Rouge",
    rvf_stars: 3,
    vintages: [
      {
        year: 2021,
        rvf_score: 19,
        critics: {
          parker: { score: 98, note: "Extraordinary Pomerol. Pure Merlot at its finest—chocolate, truffle, and plum with velvety texture and impeccable balance." },
          wine_spectator: { score: 97, note: "Rich and voluptuous, with layers of fruit, earth, and mineral complexity." },
          suckling: { score: 99, note: "A masterpiece of Pomerol. Silky, rich and endlessly complex." },
          decanter: { score: 20, note: "The greatest Pétrus in decades. Outstanding concentration with perfect balance." }
        }
      },
      {
        year: 2018,
        rvf_score: 20,
        critics: {
          parker: { score: 100, note: "A perfect wine. Pure nectar—cassis, truffle, iron, chocolate in a symphony of flavors that keeps evolving for minutes." },
          wine_spectator: { score: 99, note: "Profound. An extraordinary expression of Pomerol's blue clay." },
          suckling: { score: 100, note: "The wine of the vintage in Pomerol. Flawless in every way." },
          decanter: { score: 20, note: "Exceptional. Concentrated, layered, and perfectly structured for decades of aging." }
        }
      }
    ],
    description: "포므롤의 왕. 100% 메를로로 만들어지는 세계에서 가장 비싼 와인 중 하나. 뽀므롤의 푸른 점토 토양에서 탄생하는 전설."
  },

  {
    id: 4,
    name: "Château Pichon-Longueville Comtesse de Lalande",
    domaine: "Château Pichon-Longueville Comtesse de Lalande",
    region: "Bordeaux",
    appellation: "Pauillac 2ème Grand Cru Classé",
    type: "Rouge",
    rvf_stars: 3,
    vintages: [
      {
        year: 2022,
        rvf_score: 19,
        critics: {
          parker: { score: 98, note: "Brilliant 2022. Blackcurrant, cedar, and tobacco with exceptional depth and a polished, lingering finish." },
          wine_spectator: { score: 97, note: "Elegant and complex with great aging potential. Benchmark Pauillac." },
          suckling: { score: 98, note: "Stunning depth and precision. One of the wines of the vintage." },
          decanter: { score: 19, note: "Classic Pichon style with the generosity of the 2022 vintage." }
        }
      }
    ],
    description: "포이약 2등급 샤토 중 최고의 평가를 받는 샤토. 우아함과 힘의 완벽한 조화로 '슈퍼 세컨드'의 대표주자."
  },

  {
    id: 5,
    name: "Hermitage La Chapelle",
    domaine: "Paul Jaboulet Aîné",
    region: "Rhône Nord",
    appellation: "Hermitage AOC",
    type: "Rouge",
    rvf_stars: 3,
    vintages: [
      {
        year: 2019,
        rvf_score: 19,
        critics: {
          parker: { score: 98, note: "The 2019 La Chapelle is extraordinary. Massive dark fruits, smoked meat, olive, and pepper with extraordinary concentration and a 60-second finish." },
          wine_spectator: { score: 96, note: "Powerful and rich with exceptional structure. Will need 15+ years to fully open." },
          suckling: { score: 97, note: "Incredible depth and complexity. A benchmark for the appellation." },
          decanter: { score: 19, note: "Majestic expression of the Hermitage hill. Dense and layered." }
        }
      },
      {
        year: 2015,
        rvf_score: 20,
        critics: {
          parker: { score: 100, note: "One of the greatest La Chapelles ever made. Inky, dense, and extraordinarily complex—a reference point for the Northern Rhône." },
          wine_spectator: { score: 98, note: "Profound and age-worthy. The greatest Jaboulet in decades." },
          suckling: { score: 99, note: "Perfect Syrah. Rich, deep and complex with extraordinary aging potential." },
          decanter: { score: 20, note: "A landmark wine. The 2015 La Chapelle will be remembered for generations." }
        }
      }
    ],
    description: "에르미타주 언덕 위 예배당이름을 딴 폴 자불레 에네의 플래그십 와인. 시라 품종의 정점을 보여주는 론 북부의 전설."
  },

  {
    id: 6,
    name: "Château Rayas",
    domaine: "Château Rayas",
    region: "Rhône Sud",
    appellation: "Châteauneuf-du-Pape AOC",
    type: "Rouge",
    rvf_stars: 3,
    vintages: [
      {
        year: 2020,
        rvf_score: 20,
        critics: {
          parker: { score: 100, note: "Possibly the greatest Rayas ever. Pure Grenache nirvana—raspberry, cherry, kirsch, and exotic spices in perfect harmony with extraordinary length." },
          wine_spectator: { score: 99, note: "Ethereal. Pure and complex with stunning aromatic depth and a seemingly endless finish." },
          suckling: { score: 100, note: "Transcendent. The 2020 Rayas is everything you dream of in a great wine." },
          decanter: { score: 20, note: "A mythic wine from a mythic property. Château Rayas at its absolute peak." }
        }
      },
      {
        year: 2019,
        rvf_score: 19,
        critics: {
          parker: { score: 97, note: "Brilliant Rayas with pure Grenache character—light color but immense depth and complexity on the palate." },
          wine_spectator: { score: 96, note: "Complex and layered with great structure for aging." },
          suckling: { score: 98, note: "Another exceptional Rayas. Elegant yet profound." },
          decanter: { score: 19, note: "Classic Rayas style—deceptively light but remarkably complex." }
        }
      }
    ],
    description: "샤토뇌프 뒤 파프의 전설. 100% 그르나슈로 만들어지는 이 와인은 그 신비로운 품질로 세계 최고의 와인 컬렉터들을 매료시킨다."
  },

  {
    id: 7,
    name: "Clos de Tart",
    domaine: "Clos de Tart",
    region: "Bourgogne",
    appellation: "Morey-Saint-Denis Grand Cru",
    type: "Rouge",
    rvf_stars: 3,
    vintages: [
      {
        year: 2020,
        rvf_score: 19,
        critics: {
          parker: { score: 97, note: "Exceptional under new ownership. Precise, complex Burgundy with beautiful red fruit, earthy notes, and exceptional length." },
          wine_spectator: { score: 97, note: "Brilliant. The new regime has transformed this historic monopole." },
          suckling: { score: 98, note: "Stunning precision and depth. One of the finest Clos de Tarts ever made." },
          decanter: { score: 19, note: "A triumphant return to form. Benchmark Morey-Saint-Denis." }
        }
      }
    ],
    description: "모레 생 드니의 7.5헥타르 독점 그랑 크뤼. 피노누아의 섬세함과 힘의 완벽한 균형을 자랑하는 부르고뉴의 명작."
  },

  {
    id: 8,
    name: "Gevrey-Chambertin Lavaux Saint-Jacques",
    domaine: "Domaine Rossignol-Trapet",
    region: "Bourgogne",
    appellation: "Gevrey-Chambertin 1er Cru",
    type: "Rouge",
    rvf_stars: 3,
    vintages: [
      {
        year: 2021,
        rvf_score: 18,
        critics: {
          parker: { score: 93, note: "Elegant and precise with cherry, earth and spice on a silky frame. Excellent 2021." },
          wine_spectator: { score: 94, note: "Complex and well-structured. Shows the character of Lavaux beautifully." },
          suckling: { score: 94, note: "Superb freshness and precision. A benchmark 2021 Gevrey." },
          decanter: { score: 18, note: "Classic and refined. Excellent expression of the premier cru terroir." }
        }
      }
    ],
    description: "주브레-샹베르탱 최고의 1등급 포도밭 중 하나. 강건함과 우아함을 겸비한 피노 누아의 정수."
  },

  {
    id: 9,
    name: "Domaine Duroché Chambertin Grand Cru",
    domaine: "Domaine Duroché",
    region: "Bourgogne",
    appellation: "Chambertin Grand Cru",
    type: "Rouge",
    rvf_stars: 3,
    vintages: [
      {
        year: 2022,
        rvf_score: 19,
        critics: {
          parker: { score: 96, note: "New RVF 3-star producer delivering superb Chambertin. Rich, dark and complex with impeccable terroir expression." },
          wine_spectator: { score: 95, note: "Exceptional depth and precision. One of the stars of the vintage." },
          suckling: { score: 97, note: "Brilliant winemaking from a newly crowned 3-star domain." },
          decanter: { score: 18, note: "Commanding presence. The elevation to 3 stars is fully justified." }
        }
      }
    ],
    description: "2026 RVF 가이드에서 새롭게 3스타로 승격된 도멘. 제브레-샹베르탱 그랑 크뤼의 완벽한 표현."
  },

  {
    id: 10,
    name: "Montrachet Grand Cru",
    domaine: "Étienne Sauzet",
    region: "Bourgogne",
    appellation: "Montrachet Grand Cru",
    type: "Blanc",
    rvf_stars: 3,
    vintages: [
      {
        year: 2021,
        rvf_score: 19,
        critics: {
          parker: { score: 96, note: "Stunning Montrachet from a newly crowned 3-star producer. Mineral, citrus and toasty oak in perfect balance with phenomenal length." },
          wine_spectator: { score: 97, note: "Grand Cru excellence at its finest. Etienne Sauzet's Montrachet is benchmark white Burgundy." },
          suckling: { score: 97, note: "Extraordinary purity and precision. The 2026 RVF 3-star promotion is well deserved." },
          decanter: { score: 19, note: "Magnificent. Superb mineral expression with outstanding aging potential." }
        }
      }
    ],
    description: "2026 RVF 3스타로 새롭게 선정된 에티엔 소제. 몽라셰 그랑 크뤼에서 생산하는 화이트 부르고뉴의 최정점."
  },

  {
    id: 11,
    name: "Château Beauséjour Duffau-Lagarrosse",
    domaine: "Château Beauséjour J. Duffau-Lagarrosse",
    region: "Bordeaux",
    appellation: "Saint-Émilion Grand Cru Classé A",
    type: "Rouge",
    rvf_stars: 3,
    vintages: [
      {
        year: 2022,
        rvf_score: 19,
        critics: {
          parker: { score: 98, note: "Magnificent return to form. Rich, concentrated and complex with exceptional terroir expression from the limestone plateau." },
          wine_spectator: { score: 96, note: "Outstanding. One of the finest Beauséjour Duffau-Lagarrosse in memory." },
          suckling: { score: 98, note: "Superb 2022. Rich and complex with brilliant potential." },
          decanter: { score: 19, note: "2026 RVF 3-star promotion fully justified. Exceptional quality." }
        }
      }
    ],
    description: "2026 RVF 가이드에서 3스타로 승격. 생테밀리옹 석회암 대지 위에서 탄생하는 보르도 우안의 보석."
  },

  {
    id: 12,
    name: "Chartogne-Taillet Cuvée Sainte-Anne",
    domaine: "Chartogne-Taillet",
    region: "Champagne",
    appellation: "Champagne AOC",
    type: "Effervescent",
    rvf_stars: 3,
    vintages: [
      {
        year: 2018,
        rvf_score: 18,
        critics: {
          parker: { score: 94, note: "Brilliant grower Champagne with outstanding complexity and character. Shows why Chartogne-Taillet deserves 3-star status." },
          wine_spectator: { score: 93, note: "Exceptional depth and minerality. Benchmark grower Champagne." },
          suckling: { score: 95, note: "Outstanding. One of the finest grower Champagnes available." },
          decanter: { score: 18, note: "Magnificent terroir expression. The 2026 RVF 3-star promotion is deserved." }
        }
      }
    ],
    description: "2026 RVF 3스타 승격. 샤르통-타이에는 샹파뉴 레꼴뒤 뒤 그랑 크뤼 테루아를 보여주는 탁월한 레콜탕 마니퓔랑."
  },

  // ===== 2 STARS =====

  {
    id: 13,
    name: "Clos de la Roche Grand Cru",
    domaine: "Domaine Dujac",
    region: "Bourgogne",
    appellation: "Clos de la Roche Grand Cru",
    type: "Rouge",
    rvf_stars: 2,
    vintages: [
      {
        year: 2020,
        rvf_score: 18,
        critics: {
          parker: { score: 94, note: "Typical Dujac elegance with whole-cluster complexity. Red fruits, earth and spice on a silky, precise frame." },
          wine_spectator: { score: 95, note: "Elegant and complex. Dujac's signature style shines in this grand cru." },
          suckling: { score: 95, note: "Beautiful precision and depth. Outstanding Clos de la Roche." },
          decanter: { score: 18, note: "Quintessential Dujac—complex, fragrant and age-worthy." }
        }
      }
    ],
    description: "도멘 뒤자크의 시그니처 와인. 홀 클러스터 양조 방식으로 만들어지는 섬세하고 복잡한 그랑 크뤼."
  },

  {
    id: 14,
    name: "Musigny Grand Cru",
    domaine: "Domaine Leroy",
    region: "Bourgogne",
    appellation: "Musigny Grand Cru",
    type: "Rouge",
    rvf_stars: 2,
    vintages: [
      {
        year: 2019,
        rvf_score: 19,
        critics: {
          parker: { score: 98, note: "Lalou Bize-Leroy's Musigny is other-worldly. Pure, precise, and hauntingly beautiful with extraordinary concentration and finesse." },
          wine_spectator: { score: 97, note: "Astonishing depth and complexity. One of the finest wines in Burgundy." },
          suckling: { score: 98, note: "Magnificent. Domaine Leroy Musigny is one of the great wines of the world." },
          decanter: { score: 19, note: "Transcendent Burgundy. Every sip reveals new layers of complexity." }
        }
      }
    ],
    description: "도멘 르로이의 뮈지니. 비오다이나미 농법으로 재배되는 최고의 부르고뉴 그랑 크뤼 중 하나."
  },

  {
    id: 15,
    name: "Château Cheval Blanc",
    domaine: "Château Cheval Blanc",
    region: "Bordeaux",
    appellation: "Saint-Émilion 1er Grand Cru Classé A",
    type: "Rouge",
    rvf_stars: 2,
    vintages: [
      {
        year: 2021,
        rvf_score: 18,
        critics: {
          parker: { score: 96, note: "The 2021 Cheval Blanc is supple, refined and elegant with cassis, graphite and floral notes. A beautiful, precise wine." },
          wine_spectator: { score: 95, note: "Refined and complex. Shows the elegance and sophistication of Cheval Blanc." },
          suckling: { score: 96, note: "Exceptional. Pure and precise with wonderful aromatic complexity." },
          decanter: { score: 18, note: "Elegant and complex. The classic Cheval Blanc character shines through." }
        }
      },
      {
        year: 2018,
        rvf_score: 19,
        critics: {
          parker: { score: 99, note: "Stunning 2018. Pure cassis, plum, and graphite with velvet texture and extraordinary length." },
          wine_spectator: { score: 98, note: "Outstanding. One of the greatest Cheval Blancs in recent memory." },
          suckling: { score: 99, note: "Brilliant. Rich yet precise, with magnificent depth and a seemingly endless finish." },
          decanter: { score: 19, note: "Exceptional vintage for Cheval Blanc. Age for 20+ years." }
        }
      }
    ],
    description: "생테밀리옹 최고 등급 샤토. 카베르네 프랑과 메를로의 독특한 블렌딩으로 우아함과 복잡성을 동시에 보여주는 보르도의 아이콘."
  },

  {
    id: 16,
    name: "Château Léoville Las Cases",
    domaine: "Château Léoville Las Cases",
    region: "Bordeaux",
    appellation: "Saint-Julien 2ème Grand Cru Classé",
    type: "Rouge",
    rvf_stars: 2,
    vintages: [
      {
        year: 2022,
        rvf_score: 19,
        critics: {
          parker: { score: 98, note: "The finest Las Cases in years. Inky color, massive concentration, and extraordinary precision. 'Super Second' at its finest." },
          wine_spectator: { score: 97, note: "Profound. A landmark wine for the estate and the vintage." },
          suckling: { score: 98, note: "Exceptional 2022. Rich, complex and built for the ages." },
          decanter: { score: 19, note: "Outstanding. Confirms Las Cases as the leading 'super second' of Saint-Julien." }
        }
      }
    ],
    description: "상쥘리앙의 '슈퍼 세컨드'. 그랑 앙클로 내 최고의 블록에서 탄생하는 이 와인은 2등급 중 가장 1등급에 가까운 품질을 자랑한다."
  },

  {
    id: 17,
    name: "Corton-Charlemagne Grand Cru",
    domaine: "Domaine Bonneau du Martray",
    region: "Bourgogne",
    appellation: "Corton-Charlemagne Grand Cru",
    type: "Blanc",
    rvf_stars: 2,
    vintages: [
      {
        year: 2020,
        rvf_score: 18,
        critics: {
          parker: { score: 95, note: "Masterful Corton-Charlemagne. Golden color with toasty oak, mineral, lemon curd and hazelnut on a creamy yet fresh palate." },
          wine_spectator: { score: 95, note: "Excellent. Benchmark white Burgundy with impressive depth and finesse." },
          suckling: { score: 95, note: "Stunning precision and complexity. One of the finest white Burgundies." },
          decanter: { score: 18, note: "Magnificent. Exceptional mineral expression with great aging potential." }
        }
      }
    ],
    description: "코르통-샤를마뉴의 최고 생산자 중 하나. 9.5헥타르 단일 포도밭에서 만들어지는 화이트 부르고뉴의 정점."
  },

  {
    id: 18,
    name: "Côte-Rôtie La Mouline",
    domaine: "E. Guigal",
    region: "Rhône Nord",
    appellation: "Côte-Rôtie AOC",
    type: "Rouge",
    rvf_stars: 2,
    vintages: [
      {
        year: 2017,
        rvf_score: 18,
        critics: {
          parker: { score: 100, note: "Possibly the greatest La Mouline ever. Extraordinary floral character with violets, roses, and red fruits of stunning purity and a finish that lasts several minutes." },
          wine_spectator: { score: 98, note: "Brilliant. One of the greatest Guigal La La wines ever produced." },
          suckling: { score: 99, note: "Extraordinary. Floral, complex and hauntingly beautiful." },
          decanter: { score: 19, note: "Transcendent. A benchmark for Côte-Rôtie and Syrah worldwide." }
        }
      },
      {
        year: 2016,
        rvf_score: 19,
        critics: {
          parker: { score: 100, note: "The 2016 La Mouline is a masterpiece. Extraordinary floral character that no other wine achieves." },
          wine_spectator: { score: 98, note: "Exceptional. Pure Syrah magic from the Côte Blonde." },
          suckling: { score: 99, note: "A towering La Mouline. One of the greatest ever." },
          decanter: { score: 19, note: "Magnificent. Sets the standard for the appellation." }
        }
      }
    ],
    description: "기갈의 '라라' 3종 중 하나. 코트 블롱드의 단일 포도밭에서 소량의 비오니에와 함께 양조되는 코트 로티의 전설."
  },

  {
    id: 19,
    name: "Clos de la Roilette",
    domaine: "Domaine Alain Coudert",
    region: "Beaujolais",
    appellation: "Fleurie AOC",
    type: "Rouge",
    rvf_stars: 3,
    vintages: [
      {
        year: 2022,
        rvf_score: 18,
        critics: {
          parker: { score: 93, note: "Excellent Fleurie with uncommon depth and complexity. Shows why this estate has been elevated to 3-star status." },
          wine_spectator: { score: 92, note: "Impressive Beaujolais with real depth and structure." },
          suckling: { score: 93, note: "Brilliant Fleurie. Fresh, complex and genuinely exciting." },
          decanter: { score: 17, note: "The finest Beaujolais producer. Exceptional quality." }
        }
      }
    ],
    description: "2026 RVF 3스타 승격. 플뢰리 최고의 도멘. 보졸레에서 드물게 그랑 크뤼급 품질을 선보이는 생산자."
  },

  {
    id: 20,
    name: "Vouvray Le Haut Lieu Moelleux",
    domaine: "Domaine Huet",
    region: "Loire",
    appellation: "Vouvray AOC",
    type: "Blanc",
    rvf_stars: 2,
    vintages: [
      {
        year: 2018,
        rvf_score: 18,
        critics: {
          parker: { score: 96, note: "Extraordinary Vouvray. Honey, quince, ginger, and mineral freshness in perfect balance. Will age for 50+ years." },
          wine_spectator: { score: 95, note: "Magnificent. One of the greatest Vouvray producers at their finest." },
          suckling: { score: 96, note: "Brilliant. The richness and freshness are in perfect harmony." },
          decanter: { score: 18, note: "Exceptional. Benchmark Chenin Blanc from the Loire." }
        }
      }
    ],
    description: "슈냉 블랑의 최고 표현. 부브레 최고 생산자 도멘 위에의 스위트 화이트 와인으로 수십 년간 발전하는 놀라운 숙성력을 자랑한다."
  },

  // ===== 1 STAR =====

  {
    id: 21,
    name: "Sancerre Rouge Les Monts Damnés",
    domaine: "Henri Bourgeois",
    region: "Loire",
    appellation: "Sancerre AOC",
    type: "Rouge",
    rvf_stars: 1,
    vintages: [
      {
        year: 2021,
        rvf_score: 16,
        critics: {
          parker: { score: 90, note: "Delicious Sancerre Rouge with pure Pinot Noir fruit and beautiful mineral precision." },
          wine_spectator: { score: 90, note: "Elegant and precise. Shows the terroir of Les Monts Damnés beautifully." },
          suckling: { score: 91, note: "Excellent purity and focus. Fine Sancerre with real character." },
          decanter: { score: 16, note: "Fresh and precise. A lovely expression of Loire Pinot Noir." }
        }
      }
    ],
    description: "루아르 밸리 소비뇽 블랑의 성지 상세르에서 피노 누아로 만드는 붉은 와인. 석회암 토양에서 탄생하는 우아한 레드."
  },

  {
    id: 22,
    name: "Pouilly-Fumé Baron de L",
    domaine: "De Ladoucette",
    region: "Loire",
    appellation: "Pouilly-Fumé AOC",
    type: "Blanc",
    rvf_stars: 1,
    vintages: [
      {
        year: 2022,
        rvf_score: 16,
        critics: {
          parker: { score: 91, note: "Brilliant Pouilly-Fumé. Crisp, precise and mineral with beautiful citrus and grassland aromas." },
          wine_spectator: { score: 90, note: "Classic Pouilly-Fumé with excellent focus and varietal character." },
          suckling: { score: 92, note: "One of the finest Pouilly-Fumés. Pure and complex with great depth." },
          decanter: { score: 16, note: "Excellent. De Ladoucette's premium cuvée at its best." }
        }
      }
    ],
    description: "드 라두세트의 플래그십 퀴베. 소비뇽 블랑의 가장 우아한 표현 중 하나로 연기 (fumé) 향의 복잡성이 탁월하다."
  },

  {
    id: 23,
    name: "Châteauneuf-du-Pape Blanc",
    domaine: "Château Beaucastel",
    region: "Rhône Sud",
    appellation: "Châteauneuf-du-Pape AOC",
    type: "Blanc",
    rvf_stars: 1,
    vintages: [
      {
        year: 2021,
        rvf_score: 17,
        critics: {
          parker: { score: 93, note: "Extraordinary white. Roussanne dominates with honey, beeswax, hazelnut, and exotic spices on a rich, textured palate." },
          wine_spectator: { score: 92, note: "Rich and complex. One of the finest white Châteauneuf-du-Pape producers." },
          suckling: { score: 93, note: "Superb. Rich, complex and age-worthy white Rhône." },
          decanter: { score: 17, note: "Exceptional white blend. Beaucastel Blanc at its finest." }
        }
      }
    ],
    description: "루산느 주품종의 블렌드로 만들어지는 샤토뇌프 뒤 파프 블랑. 샤토 보카스텔의 탁월한 화이트 와인으로 수십 년간 진화한다."
  },

  {
    id: 24,
    name: "Gigondas Les Hautes Garrigues",
    domaine: "Domaine Santa Duc",
    region: "Rhône Sud",
    appellation: "Gigondas AOC",
    type: "Rouge",
    rvf_stars: 1,
    vintages: [
      {
        year: 2020,
        rvf_score: 17,
        critics: {
          parker: { score: 92, note: "Brilliant Gigondas with earthy, spicy Grenache fruit and outstanding structure. Excellent value." },
          wine_spectator: { score: 91, note: "Complex and well-structured. One of the top Gigondas producers." },
          suckling: { score: 92, note: "Excellent. Rich and spicy with great depth for the appellation." },
          decanter: { score: 17, note: "Impressive depth and terroir expression. Outstanding Gigondas." }
        }
      }
    ],
    description: "지공다스 최고 생산자 중 하나인 도멘 산타 뒤크. 오래된 그르나슈 나무에서 나오는 깊고 복잡한 와인."
  },

  {
    id: 25,
    name: "Alsace Riesling Grand Cru Schlossberg",
    domaine: "Domaine Weinbach",
    region: "Alsace",
    appellation: "Alsace Grand Cru Schlossberg",
    type: "Blanc",
    rvf_stars: 1,
    vintages: [
      {
        year: 2021,
        rvf_score: 17,
        critics: {
          parker: { score: 93, note: "Exceptional Alsace Riesling with pure mineral character, lime, slate, and flowers with impeccable balance and length." },
          wine_spectator: { score: 93, note: "Brilliant. One of the finest expressions of Schlossberg terroir available." },
          suckling: { score: 94, note: "Stunning Riesling with extraordinary purity and mineral depth." },
          decanter: { score: 17, note: "Outstanding. The Schlossberg terroir comes through beautifully." }
        }
      }
    ],
    description: "알자스 슐로스베르크 그랑 크뤼의 가장 탁월한 생산자 중 하나. 화강암 토양에서 탄생하는 순수하고 미네랄한 리슬링."
  },

  {
    id: 26,
    name: "Chapoutier Ermitage Blanc L'Orée",
    domaine: "M. Chapoutier",
    region: "Rhône Nord",
    appellation: "Hermitage AOC",
    type: "Blanc",
    rvf_stars: 3,
    vintages: [
      {
        year: 2019,
        rvf_score: 19,
        critics: {
          parker: { score: 100, note: "One of the greatest white Hermitage ever made. Pure Marsanne with extraordinary mineral depth, golden fruit, and a finish that seems to go on forever." },
          wine_spectator: { score: 98, note: "Transcendent. Michel Chapoutier's L'Orée is one of France's greatest white wines." },
          suckling: { score: 99, note: "Extraordinary. Perfect white Rhône with stunning complexity and aging potential." },
          decanter: { score: 20, note: "A landmark wine. Among the finest white wines on earth." }
        }
      }
    ],
    description: "샤푸티에의 에르미타주 화이트 플래그십. 마르산 100%로 만들어지는 이 와인은 론 북부 화이트의 최고봉으로 수십 년간 진화한다."
  },

  {
    id: 27,
    name: "Chablis Grand Cru Les Clos",
    domaine: "Domaine Raveneau",
    region: "Bourgogne",
    appellation: "Chablis Grand Cru Les Clos",
    type: "Blanc",
    rvf_stars: 2,
    vintages: [
      {
        year: 2020,
        rvf_score: 18,
        critics: {
          parker: { score: 95, note: "The greatest Chablis producer. Les Clos has stunning mineral precision, oyster shell, lemon zest, and chalk on an incredibly focused frame." },
          wine_spectator: { score: 96, note: "Extraordinary. Raveneau's Les Clos is the reference point for Chablis Grand Cru." },
          suckling: { score: 96, note: "Perfect Chablis. Pure, mineral and age-worthy in the extreme." },
          decanter: { score: 18, note: "Benchmark. The finest Chablis producer at their best." }
        }
      }
    ],
    description: "샤블리 최고의 그랑 크뤼 레클로. 도멘 라보노는 샤블리의 전설로, 키모노이트 토양에서 탄생하는 미네랄한 화이트 와인의 대표주자."
  },

  {
    id: 28,
    name: "Gevrey-Chambertin Vieilles Vignes",
    domaine: "Domaine Rossignol-Trapet",
    region: "Bourgogne",
    appellation: "Gevrey-Chambertin AOC",
    type: "Rouge",
    rvf_stars: 1,
    vintages: [
      {
        year: 2022,
        rvf_score: 16,
        critics: {
          parker: { score: 89, note: "Lovely village Gevrey with real depth and character. Old vines bring concentration and complexity." },
          wine_spectator: { score: 90, note: "Very good. Classic Gevrey character with earthy depth." },
          suckling: { score: 91, note: "Excellent village wine with surprising depth. Old vine character." },
          decanter: { score: 16, note: "Well-made and characterful. Good Gevrey village." }
        }
      }
    ],
    description: "주브레-샹베르탱 빌라주 와인. 오래된 피노 누아 나무에서 나오는 집중되고 복잡한 와인으로 높은 가성비를 자랑한다."
  },

  {
    id: 29,
    name: "Muscadet Sèvre et Maine Sur Lie",
    domaine: "Domaine de la Pépière",
    region: "Loire",
    appellation: "Muscadet Sèvre et Maine AOC",
    type: "Blanc",
    rvf_stars: 1,
    vintages: [
      {
        year: 2022,
        rvf_score: 16,
        critics: {
          parker: { score: 89, note: "Excellent Muscadet with real depth and complexity from extended lees aging. Citrus, mineral and subtle yeasty notes." },
          wine_spectator: { score: 88, note: "Very good. One of the finest Muscadet producers with excellent aging potential." },
          suckling: { score: 90, note: "Impressive. La Pépière shows Muscadet at its finest." },
          decanter: { score: 16, note: "Great value and excellent quality. Benchmark Muscadet." }
        }
      }
    ],
    description: "뮈스카데 최고의 생산자 중 하나. 오랜 쉬르 리 숙성으로 깊이와 복잡성을 갖춘 루아르의 가성비 최고 와인."
  },

  {
    id: 30,
    name: "Bandol Rouge",
    domaine: "Domaine Tempier",
    region: "Provence",
    appellation: "Bandol AOC",
    type: "Rouge",
    rvf_stars: 1,
    vintages: [
      {
        year: 2020,
        rvf_score: 17,
        critics: {
          parker: { score: 93, note: "Classic Tempier Bandol. Mourvèdre dominates with dark fruit, herbs, and iron mineral notes on a structured, age-worthy frame." },
          wine_spectator: { score: 92, note: "Excellent. Domaine Tempier defines Bandol and this vintage is no exception." },
          suckling: { score: 92, note: "Superb. One of France's most characterful reds with excellent structure." },
          decanter: { score: 17, note: "Benchmark Bandol. Tempier at their characterful best." }
        }
      }
    ],
    description: "방돌 AOC의 아이콘. 무르베드르 주품종의 강건하고 개성 넘치는 레드 와인으로 프로방스 최고의 레드 와인 중 하나."
  }
];

// Critics information
const CRITICS = {
  parker: {
    name: "Robert Parker",
    publication: "Wine Advocate",
    scale: "100점 (100-point scale)",
    description: "세계 최고의 와인 평론가. 와인 애드보킷(Wine Advocate) 창간자로 100점 만점제를 대중화시켰다.",
    avatar: "🍷"
  },
  wine_spectator: {
    name: "Wine Spectator",
    publication: "Wine Spectator Magazine",
    scale: "100점 (100-point scale)",
    description: "세계 최대 발행부수의 와인 잡지. 연간 2만여 종의 와인을 블라인드 테이스팅으로 평가한다.",
    avatar: "📰"
  },
  suckling: {
    name: "James Suckling",
    publication: "JamesSuckling.com",
    scale: "100점 (100-point scale)",
    description: "전 와인 스펙테이터 유럽 편집장. 독립 이후 연간 2만5천여 종의 와인을 평가하는 세계적 평론가.",
    avatar: "🏆"
  },
  decanter: {
    name: "Decanter",
    publication: "Decanter Magazine",
    scale: "20점 (20-point scale)",
    description: "영국 최고의 와인 잡지. 드캔터 월드 와인 어워즈(DWWA)를 통해 매년 2만여 종 평가.",
    avatar: "🥇"
  }
};
