import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PreInformation } from "@/components/pre-information/PreInformation";

export const metadata: Metadata = {
  title: "Ön Bilgilendirme ve Sözleşmeler | SIDRA",
  description: "Siparişinizi tamamlamadan önce ön bilgilendirme formunu ve mesafeli satış sözleşmesini inceleyin.",
};

export default function PreInformationPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream-100 font-sans text-ink">
        <div className="mx-auto w-full max-w-[1440px] px-4 pb-10 pt-4 sm:px-6 lg:px-8">
          <PreInformation />
        </div>
      </main>
      <Footer />
    </>
  );
}
