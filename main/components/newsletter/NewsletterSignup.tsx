"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import {
  AlertIcon,
  ArrowRightIcon,
  CheckIcon,
  InfoIcon,
  MailIcon,
  SettingsIcon,
  ShieldCheckIcon,
  ShieldIcon,
} from "../PageIcons";
import { Collapsible } from "../shared/Collapsible";
import { PageHero } from "../shared/PageHero";
import { btnOutline } from "../shared/ui";

export type NewsletterStatus = "idle" | "error" | "success" | "unsubscribed";

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const cardTone: Record<NewsletterStatus, string> = {
  idle: "border-line bg-white/85",
  error: "border-red-200 bg-red-50/70",
  success: "border-emerald-200 bg-emerald-50/60",
  unsubscribed: "border-line bg-white/85",
};

const linkCls = "text-ink underline underline-offset-2 hover:text-ink-soft";

export function NewsletterSignup({ initialStatus = "idle" }: { initialStatus?: NewsletterStatus }) {
  const [status, setStatus] = useState<NewsletterStatus>(initialStatus);
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [errorText, setErrorText] = useState("");

  const ready = consent && emailRe.test(email);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!emailRe.test(email)) {
      setErrorText("Lütfen geçerli bir e-posta adresi girin.");
      setStatus("error");
      return;
    }
    if (!consent) {
      setErrorText("Devam edebilmek için ticari elektronik ileti onayınızı vermelisiniz.");
      setStatus("error");
      return;
    }
    // TODO: abunəlik API sorğusunu bura əlavə edin (İYS qeydi daxil)
    setStatus("success");
  };

  const unsubscribed = status === "unsubscribed";
  const success = status === "success";
  const error = status === "error";

  return (
    <div className="font-sans text-ink">
      <PageHero
        eyebrow="Özel koleksiyonlar, yenilikler ve daha fazlası"
        title="Bültene Abone Ol"
        subtitle="Yeni koleksiyonlar, özel teklifler ve ilham verici içerikler için e-posta bültenimize abone olun."
        subtitleSerif={false}
      />

      {/* Form kartı */}
      <section
        aria-label="Bülten aboneliği"
        className={`relative z-10 mt-4 rounded-2xl border p-4 shadow-sm sm:p-5 lg:-mt-6 lg:mx-0 lg:p-6 ${cardTone[status]}`}
      >
        <form onSubmit={onSubmit} noValidate>
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:gap-6">
            <div className="min-w-0 flex-1 space-y-3">
              <div className="relative">
                <label htmlFor="nl-email" className="sr-only">
                  E-posta adresiniz
                </label>
                <MailIcon className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
                <input
                  id="nl-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setStatus("idle");
                  }}
                  placeholder="E-posta adresiniz"
                  autoComplete="email"
                  aria-invalid={error}
                  className="h-12 w-full rounded-lg border border-line bg-white pl-10 pr-4 text-sm text-ink placeholder:text-ink-soft focus:border-ink focus:outline-none"
                />
              </div>

              {!unsubscribed && (
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => {
                      setConsent(e.target.checked);
                      if (error) setStatus("idle");
                    }}
                    className="peer sr-only"
                  />
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded border border-ink-soft bg-white text-white peer-checked:border-ink peer-checked:bg-ink peer-focus-visible:ring-2 peer-focus-visible:ring-ink/40">
                    {consent && <CheckIcon className="h-3.5 w-3.5" />}
                  </span>
                  <span className="text-xs leading-relaxed text-ink lg:text-sm">
                    Kampanya, özel teklif, yeni ürün ve benzeri tanıtım içeriklerinin e-posta yoluyla tarafıma
                    iletilmesini kabul ediyorum.
                  </span>
                </label>
              )}

              {(status === "idle" || status === "unsubscribed") && !unsubscribed && (
                <p className="text-xs text-ink-soft lg:text-sm">
                  Ayrıntılı bilgi için{" "}
                  <Link href="/kvkk" className={linkCls}>KVKK Aydınlatma Metni</Link>,{" "}
                  <Link href="/gizlilik-politikasi" className={linkCls}>Gizlilik Politikası</Link> ve{" "}
                  <Link href="/communication-preferences" className={linkCls}>İletişim Tercihleri</Link>{" "}
                  sayfalarını inceleyebilirsiniz.
                </p>
              )}
            </div>

            {/* Abone Ol düğməsi */}
            {!success && !unsubscribed && (
              <button
                type="submit"
                aria-disabled={!ready}
                className="inline-flex h-16 w-full items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-white transition-colors hover:bg-ink-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2 aria-disabled:bg-stone-400 aria-disabled:hover:bg-stone-400 sm:h-18 lg:h-12 lg:w-72 lg:shrink-0"
              >
                Abone Ol <ArrowRightIcon className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Xəta */}
          {error && (
            <p
              role="alert"
              className="mt-3 inline-flex w-full items-center gap-2 rounded-md border border-red-300 bg-red-50 px-3 py-2.5 text-xs font-medium text-red-600 lg:w-auto lg:text-sm"
            >
              <AlertIcon className="h-4 w-4 shrink-0" />
              {errorText}
            </p>
          )}

          {/* Uğur */}
          {success && (
            <div
              role="status"
              className="mt-3 flex flex-col gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3 sm:flex-row sm:items-center sm:justify-between lg:p-4"
            >
              <div className="flex items-start gap-3">
                <ShieldCheckIcon className="mt-0.5 h-6 w-6 shrink-0 text-emerald-600 lg:h-7 lg:w-7" />
                <div>
                  <p className="text-sm font-semibold text-emerald-800">Aboneliğiniz oluşturuldu.</p>
                  <p className="text-xs text-ink-soft lg:text-sm">
                    Artık yeni koleksiyonlar, özel teklifler ve ilham verici içerikler hakkında sizi
                    bilgilendireceğiz.
                  </p>
                </div>
              </div>
              <Link href="/communication-preferences" className={`${btnOutline} shrink-0`}>
                Tercihleri Yönet
              </Link>
            </div>
          )}

          {/* Abunəlikdən çıxıldı */}
          {unsubscribed && (
            <div className="mt-3 flex flex-col gap-3 rounded-xl border border-line bg-white p-3 sm:flex-row sm:items-center sm:justify-between lg:p-4">
              <div className="flex items-start gap-3">
                <InfoIcon className="mt-0.5 h-5 w-5 shrink-0 text-sky-600" />
                <div>
                  <p className="text-sm font-semibold text-ink">Ticari ileti izniniz kaldırıldı.</p>
                  <p className="text-xs leading-relaxed text-ink-soft lg:text-sm">
                    Artık kampanya, yeni ürün ve özel tekliflerle ilgili ticari ileti içerikli e-postalar
                    göndermeyeceğiz. Hizmet ve işlem bilgilendirmeleri, ilgili mevzuat kapsamında gönderilmeye devam
                    edebilir.
                  </p>
                </div>
              </div>
              <button type="button" onClick={() => setStatus("idle")} className={`${btnOutline} shrink-0`}>
                Tekrar Abone Ol
              </button>
            </div>
          )}
        </form>
      </section>

      {/* Bilgi kartları */}
      <div className="mt-4 grid gap-3 lg:grid-cols-3 lg:gap-4">
        <Collapsible
          icon={<MailIcon className="h-5 w-5" />}
          titleClassName="lg:text-lg"
          title="Ticari elektronik ileti için önceden onay gereklidir"
          summary="Kampanya, özel teklif ve benzeri ticari elektronik iletiler, ilgili mevzuat gereği yalnızca önceden alınmış açık onay ile gönderilebilir."
        >
          <p className="text-xs leading-relaxed text-ink-soft lg:text-sm">
            Kampanya, özel teklif ve benzeri ticari elektronik iletiler, ilgili mevzuat gereği yalnızca önceden
            alınmış açık onay ile gönderilebilir.
          </p>
        </Collapsible>

        <Collapsible
          icon={<ShieldIcon className="h-5 w-5" />}
          titleClassName="lg:text-lg"
          title="Hizmet bilgilendirmeleri ayrı değerlendirilir"
          summary="Sipariş, teslimat, ödeme, hesap güvenliği gibi hizmet ve işlemlere ilişkin bilgilendirmeler ticari ileti olarak değerlendirilmez."
        >
          <p className="text-xs leading-relaxed text-ink-soft lg:text-sm">
            Sipariş, teslimat, ödeme, hesap güvenliği gibi hizmet ve işlemlere ilişkin bilgilendirmeler ticari ileti
            olarak değerlendirilmez ve ilgili mevzuat kapsamında gerektiği süre gönderilmeye devam eder.
          </p>
        </Collapsible>

        <Collapsible
          icon={<SettingsIcon className="h-5 w-5" />}
          titleClassName="lg:text-lg"
          title="İzninizi her zaman yönetebilirsiniz"
          summary="Verdiğiniz izni dilediğiniz zaman hesabınızdan, e-posta içeriğindeki “Abonelikten çık” bağlantısından veya İYS üzerinden kolayca iptal edebilirsiniz."
        >
          <p className="text-xs leading-relaxed text-ink-soft lg:text-sm">
            Verdiğiniz izni dilediğiniz zaman hesabınızdan, e-posta içeriğindeki “Abonelikten çık” bağlantısından
            veya İYS (İleti Yönetim Sistemi) üzerinden kolayca iptal edebilirsiniz.
          </p>
          <a
            href="https://iys.org.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-ink underline underline-offset-4 hover:text-ink-soft lg:text-sm"
          >
            İYS hakkında daha fazla bilgi <ArrowRightIcon className="h-3.5 w-3.5" />
          </a>
        </Collapsible>
      </div>
    </div>
  );
}
