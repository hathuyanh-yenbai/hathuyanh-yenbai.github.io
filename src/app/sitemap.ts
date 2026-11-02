import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: company.url,
      // Fixed date keeps the route fully static; bump when content changes.
      lastModified: "2026-11-01",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
