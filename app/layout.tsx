import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

export const metadata: Metadata = {
  title:
    "Interactive Web Developer ~ Muhammad Rizo, Freelancer ⋆｡ ﾟ☁︎｡ ⋆｡ ﾟ☾ ﾟ｡ ⋆",
  description:
    "I'm Muhammad Rizo, a freelance web designer & developer bringing you the website of your digital dreams.",
  keywords:
    "web developer, freelance, web design, animations, Next.js, Muhammad Rizo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <link
        rel="icon"
        type="image/png"
        href="../public/favicon.png"
        sizes="96x96"
      />
      <GoogleAnalytics />
      <body>{children}</body>
    </html>
  );
}
