// "use client";

// import React, { useState, useCallback, useRef, useEffect } from "react";
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   AnimatePresence,
//   useReducedMotion,
// } from "framer-motion";
// import {
//   Code,
//   Palette,
//   Search,
//   Globe,
//   Smartphone,
//   Server,
//   Brush,
//   Package,
//   Video,
//   TrendingUp,
//   Target,
//   BarChart3,
//   ChevronDown,
//   Sparkles,
//   ArrowRight,
//   type LucideProps,
// } from "lucide-react";

// // --- TYPE DEFINITIONS ---

// interface Service {
//   name: string;
//   icon: React.ComponentType<LucideProps>;
//   description: string;
// }

// interface ServiceCategory {
//   id: string;
//   title: string;
//   icon: React.ComponentType<LucideProps>;
//   description: string;
//   services: Service[];
//   color: string;
// }

// // --- DATA ---

// const serviceCategories: ServiceCategory[] = [
//   {
//     id: "technology",
//     title: "Technology & Development",
//     icon: Code,
//     description:
//       "Full-stack development solutions that bring your digital vision to life.",
//     services: [
//       {
//         name: "Web Development",
//         icon: Globe,
//         description: "Frontend & Backend solutions",
//       },
//       {
//         name: "Mobile Apps",
//         icon: Smartphone,
//         description: "iOS & Android applications",
//       },
//       {
//         name: "API Development",
//         icon: Server,
//         description: "Scalable backend services",
//       },
//     ],
//     color: "from-[#E7FF1A] to-violet-400",
//   },
//   {
//     id: "creative",
//     title: "Creative & Design",
//     icon: Palette,
//     description:
//       "Visual identity and creative assets that make your brand unforgettable.",
//     services: [
//       {
//         name: "Branding",
//         icon: Brush,
//         description: "Logo, identity & brand guidelines",
//       },
//       {
//         name: "Packaging Design",
//         icon: Package,
//         description: "Product packaging & labels",
//       },
//       {
//         name: "Video Production",
//         icon: Video,
//         description: "Promotional & product videos",
//       },
//     ],
//     color: "from-violet-400 to-cyan-400",
//   },
//   {
//     id: "marketing",
//     title: "Marketing & Strategy",
//     icon: Search,
//     description:
//       "Growth and visibility solutions that drive real business results.",
//     services: [
//       {
//         name: "SEO Optimization",
//         icon: TrendingUp,
//         description: "Search engine visibility",
//       },
//       {
//         name: "Digital Advertising",
//         icon: Target,
//         description: "Targeted ad campaigns",
//       },
//       {
//         name: "Analytics & Insights",
//         icon: BarChart3,
//         description: "Performance tracking",
//       },
//     ],
//     color: "from-cyan-400 to-pink-400",
//   },
// ];

// // --- REUSABLE COMPONENTS ---

// const HolographicIcon = React.memo(
//   ({
//     IconComponent,
//     size = "w-12 h-12",
//     gradient = "from-[#E7FF1A] to-violet-400",
//   }: {
//     IconComponent: React.ComponentType<LucideProps>;
//     size?: string;
//     gradient?: string;
//   }) => {
//     const shouldReduceMotion = useReducedMotion();

//     return (
//       <motion.div
//         whileHover={shouldReduceMotion ? {} : "hover"}
//         className={`relative ${size} grid place-items-center`}
//       >
//         <div
//           className={`p-3 rounded-xl bg-gradient-to-r ${gradient} group-hover:scale-110 transition-transform duration-200`}
//         >
//           <IconComponent className='w-6 h-6 text-[#111316]' />
//         </div>
//         {!shouldReduceMotion && (
//           <motion.div
//             className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} opacity-20 blur-lg`}
//             variants={{ hover: { scale: 1.2, opacity: 0.4 } }}
//             transition={{ type: "spring", damping: 15, stiffness: 200 }}
//           />
//         )}
//       </motion.div>
//     );
//   }
// );
// HolographicIcon.displayName = "HolographicIcon";

