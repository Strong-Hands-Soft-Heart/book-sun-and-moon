import { BOOK } from "../book/content";
import { useLanguage } from "./LanguageContext";

const TITLE_REST = {
  en: "The Sun, and the Moon",
  es: "El Sol y la Luna",
};

export default function Header({ onHome, isCover }) {
  const { language } = useLanguage();

  if (isCover) return null;

  const coverLabel = language === "es" ? "Ir a la portada" : "Go to the cover";
  const coverShort = language === "es" ? "Portada" : "Cover";

  return (
    <header className="shrink-0 px-5 pt-3 md:px-7 md:pt-7">
      {/* Mobile: quiet home control — big “Mia” reads like story text in a short panel */}
      <button
        type="button"
        onClick={onHome}
        data-umami-event="cta"
        data-umami-event-label="home"
        className="group flex items-center gap-2 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember lg:hidden"
        aria-label={coverLabel}
      >
        <span className="font-story text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/40 transition group-hover:text-ember">
          {coverShort}
        </span>
        <span className="h-px w-6 bg-ember/70" aria-hidden="true" />
      </button>

      {/* Desktop side panel: full brand mark */}
      <button
        type="button"
        onClick={onHome}
        data-umami-event="cta"
        data-umami-event-label="home"
        className="group hidden w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ember lg:block"
        aria-label={coverLabel}
      >
        <span className="block font-display text-4xl italic leading-none text-ink transition group-hover:text-ember">
          Mia
        </span>
        <span className="mt-1.5 block font-story text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/45">
          {TITLE_REST[language]}
        </span>
      </button>
      <div className="mt-4 hidden h-px w-10 bg-ember/80 lg:block" aria-hidden="true" />
      <span className="sr-only">{BOOK.shortTitle[language]}</span>
    </header>
  );
}
