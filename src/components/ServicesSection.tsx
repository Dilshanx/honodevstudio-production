// // "use client";

// // import React, { useState, useCallback, useRef, useEffect } from "react";
// // import {
// //   motion,
// //   useMotionValue,
// //   useSpring,
// //   useTransform,
// //   AnimatePresence,
// //   useReducedMotion,
// //   Variants,
// //   Transition,
// // } from "framer-motion";
// // import {
// //   Code,
// //   Palette,
// //   Search,
// //   Globe,
// //   Smartphone,
// //   Server,
// //   Brush,
// //   Package,
// //   Video,
// //   TrendingUp,
// //   Target,
// //   BarChart3,
// //   ChevronDown,
// //   Sparkles,
// //   ArrowRight,
// //   type LucideProps,
// // } from "lucide-react";
// // import Image from "next/image";

// // // --- TYPE DEFINITIONS ---
// // interface Service {
// //   name: string;
// //   icon: React.ComponentType<LucideProps>;
// //   description: {
// //     mobile: string;
// //     desktop: string;
// //   };
// // }

// // interface ServiceCategory {
// //   id: string;
// //   title: string;
// //   icon: React.ComponentType<LucideProps>;
// //   description: {
// //     mobile: string;
// //     desktop: string;
// //   };
// //   services: Service[];
// //   color: string;
// // }

// // // --- DATA ---
// // const serviceCategories: ServiceCategory[] = [
// //   {
// //     id: "technology",
// //     title: "Technology & Development",
// //     icon: Code,
// //     description: {
// //       mobile: "Full-stack development solutions for your digital vision.",
// //       desktop:
// //         "Full-stack development solutions that bring your digital vision to life.",
// //     },
// //     services: [
// //       {
// //         name: "Web Development",
// //         icon: Globe,
// //         description: {
// //           mobile: "Frontend & Backend solutions",
// //           desktop: "Frontend & Backend solutions",
// //         },
// //       },
// //       {
// //         name: "Mobile Apps",
// //         icon: Smartphone,
// //         description: {
// //           mobile: "iOS & Android applications",
// //           desktop: "iOS & Android applications",
// //         },
// //       },
// //       {
// //         name: "API Development",
// //         icon: Server,
// //         description: {
// //           mobile: "Scalable backend services",
// //           desktop: "Scalable backend services",
// //         },
// //       },
// //     ],
// //     color: "from-[#E7FF1A] to-violet-400",
// //   },
// //   {
// //     id: "creative",
// //     title: "Creative & Design",
// //     icon: Palette,
// //     description: {
// //       mobile: "Visual identity and creative assets for your brand.",
// //       desktop:
// //         "Visual identity and creative assets that make your brand unforgettable.",
// //     },
// //     services: [
// //       {
// //         name: "Branding",
// //         icon: Brush,
// //         description: {
// //           mobile: "Logo, identity & brand guidelines",
// //           desktop: "Logo, identity & brand guidelines",
// //         },
// //       },
// //       {
// //         name: "Packaging Design",
// //         icon: Package,
// //         description: {
// //           mobile: "Product packaging & labels",
// //           desktop: "Product packaging & labels",
// //         },
// //       },
// //       {
// //         name: "Video Production",
// //         icon: Video,
// //         description: {
// //           mobile: "Promotional & product videos",
// //           desktop: "Promotional & product videos",
// //         },
// //       },
// //     ],
// //     color: "from-violet-400 to-cyan-400",
// //   },
// //   {
// //     id: "marketing",
// //     title: "Marketing & Strategy",
// //     icon: Search,
// //     description: {
// //       mobile: "Growth and visibility solutions for real results.",
// //       desktop:
// //         "Growth and visibility solutions that drive real business results.",
// //     },
// //     services: [
// //       {
// //         name: "SEO Optimization",
// //         icon: TrendingUp,
// //         description: {
// //           mobile: "Search engine visibility",
// //           desktop: "Search engine visibility",
// //         },
// //       },
// //       {
// //         name: "Digital Advertising",
// //         icon: Target,
// //         description: {
// //           mobile: "Targeted ad campaigns",
// //           desktop: "Targeted ad campaigns",
// //         },
// //       },
// //       {
// //         name: "Analytics & Insights",
// //         icon: BarChart3,
// //         description: {
// //           mobile: "Performance tracking",
// //           desktop: "Performance tracking",
// //         },
// //       },
// //     ],
// //     color: "from-cyan-400 to-pink-400",
// //   },
// // ];

// // // --- REUSABLE COMPONENTS ---
// // const HolographicIcon = React.memo(
// //   ({
// //     IconComponent,
// //     size = "w-12 h-12",
// //     gradient = "from-[#E7FF1A] to-violet-400",
// //   }: {
// //     IconComponent: React.ComponentType<LucideProps>;
// //     size?: string;
// //     gradient?: string;
// //   }) => {
// //     const shouldReduceMotion = useReducedMotion() ?? false;
// //     const hoverTransition: Transition = shouldReduceMotion
// //       ? { duration: 0.1 }
// //       : { type: "spring", damping: 15, stiffness: 200, mass: 0.8 };
// //     return (
// //       <motion.div
// //         whileHover={shouldReduceMotion ? {} : "hover"}
// //         className={`relative ${size} grid place-items-center`}
// //       >
// //         <div
// //           className={`p-3 rounded-xl bg-gradient-to-r ${gradient} ${shouldReduceMotion ? "" : "group-hover:scale-110"} transition-transform duration-200`}
// //         >
// //           <IconComponent className='w-6 h-6 text-[#111316]' />
// //         </div>
// //         {!shouldReduceMotion && (
// //           <motion.div
// //             className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} opacity-20 blur-lg`}
// //             variants={{ hover: { scale: 1.2, opacity: 0.4 } }}
// //             transition={hoverTransition}
// //           />
// //         )}
// //       </motion.div>
// //     );
// //   }
// // );
// // HolographicIcon.displayName = "HolographicIcon";

