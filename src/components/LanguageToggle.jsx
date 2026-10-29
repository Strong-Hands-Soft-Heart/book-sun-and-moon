export default function LanguageToggle({
  language,
  onChange,
  compact = false,
  tone = "dark",
}) {
  const options = [
    { id: "en", label: compact ? "EN" : "English" },
    { id: "es", label: compact ? "ES" : "Español" },
  ];

  return (
    <div
      className="inline-flex rounded-full bg-black/10 p-1 backdrop-blur-sm"
      role="group"
      aria-label={language === "es" ? "Idioma" : "Language"}
    >
      {options.map((option) => {
        const active = language === option.id;
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.id)}
            data-umami-event="cta"
            data-umami-event-label={`language-${option.id}`}
            className={`rounded-full px-3 py-1 text-xs font-bold tracking-wide transition ${
              active
                ? tone === "dark"
                  ? "bg-paper text-ink shadow-sm"
                  : "bg-ink text-paper shadow-sm"
                : "text-current opacity-80 hover:opacity-100"
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
