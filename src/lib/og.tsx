import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const ogSize = { width: 1200, height: 630 };

/** Shared by opengraph-image and twitter-image. Text only: no invented imagery. */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f6f4ef",
          color: "#1c1d1f",
          padding: 80,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 6, fontWeight: 600 }}>
          {site.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 84,
            lineHeight: 1.05,
            letterSpacing: -3,
            maxWidth: 900,
          }}
        >
          {site.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#2f5d54", letterSpacing: 3 }}>
          DIGITAL SOLUTIONS
        </div>
      </div>
    ),
    ogSize,
  );
}
