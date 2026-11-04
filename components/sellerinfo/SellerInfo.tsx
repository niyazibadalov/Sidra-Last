import Image from "next/image";
import Link from "next/link";
import heroImage from "@/app/images/lifetimeHero.png";
import {
  ArrowRightIcon,
  BagIcon,
  BankIcon,
  BoxIcon,
  BuildingIcon,
  CalendarIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  DiamondIcon,
  DocumentIcon,
  FlagIcon,
  HeadsetIcon,
  InfoIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  PlayIcon,
  ReturnIcon,
  ShieldCheckIcon,
  StarIcon,
  TagIcon,
  TruckIcon,
  UsersIcon,
  type IconProps,
} from "../PageIcons";
import { Breadcrumb } from "../shared/Breadcrumb";
import { Collapsible } from "../shared/Collapsible";
import { btnPrimary } from "../shared/ui";
import type { ComponentType } from "react";

const metrics = [
  { Icon: CalendarIcon, value: "5+ Yıl", label: "Sidra’da" },
  { Icon: ShieldCheckIcon, value: "10K+", label: "Ürün" },
  { Icon: UsersIcon, value: "%98", label: "Olumlu Yorum" },
  { Icon: HeadsetIcon, value: "Hızlı Yanıt", label: "2 saat içinde" },
];

type LegalRow = {
  Icon: ComponentType<IconProps>;
  label: string;
  value: string;
  info?: boolean;
  verified?: boolean;
};

const legalRows: LegalRow[] = [
  { Icon: BankIcon, label: "Ticari Ünvan / İşletme Adı", value: "Lumea Kuyumculuk Ticaret Limited Şirketi" },
  { Icon: TagIcon, label: "Marka / Mağaza Adı", value: "Lumea Jewellery" },
  { Icon: DocumentIcon, label: "MERSİS Numarası", value: "1234 5678 9012 3456", info: true },
  { Icon: BuildingIcon, label: "Vergi Dairesi / Vergi No", value: "Beşiktaş Vergi Dairesi / 123 456 7890" },
  { Icon: MailIcon, label: "KEP Adresi", value: "lumea@hs03.kep.tr" },
  { Icon: MapPinIcon, label: "Kayıtlı Adres", value: "Barbaros Mah. Ihlamur Sok. No:5 D:12 Beşiktaş, İstanbul 34353, Türkiye" },
  { Icon: PhoneIcon, label: "Telefon (Doğrulanmış)", value: "+90 530 000 00 00", verified: true },
];

const advantages = [
  { Icon: DiamondIcon, label: "Orijinal Ürünler" },
  { Icon: ShieldCheckIcon, label: "Sertifikalı Malzemeler" },
  { Icon: BoxIcon, label: "Güvenli Paketleme" },
];

const beforeOrder = [
  { Icon: ReturnIcon, title: "İade ve Cayma Politikası", mobile: "İade ve Cayma Politikası", desc: "14 gün iade ve cayma hakkı.", cta: "Politikayı Gör", href: "#iade" },
  { Icon: TruckIcon, title: "Teslimat ve Kargo", mobile: "Teslimat ve Kargo", desc: "Tahmini teslimat süreleri ve kargo bilgileri.", cta: "Detayları Gör", href: "#teslimat" },
  { Icon: DocumentIcon, title: "Şartlar ve Koşullar (Ön Bilgilendirme)", mobile: "Ön Bilgilendirme Formu", desc: "Ürün bilgileri, toplam fiyat, ödeme ve cayma hakkı.", cta: "Detayları Gör", href: "#on-bilgilendirme" },
  { Icon: HeadsetIcon, title: "Satıcı ile İletişim", mobile: "Satıcı ile İletişim", desc: "Sorularınız için satıcıyla iletişime geçin.", cta: "Satıcıya Ulaş", href: "#iletisim" },
];

function VerifiedChip() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">
      <CheckCircleIcon className="h-3.5 w-3.5" />
      Doğrulandı
    </span>
  );
}

