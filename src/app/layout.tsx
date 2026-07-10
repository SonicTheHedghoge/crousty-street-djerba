import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crousty Street Djerba — L'Expérience Croustillante Ultime 🍗",
  description:
    "Découvrez le premier Crousty de Tunisie à Djerba Bourgo Mall. Une expérience gastronomique street-food premium de tenders croustillants, burgers d'exception, wraps et riz gourmands.",
  keywords: [
    "Crousty Street",
    "Djerba",
    "Gourmet Burger",
    "Bourgo Mall",
    "Tunisie",
    "Tenders",
    "Gastronomie Street-Food",
  ],
  authors: [{ name: "Crousty Street Djerba" }],
  openGraph: {
    title: "Crousty Street Djerba — L'Expérience Croustillante Ultime 🍗",
    description:
      "Tenders croustillants dorés • Burgers d'exception • Wraps gourmets • Djerba Bourgo Mall.",
    url: "https://croustystreetdjerba.vercel.app",
    siteName: "Crousty Street Djerba",
    locale: "fr_TN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Crousty Street Djerba",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Space+Grotesk:wght@300..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
