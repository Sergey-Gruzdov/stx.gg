import Footer from "@/components/native/Footer";
import Header from "@/components/native/Header";

export default function MainPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <main className="relative z-[2] bg-[#09090c]">{children}</main>

      <Footer />
    </>
  );
}
