'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * SEO JSON-LD structured data component
 * Adds structured data to the page for better search engine understanding
 */
export default function SeoJsonLd() {
  const pathname = usePathname();
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://mark2-0.vercel.app';
  const currentUrl = `${baseUrl}${pathname}`;

  // Generate structured data based on the current page
  const getStructuredData = () => {
    const baseData = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${baseUrl}/#organization`,
          name: 'mark2.0',
          url: baseUrl,
          description: 'A sophisticated conversational AI assistant with voice interaction, code generation, and web development capabilities.',
          founder: {
            '@type': 'Person',
            name: 'Ntare Shema Prince',
          },
          sameAs: ['https://mark210.netlify.app/mark210'],
        },
        {
          '@type': 'WebApplication',
          '@id': `${baseUrl}/#app`,
          name: 'mark2.0',
          url: baseUrl,
          description: 'mark2.0 is a sophisticated conversational AI assistant with voice interaction, code generation, and web development capabilities.',
          applicationCategory: 'Utility',
          operatingSystem: 'All',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          author: {
            '@id': `${baseUrl}/#organization`,
          },
        },
      ],
    };

    // Add page-specific data
    if (pathname === '/') {
      baseData['@graph'].push({
        '@type': 'WebPage',
        '@id': `${currentUrl}/#page`,
        url: currentUrl,
        name: 'mark2.0 - Your Conversational AI Assistant',
        description: 'A sophisticated conversational AI assistant with voice interaction, code generation, and web development capabilities.',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: 'https://mark2-0.vercel.app/api/og',
          width: 1200,
          height: 630,
        },
      });
    } else if (pathname === '/code-editor') {
      baseData['@graph'].push({
        '@type': 'WebPage',
        '@id': `${currentUrl}/#page`,
        url: currentUrl,
        name: 'mark coder - AI Code Generation',
        description: 'Generate websites and code with AI assistance. Create HTML, CSS, and JavaScript with live preview.',
      });
    } else if (pathname === '/terms-and-conditions') {
      baseData['@graph'].push({
        '@type': 'WebPage',
        '@id': `${currentUrl}/#page`,
        url: currentUrl,
        name: 'Terms and Conditions - mark2.0',
        description: 'Terms and Conditions for using mark2.0 AI assistant service.',
      });
    }

    // Add WebSite data
    baseData['@graph'].push({
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'mark2.0',
      description: 'A sophisticated conversational AI assistant with voice interaction, code generation, and web development capabilities.',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${baseUrl}/?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    });

    return baseData;
  };

  useEffect(() => {
    const structuredData = getStructuredData();
    
    // Remove existing JSON-LD script
    const existingScript = document.getElementById('json-ld-script');
    if (existingScript) {
      existingScript.remove();
    }

    // Create and append new JSON-LD script
    const script = document.createElement('script');
    script.id = 'json-ld-script';
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);
  }, [pathname]);

  return null;
}
