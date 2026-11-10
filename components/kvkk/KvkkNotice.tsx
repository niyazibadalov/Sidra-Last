import Link from "next/link";
import type { ComponentType, ReactNode } from "react";
import {
  ArrowRightIcon,
  BagIcon,
  BankIcon,
  BuildingIcon,
  CardIcon,
  CheckIcon,
  ChevronRightIcon,
  DocumentIcon,
  HeadsetIcon,
  InfoIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  ScaleIcon,
  SettingsIcon,
  ShareIcon,
  TruckIcon,
  UserIcon,
  WindowIcon,
  type IconProps,
} from "../PageIcons";
import { Collapsible } from "../shared/Collapsible";
import { PageHero } from "../shared/PageHero";
import { btnPrimary } from "../shared/ui";

const body = "text-xs leading-relaxed text-ink-soft lg:text-sm";

/** Başlığın mobil (qısa) və desktop (uzun) variantı */
function T({ m, l }: { m: string; l: string }) {
  return (
    <>
      <span className="md:hidden">{m}</span>
      <span className="hidden md:inline">{l}</span>
    </>
  );
}

/** Desktopda mətnin solunda görünən ikon qutusu */
function BodyIcon({ Icon }: { Icon: ComponentType<IconProps> }) {
  return (
    <span className="hidden h-14 w-14 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-700 lg:grid">
      <Icon className="h-6 w-6" />
    </span>
  );
}

