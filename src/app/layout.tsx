import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/assets/css/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STX",
  description:
    "Ihr Ansprechpartner für Cloud, Managed Services und IT-Security",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
