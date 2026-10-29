import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { StudioSection } from "@/components/sections/StudioSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export const metadata: Metadata = {
  title: "FORMA Studio — Architecture & Interior Design",
  description:
    "FORMA Studio crafts spaces where architecture meets art — bespoke residential and commercial environments that endure.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsGrid />
      <StudioSection />
      <ServicesSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
}
