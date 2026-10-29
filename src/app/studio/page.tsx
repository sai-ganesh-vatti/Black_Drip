import type { Metadata } from "next";
import { StudioPageView } from "@/components/views/StudioPageView";

export const metadata: Metadata = {
  title: "The Studio",
  description:
    "Meet the team behind FORMA Studio — architects, designers, and material specialists united by a pursuit of spatial excellence.",
};

export default function StudioPage() {
  return <StudioPageView />;
}
