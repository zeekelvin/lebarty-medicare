import type { MetadataRoute } from 'next';
import { services, site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;
  const now = new Date();

  const staticRoutes = [
    '',
    '/about/dr-lebarty',
    '/services',
    '/book',
    '/patients',
    '/patients/insurance',
    '/foundation',
    '/foundation/donate',
    '/resources',
    '/locations/schenectady',
    '/contact',
    '/accessibility',
    '/privacy',
    '/hipaa-notice',
  ];

  const serviceRoutes = services.map((s) => `/services/${s.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1.0 : 0.7,
  }));
}