// // const ServiceCard = React.memo(
// //   ({ service, gradient }: { service: Service; gradient: string }) => {
// //     const shouldReduceMotion = useReducedMotion() ?? false;
// //     return (
// //       <motion.div
// //         initial={
// //           shouldReduceMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: 15 }
// //         }
// //         animate={
// //           shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
// //         }
// //         transition={shouldReduceMotion ? { duration: 0.3 } : { duration: 0.3 }}
// //         className='group/service flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-xl'
// //       >
// //         <div className='flex-shrink-0'>
// //           <div
// //             className={`p-2 rounded-xl bg-gradient-to-r ${gradient} ${shouldReduceMotion ? "" : "group-hover/service:scale-110"} transition-transform duration-200`}
// //           >
// //             <service.icon className='w-5 h-5 text-[#111316]' />
// //           </div>
// //         </div>
// //         <div className='flex-1'>
// //           <h4 className='text-white font-semibold text-lg group-hover/service:text-[#E7FF1A] transition-colors duration-200'>
// //             {service.name}
// //           </h4>
// //           <p className='text-white/70 text-sm leading-relaxed'>
// //             <span className='block md:hidden'>
// //               {service.description.mobile}
// //             </span>
// //             <span className='hidden md:block'>
// //               {service.description.desktop}
// //             </span>
// //           </p>
// //         </div>
// //       </motion.div>
// //     );
// //   }
// // );
// // ServiceCard.displayName = "ServiceCard";

// // const CategoryCard = React.memo(
// //   ({
// //     category,
// //     isExpanded,
// //     onToggle,
// //   }: {
// //     category: ServiceCategory;
// //     isExpanded: boolean;
// //     onToggle: () => void;
// //   }) => {
// //     const shouldReduceMotion = useReducedMotion() ?? false;
// //     const smoothSpring: Transition = {
// //       type: "spring",
// //       stiffness: 250,
// //       damping: 25,
// //       mass: 0.8,
// //     };
// //     const chevronTransition: Transition = shouldReduceMotion
// //       ? { duration: 0.3 }
// //       : { duration: 0.3, ease: "easeOut" };
// //     const expandedContentTransition: Transition = shouldReduceMotion
// //       ? { duration: 0.3 }
// //       : { duration: 0.3, ease: "easeOut" };

// //     return (
// //       <motion.div
// //         layout
// //         transition={shouldReduceMotion ? { duration: 0.3 } : smoothSpring}
// //         className='group relative cursor-pointer'
// //         onClick={onToggle}
// //       >
// //         <div
// //           className={`hidden md:block absolute inset-0 bg-gradient-to-r ${category.color} rounded-3xl opacity-0 ${shouldReduceMotion ? "" : "group-hover:opacity-20"} transition-opacity duration-300 blur-xl`}
// //         />
// //         <div
// //           className={`relative z-10 flex flex-col rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-300 ${isExpanded ? "p-8" : "p-6"} hover:bg-white/10 hover:border-white/20`}
// //         >
// //           <div className='flex items-center justify-between'>
// //             <div className='flex items-center gap-6'>
// //               <HolographicIcon
// //                 IconComponent={category.icon}
// //                 gradient={category.color}
// //               />
// //               <div>
// //                 <h3 className='text-2xl md:text-3xl font-bold text-white group-hover:text-[#E7FF1A] transition-colors duration-200'>
// //                   {category.title}
// //                 </h3>
// //                 <p className='text-white/80 text-sm md:text-base mt-2 leading-relaxed'>
// //                   <span className='block md:hidden'>
// //                     {category.description.mobile}
// //                   </span>
// //                   <span className='hidden md:block'>
// //                     {category.description.desktop}
// //                   </span>
// //                 </p>
// //               </div>
// //             </div>
// //             <motion.div
// //               animate={
// //                 shouldReduceMotion
// //                   ? { rotate: isExpanded ? 180 : 0 }
// //                   : { rotate: isExpanded ? 180 : 0 }
// //               }
// //               transition={chevronTransition}
// //               className={`p-2 rounded-xl bg-gradient-to-r ${category.color}`}
// //             >
// //               <ChevronDown className='w-5 h-5 text-[#111316]' />
// //             </motion.div>
// //           </div>
// //           <AnimatePresence initial={false}>
// //             {isExpanded && (
// //               <motion.div
// //                 key='content'
// //                 initial={
// //                   shouldReduceMotion
// //                     ? { opacity: 0, height: 0 }
// //                     : { opacity: 0, height: 0 }
// //                 }
// //                 animate={
// //                   shouldReduceMotion
// //                     ? { opacity: 1, height: "auto" }
// //                     : { opacity: 1, height: "auto" }
// //                 }
// //                 exit={
// //                   shouldReduceMotion
// //                     ? { opacity: 0, height: 0 }
// //                     : { opacity: 0, height: 0 }
// //                 }
// //                 transition={expandedContentTransition}
// //                 className='overflow-hidden'
// //               >
// //                 <div className='space-y-4 mt-6 pt-6 border-t border-white/10'>
// //                   {category.services.map((service, index) => {
// //                     const serviceCardItemTransition: Transition =
// //                       shouldReduceMotion
// //                         ? { duration: 0.1 }
// //                         : {
// //                             type: "spring",
// //                             stiffness: 250,
// //                             damping: 25,
// //                             mass: 0.8,
// //                             delay: index * 0.08,
// //                           };
// //                     return (
// //                       <motion.div
// //                         key={service.name}
// //                         initial={
// //                           shouldReduceMotion
// //                             ? { opacity: 0, x: 0 }
// //                             : { opacity: 0, x: -15 }
// //                         }
// //                         animate={
// //                           shouldReduceMotion
// //                             ? { opacity: 1, x: 0 }
// //                             : { opacity: 1, x: 0 }
// //                         }
// //                         transition={serviceCardItemTransition}
// //                       >
// //                         <ServiceCard
// //                           service={service}
// //                           gradient={category.color}
// //                         />
// //                       </motion.div>
// //                     );
// //                   })}
// //                   <motion.div
// //                     initial={
// //                       shouldReduceMotion
// //                         ? { opacity: 0, y: 0 }
// //                         : { opacity: 0, y: 15 }
// //                     }
// //                     animate={
// //                       shouldReduceMotion
// //                         ? { opacity: 1, y: 0 }
// //                         : { opacity: 1, y: 0 }
// //                     }
// //                     transition={
// //                       shouldReduceMotion ? { delay: 0.1 } : { delay: 0.3 }
// //                     }
// //                     className='pt-6 flex justify-center'
// //                   >
// //                     <motion.button
// //                       className={`group/btn inline-flex items-center gap-3 bg-gradient-to-r ${category.color} text-[#111316] font-bold uppercase py-4 px-8 rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-[#E7FF1A]/20`}
// //                       whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
// //                       whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
// //                     >
// //                       Get Started
// //                       <ArrowRight className='w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200' />
// //                     </motion.button>
// //                   </motion.div>
// //                 </div>
// //               </motion.div>
// //             )}
// //           </AnimatePresence>
// //         </div>
// //       </motion.div>
// //     );
// //   }
// // );
// // CategoryCard.displayName = "CategoryCard";

