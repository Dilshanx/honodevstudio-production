import { MetadataRoute } from 'next';
import { seoConfig } from '@/lib/seo/config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = seoConfig.baseUrl;
  const isProd = process.env.NODE_ENV === 'production';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: isProd ? '/' : [],
        disallow: isProd ? [
          '/admin/',
          '/api/',
          '/private/',
          '/_next/',
          '/temp/',
          '*.json',
          '*?preview=*',
          '/draft/',
        ] : ['/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/'],
        crawlDelay: 1,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

