"use client";

import Link from "next/link";
import { useState, type ComponentType } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BagIcon,
  CheckIcon,
  ClockIcon,
  DatabaseIcon,
  DocumentIcon,
  HeadsetIcon,
  InfoIcon,
  ReceiptIcon,
  ShieldCheckIcon,
  TruckIcon,
  WarningIcon,
  type IconProps,
} from "../PageIcons";
import { Breadcrumb } from "../shared/Breadcrumb";
import { Collapsible } from "../shared/Collapsible";
import { btnOutline } from "../shared/ui";
import { OrderSummaryCompact, OrderSummaryFull, order } from "./OrderSummary";
import { SellerDocuments } from "./SellerDocuments";

const steps = ["Sepet", "Teslimat", "Ödeme", "Onay"];

function Stepper({ current }: { current: number }) {
  return (
    <ol className="flex w-full max-w-xs items-start lg:w-[300px] lg:max-w-none" aria-label="Sipariş adımları">
      {steps.map((label, i) => {
        const n = i + 1;
        const active = n === current;
        return (
          <li
            key={label}
            aria-current={active ? "step" : undefined}
            className={`relative flex flex-1 flex-col items-center gap-1 ${
              i > 0 ? "before:absolute before:right-1/2 before:top-4 before:h-px before:w-full before:bg-ink-soft/40" : ""
            }`}
          >
            <span
              className={`relative z-10 grid h-8 w-8 place-items-center rounded-full border text-sm ${
                active ? "border-ink bg-ink text-white" : "border-ink-soft/60 bg-cream-100 text-ink"
              }`}
            >
              {n}
            </span>
            <span className={`text-[11px] ${active ? "font-medium text-ink" : "text-ink-soft"}`}>{label}</span>
          </li>
        );
      })}
    </ol>
  );
}

const topics: { Icon: ComponentType<IconProps>; title: string; desc: string }[] = [
  { Icon: BagIcon, title: "Ürün Bilgileri", desc: "Ürünün temel özellikleri, materyal, ağırlık, taş bilgileri, ölçü, stok durumu." },
  { Icon: ShieldCheckIcon, title: "Satıcı ve Platform Bilgileri", desc: "Satıcının ticaret unvanı, iletişim bilgileri, MERSİS/VERGİ bilgileri ve platform aracısının bilgileri." },
  { Icon: ReceiptIcon, title: "Toplam Fiyat ve Vergiler", desc: "Ürün fiyatı, KDV dahil toplam tutar, teslimat ve diğer ek ücretler." },
  { Icon: TruckIcon, title: "Teslimat ve Kargo", desc: "Teslimat yöntemi, tahmini teslim süresi, kargo firması bilgileri." },
  { Icon: ClockIcon, title: "Cayma Hakkı ve İstisnalar", desc: "Cayma hakkı, süreleri ve istisnalar (kişiye özel, fiyatı finansal piyasalara bağlı ürünler vb.)." },
  { Icon: HeadsetIcon, title: "Destek ve Başvuru Yolları", desc: "Müşteri hizmetleri, şikayet, uyuşmazlık çözümü ve yasal başvuru mercileri." },
];

const withdrawalText =
  "Bazı mücevher ürünlerinde cayma hakkı, ürünün niteliğine göre değişebilir. Özellikle finansal piyasalardaki dalgalanmalara bağlı fiyatı belirlenen ürünler, kişiye özel üretilen ürünler ve hijyen açısından koruyucu bandı açılan küpe gibi ürünlerde yasal istisnalar uygulanabilir. Her ürün için geçerli cayma hakkı bilgisi, satıcıya ait Ön Bilgilendirme Formu’nda açıkça belirtilir.";

const storageText =
  "Onayladığınız ön bilgilendirme formu ve mesafeli satış sözleşmesi, siparişinizle birlikte güvenli şekilde saklanır. Daha sonra Hesabım > Siparişlerim > Belgeler bölümünden her zaman görüntüleyebilir ve indirebilirsiniz.";

