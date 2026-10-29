import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center section-padding">
      <div className="text-center max-w-lg">
        <p className="display-xl font-serif text-[var(--color-surface)] mb-0 leading-none select-none">
          404
        </p>
        <h1 className="heading-sm font-serif -mt-4 mb-6">Page Not Found</h1>
        <p className="text-sm text-[var(--color-muted)] leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on solid ground.
        </p>
        <Link href="/" className="btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
}
