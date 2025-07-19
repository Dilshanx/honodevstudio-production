import { Metadata } from 'next';

interface MetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  siteName?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: any;
}

export function generateMetadata(baseUrl: string, config: MetadataConfig): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    ogImage,
    ogType = 'website',
    siteName,
    author,
    publishedTime,
    modifiedTime,
    structuredData
  } = config;

  const fullUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const imageUrl = ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}/og-image.jpg`;

  return {
    title,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : undefined,
    creator: author,
    publisher: siteName,
    
    // Open Graph
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: ogType,
      publishedTime,
      modifiedTime,
    },
    
    // Twitter
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [imageUrl],
      creator: '@honodevstudio',
    },
    
    // Additional meta tags
    alternates: {
      canonical: fullUrl,
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Additional metadata
    other: {
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'format-detection': 'telephone=no',
    },
  };
}