// // // --- MAIN COMPONENT ---
// // export function ServicesSection() {
// //   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const mouseX = useMotionValue(0);
// //   const mouseY = useMotionValue(0);
// //   const shouldReduceMotion = useReducedMotion() ?? false;

// //   const springConfig = { damping: 30, stiffness: 100, mass: 0.8 };
// //   const dx = useSpring(
// //     useTransform(mouseX, (val) => val * -0.3),
// //     springConfig
// //   );
// //   const dy = useSpring(
// //     useTransform(mouseY, (val) => val * -0.3),
// //     springConfig
// //   );

// //   const handleMouseMove = useCallback(
// //     (e: React.MouseEvent<HTMLDivElement>) => {
// //       if (shouldReduceMotion) return;
// //       const { clientX, clientY, currentTarget } = e;
// //       const rect = currentTarget.getBoundingClientRect();
// //       mouseX.set((clientX - rect.left) / rect.width - 0.5);
// //       mouseY.set((clientY - rect.top) / rect.height - 0.5);
// //     },
// //     [mouseX, mouseY, shouldReduceMotion]
// //   );

// //   const handleMouseLeave = useCallback(() => {
// //     if (shouldReduceMotion) return;
// //     mouseX.set(0);
// //     mouseY.set(0);
// //   }, [mouseX, mouseY, shouldReduceMotion]);

// //   const toggleCategory = useCallback((categoryId: string) => {
// //     setExpandedCategory((prev) => (prev === categoryId ? null : categoryId));
// //   }, []);

// //   useEffect(() => {
// //     const handleClickOutside = (event: MouseEvent) => {
// //       if (
// //         containerRef.current &&
// //         !containerRef.current.contains(event.target as Node)
// //       ) {
// //         setExpandedCategory(null);
// //       }
// //     };
// //     if (expandedCategory !== null) {
// //       document.addEventListener("mousedown", handleClickOutside);
// //     }
// //     return () => {
// //       document.removeEventListener("mousedown", handleClickOutside);
// //     };
// //   }, [expandedCategory]);

// //   const containerVariants: Variants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: shouldReduceMotion ? 0 : 0.15,
// //         delayChildren: shouldReduceMotion ? 0 : 0.2,
// //       },
// //     },
// //   };

// //   const itemVariants: Variants = {
// //     hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 20, opacity: 0 },
// //     visible: shouldReduceMotion
// //       ? { opacity: 1, y: 0 }
// //       : {
// //           y: 0,
// //           opacity: 1,
// //           transition: {
// //             type: "spring",
// //             stiffness: 120,
// //             damping: 20,
// //             mass: 0.8,
// //           },
// //         },
// //   };

// //   return (
// //     <section
// //       id='services'
// //       className='relative w-full bg-[#111316] py-12 sm:py-16 lg:py-20 2xl:py-12 pb-20 xl:pb-12 overflow-hidden'
// //     >
// //       <div className='absolute inset-0 z-0'>
// //         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30' />
// //         {!shouldReduceMotion && (
// //           <motion.div
// //             className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
// //             style={{ x: dx, y: dy }}
// //           />
// //         )}
// //         <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
// //       </div>
// //       <div className='container mx-auto px-4 md:px-8 lg:px-12 relative z-10'>
// //         <motion.div
// //           variants={containerVariants}
// //           initial='hidden'
// //           whileInView='visible'
// //           viewport={{ once: true, amount: 0.1 }}
// //           ref={containerRef}
// //           onMouseMove={handleMouseMove}
// //           onMouseLeave={handleMouseLeave}
// //           className='max-w-6xl mx-auto'
// //         >
// //           {/* Image Section - Now visible on all screen sizes */}
// //           <motion.div
// //             variants={itemVariants}
// //             className='flex justify-center mb-8 lg:mb-12 2xl:mb-8'
// //           >
// //             <motion.div
// //               className='relative group'
// //               whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
// //               transition={{ type: "spring", stiffness: 300, damping: 30 }}
// //             >
// //               <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-125' />
// //               <div className='relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 2xl:w-72 2xl:h-72'>
// //                 <Image
// //                   src='/images/services.svg'
// //                   alt='Our Services'
// //                   width={320}
// //                   height={320}
// //                   className='w-full h-full object-contain drop-shadow-2xl'
// //                   priority
// //                 />
// //               </div>
// //             </motion.div>
// //           </motion.div>

