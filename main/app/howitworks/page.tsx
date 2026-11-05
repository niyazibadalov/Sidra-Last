import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ShoppingGuide } from "@/components/howitworks/ShoppingGuide";

export const metadata: Metadata = {
  title: "İşlem Rehberi | SIDRA",
  description:
    "SIDRA’da alışveriş sürecinizin tüm aşamalarını, haklarınızı ve önemli bilgileri öğrenin.",
};

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream-100 font-sans text-ink">
        <div className="mx-auto w-full max-w-[1440px] px-4 pb-10 pt-4 sm:px-6 lg:px-8">
          <ShoppingGuide />
        </div>
      </main>
      <Footer />
    </>
  );
}

