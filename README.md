# Muhammad Rizo — Personal Portfolio Website

Alex Beige veb-sayti asosida yaratilgan shaxsiy portfolio sayt. Next.js 14, TypeScript va Tailwind CSS bilan qurilgan.

## 🚀 Boshlash

### Talablar
- Node.js 18+ 
- npm yoki yarn

### O'rnatish

```bash
# Loyihani yuklab oling va papkaga kiring
cd muhammad-rizo-web

# Paketlarni o'rnating
npm install

# Dev serverni ishga tushiring
npm run dev
```

Brauzerda `http://localhost:3000` manzilini oching.

### Build qilish

```bash
npm run build
npm start
```

## 📁 Fayl Tuzilishi

```
muhammad-rizo-web/
├── app/
│   ├── globals.css       # Global CSS + animatsiyalar
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Bosh sahifa
├── components/
│   ├── Cursor.tsx         # Custom cursor animatsiyasi
│   ├── Navbar.tsx         # Navigatsiya
│   ├── HeroSection.tsx    # Hero bo'lim (draggable elementlar)
│   ├── Marquee.tsx        # Aylanma matn animatsiyasi
│   ├── PortfolioSection.tsx # Portfolio + modal
│   ├── ServicesSection.tsx  # Xizmatlar
│   ├── TeamSection.tsx     # Jamoa
│   ├── ContactSection.tsx  # Aloqa formasi
│   ├── Footer.tsx          # Pastki qism
│   ├── Draggable.tsx       # Drag & drop komponent
│   └── useScrollReveal.ts  # Scroll animatsiya hooki
├── package.json
├── next.config.js
├── tailwind.config.js
└── tsconfig.json
```

## ✨ Animatsiyalar

- **Custom cursor** — sichqoncha harakatini kuzatuvchi maxsus kursor
- **Hero floating elements** — suzib yuruvchi SVG shakllar
- **Draggable planet** — tortib ko'chiriluvchi element
- **Marquee** — cheksiz aylanuvchi matn lentasi
- **Scroll reveal** — skroll qilganda ko'rinadigan elementlar
- **Portfolio hover** — karta ustida sichqoncha olib borganda animatsiya
- **Modal transitions** — loyiha tafsilotlari modali
- **Button hover effects** — tugma ustida sichqoncha olib borganda effektlar
- **Team card hover** — jamoa kartalarining hover animatsiyasi
- **Page load animations** — sahifa yuklanishida kirish animatsiyalari

## 🎨 Moslash

`app/globals.css` faylida CSS o'zgaruvchilarini o'zgartirish orqali ranglarni sozlang:

```css
:root {
  --cream: #f5f0e8;    /* Fon rangi */
  --dark: #1a1a1a;     /* Asosiy matn */
  --blue: #4a7fa5;     /* Aksent rang */
  --accent: #e8c5a0;   /* Ikkinchi aksent */
}
```

## 📧 Kontaktni o'zgartirish

`components/ContactSection.tsx` va `components/Footer.tsx` fayllarida emailni o'z emailingizga almashtiring.

## 🌐 Deploy

Vercel'ga deploy qilish uchun:

```bash
npm install -g vercel
vercel
```

yoki Netlify, Render kabi platformalarga ham deploy qilish mumkin.
