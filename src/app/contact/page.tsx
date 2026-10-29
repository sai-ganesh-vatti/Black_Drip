import type { Metadata } from "next";
import { ContactPageView } from "@/components/views/ContactPageView";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Begin your project with FORMA Studio. Share your vision and let's create something extraordinary together.",
};

export default function ContactPage() {
  return <ContactPageView />;
}
