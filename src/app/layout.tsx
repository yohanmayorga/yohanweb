import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";

const inter = Orbitron({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yohan Mayorga",
  description: "Full Satck Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