// //           <motion.div
// //             variants={itemVariants}
// //             className='text-center mb-8 sm:mb-12 lg:mb-16 2xl:mb-12'
// //           >
// //             <motion.div
// //               variants={itemVariants}
// //               className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-4 lg:mb-6 2xl:mb-4'
// //             >
// //               <Sparkles className='w-4 h-4 text-[#E7FF1A]' />
// //               <span className='text-sm font-medium text-white/90'>
// //                 Our Services
// //               </span>
// //             </motion.div>
// //             <h2 className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white mb-4 lg:mb-6 2xl:mb-4'>
// //               COMPREHENSIVE
// //               <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
// //                 SOLUTIONS
// //               </span>
// //             </h2>
// //             <p className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-12 2xl:mb-8'>
// //               <span className='block md:hidden'>
// //                 From design to development, we deliver complete digital
// //                 solutions.
// //               </span>
// //               <span className='hidden md:block'>
// //                 From concept to completion, we offer a full spectrum of digital
// //                 services designed to elevate your brand and drive growth.
// //               </span>
// //             </p>
// //           </motion.div>

// //           <div className='space-y-6 lg:space-y-8 2xl:space-y-6'>
// //             {serviceCategories.map((category, index) => (
// //               <motion.div
// //                 key={category.id}
// //                 variants={itemVariants}
// //                 initial='hidden'
// //                 animate='visible'
// //                 transition={{ delay: index * 0.1 }}
// //               >
// //                 <CategoryCard
// //                   category={category}
// //                   isExpanded={expandedCategory === category.id}
// //                   onToggle={() => toggleCategory(category.id)}
// //                 />
// //               </motion.div>
// //             ))}
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }
// "use client";

// import React, { useState, useCallback, useRef, useEffect } from "react";
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   AnimatePresence,
//   useReducedMotion,
//   Variants,
//   Transition,
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
// import Image from "next/image";

// // --- TYPE DEFINITIONS ---
// interface Service {
//   name: string;
//   icon: React.ComponentType<LucideProps>;
//   description: {
//     mobile: string;
//     desktop: string;
//   };
// }

// interface ServiceCategory {
//   id: string;
//   title: string;
//   icon: React.ComponentType<LucideProps>;
//   description: {
//     mobile: string;
//     desktop: string;
//   };
//   services: Service[];
//   color: string;
// }

// // --- DATA ---
// const serviceCategories: ServiceCategory[] = [
//   {
//     id: "technology",
//     title: "Technology & Development",
//     icon: Code,
//     description: {
//       mobile: "Full-stack solutions for your digital vision.",
//       desktop:
//         "Full-stack development solutions that bring your digital vision to life.",
//     },
//     services: [
//       {
//         name: "Web Development",
//         icon: Globe,
//         description: {
//           mobile: "Frontend & Backend solutions",
//           desktop: "Frontend & Backend solutions",
//         },
//       },
//       {
//         name: "Mobile Apps",
//         icon: Smartphone,
//         description: {
//           mobile: "iOS & Android applications",
//           desktop: "iOS & Android applications",
//         },
//       },
//       {
//         name: "API Development",
//         icon: Server,
//         description: {
//           mobile: "Scalable backend services",
//           desktop: "Scalable backend services",
//         },
//       },
//     ],
//     color: "from-[#E7FF1A] to-violet-400",
//   },
//   {
//     id: "creative",
//     title: "Creative & Design",
//     icon: Palette,
//     description: {
//       mobile: "Visual identity and assets for your brand.",
//       desktop:
//         "Visual identity and creative assets that make your brand unforgettable.",
//     },
//     services: [
//       {
//         name: "Branding",
//         icon: Brush,
//         description: {
//           mobile: "Logo, identity & brand guidelines",
//           desktop: "Logo, identity & brand guidelines",
//         },
//       },
//       {
//         name: "Packaging Design",
//         icon: Package,
//         description: {
//           mobile: "Product packaging & labels",
//           desktop: "Product packaging & labels",
//         },
//       },
//       {
//         name: "Video Production",
//         icon: Video,
//         description: {
//           mobile: "Promotional & product videos",
//           desktop: "Promotional & product videos",
//         },
//       },
//     ],
//     color: "from-violet-400 to-cyan-400",
//   },
//   {
//     id: "marketing",
//     title: "Marketing & Strategy",
//     icon: Search,
//     description: {
//       mobile: "Growth and visibility for real results.",
//       desktop:
//         "Growth and visibility solutions that drive real business results.",
//     },
//     services: [
//       {
//         name: "SEO Optimization",
//         icon: TrendingUp,
//         description: {
//           mobile: "Search engine visibility",
//           desktop: "Search engine visibility",
//         },
//       },
//       {
//         name: "Digital Advertising",
//         icon: Target,
//         description: {
//           mobile: "Targeted ad campaigns",
//           desktop: "Targeted ad campaigns",
//         },
//       },
//       {
//         name: "Analytics & Insights",
//         icon: BarChart3,
//         description: {
//           mobile: "Performance tracking",
//           desktop: "Performance tracking",
//         },
//       },
//     ],
//     color: "from-cyan-400 to-pink-400",
//   },
// ];

