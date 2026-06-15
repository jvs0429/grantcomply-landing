import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/metadata";

const routes = [
  "",
  "/government",
  "/nonprofit",
  "/healthcare",
  "/education",
  "/public-safety",
  "/small-business",
  "/pricing",
  "/about",
  "/blog",
  "/privacy",
  "/security",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
