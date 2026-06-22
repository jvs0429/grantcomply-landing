import { ogImage, size, contentType, alt } from "@/lib/og";

export { size, contentType, alt };

export const runtime = "nodejs";

export default function Image() {
  return ogImage();
}
