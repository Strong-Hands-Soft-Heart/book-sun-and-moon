// Answers an AI agent that asks for Markdown (Accept: text/markdown) at an address with no page.
// vercel.json sends only those requests here, and only after the site's own files miss, so a
// browser still gets the normal HTML 404 and every real page is untouched.
const BODY = `# Page not found (404)

There is no page at this address on Mia, the Sun, and the Moon. The link may be old or mistyped.

Try one of these instead:

- [llms.txt](https://mia-the-sun-and-the-moon-web-book.stronghandssoftheart.com/llms.txt): a plain-text guide to this site, written for AI agents
- [Sitemap](https://mia-the-sun-and-the-moon-web-book.stronghandssoftheart.com/sitemap.xml): the address of every page
- [Home page](https://mia-the-sun-and-the-moon-web-book.stronghandssoftheart.com/)
`;

module.exports = (req, res) => {
  res.statusCode = 404;
  res.setHeader("content-type", "text/markdown; charset=utf-8");
  res.setHeader("cache-control", "public, max-age=3600");
  res.setHeader("vary", "Accept");
  res.setHeader("x-robots-tag", "noindex");
  res.end(BODY);
};
