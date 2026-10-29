import type { Metadata } from "next";
import { ServicesPageView } from "@/components/views/ServicesPageView";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture, interior design, master planning, and bespoke furnishings — full-spectrum design services from FORMA Studio.",
};

export default function ServicesPage() {
  return <ServicesPageView />;
}