// // --- REUSABLE COMPONENTS ---
// const HolographicIcon = React.memo(
//   ({
//     IconComponent,
//     size = "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12",
//     gradient = "from-[#E7FF1A] to-violet-400",
//   }: {
//     IconComponent: React.ComponentType<LucideProps>;
//     size?: string;
//     gradient?: string;
//   }) => {
//     const shouldReduceMotion = useReducedMotion() ?? false;
//     const hoverTransition: Transition = shouldReduceMotion
//       ? { duration: 0.1 }
//       : { type: "spring", damping: 15, stiffness: 200, mass: 0.8 };
//     return (
//       <motion.div
//         whileHover={shouldReduceMotion ? {} : "hover"}
//         className={`relative ${size} grid place-items-center flex-shrink-0`}
//       >
//         <div
//           className={`p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${gradient} ${shouldReduceMotion ? "" : "group-hover:scale-110"} transition-transform duration-200`}
//         >
//           <IconComponent className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#111316]' />
//         </div>
//         {!shouldReduceMotion && (
//           <motion.div
//             className={`absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r ${gradient} opacity-20 blur-lg`}
//             variants={{ hover: { scale: 1.2, opacity: 0.4 } }}
//             transition={hoverTransition}
//           />
//         )}
//       </motion.div>
//     );
//   }
// );
// HolographicIcon.displayName = "HolographicIcon";

// const ServiceCard = React.memo(
//   ({ service, gradient }: { service: Service; gradient: string }) => {
//     const shouldReduceMotion = useReducedMotion() ?? false;
//     return (
//       <motion.div
//         initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.3 }}
//         className='group/service flex items-center gap-2 sm:gap-3 md:gap-4 p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-xl'
//       >
//         <div className='flex-shrink-0'>
//           <div
//             className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-r ${gradient} ${shouldReduceMotion ? "" : "group-hover/service:scale-110"} transition-transform duration-200`}
//           >
//             <service.icon className='w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#111316]' />
//           </div>
//         </div>
//         <div className='flex-1 min-w-0'>
//           <h4 className='text-white font-semibold text-sm sm:text-base md:text-lg group-hover/service:text-[#E7FF1A] transition-colors duration-200 truncate'>
//             {service.name}
//           </h4>
//           <p className='text-white/70 text-xs sm:text-sm leading-relaxed line-clamp-2'>
//             <span className='block sm:hidden'>
//               {service.description.mobile}
//             </span>
//             <span className='hidden sm:block'>
//               {service.description.desktop}
//             </span>
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
//     const shouldReduceMotion = useReducedMotion() ?? false;
//     const smoothSpring: Transition = {
//       type: "spring",
//       stiffness: 250,
//       damping: 30,
//       mass: 0.9,
//     };
//     const contentTransition: Transition = { duration: 0.3, ease: "easeOut" };

//     return (
//       <motion.div
//         layout
//         transition={shouldReduceMotion ? { duration: 0.3 } : smoothSpring}
//         className='group relative cursor-pointer'
//         onClick={onToggle}
//       >
//         <div
//           className={`hidden md:block absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl sm:rounded-3xl opacity-0 ${shouldReduceMotion ? "" : "group-hover:opacity-20"} transition-opacity duration-300 blur-xl`}
//         />
//         <div
//           className={`relative z-10 flex flex-col rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-300 p-3 sm:p-4 md:p-6 ${isExpanded ? "md:p-8" : ""} hover:bg-white/10 hover:border-white/20`}
//         >
//           <div className='flex flex-col gap-3 sm:gap-4'>
//             <div className='flex items-start sm:items-center gap-3 sm:gap-4 md:gap-6'>
//               <HolographicIcon
//                 IconComponent={category.icon}
//                 gradient={category.color}
//               />
//               <div className='flex-1 min-w-0'>
//                 <h3 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white group-hover:text-[#E7FF1A] transition-colors duration-200 leading-tight'>
//                   {category.title}
//                 </h3>
//                 <p className='text-white/80 text-xs sm:text-sm md:text-base mt-1 sm:mt-2 leading-relaxed'>
//                   <span className='block sm:hidden'>
//                     {category.description.mobile}
//                   </span>
//                   <span className='hidden sm:block'>
//                     {category.description.desktop}
//                   </span>
//                 </p>
//               </div>
//               <motion.div
//                 animate={{ rotate: isExpanded ? 180 : 0 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//                 className={`flex-shrink-0 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-r ${category.color}`}
//               >
//                 <ChevronDown className='w-4 h-4 sm:w-5 sm:h-5 text-[#111316]' />
//               </motion.div>
//             </div>
//           </div>
//           <AnimatePresence initial={false}>
//             {isExpanded && (
//               <motion.div
//                 key='content'
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={contentTransition}
//                 className='overflow-hidden'
//               >
//                 <div className='space-y-2 sm:space-y-3 md:space-y-4 mt-3 sm:mt-4 md:mt-6 pt-3 sm:pt-4 md:pt-6 border-t border-white/10'>
//                   {category.services.map((service, index) => (
//                     <motion.div
//                       key={service.name}
//                       initial={
//                         shouldReduceMotion
//                           ? { opacity: 0 }
//                           : { opacity: 0, x: -15 }
//                       }
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{
//                         type: "spring",
//                         stiffness: 250,
//                         damping: 25,
//                         delay: index * 0.08,
//                       }}
//                     >
//                       <ServiceCard
//                         service={service}
//                         gradient={category.color}
//                       />
//                     </motion.div>
//                   ))}
//                   <motion.div
//                     initial={
//                       shouldReduceMotion
//                         ? { opacity: 0 }
//                         : { opacity: 0, y: 15 }
//                     }
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.3 }}
//                     className='pt-3 sm:pt-4 md:pt-6 flex justify-center'
//                   >
//                     <motion.button
//                       className={`group/btn inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r ${category.color} text-[#111316] font-bold uppercase py-2.5 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-xl sm:rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-[#E7FF1A]/20 text-sm sm:text-base`}
//                       whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
//                       whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
//                     >
//                       Get Started
//                       <ArrowRight className='w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:translate-x-1 transition-transform duration-200' />
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
//   const shouldReduceMotion = useReducedMotion() ?? false;

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

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: shouldReduceMotion ? 0 : 0.15,
//         delayChildren: shouldReduceMotion ? 0 : 0.2,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: shouldReduceMotion ? { opacity: 0 } : { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 120, damping: 20, mass: 0.8 },
//     },
//   };

