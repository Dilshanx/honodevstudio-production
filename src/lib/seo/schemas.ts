// export const schemas = {
//   // Organization schema
//   organization: (baseUrl: string, org: any) => ({
//     "@context": "https://schema.org",
//     "@type": "Organization",
//     "name": org.name,
//     "description": org.description,
//     "url": baseUrl,
//     "logo": `${baseUrl}/logo.png`,
//     "contactPoint": {
//       "@type": "ContactPoint",
//       "telephone": org.phone,
//       "contactType": "customer service",
//       "email": org.email,
//       "availableLanguage": org.languages
//     },
//     "sameAs": org.socialLinks
//   }),

//   // Person schema
//   person: (baseUrl: string, person: any) => ({
//     "@context": "https://schema.org",
//     "@type": "Person",
//     "name": person.name,
//     "jobTitle": person.jobTitle,
//     "url": baseUrl,
//     "image": `${baseUrl}/profile.jpg`,
//     "sameAs": person.socialLinks || [],
//     "knowsAbout": person.skills || [],
//     "worksFor": {
//       "@type": "Organization",
//       "name": person.company || person.name
//     }
//   }),

//   // Website schema
//   website: (baseUrl: string, site: any) => ({
//     "@context": "https://schema.org",
//     "@type": "WebSite",
//     "name": site.siteName,
//     "description": site.description,
//     "url": baseUrl,
//     "potentialAction": {
//       "@type": "SearchAction",
//       "target": `${baseUrl}/search?q={search_term_string}`,
//       "query-input": "required name=search_term_string"
//     }
//   }),

//   // Service schema
//   service: (baseUrl: string, service: any) => ({
//     "@context": "https://schema.org",
//     "@type": "Service",
//     "name": service.name,
//     "description": service.description,
//     "provider": {
//       "@type": "Organization",
//       "name": service.providerName
//     },
//     "serviceType": service.type,
//     "areaServed": service.areaServed || "Worldwide",
//     "offers": service.offers
//   }),

//   // Creative Work schema (for portfolio projects)
//   creativeWork: (baseUrl: string, work: any) => ({
//     "@context": "https://schema.org",
//     "@type": "CreativeWork",
//     "name": work.name,
//     "description": work.description,
//     "author": {
//       "@type": "Organization",
//       "name": work.author
//     },
//     "datePublished": work.datePublished,
//     "image": `${baseUrl}${work.image}`,
//     "url": `${baseUrl}${work.url}`
//   }),

//   // Breadcrumb schema
//   breadcrumb: (baseUrl: string, items: any[]) => ({
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     "itemListElement": items.map((item, index) => ({
//       "@type": "ListItem",
//       "position": index + 1,
//       "name": item.name,
//       "item": `${baseUrl}${item.href}`
//     }))
//   })
// };

// Type definitions for schema data
interface OrganizationData {
  name: string;
  description: string;
  phone?: string;
  email?: string;
  languages?: string[];
  socialLinks?: string[];
}

interface PersonData {
  name: string;
  jobTitle?: string;
  socialLinks?: string[];
  skills?: string[];
  company?: string;
}

interface SiteData {
  siteName: string;
  description: string;
}

interface ServiceData {
  name: string;
  description: string;
  providerName: string;
  type?: string;
  areaServed?: string;
  offers?: Record<string, unknown>;
}

interface CreativeWorkData {
  name: string;
  description: string;
  author: string;
  datePublished?: string;
  image?: string;
  url?: string;
}

interface BreadcrumbItem {
  name: string;
  href: string;
}

export const schemas = {
  // Organization schema
  organization: (baseUrl: string, org: OrganizationData) => ({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: org.name,
    description: org.description,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: org.phone,
      contactType: "customer service",
      email: org.email,
      availableLanguage: org.languages,
    },
    sameAs: org.socialLinks,
  }),

  // Person schema
  person: (baseUrl: string, person: PersonData) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    url: baseUrl,
    image: `${baseUrl}/profile.jpg`,
    sameAs: person.socialLinks || [],
    knowsAbout: person.skills || [],
    worksFor: {
      "@type": "Organization",
      name: person.company || person.name,
    },
  }),

  // Website schema
  website: (baseUrl: string, site: SiteData) => ({
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.siteName,
    description: site.description,
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }),

  // Service schema
  service: (baseUrl: string, service: ServiceData) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: service.providerName,
    },
    serviceType: service.type,
    areaServed: service.areaServed || "Worldwide",
    offers: service.offers,
  }),

  // Creative Work schema (for portfolio projects)
  creativeWork: (baseUrl: string, work: CreativeWorkData) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: work.name,
    description: work.description,
    author: {
      "@type": "Organization",
      name: work.author,
    },
    datePublished: work.datePublished,
    image: `${baseUrl}${work.image}`,
    url: `${baseUrl}${work.url}`,
  }),

  // Breadcrumb schema
  breadcrumb: (baseUrl: string, items: BreadcrumbItem[]) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.href}`,
    })),
  }),
};
