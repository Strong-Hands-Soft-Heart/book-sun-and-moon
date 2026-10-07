import {
  BOOK,
  PAGES,
  SEO,
  SITE_CANONICAL,
  SITE_COVER,
  SITE_IMAGE,
  SITE_URL,
} from "./content";

const STORY_PAGE_COUNT = PAGES.filter((page) => page.type !== "cover").length;

function setMetaBySelector(selector, attribute, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute(attribute, value);
  }
}

function setLinkHref(rel, href, { hreflang } = {}) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;
  const element = document.querySelector(selector);
  if (element) {
    element.setAttribute("href", href);
  }
}

export function buildJsonLd(language) {
  const title = SEO.title[language] || SEO.defaultTitle;
  const description = SEO.description[language];
  const authorName = BOOK.author[language];
  // Antonio's one ID across his sites; antoniwan.online holds the full Person.
  const personId = "https://antoniwan.online/#person";
  // The company publishes the book.
  const publisherId = "https://www.stronghandssoftheart.com/#organization";
  const websiteId = `${SITE_URL}/#website`;
  const bookId = `${SITE_URL}/#book`;
  const webpageId = `${SITE_URL}/#webpage`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: authorName,
        alternateName: BOOK.author.en === authorName ? BOOK.author.es : BOOK.author.en,
        url: BOOK.portfolioUrl,
      },
      {
        "@type": "Organization",
        "@id": publisherId,
        name: BOOK.publisher.name,
        url: BOOK.publisher.url,
      },
      {
        "@type": "WebSite",
        "@id": websiteId,
        url: SITE_CANONICAL,
        name: title,
        alternateName: SEO.title[language === "es" ? "en" : "es"],
        description,
        inLanguage: ["en", "es"],
        author: { "@id": personId },
        publisher: { "@id": publisherId },
      },
      {
        "@type": "Book",
        "@id": bookId,
        name: title,
        alternateName: SEO.title[language === "es" ? "en" : "es"],
        url: SITE_CANONICAL,
        image: [SITE_IMAGE, SITE_COVER],
        thumbnailUrl: SITE_COVER,
        description,
        inLanguage: ["en", "es"],
        bookFormat: "https://schema.org/EBook",
        numberOfPages: STORY_PAGE_COUNT,
        isFamilyFriendly: true,
        isAccessibleForFree: true,
        genre: ["Children's fiction", "Picture book"],
        keywords: SEO.tags.join(", "),
        author: { "@id": personId },
        creator: { "@id": personId },
        publisher: { "@id": publisherId },
        copyrightHolder: { "@id": personId },
        copyrightYear: 2026,
        license: "https://creativecommons.org/licenses/by-nc/4.0/",
        audience: {
          "@type": "Audience",
          audienceType: "Children",
          typicalAgeRange: "3-8",
        },
        accessibilityFeature: ["readingOrder", "alternativeText", "displayTransformability"],
        accessibilityHazard: "none",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        url: SITE_CANONICAL,
        name: title,
        description,
        inLanguage: ["en", "es"],
        isPartOf: { "@id": websiteId },
        about: { "@id": bookId },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: SITE_IMAGE,
        },
      },
    ],
  };
}

function applyJsonLd(language) {
  const script = document.querySelector('script[type="application/ld+json"]');
  if (!script) return;
  script.textContent = JSON.stringify(buildJsonLd(language));
}

export function applyDocumentMeta(language) {
  if (typeof document === "undefined") return;

  const title = SEO.title[language] || SEO.defaultTitle;
  const description = SEO.description[language];
  const locale = SEO.locale[language];
  const imageAlt = SEO.imageAlt[language];
  const appName = SEO.applicationName[language] || title;

  document.title = title;
  document.documentElement.lang = language === "es" ? "es" : "en";

  setMetaBySelector('meta[name="description"]', "content", description);
  setMetaBySelector('meta[name="application-name"]', "content", appName);
  setMetaBySelector('meta[name="apple-mobile-web-app-title"]', "content", appName);

  setLinkHref("canonical", SITE_CANONICAL);
  setLinkHref("alternate", SITE_CANONICAL, { hreflang: "en" });
  setLinkHref("alternate", SITE_CANONICAL, { hreflang: "es" });
  setLinkHref("alternate", SITE_CANONICAL, { hreflang: "x-default" });

  setMetaBySelector('meta[property="og:url"]', "content", SITE_CANONICAL);
  setMetaBySelector('meta[property="og:title"]', "content", title);
  setMetaBySelector('meta[property="og:description"]', "content", description);
  setMetaBySelector('meta[property="og:locale"]', "content", locale);
  setMetaBySelector('meta[property="og:image"]', "content", SITE_IMAGE);
  setMetaBySelector('meta[property="og:image:secure_url"]', "content", SITE_IMAGE);
  setMetaBySelector('meta[property="og:image:alt"]', "content", imageAlt);

  setMetaBySelector('meta[name="twitter:title"]', "content", title);
  setMetaBySelector('meta[name="twitter:description"]', "content", description);
  setMetaBySelector('meta[name="twitter:image"]', "content", SITE_IMAGE);
  setMetaBySelector('meta[name="twitter:image:alt"]', "content", imageAlt);

  applyJsonLd(language);
}
