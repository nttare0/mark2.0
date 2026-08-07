import { MetadataRoute } from 'next';

/**
 * Robots.txt configuration for mark2.0
 * This file tells search engine crawlers which pages to index and which to ignore.
 * 
 * For production, this allows all pages to be indexed and references the sitemap.
 * For development, it disallows all crawling.
 */

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://mark2-0.vercel.app';
  
  // In production, allow all pages to be indexed
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (!isProduction) {
    // In development, disallow all crawling
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    };
  }

  // Production configuration
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'], // Disallow internal and API routes
    },
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
