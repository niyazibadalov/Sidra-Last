import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SellerInfo } from "@/components/sellerinfo/SellerInfo";

export const metadata: Metadata = {
  title: "Satıcı Bilgileri | SIDRA",
  description: "Satıcının hukuki bilgileri, doğrulama durumu ve sipariş öncesi bilgilendirmeler.",
};

export default function SellerInfoPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream-100 font-sans text-ink">
        <div className="mx-auto w-full max-w-360 px-4 pb-10 pt-4 sm:px-6 lg:px-8">
          <SellerInfo />
        </div>
      </main>
      <Footer />
    </>
  );
}