// const ServiceCard = React.memo(
//   ({ service, gradient }: { service: Service; gradient: string }) => {
//     const shouldReduceMotion = useReducedMotion();

//     return (
//       <motion.div
//         initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
//         animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//         className='group/service flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-xl'
//       >
//         <div className='flex-shrink-0'>
//           <div
//             className={`p-2 rounded-xl bg-gradient-to-r ${gradient} group-hover/service:scale-110 transition-transform duration-200`}
//           >
//             <service.icon className='w-5 h-5 text-[#111316]' />
//           </div>
//         </div>
//         <div className='flex-1'>
//           <h4 className='text-white font-semibold text-lg group-hover/service:text-[#E7FF1A] transition-colors duration-200'>
//             {service.name}
//           </h4>
//           <p className='text-white/70 text-sm leading-relaxed'>
//             {service.description}
//           </p>
//         </div>
//       </motion.div>
//     );
//   }
// );
// ServiceCard.displayName = "ServiceCard";

// const CategoryCard = React.memo(
//   ({
//     category,
//     isExpanded,
//     onToggle,
//   }: {
//     category: ServiceCategory;
//     isExpanded: boolean;
//     onToggle: () => void;
//   }) => {
//     const shouldReduceMotion = useReducedMotion();

//     const smoothSpring = {
//       type: "spring" as const,
//       stiffness: 250,
//       damping: 25,
//     };

//     return (
//       <motion.div
//         layout
//         transition={shouldReduceMotion ? {} : smoothSpring}
//         className='group relative cursor-pointer'
//         onClick={onToggle}
//       >
//         {/* Glow effect - only on desktop */}
//         <div
//           className={`hidden md:block absolute inset-0 bg-gradient-to-r ${category.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl`}
//         />

//         <div
//           className={`
//             relative z-10 flex flex-col rounded-3xl border border-white/10
//             bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-300
//             ${isExpanded ? "p-8" : "p-6"}
//             hover:bg-white/10 hover:border-white/20
//           `}
//         >
//           <div className='flex items-center justify-between'>
//             <div className='flex items-center gap-6'>
//               <HolographicIcon
//                 IconComponent={category.icon}
//                 gradient={category.color}
//               />
//               <div>
//                 <h3 className='text-2xl md:text-3xl font-bold text-white group-hover:text-[#E7FF1A] transition-colors duration-200'>
//                   {category.title}
//                 </h3>
//                 <p className='text-white/80 text-sm md:text-base mt-2 leading-relaxed'>
//                   {category.description}
//                 </p>
//               </div>
//             </div>
//             <motion.div
//               animate={
//                 shouldReduceMotion ? {} : { rotate: isExpanded ? 180 : 0 }
//               }
//               transition={
//                 shouldReduceMotion ? {} : { duration: 0.3, ease: "easeOut" }
//               }
//               className={`p-2 rounded-xl bg-gradient-to-r ${category.color}`}
//             >
//               <ChevronDown className='w-5 h-5 text-[#111316]' />
//             </motion.div>
//           </div>

//           <AnimatePresence initial={false}>
//             {isExpanded && (
//               <motion.div
//                 key='content'
//                 initial={shouldReduceMotion ? {} : { opacity: 0, height: 0 }}
//                 animate={
//                   shouldReduceMotion ? {} : { opacity: 1, height: "auto" }
//                 }
//                 exit={shouldReduceMotion ? {} : { opacity: 0, height: 0 }}
//                 transition={
//                   shouldReduceMotion ? {} : { duration: 0.3, ease: "easeOut" }
//                 }
//                 className='overflow-hidden'
//               >
//                 <div className='space-y-4 mt-6 pt-6 border-t border-white/10'>
//                   {category.services.map((service, index) => (
//                     <motion.div
//                       key={service.name}
//                       initial={shouldReduceMotion ? {} : { opacity: 0, x: -15 }}
//                       animate={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
//                       transition={
//                         shouldReduceMotion
//                           ? {}
//                           : {
//                               type: "spring" as const,
//                               stiffness: 250,
//                               damping: 25,
//                               delay: index * 0.08,
//                             }
//                       }
//                     >
//                       <ServiceCard
//                         service={service}
//                         gradient={category.color}
//                       />
//                     </motion.div>
//                   ))}

