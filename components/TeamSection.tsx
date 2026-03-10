"use client";

import { useEffect, useRef, useState } from "react";
import President from "../assets/prezident.png"
import Sale from "../assets/sales.png"
import CreativeD from "../assets/creative_d.png"
import WebDev from "../assets/WebDev.png"
import Intern from "../assets/Intern.png"
import Image from "next/image";

const teamMembers = [
  {
    id: "1",
    role: "Prezident",
    name: "Muhammad Rizo",
    img: President,
  },
  {
    id: "2",
    role: "Sotuvlar",
    name: "Muhammad Rizo",
    img: Sale,
  },
  {
    id: "3",
    role: "Kreativ Direktor",
    name: "Muhammad Rizo",
    img: CreativeD,
  },
  {
    id: "4",
    role: "Bosh Dasturchi",
    name: "Muhammad Rizo",
    img: WebDev,
  },
  {
    id: "5",
    role: "Intern",
    name: "Muhammad Rizo",
    img: Intern,
  },
];

export default function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 },
    );
    const els = sectionRef.current?.querySelectorAll(".fade-in-scroll");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        padding: "100px 40px",
        background: "var(--cream)",
        overflow: "hidden",
      }}
    >
      <div className="fade-in-scroll" style={{ marginBottom: "60px" }}>
        <p
          style={{
            fontFamily: "var(--font-dm)",
            fontSize: "12px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#888",
            marginBottom: "12px",
          }}
        >
          ✦ JAMOA
        </p>
        <h2 className="section-heading">
          Bizning{" "}
          <span style={{ color: "var(--blue)", fontStyle: "italic" }}>
            Jamoamiz
          </span>
        </h2>
        <p
          style={{
            marginTop: "12px",
            color: "#888",
            fontFamily: "var(--font-dm)",
            fontSize: "15px",
          }}
        >
          Men bu yerda ko'p turli hil insonman.
        </p>
      </div>

      <div
        className="fade-in-scroll"
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: "8px",
          scrollbarWidth: "none",
        }}
      >
        {teamMembers.map((member, i) => (
          <div
            key={i}
            style={{
              flexShrink: 0,
              width: "220px",
              background: "white",
              borderRadius: "4px",
              overflow: "hidden",
              boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-6px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 12px 40px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "none";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 2px 16px rgba(0,0,0,0.06)";
            }}
          >
            {/* Avatar area */}
            <div
              style={{
                height: "200px",
                background:
                  i % 2 === 0
                    ? "linear-gradient(135deg, #c8dce8 0%, #a8c4d8 100%)"
                    : "linear-gradient(135deg, #e8d8c0 0%, #d4c4a8 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "64px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span style={{ filter: "grayscale(0.9)" }}>
                <Image src={member.img} alt={member.id} />
              </span>
              {/* Decorative circle */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  right: "-20px",
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.2)",
                }}
              />
            </div>

            <div style={{ padding: "20px" }}>
              <p
                style={{
                  fontSize: "11px",
                  color: "var(--blue)",
                  fontFamily: "var(--font-dm)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                {member.role}
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "17px",
                  fontWeight: 600,
                }}
              >
                {member.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
