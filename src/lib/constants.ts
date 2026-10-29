// ─── Site-wide constants ────────────────────────────────────────────────────

export const SITE_NAME = "FORMA Studio";
export const SITE_TAGLINE = "Architecture & Interior Design";
export const SITE_DESCRIPTION =
  "FORMA Studio crafts spaces where architecture meets art — bespoke residential and commercial environments that endure.";
export const SITE_URL = "https://formastudio.com";
export const CONTACT_EMAIL = "hello@formastudio.com";
export const CONTACT_PHONE = "+1 (212) 555-0174";
export const CONTACT_ADDRESS = "31 West 27th Street, 10th Floor\nNew York, NY 10001";

// ─── Navigation links ────────────────────────────────────────────────────────

export const NAV_LINKS = [
  { label: "Work",      href: "/work" },
  { label: "Studio",   href: "/studio" },
  { label: "Services", href: "/services" },
  { label: "Journal",  href: "/journal" },
  { label: "Contact",  href: "/contact" },
] as const;

// ─── Services ────────────────────────────────────────────────────────────────

export const SERVICES = [
  {
    id: "architecture",
    title: "Architecture",
    description:
      "From concept to certificate of occupancy — holistic architectural services for residential and commercial projects of every scale.",
    icon: "Building2",
  },
  {
    id: "interior-design",
    title: "Interior Design",
    description:
      "Curated environments that balance tactile material richness with spatial clarity, tailored to your distinct way of living.",
    icon: "Layers",
  },
  {
    id: "master-planning",
    title: "Master Planning",
    description:
      "Strategic land-use and urban design solutions that integrate sustainability, mobility, and community into cohesive visions.",
    icon: "Map",
  },
  {
    id: "product-design",
    title: "Bespoke Furnishings",
    description:
      "Custom furniture and lighting designed in-house — one-of-a-kind objects that elevate every interior we create.",
    icon: "Armchair",
  },
] as const;

// ─── Featured projects ───────────────────────────────────────────────────────

export const FEATURED_PROJECTS = [
  {
    id: "verdana-residence",
    title: "Verdana Residence",
    category: "Architecture · Residential",
    location: "Montauk, New York",
    year: "2024",
    slug: "verdana-residence",
    aspectRatio: "portrait" as const,
  },
  {
    id: "oslo-pavilion",
    title: "Oslo Pavilion",
    category: "Architecture · Cultural",
    location: "Oslo, Norway",
    year: "2023",
    slug: "oslo-pavilion",
    aspectRatio: "landscape" as const,
  },
  {
    id: "terra-loft",
    title: "Terra Loft",
    category: "Interior Design",
    location: "Tribeca, New York",
    year: "2024",
    slug: "terra-loft",
    aspectRatio: "portrait" as const,
  },
  {
    id: "crestline-tower",
    title: "Crestline Tower",
    category: "Architecture · Commercial",
    location: "Chicago, Illinois",
    year: "2022",
    slug: "crestline-tower",
    aspectRatio: "landscape" as const,
  },
] as const;

// ─── Studio stats ────────────────────────────────────────────────────────────

export const STUDIO_STATS = [
  { value: "18+", label: "Years of Practice" },
  { value: "340+", label: "Projects Delivered" },
  { value: "28", label: "Design Awards" },
  { value: "12", label: "Countries" },
] as const;

// ─── Team members ────────────────────────────────────────────────────────────

export const TEAM_MEMBERS = [
  {
    name: "Elara Voss",
    role: "Founding Principal",
    bio: "Columbia GSAPP alumna with 18 years spanning cultural institutions, luxury residences, and adaptive reuse projects across three continents.",
  },
  {
    name: "Marcus Thren",
    role: "Principal, Architecture",
    bio: "Structural poetics practitioner. Former Snøhetta collaborator, specializing in material innovation and climate-responsive building envelopes.",
  },
  {
    name: "Siona Park",
    role: "Principal, Interiors",
    bio: "Wields a precise, layered aesthetic that bridges Korean minimalism with global material sourcing — featured in Architectural Digest and Wallpaper*.",
  },
] as const;

// ─── Testimonials ────────────────────────────────────────────────────────────

export const TESTIMONIALS = [
  {
    quote:
      "FORMA didn't just design our home — they translated who we are into space. Every room feels precisely, effortlessly ours.",
    author: "Isabelle & Thomas Laurent",
    title: "Private Clients, Verdana Residence",
  },
  {
    quote:
      "The Oslo Pavilion exceeded every ambition we put on paper. FORMA's capacity to think architecturally and culturally is extraordinary.",
    author: "Ragnhild Strand",
    title: "Director, Oslo Arts Council",
  },
  {
    quote:
      "Working with FORMA on the Crestline Tower transformed what we thought was possible in commercial architecture. Truly a landmark.",
    author: "David Mercer",
    title: "CEO, Mercer Real Estate Group",
  },
] as const;
