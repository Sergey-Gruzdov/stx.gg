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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GTAG_ID"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6M5LPPMND8');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}