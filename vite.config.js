import { readFileSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const { version } = JSON.parse(
  readFileSync(new URL("./package.json", import.meta.url), "utf8")
);

// Stats: Antonio's own Umami, beside Vercel Web Analytics. No cookies, Do Not Track respected, and a
// click on a link to another site counts as an "outbound" event. Loads only when the project's
// Production settings give PUBLIC_UMAMI_HOST and PUBLIC_UMAMI_WEBSITE_ID.
const outbound = `document.addEventListener('click', (e) => {
  const a = e.target instanceof Element ? e.target.closest('a[href]') : null
  if (!a) return
  const u = new URL(a.href, location.href)
  if (!/^https?:$/.test(u.protocol) || u.host === location.host) return
  window.umami?.track('outbound', { to: u.hostname, url: u.origin + u.pathname })
}, true)`;

function stats() {
  return {
    name: "stats",
    transformIndexHtml() {
      const host = process.env.PUBLIC_UMAMI_HOST;
      const id = process.env.PUBLIC_UMAMI_WEBSITE_ID;
      if (!host || !id) return [];
      return [
        {
          tag: "script",
          attrs: {
            defer: true,
            src: `${host}/p.js`,
            "data-website-id": id,
            "data-domains":
              "mia-the-sun-and-the-moon-web-book.stronghandssoftheart.com",
            "data-do-not-track": "true",
          },
          injectTo: "head",
        },
        { tag: "script", children: outbound, injectTo: "head" },
      ];
    },
  };
}

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(version),
  },
  plugins: [react(), stats()],
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.js",
    css: false,
  },
});
