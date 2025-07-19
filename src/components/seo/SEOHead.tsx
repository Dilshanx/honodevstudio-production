// interface SEOHeadProps {
//   structuredData?: any;
// }

// export function SEOHead({ structuredData }: SEOHeadProps) {
//   return (
//     <>
//       {structuredData && (
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{
//             __html: JSON.stringify(structuredData)
//           }}
//         />
//       )}
//     </>
//   );
// }

// Define a type for structured data that covers common schema.org types
type StructuredData =
  | { "@type": "Organization"; [key: string]: unknown }
  | { "@type": "Person"; [key: string]: unknown }
  | { "@type": "WebSite"; [key: string]: unknown }
  | { "@type": "Service"; [key: string]: unknown }
  | { "@type": "CreativeWork"; [key: string]: unknown }
  | { "@type": "BreadcrumbList"; [key: string]: unknown }
  | Record<string, unknown>;

interface SEOHeadProps {
  structuredData?: StructuredData;
}

export function SEOHead({ structuredData }: SEOHeadProps) {
  return (
    <>
      {structuredData && (
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}
    </>
  );
}
