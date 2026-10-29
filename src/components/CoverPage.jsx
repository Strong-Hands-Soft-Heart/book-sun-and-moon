import { BOOK } from "../book/content";
import LanguageToggle from "./LanguageToggle";

const COVER_REST = {
  en: "the Sun, and the Moon",
  es: "el Sol y la Luna",
};

function CoverActions({
  language,
  onStart,
  onContinue,
  showContinue,
  onLanguageChange,
}) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
        <button
          type="button"
          onClick={onStart}
          data-umami-event="cta"
          data-umami-event-label="open-book"
          className="rounded-full bg-ember px-8 py-3 font-story text-sm font-semibold tracking-wide text-paper shadow-page transition hover:bg-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
        >
          {language === "es" ? "Abrir el cuento" : "Open the book"}
        </button>
        {showContinue && (
          <button
            type="button"
            onClick={onContinue}
            data-umami-event="cta"
            data-umami-event-label="continue-reading"
            className="rounded-full border border-ink/15 bg-paper/80 px-6 py-3 font-story text-sm font-semibold tracking-wide text-ink backdrop-blur-sm transition hover:bg-paper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
          >
            {language === "es" ? "Seguir leyendo" : "Continue reading"}
          </button>
        )}
      </div>

      <div className="mt-4 flex justify-center lg:mt-5 lg:justify-start">
        <LanguageToggle language={language} onChange={onLanguageChange} />
      </div>
    </>
  );
}

export default function CoverPage({
  page,
  language,
  onStart,
  onContinue,
  showContinue,
  onLanguageChange,
  children,
}) {
  return (
    <div className="relative flex h-full min-h-0 flex-col">
      <div className="relative z-10 order-1 shrink-0 px-6 pt-[max(1.25rem,env(safe-area-inset-top))] text-center animate-rise lg:order-none lg:max-w-xl lg:px-12 lg:pt-12 lg:text-left">
        <p className="font-story text-[11px] font-semibold uppercase tracking-[0.28em] text-ember">
          {language === "es" ? "Un cuentito" : "A short children's book"}
        </p>

        <h1 className="mt-3 text-ink" aria-label={BOOK.title[language]}>
          <span className="block font-display text-5xl italic leading-[0.9] sm:text-6xl lg:text-8xl">
            Mia
          </span>
          <span className="mt-2 block font-display text-xl font-medium leading-tight tracking-wide sm:text-2xl lg:mt-3 lg:text-4xl">
            {COVER_REST[language]}
          </span>
        </h1>

        <div
          className="mx-auto mt-4 h-px w-16 bg-ember lg:mx-0 lg:mt-5"
          aria-hidden="true"
        />

        <p className="mt-4 font-story text-sm text-ink/75 lg:mt-5 lg:text-base">
          {language === "es" ? "por" : "by"} {BOOK.author[language]}
        </p>
        <p className="mx-auto mt-2 max-w-sm font-story text-sm italic text-ink/60 lg:mx-0 lg:text-base">
          {BOOK.dedication[language]}
        </p>
      </div>

      <div className="relative order-2 min-h-0 flex-1 overflow-hidden lg:absolute lg:inset-0 lg:order-none">
        {children}
      </div>

      <div className="relative z-10 order-3 shrink-0 px-6 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4 lg:order-none lg:max-w-xl lg:px-12 lg:pb-0 lg:pt-0">
        <div className="lg:mt-8">
          <CoverActions
            language={language}
            onStart={onStart}
            onContinue={onContinue}
            showContinue={showContinue}
            onLanguageChange={onLanguageChange}
          />
        </div>
      </div>

      <span className="sr-only">{page.alt[language]}</span>
    </div>
  );
}