//                   <motion.div
//                     initial={shouldReduceMotion ? {} : { opacity: 0, y: 15 }}
//                     animate={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
//                     transition={shouldReduceMotion ? {} : { delay: 0.3 }}
//                     className='pt-6 flex justify-center'
//                   >
//                     <motion.button
//                       className={`
//                         group/btn inline-flex items-center gap-3 bg-gradient-to-r ${category.color}
//                         text-[#111316] font-bold uppercase py-4 px-8 rounded-2xl
//                         transition-all duration-200 hover:shadow-lg hover:shadow-[#E7FF1A]/20
//                       `}
//                       whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
//                       whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
//                     >
//                       Get Started
//                       <ArrowRight className='w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200' />
//                     </motion.button>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>
//       </motion.div>
//     );
//   }
// );
// CategoryCard.displayName = "CategoryCard";

// // --- MAIN COMPONENT ---

// export function ServicesSection() {
//   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const shouldReduceMotion = useReducedMotion();

//   // Optimized spring config
//   const springConfig = { damping: 30, stiffness: 100, mass: 0.8 };
//   const dx = useSpring(
//     useTransform(mouseX, (val) => val * -0.3),
//     springConfig
//   );
//   const dy = useSpring(
//     useTransform(mouseY, (val) => val * -0.3),
//     springConfig
//   );

//   const handleMouseMove = useCallback(
//     (e: React.MouseEvent<HTMLDivElement>) => {
//       if (shouldReduceMotion) return;

//       const { clientX, clientY, currentTarget } = e;
//       const rect = currentTarget.getBoundingClientRect();
//       mouseX.set((clientX - rect.left) / rect.width - 0.5);
//       mouseY.set((clientY - rect.top) / rect.height - 0.5);
//     },
//     [mouseX, mouseY, shouldReduceMotion]
//   );

//   const handleMouseLeave = useCallback(() => {
//     if (shouldReduceMotion) return;
//     mouseX.set(0);
//     mouseY.set(0);
//   }, [mouseX, mouseY, shouldReduceMotion]);

//   const toggleCategory = useCallback((categoryId: string) => {
//     setExpandedCategory((prev) => (prev === categoryId ? null : categoryId));
//   }, []);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         containerRef.current &&
//         !containerRef.current.contains(event.target as Node)
//       ) {
//         setExpandedCategory(null);
//       }
//     };

//     if (expandedCategory !== null) {
//       document.addEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [expandedCategory]);

//   // Optimized animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: shouldReduceMotion ? 0 : 0.15,
//         delayChildren: shouldReduceMotion ? 0 : 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: shouldReduceMotion ? {} : { y: 20, opacity: 0 },
//     visible: shouldReduceMotion
//       ? {}
//       : {
//           y: 0,
//           opacity: 1,
//           transition: {
//             type: "spring",
//             stiffness: 120,
//             damping: 20,
//             mass: 0.8,
//           },
//         },
//   };

//   return (
//     <section
//       id='services'
//       className='relative w-full bg-[#111316] py-12 sm:py-16 lg:py-20 2xl:py-12 overflow-hidden'
//     >
//       {/* Background with gradient overlay */}
//       <div className='absolute inset-0 z-0'>
//         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30' />
//         {!shouldReduceMotion && (
//           <motion.div
//             className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
//             style={{ x: dx, y: dy }}
//           />
//         )}
//         <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
//       </div>