export function SellerInfo() {
  return (
    <div className="space-y-4 font-sans text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="(min-width: 1440px) 1440px, 100vw"
          className="object-cover object-[85%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-100 via-cream-100/80 to-transparent sm:via-cream-100/55" />

        <div className="relative px-4 pt-4 sm:px-8 lg:px-10">
          <Breadcrumb
            items={[
              { label: "Ana Sayfa", href: "/" },
              { label: "Lumea Jewellery", href: "/magaza/lumea-jewellery" },
              { label: "Satıcı Bilgileri" },
            ]}
          />

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-4 pb-5 lg:mt-6 lg:gap-x-8 lg:pb-6">
            <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full border border-line bg-white/70 text-center sm:h-20 sm:w-20 lg:h-32 lg:w-32">
              <div>
                <span className="block font-serif text-2xl leading-none text-amber-700 lg:text-5xl">L</span>
                <span className="block font-serif text-[8px] tracking-[0.25em] text-amber-700 lg:text-xs">LUMEA</span>
              </div>
            </div>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="font-serif text-xl text-ink sm:text-2xl lg:text-3xl">Lumea Jewellery</h1>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700">
                  <CheckCircleIcon className="h-3.5 w-3.5" />
                  Doğrulanmış Satıcı
                </span>
              </div>
              <p className="mt-1 text-sm text-ink lg:text-lg">Her Anınız İçin Birinci Sınıf Mücevher</p>
              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink-soft lg:text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <StarIcon className="h-4 w-4 text-amber-500" />
                  <strong className="font-medium text-ink">4.8</strong> (1,2 B yorum)
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <MapPinIcon className="h-4 w-4" />
                  İstanbul, Türkiye
                </span>
              </div>
            </div>

            <Link href="/magaza/lumea-jewellery" className={`${btnPrimary} lg:ml-4`}>
              Mağazayı Görüntüle <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          {/* Metrikler */}
          <ul className="grid grid-cols-4 gap-2 border-t border-line/70 py-3 lg:gap-4 lg:py-4">
            {metrics.map(({ Icon, value, label }) => (
              <li key={value} className="flex flex-col items-center gap-1 text-center sm:flex-row sm:gap-3 sm:text-left">
                <Icon className="h-5 w-5 shrink-0 text-amber-700 lg:h-7 lg:w-7" />
                <div>
                  <p className="text-xs font-medium text-ink lg:text-sm">{value}</p>
                  <p className="hidden text-[11px] text-ink-soft sm:block lg:text-xs">{label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="grid gap-3 lg:grid-cols-[1.7fr_1fr] lg:gap-4">
        {/* Satıcı Hukuki Bilgileri */}
        <Collapsible
          title="Satıcı Hukuki Bilgileri"
          icon={<DocumentIcon className="h-5 w-5" />}
          defaultOpen
        >
          <div className="flex items-start gap-2 rounded-lg bg-sky-50 p-3 text-xs leading-relaxed text-ink-soft lg:ml-14 lg:text-sm">
            <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" />
            <p>
              Aşağıdaki bilgiler satıcı tarafından sağlanmış ve SIDRA tarafından doğrulanmıştır. Şeffaflık ve ön
              bilgilendirme amacıyla, Türkiye’deki ilgili e-ticaret mevzuatına uygun olarak sizinle paylaşılmaktadır.
            </p>
          </div>

          <dl className="mt-2 divide-y divide-line">
            {legalRows.map(({ Icon, label, value, info, verified }) => (
              <div key={label} className="flex items-start gap-3 py-3 lg:items-center">
                <Icon className="mt-0.5 h-5 w-5 shrink-0 text-ink-soft lg:mt-0 lg:h-4 lg:w-4" />
                <div className="min-w-0 flex-1 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center lg:gap-4">
                  <dt className="text-xs text-ink-soft lg:text-sm">{label}</dt>
                  <dd className="mt-0.5 flex flex-wrap items-center gap-2 text-sm text-ink lg:mt-0">
                    <span>{value}</span>
                    {info && <InfoIcon className="h-3.5 w-3.5 text-ink-soft" />}
                    {verified && <VerifiedChip />}
                  </dd>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-3 py-3 lg:items-center">
              <HeadsetIcon className="mt-0.5 h-5 w-5 shrink-0 text-ink-soft lg:mt-0 lg:h-4 lg:w-4" />
              <div className="flex min-w-0 flex-1 items-center justify-between gap-3 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-4">
                <div className="lg:contents">
                  <dt className="text-xs text-ink-soft lg:text-sm">Destek E-posta</dt>
                  <dd className="mt-0.5 flex items-center justify-between gap-3 text-sm text-ink lg:mt-0">
                    destek@lumea.com
                  </dd>
                </div>
                <Link
                  href="#iletisim"
                  className="hidden shrink-0 rounded-lg border border-line bg-white px-4 py-2 text-xs text-ink hover:bg-cream-100 sm:inline-flex lg:justify-self-end"
                >
                  Satıcıya Ulaş
                </Link>
              </div>
            </div>
          </dl>

          <div className="mt-2 flex items-start gap-2 rounded-lg bg-emerald-50 p-3 text-xs leading-relaxed text-emerald-900 lg:text-sm">
            <ShieldCheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 lg:h-5 lg:w-5" />
            <p>
              Satıcının kayıtlı adresi ve doğrulanmış telefon numarası SIDRA tarafından saklanmakta ve
              doğrulanmaktadır. Bu bilgiler gerektiğinde resmi bildirimler için kullanılabilir.
            </p>
          </div>
        </Collapsible>

        {/* Satıcı Hakkında */}
        <Collapsible title="Satıcı Hakkında" tone="white">
          <p className="text-sm leading-relaxed text-ink-soft">
            Lumea Jewellery, yüksek kaliteli malzemeler ve eşsiz işçilikle zamansız parçalar yaratır.
            Koleksiyonlarımız modern zarafeti geleneksel mücevher sanatıyla bir araya getirir.
          </p>

          <ul className="mt-5 grid grid-cols-3 gap-2 text-center">
            {advantages.map(({ Icon, label }) => (
              <li key={label} className="flex flex-col items-center gap-2 text-xs text-ink lg:text-sm">
                <Icon className="h-7 w-7 text-amber-700" />
                <span>{label}</span>
              </li>
            ))}
          </ul>

          <div className="relative mt-5 h-44 overflow-hidden rounded-xl lg:h-56">
            <Image
              src={heroImage}
              alt="Lumea Jewellery hikâyesi"
              fill
              sizes="(min-width: 1024px) 30vw, 100vw"
              className="object-cover object-[85%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            <button
              type="button"
              className="absolute bottom-4 left-4 flex items-center gap-3 text-left text-white"
              aria-label="Lumea hikâyesini izle"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-ink">
                <PlayIcon className="h-4 w-4" />
              </span>
              <span className="text-sm leading-tight">
                Lumea’yı Keşfedin
                <br />
                Hikâyemiz
              </span>
            </button>
          </div>
        </Collapsible>

        {/* Sipariş Öncesi Bilgiler */}
        <Collapsible
          title="Sipariş Öncesi Bilgiler"
          icon={<BagIcon className="h-5 w-5" />}
          defaultOpen
          className="lg:col-span-2"
        >
          <p className="mb-4 hidden text-sm text-ink-soft lg:block lg:ml-14 lg:-mt-2">
            Satın alma işlemini tamamlamadan önce satıcıya özel bilgileri inceleyiniz.
          </p>

          {/* Desktop kartlar */}
          <div className="hidden gap-4 lg:grid lg:grid-cols-4">
            {beforeOrder.map(({ Icon, title, desc, cta, href }) => (
              <article key={title} className="flex flex-col rounded-xl border border-line bg-white/80 p-4">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-amber-100 text-amber-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-sm leading-snug text-ink">{title}</h3>
                    <p className="mt-1 text-xs text-ink-soft">{desc}</p>
                  </div>
                </div>
                <Link href={href} className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-ink hover:text-ink-soft">
                  {cta} <ArrowRightIcon className="h-3.5 w-3.5" />
                </Link>
              </article>
            ))}
          </div>

          {/* Mobil / planşet liste */}
          <ul className="divide-y divide-line lg:hidden">
            {beforeOrder.map(({ Icon, mobile, href }) => (
              <li key={mobile}>
                <Link href={href} className="flex items-center gap-3 py-3 text-sm text-ink">
                  <Icon className="h-4 w-4 shrink-0 text-ink-soft" />
                  <span className="flex-1">{mobile}</span>
                  <ChevronRightIcon className="h-4 w-4 text-ink-soft" />
                </Link>
              </li>
            ))}
          </ul>
        </Collapsible>
      </div>

      {/* Hatalı bilgi bildir (mobil / planşet) */}
      <Link
        href="#bildir"
        className="flex items-center gap-3 rounded-2xl border border-line bg-white/70 p-4 text-sm text-ink lg:hidden"
      >
        <FlagIcon className="h-4 w-4 text-red-500" />
        <span className="flex-1">Hatalı Satıcı Bilgisini Bildir</span>
      </Link>
    </div>
  );
}
