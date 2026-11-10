import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { KvkkNotice } from "@/components/kvkk/KvkkNotice";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni | SIDRA",
  description: "Kişisel verilerinizin işlenmesine ilişkin KVKK kapsamındaki aydınlatma metni.",
};

export default function KvkkPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream-100 font-sans text-ink">
        <div className="mx-auto w-full max-w-360 px-4 pb-10 pt-4 sm:px-6 lg:px-8">
          <KvkkNotice />
        </div>
      </main>
      <Footer />
    </>
  );
}
