import Image from "next/image";
import heroImage from "@/app/images/lifetimeHero.png";
import { Breadcrumb, type Crumb } from "./Breadcrumb";

type Props = {
  crumbs: Crumb[];
  title: string;
  subtitle: string;
  description: string;
};

export function PageHero({ crumbs, title, subtitle, description }: Props) {
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
      <div className="absolute inset-0 bg-gradient-to-r from-cream-100 via-cream-100/75 to-transparent sm:via-cream-100/50" />
      <div className="relative px-4 pb-8 pt-4 sm:px-8 lg:px-10 lg:pb-12">
        <Breadcrumb items={crumbs} />
        <h1 className="mt-8 font-serif text-3xl text-ink sm:text-4xl lg:mt-10 lg:text-5xl">{title}</h1>
        <p className="mt-2 max-w-[13rem] font-serif text-base text-ink sm:max-w-none lg:text-2xl">{subtitle}</p>
        <p className="mt-4 max-w-[14rem] font-sans text-xs leading-relaxed text-ink-soft sm:max-w-md sm:text-sm lg:max-w-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
