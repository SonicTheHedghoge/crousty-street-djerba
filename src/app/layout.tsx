import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant Flamant Rose Djerba — Gastronomie Méditerranéenne & Poissons Frais 🦩",
  description:
    "Découvrez le Restaurant Flamant Rose à la Zone Touristique de Ghizen, Djerba. Dégustez nos poissons frais du jour, couscous traditionnel, tajines savoureux et grillades au coucher du soleil.",
  keywords: [
    "Restaurant Flamant Rose",
    "Flamant Rose Djerba",
    "Restaurant Djerba",
    "Zone Touristique Ghizen",
    "Houmt Souk",
    "Restaurant Poisson Djerba",
    "Gastronomie Tunisienne",
    "Couscous Djerba",
    "Gargoulette Djerba",
    "Terrazza Sunset Djerba"
  ],
  authors: [{ name: "Restaurant Flamant Rose Djerba" }],
  metadataBase: new URL("https://flamant-rose-djerba.vercel.app"),
  openGraph: {
    title: "Restaurant Flamant Rose Djerba — Gastronomie & Sunset Lounge",
    description: "Une expérience culinaire d'exception au cœur de Djerba. Poissons frais, spécialités djerbiennes & ambiance balnéaire.",
    url: "https://flamant-rose-djerba.vercel.app",
    siteName: "Restaurant Flamant Rose Djerba",
    locale: "fr_TN",
    type: "website",
    images: [{ url: "/images/hero.jpg", width: 1200, height: 630, alt: "Restaurant Flamant Rose Djerba" }],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0A0D14] text-gray-100 antialiased selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
