import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CommunicationPreferences } from "@/components/communication-preferences/CommunicationPreferences";

export const metadata: Metadata = {
  title: "İletişim Tercihleri | SIDRA",
  description: "Ticari elektronik ileti tercihlerinizi ve iletişim kanallarınızı yönetin.",
};

export default function CommunicationPreferencesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream-100 font-sans text-ink">
        <div className="mx-auto w-full max-w-360 px-4 pb-10 pt-4 sm:px-6 lg:px-8">
          <CommunicationPreferences />
        </div>
      </main>
      <Footer />
    </>
  );
}

