"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronRightIcon } from "../PageIcons";

const tones = {
  white: "bg-white/70",
  amber: "bg-amber-50/80",
  blue: "bg-sky-50/80",
} as const;

type Props = {
  title: ReactNode;
  icon?: ReactNode;
  iconClassName?: string;
  /** Planşetdə (bağlı olduqda) başlığın altında görünən qısa mətn */
  summary?: string;
  defaultOpen?: boolean;
  tone?: keyof typeof tones;
  /** Yalnız lg+ ekranda sağda görünən vizual blok */
  aside?: ReactNode;
  /** aside olduqda başlıq və məzmuna əlavə sağ boşluq (məs: lg:pr-[40%]) */
  inset?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Mobil/planşet: açılıb-bağlanan accordion.
 * lg+ : həmişə açıq, adi kart.
 */
export function Collapsible({
  title,
  icon,
  iconClassName,
  summary,
  defaultOpen = false,
  tone = "white",
  aside,
  inset = "",
  className = "",
  children,
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = useId();

  return (
    <section className={`relative overflow-hidden rounded-2xl border border-line ${tones[tone]} ${className}`}>
      {aside && (
        <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] lg:block">
          {aside}
        </div>
      )}
      <h2 className="relative">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className={`flex w-full items-center gap-3 p-4 text-left lg:pointer-events-none lg:cursor-default lg:px-6 lg:pb-3 lg:pt-6 ${inset}`}
        >
          {icon && (
            <span
              className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg lg:h-11 lg:w-11 ${
                iconClassName ?? "bg-amber-100 text-amber-700"
              }`}
            >
              {icon}
            </span>
          )}
          <span className="min-w-0 flex-1">
            <span className="block font-serif text-base leading-snug text-ink lg:text-xl">{title}</span>
            {summary && !open && (
              <span className="mt-1 hidden font-sans text-xs font-normal leading-relaxed text-ink-soft md:line-clamp-2 md:block lg:hidden">
                {summary}
              </span>
            )}
          </span>
          <ChevronRightIcon
            className={`h-4 w-4 shrink-0 text-ink transition-transform lg:hidden ${open ? "rotate-90" : ""}`}
          />
        </button>
      </h2>
      <div
        id={panelId}
        className={`relative px-4 pb-4 font-sans lg:block lg:px-6 lg:pb-6 ${inset} ${open ? "block" : "hidden"}`}
      >
        {children}
      </div>
    </section>
  );
}
