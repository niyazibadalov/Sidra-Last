// Ortaq düymə stilləri (hündürlük: h-16 sm:h-18 lg:h-12)
const btnBase =
  "inline-flex h-16 sm:h-18 lg:h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2";

export const btnPrimary = `${btnBase} bg-ink text-white hover:bg-ink-soft`;
export const btnOutline = `${btnBase} border border-ink bg-white/60 text-ink hover:bg-white`;
