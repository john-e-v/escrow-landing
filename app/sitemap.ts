import type { MetadataRoute } from 'next';
import { prisma } from '@/lib/prisma';
import articles from '@/data/articles.json';

// Otherwise this bakes in whatever properties existed at build time and
// never picks up ones created afterward via checkout/claim.
export const revalidate = 3600;

const BASE_URL = 'https://www.clrblt.com';

async function getPropertyUrls(): Promise<MetadataRoute.Sitemap> {
  if (!prisma) return [];
  try {
    const properties = await prisma.property.findMany({
      select: { slug: true, updatedAt: true },
      take: 50000,
    });
    return properties.map((p) => ({
      url: `${BASE_URL}/property/${p.slug}`,
      lastModified: p.updatedAt,
      changeFrequency: 'weekly',
    }));
  } catch (err) {
    console.error('Failed to load properties for sitemap:', err);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'daily' },
    { url: `${BASE_URL}/create`, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly' },
    { url: `${BASE_URL}/articles`, changeFrequency: 'daily' },
    { url: `${BASE_URL}/property`, changeFrequency: 'monthly' },
    ...(articles as { slug: string }[]).map((a) => ({
      url: `${BASE_URL}/articles/${a.slug}`,
      changeFrequency: 'monthly' as const,
    })),
  ];

  const propertyRoutes = await getPropertyUrls();

  return [...staticRoutes, ...propertyRoutes];
}
