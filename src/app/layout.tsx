import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-azure-three-42.vercel.app"),
  title: "Yousaf Zahid — Full Stack Developer",
  description:
    "Full Stack Developer building production SaaS platforms, AI-integrated systems, and data-intensive applications with Next.js, React, Node.js, and Python/Django.",
  keywords:
    "Full Stack Developer, Next.js, React, Node.js, Python, Django, FastAPI, SaaS, AI, Pakistan, Yousaf Zahid",
  openGraph: {
    title: "Yousaf Zahid — Full Stack Developer",
    description:
      "I build production SaaS platforms, AI-integrated systems, and data-intensive applications.",
    url: "/",
    siteName: "Yousaf Zahid",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yousaf Zahid — Full Stack Developer",
    description:
      "I build production SaaS platforms, AI-integrated systems, and data-intensive applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased">
        <div className="backdrop-glow" />
        <div className="grid-lines" />
        <Navbar />
        <div className="relative z-10">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
