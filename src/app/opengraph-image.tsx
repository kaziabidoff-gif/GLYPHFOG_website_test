import { ogSize, renderOgImage } from "@/lib/og";

export const alt = "GLYPHFOG: digital solutions for growing businesses";
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return renderOgImage();
}
