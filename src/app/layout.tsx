import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yousaf Zahid - Full Stack Developer & SaaS Builder",
  description: "Computer Science graduate from FAST NUCES specializing in full stack development, SaaS platforms, and API design. Expert in Python/Django, React, Next.js, and building scalable applications.",
  keywords: "Full Stack Developer, SaaS Developer, Python Developer, React Developer, Next.js Developer, Django Developer, Web Developer, Pakistan",
};


import Navbar from "./components/Navbar";

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
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-[Montserrat] bg-[#0f2027] text-white min-h-screen transition-all duration-700 animate-fadein">
        <Navbar />
        <div className="pt-20">{children}</div>
      </body>
    </html>
  );
}
