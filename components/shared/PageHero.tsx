import Image from "next/image";
import type { ReactNode } from "react";
import heroImage from "@/app/images/lifetimeHero.png";
import { Breadcrumb, type Crumb } from "./Breadcrumb";

type Props = {
  crumbs?: Crumb[];
  /** Başlığın üstündəki kiçik böyük hərfli yazı */
  eyebrow?: string;
  title: string;
  subtitle: string;
  description?: string;
  /** true: alt başlıq font-serif, false: font-sans */
  subtitleSerif?: boolean;
  /** Hero-nun altına əlavə blok (məs: məlumat qutusu) */
  children?: ReactNode;
};

export function PageHero({
  crumbs,
  eyebrow,
  title,
  subtitle,
  description,
  subtitleSerif = true,
  children,
}: Props) {
  return (
    <section className="relative overflow-hidden rounded-2xl">
      <Image
        src={heroImage}
        alt=""
        fill
        priority
        sizes="(min-width: 1440px) 1440px, 100vw"
        className="object-cover object-[80%_center]"
      />
      <div className="absolute inset-0 bg-linear-to-r from-cream-100 via-cream-100/75 to-transparent sm:via-cream-100/50" />
      <div className="relative px-4 pb-8 pt-4 sm:px-8 lg:px-10 lg:pb-12">
        {crumbs && <Breadcrumb items={crumbs} />}
        {eyebrow && (
          <p className={`${crumbs ? "mt-6" : "mt-4"} font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-amber-700 sm:text-xs`}>
            {eyebrow}
          </p>
        )}
        <h1
          className={`${eyebrow ? "mt-3" : "mt-8 lg:mt-10"} font-serif text-3xl text-ink sm:text-4xl lg:text-5xl`}
        >
          {title}
        </h1>
        <p
          className={`mt-2 max-w-60 text-base text-ink sm:max-w-md lg:max-w-xl lg:text-xl ${
            subtitleSerif ? "font-serif lg:text-2xl" : "font-sans"
          }`}
        >
          {subtitle}
        </p>
        {description && (
          <p className="mt-4 max-w-56 font-sans text-xs leading-relaxed text-ink-soft sm:max-w-md sm:text-sm lg:max-w-lg">
            {description}
          </p>
        )}
        {children && <div className="mt-5 max-w-2xl">{children}</div>}
      </div>
    </section>
  );
}
