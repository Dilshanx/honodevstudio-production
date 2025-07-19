// import { generateMetadata as generateMeta } from "@/lib/seo/metadata";
// import { schemas } from "@/lib/seo/schemas";
// import { seoConfig, pageConfigs } from "@/lib/seo/config";
// import { SEOHead } from "@/components/seo/SEOHead";
// import { Navbar } from "@/components/Navbar";
// import Hero from "@/components/Hero";
// import { AboutSection } from "@/components/AboutSection";
// import { ServicesSection } from "@/components/ServicesSection";
// import { OurProcess } from "@/components/OurProcess";
// import { FeaturedWork } from "@/components/FeaturedWork";
// import { Testimonials } from "@/components/Testimonials";
// import { CallToAction } from "@/components/CallToAction";
// import { Footer } from "@/components/Footer";

// export async function generateMetadata() {
//   const config = pageConfigs.home;
//   const structuredData = {
//     person: schemas.person(seoConfig.baseUrl, {
//       name: "Hono Dev Studio",
//       jobTitle: "Web Development Studio",
//       skills: ["React", "Next.js", "TypeScript", "Node.js", "UI/UX Design"],
//       experience: "Expert Level",
//       projects: "50+",
//     }),
//     organization: schemas.organization(
//       seoConfig.baseUrl,
//       seoConfig.organization
//     ),
//   };

//   return generateMeta(seoConfig.baseUrl, {
//     ...config,
//     structuredData,
//     siteName: seoConfig.defaultSiteName,
//     author: seoConfig.defaultAuthor,
//   });
// }

// export default function HomePage() {
//   const structuredData = {
//     person: schemas.person(seoConfig.baseUrl, {
//       name: "Hono Dev Studio",
//       jobTitle: "Web Development Studio",
//       skills: ["React", "Next.js", "TypeScript", "Node.js", "UI/UX Design"],
//       experience: "Expert Level",
//     }),
//   };

//   return (
//     <>
//       <SEOHead structuredData={structuredData} />
//       <main className='min-h-screen  text-white'>
//         <Navbar />
//         <Hero />
//         <AboutSection />
//         <ServicesSection />
//         <OurProcess />
//         <FeaturedWork />
//         <Testimonials />
//         <CallToAction />
//         <Footer />
//       </main>
//     </>
//   );
// }

import { generateMetadata as generateMeta } from "@/lib/seo/metadata";
import { schemas } from "@/lib/seo/schemas";
import { seoConfig, pageConfigs } from "@/lib/seo/config";
import { SEOHead } from "@/components/seo/SEOHead";
import { Navbar } from "@/components/Navbar";
import Hero from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { OurProcess } from "@/components/OurProcess";
import { FeaturedWork } from "@/components/FeaturedWork";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

// Centralized structured data configuration
const getStructuredData = (includeProjects = false) => ({
  person: schemas.person(seoConfig.baseUrl, {
    name: "Hono Dev Studio",
    jobTitle: "Web Development Studio",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "UI/UX Design"],
    // Remove 'experience' as it's not part of PersonData type
    ...(includeProjects && { projects: "50+" }),
  }),
});

export async function generateMetadata() {
  const config = pageConfigs.home;
  const structuredData = {
    ...getStructuredData(true),
    organization: schemas.organization(
      seoConfig.baseUrl,
      seoConfig.organization
    ),
  };

  return generateMeta(seoConfig.baseUrl, {
    ...config,
    structuredData,
    siteName: seoConfig.defaultSiteName,
    author: seoConfig.defaultAuthor,
  });
}

export default function HomePage() {
  const structuredData = getStructuredData();

  return (
    <>
      <SEOHead structuredData={structuredData} />
      <main className='min-h-screen text-white'>
        <Navbar />
        <Hero />
        <AboutSection />
        <ServicesSection />
        <OurProcess />
        <FeaturedWork />
        <Testimonials />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}
