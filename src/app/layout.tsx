import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HDC CCTV HUB | Professional CCTV Installation & Security Solutions",
  description:
    "HDC CCTV HUB provides professional CCTV camera installation, maintenance, and Annual Maintenance Contract (AMC) services. Protect your home and business with our expert security solutions.",
  keywords: [
    "CCTV installation",
    "security cameras",
    "CCTV maintenance",
    "AMC",
    "surveillance",
    "HDC CCTV",
    "security solutions",
  ],
  openGraph: {
    title: "HDC CCTV HUB | Professional CCTV Installation & Security Solutions",
    description:
      "Expert CCTV camera installation, maintenance, and AMC services. Your security is our priority.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