//   return (
//     <section
//       id='services'
//       className='relative w-full bg-[#111316] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden'
//     >
//       <div className='absolute inset-0 z-0'>
//         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2rem_2rem] opacity-30' />
//         {!shouldReduceMotion && (
//           <motion.div
//             className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
//             style={{ x: dx, y: dy }}
//           />
//         )}
//         <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
//       </div>
//       <div className='container mx-auto px-3 sm:px-4 md:px-8 relative z-10'>
//         <motion.div
//           variants={containerVariants}
//           initial='hidden'
//           whileInView='visible'
//           viewport={{ once: true, amount: 0.1 }}
//           ref={containerRef}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className='max-w-6xl mx-auto'
//         >
//           <motion.div
//             variants={itemVariants}
//             className='flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12'
//           >
//             <motion.div
//               className='relative group'
//               whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
//               transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             >
//               <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-125' />
//               <div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64'>
//                 <Image
//                   src='/images/services.svg'
//                   alt='Our Services'
//                   fill
//                   className='object-contain drop-shadow-2xl'
//                   priority
//                   sizes='(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 224px, 256px'
//                 />
//               </div>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             variants={itemVariants}
//             className='text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16'
//           >
//             <motion.div
//               variants={itemVariants}
//               className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-3 sm:mb-4'
//             >
//               <Sparkles className='w-3 h-3 sm:w-4 sm:h-4 text-[#E7FF1A]' />
//               <span className='text-xs sm:text-sm font-medium text-white/90'>
//                 Our Services
//               </span>
//             </motion.div>
//             <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white mb-3 sm:mb-4 px-2'>
//               <span className='block sm:inline'>COMPREHENSIVE</span>
//               <span className='block sm:inline bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
//                 SOLUTIONS
//               </span>
//             </h2>
//             <p className='text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/80 max-w-4xl mx-auto px-2'>
//               From concept to completion, we offer a full spectrum of digital
//               services designed to elevate your brand and drive growth.
//             </p>
//           </motion.div>

//           <div className='space-y-3 sm:space-y-4 md:space-y-6'>
//             {serviceCategories.map((category, index) => (
//               <motion.div
//                 key={category.id}
//                 variants={itemVariants}
//                 initial='hidden'
//                 animate='visible'
//                 transition={{ delay: 0.2 + index * 0.1 }}
//               >
//                 <CategoryCard
//                   category={category}
//                   isExpanded={expandedCategory === category.id}
//                   onToggle={() => toggleCategory(category.id)}
//                 />
//               </motion.div>
//             ))}
//           </div>
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
  Variants,
  Transition,
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
  type LucideProps,
} from "lucide-react";
import Image from "next/image";

// --- TYPE DEFINITIONS ---
interface Service {
  name: string;
  icon: React.ComponentType<LucideProps>;
  description: {
    mobile: string;
    desktop: string;
  };
}

interface ServiceCategory {
  id: string;
  title: string;
  icon: React.ComponentType<LucideProps>;
  description: {
    mobile: string;
    desktop: string;
  };
  services: Service[];
  color: string;
}