//       <div className='container mx-auto px-4 md:px-8 lg:px-12 relative z-10'>
//         <motion.div
//           variants={containerVariants}
//           initial='hidden'
//           whileInView='visible'
//           viewport={{ once: true, amount: 0.2, margin: "-100px" }}
//           className='max-w-6xl mx-auto'
//         >
//           {/* Header Section */}
//           <motion.div
//             variants={itemVariants}
//             className='text-center mb-12 sm:mb-16 2xl:mb-12'
//           >
//             {/* Badge */}
//             <motion.div
//               variants={itemVariants}
//               className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-6'
//             >
//               <Sparkles className='w-4 h-4 text-[#E7FF1A]' />
//               <span className='text-sm font-medium text-white/90'>
//                 Our Services
//               </span>
//             </motion.div>

//             <h2 className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white mb-6'>
//               FULL-SERVICE
//               <br />
//               <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
//                 DIGITAL SOLUTIONS
//               </span>
//             </h2>

//             <p className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-white/80 max-w-3xl mx-auto mb-8 sm:mb-10 2xl:mb-8'>
//               From concept to launch, we provide everything you need to build,
//               brand, and grow your digital presence. Click on any category to
//               explore our specialized services.
//             </p>

//             {/* Stats Section */}
//             <div className='flex flex-wrap justify-center gap-6 md:gap-8 2xl:gap-6'>
//               {[
//                 { number: "50+", label: "Projects Delivered" },
//                 { number: "3", label: "Service Categories" },
//                 { number: "100%", label: "Client Satisfaction" },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   variants={itemVariants}
//                   className='text-center'
//                 >
//                   <div className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#E7FF1A] to-violet-400 bg-clip-text text-transparent mb-2'>
//                     {stat.number}
//                   </div>
//                   <div className='text-white/60 text-sm uppercase tracking-wider'>
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Services Grid */}
//           <motion.div
//             ref={containerRef}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             className='space-y-6 lg:space-y-8 2xl:space-y-6'
//           >
//             {serviceCategories.map((category, index) => (
//               <motion.div
//                 key={category.id}
//                 variants={itemVariants}
//                 initial='hidden'
//                 whileInView='visible'
//                 viewport={{ once: true, amount: 0.2, margin: "-50px" }}
//                 transition={shouldReduceMotion ? {} : { delay: index * 0.15 }}
//               >
//                 <CategoryCard
//                   category={category}
//                   isExpanded={expandedCategory === category.id}
//                   onToggle={() => toggleCategory(category.id)}
//                 />
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  useReducedMotion,
  Variants, // Import Variants for explicit typing
  Transition, // Import Transition for explicit typing
} from "framer-motion";
import {
  Code,
  Palette,
  Search,
  Globe,
  Smartphone,
  Server,
  Brush,
  Package,
  Video,
  TrendingUp,
  Target,
  BarChart3,
  ChevronDown,
  Sparkles,
  ArrowRight,
  type LucideProps, // Import type LucideProps
} from "lucide-react";

// --- TYPE DEFINITIONS ---

interface Service {
  name: string;
  icon: React.ComponentType<LucideProps>;
  description: string;
}

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ComponentType<LucideProps>;
  description: string;
  services: Service[];
  color: string;
}

// --- DATA ---

const serviceCategories: ServiceCategory[] = [
  {
    id: "technology",
    title: "Technology & Development",
    icon: Code,
    description:
      "Full-stack development solutions that bring your digital vision to life.",
    services: [
      {
        name: "Web Development",
        icon: Globe,
        description: "Frontend & Backend solutions",
      },
      {
        name: "Mobile Apps",
        icon: Smartphone,
        description: "iOS & Android applications",
      },
      {
        name: "API Development",
        icon: Server,
        description: "Scalable backend services",
      },
    ],
    color: "from-[#E7FF1A] to-violet-400",
  },
  {
    id: "creative",
    title: "Creative & Design",
    icon: Palette,
    description:
      "Visual identity and creative assets that make your brand unforgettable.",
    services: [
      {
        name: "Branding",
        icon: Brush,
        description: "Logo, identity & brand guidelines",
      },
      {
        name: "Packaging Design",
        icon: Package,
        description: "Product packaging & labels",
      },
      {
        name: "Video Production",
        icon: Video,
        description: "Promotional & product videos",
      },
    ],
    color: "from-violet-400 to-cyan-400",
  },
  {
    id: "marketing",
    title: "Marketing & Strategy",
    icon: Search,
    description:
      "Growth and visibility solutions that drive real business results.",
    services: [
      {
        name: "SEO Optimization",
        icon: TrendingUp,
        description: "Search engine visibility",
      },
      {
        name: "Digital Advertising",
        icon: Target,
        description: "Targeted ad campaigns",
      },
      {
        name: "Analytics & Insights",
        icon: BarChart3,
        description: "Performance tracking",
      },
    ],
    color: "from-cyan-400 to-pink-400",
  },
];