function Note({ Icon, title, children }: { Icon: ComponentType<IconProps>; title?: string; children: ReactNode }) {
  return (
    <div className="mt-4 flex items-start gap-3 rounded-xl bg-amber-100/60 p-3 lg:p-4">
      <Icon className="mt-0.5 h-6 w-6 shrink-0 text-amber-700 lg:h-7 lg:w-7" />
      <div>
        {title && <p className="font-serif text-sm text-ink">{title}</p>}
        <p className={`${body} ${title ? "mt-1" : ""}`}>{children}</p>
      </div>
    </div>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-2 text-xs text-ink lg:text-[13px]">
          <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" />
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

const purposes = [
  "Üyelik ve hesap yönetimi işlemlerinin yürütülmesi",
  "Sipariş, ödeme, faturalama ve teslimat süreçlerinin gerçekleştirilmesi",
  "Müşteri destek hizmetlerinin sunulması",
  "Platform güvenliğinin sağlanması, dolandırıcılık ve kötüye kullanımın önlenmesi",
  "Yasal yükümlülüklerin yerine getirilmesi",
  "Ürün ve hizmetlerin geliştirilmesi, kullanıcı deneyiminin iyileştirilmesi (analitik ve istatistiksel çalışmalar)",
  "Sizinle iletişime geçilmesi (sipariş, destek, bilgilendirme vb.)",
];

const recipients: { Icon: ComponentType<IconProps>; title: string; desc: string }[] = [
  { Icon: BuildingIcon, title: "Platformdaki satıcılar", desc: "Siparişin teslimatı, müşteri ile iletişim, iade süreçleri" },
  { Icon: CardIcon, title: "Ödeme hizmeti sağlayıcıları", desc: "Ödeme işlemlerinin alınması, fraud kontrolü" },
  { Icon: TruckIcon, title: "Kargo ve lojistik firmaları", desc: "Ürünlerin teslim edilmesi ve teslimat takibi" },
  { Icon: SettingsIcon, title: "Teknoloji ve altyapı hizmet sağlayıcıları", desc: "Bulut, veri analitiği, müşteri destek, e-posta/SMS gönderimi" },
  { Icon: BankIcon, title: "Yetkili kamu kurum ve kuruluşları", desc: "Yasal yükümlülüklerin yerine getirilmesi, resmi talepler" },
];

const methods: { Icon: ComponentType<IconProps>; text: string }[] = [
  { Icon: WindowIcon, text: "Web sitemiz, mobil uygulamamız ve diğer dijital kanallar üzerinden (formlar, çerezler, benzeri teknolojiler)" },
  { Icon: BagIcon, text: "Sipariş, ödeme ve teslimat süreçlerinde" },
  { Icon: PhoneIcon, text: "Müşteri destek kanalları (e-posta, canlı destek, telefon)" },
  { Icon: ShareIcon, text: "Sosyal medya ve diğer entegre hizmetler üzerinden" },
  { Icon: MapPinIcon, text: "Fiziksel ortamda (varsa)" },
];

const rightsLeft = [
  "Kişisel verilerinizin işlenip işlenmediğini öğrenme",
  "İşlenmişse buna ilişkin bilgi talep etme",
  "İşleme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme",
  "Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme",
];
const rightsRight = [
  "Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme",
  "KVKK’da öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme",
  "Yapılan işlemlerin üçüncü kişilere bildirilmesini isteme",
  "İşlenen verilerin münhasıran otomatik sistemler aracılığıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme",
  "Kanuna aykırı işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme",
];

const relatedDocs = [
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
  { label: "İletişim Tercihleri", href: "/communication-preferences" },
];

export function KvkkNotice() {
  return (
    <div className="space-y-4 font-sans text-ink">
      <PageHero
        crumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hukuki Bilgiler", href: "/hukuki-bilgiler" },
          { label: "KVKK Aydınlatma Metni" },
        ]}
        eyebrow="Veri güvenliğimiz, güveniniz için"
        title="KVKK Aydınlatma Metni"
        subtitle="Kişisel verilerinizin işlenmesine ilişkin sizi bilgilendiriyoruz."
        subtitleSerif={false}
      >
        <div className="flex items-start gap-3 rounded-xl bg-sky-50/90 p-3 text-xs leading-relaxed text-ink-soft lg:text-sm">
          <InfoIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 lg:h-5 lg:w-5" />
          <p>
            Bu metin, 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) uyarınca bilgilendirme amacı taşır;{" "}
            <strong className="font-semibold text-ink">açık rıza talebi değildir</strong>. Kişisel verilerinizi,
            yalnızca bu metinde belirtilen amaçlar ve hukuki sebeplerle işlenir.
          </p>
        </div>
      </PageHero>

      <div className="grid gap-3 lg:grid-cols-2 lg:gap-4">
        {/* 1 */}
        <Collapsible
          number={1}
          icon={<UserIcon className="h-5 w-5" />}
          iconMobileOnly
          badge="KVKK m. 10"
          titleClassName="lg:text-lg"
          title="Veri Sorumlusunun Kimliği"
          summary="İşletici tüzel kişi bilgileri lansman öncesi kesinleştirilecektir."
        >
          <div className="flex gap-4">
            <BodyIcon Icon={UserIcon} />
            <p className={body}>
              Kişisel verileriniz, SIDRA isimli online mücevher alım-satım platformunun işleticisi tüzel kişi
              tarafından işlenmektedir. İşletici tüzel kişiye ilişkin unvan, adres, MERSİS numarası ve diğer iletişim
              bilgileri lansman öncesi kesinleştirilecek olup, bu metin güncellenecektir.
            </p>
          </div>
          <div className="mt-4 flex items-center gap-4 rounded-xl bg-amber-100/60 p-3 lg:p-4">
            <BankIcon className="h-8 w-8 shrink-0 text-amber-700 lg:h-10 lg:w-10" />
            <p className={body}>
              Tüzel kişi bilgileri (unvan, adres, MERSİS no, vergi no vb.) lansman öncesi kesinleştirilecektir.
            </p>
          </div>
        </Collapsible>

        {/* 2 */}
        <Collapsible
          number={2}
          icon={<SettingsIcon className="h-5 w-5" />}
          iconMobileOnly
          badge="KVKK m. 5-6"
          titleClassName="lg:text-lg"
          title={<T m="İşlenme Amaçları" l="Kişisel Verilerin İşlenme Amaçları" />}
          summary="Üyelik, sipariş, ödeme, güvenlik ve yasal yükümlülükler."
        >
          <div className="flex gap-4">
            <BodyIcon Icon={SettingsIcon} />
            <div>
              <p className={body}>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
              <div className="mt-2">
                <CheckList items={purposes} />
              </div>
            </div>
          </div>
        </Collapsible>

        {/* 3 */}
        <Collapsible
          number={3}
          icon={<ShareIcon className="h-5 w-5" />}
          iconMobileOnly
          badge="KVKK m. 8-9"
          titleClassName="lg:text-lg"
          title={<T m="Kimlere Aktarılabilir" l="Kişisel Verilerin Kimlere ve Hangi Amaçlarla Aktarılabileceği" />}
          summary="Satıcılar, ödeme sağlayıcıları, kargo firmaları, teknoloji sağlayıcıları ve yetkili kurumlar."
        >
          <p className={body}>
            Kişisel verileriniz, hizmetin gerektirdiği ölçüde ve KVKK’ya uygun olarak aşağıdaki alıcı gruplarına
            aktarılabilmektedir:
          </p>
          <ul className="mt-3 divide-y divide-line rounded-xl border border-line bg-white/80">
            {recipients.map(({ Icon, title, desc }) => (
              <li key={title} className="flex items-center gap-3 px-3 py-2.5 lg:px-4">
                <Icon className="h-5 w-5 shrink-0 text-amber-700" />
                <div>
                  <p className="text-xs font-medium text-ink lg:text-sm">{title}</p>
                  <p className="text-[11px] text-ink-soft lg:text-xs">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <Note Icon={HeadsetIcon}>
            Kişisel verileriniz, KVKK’ya uygun güvenlik önlemleri alınarak ve yalnızca gerekli olan bilgilerle,
            yukarıda belirtilen taraflarla paylaşılmaktadır.
          </Note>
        </Collapsible>

        {/* 4 */}
        <Collapsible
          number={4}
          icon={<DocumentIcon className="h-5 w-5" />}
          iconMobileOnly
          badge="KVKK m. 5-6"
          titleClassName="lg:text-lg"
          title={<T m="Toplama Yöntemi ve Hukuki Sebep" l="Toplama Yöntemi ve Hukuki Sebep" />}
          summary="Dijital kanallar, sipariş, destek, çerezler vb. / KVKK m. 5-6"
        >
          <div className="flex gap-4">
            <BodyIcon Icon={DocumentIcon} />
            <p className={body}>
              Kişisel verileriniz, aşağıdaki yöntemlerle toplanmakta ve KVKK’da belirtilen hukuki sebeplere
              dayanarak işlenmektedir:
            </p>
          </div>
          <p className="mt-3 font-serif text-sm text-ink">Toplama Yöntemleri</p>
          <ul className="mt-2 space-y-2">
            {methods.map(({ Icon, text }) => (
              <li key={text} className="flex items-start gap-2.5 text-xs text-ink lg:text-[13px]">
                <Icon className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <Note Icon={ScaleIcon} title="Hukuki Sebepler (KVKK m. 5/2 ve 6/3)">
            Kişisel verileriniz; sözleşmenin kurulması ve ifası, yasal yükümlülüklerin yerine getirilmesi, meşru
            menfaatlerimiz, bir hakkın tesisi, kullanılması veya korunması gibi KVKK’da belirtilen işleme şartlarına
            dayanılarak işlenmektedir.
          </Note>
        </Collapsible>

        <div className="grid gap-3 lg:col-span-2 lg:grid-cols-[1.55fr_1fr] lg:gap-4">
          {/* 5 */}
          <Collapsible
            number={5}
            icon={<UserIcon className="h-5 w-5" />}
            iconMobileOnly
            badge="KVKK m. 11"
            titleClassName="lg:text-lg"
            title={<T m="Haklarınız" l="KVKK Kapsamındaki Haklarınız" />}
            summary="KVKK m. 11 kapsamındaki haklarınız."
          >
            <p className={body}>
              KVKK’nın 11. maddesi kapsamında, veri sorumlusu olarak tarafımıza başvurarak aşağıdaki haklarınızı
              kullanabilirsiniz:
            </p>
            <div className="mt-3 grid gap-2 lg:grid-cols-2 lg:gap-x-6">
              <CheckList items={rightsLeft} />
              <CheckList items={rightsRight} />
            </div>
          </Collapsible>

          {/* 6 */}
          <Collapsible
            number={6}
            icon={<MailIcon className="h-5 w-5" />}
            iconMobileOnly
            badge="KVKK m. 11"
            titleClassName="lg:text-lg"
            title="Başvuru ve İletişim"
            summary="KVKK Başvuru Formu ve iletişim kanalları."
          >
            <p className="text-[11px] leading-relaxed text-ink-soft lg:text-xs">
              KVKK kapsamındaki haklarınıza ilişkin başvurularınızı, aşağıdaki kanallar üzerinden tarafımıza
              iletebilirsiniz. Başvurularınız, KVKK’da belirtilen süreler içerisinde sonuçlandırılacaktır.
            </p>
            <Link href="/kvkk-basvuru" className={`${btnPrimary} mt-4 w-full`}>
              <DocumentIcon className="h-4 w-4" />
              KVKK Başvuru Formu
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <ul className="mt-4 space-y-3 text-xs">
              <li className="flex items-start gap-3">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft" />
                <div>
                  <p className="font-medium text-ink">E-posta</p>
                  <p className="text-ink-soft">
                    <a href="mailto:kvkk@sidra.to" className="text-ink underline underline-offset-2">
                      kvkk@sidra.to
                    </a>{" "}
                    (lansman öncesi kesinleştirilecektir)
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-ink-soft" />
                <div>
                  <p className="font-medium text-ink">Adres</p>
                  <p className="text-ink-soft">Tüzel kişi adresi lansman öncesi kesinleştirilecektir.</p>
                </div>
              </li>
            </ul>
          </Collapsible>
        </div>
      </div>

      {/* İlgili Belgeler */}
      <section className="rounded-2xl border border-line bg-white/70 p-4 lg:flex lg:items-center lg:justify-between lg:gap-6 lg:px-6 lg:py-5">
        <div className="flex items-center gap-3">
          <DocumentIcon className="h-6 w-6 shrink-0 text-amber-700 lg:h-9 lg:w-9" />
          <div>
            <h2 className="font-serif text-base text-ink lg:text-lg">İlgili Belgeler</h2>
            <p className="hidden text-sm text-ink-soft lg:block">
              Kişisel verilerinizin korunmasına ilişkin diğer politikalarımızı da inceleyebilirsiniz.
            </p>
          </div>
        </div>
        <ul className="mt-2 divide-y divide-line lg:mt-0 lg:flex lg:gap-2 lg:divide-y-0">
          {relatedDocs.map((d) => (
            <li key={d.label}>
              <Link
                href={d.href}
                className="flex items-center gap-3 py-3 text-sm text-ink hover:text-ink-soft lg:rounded-full lg:border lg:border-line lg:bg-white lg:px-4 lg:py-2 lg:text-xs"
              >
                <DocumentIcon className="h-4 w-4 shrink-0 text-amber-700 lg:hidden" />
                <span className="flex-1">{d.label}</span>
                <ChevronRightIcon className="h-4 w-4 text-ink-soft lg:hidden" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
