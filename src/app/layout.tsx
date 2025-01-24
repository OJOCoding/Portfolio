
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./navigation";
import ThemeSwitcher from "./ThemeSwitcher";
import BodyClassManager from "./BodyClassManager";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Oni Luca",
  description: "A portfolio website for Oni Luca.",
  openGraph: {
    title: "Oni Luca",
    description: "A portfolio website for Oni Luca.",
    url: "https://yourwebsite.com",
    siteName: "Oni Luca",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Oni Luca's Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oni Luca",
    description: "A portfolio website for Oni Luca.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${inter.variable}`}>
        <Navigation />
        <ThemeSwitcher />
        <BodyClassManager />
        {children}
      </body>
    </html>
  );
}
