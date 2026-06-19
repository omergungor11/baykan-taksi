import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0b1220 0%, #1e293b 100%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            background: "#facc15",
            color: "#0b1220",
            fontSize: 40,
            fontWeight: 800,
            padding: "8px 24px",
            borderRadius: 16,
            marginBottom: 40,
          }}
        >
          TAKSİ
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.1, maxWidth: 900 }}>
          {siteConfig.name}
        </div>
        <div style={{ fontSize: 36, color: "#cbd5e1", marginTop: 24 }}>
          7/24 Lefkoşa & Kıbrıs Taksi · Havalimanı Transfer · Ada Turu
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#facc15", marginTop: 40, fontWeight: 700 }}>
          {siteConfig.domain}
        </div>
      </div>
    ),
    { ...size },
  );
}
