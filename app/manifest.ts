import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: "7/24 Lefkoşa ve Kıbrıs taksi, havalimanı transfer ve ada turu.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1220",
    theme_color: "#facc15",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
