/**
 * Studio Configuration for Portfolio Foundry / Selector
 * Easily adjust WhatsApp contact details and showcase blueprints.
 */

export const WHATSAPP_NUMBER = "2348168950922"; // 08168950922 in international format, no + or spaces

export const DESIGNS = [
  {
    id: "noir",
    name: "Noir Editorial",
    persona: "Photographer / Visual Artist",
    vibe: "High-contrast monochrome haute editorial",
    swatches: ["#0E0E0E", "#F8F6F0", "#D11A2A"],
    url: "?portfolio=noir",
    tagline: "Where shadow refuses to yield",
    description: "Inspired by Paris Vogue monographs and silver gelatin prints. Features kinetic per-letter typography that reacts to cursor proximity, a masked spotlight portrait reveal, scrubbed manifesto scroll, and a floating typographic work index.",
    highlights: ["20vw+ reactive per-letter hero", "Spotlight cursor mask portrait", "Floating image preview index", "Ivory & crimson dual theme"],
    previewType: "noir"
  },
  {
    id: "swiss",
    name: "Swiss Brutal",
    persona: "Product Designer / Systems Architect",
    vibe: "Rigid 12-column architectural precision",
    swatches: ["#000000", "#FFFFFF", "#FF4800"],
    url: "?portfolio=swiss",
    tagline: "Form stripped to its immutable skeleton",
    description: "Heavily structured functionalist grid with exposed structural hairpins, opposing infinite marquees modulated by scroll velocity, sticky stacked project panels that scale backwards, and live Zurich atomic telemetry.",
    highlights: ["Exposed 12-column hairline grid", "Velocity-scrubbed counter-marquees", "Sticky architectural stacked cards", "Signal orange focal energy"],
    previewType: "swiss"
  },
  {
    id: "cinema",
    name: "Cinema",
    persona: "Filmmaker / Motion Director",
    vibe: "Anamorphic 35mm title sequence atmosphere",
    swatches: ["#080808", "#E7E5E0", "#D4AF37"],
    url: "?portfolio=cinema",
    tagline: "Every life is a sequence of scenes",
    description: "Opens with widescreen letterbox bars parting over atmospheric Icelandic footage. Pinned multi-layer parallax hero where the director title expands and dissolves, followed by a pinned horizontal reel gallery and chapter cards.",
    highlights: ["Letterbox opening sequence", "Pinned multi-depth parallax scene", "Horizontal reel gallery with chapters", "35mm grain & muted burnished gold"],
    previewType: "cinema"
  },
  {
    id: "atelier",
    name: "Atelier",
    persona: "Ceramicist / Botanical Illustrator",
    vibe: "Tactile organic wabi-sabi calm",
    swatches: ["#161311", "#FBF8F3", "#C37B5C"],
    url: "?portfolio=atelier",
    tagline: "The patience of clay, the memory of water",
    description: "Soft, hypnotic luxury. Features an organic morphing SVG blob gently breathing behind an oversized italic-mixed headline, magnetic handcrafted buttons, expanding rounded mask reveals, and spring-physics testimonial letters.",
    highlights: ["Hypnotic SVG morphing blob", "Masked rising typographic stagger", "Asymmetric parallax image pairs", "Terracotta, clay & wild sage tones"],
    previewType: "atelier"
  },
  {
    id: "signal",
    name: "Signal",
    persona: "Software Systems Engineer / Core Architect",
    vibe: "Sub-millisecond algorithmic circuit precision",
    swatches: ["#05080E", "#F0F4F8", "#00F0FF"],
    url: "?portfolio=signal",
    tagline: "Deterministic systems at light speed",
    description: "Built for engineers operating at the metal. Real-time interactive particle/wave field responding to cursor physics, matrix-grade headline character decode scramble, 3D perspective card tilt with cyan edge gleam, and scroll-scrubbed circuit trace drawing.",
    highlights: ["Interactive reactive particle canvas", "Matrix character scramble decode", "Scroll-linked circuit bus tracing", "3D gyroscope card tilt & cyan glow"],
    previewType: "signal"
  }
];

export const HOW_IT_WORKS_STEPS = [
  {
    step: "01",
    title: "Select Your Blueprint",
    description: "Browse the 5 bespoke architectures above. Test their motion, typography, and dark modes until you find the exact creative spirit that resonates with your discipline."
  },
  {
    step: "02",
    title: "Supply Your Narrative",
    description: "Every portfolio is driven by a single, clean content.js file. Simply enter your bio, projects, awards, and socials into that single file—or let our studio tailor it for you."
  },
  {
    step: "03",
    title: "Deploy to Your Domain",
    description: "Zero external frameworks or subscriptions. You receive a pristine, 100% self-contained folder that deploys instantly to Vercel, Netlify, Cloudflare, or your custom domain."
  }
];

export const INCLUDED_FEATURES = [
  {
    title: "100% Standalone Codebase",
    description: "No subscription lock-in, no headless CMS dependencies, no shared code. You own every line of code forever."
  },
  {
    title: "Hand-Crafted Motion Language",
    description: "Each design features custom spring physics, velocity scrubbers, and custom cursors specifically tuned to its aesthetic rhythm."
  },
  {
    title: "Genuinely Designed Dual Themes",
    description: "Not an automatic color inversion—each light and dark palette is an individually art-directed color harmony with smooth circular transitions."
  },
  {
    title: "Zero-Fatigue Single Content File",
    description: "Edit your entire portfolio from one human-readable file (src/content.js). Update projects or copy in 60 seconds."
  },
  {
    title: "Mobile-First Bespoke Experience",
    description: "Every hover state has a tactile touch alternative. No awkward desktop-to-mobile scaling artifacts."
  },
  {
    title: "Sub-Second Performance",
    description: "Compositor-only animations, lightweight assets, semantic HTML, and zero bloated component libraries."
  }
];

export const FAQS = [
  {
    question: "How do I edit my projects and personal details?",
    answer: "Each portfolio project contains a single file named `src/content.js`. Opening that file reveals clearly commented Javascript objects for your name, bio, projects, images, skills, journey, and contact info. Editing that one file instantly updates the entire website."
  },
  {
    question: "Can I host this on my own domain (e.g., yourname.com)?",
    answer: "Yes, completely. Each portfolio is a standard Vite + React project. Running `npm run build` produces a static `dist` folder that you can deploy to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or any web host for free in under two minutes."
  },
  {
    question: "Are these templates or bespoke builds?",
    answer: "These are built to the standard of an award-winning creative agency (Awwwards / FWA level). There are no shared UI libraries (no Bootstrap, no generic UI kits). Every component, cursor, physics curve, and layout was crafted uniquely for that specific artistic persona."
  },
  {
    question: "What happens when I click 'Choose this design'?",
    answer: "You are prompted for your name, profession, and preferred theme. Submitting automatically opens a WhatsApp chat with our engineering studio with your pre-filled inquiry so we can answer questions or customize the build for you."
  },
  {
    question: "Do they look good on smartphones?",
    answer: "Extensively designed for mobile. Hover interactions gracefully transform into tap-responsive states, horizontal scroll galleries adapt to native touch momentum, and typography scales fluidly using clamp() formulas."
  }
];
