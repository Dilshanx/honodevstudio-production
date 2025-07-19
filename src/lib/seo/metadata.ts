// // import { Metadata } from 'next';

// // interface MetadataConfig {
// //   title: string;
// //   description: string;
// //   keywords?: string[];
// //   canonicalUrl?: string;
// //   ogImage?: string;
// //   ogType?: 'website' | 'article' | 'profile';
// //   siteName?: string;
// //   author?: string;
// //   publishedTime?: string;
// //   modifiedTime?: string;
// //   structuredData?: any;
// // }

// // export function generateMetadata(baseUrl: string, config: MetadataConfig): Metadata {
// //   const {
// //     title,
// //     description,
// //     keywords = [],
// //     canonicalUrl,
// //     ogImage,
// //     ogType = 'website',
// //     siteName,
// //     author,
// //     publishedTime,
// //     modifiedTime,
// //     structuredData
// //   } = config;

// //   const fullUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
// //   const imageUrl = ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}/og-image.jpg`;

// //   return {
// //     title,
// //     description,
// //     keywords: keywords.join(', '),
// //     authors: author ? [{ name: author }] : undefined,
// //     creator: author,
// //     publisher: siteName,

// //     // Open Graph
// //     openGraph: {
// //       title,
// //       description,
// //       url: fullUrl,
// //       siteName,
// //       images: [
// //         {
// //           url: imageUrl,
// //           width: 1200,
// //           height: 630,
// //           alt: title,
// //         },
// //       ],
// //       type: ogType,
// //       publishedTime,
// //       modifiedTime,
// //     },

// //     // Twitter
// //     twitter: {
// //       card: 'summary_large_image',
// //       title,
// //       description,
// //       images: [imageUrl],
// //       creator: '@honodevstudio',
// //     },

// //     // Additional meta tags
// //     alternates: {
// //       canonical: fullUrl,
// //     },

// //     // Robots
// //     robots: {
// //       index: true,
// //       follow: true,
// //       googleBot: {
// //         index: true,
// //         follow: true,
// //         'max-video-preview': -1,
// //         'max-image-preview': 'large',
// //         'max-snippet': -1,
// //       },
// //     },

// //     // Additional metadata
// //     other: {
// //       'apple-mobile-web-app-capable': 'yes',
// //       'apple-mobile-web-app-status-bar-style': 'black-translucent',
// //       'format-detection': 'telephone=no',
// //     },
// //   };
// // }

// import { Metadata } from "next";

// // Define a more specific type for structured data
// type SingleStructuredData =
//   | { "@type": "Article"; [key: string]: unknown }
//   | { "@type": "Organization"; [key: string]: unknown }
//   | { "@type": "Person"; [key: string]: unknown }
//   | { "@type": "WebPage"; [key: string]: unknown }
//   | Record<string, unknown>;

// type StructuredDataType =
//   | SingleStructuredData
//   | Record<string, SingleStructuredData>;

// interface MetadataConfig {
//   title: string;
//   description: string;
//   keywords?: string[];
//   canonicalUrl?: string;
//   ogImage?: string;
//   ogType?: "website" | "article" | "profile";
//   siteName?: string;
//   author?: string;
//   publishedTime?: string;
//   modifiedTime?: string;
//   structuredData?: StructuredDataType;
// }

// export function generateMetadata(
//   baseUrl: string,
//   config: MetadataConfig
// ): Metadata {
//   const {
//     title,
//     description,
//     keywords = [],
//     canonicalUrl,
//     ogImage,
//     ogType = "website",
//     siteName,
//     author,
//     publishedTime,
//     modifiedTime,
//     structuredData,
//   } = config;

//   const fullUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
//   const imageUrl = ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}/og-image.jpg`;

//   const metadata: Metadata = {
//     title,
//     description,
//     keywords: keywords.join(", "),
//     authors: author ? [{ name: author }] : undefined,
//     creator: author,
//     publisher: siteName,

//     // Open Graph
//     openGraph: {
//       title,
//       description,
//       url: fullUrl,
//       siteName,
//       images: [
//         {
//           url: imageUrl,
//           width: 1200,
//           height: 630,
//           alt: title,
//         },
//       ],
//       type: ogType,
//       publishedTime,
//       modifiedTime,
//     },

//     // Twitter
//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [imageUrl],
//       creator: "@honodevstudio",
//     },

//     // Additional meta tags
//     alternates: {
//       canonical: fullUrl,
//     },

//     // Robots
//     robots: {
//       index: true,
//       follow: true,
//       googleBot: {
//         index: true,
//         follow: true,
//         "max-video-preview": -1,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//       },
//     },

//     // Additional metadata
//     other: {
//       "apple-mobile-web-app-capable": "yes",
//       "apple-mobile-web-app-status-bar-style": "black-translucent",
//       "format-detection": "telephone=no",
//       // Include structured data if provided
//       ...(structuredData && {
//         "application/ld+json": JSON.stringify(
//           typeof structuredData === "object" && "@type" in structuredData
//             ? {
//                 "@context": "https://schema.org",
//                 ...structuredData,
//               }
//             : Object.values(structuredData).map((value) => ({
//                 "@context": "https://schema.org",
//                 ...(value as Record<string, unknown>),
//               }))
//         ),
//       }),
//     },
//   };

//   return metadata;
// }

import { Metadata } from "next";

// Define a more specific type for structured data
type ArticleStructuredData = { "@type": "Article"; [key: string]: unknown };
type OrganizationStructuredData = {
  "@type": "Organization";
  [key: string]: unknown;
};
type PersonStructuredData = { "@type": "Person"; [key: string]: unknown };
type WebPageStructuredData = { "@type": "WebPage"; [key: string]: unknown };
type GenericStructuredData = Record<string, unknown>;

type SingleStructuredData =
  | ArticleStructuredData
  | OrganizationStructuredData
  | PersonStructuredData
  | WebPageStructuredData
  | GenericStructuredData;

type StructuredDataType =
  | SingleStructuredData
  | Record<string, SingleStructuredData>;

interface MetadataConfig {
  title: string;
  description: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "profile";
  siteName?: string;
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  structuredData?: StructuredDataType;
}

// Helper function to check if data has @type property
function hasTypeProperty(
  data: unknown
): data is { "@type": string; [key: string]: unknown } {
  return typeof data === "object" && data !== null && "@type" in data;
}

// Helper function to create structured data JSON
function createStructuredDataJson(data: StructuredDataType): string {
  if (hasTypeProperty(data)) {
    return JSON.stringify({
      "@context": "https://schema.org",
      ...data,
    });
  }

  return JSON.stringify(
    Object.values(data).map((value: unknown) => ({
      "@context": "https://schema.org",
      ...(value as SingleStructuredData),
    }))
  );
}

export function generateMetadata(
  baseUrl: string,
  config: MetadataConfig
): Metadata {
  const {
    title,
    description,
    keywords = [],
    canonicalUrl,
    ogImage,
    ogType = "website",
    siteName,
    author,
    publishedTime,
    modifiedTime,
    structuredData,
  } = config;

  const fullUrl = canonicalUrl ? `${baseUrl}${canonicalUrl}` : baseUrl;
  const imageUrl = ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}/og-image.jpg`;

  const metadata: Metadata = {
    title,
    description,
    keywords: keywords.join(", "),
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
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      creator: "@honodevstudio",
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
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    // Additional metadata
    other: {
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "format-detection": "telephone=no",
      // Include structured data if provided
      ...(structuredData && {
        "application/ld+json": createStructuredDataJson(structuredData),
      }),
    },
  };

  return metadata;
}
