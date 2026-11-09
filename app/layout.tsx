
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Animesh Mohapatra | Software Developer",
  description:
    "Portfolio of Animesh Mohapatra, a Computer Science student building full-stack applications, backend systems and intelligent software.",
  keywords: [
    "Animesh Mohapatra",
    "Software Developer",
    "Computer Science",
    "Full Stack Developer",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
