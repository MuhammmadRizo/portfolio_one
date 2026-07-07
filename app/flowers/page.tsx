"use client";
import MagicalFlowers from "@/components/MagicalFlowers";
import Link from "next/link";

export default function FlowersPage() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh", overflow: "hidden", background: "#000" }}>
      <MagicalFlowers />
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
