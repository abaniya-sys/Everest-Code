import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #0a1628 0%, #0f2744 38%, #0c4a6e 72%, #0369a1 100%)",
          color: "#f8fafc",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 76,
            fontWeight: 700,
            letterSpacing: "-0.03em",
            textAlign: "center",
            padding: "0 48px",
            lineHeight: 1.05,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 30,
            opacity: 0.92,
            fontStyle: "italic",
            textAlign: "center",
            padding: "0 64px",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            marginTop: 40,
            fontSize: 22,
            opacity: 0.78,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Youth nonprofit · Edmonton, Alberta
        </div>
      </div>
    ),
    { ...size },
  );
}
