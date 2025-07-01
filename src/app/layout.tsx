import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Project Nightingale - Navigate Medtech Compliance",
  description: "Complete outsourced regulatory and compliance solution for UK Medtech startups. Turn your innovation into an NHS-ready product with confidence.",
  keywords: ["medtech", "compliance", "NHS", "regulatory", "startups", "healthcare", "medical devices"],
  authors: [{ name: "Project Nightingale" }],
  creator: "Project Nightingale",
  publisher: "Project Nightingale",
  openGraph: {
    title: "Project Nightingale - Navigate Medtech Compliance",
    description: "Complete outsourced regulatory and compliance solution for UK Medtech startups.",
    type: "website",
    locale: "en_GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
