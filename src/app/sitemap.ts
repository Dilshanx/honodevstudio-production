// import { MetadataRoute } from 'next';
// import { seoConfig } from '@/lib/seo/config';

// export default function sitemap(): MetadataRoute.Sitemap {
//   const baseUrl = seoConfig.baseUrl;

//   return [
//     {
//       url: baseUrl,
//       lastModified: new Date(),
//       changeFrequency: 'daily',
//       priority: 1.0,
//     },
//     {
//       url: `${baseUrl}/contact`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}/privacy`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.5,
//     },
//     {
//       url: `${baseUrl}#about`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     },
//     {
//       url: `${baseUrl}#services`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.9,
//     },
//     {
//       url: `${baseUrl}#work`,
//       lastModified: new Date(),
//       changeFrequency: 'weekly',
//       priority: 0.8,
//     },
//   ];
// }

import { MetadataRoute } from "next";
import { seoConfig } from "@/lib/seo/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = seoConfig.baseUrl;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
