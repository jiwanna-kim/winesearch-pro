/* ================================================
   WineSearch Pro — Domaine-centric data
   RVF 스타 등급은 도멘(생산자)에 부여됨
   ================================================ */

const DOMAINES_DATA = [

  // ===== ★★★★ 4 STARS =====

  {
    id: 1,
    name: "Domaine Coche-Dury",
    rvf_stars: 4,
    region: "Bourgogne",
    village: "Meursault",
    type_tags: ["Blanc"],
    description: "장 프랑수아 코슈-뒤리가 평생을 바쳐 일군 뫼르소의 전설. 전 세계에서 가장 구하기 어려운 화이트 와인 생산자 중 하나로, 그의 포도밭은 단 10헥타르에 불과하지만 각 퀴베는 최상의 평가를 받는다. 섬세한 양조로 테루아를 최대한 표현하며, 특히 페리에르는 세계 최고의 샤르도네 중 하나로 꼽힌다.",
    coords: { lat: 46.9760, lng: 4.8310, place: "Meursault" },
    wines: [
      {
        id: "w1",
        name: "Meursault Perrières",
        appellation: "Meursault 1er Cru Perrières",
        type: "Blanc",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Meursault-Perrieres_Coche-Dury.jpg/300px-Meursault-Perrieres_Coche-Dury.jpg",
        vintages: [
          { year: 2020, rvf_score: 20, critics: {
            parker: { score: 100, note: "The greatest white Burgundy made this decade. An almost impossible balance of richness, mineral precision and extraordinary length." },
            wine_spectator: { score: 99, note: "Transcendent. The finest Meursault Perrières in living memory. A monument to white Burgundy." },
            suckling: { score: 100, note: "Perfection. This wine defines white Burgundy—every drop is extraordinary." },
            decanter: { score: 20, note: "Legendary. One of the greatest white wines on earth." }
          }},
          { year: 2019, rvf_score: 20, critics: {
            parker: { score: 99, note: "Absolutely brilliant—buttery yet laser-focused mineral precision with a finish that lasts minutes." },
            wine_spectator: { score: 98, note: "Exceptional. Pure, complex and age-worthy in the extreme." },
            suckling: { score: 99, note: "Extraordinary Meursault. Coche-Dury at their majestic best." },
            decanter: { score: 19, note: "Superb. Sets the benchmark for premier cru Meursault." }
          }}
        ]
      },
      {
        id: "w2",
        name: "Corton-Charlemagne",
        appellation: "Corton-Charlemagne Grand Cru",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2019, rvf_score: 19, critics: {
            parker: { score: 97, note: "Rich, complex and age-worthy. Coche-Dury's Corton-Charlemagne is extraordinary." },
            wine_spectator: { score: 96, note: "Brilliant Grand Cru from one of Burgundy's finest estates." },
            suckling: { score: 97, note: "Superb. A towering expression of Corton-Charlemagne." },
            decanter: { score: 18, note: "Excellent depth and mineral precision." }
          }}
        ]
      }
    ]
  },

  {
    id: 2,
    name: "Domaine des Comtes Lafon",
    rvf_stars: 4,
    region: "Bourgogne",
    village: "Meursault",
    type_tags: ["Blanc", "Rouge"],
    description: "도미니크 라폰이 이끄는 뫼르소의 최상위 도멘. 화이트 부르고뉴에서 코슈-뒤리와 함께 뫼르소의 양대 산맥으로 꼽힌다. 비오다이나미 농법으로 전환한 이후 품질이 한층 높아졌으며, 특히 뫼르소 페리에르와 몽라셰 그랑 크뤼는 전 세계 수집가들이 탐내는 와인이다.",
    coords: { lat: 46.9762, lng: 4.8315, place: "Meursault" },
    wines: [
      {
        id: "w3",
        name: "Meursault Perrières",
        appellation: "Meursault 1er Cru Perrières",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2021, rvf_score: 19, critics: {
            parker: { score: 97, note: "Magnificent Meursault. Golden, rich and precise with extraordinary mineral depth and a seemingly endless finish." },
            wine_spectator: { score: 97, note: "Exceptional. Comtes Lafon's Perrières remains a benchmark for white Burgundy." },
            suckling: { score: 98, note: "Brilliant 2021. One of the finest white Burgundies in the vintage." },
            decanter: { score: 19, note: "Majestic. The complexity and precision here is without peer." }
          }}
        ]
      },
      {
        id: "w4",
        name: "Montrachet",
        appellation: "Montrachet Grand Cru",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2020, rvf_score: 20, critics: {
            parker: { score: 99, note: "A near-perfect Montrachet of staggering complexity and precision." },
            wine_spectator: { score: 98, note: "One of the greatest white wines of the vintage." },
            suckling: { score: 99, note: "Sublime. Grand Cru Burgundy at its absolute pinnacle." },
            decanter: { score: 20, note: "Perfection. The finest Montrachet in years." }
          }}
        ]
      }
    ]
  },

  {
    id: 3,
    name: "Domaine Roulot",
    rvf_stars: 4,
    region: "Bourgogne",
    village: "Meursault",
    type_tags: ["Blanc"],
    description: "배우이기도 했던 장 마크 룰로가 운영하는 뫼르소의 전설적 도멘. 무게감보다 순수성과 테루아 표현에 집중하는 스타일로, 그의 와인들은 뫼르소의 섬세한 미네랄과 우아함을 가장 잘 표현한다는 평가를 받는다. 연간 생산량이 극히 적어 세계적으로 희소성이 매우 높다.",
    coords: { lat: 46.9758, lng: 4.8318, place: "Meursault" },
    wines: [
      {
        id: "w5",
        name: "Meursault Charmes",
        appellation: "Meursault 1er Cru Charmes",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2020, rvf_score: 19, critics: {
            parker: { score: 97, note: "Jean-Marc Roulot's Charmes is breathtaking—pure, complex and age-worthy with extraordinary terroir expression." },
            wine_spectator: { score: 96, note: "Brilliant. Roulot's Meursault Charmes sets the standard for the appellation." },
            suckling: { score: 97, note: "Exceptional. One of the greatest expressions of Meursault premier cru." },
            decanter: { score: 19, note: "Superb. Jean-Marc Roulot continues to define excellence in Meursault." }
          }}
        ]
      },
      {
        id: "w6",
        name: "Meursault Tessons",
        appellation: "Meursault 1er Cru Tessons",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2021, rvf_score: 18, critics: {
            parker: { score: 95, note: "Beautiful mineral-driven Meursault with citrus, hazelnuts and great precision." },
            wine_spectator: { score: 95, note: "Excellent premier cru with lovely texture and finesse." },
            suckling: { score: 95, note: "Superb Meursault with real depth and freshness." },
            decanter: { score: 18, note: "Refined and elegant. Tessons at its best." }
          }}
        ]
      }
    ]
  },

  {
    id: 4,
    name: "Domaine Vincent Dauvissat",
    rvf_stars: 4,
    region: "Bourgogne",
    village: "Chablis",
    type_tags: ["Blanc"],
    description: "뱅상 다비사는 도멘 라보노와 함께 샤블리 최고의 생산자로 꼽힌다. 자연 효모, 오크통 발효, 최소한의 개입이라는 전통 방식을 고수하며 각 그랑 크뤼 포도밭의 개성을 극명하게 표현한다. 키모노이트 석회암 특유의 굴 껍데기, 백악, 레몬 향이 돋보이는 샤블리의 정수.",
    coords: { lat: 47.8132, lng: 3.8000, place: "Chablis" },
    wines: [
      {
        id: "w7",
        name: "Chablis Grand Cru Les Clos",
        appellation: "Chablis Grand Cru Les Clos",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2021, rvf_score: 19, critics: {
            parker: { score: 96, note: "Dauvissat's Les Clos is towering—oyster shell, chalk, citrus and mineral intensity that few wines can match." },
            wine_spectator: { score: 97, note: "Transcendent Chablis. Dauvissat's Les Clos alongside Raveneau's defines the appellation's pinnacle." },
            suckling: { score: 97, note: "Perfect Chablis Grand Cru. Pure, mineral and hauntingly beautiful." },
            decanter: { score: 19, note: "Extraordinary. A monument to Kimmeridgian terroir." }
          }}
        ]
      },
      {
        id: "w8",
        name: "Chablis Grand Cru Vaudésir",
        appellation: "Chablis Grand Cru Vaudésir",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2021, rvf_score: 18, critics: {
            parker: { score: 94, note: "Excellent Chablis Grand Cru with floral, mineral character and great depth." },
            wine_spectator: { score: 95, note: "Impressive grand cru with superb tension and length." },
            suckling: { score: 95, note: "Beautiful Vaudésir with pure mineral character." },
            decanter: { score: 18, note: "Outstanding. Dauvissat's Vaudésir is benchmark Chablis." }
          }}
        ]
      }
    ]
  },

  {
    id: 5,
    name: "Domaine de Montille",
    rvf_stars: 4,
    region: "Bourgogne",
    village: "Volnay",
    type_tags: ["Rouge", "Blanc"],
    description: "위베르 드 몽티유가 설립하고 지금은 아들 에티엔이 이끄는 볼네의 최고 도멘. 우아함과 정밀성을 최우선으로 여기며 알코올이 낮고 타닌이 섬세한 스타일로 유명하다. 볼네와 뽀마르의 여러 1등급 포도밭을 보유하며, 비오다이나미 농법으로 테루아의 표현을 극대화한다.",
    coords: { lat: 46.9985, lng: 4.8140, place: "Volnay" },
    wines: [
      {
        id: "w9",
        name: "Volnay Champans",
        appellation: "Volnay 1er Cru Champans",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2020, rvf_score: 19, critics: {
            parker: { score: 96, note: "Stunning Volnay. Silky tannins, cherry, raspberry and earth with extraordinary precision and length." },
            wine_spectator: { score: 95, note: "Exceptional. De Montille's Champans is a benchmark for Volnay 1er Cru." },
            suckling: { score: 96, note: "Brilliant. The 4-star RVF rating is fully justified—a great Burgundy." },
            decanter: { score: 19, note: "Magnificent terroir expression. One of Volnay's finest premier cru wines." }
          }}
        ]
      },
      {
        id: "w10",
        name: "Pommard Rugiens",
        appellation: "Pommard 1er Cru Rugiens",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2019, rvf_score: 18, critics: {
            parker: { score: 94, note: "Dark, structured and age-worthy. De Montille's Rugiens shows the power of Pommard with elegance." },
            wine_spectator: { score: 94, note: "Rich and complex with excellent aging potential." },
            suckling: { score: 95, note: "Superb Pommard premier cru from an exceptional producer." },
            decanter: { score: 18, note: "Impressive depth and structure. Classic Pommard Rugiens." }
          }}
        ]
      }
    ]
  },

  {
    id: 6,
    name: "Champagne Égly-Ouriet",
    rvf_stars: 4,
    region: "Champagne",
    village: "Ambonnay",
    type_tags: ["Effervescent"],
    description: "프란시스 에글리가 이끄는 앙보네 그랑 크뤼의 전설적 레콜탕 마니퓔랑. 오래된 피노 누아 고목(vieilles vignes)에서 최소한의 개입으로 만드는 그의 샹파뉴는 구조감, 복잡성, 깊이에 있어 대형 메종을 능가한다. 소규모 생산으로 전 세계 수집가들이 탐내는 샹파뉴.",
    coords: { lat: 49.0530, lng: 4.1450, place: "Ambonnay, Champagne" },
    wines: [
      {
        id: "w11",
        name: "Blanc de Noirs Vieilles Vignes",
        appellation: "Champagne Grand Cru Ambonnay",
        type: "Effervescent",
        image: null,
        vintages: [
          { year: 2018, rvf_score: 19, critics: {
            parker: { score: 97, note: "Extraordinary. Structured, complex and age-worthy beyond any other grower Champagne." },
            wine_spectator: { score: 96, note: "The finest grower Champagne produced today. A masterpiece." },
            suckling: { score: 97, note: "Transcendent. The 4-star RVF rating places Égly-Ouriet among Champagne's all-time greats." },
            decanter: { score: 19, note: "Exceptional. A Champagne of profound depth and extraordinary aging potential." }
          }}
        ]
      },
      {
        id: "w12",
        name: "Millesimé Extra-Brut",
        appellation: "Champagne Grand Cru Ambonnay",
        type: "Effervescent",
        image: null,
        vintages: [
          { year: 2015, rvf_score: 18, critics: {
            parker: { score: 95, note: "Superb vintage Champagne with magnificent depth, complexity and aging potential." },
            wine_spectator: { score: 95, note: "Brilliant. Shows why Égly-Ouriet is the reference for grower Champagne." },
            suckling: { score: 96, note: "Exceptional millesimé with extraordinary precision and length." },
            decanter: { score: 18, note: "Outstanding. A great vintage Champagne from a great producer." }
          }}
        ]
      }
    ]
  },

  {
    id: 7,
    name: "Domaine Raveneau",
    rvf_stars: 4,
    region: "Bourgogne",
    village: "Chablis",
    type_tags: ["Blanc"],
    description: "베르나르 라보노와 그의 아들들이 운영하는 샤블리의 성배. 다비사와 함께 샤블리의 절대적 기준점으로, 전통적 오크통 숙성으로 만들어지는 그의 그랑 크뤼들은 키모노이트 테루아의 순수한 표현이다. 연간 생산량이 극히 적어 구매가 매우 어렵고, 노령화로 인해 은퇴 이후의 미래가 불확실한 귀중한 도멘.",
    coords: { lat: 47.8129, lng: 3.7996, place: "Chablis" },
    wines: [
      {
        id: "w13",
        name: "Chablis Grand Cru Les Clos",
        appellation: "Chablis Grand Cru Les Clos",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2020, rvf_score: 18, critics: {
            parker: { score: 95, note: "Stunning mineral precision, oyster shell, lemon zest and chalk on an incredibly focused frame." },
            wine_spectator: { score: 96, note: "Extraordinary. Raveneau's Les Clos is the reference point for Chablis Grand Cru." },
            suckling: { score: 96, note: "Perfect Chablis. Pure, mineral and age-worthy in the extreme." },
            decanter: { score: 18, note: "Benchmark. The finest Chablis producer at their best." }
          }}
        ]
      },
      {
        id: "w14",
        name: "Chablis Grand Cru Blanchot",
        appellation: "Chablis Grand Cru Blanchot",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2020, rvf_score: 18, critics: {
            parker: { score: 94, note: "Pure and precise Chablis with beautiful floral notes, mineral tension and great length." },
            wine_spectator: { score: 95, note: "Excellent Blanchot from the greatest Chablis producer." },
            suckling: { score: 95, note: "Beautiful purity and mineral depth. Great Chablis." },
            decanter: { score: 18, note: "Superb. Raveneau's Blanchot shows remarkable finesse." }
          }}
        ]
      }
    ]
  },

  // ===== ★★★ 3 STARS =====

  {
    id: 8,
    name: "Domaine de la Romanée-Conti",
    rvf_stars: 3,
    region: "Bourgogne",
    village: "Vosne-Romanée",
    type_tags: ["Rouge", "Blanc"],
    description: "세계 와인의 정점. 부르고뉴 코트 드 뉘 최고의 포도밭을 독점 소유하는 전설적 도멘. 모든 와인이 그랑 크뤼이며, 로마네-콩티(1.8ha)는 세계에서 가장 비싼 와인으로 꼽힌다. 비오다이나미 농법과 마승(馬耕), 손수확을 고집하며 피노 누아의 궁극을 표현한다.",
    coords: { lat: 47.1574, lng: 4.9529, place: "Vosne-Romanée" },
    wines: [
      {
        id: "w15",
        name: "Romanée-Conti",
        appellation: "Romanée-Conti Grand Cru",
        type: "Rouge",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Romanee-Conti_2012.jpg/300px-Romanee-Conti_2012.jpg",
        vintages: [
          { year: 2018, rvf_score: 20, critics: {
            parker: { score: 100, note: "The 2018 Romanée-Conti is breathtaking. Layers of red and black fruits, violets, spice, and forest floor with extraordinary depth and precision. A wine for the ages." },
            wine_spectator: { score: 99, note: "Transcendent. Pure elegance with exceptional complexity, silky tannins and a finish that lasts minutes." },
            suckling: { score: 100, note: "Perfection. One of the greatest wines I've ever tasted. Gorgeous red fruit, earth and spice." },
            decanter: { score: 20, note: "Sublime. A wine that redefines what Pinot Noir can achieve." }
          }},
          { year: 2015, rvf_score: 20, critics: {
            parker: { score: 100, note: "Extraordinary vintage for DRC. Rich, concentrated yet precise with remarkable aromatic complexity." },
            wine_spectator: { score: 99, note: "Benchmark Burgundy. Complex and multi-layered with stunning freshness." },
            suckling: { score: 99, note: "Incredible depth and richness balanced by luminous acidity." },
            decanter: { score: 20, note: "Classic and age-worthy. Shows the full potential of this legendary terroir." }
          }}
        ]
      },
      {
        id: "w16",
        name: "La Tâche",
        appellation: "La Tâche Grand Cru",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2019, rvf_score: 20, critics: {
            parker: { score: 99, note: "Magnificent. Dark cherry, rose petals, and earth with astonishing complexity and a stunning 90-second finish." },
            wine_spectator: { score: 98, note: "Pure and precise with exceptional depth. A benchmark for the appellation." },
            suckling: { score: 99, note: "Almost perfect. The 2019 La Tâche is a hauntingly beautiful wine." },
            decanter: { score: 20, note: "Profound terroir expression. One of the wines of the vintage." }
          }},
          { year: 2017, rvf_score: 19, critics: {
            parker: { score: 97, note: "Elegant and fresh with raspberry, cherry and spice on a long, velvety finish." },
            wine_spectator: { score: 96, note: "Vibrant and complex with great aging potential." },
            suckling: { score: 98, note: "Brilliant purity with silky tannins and great length." },
            decanter: { score: 19, note: "Refined and precise. Shows the elegance of the vintage." }
          }}
        ]
      },
      {
        id: "w17",
        name: "Richebourg",
        appellation: "Richebourg Grand Cru",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2019, rvf_score: 19, critics: {
            parker: { score: 98, note: "Opulent and rich, with black fruit, rose and iron on a dense, powerful frame." },
            wine_spectator: { score: 97, note: "Superb. DRC Richebourg at its imposing best." },
            suckling: { score: 98, note: "Massive and intense yet refined. One of the great Richebourgs." },
            decanter: { score: 19, note: "Exceptional depth and complexity. A profound wine." }
          }}
        ]
      }
    ]
  },

  {
    id: 9,
    name: "Pétrus",
    rvf_stars: 3,
    region: "Bordeaux",
    village: "Pomerol",
    type_tags: ["Rouge"],
    description: "포므롤의 왕. 뽀므롤의 특별한 청색 점토(blue clay) 11.5헥타르에서 100% 메를로로 만들어지는 세계에서 가장 비싼 와인 중 하나. 헬리콥터로 포도밭에 공기를 불어넣어 수분을 제거하는 등 완벽에 가까운 양조로 유명하다. 크리스티앙 무에 가문이 소유.",
    coords: { lat: 44.9208, lng: -0.1836, place: "Pomerol" },
    wines: [
      {
        id: "w18",
        name: "Pétrus",
        appellation: "Pomerol AOC",
        type: "Rouge",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Petrus_wine.jpg/300px-Petrus_wine.jpg",
        vintages: [
          { year: 2021, rvf_score: 19, critics: {
            parker: { score: 98, note: "Extraordinary Pomerol. Pure Merlot at its finest—chocolate, truffle, and plum with velvety texture." },
            wine_spectator: { score: 97, note: "Rich and voluptuous with layers of fruit, earth and mineral complexity." },
            suckling: { score: 99, note: "A masterpiece of Pomerol. Silky, rich and endlessly complex." },
            decanter: { score: 20, note: "The greatest Pétrus in decades. Outstanding concentration." }
          }},
          { year: 2018, rvf_score: 20, critics: {
            parker: { score: 100, note: "A perfect wine. Pure nectar—cassis, truffle, iron, chocolate in a symphony of flavors." },
            wine_spectator: { score: 99, note: "Profound. An extraordinary expression of Pomerol's blue clay." },
            suckling: { score: 100, note: "The wine of the vintage in Pomerol. Flawless in every way." },
            decanter: { score: 20, note: "Exceptional. Concentrated, layered and perfectly structured for decades of aging." }
          }}
        ]
      }
    ]
  },

  {
    id: 10,
    name: "Paul Jaboulet Aîné",
    rvf_stars: 3,
    region: "Rhône Nord",
    village: "Tain-l'Hermitage",
    type_tags: ["Rouge", "Blanc"],
    description: "에르미타주 언덕을 대표하는 론 북부의 명가. 1834년 창립 이후 에르미타주 라 샤펠을 세상에 알린 전설적 생산자. 2006년 르로이 가문이 인수한 이후 품질이 크게 향상되었으며, 특히 2015 라 샤펠은 '세기의 와인'이라는 평가를 받았다.",
    coords: { lat: 45.0742, lng: 4.8436, place: "Tain-l'Hermitage" },
    wines: [
      {
        id: "w19",
        name: "Hermitage La Chapelle",
        appellation: "Hermitage AOC",
        type: "Rouge",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/La_Chapelle_Jaboulet.jpg/300px-La_Chapelle_Jaboulet.jpg",
        vintages: [
          { year: 2019, rvf_score: 19, critics: {
            parker: { score: 98, note: "Massive dark fruits, smoked meat, olive, and pepper with extraordinary concentration and a 60-second finish." },
            wine_spectator: { score: 96, note: "Powerful and rich with exceptional structure. Will need 15+ years." },
            suckling: { score: 97, note: "Incredible depth and complexity. A benchmark for the appellation." },
            decanter: { score: 19, note: "Majestic expression of the Hermitage hill. Dense and layered." }
          }},
          { year: 2015, rvf_score: 20, critics: {
            parker: { score: 100, note: "One of the greatest La Chapelles ever made. Inky, dense and extraordinarily complex—a reference point." },
            wine_spectator: { score: 98, note: "Profound and age-worthy. The greatest Jaboulet in decades." },
            suckling: { score: 99, note: "Perfect Syrah. Rich, deep and complex with extraordinary aging potential." },
            decanter: { score: 20, note: "A landmark wine. The 2015 La Chapelle will be remembered for generations." }
          }}
        ]
      }
    ]
  },

  {
    id: 11,
    name: "Château Rayas",
    rvf_stars: 3,
    region: "Rhône Sud",
    village: "Châteauneuf-du-Pape",
    type_tags: ["Rouge", "Blanc"],
    description: "샤토뇌프 뒤 파프의 성배. 다른 생산자들과 달리 100% 그르나슈로만 만드는 이 와인은 그 신비로운 품질과 희소성으로 유명하다. 에마뉘엘 레노가 관리하는 이 도멘은 특이하게도 포도나무들이 높은 숲 안에 자리해 외부에서 찾기조차 어렵다. 빈티지에 따라 품질 편차가 크지만 최상의 빈티지는 세계 최고의 와인과 견줄 만하다.",
    coords: { lat: 44.0556, lng: 4.8308, place: "Châteauneuf-du-Pape" },
    wines: [
      {
        id: "w20",
        name: "Château Rayas Rouge",
        appellation: "Châteauneuf-du-Pape AOC",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2020, rvf_score: 20, critics: {
            parker: { score: 100, note: "Possibly the greatest Rayas ever. Pure Grenache nirvana—raspberry, cherry, kirsch and exotic spices in perfect harmony." },
            wine_spectator: { score: 99, note: "Ethereal. Pure and complex with stunning aromatic depth and a seemingly endless finish." },
            suckling: { score: 100, note: "Transcendent. The 2020 Rayas is everything you dream of in a great wine." },
            decanter: { score: 20, note: "A mythic wine from a mythic property. Château Rayas at its absolute peak." }
          }},
          { year: 2019, rvf_score: 19, critics: {
            parker: { score: 97, note: "Brilliant Rayas. Pure Grenache character—light color but immense depth and complexity." },
            wine_spectator: { score: 96, note: "Complex and layered with great structure for aging." },
            suckling: { score: 98, note: "Another exceptional Rayas. Elegant yet profound." },
            decanter: { score: 19, note: "Classic Rayas style—deceptively light but remarkably complex." }
          }}
        ]
      }
    ]
  },

  {
    id: 12,
    name: "Domaine Rossignol-Trapet",
    rvf_stars: 3,
    region: "Bourgogne",
    village: "Gevrey-Chambertin",
    type_tags: ["Rouge"],
    description: "주브레-샹베르탱의 뛰어난 도멘으로 비오다이나미 농법을 선도하는 생산자. 샹베르탱과 라트리시에르-샹베르탱 등 최고의 그랑 크뤼를 보유하며 포도밭의 생명력을 최대한 살리는 양조로 주목받는다. 니콜라 트라페와 다비드 트라페 형제가 함께 운영.",
    coords: { lat: 47.2228, lng: 4.9737, place: "Gevrey-Chambertin" },
    wines: [
      {
        id: "w21",
        name: "Gevrey-Chambertin Lavaux Saint-Jacques",
        appellation: "Gevrey-Chambertin 1er Cru Lavaux St-Jacques",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2021, rvf_score: 18, critics: {
            parker: { score: 93, note: "Elegant and precise with cherry, earth and spice on a silky frame. Excellent 2021." },
            wine_spectator: { score: 94, note: "Complex and well-structured. Shows the character of Lavaux beautifully." },
            suckling: { score: 94, note: "Superb freshness and precision. A benchmark 2021 Gevrey." },
            decanter: { score: 18, note: "Classic and refined. Excellent expression of the premier cru terroir." }
          }}
        ]
      },
      {
        id: "w22",
        name: "Chambertin Grand Cru",
        appellation: "Chambertin Grand Cru",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2020, rvf_score: 19, critics: {
            parker: { score: 96, note: "Deep, complex Chambertin with dark fruit, earth and spice on a powerful, age-worthy frame." },
            wine_spectator: { score: 95, note: "Excellent Grand Cru with superb depth and aging potential." },
            suckling: { score: 97, note: "Brilliant Chambertin. Rich, complex and perfectly structured." },
            decanter: { score: 19, note: "Outstanding. Rossignol-Trapet's Chambertin at its finest." }
          }}
        ]
      },
      {
        id: "w23",
        name: "Gevrey-Chambertin Vieilles Vignes",
        appellation: "Gevrey-Chambertin AOC",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2022, rvf_score: 16, critics: {
            parker: { score: 89, note: "Lovely village Gevrey with real depth and character. Old vines bring concentration and complexity." },
            wine_spectator: { score: 90, note: "Very good. Classic Gevrey character with earthy depth." },
            suckling: { score: 91, note: "Excellent village wine with surprising depth. Old vine character." },
            decanter: { score: 16, note: "Well-made and characterful. Good Gevrey village." }
          }}
        ]
      }
    ]
  },

  {
    id: 13,
    name: "Domaine Duroché",
    rvf_stars: 3,
    region: "Bourgogne",
    village: "Gevrey-Chambertin",
    type_tags: ["Rouge"],
    description: "2026 RVF 가이드에서 3스타로 새롭게 승격된 주목받는 도멘. 젊은 피에르 뒤로쉐가 이끄는 이 도멘은 최소한의 개입과 자연 효모로 테루아를 순수하게 표현하며, 특히 마조이에르-샹베르탱과 샹베르탱에서 놀라운 품질을 보여준다.",
    coords: { lat: 47.2232, lng: 4.9740, place: "Gevrey-Chambertin" },
    wines: [
      {
        id: "w24",
        name: "Chambertin Grand Cru",
        appellation: "Chambertin Grand Cru",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2022, rvf_score: 19, critics: {
            parker: { score: 96, note: "Rich, dark and complex with impeccable terroir expression. New RVF 3-star producer delivering superb Chambertin." },
            wine_spectator: { score: 95, note: "Exceptional depth and precision. One of the stars of the vintage." },
            suckling: { score: 97, note: "Brilliant winemaking from a newly crowned 3-star domain." },
            decanter: { score: 18, note: "Commanding presence. The elevation to 3 stars is fully justified." }
          }}
        ]
      }
    ]
  },

  {
    id: 14,
    name: "Étienne Sauzet",
    rvf_stars: 3,
    region: "Bourgogne",
    village: "Puligny-Montrachet",
    type_tags: ["Blanc"],
    description: "2026 RVF 3스타로 새롭게 선정된 퓔리니-몽라셰의 최정상 도멘. 에티엔 소제의 후손들이 운영하는 이 도멘은 몽라셰 그랑 크뤼를 포함한 최고의 화이트 부르고뉴를 생산한다. 세심한 포도밭 관리와 섬세한 양조로 퓔리니의 우아함을 완벽하게 표현.",
    coords: { lat: 46.9388, lng: 4.8592, place: "Puligny-Montrachet" },
    wines: [
      {
        id: "w25",
        name: "Montrachet Grand Cru",
        appellation: "Montrachet Grand Cru",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2021, rvf_score: 19, critics: {
            parker: { score: 96, note: "Stunning Montrachet. Mineral, citrus and toasty oak in perfect balance with phenomenal length." },
            wine_spectator: { score: 97, note: "Grand Cru excellence. Etienne Sauzet's Montrachet is benchmark white Burgundy." },
            suckling: { score: 97, note: "Extraordinary purity and precision. The 2026 RVF 3-star promotion is well deserved." },
            decanter: { score: 19, note: "Magnificent. Superb mineral expression with outstanding aging potential." }
          }}
        ]
      },
      {
        id: "w26",
        name: "Bâtard-Montrachet Grand Cru",
        appellation: "Bâtard-Montrachet Grand Cru",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2021, rvf_score: 18, critics: {
            parker: { score: 94, note: "Rich, full-bodied and complex. Sauzet's Bâtard-Montrachet is a world-class white Burgundy." },
            wine_spectator: { score: 95, note: "Excellent. Complex and age-worthy grand cru white." },
            suckling: { score: 95, note: "Brilliant. Great depth and mineral precision." },
            decanter: { score: 18, note: "Outstanding white Burgundy with real depth and finesse." }
          }}
        ]
      }
    ]
  },

  {
    id: 15,
    name: "Château Beauséjour J. Duffau-Lagarrosse",
    rvf_stars: 3,
    region: "Bordeaux",
    village: "Saint-Émilion",
    type_tags: ["Rouge"],
    description: "2026 RVF 3스타로 승격된 생테밀리옹의 보석. 석회암 대지 위에 자리한 이 샤토는 오랜 기간 잠재력을 인정받으면서도 일관성이 부족하다는 평을 받았으나, 최근 양조 개선으로 생테밀리옹 최고 등급에 걸맞은 품질을 보여주고 있다.",
    coords: { lat: 44.8945, lng: -0.1560, place: "Saint-Émilion" },
    wines: [
      {
        id: "w27",
        name: "Château Beauséjour",
        appellation: "Saint-Émilion Grand Cru Classé A",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2022, rvf_score: 19, critics: {
            parker: { score: 98, note: "Magnificent return to form. Rich, concentrated and complex with exceptional terroir expression." },
            wine_spectator: { score: 96, note: "Outstanding. One of the finest Beauséjour Duffau-Lagarrosse in memory." },
            suckling: { score: 98, note: "Superb 2022. Rich and complex with brilliant potential." },
            decanter: { score: 19, note: "2026 RVF 3-star promotion fully justified. Exceptional quality." }
          }}
        ]
      }
    ]
  },

  {
    id: 16,
    name: "Chartogne-Taillet",
    rvf_stars: 3,
    region: "Champagne",
    village: "Merfy",
    type_tags: ["Effervescent"],
    description: "2026 RVF 3스타 승격. 알렉상드르 샤르통이 운영하는 메르피 마을의 탁월한 레콜탕 마니퓔랑. 오래된 포도나무와 생물역학 농법으로 그랑 크뤼 테루아를 마을 수준에서도 완벽하게 표현한다. 르 로제, 사보니에르 등 테루아 표현 샹파뉴로 국제적 주목을 받고 있다.",
    coords: { lat: 49.3086, lng: 3.9254, place: "Merfy, Champagne" },
    wines: [
      {
        id: "w28",
        name: "Cuvée Sainte-Anne",
        appellation: "Champagne AOC",
        type: "Effervescent",
        image: null,
        vintages: [
          { year: 2018, rvf_score: 18, critics: {
            parker: { score: 94, note: "Brilliant grower Champagne. Outstanding complexity and character. Shows why Chartogne-Taillet deserves 3-star status." },
            wine_spectator: { score: 93, note: "Exceptional depth and minerality. Benchmark grower Champagne." },
            suckling: { score: 95, note: "Outstanding. One of the finest grower Champagnes available." },
            decanter: { score: 18, note: "Magnificent terroir expression." }
          }}
        ]
      }
    ]
  },

  {
    id: 17,
    name: "Domaine Alain Coudert",
    rvf_stars: 3,
    region: "Beaujolais",
    village: "Fleurie",
    type_tags: ["Rouge"],
    description: "2026 RVF 3스타 승격. 플뢰리 최고의 도멘으로 보졸레에서 드물게 그랑 크뤼급 품질을 선보이는 생산자. 클로 드 라 루아레트는 오래된 가메 나무에서 탄생하는 이 지역 최고의 와인으로, 보졸레의 잠재력을 세계에 증명하는 아이콘.",
    coords: { lat: 46.1890, lng: 4.6960, place: "Fleurie, Beaujolais" },
    wines: [
      {
        id: "w29",
        name: "Clos de la Roilette",
        appellation: "Fleurie AOC",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2022, rvf_score: 18, critics: {
            parker: { score: 93, note: "Excellent Fleurie with uncommon depth and complexity. Shows why this estate has been elevated to 3-star status." },
            wine_spectator: { score: 92, note: "Impressive Beaujolais with real depth and structure." },
            suckling: { score: 93, note: "Brilliant Fleurie. Fresh, complex and genuinely exciting." },
            decanter: { score: 17, note: "The finest Beaujolais producer. Exceptional quality." }
          }}
        ]
      }
    ]
  },

  {
    id: 18,
    name: "M. Chapoutier",
    rvf_stars: 3,
    region: "Rhône Nord",
    village: "Tain-l'Hermitage",
    type_tags: ["Rouge", "Blanc"],
    description: "미셸 샤푸티에가 이끄는 론 북부의 최대 생산자 중 하나. 비오다이나미 농법을 론 최초로 도입했으며, 에르미타주 언덕 최고의 포도밭들을 소유한다. 특히 라 시조네, 레르미트, 로레 등 파르셀레르 시리즈는 에르미타주의 미세한 테루아 차이를 극명하게 표현하는 걸작이다.",
    coords: { lat: 45.0745, lng: 4.8440, place: "Tain-l'Hermitage" },
    wines: [
      {
        id: "w30",
        name: "Ermitage Blanc L'Orée",
        appellation: "Hermitage AOC",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2019, rvf_score: 19, critics: {
            parker: { score: 100, note: "One of the greatest white Hermitage ever made. Pure Marsanne with extraordinary mineral depth and a finish that goes on forever." },
            wine_spectator: { score: 98, note: "Transcendent. Michel Chapoutier's L'Orée is one of France's greatest white wines." },
            suckling: { score: 99, note: "Extraordinary. Perfect white Rhône with stunning complexity." },
            decanter: { score: 20, note: "A landmark wine. Among the finest white wines on earth." }
          }}
        ]
      }
    ]
  },

  // ===== ★★ 2 STARS =====

  {
    id: 19,
    name: "Domaine Dujac",
    rvf_stars: 2,
    region: "Bourgogne",
    village: "Morey-Saint-Denis",
    type_tags: ["Rouge", "Blanc"],
    description: "자크 세이스가 1967년 설립한 모레 생 드니의 명문 도멘. 전통적인 홀 클러스터(whole-cluster) 양조 기법을 고수하며 향긋하고 복잡한 스타일의 그랑 크뤼 부르고뉴를 생산한다. 섬세하고 향수 같은 아로마가 특징이며, 현재는 아들 제레미와 알렉시가 운영.",
    coords: { lat: 47.1820, lng: 4.9690, place: "Morey-Saint-Denis" },
    wines: [
      {
        id: "w31",
        name: "Clos de la Roche Grand Cru",
        appellation: "Clos de la Roche Grand Cru",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2020, rvf_score: 18, critics: {
            parker: { score: 94, note: "Typical Dujac elegance. Red fruits, earth and spice on a silky, precise frame." },
            wine_spectator: { score: 95, note: "Elegant and complex. Dujac's signature style shines in this grand cru." },
            suckling: { score: 95, note: "Beautiful precision and depth. Outstanding Clos de la Roche." },
            decanter: { score: 18, note: "Quintessential Dujac—complex, fragrant and age-worthy." }
          }}
        ]
      }
    ]
  },

  {
    id: 20,
    name: "Domaine Leroy",
    rvf_stars: 2,
    region: "Bourgogne",
    village: "Vosne-Romanée",
    type_tags: ["Rouge"],
    description: "랄루 비즈-르로아가 DRC를 떠나 설립한 비오다이나미 도멘. 헥타르당 수확량을 극도로 제한하고 자연 이외에 어떤 것도 사용하지 않는 극단적 자연주의 양조로 가격이 천문학적이다. 뮈지니, 샹베르탱, 로마네 생 비방 등 최고의 그랑 크뤼를 보유.",
    coords: { lat: 47.1970, lng: 4.9635, place: "Vosne-Romanée" },
    wines: [
      {
        id: "w32",
        name: "Musigny Grand Cru",
        appellation: "Musigny Grand Cru",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2019, rvf_score: 19, critics: {
            parker: { score: 98, note: "Lalou Bize-Leroy's Musigny is other-worldly. Pure, precise and hauntingly beautiful with extraordinary concentration." },
            wine_spectator: { score: 97, note: "Astonishing depth and complexity. One of the finest wines in Burgundy." },
            suckling: { score: 98, note: "Magnificent. Domaine Leroy Musigny is one of the great wines of the world." },
            decanter: { score: 19, note: "Transcendent Burgundy. Every sip reveals new layers of complexity." }
          }}
        ]
      }
    ]
  },

  {
    id: 21,
    name: "Château Cheval Blanc",
    rvf_stars: 2,
    region: "Bordeaux",
    village: "Saint-Émilion",
    type_tags: ["Rouge"],
    description: "생테밀리옹 최고 등급(Premier Grand Cru Classé A) 샤토. 카베르네 프랑을 주품종으로 사용하는 독특한 블렌딩으로 보르도에서 가장 우아하고 향기로운 레드 와인을 만든다. LVMH 그룹이 소유하며, 양조가 피에르 올리비에 클로에의 지휘 아래 지속적으로 품질을 높이고 있다.",
    coords: { lat: 44.8950, lng: -0.1570, place: "Saint-Émilion" },
    wines: [
      {
        id: "w33",
        name: "Château Cheval Blanc",
        appellation: "Saint-Émilion 1er Grand Cru Classé A",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2021, rvf_score: 18, critics: {
            parker: { score: 96, note: "Supple, refined and elegant with cassis, graphite and floral notes. A beautiful, precise wine." },
            wine_spectator: { score: 95, note: "Refined and complex. Shows the elegance and sophistication of Cheval Blanc." },
            suckling: { score: 96, note: "Exceptional. Pure and precise with wonderful aromatic complexity." },
            decanter: { score: 18, note: "Elegant and complex. The classic Cheval Blanc character shines through." }
          }},
          { year: 2018, rvf_score: 19, critics: {
            parker: { score: 99, note: "Stunning 2018. Pure cassis, plum, and graphite with velvet texture and extraordinary length." },
            wine_spectator: { score: 98, note: "Outstanding. One of the greatest Cheval Blancs in recent memory." },
            suckling: { score: 99, note: "Brilliant. Rich yet precise with magnificent depth." },
            decanter: { score: 19, note: "Exceptional vintage for Cheval Blanc. Age for 20+ years." }
          }}
        ]
      }
    ]
  },

  {
    id: 22,
    name: "Château Léoville Las Cases",
    rvf_stars: 2,
    region: "Bordeaux",
    village: "Saint-Julien",
    type_tags: ["Rouge"],
    description: "상쥘리앙의 슈퍼 세컨드. 그랑 앙클로라 불리는 석벽으로 둘러싸인 최고의 블록에서 생산되는 이 와인은 2등급 중 가장 1등급에 가깝다는 평가를 받는다. 장 위베르 드류는 품질에 대한 극단적 집착으로 유명하며, 특히 좋지 않은 빈티지에는 그랑 뱅 비율을 대폭 줄인다.",
    coords: { lat: 45.1664, lng: -0.7407, place: "Saint-Julien" },
    wines: [
      {
        id: "w34",
        name: "Château Léoville Las Cases",
        appellation: "Saint-Julien 2ème Grand Cru Classé",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2022, rvf_score: 19, critics: {
            parker: { score: 98, note: "The finest Las Cases in years. Inky, massive concentration and extraordinary precision. 'Super Second' at its finest." },
            wine_spectator: { score: 97, note: "Profound. A landmark wine for the estate and the vintage." },
            suckling: { score: 98, note: "Exceptional 2022. Rich, complex and built for the ages." },
            decanter: { score: 19, note: "Outstanding. Confirms Las Cases as the leading 'super second' of Saint-Julien." }
          }}
        ]
      }
    ]
  },

  {
    id: 23,
    name: "Domaine Bonneau du Martray",
    rvf_stars: 2,
    region: "Bourgogne",
    village: "Pernand-Vergelesses",
    type_tags: ["Blanc", "Rouge"],
    description: "코르통-샤를마뉴의 단일 포도밭 도멘. 9.5헥타르 전체가 그랑 크뤼인 독특한 도멘으로 Jean-Charles Le Bault de la Morinière가 오랫동안 운영했다. 현재는 스탠 크로에닉이 인수 후 비오다이나미로 전환했으며 품질이 더욱 높아졌다.",
    coords: { lat: 47.0645, lng: 4.8551, place: "Pernand-Vergelesses" },
    wines: [
      {
        id: "w35",
        name: "Corton-Charlemagne Grand Cru",
        appellation: "Corton-Charlemagne Grand Cru",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2020, rvf_score: 18, critics: {
            parker: { score: 95, note: "Masterful Corton-Charlemagne. Toasty oak, mineral, lemon curd and hazelnut on a creamy yet fresh palate." },
            wine_spectator: { score: 95, note: "Excellent. Benchmark white Burgundy with impressive depth." },
            suckling: { score: 95, note: "Stunning precision and complexity. One of the finest white Burgundies." },
            decanter: { score: 18, note: "Magnificent. Exceptional mineral expression with great aging potential." }
          }}
        ]
      }
    ]
  },

  {
    id: 24,
    name: "E. Guigal",
    rvf_stars: 2,
    region: "Rhône Nord",
    village: "Ampuis",
    type_tags: ["Rouge", "Blanc"],
    description: "론 북부를 세계 무대에 올린 마르셀 기갈과 아들 필립이 이끄는 코트 로티의 전설적 생산자. '라라' 3종(라 무린, 라 랑돈, 라 튀르크)은 세계에서 가장 희소하고 비싼 론 와인으로, 42개월 오크 숙성을 통해 시라의 최고 표현을 보여준다. 가성비 좋은 코트 뒤 론부터 100점 와인까지 방대한 레인지.",
    coords: { lat: 45.4795, lng: 4.7639, place: "Ampuis, Côte-Rôtie" },
    wines: [
      {
        id: "w36",
        name: "Côte-Rôtie La Mouline",
        appellation: "Côte-Rôtie AOC",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2017, rvf_score: 18, critics: {
            parker: { score: 100, note: "Possibly the greatest La Mouline ever. Extraordinary floral character—violets, roses and red fruits of stunning purity." },
            wine_spectator: { score: 98, note: "Brilliant. One of the greatest Guigal La La wines ever produced." },
            suckling: { score: 99, note: "Extraordinary. Floral, complex and hauntingly beautiful." },
            decanter: { score: 19, note: "Transcendent. A benchmark for Côte-Rôtie and Syrah worldwide." }
          }},
          { year: 2016, rvf_score: 19, critics: {
            parker: { score: 100, note: "A masterpiece. Extraordinary floral character that no other wine achieves." },
            wine_spectator: { score: 98, note: "Exceptional. Pure Syrah magic from the Côte Blonde." },
            suckling: { score: 99, note: "A towering La Mouline. One of the greatest ever." },
            decanter: { score: 19, note: "Magnificent. Sets the standard for the appellation." }
          }}
        ]
      }
    ]
  },

  {
    id: 25,
    name: "Domaine Huet",
    rvf_stars: 2,
    region: "Loire",
    village: "Vouvray",
    type_tags: ["Blanc"],
    description: "슈냉 블랑의 성지, 부브레 최고의 도멘. 노엘 피노가 현재 운영하는 이 도멘은 3개의 포도밭(르 오 리외, 클로 뒤 부르, 클로 드 라 비주뉴)에서 드라이, 세크, 드미 섹, 무알뢰, 리쿠뢰까지 다양한 스타일의 완벽한 슈냉 블랑을 생산한다. 오래된 빈티지는 50년 이상 진화하는 놀라운 숙성력을 자랑한다.",
    coords: { lat: 47.3976, lng: 0.8246, place: "Vouvray" },
    wines: [
      {
        id: "w37",
        name: "Le Haut Lieu Moelleux",
        appellation: "Vouvray AOC",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2018, rvf_score: 18, critics: {
            parker: { score: 96, note: "Extraordinary Vouvray. Honey, quince, ginger and mineral freshness in perfect balance. Will age for 50+ years." },
            wine_spectator: { score: 95, note: "Magnificent. One of the greatest Vouvray producers at their finest." },
            suckling: { score: 96, note: "Brilliant. Richness and freshness in perfect harmony." },
            decanter: { score: 18, note: "Exceptional. Benchmark Chenin Blanc from the Loire." }
          }}
        ]
      }
    ]
  },

  // ===== ★ 1 STAR =====

  {
    id: 26,
    name: "Henri Bourgeois",
    rvf_stars: 1,
    region: "Loire",
    village: "Chavignol (Sancerre)",
    type_tags: ["Blanc", "Rouge"],
    description: "상세르의 대표적 생산자. 앙리 부르주아 가문은 10대에 걸쳐 상세르와 푸이 퓌메에서 소비뇽 블랑을 재배해왔다. 레 몽 당네 등 최고의 상세르 포도밭을 소유하며 산도와 미네랄이 돋보이는 고품질 루아르 화이트를 생산한다.",
    coords: { lat: 47.3333, lng: 2.8500, place: "Sancerre" },
    wines: [
      {
        id: "w38",
        name: "Sancerre Rouge Les Monts Damnés",
        appellation: "Sancerre AOC",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2021, rvf_score: 16, critics: {
            parker: { score: 90, note: "Delicious Sancerre Rouge with pure Pinot Noir fruit and beautiful mineral precision." },
            wine_spectator: { score: 90, note: "Elegant and precise. Shows the terroir of Les Monts Damnés beautifully." },
            suckling: { score: 91, note: "Excellent purity and focus. Fine Sancerre with real character." },
            decanter: { score: 16, note: "Fresh and precise. A lovely expression of Loire Pinot Noir." }
          }}
        ]
      }
    ]
  },

  {
    id: 27,
    name: "De Ladoucette",
    rvf_stars: 1,
    region: "Loire",
    village: "Pouilly-sur-Loire",
    type_tags: ["Blanc"],
    description: "푸이 퓌메의 대표 생산자. 라두세트 가문은 18세기부터 샤토 드 누아가 포도밭을 소유해온 역사적 도멘이다. 바롱 드 L은 도멘의 플래그십 퀴베로 극소량만 생산되는 소비뇽 블랑의 정수. 연기(fumé)와 부싯돌 미네랄이 돋보이는 푸이 퓌메의 고전.",
    coords: { lat: 47.2833, lng: 2.9500, place: "Pouilly-sur-Loire" },
    wines: [
      {
        id: "w39",
        name: "Pouilly-Fumé Baron de L",
        appellation: "Pouilly-Fumé AOC",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2022, rvf_score: 16, critics: {
            parker: { score: 91, note: "Brilliant Pouilly-Fumé. Crisp, precise and mineral with beautiful citrus and grassland aromas." },
            wine_spectator: { score: 90, note: "Classic Pouilly-Fumé with excellent focus and varietal character." },
            suckling: { score: 92, note: "One of the finest Pouilly-Fumés. Pure and complex." },
            decanter: { score: 16, note: "Excellent. De Ladoucette's premium cuvée at its best." }
          }}
        ]
      }
    ]
  },

  {
    id: 28,
    name: "Château Beaucastel",
    rvf_stars: 1,
    region: "Rhône Sud",
    village: "Châteauneuf-du-Pape",
    type_tags: ["Rouge", "Blanc"],
    description: "페랭 가문이 대대로 운영하는 샤토뇌프 뒤 파프의 명문. 13가지 전통 품종을 모두 사용하는 복잡한 블렌딩으로 유명하며, 특히 루산느 주품종의 화이트 와인은 세계 최고의 화이트 론으로 꼽힌다. 비오다이나미 농법의 선구자로 자연과 조화로운 포도 재배를 이어가고 있다.",
    coords: { lat: 44.0600, lng: 4.8350, place: "Châteauneuf-du-Pape" },
    wines: [
      {
        id: "w40",
        name: "Châteauneuf-du-Pape Blanc",
        appellation: "Châteauneuf-du-Pape AOC",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2021, rvf_score: 17, critics: {
            parker: { score: 93, note: "Extraordinary white. Roussanne dominates with honey, beeswax, hazelnut and exotic spices on a rich, textured palate." },
            wine_spectator: { score: 92, note: "Rich and complex. One of the finest white Châteauneuf-du-Pape." },
            suckling: { score: 93, note: "Superb. Rich, complex and age-worthy white Rhône." },
            decanter: { score: 17, note: "Exceptional white blend. Beaucastel Blanc at its finest." }
          }}
        ]
      }
    ]
  },

  {
    id: 29,
    name: "Domaine Santa Duc",
    rvf_stars: 1,
    region: "Rhône Sud",
    village: "Gigondas",
    type_tags: ["Rouge"],
    description: "지공다스 최고의 생산자 중 하나. 이브 그라의 지두 산타 뒤크는 수령 높은 그르나슈 나무와 최소한의 개입으로 지공다스의 강건함과 복잡성을 극대화한다. 오 가리그는 가장 오래된 포도나무에서 생산되는 도멘의 대표 퀴베.",
    coords: { lat: 44.1700, lng: 4.9833, place: "Gigondas" },
    wines: [
      {
        id: "w41",
        name: "Gigondas Les Hautes Garrigues",
        appellation: "Gigondas AOC",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2020, rvf_score: 17, critics: {
            parker: { score: 92, note: "Brilliant Gigondas. Earthy, spicy Grenache fruit and outstanding structure. Excellent value." },
            wine_spectator: { score: 91, note: "Complex and well-structured. One of the top Gigondas producers." },
            suckling: { score: 92, note: "Excellent. Rich and spicy with great depth." },
            decanter: { score: 17, note: "Impressive depth and terroir expression. Outstanding Gigondas." }
          }}
        ]
      }
    ]
  },

  {
    id: 30,
    name: "Domaine Weinbach",
    rvf_stars: 1,
    region: "Alsace",
    village: "Kaysersberg",
    type_tags: ["Blanc"],
    description: "알자스 최고의 도멘 중 하나. 파예 가족이 운영하는 클로 데 카퓌생의 수녀원 포도밭을 중심으로 리슬링, 게뷔르츠트라미너, 피노 그리 등 알자스 전통 품종에서 탁월한 와인을 생산한다. 슐로스베르크 그랑 크뤼는 화강암 토양에서 탄생하는 순수한 리슬링의 정수.",
    coords: { lat: 48.1383, lng: 7.2614, place: "Kaysersberg, Alsace" },
    wines: [
      {
        id: "w42",
        name: "Alsace Grand Cru Schlossberg Riesling",
        appellation: "Alsace Grand Cru Schlossberg",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2021, rvf_score: 17, critics: {
            parker: { score: 93, note: "Exceptional Alsace Riesling with pure mineral character, lime, slate and flowers." },
            wine_spectator: { score: 93, note: "Brilliant. One of the finest expressions of Schlossberg terroir." },
            suckling: { score: 94, note: "Stunning Riesling with extraordinary purity and mineral depth." },
            decanter: { score: 17, note: "Outstanding. The Schlossberg terroir comes through beautifully." }
          }}
        ]
      }
    ]
  },

  {
    id: 31,
    name: "Domaine de la Pépière",
    rvf_stars: 1,
    region: "Loire",
    village: "Maisdon-sur-Sèvre",
    type_tags: ["Blanc"],
    description: "뮈스카데 최고의 생산자. 마르크 올리비에 가 운영하는 이 도멘은 오랜 쉬르 리(sur lie) 숙성과 테루아 표현을 통해 뮈스카데를 세계 수준의 화이트 와인으로 끌어올렸다. 특히 클리송, 에크레니에르 등 단일 포도밭 시리즈는 미슐랭 레스토랑에서도 주목받는 가성비 최고의 루아르 화이트.",
    coords: { lat: 47.0833, lng: -1.4000, place: "Maisdon-sur-Sèvre" },
    wines: [
      {
        id: "w43",
        name: "Muscadet Sèvre et Maine Sur Lie",
        appellation: "Muscadet Sèvre et Maine AOC",
        type: "Blanc",
        image: null,
        vintages: [
          { year: 2022, rvf_score: 16, critics: {
            parker: { score: 89, note: "Excellent Muscadet with real depth from extended lees aging. Citrus, mineral and subtle yeasty notes." },
            wine_spectator: { score: 88, note: "Very good. One of the finest Muscadet producers." },
            suckling: { score: 90, note: "Impressive. La Pépière shows Muscadet at its finest." },
            decanter: { score: 16, note: "Great value and excellent quality. Benchmark Muscadet." }
          }}
        ]
      }
    ]
  },

  {
    id: 32,
    name: "Domaine Tempier",
    rvf_stars: 1,
    region: "Provence",
    village: "Le Plan-du-Castellet",
    type_tags: ["Rouge", "Blanc", "Rosé"],
    description: "방돌 AOC의 아이콘. 루시앙 페이로가 방돌의 명성을 세계에 알렸으며 현재는 베르크-파레 가문이 이어받아 운영한다. 무르베드르 주품종의 강건하고 개성 넘치는 레드 와인은 프로방스 최고의 레드로 꼽히며, 포도밭 특성에 따른 여러 큐베가 생산된다.",
    coords: { lat: 43.1325, lng: 5.7539, place: "Bandol, Provence" },
    wines: [
      {
        id: "w44",
        name: "Bandol Rouge",
        appellation: "Bandol AOC",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2020, rvf_score: 17, critics: {
            parker: { score: 93, note: "Classic Tempier Bandol. Mourvèdre dominates with dark fruit, herbs and iron mineral on a structured, age-worthy frame." },
            wine_spectator: { score: 92, note: "Excellent. Domaine Tempier defines Bandol and this vintage is no exception." },
            suckling: { score: 92, note: "Superb. One of France's most characterful reds." },
            decanter: { score: 17, note: "Benchmark Bandol. Tempier at their characterful best." }
          }}
        ]
      }
    ]
  },

  {
    id: 33,
    name: "Château Pichon-Longueville Comtesse de Lalande",
    rvf_stars: 3,
    region: "Bordeaux",
    village: "Pauillac",
    type_tags: ["Rouge"],
    description: "포이약 2등급 샤토 중 최고의 평가를 받는 '슈퍼 세컨드'. 니콜라 드 라코타 이후 지속적 투자와 개선으로 현재는 1등급에 버금가는 품질을 자랑한다. 카베르네 소비뇽이 중심이지만 메를로 비율이 상대적으로 높아 포이약치고 부드럽고 접근성이 좋다.",
    coords: { lat: 45.2196, lng: -0.7408, place: "Pauillac" },
    wines: [
      {
        id: "w45",
        name: "Château Pichon-Longueville Comtesse de Lalande",
        appellation: "Pauillac 2ème Grand Cru Classé",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2022, rvf_score: 19, critics: {
            parker: { score: 98, note: "Brilliant 2022. Blackcurrant, cedar and tobacco with exceptional depth and a polished, lingering finish." },
            wine_spectator: { score: 97, note: "Elegant and complex with great aging potential. Benchmark Pauillac." },
            suckling: { score: 98, note: "Stunning depth and precision. One of the wines of the vintage." },
            decanter: { score: 19, note: "Classic Pichon style with the generosity of the 2022 vintage." }
          }}
        ]
      }
    ]
  },

  {
    id: 34,
    name: "Clos de Tart",
    rvf_stars: 3,
    region: "Bourgogne",
    village: "Morey-Saint-Denis",
    type_tags: ["Rouge"],
    description: "모레 생 드니의 7.5헥타르 독점 그랑 크뤼. 2018년 피노 가문에서 아르테미스 도멘(프랑수아 피노)으로 소유권이 이전된 후 자크 드부아가 양조를 맡아 품질이 크게 향상되었다. 천년 역사의 석벽(clos)으로 둘러싸인 단일 포도밭에서 탄생하는 모레의 아이콘.",
    coords: { lat: 47.1815, lng: 4.9686, place: "Morey-Saint-Denis" },
    wines: [
      {
        id: "w46",
        name: "Clos de Tart Monopole",
        appellation: "Morey-Saint-Denis Grand Cru",
        type: "Rouge",
        image: null,
        vintages: [
          { year: 2020, rvf_score: 19, critics: {
            parker: { score: 97, note: "Exceptional under new ownership. Precise, complex with beautiful red fruit and exceptional length." },
            wine_spectator: { score: 97, note: "Brilliant. The new regime has transformed this historic monopole." },
            suckling: { score: 98, note: "Stunning precision and depth. One of the finest Clos de Tarts ever made." },
            decanter: { score: 19, note: "A triumphant return to form. Benchmark Morey-Saint-Denis." }
          }}
        ]
      }
    ]
  }
];

// Critics information
const CRITICS = {
  parker: { name: "Robert Parker", publication: "Wine Advocate", scale: "100점", description: "세계 최고의 와인 평론가. 100점 만점제를 대중화했다.", avatar: "🍷" },
  wine_spectator: { name: "Wine Spectator", publication: "Wine Spectator Magazine", scale: "100점", description: "세계 최대 발행부수의 와인 잡지. 연간 2만여 종 블라인드 평가.", avatar: "📰" },
  suckling: { name: "James Suckling", publication: "JamesSuckling.com", scale: "100점", description: "전 Wine Spectator 유럽 편집장. 연간 2만5천여 종 평가.", avatar: "🏆" },
  decanter: { name: "Decanter", publication: "Decanter Magazine", scale: "20점", description: "영국 최고의 와인 잡지. 드캔터 월드 와인 어워즈 주관.", avatar: "🥇" }
};
