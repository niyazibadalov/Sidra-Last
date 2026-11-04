import type { SVGProps } from "react";

export type IconProps = SVGProps<SVGSVGElement>;

const base = (p: IconProps): IconProps => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  ...p,
});

export const ArrowRightIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);
export const ChevronRightIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M9 6l6 6-6 6" /></svg>
);
export const ChevronDownIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M6 9l6 6 6-6" /></svg>
);
export const CheckIcon = (p: IconProps) => (
  <svg {...base({ strokeWidth: 2, ...p })}><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
);
export const CheckCircleIcon = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M8 12.5l3 3 5-6" /></svg>
);
export const SearchIcon = (p: IconProps) => (
  <svg {...base(p)}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
);
export const BagIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M6 8h12l1 12H5L6 8z" /><path d="M9 8V7a3 3 0 0 1 6 0v1" /></svg>
);
export const TruckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 6h11v10H3zM14 10h4l3 3v3h-7" />
    <circle cx="7" cy="18" r="1.7" /><circle cx="17" cy="18" r="1.7" />
  </svg>
);
export const CardIcon = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18M7 15h3" /></svg>
);
export const DocumentIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M6 3h8l5 5v13H6z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg>
);
export const PencilIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M4 20l1-4L16 5l3 3L8 19l-4 1z" /><path d="M14 7l3 3" /></svg>
);
export const LockIcon = (p: IconProps) => (
  <svg {...base(p)}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
);
export const ScaleIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 4v16M7 20h10M5 7h14" />
    <path d="M5 7l-3 7a3 3 0 0 0 6 0L5 7zM19 7l-3 7a3 3 0 0 0 6 0l-3-7z" />
  </svg>
);
export const HeadsetIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="3" y="14" width="4" height="6" rx="1.5" />
    <rect x="17" y="14" width="4" height="6" rx="1.5" />
    <path d="M19 20c0 1.5-2 2-5 2h-2" />
  </svg>
);
export const ShieldIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" /></svg>
);
export const ShieldCheckIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
    <path d="M8.5 12l2.5 2.5 4.5-5" />
  </svg>
);
export const StarIcon = (p: IconProps) => (
  <svg {...base({ fill: "currentColor", strokeWidth: 1, ...p })}>
    <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z" />
  </svg>
);
export const MapPinIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);
export const CalendarIcon = (p: IconProps) => (
  <svg {...base(p)}><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M4 10h16M8 3v4M16 3v4" /></svg>
);
export const BoxIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M3 8l9-5 9 5v8l-9 5-9-5V8z" /><path d="M3 8l9 5 9-5M12 13v8" /></svg>
);
export const UsersIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0" />
    <path d="M16 5a3 3 0 0 1 0 6M17 14a6 6 0 0 1 4 6" />
  </svg>
);
export const DiamondIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M6 4h12l3 5-9 11L3 9l3-5z" /><path d="M3 9h18M9 4l3 5 3-5" /></svg>
);
export const MailIcon = (p: IconProps) => (
  <svg {...base(p)}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
);
export const PhoneIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </svg>
);
export const BankIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M3 10l9-6 9 6M5 10v8M9 10v8M15 10v8M19 10v8M3 20h18" /></svg>
);
export const BuildingIcon = (p: IconProps) => (
  <svg {...base(p)}><rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" /></svg>
);
export const TagIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M3 12V4h8l10 10-8 8L3 12z" /><circle cx="7.5" cy="8.5" r="1" /></svg>
);
export const ReturnIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M4 12a8 8 0 1 0 8-8M4 4v5h5M12 8v4l3 2" /></svg>
);
export const InfoIcon = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" /></svg>
);
export const AlertIcon = (p: IconProps) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><path d="M12 7v6M12 16.5h.01" /></svg>
);
export const PlayIcon = (p: IconProps) => (
  <svg {...base({ fill: "currentColor", ...p })}><path d="M8 5l11 7-11 7V5z" /></svg>
);
export const MegaphoneIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M3 11v3l12 5V6L3 11z" /><path d="M7 14l1 5h3M18 9a4 4 0 0 1 0 6" /></svg>
);
export const SettingsIcon = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3.5" />
    <path d="M12 3v2.5M12 18.5V21M3 12h2.5M18.5 12H21M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M5.6 18.4l1.8-1.8M16.6 7.4l1.8-1.8" />
  </svg>
);
export const ChatIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M4 5h16v11H9l-5 4V5z" /><path d="M9 10h6" /></svg>
);
export const FlagIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M5 21V4M5 4h12l-2 4 2 4H5" /></svg>
);
export const ExternalIcon = (p: IconProps) => (
  <svg {...base(p)}><path d="M7 17L17 7M9 7h8v8" /></svg>
);
