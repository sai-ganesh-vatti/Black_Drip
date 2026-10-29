import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Ideas, essays, and perspectives from FORMA Studio — on architecture, materials, craft, and the built environment.",
};

const POSTS = [
  {
    slug: "material-truth",
    title: "On Material Truth: Why Honesty in Architecture Still Matters",
    category: "Essay",
    publishedAt: "October 2026",
    readingTime: 7,
    excerpt:
      "In an era of seamless surfaces and algorithmic facade generation, we make the case for revealing — not concealing — how a building is made.",
  },
  {
    slug: "slow-design",
    title: "The Case for Slow Design",
    category: "Perspective",
    publishedAt: "September 2026",
    readingTime: 5,
    excerpt:
      "Faster projects, compressed timelines, AI-generated layouts — but at what cost? We revisit what deliberation actually produces.",
  },
  {
    slug: "bronze-as-language",
    title: "Bronze as Architectural Language",
    category: "Material Study",
    publishedAt: "August 2026",
    readingTime: 4,
    excerpt:
      "From ancient temple fittings to contemporary kitchen hardware, we trace bronze's enduring presence in spaces of aspiration.",
  },
];

export default function JournalPage() {
  return (
    <div className="pt-[72px]">
      {/* Header */}
      <section className="section-padding border-b border-[var(--color-border)]">
        <div className="content-container">
          <span className="bronze-line block" />
          <p className="label-xs mb-4">Thoughts & Ideas</p>
          <h1 className="display-lg max-w-xl">
            The <em className="italic text-[var(--color-bronze)]">Journal</em>
          </h1>
        </div>
      </section>

      {/* Posts */}
      <section className="section-padding">
        <div className="content-container divide-y divide-[var(--color-border)]">
          {POSTS.map((post, i) => (
            <article
              key={post.slug}
              className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 hover:bg-[var(--color-charcoal)] px-4 -mx-4 transition-colors duration-300 rounded-sm"
            >
              <div className="md:col-span-2">
                <p className="label-xs bronze-text">{post.category}</p>
              </div>
              <div className="md:col-span-7">
                <Link href={`/journal/${post.slug}`}>
                  <h2 className="heading-sm font-serif mb-3 group-hover:text-[var(--color-bronze)] transition-colors duration-300">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-sm text-[var(--color-muted)] leading-relaxed">{post.excerpt}</p>
              </div>
              <div className="md:col-span-3 flex flex-col items-start md:items-end gap-2">
                <p className="label-xs">{post.publishedAt}</p>
                <p className="label-xs">{post.readingTime} min read</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
