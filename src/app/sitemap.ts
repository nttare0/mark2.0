import { MetadataRoute } from 'next';

/**
 * Sitemap generation for mark2.0
 * This file generates a sitemap.xml that helps search engines discover and index your pages.
 * 
 * For Google Search Console and other search engines to properly index your site,
 * make sure to:
 * 1. Submit your sitemap.xml to Google Search Console
 * 2. Include a reference to sitemap.xml in your robots.txt file
 * 3. Ensure all important pages are included in the sitemap
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://mark2-0.vercel.app';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/code-editor`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/code-editor/preview`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];
}
