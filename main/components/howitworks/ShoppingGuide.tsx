"use client";

import Link from "next/link";
import { useState, type ComponentType } from "react";
import {
  ArrowRightIcon,
  BagIcon,
  CardIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronDownIcon,
  DocumentIcon,
  HeadsetIcon,
  LockIcon,
  PencilIcon,
  ScaleIcon,
  SearchIcon,
  TruckIcon,
  type IconProps,
} from "../PageIcons";
import { Collapsible } from "../shared/Collapsible";
import { PageHero } from "../shared/PageHero";
import { btnOutline, btnPrimary } from "../shared/ui";
import { DocumentVisual, LockVisual, PhoneVisual, ScalesVisual } from "./GuideVisuals";

type Step = {
  n: number;
  title: string;
  long: string;
  short: string;
  Icon: ComponentType<IconProps>;
};

const steps: Step[] = [
  { n: 1, title: "Ürünü Seçin", long: "Beğendiğiniz ürünü detay sayfasından inceleyin.", short: "Ürün detaylarını inceleyin.", Icon: SearchIcon },
  { n: 2, title: "Sepete Ekleyin", long: "Ürünü sepete ekleyin, isteğe göre adet veya varyant seçin.", short: "Ürünü sepete ekleyin.", Icon: BagIcon },
  { n: 3, title: "Teslimat Bilgileri", long: "Teslimat adresinizi seçin veya yeni adres ekleyin.", short: "Adresinizi seçin.", Icon: TruckIcon },
  { n: 4, title: "Ödeme Bilgileri", long: "Size uygun ödeme yöntemini seçin ve gerekli bilgileri girin.", short: "Ödeme yöntemini seçin.", Icon: CardIcon },
  { n: 5, title: "Siparişi Onaylayın", long: "Sipariş özetinizi kontrol edin ve siparişinizi tamamlayın.", short: "Siparişi tamamlayın.", Icon: CheckCircleIcon },
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 space-y-1.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-xs text-ink lg:text-sm">
          <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const iconBox = "bg-amber-100 text-amber-700";
const bodyText = "text-xs leading-relaxed text-ink-soft lg:text-sm";

export function ShoppingGuide() {
  const [stepsOpen, setStepsOpen] = useState(true);

  return (
    <div className="space-y-4 font-sans text-ink">
      <PageHero
        crumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Yardım Merkezi", href: "/yardim-merkezi" },
          { label: "İşlem Rehberi" },
        ]}
        title="İşlem Rehberi"
        subtitle="Alışveriş süreciniz nasıl işler?"
        description="SIDRA’da güvenli, şeffaf ve kolay bir alışveriş deneyimi için siparişinizin tüm aşamalarını, haklarınızı ve önemli bilgileri burada bulabilirsiniz."
      />

      {/* 1. Alışveriş Adımları */}
      <section className="rounded-2xl bg-white/50 px-1 py-2 sm:px-2 lg:px-3">
        <h2>
          <button
            type="button"
            aria-expanded={stepsOpen}
            onClick={() => setStepsOpen((v) => !v)}
            className="flex w-full items-center justify-between gap-3 py-2 text-left font-serif text-lg text-ink md:pointer-events-none md:cursor-default md:text-2xl"
          >
            <span>1. Alışveriş Adımları</span>
            <ChevronDownIcon className={`h-4 w-4 transition-transform md:hidden ${stepsOpen ? "rotate-180" : ""}`} />
          </button>
        </h2>
        <p className="hidden pb-3 text-sm text-ink-soft md:block">
          SIDRA’da bir ürün sipariş etmek için aşağıdaki adımları takip edebilirsiniz.
        </p>

        <div className={`${stepsOpen ? "block" : "hidden"} md:block`}>
          {/* Mobil: dikey zaman çizelgesi */}
          <ol className="px-1 pb-3 pt-1 md:hidden">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className={`relative flex items-center gap-3 pb-5 last:pb-0 ${
                  i < steps.length - 1
                    ? "after:absolute after:left-3 after:top-7 after:h-[calc(100%-1.5rem)] after:w-px after:bg-amber-200"
                    : ""
                }`}
              >
                <span className="z-10 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-amber-200 text-xs font-medium text-amber-900">
                  {s.n}
                </span>
                <s.Icon className="h-5 w-5 shrink-0 text-ink" />
                <div>
                  <p className="font-serif text-sm text-ink">{s.title}</p>
                  <p className="text-xs text-ink-soft">{s.short}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Planşet / Desktop: zəncirvari 5 addım */}
          <ol className="hidden items-stretch md:flex">
            {steps.map((s, i) => (
              <li key={s.n} className="flex flex-1 items-center">
                <div className="relative h-full flex-1 rounded-xl border border-line bg-gradient-to-b from-white/80 to-amber-50/60 px-2 pb-4 pt-6 text-center lg:px-5 lg:pt-7">
                  <span className="absolute left-2.5 top-2.5 grid h-6 w-6 place-items-center rounded-full bg-amber-200 text-xs font-medium text-amber-900 lg:h-7 lg:w-7 lg:text-sm">
                    {s.n}
                  </span>
                  <s.Icon className="mx-auto mt-2 h-6 w-6 text-ink" />
                  <h3 className="mt-3 font-serif text-sm text-ink lg:text-base">{s.title}</h3>
                  <p className="mt-1 text-[11px] leading-snug text-ink-soft lg:text-xs">
                    <span className="lg:hidden">{s.short}</span>
                    <span className="hidden lg:inline">{s.long}</span>
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRightIcon className="mx-2 hidden h-3.5 w-3.5 shrink-0 text-ink-soft lg:block" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 2-5: mobil/planşetde accordion, desktopda 2x2 kart */}
      <div className="grid gap-3 lg:grid-cols-2 lg:gap-4">
        <Collapsible
          title="2. Sözleşme ve Belgeler"
          icon={<DocumentIcon className="h-5 w-5" />}
          iconClassName={iconBox}
          summary="Siparişinize ilişkin mesafeli satış sözleşmesi ve ilgili belgeler elektronik ortamda saklanır. Belgeler en az 3 yıl süreyle hesabınızda erişilebilir olarak saklanır."
          aside={<DocumentVisual />}
          inset="lg:pr-[40%]"
        >
          <p className={bodyText}>
            Siparişinize ilişkin mesafeli satış sözleşmesi ve ilgili belgeler elektronik ortamda saklanır.
            Siparişlerinizin tüm faturalarına ve belgelerine hesabınızdan her zaman erişebilirsiniz.
          </p>
          <CheckList
            items={[
              "Belgeler en az 3 yıl süreyle hesabınızda erişilebilir olarak saklanır.",
              "Sipariş onay e-postası da tarafınıza iletilir.",
              "Sözleşme ve belgeler, elektronik ortamda güvenli şekilde muhafaza edilir.",
            ]}
          />
          <Link href="/hesabim/siparislerim" className={`${btnPrimary} mt-4 w-full sm:w-auto`}>
            Siparişlerimi Görüntüle <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Collapsible>

        <Collapsible
          title="3. Sipariş Öncesi Bilgileri Düzeltme"
          icon={<PencilIcon className="h-5 w-5" />}
          iconClassName={iconBox}
          summary="Ödeme yapmadan önce sipariş özetinizi kontrol edin ve gerekli düzeltmeleri yapın."
          aside={<PhoneVisual />}
          inset="lg:pr-[40%]"
        >
          <p className={bodyText}>
            Ödeme yapmadan önce sipariş özetinizi dikkatlice kontrol edebilirsiniz. Yanlış veya eksik bilgileri
            siparişi tamamlamadan önce kolayca düzeltebilirsiniz.
          </p>
          <CheckList
            items={[
              "Ürün, adet veya varyant değişikliği",
              "Teslimat adresi değişikliği",
              "Teslimat yöntemi değişikliği",
              "Ödeme yöntemi değişikliği",
              "Diğer tüm girilen bilgilerin düzeltilmesi",
            ]}
          />
          <Link href="/sepet" className={`${btnPrimary} mt-4 w-full sm:w-auto`}>
            Sepete Dön <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Collapsible>

        <Collapsible
          title="4. Gizlilik ve Kişisel Veriler"
          icon={<LockIcon className="h-5 w-5" />}
          iconClassName={iconBox}
          summary="Alışveriş sürecinde paylaştığınız kişisel verileriniz, Kişisel Verilerin Korunması Mevzuatı’na uygun olarak işlenir ve korunur."
          aside={<LockVisual />}
          inset="lg:pr-[40%]"
        >
          <p className={bodyText}>
            Alışveriş sürecinde paylaştığınız kişisel verileriniz, Kişisel Verilerin Korunması Mevzuatı’na uygun
            olarak işlenir ve korunur. Detaylı bilgi için Gizlilik Politikamızı ve Çerez Politikamızı
            inceleyebilirsiniz.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Link href="/gizlilik-politikasi" className={btnOutline}>
              Gizlilik Politikası <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/cerez-politikasi" className={btnOutline}>
              Çerez Politikası <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Collapsible>

        <Collapsible
          title="5. Uyuşmazlık Çözümü"
          icon={<ScaleIcon className="h-5 w-5" />}
          iconClassName={iconBox}
          summary="Herhangi bir sorun yaşamanız durumunda öncelikle satıcı ile iletişime geçebilir veya SIDRA Destek ekibimizden yardım alabilirsiniz."
          aside={<ScalesVisual />}
          inset="lg:pr-[40%]"
        >
          <p className={bodyText}>
            Herhangi bir sorun yaşamanız durumunda öncelikle satıcı ile iletişime geçebilir veya SIDRA Destek
            ekibimizden yardım alabilirsiniz. Sorunun çözülememesi halinde, yasal haklarınız kapsamında ilgili
            tüketici uyuşmazlık mercilerine başvurabilirsiniz.
          </p>
          <CheckList
            items={["Satıcı ile iletişim", "SIDRA Destek ekibi ile çözüm", "Gerekirse yasal tüketici uyuşmazlık mercilerine başvuru hakkınız saklıdır."]}
          />
          <Link href="/destek-merkezi" className={`${btnPrimary} mt-4 w-full sm:w-auto`}>
            Destek Merkezi <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </Collapsible>
      </div>

      {/* Destek banneri */}
      <section className="flex flex-col gap-4 rounded-2xl bg-amber-100/60 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between lg:px-6 lg:py-5">
        <div className="flex items-start gap-3 lg:items-center">
          <HeadsetIcon className="h-9 w-9 shrink-0 text-amber-700 lg:h-12 lg:w-12" />
          <div>
            <h2 className="font-serif text-base text-ink lg:text-xl">Hâlâ sorunuz mu var?</h2>
            <p className="mt-1 text-xs text-ink-soft lg:text-sm">
              Sipariş, teslimat, iade ve diğer konularda destek ekibimiz size yardımcı olmaktan memnuniyet duyar.
            </p>
          </div>
        </div>
        <Link href="/iletisim" className={`${btnPrimary} w-full shrink-0 sm:w-auto`}>
          Bizimle İletişime Geç <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}
