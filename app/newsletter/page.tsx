import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";

export const metadata: Metadata = {
  title: "Bültene Abone Ol | SIDRA",
  description: "Yeni koleksiyonlar, özel teklifler ve ilham verici içerikler için e-posta bültenimize abone olun.",
};

type Props = { searchParams: Promise<{ durum?: string }> };

export default async function NewsletterPage({ searchParams }: Props) {
  const { durum } = await searchParams;
  // /newsletter?durum=cikis  →  "Abonelikten çıkıldı" vəziyyəti (e-poçtdakı "Abonelikten çık" linki üçün)
  const initialStatus = durum === "cikis" ? "unsubscribed" : "idle";

  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream-100 font-sans text-ink">
        <div className="mx-auto w-full max-w-[1440px] px-4 pb-10 pt-4 sm:px-6 lg:px-8">
          <NewsletterSignup initialStatus={initialStatus} />
        </div>
      </main>
      <Footer />
    </>
  );
}
