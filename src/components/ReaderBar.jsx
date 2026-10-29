import {
  ChevronLeft,
  ChevronRight,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "react-feather";
import { BOOK } from "../book/content";
import LanguageToggle from "./LanguageToggle";

function IconButton({ label, onClick, disabled, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      disabled={disabled}
      onClick={onClick}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-ember text-paper shadow-sm transition hover:bg-ink disabled:cursor-not-allowed disabled:opacity-35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ember"
    >
      {children}
    </button>
  );
}

export default function ReaderBar({
  language,
  onLanguageChange,
  storyNumber,
  pageCount,
  isCover,
  isLast,
  goPrev,
  goNext,
  goFirst,
  goLast,
  goTo,
  speaking,
  onToggleSpeech,
}) {
  if (isCover) return null;

  const copy =
    language === "es"
      ? {
          prev: "Página anterior",
          next: "Página siguiente",
          first: "Ir al principio",
          last: "Ir al final",
          page: `Página ${storyNumber} de ${pageCount}`,
          read: speaking ? "Detener lectura" : "Leer en voz alta",
          again: "Leer otra vez",
        }
      : {
          prev: "Previous page",
          next: "Next page",
          first: "Go to the beginning",
          last: "Go to the end",
          page: `Page ${storyNumber} of ${pageCount}`,
          read: speaking ? "Stop reading" : "Read aloud",
          again: "Read again",
        };

  return (
    <footer className="reader-bar z-30 border-t border-ink/10 bg-paper/95 px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] text-ink backdrop-blur-md md:px-5">
      <div className="mx-auto flex max-w-5xl flex-col gap-2">
        <nav className="flex items-center justify-between gap-2" aria-label={copy.page}>
          <div className="flex items-center gap-1.5">
            <IconButton label={copy.first} onClick={goFirst}>
              <SkipBack size={18} />
            </IconButton>
            <IconButton label={copy.prev} onClick={goPrev}>
              <ChevronLeft size={22} />
            </IconButton>
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-center px-2">
            <p className="text-xs font-bold uppercase tracking-wide text-ink/70">{copy.page}</p>
            <ol className="mt-1 hidden flex-wrap items-center justify-center gap-1 md:flex">
              {Array.from({ length: pageCount }, (_, i) => {
                const pageIndex = i + 1;
                const active = pageIndex === storyNumber;
                return (
                  <li key={pageIndex}>
                    <button
                      type="button"
                      aria-label={`${copy.page.split(" ")[0]} ${pageIndex}`}
                      aria-current={active ? "page" : undefined}
                      onClick={() => goTo(pageIndex)}
                      className={`block h-2.5 rounded-full transition ${
                        active ? "w-5 bg-ember" : "w-2.5 bg-ink/25 hover:bg-ember/70"
                      }`}
                    />
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="flex items-center gap-1.5">
            {isLast ? (
              <button
                type="button"
                onClick={goFirst}
                data-umami-event="cta"
                data-umami-event-label="read-again"
                className="rounded-full bg-ember px-4 py-2 text-sm font-bold text-paper transition hover:bg-ink"
              >
                {copy.again}
              </button>
            ) : (
              <IconButton label={copy.next} onClick={goNext}>
                <ChevronRight size={22} />
              </IconButton>
            )}
            <IconButton label={copy.last} onClick={goLast} disabled={isLast}>
              <SkipForward size={18} />
            </IconButton>
          </div>
        </nav>

        <div className="flex flex-wrap items-center justify-between gap-2 pb-1">
          <LanguageToggle
            language={language}
            onChange={onLanguageChange}
            compact
            tone="light"
          />
          <button
            type="button"
            onClick={onToggleSpeech}
            data-umami-event="cta"
            data-umami-event-label="read-aloud"
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold text-ink/80 transition hover:bg-black/5"
          >
            {speaking ? <VolumeX size={16} /> : <Volume2 size={16} />}
            {copy.read}
          </button>
          <a
            href={BOOK.portfolioUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden max-w-[14rem] text-right text-[11px] leading-snug text-ink/70 hover:text-ink sm:block md:max-w-none"
          >
            {BOOK.credit[language]}
          </a>
        </div>
      </div>
    </footer>
  );
}
