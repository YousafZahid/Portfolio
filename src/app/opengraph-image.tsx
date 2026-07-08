import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Yousaf Zahid — Full Stack Developer";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#08080a",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg, #8ab4ff, transparent)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", color: "#8ab4ff", fontSize: 26, letterSpacing: 4 }}>
          FULL STACK DEVELOPER
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ color: "#f4f4f5", fontSize: 96, fontWeight: 700, lineHeight: 1.05 }}>
            Yousaf Zahid
          </div>
          <div style={{ color: "#a1a1aa", fontSize: 34, marginTop: 20, maxWidth: 900 }}>
            I build production SaaS platforms, AI-integrated systems, and data-intensive apps.
          </div>
        </div>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {["Next.js", "React", "Node.js", "Python / Django", "AWS / GCP"].map((t) => (
            <div
              key={t}
              style={{
                display: "flex",
                color: "#d4d4d8",
                fontSize: 24,
                border: "1px solid rgba(255,255,255,0.14)",
                borderRadius: 10,
                padding: "8px 18px",
              }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
