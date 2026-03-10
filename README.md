<div align="center">

```
███╗   ███╗██╗   ██╗██╗  ██╗ █████╗ ███╗   ███╗███╗   ███╗ █████╗ ██████╗
████╗ ████║██║   ██║██║  ██║██╔══██╗████╗ ████║████╗ ████║██╔══██╗██╔══██╗
██╔████╔██║██║   ██║███████║███████║██╔████╔██║██╔████╔██║███████║██║  ██║
██║╚██╔╝██║██║   ██║██╔══██║██╔══██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██║  ██║
██║ ╚═╝ ██║╚██████╔╝██║  ██║██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██████╔╝
╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═════╝
```

# ⋆｡ ﾟ☁︎｡ Muhammad Rizo — Portfolio ☾ ﾟ｡ ⋆

**Freelance Web Dizayner & Dasturchi · Sirdaryo, O'zbekiston**

[![Live Site](https://img.shields.io/badge/🌐_Live_Site-adilovdev.uz-4a7fa5?style=for-the-badge)](https://www.adilovdev.uz)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## 🎨 Loyiha Haqida

**Muhammad Rizo** ning shaxsiy portfolio veb-sayti — interaktiv animatsiyalar, drag & drop elementlar, va zamonaviy UI/UX dizayn bilan qurilgan. Sayt freelance web dizayner va dasturchi sifatidagi mehnat va tajribani namoyish etadi.

> *"Ta'sirchan interaktiv va animatsiyali veb-saytlar qurishda tajribali dasturchi"*

---

## ✨ Asosiy Xususiyatlar

| Xususiyat | Tavsif |
|-----------|--------|
| 🖱️ **Custom Cursor** | Sichqoncha harakatini kuzatuvchi animatsiyali kursor |
| 🪐 **Draggable Elements** | Tortib ko'chiriluvchi SVG shakllar (Hero bo'limi) |
| 🎞️ **Marquee Animatsiya** | Cheksiz aylanuvchi texnologiyalar lentasi |
| 📜 **Scroll Reveal** | Skroll qilganda ko'rinadigan elementlar |
| 🃏 **Portfolio Modal** | Loyihalar uchun interaktiv modal oyna |
| 🌊 **Page Load Animations** | Sahifa yuklanishida kirish animatsiyalari |
| 📱 **Touch Support** | Mobil qurilmalar uchun to'liq qo'llab-quvvatlash |
| 📊 **Google Analytics** | G4 integratsiyasi bilan foydalanuvchi tahlili |

---

## 🛠️ Texnologiyalar

```
Frontend
├── Next.js 14          → App Router, SSR/SSG
├── TypeScript 5        → Type safety
├── Tailwind CSS 3      → Utility-first styling
├── Framer Motion 11    → Animatsiyalar kutubxonasi
├── GSAP 3             → Advanced animatsiyalar
└── @studio-freight/lenis → Smooth scrolling

Fonts
├── Playfair Display    → Sarlavhalar uchun serif font
└── DM Sans            → Matn uchun modern sans-serif

Tooling
├── ESLint             → Kod sifati
├── PostCSS            → CSS processing
└── Autoprefixer       → Browser compatibility
```

---

## 🚀 Loyihani Ishga Tushirish

### Talablar

- **Node.js** 18+
- **npm** yoki **yarn** yoki **pnpm**

### O'rnatish

```bash
# 1. Repozitoriyni klonlash
git clone https://github.com/username/portfolio-one.git
cd portfolio-one

# 2. Paketlarni o'rnatish
npm install

# 3. Environment variables sozlash
cp .env.example .env.local
# .env.local faylini to'ldiring

# 4. Dev serverni ishga tushirish
npm run dev
```

🌐 Brauzerda `http://localhost:3000` manzilini oching

### Build

```bash
# Production build
npm run build

# Production serverni ishga tushirish
npm start
```

---

## 📁 Loyiha Tuzilishi

```
portfolio-one/
│
├── 📂 app/
│   ├── globals.css          # Global CSS + animatsiyalar + CSS o'zgaruvchilari
│   ├── icon.tsx             # Favicon generator (Next.js OG)
│   ├── layout.tsx           # Root layout + metadata + Google Analytics
│   └── page.tsx             # Asosiy sahifa — barcha bo'limlarni birlashtiradi
│
├── 📂 components/
│   ├── Cursor.tsx            # Custom animatsiyali kursor
│   ├── Navbar.tsx            # Sticky navigatsiya + scroll effekti
│   ├── HeroSection.tsx       # Hero bo'lim + suzuvchi SVG shakllar
│   ├── Marquee.tsx           # Cheksiz aylanuvchi matn lentasi
│   ├── PortfolioSection.tsx  # Portfolio grid + modal ko'rinish
│   ├── ServicesSection.tsx   # Xizmatlar kartalari
│   ├── TeamSection.tsx       # Jamoa bo'limi (horizontal scroll)
│   ├── ContactSection.tsx    # Aloqa formasi
│   ├── Footer.tsx            # Pastki qism
│   ├── Draggable.tsx         # Drag & drop komponent (mouse + touch)
│   ├── GoogleAnalytics.tsx   # GA4 integratsiyasi
│   └── useScrollReveal.ts    # IntersectionObserver hooki
│
├── 📂 assets/
│   ├── prezident.png
│   ├── sales.png
│   ├── creative_d.png
│   ├── WebDev.png
│   └── Intern.png
│
├── .env.local               # Environment variables (git'da yo'q)
├── next.config.js           # Next.js konfiguratsiyasi
├── tailwind.config.js       # Tailwind konfiguratsiyasi
├── tsconfig.json            # TypeScript konfiguratsiyasi
└── package.json
```

---

## 🎨 Dizayn Tizimi

### Ranglar

```css
:root {
  --cream:      #f5f0e8;   /* Asosiy fon — iliq kremrang */
  --dark:       #1a1a1a;   /* Asosiy matn — deyarli qora */
  --blue:       #4a7fa5;   /* Aksent rang — mo'tadil ko'k */
  --blue-light: #6fa3c8;   /* Ochiq ko'k — link hover */
  --accent:     #e8c5a0;   /* Ikkinchi aksent — iliq tarvuzrang */
}
```

### Fontlar

| Font | Vazifa | Xususiyat |
|------|--------|-----------|
| **Playfair Display** | Sarlavhalar, logo | Serif, italic variantlar |
| **DM Sans** | Tana matni, UI | Variable weight, optical sizing |

### Animatsiyalar

```css
/* Float animatsiyalari — Hero SVG elementlari uchun */
.float-1  →  6s  ease-in-out  infinite
.float-2  →  8s  ease-in-out  infinite  (delay: -2s)
.float-3  →  7s  ease-in-out  infinite  (delay: -4s)

/* Scroll reveal */
.fade-in-scroll  →  opacity: 0 → 1,  translateY: 40px → 0

/* Stagger children */
.stagger-children  →  har bir bola 0.1s kechikish bilan
```

---

## ⚙️ Environment Variables

`.env.local` faylini yaratib quyidagi o'zgaruvchilarni to'ldiring:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Resend Email (aloqa formasi uchun)
RESEND_API_KEY=re_xxxxxxxxxxxx

# Google Sheets (ma'lumotlarni saqlash uchun, ixtiyoriy)
GOOGLE_SERVICE_ACCOUNT_EMAIL=xxxx@xxxx.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY=xxxxxxxxxxxx
GOOGLE_SHEET_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

> ⚠️ **Diqqat:** Hech qachon `.env` faylini git'ga push qilmang!

---

## 📦 Xizmatlar

```
┌─────────────────────────────────┬──────────────────┐
│ Xizmat                          │ Muddat           │
├─────────────────────────────────┼──────────────────┤
│ Figma Dizaynlarini Ishlab Chiqish│ 2–4 hafta        │
│ White-label Dasturlash          │ Muzokaraga qarab │
│ Dizayn & Dasturlash (to'liq)    │ 4–8 hafta        │
└─────────────────────────────────┴──────────────────┘
```

---

## 🌐 Deploy

### Vercel (Tavsiya etiladi)

```bash
# Vercel CLI orqali
npm i -g vercel
vercel

# yoki GitHub bilan bog'lab avtomatik deploy
# vercel.com → Import Project → GitHub repo
```

### Netlify

```bash
npm run build
# dist/ papkasini Netlify'ga yuklang
# yoki GitHub integratsiyasidan foydalaning
```

### Boshqa Platformalar

Render, Railway, yoki Docker bilan ham deploy qilish mumkin.

---

## 📊 Portfolio Loyihalari

| Loyiha | Soha | Rol |
|--------|------|-----|
| 🎬 Couple 3 Films | NYC Film Production | Dizayn & Dasturlash |
| 🍕 Mountain Crust Pizza | To'ylar uchun Pitsa | Dizayn & Dasturlash |
| 💰 Juniper VC | Bioindustrial VC | Dasturlash & Animatsiya |
| 🌈 Princeton LGBTQIA+ | Tarixiy Ko'rgazma | Dizayn & Dasturlash |
| 🔬 Biocreative Index | Ijodkorlar × Biologiya | Dasturlash |
| 🚀 Far Outtt | Ijodiy Agentlik | Dizayn & Dasturlash |
| 🖨️ Brooklyn Editions | Bosma Studiya | Dasturlash |
| 🏥 Cadence | RPM Healthcare | Dasturlash & Animatsiya |

---

## 📬 Aloqa

<div align="center">

| Platform | Link |
|----------|------|
| 🌐 Website | [adilovdev.uz](https://www.adilovdev.uz) |
| 📧 Email | [adilovdev1@gmail.com](mailto:adilovdev1@gmail.com) |
| 📸 Instagram | [@rizo_adilov](https://www.instagram.com/rizo_adilov) |
| ✈️ Telegram | [@rizo_adilov](https://t.me/rizo_adilov) |

</div>

---

## 📄 Litsenziya

© 2026 **Muhammad Rizo** — Barcha huquqlar himoyalangan.

---

<div align="center">

*Dastlabki konsultatsiya bepul — shuning uchun yo'qotadigan hech narsangiz yo'q.*
***Va hammasini yutib olasiz.*** ✦

⋆｡ ﾟ☁︎｡ ⋆｡ ﾟ☾ ﾟ｡ ⋆

</div>
