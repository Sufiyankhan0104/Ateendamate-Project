/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ateendamate.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/404', '/500'],
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/features'),
    await config.transform(config, '/pricing'),
    await config.transform(config, '/about-us'),
    await config.transform(config, '/contact-us'),
    await config.transform(config, '/docs'),
    await config.transform(config, '/changelog'),
    await config.transform(config, '/legal/privacy'),
    await config.transform(config, '/legal/terms'),
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        disallow: '/',
      },
      {
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
      {
        userAgent: 'CCBot',
        disallow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        disallow: '/',
      },
    ],
  },
};