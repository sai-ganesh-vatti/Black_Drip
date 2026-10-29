import type { Metadata } from "next";
import { CustomizerPageView } from "@/components/views/CustomizerPageView";

export const metadata: Metadata = {
  title: "Black Drip — 3D Customizer",
  description:
    "Design your custom streetwear piece. Choose fabric, color, and place graphics on a real-time 3D garment preview.",
};

export default function CustomizerPage() {
  return <CustomizerPageView />;
}
