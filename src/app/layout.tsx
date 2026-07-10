import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crousty Street Djerba — Le 1er Crousty de Tunisie 🍗",
  description:
    "Crousty Street Djerba — Le 1er Crousty de Tunisie. Riz Crousty XL, Wraps, Bucket Tenders, Burgers, Salades, Desserts & Boissons. Djerba Bourgo Mall.",
  keywords: [
    "Crousty Street",
    "Djerba",
    "chicken tenders",
    "restaurant",
    "Tunisie",
    "Bourgo Mall",
    "street food",
    "fried chicken",
    "crousty",
  ],
  authors: [{ name: "Crousty Street Djerba" }],
  openGraph: {
    title: "Crousty Street Djerba — Le 1er Crousty de Tunisie 🍗",
    description:
      "Riz Crousty XL • Wraps • Bucket Tenders • Burgers • Salades • Desserts & Boissons. Djerba Bourgo Mall.",
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
  twitter: {
    card: "summary_large_image",
    title: "Crousty Street Djerba — Le 1er Crousty de Tunisie",
    description:
      "Le meilleur chicken croustillant à Djerba. Venez au Bourgo Mall!",
    images: ["/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://croustystreetdjerba.vercel.app"),
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
          href="https://fonts.googleapis.com/css2?family=Bungee&family=Space+Grotesk:wght@300..700&family=Permanent+Marker&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
