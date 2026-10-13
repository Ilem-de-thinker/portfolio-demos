/**
 * MATEO THORNE — CINEMA PORTFOLIO CONTENT
 * Edit this single file to update films, awards, stills, and director contact info.
 */

export const content = {
  meta: {
    name: "Mateo Thorne",
    discipline: "Film Director & Motion Auteur",
    studios: "London & Reykjavik",
    aspectRatio: "2.39:1 Anamorphic",
    reelYear: "2026 Director's Slate",
    heroImage: "/src/assets/images/cinema_film_still_1791903962935.jpg"
  },

  hero: {
    title: "MATEO THORNE",
    discipline: "DIRECTOR / CINEMATOGRAPHER",
    logline: "Every life is a sequence of scenes waiting for the right light.",
    timecode: "00:04:18:22",
    fps: "24 FPS · ARRI 65MM & PANAVISION C-SERIES"
  },

  statement: {
    sceneNum: "SCENE 00 // PRELUDE",
    headline: "I believe true cinema lives in the pregnant pause before words are spoken.",
    paragraphs: [
      "I began my directing career shooting weather documentaries along the desolate volcanic shores of southern Iceland. I learned that you cannot rush a landscape, and you cannot force an actor to reveal their soul under harsh artificial bulbs.",
      "My films explore silence, geological time, and fragile human intimacy. Whether directing an independent 35mm narrative feature or an atmospheric motion campaign, I prioritize natural twilight, bespoke anamorphic glass, and immersive spatial acoustics."
    ],
    slateStats: [
      { label: "Venice / Cannes Selections", value: "07" },
      { label: "Feature Length Films", value: "03" },
      { label: "Festival Nominations", value: "18" },
      { label: "Rotten Tomatoes Critic Avg", value: "94%" }
    ]
  },

  films: [
    {
      id: "arctic-voyage",
      sceneCode: "SCENE 01 / 04",
      title: "The Arctic Voyage",
      year: "2025",
      runtime: "108 MIN",
      optics: "Panavision Ultra Vista Anamorphic",
      location: "Svalbard & Reykjavik",
      image: "/src/assets/images/cinema_film_still_1791903962935.jpg",
      synopsis: "A solitary glaciologist uncovers low-frequency seismic acoustic anomalies beneath the retreating polar ice shelf.",
      directorNote: "Filmed over 42 days in sub-zero polar twilight using customized insulated ARRI 65 housings. Winner of Best Cinematography at Reykjavik International."
    },
    {
      id: "nocturne-echoes",
      sceneCode: "SCENE 02 / 04",
      title: "Nocturne of Echoes",
      year: "2024",
      runtime: "94 MIN",
      optics: "Cooke Anamorphic /i Full Frame Plus",
      location: "London & Berlin",
      image: "/src/assets/images/noir_fashion_editorial_1791903961538.jpg",
      synopsis: "A cellist suffering from progressive hearing degradation attempts to record the ambient resonance of empty underground stations.",
      directorNote: "Explores auditory isolation and urban alienation. Shot on location with zero studio dubbing—all Foley recorded live on 35mm magnetic tape."
    },
    {
      id: "silent-frequencies",
      sceneCode: "SCENE 03 / 04",
      title: "Silent Frequencies",
      year: "2024",
      runtime: "18 MIN (SHORT)",
      optics: "Kowa Prominar Anamorphic Primes",
      location: "Tokyo, Japan",
      image: "/src/assets/images/swiss_architecture_facade_1791903963566.jpg",
      synopsis: "An old telegraph repairman discovers unmapped radio signals bouncing off the glass towers of Shinjuku.",
      directorNote: "Nominated for the Grand Jury Prize at Sundance Film Festival. A tribute to analogue radio frequencies and twilight streetscapes."
    },
    {
      id: "chronos-70mm",
      sceneCode: "SCENE 04 / 04",
      title: "Chronos in 70mm",
      year: "2023",
      runtime: "124 MIN",
      optics: "IMAX 15/70mm Film Cameras",
      location: "Atacama Desert, Chile",
      image: "/src/assets/images/atelier_ceramic_vessel_1791903962861.jpg",
      synopsis: "Chronicle of deep-space astronomers residing at high-altitude radio observatories amidst profound solitude.",
      directorNote: "Screened in 70mm roadshow engagements worldwide. Scored with live church organ and analog synth textures."
    }
  ],

  disciplines: [
    {
      title: "Anamorphic Optical Direction",
      desc: "Deliberate use of vintage cylindrical glass lenses to create painterly oval bokeh, organic lens flares, and panoramic intimacy."
    },
    {
      title: "Natural Twilight Choreography",
      desc: "Scheduling productions around the 'Blue Hour' and overcast mist to preserve raw skin textures and natural sky luminance."
    },
    {
      title: "Immersive Binaural Soundscapes",
      desc: "Directing sound design from the scripting stage, treating acoustic silence as an emotional character on screen."
    },
    {
      title: "Analogue 35mm & 65mm Workflow",
      desc: "Preserving the photochemical richness, fine halation, and organic grain of Kodak Vision3 motion picture stock."
    }
  ],

  festivals: [
    { year: "2025", event: "Venice International Film Festival", distinction: "Silver Lion — Best Director Nominee" },
    { year: "2024", event: "Sundance Film Festival", distinction: "Grand Jury Prize — Short Film Selection" },
    { year: "2024", event: "Reykjavik Film Festival", distinction: "Winner — Best Cinematic Vision" },
    { year: "2023", event: "Cannes Film Festival", distinction: "Un Certain Regard Official Selection" },
    { year: "2021", event: "British Academy (BAFTA)", distinction: "Outstanding Debut Direction Nominee" }
  ],

  testimonials: [
    {
      quote: "Mateo Thorne shoots landscapes with the psychological intimacy of an Ingmar Bergman face. You don't just watch his scenes—you breathe them.",
      speaker: "Clara Lindqvist",
      title: "Director of Programming, Nordic Film Commission"
    },
    {
      quote: "Thorne is one of the few directors working today who understands that silence on film can be deafening.",
      speaker: "Julian Sterling",
      title: "Senior Film Critic, The Cinema Broadsheet"
    }
  ],

  contact: {
    slate: "DIRECTOR'S SLATE // 2026 INQUIRY",
    subtext: "Representation via London & Los Angeles. Accepting feature scripts, narrative series, and auteur commercial motion projects.",
    agent: "Creative Artists Management, London",
    email: "direct@mateothorne.film",
    phone: "+44 20 7946 0912"
  }
};
