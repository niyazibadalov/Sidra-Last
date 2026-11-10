// Yalnız lg+ ekranda kartların sağında göstərilən dekorativ vizual bloklar.

const fade = "[mask-image:linear-gradient(to_right,transparent,black_35%)]";

export function DocumentVisual() {
  return (
    <div className={`relative h-full w-full overflow-hidden ${fade}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100" />
      <div className="absolute right-10 top-10 h-32 w-40 rotate-6 rounded-md bg-amber-50 shadow-md ring-1 ring-black/5">
        <svg viewBox="0 0 160 128" className="h-full w-full text-amber-200" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M0 0l80 70L160 0M0 128l60-60M160 128L100 68" />
        </svg>
      </div>
      <div className="absolute bottom-8 right-6 h-40 w-44 -rotate-6 rounded-md bg-white shadow-lg ring-1 ring-black/5">
        <div className="space-y-2 p-4">
          <p className="text-center font-serif text-xs tracking-[0.3em] text-ink">SIDRA</p>
          {[100, 85, 92, 70, 88, 60].map((w, i) => (
            <div key={i} className="h-1 rounded-full bg-line" style={{ width: `${w}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function PhoneVisual() {
  return (
    <div className={`relative h-full w-full overflow-hidden ${fade}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100" />
      <div className="absolute -bottom-8 right-8 h-64 w-36 rotate-[8deg] rounded-[1.75rem] border-[5px] border-ink bg-white shadow-xl">
        <div className="space-y-2 p-3">
          <div className="mx-auto h-1 w-8 rounded-full bg-line" />
          <p className="font-serif text-[10px] text-ink">Sipariş Özeti</p>
          {[0, 1].map((i) => (
            <div key={i} className="flex gap-2 rounded-md border border-line p-1.5">
              <div className="h-8 w-8 shrink-0 rounded bg-amber-100" />
              <div className="flex-1 space-y-1">
                <div className="h-1.5 w-full rounded-full bg-line" />
                <div className="h-1.5 w-2/3 rounded-full bg-line" />
              </div>
            </div>
          ))}
          <div className="space-y-1 pt-1">
            <div className="h-1.5 w-full rounded-full bg-line" />
            <div className="h-1.5 w-4/5 rounded-full bg-line" />
          </div>
          <div className="mt-2 h-6 rounded-full bg-ink" />
        </div>
      </div>
    </div>
  );
}

export function LockVisual() {
  return (
    <div className={`relative h-full w-full overflow-hidden ${fade}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100" />
      <svg viewBox="0 0 160 200" className="absolute bottom-4 right-6 h-44 w-36" fill="none">
        <defs>
          <linearGradient id="goldLock" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#f3d391" />
            <stop offset="0.5" stopColor="#c9953c" />
            <stop offset="1" stopColor="#8f6425" />
          </linearGradient>
        </defs>
        <path d="M45 90V62a35 35 0 0 1 70 0v28" stroke="url(#goldLock)" strokeWidth="14" strokeLinecap="round" />
        <rect x="22" y="88" width="116" height="96" rx="14" fill="url(#goldLock)" />
        <circle cx="80" cy="128" r="9" fill="#6f4c1b" />
        <rect x="76" y="132" width="8" height="24" rx="3" fill="#6f4c1b" />
      </svg>
    </div>
  );
}

export function ScalesVisual() {
  return (
    <div className={`relative h-full w-full overflow-hidden ${fade}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100" />
      <svg viewBox="0 0 200 220" className="absolute bottom-3 right-4 h-52 w-44" fill="none" stroke="#b8862f" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="100" cy="16" r="7" fill="#d9a948" />
        <path d="M100 24v168M70 196h60M60 206h80" />
        <path d="M30 46h140" />
        <path d="M34 46L12 108M34 46l22 62M166 46l-22 62M166 46l22 62" strokeWidth="2.5" />
        <path d="M8 108h52a26 20 0 0 1-52 0zM140 108h52a26 20 0 0 1-52 0z" fill="#e5bd64" />
      </svg>
    </div>
  );
}
