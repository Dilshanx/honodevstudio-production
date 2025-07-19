export const seoConfig = {
  defaultSiteName: "Hono Dev Studio",
  defaultAuthor: "Hono Dev Studio",
  defaultOgImage: "/og-image.jpg",
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://honodev.studio",
  
  social: {
    twitter: "@honodevstudio",
    github: "honodevstudio",
    linkedin: "honodevstudio"
  },
  
  organization: {
    name: "Hono Dev Studio",
    description: "We architect and build exceptional web applications that are as intelligent as they are beautiful.",
    phone: "+1-555-123-4567",
    email: "hello@honodev.studio",
    languages: ["English"],
    socialLinks: [
      "https://github.com/honodevstudio",
      "https://linkedin.com/company/honodevstudio",
      "https://twitter.com/honodevstudio"
    ]
  }
};

// Page-specific configurations
export const pageConfigs = {
  home: {
    title: "Hono Dev Studio | Exceptional Web Applications",
    description: "We architect and build exceptional web applications that are as intelligent as they are beautiful. Expert development services with cutting-edge technologies.",
    keywords: ["web development", "React", "Next.js", "JavaScript", "full stack", "web applications"],
    canonicalUrl: "/",
  },
  
  about: {
    title: "About Us - Hono Dev Studio",
    description: "Learn about our holistic development process and how we merge creative design with robust engineering.",
    keywords: ["about", "development process", "design", "engineering"],
    canonicalUrl: "/about",
  },
  
  services: {
    title: "Our Services - Hono Dev Studio",
    description: "Complete suite of digital services designed to build, launch, and grow your online presence from the ground up.",
    keywords: ["web development services", "React development", "API development", "UI/UX design"],
    canonicalUrl: "/services",
  },
  
  work: {
    title: "Our Work - Featured Projects",
    description: "View our latest web development projects and case studies showcasing our expertise.",
    keywords: ["portfolio", "projects", "web development", "case studies"],
    canonicalUrl: "/work",
  },
  
  contact: {
    title: "Contact Us - Let's Build Together",
    description: "Have a project in mind? We'd love to hear about it. Reach out and let's create something extraordinary.",
    keywords: ["contact", "consultation", "project inquiry", "hire developer"],
    canonicalUrl: "/contact",
  }
};

