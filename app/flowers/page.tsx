"use client";
import MagicalFlowers from "@/components/MagicalFlowers";
import Link from "next/link";

export default function FlowersPage() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden", background: "#000" }}>
      <MagicalFlowers />
      <h1 
        style={{
          position: "absolute",
          top: "25%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "rgba(255, 255, 255, 0.9)",
          zIndex: 1000,
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(2rem, 5vw, 4rem)",
          textAlign: "center",
          textShadow: "0 0 20px rgba(255, 255, 255, 0.4), 0 0 40px rgba(135, 206, 235, 0.4)",
          pointerEvents: "none",
          margin: 0,
          fontWeight: 400,
          letterSpacing: "2px"
        }}
      >
        aynanay o&apos;zmni go&apos;zalm
      </h1>
      <Link 
        href="/senga" 
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          color: "white",
          textDecoration: "none",
          zIndex: 1000,
          fontFamily: "'Playfair Display', serif",
          padding: "10px 20px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "30px",
          border: "1px solid rgba(255,255,255,0.2)",
          backdropFilter: "blur(5px)",
          transition: "background 0.3s ease"
        }}
        onMouseOver={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.2)"}
        onMouseOut={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}
      >
        ← Orqaga
      </Link>
    </div>
  );
}
