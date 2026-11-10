"use client";

import Link from "next/link";
import { useState, type ComponentType, type FormEvent } from "react";
import {
  AlertIcon,
  ArrowRightIcon,
  ChatIcon,
  CheckIcon,
  ExternalIcon,
  HeadsetIcon,
  LockIcon,
  MailIcon,
  MegaphoneIcon,
  PhoneIcon,
  SettingsIcon,
  ShieldIcon,
  type IconProps,
} from "../PageIcons";
import { Collapsible } from "../shared/Collapsible";
import { PageHero } from "../shared/PageHero";
import { btnOutline, btnPrimary } from "../shared/ui";

type ChannelKey = "email" | "sms" | "phone";

const channels: { key: ChannelKey; title: string; desc: string; Icon: ComponentType<IconProps> }[] = [
  { key: "email", title: "E-posta", desc: "Kampanyalar, yeni koleksiyon, özel teklifler", Icon: MailIcon },
  { key: "sms", title: "SMS", desc: "Özel indirimler ve önemli duyurular", Icon: ChatIcon },
  { key: "phone", title: "Telefon Araması", desc: "Özel teklif ve hizmet bilgilendirmeleri", Icon: PhoneIcon },
];

function Toggle({ checked, onChange, label }: { checked: boolean; onChange: (v: boolean) => void; label: string }) {
  return (
    <div className="flex shrink-0 items-center gap-2">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 ${
          checked ? "bg-ink" : "bg-line"
        }`}
      >
        <span
          className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? "translate-x-5" : ""
          }`}
        />
      </button>
      <span className="w-10 text-xs text-ink">{checked ? "Aktif" : "Kapalı"}</span>
    </div>
  );
}

