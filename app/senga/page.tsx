"use client";
import { useState } from "react";
import Link from "next/link";

const PASSWORD = "2727";

function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const [input, setInput] = useState("");
  const [shake, setShake] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = () => {
    if (input === PASSWORD) {
      onUnlock();
    } else {
      setShake(true);
      setError(true);
      setInput("");
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div style={styles.lockOverlay}>
      <div style={styles.lockCard} className={shake ? "shake" : ""}>
        <div style={styles.lockIcon}>🔒</div>
        <h2 style={styles.lockTitle}>Maxfiy sahifa</h2>
        <p style={styles.lockSub}>
          Bir firklarngchi JONIM &lt;3 iyiy.
        </p>
        <input
          type="password"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          placeholder="*************"
          maxLength={20}
          style={{
            ...styles.lockInput,
            borderColor: error ? "#e55" : "rgba(255,255,255,0.2)",
          }}
          autoFocus
        />
        {error && <p style={styles.errorMsg}>Parol noto'g'ri ❌</p>}
        <button onClick={handleSubmit} style={styles.lockBtn}>
          Kirish →
        </button>
      </div>

      <style>{`
        @keyframes shake {
          0%,100% { transform: translateX(0); }
          20%,60% { transform: translateX(-10px); }
          40%,80% { transform: translateX(10px); }
        }
        .shake { animation: shake 0.4s ease; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function FleeingButton() {
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [isMoved, setIsMoved] = useState(false);

  const handleHover = () => {
    if (typeof window !== "undefined") {
      const randomTop = Math.random() * (window.innerHeight - 100); 
      const randomLeft = Math.random() * (window.innerWidth - 200);
      setPosition({ top: Math.max(20, randomTop), left: Math.max(20, randomLeft) });
      setIsMoved(true);
    }
  };

  return (
    <button
      onMouseEnter={handleHover}
      style={{
        display: "inline-block",
        padding: "12px 24px",
        borderRadius: "30px",
        fontSize: "1.1rem",
        fontFamily: "'Playfair Display', serif",
        textTransform: "none",
        letterSpacing: "normal",
        background: "rgba(255,100,100,0.1)",
        border: "1px solid rgba(255,100,100,0.3)",
        color: "#ffb4a0",
        position: isMoved ? "fixed" : "relative",
        top: isMoved ? `${position.top}px` : "auto",
        left: isMoved ? `${position.left}px` : "auto",
        zIndex: 9999,
        cursor: "default",
        marginTop: isMoved ? "0" : "16px",
        transition: isMoved ? "top 0.3s ease, left 0.3s ease" : "background 0.3s ease"
      }}
      onClick={(e) => e.preventDefault()}
    >
      🥀 Kerakmas 🥀
    </button>
  );
}

export default function App() {
  const [unlocked, setUnlocked] = useState(false);

  if (!unlocked) return <LockScreen onUnlock={() => setUnlocked(true)} />;

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.rose}>🌹</div>
        <h1 style={styles.mainTitle}>Senga, faqat senga Maxliyom </h1>
        <p style={styles.subtitle}>Faqatgina senga Yagonam.</p>
      </header>

      <div style={styles.lettersContainer}>
        <h1>
          {" "}
          Fikrlashga gap yo parolni topdiz. <br />
          <br />
          <br /> Maxliyom, yagonam mendan xafa bo'lmaysiz. Gul bo'lmasa ham dil
          izhorim bor. Blokdan qachon chiqaman endi hahah. Chiqaring
          meni 09 Maxliyom. Dostday bo'ling lekin ismni to'liq ayting "Muhammad Rizo" 
          yoki oldingide shirin so'z "go'zalm" den chaqrng menga rosa yoqardi meni yagonam 🦦❤️<br />
          <br />
          <br /> Sizni yaxshi ko'ruvchi Muhammad Rizo ❤️‍🔥💗.
        </h1>
      </div>

      <footer style={styles.footer}>
        <span>✦ Har bir so'z — chin dildan ✦</span>
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", alignItems: "center" }}>
          <Link href="/flowers" style={styles.flowerLink}>
            🌸 Gullarni ko'rish 🌸
          </Link>
          <FleeingButton />
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Lora:ital@0;1&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0d0a0e; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .letter-card {
          animation: fadeUp 0.6s ease both;
        }
        .letter-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(180, 80, 80, 0.18);
        }
      `}</style>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  /* === Lock Screen === */
  lockOverlay: {
    minHeight: "100vh",
    background:
      "linear-gradient(135deg, #0d0508 0%, #1a0a10 50%, #0d0a0e 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Lora', Georgia, serif",
  },
  lockCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,200,180,0.15)",
    borderRadius: "20px",
    padding: "48px 40px",
    textAlign: "center",
    width: "min(360px, 90vw)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 24px 60px rgba(0,0,0,0.6)",
  },
  lockIcon: {
    fontSize: "2.5rem",
    marginBottom: "16px",
  },
  lockTitle: {
    color: "#f5e0d8",
    fontSize: "1.5rem",
    fontFamily: "'Playfair Display', serif",
    fontWeight: 700,
    marginBottom: "8px",
  },
  lockSub: {
    color: "rgba(245,224,216,0.5)",
    fontSize: "0.9rem",
    marginBottom: "28px",
  },
  lockInput: {
    width: "100%",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "10px",
    padding: "14px 18px",
    color: "#f5e0d8",
    fontSize: "1.1rem",
    outline: "none",
    textAlign: "center",
    letterSpacing: "0.3em",
    marginBottom: "12px",
    transition: "border-color 0.3s",
  },
  errorMsg: {
    color: "#e88",
    fontSize: "0.82rem",
    marginBottom: "10px",
  },
  lockBtn: {
    marginTop: "8px",
    width: "100%",
    background: "linear-gradient(135deg, #8b2a2a, #c0404a)",
    border: "none",
    borderRadius: "10px",
    padding: "14px",
    color: "#fff",
    fontSize: "1rem",
    fontFamily: "'Lora', serif",
    cursor: "pointer",
    letterSpacing: "0.05em",
    transition: "opacity 0.2s",
  },

  /* === Main Page === */
  page: {
    minHeight: "100vh",
    background:
      "linear-gradient(160deg, #0d0508 0%, #180c12 40%, #0d0a0e 100%)",
    fontFamily: "'Lora', Georgia, serif",
    color: "#f0ddd5",
    padding: "0 0 60px",
  },
  header: {
    textAlign: "center",
    padding: "70px 24px 40px",
    borderBottom: "1px solid rgba(255,180,160,0.1)",
  },
  rose: {
    fontSize: "3rem",
    marginBottom: "16px",
    display: "block",
  },
  mainTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "clamp(2rem, 6vw, 3.2rem)",
    fontWeight: 700,
    fontStyle: "italic",
    color: "#f5ddd5",
    letterSpacing: "-0.01em",
    marginBottom: "12px",
  },
  subtitle: {
    color: "rgba(245,221,213,0.45)",
    fontSize: "0.95rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
  },
  lettersContainer: {
    maxWidth: "680px",
    margin: "50px auto 0",
    padding: "0 20px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  card: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,190,170,0.12)",
    borderRadius: "16px",
    padding: "28px 30px",
    cursor: "pointer",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
  },
  cardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
  },
  cardDate: {
    fontSize: "0.78rem",
    color: "rgba(245,221,213,0.4)",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    display: "block",
    marginBottom: "6px",
  },
  cardTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: "1.25rem",
    fontWeight: 600,
    color: "#f5ddd5",
  },
  cardBody: {
    marginTop: "20px",
    lineHeight: 1.85,
    color: "rgba(245,221,213,0.75)",
    fontSize: "1rem",
    fontStyle: "italic",
    borderTop: "1px solid rgba(255,190,170,0.1)",
    paddingTop: "18px",
  },
  footer: {
    textAlign: "center",
    marginTop: "60px",
    color: "rgba(245,221,213,0.25)",
    fontSize: "0.8rem",
    letterSpacing: "0.2em",
  },
  flowerLink: {
    display: "inline-block",
    marginTop: "16px",
    padding: "12px 24px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,190,170,0.3)",
    borderRadius: "30px",
    color: "#f5e0d8",
    textDecoration: "none",
    fontSize: "1.1rem",
    fontFamily: "'Playfair Display', serif",
    transition: "background 0.3s ease",
    textTransform: "none",
    letterSpacing: "normal"
  },
};
