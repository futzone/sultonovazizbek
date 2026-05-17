"use client";

import { useLanguage } from "./LanguageProvider";
import { locales, type Locale } from "../_lib/translations";

const labels: Record<Locale, string> = {
  uz: "UZ",
  en: "EN",
};

export default function LanguageSwitcher({
  className = "",
}: {
  className?: string;
}) {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.language.label}
      className={`inline-flex items-center rounded-full border border-white/15 bg-white/5 p-0.5 font-hud text-[11px] tracking-widest ${className}`}
    >
      {locales.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            aria-label={l === "uz" ? t.language.uz : t.language.en}
            className={
              "px-3 py-1 rounded-full transition-colors duration-200 " +
              (active
                ? "bg-primary text-black shadow-[0_0_10px_rgba(0,255,255,0.4)]"
                : "text-gray-400 hover:text-white")
            }
          >
            {labels[l]}
          </button>
        );
      })}
    </div>
  );
}
