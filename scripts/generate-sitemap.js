import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { resolve } from 'path';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/blog/', changefreq: 'weekly', priority: 0.9 },
  { url: '/about.md', changefreq: 'monthly', priority: 0.7 },
  { url: '/terms.html', changefreq: 'yearly', priority: 0.3 },
  // Blog posts - dynamically add these
  { url: '/Zenon/', changefreq: 'monthly', priority: 0.8 },
  { url: '/Lygon/', changefreq: 'monthly', priority: 0.8 },
  { url: '/Mactab/', changefreq: 'monthly', priority: 0.8 },
  { url: '/Lex/', changefreq: 'monthly', priority: 0.8 },
  { url: '/LYSZT/', changefreq: 'monthly', priority: 0.8 },
  { url: '/Embraer-Analysis/', changefreq: 'monthly', priority: 0.8 },
  { url: '/ArticleDesign/', changefreq: 'monthly', priority: 0.8 },
];

const sitemap = new SitemapStream({ hostname: 'https://lyszt.net' });
const writeStream = createWriteStream(resolve(process.cwd(), '_site/sitemap.xml'));

sitemap.pipe(writeStream);
links.forEach(link => sitemap.write(link));
sitemap.end();

streamToPromise(sitemap).then(() => {
  console.log('✓ Sitemap generated successfully');
}).catch(err => {
  console.error('Error generating sitemap:', err);
  process.exit(1);
});