// --- REUSABLE COMPONENTS ---

const HolographicIcon = React.memo(
  ({
    IconComponent,
    size = "w-12 h-12",
    gradient = "from-[#E7FF1A] to-violet-400",
  }: {
    IconComponent: React.ComponentType<LucideProps>;
    size?: string;
    gradient?: string;
  }) => {
    const shouldReduceMotion = useReducedMotion() ?? false; // Handle null case

    // Define transition for hover effect
    const hoverTransition: Transition = shouldReduceMotion
      ? { duration: 0.1 } // Quick transition for reduced motion
      : { type: "spring", damping: 15, stiffness: 200, mass: 0.8 }; // Full spring for motion

    return (
      <motion.div
        whileHover={shouldReduceMotion ? {} : "hover"} // Conditional whileHover
        className={`relative ${size} grid place-items-center`}
      >
        <div
          className={`p-3 rounded-xl bg-gradient-to-r ${gradient} ${shouldReduceMotion ? "" : "group-hover:scale-110"} transition-transform duration-200`}
        >
          <IconComponent className='w-6 h-6 text-[#111316]' />
        </div>
        {!shouldReduceMotion && (
          <motion.div
            className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} opacity-20 blur-lg`}
            variants={{ hover: { scale: 1.2, opacity: 0.4 } }}
            transition={hoverTransition} // Use defined transition
          />
        )}
      </motion.div>
    );
  }
);
HolographicIcon.displayName = "HolographicIcon";

const ServiceCard = React.memo(
  ({ service, gradient }: { service: Service; gradient: string }) => {
    const shouldReduceMotion = useReducedMotion() ?? false; // Handle null case

    return (
      <motion.div
        initial={
          shouldReduceMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: 15 }
        } // Explicit initial state
        animate={
          shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
        } // Explicit animate state
        transition={shouldReduceMotion ? { duration: 0.3 } : { duration: 0.3 }} // Conditional transition
        className='group/service flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-xl'
      >
        <div className='flex-shrink-0'>
          <div
            className={`p-2 rounded-xl bg-gradient-to-r ${gradient} ${shouldReduceMotion ? "" : "group-hover/service:scale-110"} transition-transform duration-200`}
          >
            <service.icon className='w-5 h-5 text-[#111316]' />
          </div>
        </div>
        <div className='flex-1'>
          <h4 className='text-white font-semibold text-lg group-hover/service:text-[#E7FF1A] transition-colors duration-200'>
            {service.name}
          </h4>
          <p className='text-white/70 text-sm leading-relaxed'>
            {service.description}
          </p>
        </div>
      </motion.div>
    );
  }
);
ServiceCard.displayName = "ServiceCard";

const CategoryCard = React.memo(
  ({
    category,
    isExpanded,
    onToggle,
  }: {
    category: ServiceCategory;
    isExpanded: boolean;
    onToggle: () => void;
  }) => {
    const shouldReduceMotion = useReducedMotion() ?? false; // Handle null case

    const smoothSpring: Transition = {
      // Explicitly type smoothSpring as Transition
      type: "spring",
      stiffness: 250,
      damping: 25,
      mass: 0.8, // Added mass for spring type
    };

    // Define transition for ChevronDown rotation
    const chevronTransition: Transition = shouldReduceMotion
      ? { duration: 0.3 }
      : { duration: 0.3, ease: "easeOut" };

    // Define transitions for expanded content
    const expandedContentTransition: Transition = shouldReduceMotion
      ? { duration: 0.3 }
      : { duration: 0.3, ease: "easeOut" };

    return (
      <motion.div
        layout
        transition={shouldReduceMotion ? { duration: 0.3 } : smoothSpring} // Conditional transition
        className='group relative cursor-pointer'
        onClick={onToggle}
      >
        {/* Glow effect - only on desktop */}
        <div
          className={`hidden md:block absolute inset-0 bg-gradient-to-r ${category.color} rounded-3xl opacity-0 ${shouldReduceMotion ? "" : "group-hover:opacity-20"} transition-opacity duration-300 blur-xl`}
        />

        <div
          className={`
            relative z-10 flex flex-col rounded-3xl border border-white/10
            bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-300
            ${isExpanded ? "p-8" : "p-6"}
            hover:bg-white/10 hover:border-white/20
          `}
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-6'>
              <HolographicIcon
                IconComponent={category.icon}
                gradient={category.color}
              />
              <div>
                <h3 className='text-2xl md:text-3xl font-bold text-white group-hover:text-[#E7FF1A] transition-colors duration-200'>
                  {category.title}
                </h3>
                <p className='text-white/80 text-sm md:text-base mt-2 leading-relaxed'>
                  {category.description}
                </p>
              </div>
            </div>
            <motion.div
              animate={
                shouldReduceMotion
                  ? { rotate: isExpanded ? 180 : 0 }
                  : { rotate: isExpanded ? 180 : 0 } // Explicit animate state
              }
              transition={chevronTransition} // Use defined transition
              className={`p-2 rounded-xl bg-gradient-to-r ${category.color}`}
            >
              <ChevronDown className='w-5 h-5 text-[#111316]' />
            </motion.div>
          </div>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                key='content'
                initial={
                  shouldReduceMotion
                    ? { opacity: 0, height: 0 }
                    : { opacity: 0, height: 0 }
                } // Explicit initial state
                animate={
                  shouldReduceMotion
                    ? { opacity: 1, height: "auto" }
                    : { opacity: 1, height: "auto" }
                } // Explicit animate state
                exit={
                  shouldReduceMotion
                    ? { opacity: 0, height: 0 }
                    : { opacity: 0, height: 0 }
                } // Explicit exit state
                transition={expandedContentTransition} // Use defined transition
                className='overflow-hidden'
              >
                <div className='space-y-4 mt-6 pt-6 border-t border-white/10'>
                  {category.services.map((service, index) => {
                    // Define transition for individual service cards
                    const serviceCardItemTransition: Transition =
                      shouldReduceMotion
                        ? { duration: 0.1 }
                        : {
                            type: "spring",
                            stiffness: 250,
                            damping: 25,
                            mass: 0.8, // Added mass for spring type
                            delay: index * 0.08,
                          };

                    return (
                      <motion.div
                        key={service.name}
                        initial={
                          shouldReduceMotion
                            ? { opacity: 0, x: 0 }
                            : { opacity: 0, x: -15 }
                        } // Explicit initial state
                        animate={
                          shouldReduceMotion
                            ? { opacity: 1, x: 0 }
                            : { opacity: 1, x: 0 }
                        } // Explicit animate state
                        transition={serviceCardItemTransition} // Use defined transition
                      >
                        <ServiceCard
                          service={service}
                          gradient={category.color}
                        />
                      </motion.div>
                    );
                  })}

                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0, y: 0 }
                        : { opacity: 0, y: 15 }
                    } // Explicit initial state
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1, y: 0 }
                        : { opacity: 1, y: 0 }
                    } // Explicit animate state
                    transition={
                      shouldReduceMotion ? { delay: 0.1 } : { delay: 0.3 }
                    } // Conditional delay
                    className='pt-6 flex justify-center'
                  >
                    <motion.button
                      className={`
                        group/btn inline-flex items-center gap-3 bg-gradient-to-r ${category.color}
                        text-[#111316] font-bold uppercase py-4 px-8 rounded-2xl
                        transition-all duration-200 hover:shadow-lg hover:shadow-[#E7FF1A]/20
                      `}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }} // Conditional whileHover
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }} // Conditional whileTap
                    >
                      Get Started
                      <ArrowRight className='w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200' />
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  }
);
CategoryCard.displayName = "CategoryCard";

// --- MAIN COMPONENT ---

export function ServicesSection() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion() ?? false; // Handle null case

  // Optimized spring config
  const springConfig = { damping: 30, stiffness: 100, mass: 0.8 };
  const dx = useSpring(
    useTransform(mouseX, (val) => val * -0.3),
    springConfig
  );
  const dy = useSpring(
    useTransform(mouseY, (val) => val * -0.3),
    springConfig
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion) return;

      const { clientX, clientY, currentTarget } = e;
      const rect = currentTarget.getBoundingClientRect();
      mouseX.set((clientX - rect.left) / rect.width - 0.5);
      mouseY.set((clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY, shouldReduceMotion]
  );

  const handleMouseLeave = useCallback(() => {
    if (shouldReduceMotion) return;
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY, shouldReduceMotion]);

  const toggleCategory = useCallback((categoryId: string) => {
    setExpandedCategory((prev) => (prev === categoryId ? null : categoryId));
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setExpandedCategory(null);
      }
    };

    if (expandedCategory !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [expandedCategory]);

  // Optimized animation variants - Explicitly typed as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  // Explicitly typed as Variants.
  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 20, opacity: 0 }, // Explicit initial state
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0 } // Explicit visible state
      : {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 20,
            mass: 0.8,
          },
        },
  };

  return (
    <section
      id='services'
      className='relative w-full bg-[#111316] py-12 sm:py-16 lg:py-20 2xl:py-12 overflow-hidden'
    >
      {/* Background with gradient overlay */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30' />
        {!shouldReduceMotion && (
          <motion.div
            className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
            style={{ x: dx, y: dy }}
          />
        )}
        <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
      </div>

      <div className='container mx-auto px-4 md:px-8 lg:px-12 relative z-10'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2, margin: "-100px" }}
          className='max-w-6xl mx-auto'
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className='text-center mb-12 sm:mb-16 2xl:mb-12'
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-6'
            >
              <Sparkles className='w-4 h-4 text-[#E7FF1A]' />
              <span className='text-sm font-medium text-white/90'>
                Our Services
              </span>
            </motion.div>

            <h2 className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white mb-6'>
              FULL-SERVICE
              <br />
              <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                DIGITAL SOLUTIONS
              </span>
            </h2>

            <p className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-white/80 max-w-3xl mx-auto mb-8 sm:mb-10 2xl:mb-8'>
              From concept to launch, we provide everything you need to build,
              brand, and grow your digital presence. Click on any category to
              explore our specialized services.
            </p>

            {/* Stats Section */}
            <div className='flex flex-wrap justify-center gap-6 md:gap-8 2xl:gap-6'>
              {[
                { number: "50+", label: "Projects Delivered" },
                { number: "3", label: "Service Categories" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label || index} // Added index as fallback key
                  variants={itemVariants}
                  className='text-center'
                >
                  <div className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#E7FF1A] to-violet-400 bg-clip-text text-transparent mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-white/60 text-sm uppercase tracking-wider'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className='space-y-6 lg:space-y-8 2xl:space-y-6'
          >
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.2, margin: "-50px" }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.1 }
                    : { delay: index * 0.15 }
                } // Conditional transition
              >
                <CategoryCard
                  category={category}
                  isExpanded={expandedCategory === category.id}
                  onToggle={() => toggleCategory(category.id)}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
