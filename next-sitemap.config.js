/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://orikai.dev',
  generateRobotsTxt: true,
  alternateRefs: [
    { href: 'https://orikai.dev', hreflang: 'ru' },
    { href: 'https://orikai.dev/en', hreflang: 'en' },
  ],
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
}