export function CommunicationPreferences() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);
  const [prefs, setPrefs] = useState<Record<ChannelKey, boolean>>({ email: true, sms: false, phone: false });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setDone(false);
    if (!consent) {
      setError(true);
      return;
    }
    setError(false);
    // TODO: abunəlik API sorğusunu bura əlavə edin
    setDone(true);
  };

  return (
    <div className="space-y-4 font-sans text-ink">
      <PageHero
        crumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hesabım", href: "/hesabim" },
          { label: "İletişim Tercihleri" },
        ]}
        title="İletişim Tercihleri"
        subtitle="Ticari Elektronik İleti Tercihlerinizi Yönetin"
        description="SIDRA’dan kampanya, yeni koleksiyon, özel teklifler ve hizmet duyuruları hakkında bilgilendirme almak için iletişim tercihlerinizi belirleyin. Tercihlerinizi dilediğiniz zaman değiştirebilir veya iptal edebilirsiniz."
      />

      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-[1.45fr_1fr] lg:gap-4">
        {/* Bültene Abone Ol */}
        <section className="order-1 rounded-2xl border border-line bg-white/70 p-4 lg:p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-100 text-amber-700 lg:h-11 lg:w-11">
              <MailIcon className="h-5 w-5" />
            </span>
            <h2 className="font-serif text-base text-ink lg:text-xl">Bülten’e Abone Olun</h2>
          </div>
          <p className="mt-3 hidden text-sm text-ink-soft lg:block">
            Yeni koleksiyonlar, özel teklifler ve ilham verici içerikler için e-posta bültenimize abone olun.
          </p>

          <form onSubmit={onSubmit} noValidate className="mt-4 space-y-3">
            <div className="relative">
              <label htmlFor="newsletter-email" className="sr-only">
                E-posta adresiniz
              </label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-posta adresiniz"
                autoComplete="email"
                className="h-12 w-full rounded-lg border border-line bg-white px-4 pr-11 text-sm text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none"
              />
              <MailIcon className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
            </div>

            <label className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  if (e.target.checked) setError(false);
                }}
                className="peer sr-only"
              />
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border border-ink-soft bg-white text-white peer-checked:border-ink peer-checked:bg-ink peer-focus-visible:ring-2 peer-focus-visible:ring-ink/40">
                {consent && <CheckIcon className="h-3.5 w-3.5" />}
              </span>
              <span className="text-xs leading-relaxed text-ink lg:text-sm">
                Kampanya, özel teklif, yeni ürün ve benzeri tanıtım içeriklerinin e-posta yoluyla tarafıma iletilmesini
                kabul ediyorum.
                <span className="mt-1 block text-[11px] text-ink-soft lg:text-xs">
                  Bu onay, ticari elektronik ileti gönderimi için gereklidir.
                </span>
              </span>
            </label>

            <button type="submit" className={`${btnPrimary} w-full`}>
              Abone Ol <ArrowRightIcon className="h-4 w-4" />
            </button>

            {error && (
              <p role="alert" className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-3 py-2.5 text-xs text-red-700 lg:text-sm">
                <AlertIcon className="h-4 w-4 shrink-0" />
                Devam edebilmek için ticari elektronik ileti onayınızı vermelisiniz.
              </p>
            )}
            {done && (
              <p role="status" className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2.5 text-xs text-emerald-800 lg:text-sm">
                Bültene abone oldunuz. Teşekkür ederiz!
              </p>
            )}
          </form>
        </section>

        {/* Ticari Elektronik İleti Hakkında */}
        <div className="order-3 lg:order-0">
          <Collapsible
            title="Ticari Elektronik İleti Hakkında"
            icon={<MegaphoneIcon className="h-5 w-5" />}
            tone="amber"
            className="h-full"
          >
            <p className="text-xs leading-relaxed text-ink-soft lg:text-sm">
              Türkiye’deki yasal düzenlemeler gereği, tüketicilere kampanya, tanıtım ve benzeri ticari elektronik
              iletiler yalnızca önceden açık onay ile gönderilebilir.
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "Onayınız tamamen isteğe bağlıdır.",
                "Dilediğiniz zaman iptal edebilirsiniz.",
                "Tüm izinler İYS (İleti Yönetim Sistemi) üzerinden yönetilmektedir.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-xs text-ink lg:text-sm">
                  <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" />
                  {t}
                </li>
              ))}
            </ul>
            <Link href="/ticari-elektronik-ileti" className={`${btnOutline} mt-5 w-full sm:w-auto`}>
              Daha Fazla Bilgi <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Collapsible>
        </div>

        {/* İletişim Kanalları */}
        <section className="order-2 rounded-2xl border border-line bg-white/70 p-4 lg:order-0 lg:p-6">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-100 text-amber-700 lg:h-11 lg:w-11">
              <SettingsIcon className="h-5 w-5" />
            </span>
            <h2 className="font-serif text-base text-ink lg:text-xl">İletişim Kanalları</h2>
          </div>
          <p className="mt-3 text-xs text-ink-soft lg:text-sm">Hangi kanallardan bilgilendirilmek istediğinizi seçin.</p>

          <ul className="mt-3 space-y-2">
            {channels.map(({ key, title, desc, Icon }) => (
              <li key={key} className="flex items-center gap-3 rounded-xl border border-line bg-white p-3 lg:px-4">
                <Icon className="h-5 w-5 shrink-0 text-ink" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-ink">{title}</p>
                  <p className="text-xs text-ink-soft">{desc}</p>
                </div>
                <Toggle
                  label={`${title} bildirimleri`}
                  checked={prefs[key]}
                  onChange={(v) => setPrefs((p) => ({ ...p, [key]: v }))}
                />
              </li>
            ))}
          </ul>
        </section>

        {/* İYS + Verileriniz Güvende */}
        <div className="contents lg:flex lg:flex-col lg:gap-4">
          <div className="order-4 lg:order-0">
            <Collapsible
              title="İYS (İleti Yönetim Sistemi)"
              icon={<ShieldIcon className="h-5 w-5" />}
              iconClassName="bg-sky-100 text-sky-600"
              tone="blue"
            >
              <p className="text-xs leading-relaxed text-ink-soft lg:text-sm">
                Verdiğiniz ticari elektronik iletiler, Ticaret Bakanlığı’nın İYS sistemi üzerinden güvenli şekilde
                kayıt altına alınır. İYS üzerinden tüm izinlerinizi görüntüleyebilir, değiştirebilir veya iptal
                edebilirsiniz.
              </p>
              <a
                href="https://iys.org.tr"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-ink underline underline-offset-4 hover:text-ink-soft lg:text-sm"
              >
                İYS’yi Ziyaret Et <ExternalIcon className="h-3.5 w-3.5" />
              </a>
            </Collapsible>
          </div>

          <div className="order-5 lg:order-0">
            <Collapsible
              title="Verileriniz Güvende"
              icon={<LockIcon className="h-5 w-5" />}
              tone="amber"
            >
              <p className="text-xs leading-relaxed text-ink-soft lg:text-sm">
                Kişisel verileriniz, KVKK kapsamında korunur ve yalnızca verdiğiniz onay doğrultusunda kullanılır.
              </p>
              <Link
                href="/gizlilik-politikasi"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-ink underline underline-offset-4 hover:text-ink-soft lg:text-sm"
              >
                Gizlilik Politikası <ArrowRightIcon className="h-3.5 w-3.5" />
              </Link>
            </Collapsible>
          </div>
        </div>
      </div>

      {/* İptal banneri */}
      <section className="flex flex-col gap-4 rounded-2xl bg-amber-100/60 p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between lg:px-6 lg:py-5">
        <div className="flex items-start gap-3 lg:items-center">
          <HeadsetIcon className="h-9 w-9 shrink-0 text-amber-700 lg:h-12 lg:w-12" />
          <div>
            <h2 className="font-serif text-base text-ink lg:text-xl">Tercihlerinizi Dilediğiniz Zaman Değiştirebilirsiniz</h2>
            <p className="mt-1 text-xs text-ink-soft lg:text-sm">
              İletişim tercihlerinizi hesabınızdan yönetebilir veya tüm ticari elektronik ileti izinlerinizi tek
              seferde iptal edebilirsiniz.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setPrefs({ email: false, sms: false, phone: false })}
          className={`${btnOutline} w-full shrink-0 lg:w-auto lg:min-w-56`}
        >
          Tümünden Çık
        </button>
      </section>
    </div>
  );
}
