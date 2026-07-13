import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crousty Street Djerba — Tenders, Bites & Vibes 🍗",
  description:
    "Le 1er Crousty de Tunisie. Tenders croustillants, burgers gourmets, wraps frais & bucket tenders au Djerba Bourgo Mall.",
  keywords: ["Crousty Street", "Djerba", "chicken tenders", "Bourgo Mall", "Tunisie", "restaurant"],
  authors: [{ name: "Crousty Street Djerba" }],
  metadataBase: new URL("https://croustystreetdjerba.vercel.app"),
  openGraph: {
    title: "Crousty Street Djerba — Tenders, Bites & Vibes 🍗",
    description: "Le 1er Crousty de Tunisie. Djerba Bourgo Mall.",
    url: "https://croustystreetdjerba.vercel.app",
    siteName: "Crousty Street Djerba",
    locale: "fr_TN",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Crousty Street Djerba" }],
  },
  icons: { icon: [{ url: "/favicon.svg", type: "image/svg+xml" }] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300..700&family=Just+Another+Hand&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
