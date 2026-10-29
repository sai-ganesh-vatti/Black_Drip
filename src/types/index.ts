// ─── Project types ────────────────────────────────────────────────────────────

export type ProjectCategory =
  | "architecture"
  | "interior-design"
  | "master-planning"
  | "bespoke";

export type AspectRatio = "portrait" | "landscape" | "square";

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  aspectRatio: AspectRatio;
  description?: string;
  images?: string[];
  tags?: string[];
  featured?: boolean;
}

// ─── Service types ────────────────────────────────────────────────────────────

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ─── Team member types ───────────────────────────────────────────────────────

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

// ─── Testimonial types ───────────────────────────────────────────────────────

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

// ─── Navigation types ────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

// ─── Journal / Blog types ────────────────────────────────────────────────────

export interface JournalPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: number;
  coverImage?: string;
  featured?: boolean;
}

// ─── Form types ──────────────────────────────────────────────────────────────

export type ProjectType =
  | "architecture"
  | "interior-design"
  | "master-planning"
  | "bespoke"
  | "other";

export type BudgetRange =
  | "under-250k"
  | "250k-1m"
  | "1m-5m"
  | "5m-plus"
  | "undisclosed";