// --- DATA ---
const serviceCategories: ServiceCategory[] = [
  {
    id: "technology",
    title: "Technology & Development",
    icon: Code,
    description: {
      mobile: "Full-stack solutions for your digital vision.",
      desktop:
        "Full-stack development solutions that bring your digital vision to life.",
    },
    services: [
      {
        name: "Web Development",
        icon: Globe,
        description: {
          mobile: "Frontend & Backend solutions",
          desktop: "Frontend & Backend solutions",
        },
      },
      {
        name: "Mobile Apps",
        icon: Smartphone,
        description: {
          mobile: "iOS & Android applications",
          desktop: "iOS & Android applications",
        },
      },
      {
        name: "API Development",
        icon: Server,
        description: {
          mobile: "Scalable backend services",
          desktop: "Scalable backend services",
        },
      },
    ],
    color: "from-[#E7FF1A] to-violet-400",
  },
  {
    id: "creative",
    title: "Creative & Design",
    icon: Palette,
    description: {
      mobile: "Visual identity and assets for your brand.",
      desktop:
        "Visual identity and creative assets that make your brand unforgettable.",
    },
    services: [
      {
        name: "Branding",
        icon: Brush,
        description: {
          mobile: "Logo, identity & brand guidelines",
          desktop: "Logo, identity & brand guidelines",
        },
      },
      {
        name: "Packaging Design",
        icon: Package,
        description: {
          mobile: "Product packaging & labels",
          desktop: "Product packaging & labels",
        },
      },
      {
        name: "Video Production",
        icon: Video,
        description: {
          mobile: "Promotional & product videos",
          desktop: "Promotional & product videos",
        },
      },
    ],
    color: "from-violet-400 to-cyan-400",
  },
  {
    id: "marketing",
    title: "Marketing & Strategy",
    icon: Search,
    description: {
      mobile: "Growth and visibility for real results.",
      desktop:
        "Growth and visibility solutions that drive real business results.",
    },
    services: [
      {
        name: "SEO Optimization",
        icon: TrendingUp,
        description: {
          mobile: "Search engine visibility",
          desktop: "Search engine visibility",
        },
      },
      {
        name: "Digital Advertising",
        icon: Target,
        description: {
          mobile: "Targeted ad campaigns",
          desktop: "Targeted ad campaigns",
        },
      },
      {
        name: "Analytics & Insights",
        icon: BarChart3,
        description: {
          mobile: "Performance tracking",
          desktop: "Performance tracking",
        },
      },
    ],
    color: "from-cyan-400 to-pink-400",
  },
];

// --- REUSABLE COMPONENTS ---
const HolographicIcon = React.memo(
  ({
    IconComponent,
    size = "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12",
    gradient = "from-[#E7FF1A] to-violet-400",
  }: {
    IconComponent: React.ComponentType<LucideProps>;
    size?: string;
    gradient?: string;
  }) => {
    const shouldReduceMotion = useReducedMotion() ?? false;
    const hoverTransition: Transition = shouldReduceMotion
      ? { duration: 0.1 }
      : { type: "spring", damping: 15, stiffness: 200, mass: 0.8 };
    return (
      <motion.div
        whileHover={shouldReduceMotion ? {} : "hover"}
        className={`relative ${size} grid place-items-center flex-shrink-0`}
      >
        <div
          className={`p-1.5 sm:p-2 md:p-3 rounded-lg sm:rounded-xl bg-gradient-to-r ${gradient} ${shouldReduceMotion ? "" : "group-hover:scale-110"} transition-transform duration-200`}
        >
          <IconComponent className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#111316]' />
        </div>
        {!shouldReduceMotion && (
          <motion.div
            className={`absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r ${gradient} opacity-20 blur-lg`}
            variants={{ hover: { scale: 1.2, opacity: 0.4 } }}
            transition={hoverTransition}
          />
        )}
      </motion.div>
    );
  }
);
HolographicIcon.displayName = "HolographicIcon";

