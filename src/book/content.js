import coverArt from "../graphics/title-image.png";
import parkArt from "../graphics/park-play.png";
import beachArt from "../graphics/beach-play-2.png";
import schoolArt from "../graphics/school.png";
import birthdayArt from "../graphics/birthday.png";
import sunArt from "../graphics/sun.png";
import shadowArt from "../graphics/shadow-play.png";
import duskArt from "../graphics/song-night.png";
import starArt from "../graphics/colorful-sky.png";
import moonArt from "../graphics/more-night-sky.png";
import bedtimeArt from "../graphics/night-moon-girl.png";

export const BOOK = {
  author: {
    en: "Antonio Rodriguez Martinez",
    es: "Antonio Rodríguez Martínez",
  },
  title: {
    en: "Mia, the Sun, and the Moon",
    es: "Mia, el Sol y la Luna",
  },
  shortTitle: {
    en: "Mia, the Sun, and the Moon",
    es: "Mia, el Sol y la Luna",
  },
  dedication: {
    en: "For Mia and Dario, with all my love",
    es: "Para Mia y Dario, con todo mi amor",
  },
  credit: {
    en: "Written, designed, and built with love for my daughter and nephew.",
    es: "Escrito, diseñado y programado con mucho amor para mi hija y mi sobrino.",
  },
  portfolioUrl: "https://antoniwan.online",
  publisher: { name: "Strong Hands, Soft Heart LLC", url: "https://www.stronghandssoftheart.com" },
};

/** Production origin, no trailing slash. Override with VITE_SITE_URL at build time. */
export const SITE_URL = String(
  import.meta.env.VITE_SITE_URL || "https://mia-the-sun-and-the-moon-web-book.stronghandssoftheart.com"
).replace(/\/$/, "");

export const SITE_CANONICAL = `${SITE_URL}/`;
export const SITE_IMAGE = `${SITE_URL}/og.png`;
export const SITE_COVER = `${SITE_URL}/cover.jpg`;
export const REPO_URL = "https://github.com/Strong-Hands-Soft-Heart/book-sun-and-moon";

export const SEO = {
  defaultTitle: "Mia, the Sun, and the Moon",
  title: {
    en: "Mia, the Sun, and the Moon",
    es: "Mia, el Sol y la Luna",
  },
  applicationName: {
    en: "Mia, the Sun, and the Moon",
    es: "Mia, el Sol y la Luna",
  },
  description: {
    en: "A free picture book about Mia, the sun, and the moon. Read it in English or Spanish.",
    es: "Un cuento gratis sobre Mia, el sol y la luna. Léelo en inglés o en español.",
  },
  locale: {
    en: "en_US",
    es: "es_419",
  },
  imageAlt: {
    en: "Warm paper card with a sun and moon mark and the title Mia, the Sun, and the Moon.",
    es: "Tarjeta de papel cálido con un sol y una luna y el título Mia, el Sol y la Luna.",
  },
  tags: ["children", "picture book", "sun", "moon", "bilingual"],
};

