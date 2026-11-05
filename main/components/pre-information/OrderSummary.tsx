import Link from "next/link";
import { ChevronRightIcon, DiamondIcon, HeadsetIcon, ReturnIcon, ShieldCheckIcon } from "../PageIcons";

// Nümunə (mock) məlumat – real API məlumatı ilə əvəz edin
export const order = {
  no: "#SDR-2026-00123",
  date: "12 Ekim 2026 14:32",
  subtotal: "₺9.750",
  shipping: "₺120",
  vat: "₺1.625",
  total: "₺49.190",
  itemCount: "3 ürün (2 satıcı)",
};

const groups = [
  {
    seller: "Lumea Jewellery",
    count: "2 ürün",
    initial: "L",
    items: [
      { name: "Solitaire Diamond Ring", meta: "18K Gold · Size: 52", price: "₺28.500" },
      { name: "Malachite Clover Necklace", meta: "18K Gold", price: "₺12.800" },
    ],
  },
  {
    seller: "Aurora Jewellery",
    count: "1 ürün",
    initial: "A",
    items: [{ name: "Pearl Drop Earrings", meta: "18K Gold", price: "₺9.750" }],
  },
];

const trust = [
  { Icon: ShieldCheckIcon, title: "Güvenli Ödeme", desc: "256-bit SSL şifreleme" },
  { Icon: ReturnIcon, title: "Kolay İade", desc: "14 gün içinde" },
  { Icon: HeadsetIcon, title: "Müşteri Desteği", desc: "7/24 destek" },
];

function Avatar({ initial, className = "h-7 w-7" }: { initial: string; className?: string }) {
  return (
    <span
      className={`grid shrink-0 place-items-center rounded-full bg-amber-200 font-serif text-xs text-amber-900 ring-2 ring-white ${className}`}
    >
      {initial}
    </span>
  );
}

function Thumb() {
  return (
    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-md bg-gradient-to-br from-amber-50 to-amber-100 text-amber-700">
      <DiamondIcon className="h-6 w-6" />
    </span>
  );
}

/** Desktop: sağ sütun – tam sipariş xülasəsi */
export function OrderSummaryFull() {
  return (
    <div className="space-y-3 lg:sticky lg:top-24">
      <section className="rounded-2xl border border-line bg-white/80 p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-lg text-ink">Sipariş Özeti</h2>
        </div>
        <dl className="mt-3 space-y-2 border-b border-line pb-3 text-xs">
          <div className="flex items-start justify-between">
            <div>
              <dt className="text-ink-soft">Sipariş No</dt>
              <dd className="mt-0.5 font-medium text-ink">{order.no}</dd>
            </div>
            <Link href="/sepet" className="text-ink-soft underline underline-offset-2 hover:text-ink">
              Düzenle
            </Link>
          </div>
          <div>
            <dt className="text-ink-soft">Oluşturulma Tarihi</dt>
            <dd className="mt-0.5 text-ink">{order.date}</dd>
          </div>
        </dl>

        {groups.map((g) => (
          <div key={g.seller} className="mt-4">
            <div className="flex items-center gap-2">
              <Avatar initial={g.initial} />
              <p className="font-serif text-sm text-ink">
                {g.seller} <span className="font-sans text-xs text-ink-soft">({g.count})</span>
              </p>
            </div>
            <ul className="mt-2 space-y-2">
              {g.items.map((it) => (
                <li key={it.name} className="flex items-center gap-3 rounded-lg border border-line bg-white p-2">
                  <Thumb />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-serif text-xs text-ink">{it.name}</p>
                    <p className="text-[11px] text-ink-soft">{it.meta}</p>
                    <p className="text-xs font-semibold text-ink">{it.price}</p>
                  </div>
                  <span className="text-[11px] text-ink-soft">x1</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <dl className="mt-4 space-y-1.5 border-t border-line pt-3 text-xs text-ink">
          <div className="flex justify-between"><dt>Ürünler Ara Toplamı</dt><dd>{order.subtotal}</dd></div>
          <div className="flex justify-between"><dt>Kargo Ücreti</dt><dd>{order.shipping}</dd></div>
          <div className="flex justify-between"><dt>KDV (Dahil %20)</dt><dd>{order.vat}</dd></div>
        </dl>
        <div className="mt-3 flex items-baseline justify-between border-t border-line pt-3">
          <span className="font-serif text-base text-ink">
            Genel Toplam <span className="font-sans text-[10px] text-ink-soft">(KDV dahil)</span>
          </span>
          <span className="font-serif text-xl text-ink">{order.total}</span>
        </div>
      </section>

      <section className="rounded-2xl border border-line bg-white/80 p-5">
        <ul className="space-y-3">
          {trust.map(({ Icon, title, desc }) => (
            <li key={title} className="flex items-center gap-3">
              <Icon className="h-6 w-6 shrink-0 text-amber-700" />
              <div>
                <p className="text-sm font-medium text-ink">{title}</p>
                <p className="text-xs text-ink-soft">{desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

/** Mobil / planşet: kompakt sipariş xülasəsi */
export function OrderSummaryCompact() {
  return (
    <Link href="/sepet" className="block rounded-2xl border border-line bg-white/80 p-4 lg:hidden">
      <div className="flex items-start justify-between gap-3">
        <h2 className="font-serif text-base text-ink">Sipariş Özeti</h2>
        <div className="flex items-center gap-2 text-[11px] text-ink-soft">
          <span className="text-right leading-tight">
            {order.no}
            <span className="hidden sm:inline">&nbsp;&nbsp;{order.date}</span>
          </span>
          <ChevronRightIcon className="hidden h-4 w-4 text-ink sm:block" />
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <div className="flex -space-x-2">
          <Avatar initial="L" className="h-9 w-9" />
          <Avatar initial="A" className="h-9 w-9" />
          <span className="grid h-9 w-9 place-items-center rounded-full bg-amber-50 text-amber-700 ring-2 ring-white">
            <DiamondIcon className="h-4 w-4" />
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-50 text-emerald-700 ring-2 ring-white">
            <DiamondIcon className="h-4 w-4" />
          </span>
        </div>
        <p className="flex-1 text-xs text-ink-soft">{order.itemCount}</p>
        <p className="font-serif text-lg text-ink">{order.total}</p>
      </div>
    </Link>
  );
}
