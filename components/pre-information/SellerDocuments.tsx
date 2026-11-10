"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowRightIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  DocumentIcon,
  DownloadIcon,
} from "../PageIcons";

type Doc = { title: string; version: string; created: string };
type Seller = {
  name: string;
  initial: string;
  legal: string;
  mersis: string;
  city: string;
  avatarClass: string;
  docs: Doc[];
};

const sellers: Seller[] = [
  {
    name: "Lumea Jewellery",
    initial: "L",
    legal: "Lumea Kuyumculuk Ticaret Limited Şirketi",
    mersis: "1234 5678 9012 3456",
    city: "İstanbul, Türkiye",
    avatarClass: "bg-white text-amber-700 border border-amber-200",
    docs: [
      { title: "Ön Bilgilendirme Formu", version: "v1.0.0", created: "12 Ekim 2026 14:32" },
      { title: "Mesafeli Satış Sözleşmesi", version: "v1.0.0", created: "12 Ekim 2026 14:32" },
    ],
  },
  {
    name: "Aurora Jewellery",
    initial: "A",
    legal: "Aurora Mücevherat Sanayi ve Ticaret A.Ş.",
    mersis: "9876 5432 1098 7654",
    city: "İstanbul, Türkiye",
    avatarClass: "bg-amber-200 text-amber-900",
    docs: [
      { title: "Ön Bilgilendirme Formu", version: "v1.0.0", created: "12 Ekim 2026 14:32" },
      { title: "Mesafeli Satış Sözleşmesi", version: "v1.0.0", created: "12 Ekim 2026 14:32" },
    ],
  },
];

function CurrentChip() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] text-emerald-700">
      <CheckCircleIcon className="h-3 w-3" />
      Güncel
    </span>
  );
}

const smallBtn =
  "inline-flex h-9 items-center justify-center rounded-lg px-4 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40";

function DocRow({ doc }: { doc: Doc }) {
  const [openVersions, setOpenVersions] = useState(false);
  return (
    <li className="relative flex items-center gap-3 rounded-xl border border-line bg-white p-3">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-50 text-amber-700">
        <DocumentIcon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-serif text-sm text-ink">{doc.title}</p>
        <p className="text-[11px] text-ink-soft">
          <span className="hidden sm:inline">Sürüm: </span>
          {doc.version}
          <span className="hidden sm:inline"> · Oluşturulma: </span>
          <span className="block sm:inline">{doc.created}</span>
        </p>
        <span className="mt-1 inline-block md:hidden">
          <CurrentChip />
        </span>
      </div>

      <span className="hidden md:inline-block">
        <CurrentChip />
      </span>
      <Link href="#goruntule" className={`${smallBtn} border border-line bg-white text-ink hover:bg-cream-100`}>
        Görüntüle
      </Link>
      <Link
        href="#pdf"
        aria-label="PDF indir"
        className={`${smallBtn} bg-amber-100 text-amber-800 hover:bg-amber-200 max-md:w-9 max-md:border max-md:border-line max-md:bg-white max-md:px-0 max-md:text-ink`}
      >
        <DownloadIcon className="h-4 w-4 md:hidden" />
        <span className="hidden md:inline">PDF İndir</span>
      </Link>

      <div className="relative hidden lg:block">
        <button
          type="button"
          aria-expanded={openVersions}
          onClick={() => setOpenVersions((v) => !v)}
          className={`${smallBtn} gap-2 border border-line bg-white text-ink hover:bg-cream-100`}
        >
          Önceki Sürümler <ChevronDownIcon className="h-3.5 w-3.5" />
        </button>
        {openVersions && (
          <div className="absolute right-0 top-11 z-10 w-48 rounded-lg border border-line bg-white p-3 text-xs text-ink-soft shadow-md">
            Önceki sürüm bulunmuyor.
          </div>
        )}
      </div>
    </li>
  );
}

function SellerBlock({ seller }: { seller: Seller }) {
  const [open, setOpen] = useState(true);
  return (
    <section className="rounded-2xl border border-line bg-white/70 p-3 sm:p-4">
      <div className="flex items-center gap-3">
        <span
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full font-serif text-base lg:h-12 lg:w-12 lg:text-xl ${seller.avatarClass}`}
        >
          {seller.initial}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-serif text-base text-ink lg:text-lg">{seller.name}</h3>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] text-emerald-700 lg:text-xs">
              <CheckCircleIcon className="h-3 w-3" />
              Doğrulanmış Satıcı
            </span>
          </div>
          <p className="mt-0.5 hidden text-xs text-ink-soft lg:block">{seller.legal}</p>
          <p className="hidden text-xs text-ink-soft lg:block">
            MERSİS: {seller.mersis} <span className="px-1">|</span> {seller.city}
          </p>
        </div>
        <Link
          href="/sellerinfo"
          className="hidden items-center gap-1 text-xs text-ink underline underline-offset-2 hover:text-ink-soft lg:inline-flex"
        >
          Satıcı Bilgilerini Gör <ArrowRightIcon className="h-3.5 w-3.5" />
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-label={`${seller.name} belgelerini ${open ? "gizle" : "göster"}`}
          onClick={() => setOpen((v) => !v)}
          className="grid h-8 w-8 place-items-center rounded-full text-ink hover:bg-cream-100"
        >
          {open ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
        </button>
      </div>
      {open && (
        <ul className="mt-3 space-y-2">
          {seller.docs.map((d) => (
            <DocRow key={d.title} doc={d} />
          ))}
        </ul>
      )}
    </section>
  );
}

export function SellerDocuments() {
  return (
    <div className="space-y-3">
      {sellers.map((s) => (
        <SellerBlock key={s.name} seller={s} />
      ))}
    </div>
  );
}
