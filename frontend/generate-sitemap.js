const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://mayank-packagings.onrender.com' });
const writeStream = createWriteStream('./sitemap.xml');

sitemap.pipe(writeStream);

sitemap.write({ url: '/index.html', changefreq: 'daily', priority: 1.0 });
sitemap.write({ url: '/about.html', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/products.html', changefreq: 'monthly', priority: 0.8 });
sitemap.write({ url: '/contact.html', changefreq: 'monthly', priority: 0.5 });
sitemap.write({ url: '/project.html', changefreq: 'monthly', priority: 0.7 });

sitemap.end();
