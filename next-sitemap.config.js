/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://orikai.dev',
  generateRobotsTxt: true,
  exclude: ['/icon.svg', '/ru'],
  transform: async (config, path) => ({
    loc: path,
    changefreq: 'weekly',
    priority: path === '/' ? 1.0 : 0.9,
    lastmod: new Date().toISOString(),
    alternateRefs: [
      { href: 'https://orikai.dev',    hreflang: 'ru', hrefIsAbsolute: true },
      { href: 'https://orikai.dev/en', hreflang: 'en', hrefIsAbsolute: true },
    ],
  }),
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