export const PAGES = [
  {
    id: "cover",
    type: "cover",
    theme: "dawn",
    image: coverArt,
    objectPosition: "center 72%",
    alt: {
      en: "A girl in a red coat with braided hair stands in a dark field at dusk, looking toward an orange sun on the horizon while a pale moon hangs in the sky.",
      es: "Una niña con un abrigo rojo y el cabello trenzado está de pie en un campo oscuro al anochecer, mirando hacia un sol naranja en el horizonte mientras una luna pálida cuelga en el cielo.",
    },
  },
  {
    id: "park",
    type: "story",
    theme: "day",
    image: parkArt,
    objectPosition: "center 78%",
    alt: {
      en: "Mia, a girl with pigtails, hops across a sunny park lawn while other children play among the trees.",
      es: "Mia, una niña con trenzas, salta por el césped de un parque soleado mientras otros niños juegan entre los árboles.",
    },
    body: {
      en: [
        "Every day, the sun says hi and shines so bright. Mia squints — then she smiles.",
        "Off she goes, running to play in the park!",
      ],
      es: [
        "Cada día, el Sol dice hola y brilla con mucha calidez. Mia entrecierra los ojitos… y sonríe.",
        "¡Ahí se va corriendo a jugar al parque!",
      ],
    },
  },
  {
    id: "beach",
    type: "story",
    theme: "day",
    image: beachArt,
    objectPosition: "center 82%",
    alt: {
      en: "Two children in red sit on a sandy beach by the ocean, playing in the surf with mountains and tall clouds behind them.",
      es: "Dos niños de rojo están sentados en una playa de arena junto al mar, jugando en las olas con montañas y nubes altas detrás.",
    },
    body: {
      en: [
        "Today the sun feels extra warm on Mia's skin.",
        "No park today — it's the beach, and sand, and waves. And the very best part: her cousin Dario is here too!",
      ],
      es: [
        "Hoy el sol se siente extra calentito en la piel de Mia.",
        "Hoy no hay parque: hay playa, arena y olas. Y lo mejor de todo: ¡su primo Dario también está aquí!",
      ],
    },
  },
  {
    id: "school",
    type: "story",
    theme: "day",
    image: schoolArt,
    objectPosition: "center 78%",
    alt: {
      en: "Four children sit together under a large tree, looking at an open book on the grass.",
      es: "Cuatro niños están sentados juntos bajo un árbol grande, mirando un libro abierto en el césped.",
    },
    body: {
      en: [
        "Today is a school day. Mia sits with her teacher and friends, and the sun sits with them too — in the leaves, on the book, on their faces.",
      ],
      es: [
        "Hoy hay escuela. Mia se sienta con su maestra y sus amigos, y el sol se sienta con ellos también: en las hojas, en el libro, en sus caritas.",
      ],
    },
  },
  {
    id: "birthday",
    type: "story",
    theme: "party",
    image: birthdayArt,
    objectPosition: "center 55%",
    alt: {
      en: "Mia in an orange dress stands in a bright doorway while family and friends gather around a birthday cake in a dark room.",
      es: "Mia, con un vestido naranja, está de pie en un umbral iluminado mientras familiares y amigos se reúnen alrededor de un bizcocho de cumpleaños en una habitación oscura.",
    },
    body: {
      en: [
        "So many suns and moons have come and gone that Mia is four years old!",
        "She celebrated with family and friends. And the cake was very yummy.",
      ],
      es: [
        "¡Han pasado tantos soles y tantas lunas que Mia ya tiene cuatro años!",
        "Celebró con su familia y sus amigos. Y el bizcocho estaba muy delicioso.",
      ],
    },
  },
  {
    id: "thank-you-sun",
    type: "story",
    theme: "day",
    image: sunArt,
    objectPosition: "center 62%",
    alt: {
      en: "A girl in a red dress with a long braid stands in a golden field under a blue sky, face tilted up toward the sun with a smile.",
      es: "Una niña con un vestido rojo y una trenza larga está de pie en un campo dorado bajo un cielo azul, con el rostro alzado hacia el sol y una sonrisa.",
    },
    body: {
      en: [
        "Whenever the sunshine touches her skin, Mia looks up and calls out,",
        { quote: "Hi, Sun! Thank you for the warmth and the light. So fun!" },
      ],
      es: [
        "Cuando el sol le toca la piel, Mia mira hacia arriba y grita:",
        { quote: "¡Hola, Sol! ¡Gracias por el calorcito y por la luz! ¡Qué diversión!" },
      ],
    },
  },
  {
    id: "shadows",
    type: "story",
    theme: "dusk",
    image: shadowArt,
    objectPosition: "center 42%",
    alt: {
      en: "Three children play on a path through reddish trees, their long purple shadows stretching across the sunlit ground.",
      es: "Tres niños juegan en un camino entre árboles rojizos, con sus sombras moradas alargadas sobre el suelo iluminado.",
    },
    body: {
      en: [
        "The sun moves across the sky and stretches long shadows for Mia and her friends to play in.",
        { quote: "The sun also plays with us!" },
        "Mia explains, very excited.",
      ],
      es: [
        "El sol se mueve por el cielo y estira sombras largas para que Mia y sus amigos jueguen.",
        { quote: "¡El sol también quiere jugar con nosotros!" },
        "explica Mia, muy emocionada.",
      ],
    },
  },
  {
    id: "goodbye-sun",
    type: "story",
    theme: "dusk",
    image: duskArt,
    objectPosition: "center 70%",
    alt: {
      en: "Two figures in red sit by the water as the sky splits between an orange sunset and a blue night with a moon.",
      es: "Dos figuras de rojo están sentadas junto al agua mientras el cielo se divide entre un atardecer naranja y una noche azul con luna.",
    },
    body: {
      en: [
        "Nighttime is nearby. It's time to say goodbye to the sunshine and the daylight — but Mia rejoices, because the moon is about to shine.",
        { quote: "🎶 Hi! Hello! Good day, good night, good night, good day! 🎶" },
        "A song that Mia made up for the moon!",
      ],
      es: [
        "La noche se acerca y es momento de decirle adiós a la luz del sol y al día, pero Mia agradece que la hermosa luna está a punto de brillar.",
        { quote: "🎶 ¡Hola! ¡Hello! ¡Buen día, buenas noches, buenas noches, buen día! 🎶" },
        "Mia se inventó esta canción y se la cantaba a la luna.",
      ],
    },
  },
  {
    id: "stars",
    type: "story",
    theme: "night",
    image: starArt,
    objectPosition: "center 88%",
    alt: {
      en: "A small figure points up at a vast dark blue night sky filled with stars, above a thin orange horizon.",
      es: "Una figura pequeña señala un cielo nocturno azul oscuro lleno de estrellas, sobre un horizonte naranja delgado.",
    },
    body: {
      en: [
        "The nighttime is so full of stars! Mia has a little while to explore the night sky, and her imagination goes wild!",
      ],
      es: [
        "¡El cielo de la noche tiene tantas estrellas! Mia tiene un poco de tiempo antes de dormir para explorar el cielo de la noche. ¡Su imaginación salta con curiosidad!",
      ],
    },
  },
  {
    id: "moon-phases",
    type: "story",
    theme: "night",
    image: moonArt,
    objectPosition: "center 62%",
    alt: {
      en: "A girl in a red coat stands by the water looking up at a row of moon phases across the night sky, with two smaller figures beside her.",
      es: "Una niña con un abrigo rojo está de pie junto al agua, mirando una fila de fases lunares en el cielo nocturno, con dos figuras más pequeñas a su lado.",
    },
    body: {
      en: [
        "Mia thinks the moon has many faces, because it looks different every night.",
        "Sometimes it's a sliver. Sometimes it's round and bright. Sometimes it almost hides.",
        { quote: "The moon is a little like us," },
        "says Mama. Some days we shine. Some days we feel small. Some days we hide.",
        "Mia giggles. She likes that the moon can change — and so can she.",
      ],
      es: [
        "Mia piensa que la luna tiene muchas caras, porque se ve diferente cada noche.",
        "A veces es una rayita. A veces está redonda y brillante. A veces casi se esconde.",
        { quote: "La luna se parece un poquito a nosotros," },
        "dice Mamá. Hay días en que brillamos. Hay días en que nos sentimos chiquitos. Hay días en que nos escondemos.",
        "Mia se ríe. Le gusta que la luna pueda cambiar — y ella también.",
      ],
    },
  },
  {
    id: "bedtime",
    type: "ending",
    theme: "night",
    image: bedtimeArt,
    objectPosition: "center 70%",
    alt: {
      en: "A child in orange sits on a bed in a dark bedroom, holding a stuffed animal, with a round moon shining through the window.",
      es: "Un niño de naranja está sentado en la cama de un cuarto oscuro, abrazando un peluche, con una luna redonda brillando a través de la ventana.",
    },
    body: {
      en: [
        { quote: "It's time for bed," },
        "said Mia, with the moonlight glowing on her face, so happy that tomorrow is another day.",
        { quote: "Good night, moon!" },
      ],
      es: [
        { quote: "Es hora de dormir," },
        "dijo Mia, con la luz de la luna tocándole la carita, feliz de que mañana será otro día y verá al sol.",
        { quote: "¡Buenas noches, Luna!" },
      ],
    },
    closing: {
      en: "The End",
      es: "Fin",
    },
  },
];

export const LAST_STORY_INDEX = PAGES.length - 1;

export function pagePlainText(page, language) {
  if (page.type === "cover") {
    return [BOOK.title[language], BOOK.dedication[language]]
      .filter(Boolean)
      .join(". ");
  }

  const parts = page.body[language].map((block) =>
    typeof block === "string" ? block : block.quote
  );

  if (page.closing) {
    parts.push(page.closing[language]);
  }

  return parts.join(" ");
}
