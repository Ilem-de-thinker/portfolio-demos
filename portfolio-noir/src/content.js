/**
 * JULIAN VANCE — PORTFOLIO CONTENT FILE
 * Edit this single file to update all copy, projects, exhibitions, and contact details.
 */

export const content = {
  meta: {
    name: "Julian Vance",
    discipline: "Haute Couture & Monochrome Photographer",
    baseLocations: "Paris 48°51'N · Kyoto 35°01'N",
    availability: "Available Autumn / Winter 2026",
    heroImage: "/src/assets/images/noir_fashion_editorial_1791903961538.jpg",
  },

  hero: {
    firstName: "JULIAN",
    lastName: "VANCE",
    kicker: "ANALOGUE MONOCHROME & HIGH FASHION",
    caption: "Recording the tension where shadow refuses to yield.",
  },

  manifesto: [
    "I do not capture light.",
    "I record the tension where shadow refuses to yield.",
    "In a world drowned in saturation,",
    "monochrome is not an absence—it is the raw bone of architecture,",
    "flesh, and quiet surrender."
  ],

  about: {
    headline: "Fifteen years of deliberate silence behind medium format glass.",
    storyParagraphs: [
      "I was trained in the darkrooms of Montparnasse under masters who treated gelatin silver prints as physical sculpture. I never shoot continuous burst. Every frame is calculated through deep inhalation, waiting for the split-second when a subject's posture stops performing for the camera.",
      "My work divides between Paris haute couture salons and the stone temple corridors of northern Kyoto. I carry two Hasselblad bodies and custom hand-ground filters. When I shoot, I look for geometry, heavy cloth, and the dark weight beneath human bone."
    ],
    stats: [
      { label: "Solo Monographs", value: "04" },
      { label: "Darkroom Prints Made", value: "1,200+" },
      { label: "Years Practicing", value: "15" },
      { label: "Permanent Collections", value: "06" },
    ]
  },

  projects: [
    {
      id: "vogue-monograph",
      index: "01",
      title: "Vogue Hommes: L'Ombre",
      year: "2025",
      location: "Paris, France",
      medium: "Hasselblad 503CW · Kodak Tri-X 400",
      image: "/src/assets/images/noir_fashion_editorial_1791903961538.jpg",
      description: "A 48-page editorial monograph examining tailored wool and raw architectural shadows across the concrete pavilions of Belleville.",
      statement: "Commissioned for the September Haute Couture issue. Shot exclusively between 4:30 PM and dusk during late October fog. No digital retouching—scanned directly from exhibition darkroom prints."
    },
    {
      id: "kyoto-obsidian",
      index: "02",
      title: "Kyoto Obsidian Studies",
      year: "2024",
      location: "Kyoto, Japan",
      medium: "Leica M-A · Ilford HP5 Plus",
      image: "/src/assets/images/swiss_architecture_facade_1791903963566.jpg",
      description: "Exploration of burnt cedar facade textures (yakisugi) and solitary figures navigating misty dawn alleyways near Gion.",
      statement: "A two-year residency studying how morning moisture reflects off blackened cedar wood. Hand-printed on double-weight fibre paper in my Higashiyama darkroom."
    },
    {
      id: "palais-shadows",
      index: "03",
      title: "Palais de Tokyo Solitude",
      year: "2024",
      location: "Paris, France",
      medium: "Plaubel Makina 67 · Fomapan 200",
      image: "/src/assets/images/cinema_film_still_1791903962935.jpg",
      description: "Architectural nude and structural study exploring the stark brutalist concrete colosseum and natural skylight shafts.",
      statement: "Awarded the 2024 Prix de l'Image Contemporaine. The series confronts human fragility against post-war brutalist monuments."
    },
    {
      id: "silent-anatomy",
      index: "04",
      title: "Anima Nera: The Dancers",
      year: "2023",
      location: "Milan, Italy",
      medium: "Linhof Master Technika 4x5",
      image: "/src/assets/images/atelier_ceramic_vessel_1791903962861.jpg",
      description: "Large-format 4x5 sheet film study of the Paris Opera ballet soloists during unlit rehearsal intervals.",
      statement: "Shot on large-format sheet film requiring 3-minute exposures under continuous low tungsten lighting. Preserves the muscle fatigue and breath of the performers."
    }
  ],

  disciplines: [
    {
      name: "Silver Gelatin Darkroom Printing",
      summary: "Every exhibition print is manually exposed and developed by my own hands on archival Ilford Multigrade FB Classic paper."
    },
    {
      name: "Haute Couture Monographs",
      summary: "Collaborating with independent fashion houses to create physical collector art-books rather than disposable digital lookbooks."
    },
    {
      name: "Large-Format Sheet Photography",
      summary: "Working with 4x5 and 8x10 view cameras when supreme textural resolution and architectural perspective control are non-negotiable."
    },
    {
      name: "Curation & Installation Art",
      summary: "Designing bespoke museum hanging systems using hand-welded blackened steel rails and museum-grade non-reflective glass."
    }
  ],

  journey: [
    { year: "2025", title: "Solo Monograph: L'Ombre", venue: "Galerie Vivienne, Paris" },
    { year: "2024", title: "Kyoto Obsidian Retrospective", venue: "Museum of Modern Art, Kyoto" },
    { year: "2023", title: "Grand Prix de la Photographie Noir", venue: "Arles Photography Festival" },
    { year: "2021", title: "Permanent Acquisition", venue: "Bibliothèque Nationale de France" },
    { year: "2018", title: "First Monograph: The Silent Threshold", venue: "Published by Éditions de Minuit" }
  ],

  testimonials: [
    {
      quote: "Julian doesn't take pictures of models. He carves them out of obsidian and velvet. His work has the weight of classical bronze.",
      author: "Hélène de Saint-Germain",
      role: "Senior Fashion Editor, Revue Internationale"
    },
    {
      quote: "In an era of fleeting smartphone imagery, Vance's darkroom devotion feels like an act of sacred rebellion.",
      author: "Kenzo Takahashi",
      role: "Chief Curator, Kyoto Center for Contemporary Photography"
    }
  ],

  contact: {
    kicker: "COMMISSIONS & MONOGRAPHS",
    heading: "Let us discuss your next monograph or editorial campaign.",
    email: "julian@julianvance.studio",
    phone: "+33 1 42 68 55 00",
    studioAddress: "14 Rue de Turenne, 75004 Paris",
    socials: [
      { name: "Instagram", url: "https://instagram.com" },
      { name: "Artsy", url: "https://artsy.net" },
      { name: "Substack", url: "https://substack.com" }
    ]
  }
};
