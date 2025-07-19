// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { generateMetadata as generateMeta } from '@/lib/seo/metadata';
// import { schemas } from '@/lib/seo/schemas';
// import { seoConfig } from '@/lib/seo/config';

// const inter = Inter({ subsets: ["latin"] });

// const structuredData = [
//   schemas.organization(seoConfig.baseUrl, seoConfig.organization),
//   schemas.website(seoConfig.baseUrl, {
//     siteName: seoConfig.defaultSiteName,
//     description: seoConfig.organization.description
//   })
// ];

// export const metadata: Metadata = generateMeta(seoConfig.baseUrl, {
//   title: "Hono Dev Studio | Exceptional Web Applications",
//   description: "We architect and build exceptional web applications that are as intelligent as they are beautiful. Expert development services with cutting-edge technologies.",
//   keywords: ["web development", "React", "Next.js", "JavaScript", "full stack", "web applications"],
//   siteName: seoConfig.defaultSiteName,
//   author: seoConfig.defaultAuthor,
//   structuredData: {
//     organization: schemas.organization(seoConfig.baseUrl, seoConfig.organization),
//     website: schemas.website(seoConfig.baseUrl, {
//       siteName: seoConfig.defaultSiteName,
//       description: "Professional web development services"
//     })
//   },
//   verification: {
//     google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
//   },
// });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en" className="dark">
//       <head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(structuredData)
//           }}
//         />
//       </head>
//       <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
//         {children}
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { schemas } from "@/lib/seo/schemas";
import { seoConfig } from "@/lib/seo/config";

const inter = Inter({ subsets: ["latin"] });

const structuredData = [
  schemas.organization(seoConfig.baseUrl, seoConfig.organization),
  schemas.website(seoConfig.baseUrl, {
    siteName: seoConfig.defaultSiteName,
    description: seoConfig.organization.description,
  }),
];

export const metadata: Metadata = {
  title: "Hono Dev Studio | Exceptional Web Applications",
  description:
    "We architect and build exceptional web applications that are as intelligent as they are beautiful. Expert development services with cutting-edge technologies.",
  keywords: [
    "web development",
    "React",
    "Next.js",
    "JavaScript",
    "full stack",
    "web applications",
  ],
  authors: [{ name: seoConfig.defaultAuthor }],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  openGraph: {
    title: "Hono Dev Studio | Exceptional Web Applications",
    description:
      "We architect and build exceptional web applications that are as intelligent as they are beautiful.",
    url: seoConfig.baseUrl,
    siteName: seoConfig.defaultSiteName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hono Dev Studio | Exceptional Web Applications",
    description:
      "We architect and build exceptional web applications that are as intelligent as they are beautiful.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='dark'>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
