/**
 * CAMILLE LAURENT — ATELIER PORTFOLIO CONTENT
 * Edit this single file to update all vessels, botanical editions, notes, and inquiries.
 */

export const content = {
  meta: {
    name: "Camille Laurent",
    craft: "Ceramicist & Botanical Illustrator",
    studios: "Apt, Provence & Uji, Kyoto",
    firingMethod: "Anagama Wood Kiln Fired",
    availability: "Private Commissions Open for 2026",
    heroImage: "/src/assets/images/atelier_ceramic_vessel_1791903962861.jpg"
  },

  hero: {
    kicker: "HAND-THROWN VESSELS & BOTANICAL LITHOGRAPHS",
    line1: "The patience of clay,",
    line2: "the memory of water.",
    subtext: "I spend weeks kneading wild stoneware, waiting for raw earth to take form upon the wheel."
  },

  journal: {
    heading: "Listening to the silence between the wheel and the wood kiln.",
    paragraphs: [
      "I live and work between an ancient stone mill in the Luberon valley and an artisanal pottery shed outside Uji. I harvest my own clays from stream beds, filtering out chalk and river silt by hand over weeks of sedimentation.",
      "My pots are not uniform. When wood ash flies through an anagama kiln at 1,300°C for seventy-two hours, the flame paints its own landscape upon the vessel. I only make pieces meant to be held with both hands in quiet moments."
    ],
    stats: [
      { number: "72 Hrs", label: "Continuous Wood Firing" },
      { number: "40+", label: "Wild Clay Harvest Sites" },
      { number: "100%", label: "Natural Ash Glazes" },
      { number: "12 Yrs", label: "Devoted Wheel Work" }
    ]
  },

  vessels: [
    {
      id: "terra-alba",
      series: "COLLECTION I",
      name: "Terra Alba Amphora",
      clay: "Local Luberon White Stoneware",
      finish: "Raw Feldspar & Olive Ash",
      year: "2025",
      image: "/src/assets/images/atelier_ceramic_vessel_1791903962861.jpg",
      note: "Coil-built and paddle-shaped over three days. Fired with dry oak off-cuts, leaving a tactile, powdery mineral crust."
    },
    {
      id: "botanical-herbarium",
      series: "COLLECTION II",
      name: "Botanical Herbarium Vol. IV",
      clay: "Japanese Mulberry Washi & Hand Ink",
      finish: "Oak Gall & Crushed Mineral Pigments",
      year: "2024",
      image: "/src/assets/images/noir_fashion_editorial_1791903961538.jpg",
      note: "A hand-bound monograph of thirty-two wild flora discovered along the riverbeds of Haute-Provence."
    },
    {
      id: "smoked-raku",
      series: "COLLECTION III",
      name: "Smoked Raku Chawan",
      clay: "Coarse Shigaraki Mountain Clay",
      finish: "Cedar Smoke & Natural Carbon Luster",
      year: "2024",
      image: "/src/assets/images/cinema_film_still_1791903962935.jpg",
      note: "Pulled glowing red from the kiln and plunged into cedar shavings. Designed to warm the palms during winter tea ceremonies."
    },
    {
      id: "solstice-litho",
      series: "COLLECTION IV",
      name: "Solstice Vessel Forms",
      clay: "Dark Iron Stoneware",
      finish: "River Sediment Slip & Iron Lustre",
      year: "2023",
      image: "/src/assets/images/swiss_architecture_facade_1791903963566.jpg",
      note: "Monumental floor urn exploring ancient Mediterranean silhouettes with textured, river-stone grog."
    }
  ],

  earthMaterials: [
    {
      title: "Wild Riverbed Clay",
      description: "Gathered seasonally after winter rainfalls when mineral deposits wash down from the limestone gorges."
    },
    {
      title: "Botanical Plant Inks",
      description: "Boiled walnut husks, oak galls, and wild indigo brewed in small copper pots for book illuminations."
    },
    {
      title: "Wood Ash Alchemy",
      description: "Collecting pine and vine pruning ash from local vineyards to mix subtle Celadon and Nuka glazes."
    },
    {
      title: "Handmade Washi Pages",
      description: "Cold-pressed Kozo fibre paper made by sixth-generation papermakers in the mountains of Fukui."
    }
  ],

  residencyJourney: [
    { year: "2025", exhibition: "Terra Incognita Monograph Show", place: "Galerie Dutko, Paris" },
    { year: "2024", exhibition: "Tea Vessels of the Solstice", place: "Toraya Gallery, Kyoto" },
    { year: "2023", exhibition: "Artist in Residence (Anagama Kiln)", place: "Shigaraki Ceramic Cultural Park" },
    { year: "2021", exhibition: "Living Earth Sculpture Award", place: "Fondation Carmignac, Porquerolles" }
  ],

  collectorLetters: [
    {
      letter: "Holding Camille's tea bowl in the quiet of early morning transforms an ordinary cup into an act of reverence. The texture feels like weathered river stone.",
      name: "Mireille Chardin",
      location: "Private Collector, Geneva"
    },
    {
      letter: "Her botanical illustrations remind me of renaissance herbalists, yet the forms breathe with modern Japanese restraint.",
      name: "Tetsuya Endo",
      location: "Gallery Director, Kyoto"
    }
  ],

  contact: {
    greeting: "A warm welcome to my studio.",
    description: "I welcome private collectors and gallery curators by appointment at my Provence atelier between April and October.",
    atelierLocation: "Chemin du Vieux Moulin, 84400 Apt, France",
    email: "camille@atelierlaurent.fr",
    socials: [
      { label: "Studio Journal", url: "https://instagram.com" },
      { label: "Edition Catalogue", url: "https://atelierlaurent.fr" }
    ]
  }
};
