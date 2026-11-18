"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "60px 40px 40px",
        background: "var(--dark)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        color: "var(--cream)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "40px",
          marginBottom: "60px",
        }}
      >
        <div>
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: "28px",
              fontWeight: 700,
              color: "var(--cream)",
              textDecoration: "none",
              display: "block",
              marginBottom: "12px",
            }}
          >
            MR
          </Link>
          <p
            style={{
              fontFamily: "var(--font-dm)",
              fontSize: "14px",
              color: "#777",
              maxWidth: "280px",
              lineHeight: 1.7,
            }}
          >
            Muhammad Rizo — Sirdaryo, O'zbekiston asosidagi freelance veb
            dizayner va dasturchi.
          </p>
        </div>

        <div style={{ display: "flex", gap: "60px", flexWrap: "wrap" }}>
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "16px",
              }}
            >
              Email
            </p>
            <a
              href="mailto:adilovdev1@gmail.com"
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: "14px",
                color: "var(--cream)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--blue-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--cream)")
              }
            >
              adilovdev1@gmail.com
            </a>
          </div>
          <div>
            <p
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: "11px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#555",
                marginBottom: "16px",
              }}
            >
              Instagram
            </p>
            <a
              href="https://www.instagram.com/rizo_adilov"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-dm)",
                fontSize: "14px",
                color: "var(--cream)",
                textDecoration: "none",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--blue-light)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--cream)")
              }
            >
              @rizo_adilov
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
          paddingTop: "24px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-dm)",
            fontSize: "12px",
            color: "#555",
          }}
        >
          Muhammad Rizo © 2026 Barcha huquqlar himoyalangan.
        </p>
        <p
          style={{
            fontFamily: "var(--font-dm)",
            fontSize: "11px",
            color: "#444",
          }}
        >
          {/* <Link href={"/senga"}>M &#60;3</Link> */}
          <span
            style={{
              display: "flex",
              gap: "10px",
              background:
                " linear-gradient(277deg, rgba(255, 255, 255, 0) 70.02%, rgba(0, 71, 249, 0.2) 100.21%), linear-gradient(79deg, rgba(255, 255, 255, 0) 65.84%, rgba(0, 71, 249, 0.2) 100%)",
              padding: "2px 8px 2px 8px",
              color: "#ffffff",
              borderRadius: "5px",
            }}
          >
            MADE BY HUMANS
            <svg
              style={{ color: "#2962ff" }}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M14.982 4.515A4.15 4.15 0 0 0 11.789 3c-1.025 0-2.02.408-2.781 1.11A4 4 0 0 0 6.21 3C3.88 3 2 4.943 2 7.343c0 .86.245 1.682.69 2.376l.011.014 2.463-2.448a1.6 1.6 0 0 1-.089-.524c0-.856.676-1.549 1.508-1.549.833 0 1.508.693 1.508 1.549q-.002.28-.09.53l1.442 1.435a1.47 1.47 0 0 1 1.536-.015l4.088-4.064zm.655 1.105-3.979 3.955q.072.226.073.476c0 .856-.675 1.55-1.508 1.55s-1.508-.694-1.508-1.55q0-.233.064-.447L7.293 8.128a1.47 1.47 0 0 1-1.425-.004l-2.45 2.437.075.084q.075.065.154.126l5.066 4.131a.45.45 0 0 0 .559 0l5.19-4.212A4.39 4.39 0 0 0 16 7.343c0-.543-.097-1.062-.274-1.541z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
        </p>
      </div>
    </footer>
  );
}