function Support({ className = "" }: { className?: string }) {
  return (
    <div className={`items-center gap-3 ${className}`}>
      <HeadsetIcon className="h-9 w-9 shrink-0 text-amber-700" />
      <div>
        <p className="font-serif text-sm text-ink">Sorunuz mu var?</p>
        <p className="text-xs text-ink-soft">Destek ekibimizle iletişime geçin.</p>
        <Link
          href="/destek-merkezi"
          className="mt-0.5 inline-flex items-center gap-1 text-xs font-medium text-ink underline underline-offset-2"
        >
          Destek Merkezi <ArrowRightIcon className="h-3 w-3" />
        </Link>
      </div>
    </div>
  );
}

export function PreInformation() {
  const [agreed, setAgreed] = useState(false);

  const handleConfirm = () => {
    if (!agreed) return;
    // TODO: sifarişi təsdiqləyib ödəniş addımına yönləndirin
  };

  return (
    <div className="font-sans text-ink">
      {/* Başlıq + stepper */}
      <header className="lg:flex lg:items-start lg:justify-between lg:gap-8">
        <div>
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Sepet", href: "/sepet" },
              { label: "Teslimat", href: "/teslimat" },
              { label: "Ödeme", href: "/odeme" },
              { label: "Ön Bilgilendirme ve Sözleşmeler" },
            ]}
          />
          <h1 className="mt-5 font-serif text-3xl text-ink sm:text-4xl lg:mt-6 lg:text-5xl">
            Ön Bilgilendirme ve Sözleşmeler
          </h1>
          <p className="mt-2 max-w-md font-sans text-sm text-ink-soft sm:max-w-xl lg:max-w-none lg:text-base">
            Siparişinizi tamamlamadan önce aşağıdaki belgeleri inceleyin ve onaylayın.
          </p>
        </div>
        <div className="mt-4 lg:-mt-1">
          <Stepper current={4} />
        </div>
      </header>

      <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
        <div className="min-w-0 space-y-3">
          <div className="flex items-start gap-3 rounded-xl bg-sky-50/90 p-3 text-xs leading-relaxed text-ink-soft lg:p-4 lg:text-sm">
            <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 lg:h-5 lg:w-5" />
            <p>
              Bu belgeler, siparişinizdeki ürünler, satıcılar, fiyatlar, teslimat bilgileri ve politikalar esas
              alınarak otomatik olarak oluşturulur. Onayladığınız belgeler hesabınızda saklanır ve daha sonra
              Siparişlerim &gt; Belgeler bölümünden görüntüleyip indirebilirsiniz.
            </p>
          </div>

          <SellerDocuments />

          {/* Desktop: Ön Bilgilendirme Özeti */}
          <section className="hidden rounded-2xl border border-line bg-white/70 p-6 lg:block">
            <div className="flex items-center gap-3">
              <DocumentIcon className="h-6 w-6 text-amber-700" />
              <h2 className="font-serif text-lg text-ink">Ön Bilgilendirme Özeti</h2>
            </div>
            <p className="mt-2 text-sm text-ink-soft">
              Aşağıdaki konular, Mesafeli Sözleşmeler Yönetmeliği kapsamında size önceden ve açıkça sunulması gereken
              bilgilerdir.
            </p>
            <ul className="mt-4 grid grid-cols-3 gap-x-6 gap-y-5">
              {topics.map(({ Icon, title, desc }) => (
                <li key={title} className="flex items-start gap-3">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-100 text-amber-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-serif text-sm text-ink">{title}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-soft">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-5 flex items-start gap-3 rounded-xl bg-amber-100/70 p-4">
              <WarningIcon className="mt-0.5 h-6 w-6 shrink-0 text-amber-700" />
              <div>
                <p className="font-serif text-sm text-ink">Mücevher Ürünlerinde Cayma Hakkı Hakkında</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">{withdrawalText}</p>
              </div>
            </div>
            <div className="mt-3 flex items-start gap-3 rounded-xl bg-emerald-50 p-4">
              <DatabaseIcon className="mt-0.5 h-6 w-6 shrink-0 text-emerald-700" />
              <div>
                <p className="font-serif text-sm text-ink">Kalıcı Veri Saklayıcısı ve Erişim</p>
                <p className="mt-1 text-xs leading-relaxed text-ink-soft">{storageText}</p>
              </div>
            </div>
          </section>

          {/* Mobil / planşet: accordion */}
          <div className="space-y-2 lg:hidden">
            <Collapsible
              title="Ön Bilgilendirme Özeti"
              icon={<DocumentIcon className="h-5 w-5" />}
              iconClassName="text-amber-700"
              titleClassName="text-sm"
            >
              <ul className="space-y-3">
                {topics.map(({ title, desc }) => (
                  <li key={title}>
                    <p className="font-serif text-sm text-ink">{title}</p>
                    <p className="text-xs leading-relaxed text-ink-soft">{desc}</p>
                  </li>
                ))}
              </ul>
            </Collapsible>
            <Collapsible
              title="Mücevher Ürünlerinde Cayma Hakkı Hakkında"
              icon={<WarningIcon className="h-5 w-5" />}
              iconClassName="text-orange-600"
              titleClassName="text-sm"
            >
              <p className="text-xs leading-relaxed text-ink-soft">{withdrawalText}</p>
            </Collapsible>
            <Collapsible
              title="Kalıcı Veri Saklayıcısı ve Erişim"
              icon={<DatabaseIcon className="h-5 w-5" />}
              iconClassName="text-emerald-700"
              titleClassName="text-sm"
            >
              <p className="text-xs leading-relaxed text-ink-soft">{storageText}</p>
            </Collapsible>
          </div>

          <OrderSummaryCompact />

          {/* Onay */}
          <label className="flex cursor-pointer items-start gap-3 pt-1">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="peer sr-only"
            />
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border border-ink-soft bg-white text-white peer-checked:border-ink peer-checked:bg-ink peer-focus-visible:ring-2 peer-focus-visible:ring-ink/40">
              {agreed && <CheckIcon className="h-3.5 w-3.5" />}
            </span>
            <span className="text-xs leading-relaxed text-ink lg:text-sm">
              Ön Bilgilendirme Formu’nu ve Mesafeli Satış Sözleşmesi’ni okudum, siparişime ait satıcıya özel koşulları
              gördüm ve kabul ediyorum.
              <span className="mt-1 block text-[11px] text-ink-soft lg:text-xs">
                <Link href="#on-bilgilendirme" className="text-ink underline underline-offset-2">
                  Ön Bilgilendirme Formu
                </Link>
                <span className="px-2">|</span>
                <Link href="#mesafeli-satis" className="text-ink underline underline-offset-2">
                  Mesafeli Satış Sözleşmesi
                </Link>
              </span>
            </span>
          </label>

          {/* Aksiyonlar */}
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <button
              type="button"
              aria-disabled={!agreed}
              onClick={handleConfirm}
              className="order-1 inline-flex h-16 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-white transition-colors hover:bg-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 aria-disabled:cursor-not-allowed aria-disabled:bg-stone-400 aria-disabled:hover:bg-stone-400 sm:h-18 lg:order-2 lg:h-12 lg:w-auto lg:min-w-[22rem]"
            >
              Siparişi Onayla ve Öde <span className="opacity-90">{order.total}</span>
              <ArrowRightIcon className="h-4 w-4" />
            </button>

            <Link href="/odeme" className={`${btnOutline} order-2 hidden lg:order-1 lg:inline-flex`}>
              <ArrowLeftIcon className="h-4 w-4" /> Siparişe Geri Dön
            </Link>

            <div className="order-3 flex items-center justify-between gap-4 lg:hidden">
              <Link
                href="/odeme"
                className="hidden items-center gap-2 text-xs font-medium text-ink underline underline-offset-2 sm:inline-flex"
              >
                <ArrowLeftIcon className="h-4 w-4" /> Siparişe Geri Dön
              </Link>
              <Support className="flex" />
            </div>
          </div>
        </div>

        {/* Sağ sütun (yalnız desktop) */}
        <aside className="hidden space-y-4 lg:block">
          <OrderSummaryFull />
          <Support className="flex pl-2" />
        </aside>
      </div>
    </div>
  );
}