const ServiceCard = React.memo(
  ({ service, gradient }: { service: Service; gradient: string }) => {
    const shouldReduceMotion = useReducedMotion() ?? false;
    return (
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className='group/service flex items-center gap-2 sm:gap-3 md:gap-4 p-2.5 sm:p-3 md:p-4 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200 backdrop-blur-xl'
      >
        <div className='flex-shrink-0'>
          <div
            className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-r ${gradient} ${shouldReduceMotion ? "" : "group-hover/service:scale-110"} transition-transform duration-200`}
          >
            <service.icon className='w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#111316]' />
          </div>
        </div>
        <div className='flex-1 min-w-0'>
          <h4
            className='text-white font-semibold group-hover/service:text-[#E7FF1A] transition-colors duration-200 truncate'
            style={{
              fontSize: "clamp(0.9rem, 2.2vw + 0.2rem, 1.15rem)",
            }}
          >
            {service.name}
          </h4>
          <p
            className='text-white/70 leading-relaxed line-clamp-2'
            style={{
              fontSize: "clamp(0.75rem, 1.8vw + 0.1rem, 0.95rem)",
              lineHeight: "1.5",
            }}
          >
            <span className='block sm:hidden'>
              {service.description.mobile}
            </span>
            <span className='hidden sm:block'>
              {service.description.desktop}
            </span>
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
    const shouldReduceMotion = useReducedMotion() ?? false;
    const smoothSpring: Transition = {
      type: "spring",
      stiffness: 250,
      damping: 30,
      mass: 0.9,
    };
    const contentTransition: Transition = { duration: 0.3, ease: "easeOut" };

    return (
      <motion.div
        layout
        transition={shouldReduceMotion ? { duration: 0.3 } : smoothSpring}
        className='group relative cursor-pointer'
        onClick={onToggle}
      >
        <div
          className={`hidden md:block absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl sm:rounded-3xl opacity-0 ${shouldReduceMotion ? "" : "group-hover:opacity-20"} transition-opacity duration-300 blur-xl`}
        />
        <div
          className={`relative z-10 flex flex-col rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl transition-all duration-300 p-3 sm:p-4 md:p-6 ${isExpanded ? "md:p-8" : ""} hover:bg-white/10 hover:border-white/20`}
        >
          <div className='flex flex-col gap-3 sm:gap-4'>
            <div className='flex items-start sm:items-center gap-3 sm:gap-4 md:gap-6'>
              <HolographicIcon
                IconComponent={category.icon}
                gradient={category.color}
              />
              <div className='flex-1 min-w-0'>
                <h3
                  className='font-bold text-white group-hover:text-[#E7FF1A] transition-colors duration-200 leading-tight'
                  style={{
                    fontSize: "clamp(1.25rem, 3.5vw + 0.5rem, 2rem)",
                    lineHeight: "1.1",
                  }}
                >
                  {category.title}
                </h3>
                <p
                  className='text-white/80 leading-relaxed'
                  style={{
                    fontSize: "clamp(0.85rem, 2vw + 0.2rem, 1.1rem)",
                    lineHeight: "1.6",
                    marginTop: "clamp(0.25rem, 1vh, 0.5rem)",
                  }}
                >
                  <span className='block sm:hidden'>
                    {category.description.mobile}
                  </span>
                  <span className='hidden sm:block'>
                    {category.description.desktop}
                  </span>
                </p>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`flex-shrink-0 p-1.5 sm:p-2 rounded-lg sm:rounded-xl bg-gradient-to-r ${category.color}`}
              >
                <ChevronDown className='w-4 h-4 sm:w-5 sm:h-5 text-[#111316]' />
              </motion.div>
            </div>
          </div>
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                key='content'
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={contentTransition}
                className='overflow-hidden'
              >
                <div className='space-y-2 sm:space-y-3 md:space-y-4 mt-3 sm:mt-4 md:mt-6 pt-3 sm:pt-4 md:pt-6 border-t border-white/10'>
                  {category.services.map((service, index) => (
                    <motion.div
                      key={service.name}
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0 }
                          : { opacity: 0, x: -15 }
                      }
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 250,
                        damping: 25,
                        delay: index * 0.08,
                      }}
                    >
                      <ServiceCard
                        service={service}
                        gradient={category.color}
                      />
                    </motion.div>
                  ))}
                  <motion.div
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 15 }
                    }
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className='pt-3 sm:pt-4 md:pt-6 flex justify-center'
                  >
                    <motion.button
                      className={`group/btn inline-flex items-center gap-[clamp(0.5rem,2vw,0.75rem)] bg-gradient-to-r ${category.color} text-[#111316] font-bold uppercase rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#E7FF1A]/20 relative overflow-hidden`}
                      style={{
                        padding:
                          "clamp(0.75rem, 2.5vw, 1rem) clamp(1.5rem, 5vw, 2rem)",
                        fontSize: "clamp(0.85rem, 2vw + 0.1rem, 1rem)",
                      }}
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    >
                      {/* Animated background */}
                      {!shouldReduceMotion && (
                        <motion.div
                          className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.6 }}
                        />
                      )}
                      <span className='relative z-10'>Get Started</span>
                      <ArrowRight
                        className='group-hover/btn:translate-x-1 transition-transform duration-200 relative z-10'
                        style={{
                          width: "clamp(16px, 3.5vw, 20px)",
                          height: "clamp(16px, 3.5vw, 20px)",
                        }}
                      />
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
  const shouldReduceMotion = useReducedMotion() ?? false;

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

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 20, mass: 0.8 },
    },
  };

  return (
    <section
      id='services'
      className='relative w-full bg-[#111316] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden'
    >
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2rem_2rem] opacity-30' />
        {!shouldReduceMotion && (
          <motion.div
            className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
            style={{ x: dx, y: dy }}
          />
        )}
        <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
      </div>
      <div className='container mx-auto px-3 sm:px-4 md:px-8 relative z-10'>
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className='max-w-6xl mx-auto'
        >
          <motion.div
            variants={itemVariants}
            className='flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12'
          >
            <motion.div
              className='relative group'
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-125' />
              <div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64'>
                <Image
                  src='/images/services.svg'
                  alt='Our Services'
                  fill
                  className='object-contain drop-shadow-2xl'
                  priority
                  sizes='(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 224px, 256px'
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16'
          >
            {/* Badge with enhanced hover effect - UPDATED SIZE */}
            <motion.div
              variants={itemVariants}
              className='inline-flex items-center gap-[clamp(0.4rem,1.5vw,0.75rem)] bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-[clamp(1rem,3vh,2rem)]'
              style={{
                padding: `clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.75rem)`,
              }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Sparkles
                className='text-[#E7FF1A]'
                style={{
                  width: "clamp(14px, 3.5vw, 20px)",
                  height: "clamp(14px, 3.5vw, 20px)",
                }}
              />
              <span
                className='font-medium text-white/90'
                style={{
                  fontSize: "clamp(0.8rem, 2.2vw, 1.1rem)",
                }}
              >
                Our Services
              </span>
            </motion.div>

            {/* Title with enhanced text reveal - UPDATED SIZE */}
            <h2
              className='font-bold leading-[0.85] text-white mb-[clamp(1rem,3vh,2rem)]'
              style={{
                fontSize: "clamp(2rem, 8vw + 0.5rem, min(3.5rem, 10vw))",
                lineHeight: "0.9",
                letterSpacing: "-0.02em",
              }}
            >
              <span className='block sm:inline'>COMPREHENSIVE</span>{" "}
              <span className='block sm:inline bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                SOLUTIONS
              </span>
            </h2>

            {/* Subtitle with staggered animation - UPDATED SIZE */}
            <motion.p
              className='leading-relaxed text-white/85 max-w-4xl mx-auto px-2'
              style={{
                fontSize: "clamp(1rem, 2.8vw + 0.4rem, 1.3rem)",
                lineHeight: "1.6",
              }}
              variants={itemVariants}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              From concept to completion, we offer a full spectrum of digital
              services designed to elevate your brand and drive growth.
            </motion.p>
          </motion.div>

          <div className='space-y-3 sm:space-y-4 md:space-y-6'>
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                variants={itemVariants}
                initial='hidden'
                animate='visible'
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <CategoryCard
                  category={category}
                  isExpanded={expandedCategory === category.id}
                  onToggle={() => toggleCategory(category.id)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
