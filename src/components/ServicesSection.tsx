// // // // // // "use client";

// // // // // // import React from "react";
// // // // // // import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// // // // // // import { Globe, Smartphone, ShoppingCart, Palette, Search, Shield, Code, Server } from "lucide-react";

// // // // // // // --- HolographicIcon Component (Included for self-containment) ---
// // // // // // const HolographicIcon = ({ IconComponent }: { IconComponent: React.ComponentType<any> }) => (
// // // // // //   <motion.div whileHover="hover" className="relative w-16 h-16 grid place-items-center">
// // // // // //     <IconComponent
// // // // // //       className="relative z-10 h-8 w-8 text-white"
// // // // // //       style={{ filter: `drop-shadow(0 0 2px rgba(167, 139, 250, 0.9)) drop-shadow(0 0 8px rgba(167, 139, 250, 0.6)) drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))` }}
// // // // // //     />
// // // // // //     <motion.div
// // // // // //       className="absolute inset-0 rounded-full bg-purple-500/40 blur-lg"
// // // // // //       variants={{ hover: { scale: 1.2, opacity: 0.7 } }}
// // // // // //       transition={{ type: "spring", damping: 15, stiffness: 200 }}
// // // // // //     />
// // // // // //     <motion.div
// // // // // //       className="absolute inset-0"
// // // // // //       variants={{ hover: { x: [0, -1, 1, -1, 0], y: [0, 1, -1, 1, 0], scale: 1.1 } }}
// // // // // //       transition={{ duration: 0.3 }}
// // // // // //     >
// // // // // //       <IconComponent className="absolute inset-0 h-full w-full text-blue-400/50 opacity-50" />
// // // // // //     </motion.div>
// // // // // //   </motion.div>
// // // // // // );

// // // // // // const services = [
// // // // // //   { icon: Globe, title: "Web Applications" },
// // // // // //   { icon: Smartphone, title: "Mobile-First Design" },
// // // // // //   { icon: ShoppingCart, title: "E-Commerce" },
// // // // // //   { icon: Palette, title: "UI/UX Design" },
// // // // // //   { icon: Search, title: "SEO & Performance" },
// // // // // //   { icon: Shield, title: "Security Audits" },
// // // // // //   { icon: Code, title: "API Development" },
// // // // // //   { icon: Server, title: "DevOps & Hosting" },
// // // // // // ];

// // // // // // const KineticGrid = () => {
// // // // // //   const mouseX = useMotionValue(0);
// // // // // //   const mouseY = useMotionValue(0);
// // // // // //   const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
// // // // // //   const dx = useSpring(useTransform(mouseX, (val) => val * -1), springConfig);
// // // // // //   const dy = useSpring(useTransform(mouseY, (val) => val * -1), springConfig);

// // // // // //   const handleMouseMove = (e: React.MouseEvent) => {
// // // // // //     const { clientX, clientY, currentTarget } = e;
// // // // // //     const rect = currentTarget.getBoundingClientRect();
// // // // // //     const { width, height } = rect;
// // // // // //     mouseX.set((clientX / width) - 0.5);
// // // // // //     mouseY.set((clientY / height) - 0.5);
// // // // // //   };

// // // // // //   const handleMouseLeave = () => {
// // // // // //     mouseX.set(0);
// // // // // //     mouseY.set(0);
// // // // // //   };

// // // // // //   return (
// // // // // //     <motion.div
// // // // // //       onMouseMove={handleMouseMove}
// // // // // //       onMouseLeave={handleMouseLeave}
// // // // // //       className="relative h-[500px] w-full overflow-hidden"
// // // // // //     >
// // // // // //       <motion.div
// // // // // //         className="grid grid-cols-4 gap-8 p-8"
// // // // // //         style={{ width: "200%", height: "200%", x: dx, y: dy }}
// // // // // //       >
// // // // // //         {[...services, ...services].map((service, index) => (
// // // // // //           <ServiceCard key={index} service={service} />
// // // // // //         ))}
// // // // // //       </motion.div>
// // // // // //     </motion.div>
// // // // // //   );
// // // // // // };

// // // // // // const ServiceCard = ({ service }: { service: typeof services[0] }) => (
// // // // // //   <motion.div
// // // // // //     whileHover={{ scale: 1.05, y: -10 }}
// // // // // //     transition={{ type: "spring", stiffness: 300 }}
// // // // // //     className="group relative flex h-52 w-full cursor-pointer flex-col items-center justify-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-lg backdrop-blur-md"
// // // // // //   >
// // // // // //     <HolographicIcon IconComponent={service.icon} />
// // // // // //     <h3 className="text-xl font-bold text-white mt-2">{service.title}</h3>
// // // // // //     <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-purple-500" />
// // // // // //   </motion.div>
// // // // // // );

// // // // // // export function ServicesSection() {
// // // // // //   return (
// // // // // //     <section id="services" className="relative w-full py-24 sm:py-32 overflow-hidden">
// // // // // //       <div className="absolute inset-0 z-0">
// // // // // //         <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />
// // // // // //       </div>
// // // // // //       <div className="container mx-auto px-4 relative z-10">
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0, y: 20 }}
// // // // // //           whileInView={{ opacity: 1, y: 0 }}
// // // // // //           transition={{ duration: 0.5, ease: "easeOut" }}
// // // // // //           viewport={{ once: true, amount: 0.5 }}
// // // // // //           className="text-center mb-16"
// // // // // //         >
// // // // // //           <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400">
// // // // // //             Our Capabilities
// // // // // //           </h2>
// // // // // //           <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
// // // // // //             A complete suite of digital services designed to build, launch, and grow your online presence from the ground up.
// // // // // //           </p>
// // // // // //         </motion.div>
// // // // // //       </div>
// // // // // //       <div className="relative">
// // // // // //         <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-gray-950 to-transparent" />
// // // // // //         <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-gray-950 to-transparent" />
// // // // // //         <KineticGrid />
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // "use client";
// // // // // import React, { useState } from "react";
// // // // // import {
// // // // //   Code,
// // // // //   Palette,
// // // // //   Search,
// // // // //   Globe,
// // // // //   Smartphone,
// // // // //   Server,
// // // // //   Brush,
// // // // //   Package,
// // // // //   Video,
// // // // //   TrendingUp,
// // // // //   Target,
// // // // //   BarChart3,
// // // // //   ChevronDown,
// // // // //   ExternalLink,
// // // // // } from "lucide-react";

// // // // // // Enhanced HolographicIcon Component
// // // // // const HolographicIcon = ({
// // // // //   IconComponent,
// // // // //   size = "w-12 h-12",
// // // // // }: {
// // // // //   IconComponent: React.ComponentType<any>;
// // // // //   size?: string;
// // // // // }) => {
// // // // //   const [isHovered, setIsHovered] = useState(false);

// // // // //   return (
// // // // //     <div
// // // // //       onMouseEnter={() => setIsHovered(true)}
// // // // //       onMouseLeave={() => setIsHovered(false)}
// // // // //       className={`relative ${size} grid place-items-center transition-all duration-300`}
// // // // //     >
// // // // //       <IconComponent
// // // // //         className='relative z-10 h-8 w-8 text-white transition-all duration-300'
// // // // //         style={{
// // // // //           filter: `drop-shadow(0 0 2px rgba(167, 139, 250, 0.9))
// // // // //                    drop-shadow(0 0 8px rgba(167, 139, 250, 0.6))
// // // // //                    drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))`,
// // // // //         }}
// // // // //       />
// // // // //       <div
// // // // //         className={`absolute inset-0 rounded-full bg-purple-500/40 blur-lg transition-all duration-300 ${
// // // // //           isHovered ? "scale-125 opacity-70" : "scale-100 opacity-40"
// // // // //         }`}
// // // // //       />
// // // // //       <div
// // // // //         className={`absolute inset-0 transition-all duration-300 ${
// // // // //           isHovered ? "scale-110" : "scale-100"
// // // // //         }`}
// // // // //       >
// // // // //         <IconComponent className='absolute inset-0 h-full w-full text-blue-400/50' />
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // Service category data structure
// // // // // const serviceCategories = [
// // // // //   {
// // // // //     id: "technology",
// // // // //     title: "Technology & Development",
// // // // //     icon: Code,
// // // // //     description:
// // // // //       "Full-stack development solutions that bring your digital vision to life",
// // // // //     services: [
// // // // //       {
// // // // //         name: "Web Development",
// // // // //         icon: Globe,
// // // // //         description: "Frontend & Backend solutions",
// // // // //       },
// // // // //       {
// // // // //         name: "Mobile Apps",
// // // // //         icon: Smartphone,
// // // // //         description: "iOS & Android applications",
// // // // //       },
// // // // //       {
// // // // //         name: "API Development",
// // // // //         icon: Server,
// // // // //         description: "Scalable backend services",
// // // // //       },
// // // // //     ],
// // // // //     color: "from-blue-500 to-cyan-500",
// // // // //   },
// // // // //   {
// // // // //     id: "creative",
// // // // //     title: "Creative & Design",
// // // // //     icon: Palette,
// // // // //     description:
// // // // //       "Visual identity and creative assets that make your brand unforgettable",
// // // // //     services: [
// // // // //       {
// // // // //         name: "Branding",
// // // // //         icon: Brush,
// // // // //         description: "Logo, identity & brand guidelines",
// // // // //       },
// // // // //       {
// // // // //         name: "Packaging Design",
// // // // //         icon: Package,
// // // // //         description: "Product packaging & labels",
// // // // //       },
// // // // //       {
// // // // //         name: "Video Production",
// // // // //         icon: Video,
// // // // //         description: "Promotional & product videos",
// // // // //       },
// // // // //     ],
// // // // //     color: "from-purple-500 to-pink-500",
// // // // //   },
// // // // //   {
// // // // //     id: "marketing",
// // // // //     title: "Marketing & Strategy",
// // // // //     icon: Search,
// // // // //     description:
// // // // //       "Growth and visibility solutions that drive real business results",
// // // // //     services: [
// // // // //       {
// // // // //         name: "SEO Optimization",
// // // // //         icon: TrendingUp,
// // // // //         description: "Search engine visibility",
// // // // //       },
// // // // //       {
// // // // //         name: "Digital Advertising",
// // // // //         icon: Target,
// // // // //         description: "Targeted ad campaigns",
// // // // //       },
// // // // //       {
// // // // //         name: "Analytics & Insights",
// // // // //         icon: BarChart3,
// // // // //         description: "Performance tracking",
// // // // //       },
// // // // //     ],
// // // // //     color: "from-green-500 to-emerald-500",
// // // // //   },
// // // // // ];

// // // // // // Individual Service Card Component
// // // // // const ServiceCard = ({
// // // // //   service,
// // // // //   categoryColor,
// // // // // }: {
// // // // //   service: (typeof serviceCategories)[0]["services"][0];
// // // // //   categoryColor: string;
// // // // // }) => (
// // // // //   <div className='flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors'>
// // // // //     <div className='flex-shrink-0'>
// // // // //       <HolographicIcon IconComponent={service.icon} size='w-10 h-10' />
// // // // //     </div>
// // // // //     <div className='flex-1'>
// // // // //       <h4 className='text-white font-semibold text-lg'>{service.name}</h4>
// // // // //       <p className='text-gray-300 text-sm'>{service.description}</p>
// // // // //     </div>
// // // // //   </div>
// // // // // );

// // // // // // Main Category Card Component
// // // // // const CategoryCard = ({
// // // // //   category,
// // // // //   isExpanded,
// // // // //   onToggle,
// // // // // }: {
// // // // //   category: (typeof serviceCategories)[0];
// // // // //   isExpanded: boolean;
// // // // //   onToggle: () => void;
// // // // // }) => {
// // // // //   const [isHovered, setIsHovered] = useState(false);

// // // // //   return (
// // // // //     <div
// // // // //       className='group relative cursor-pointer'
// // // // //       onClick={onToggle}
// // // // //       onMouseEnter={() => setIsHovered(true)}
// // // // //       onMouseLeave={() => setIsHovered(false)}
// // // // //     >
// // // // //       {/* Gradient Border Effect - Now positioned behind content */}
// // // // //       <div
// // // // //         className={`
// // // // //           absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none
// // // // //           bg-gradient-to-r ${category.color} p-[1px]
// // // // //           ${isHovered ? "opacity-30" : "opacity-0"}
// // // // //         `}
// // // // //       >
// // // // //         <div className='w-full h-full rounded-2xl bg-gray-900/95' />
// // // // //       </div>

// // // // //       <div
// // // // //         className={`
// // // // //           relative flex flex-col rounded-2xl border border-white/10 bg-white/5
// // // // //           backdrop-blur-md shadow-lg transition-all duration-300 z-10
// // // // //           ${isExpanded ? "p-8" : "p-6"}
// // // // //           ${isHovered ? "hover:bg-white/8 hover:border-white/30" : ""}
// // // // //         `}
// // // // //       >
// // // // //         {/* Header Section */}
// // // // //         <div className='flex items-center justify-between mb-4'>
// // // // //           <div className='flex items-center gap-4'>
// // // // //             <HolographicIcon IconComponent={category.icon} />
// // // // //             <div>
// // // // //               <h3 className='text-2xl font-bold text-white'>
// // // // //                 {category.title}
// // // // //               </h3>
// // // // //               <p className='text-gray-300 text-sm mt-1'>
// // // // //                 {category.description}
// // // // //               </p>
// // // // //             </div>
// // // // //           </div>
// // // // //           <div
// // // // //             className={`transition-transform duration-300 ${
// // // // //               isExpanded ? "rotate-180" : "rotate-0"
// // // // //             }`}
// // // // //           >
// // // // //             <ChevronDown className='w-6 h-6 text-gray-400' />
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Expandable Services Section */}
// // // // //         {isExpanded && (
// // // // //           <div className='space-y-3 mt-4 pt-4 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300'>
// // // // //             {category.services.map((service, index) => (
// // // // //               <div
// // // // //                 key={service.name}
// // // // //                 style={{ animationDelay: `${index * 100}ms` }}
// // // // //               >
// // // // //                 <ServiceCard service={service} categoryColor={category.color} />
// // // // //               </div>
// // // // //             ))}

// // // // //             {/* CTA Button */}
// // // // //             <div className='pt-4'>
// // // // //               <button
// // // // //                 className={`
// // // // //                 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl
// // // // //                 bg-gradient-to-r ${category.color} text-white font-semibold
// // // // //                 hover:shadow-lg hover:scale-105 transition-all duration-200
// // // // //               `}
// // // // //               >
// // // // //                 Get Started
// // // // //                 <ExternalLink className='w-4 h-4' />
// // // // //               </button>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // Enhanced Services Section Component
// // // // // export function ServicesSection() {
// // // // //   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

// // // // //   const toggleCategory = (categoryId: string) => {
// // // // //     setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
// // // // //   };

// // // // //   return (
// // // // //     <section
// // // // //       id='services'
// // // // //       className='relative w-full py-24 sm:py-32 overflow-hidden bg-gray-900'
// // // // //     >
// // // // //       {/* Background Effects */}
// // // // //       <div className='absolute inset-0 z-0'>
// // // // //         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50' />
// // // // //         <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent' />
// // // // //       </div>

// // // // //       <div className='container mx-auto px-4 relative z-10'>
// // // // //         {/* Header Section */}
// // // // //         <div className='text-center mb-16'>
// // // // //           <h2 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-4'>
// // // // //             Full-Service Digital Solutions
// // // // //           </h2>
// // // // //           <p className='text-lg text-gray-300 max-w-3xl mx-auto mb-8'>
// // // // //             From concept to launch, we provide everything you need to build,
// // // // //             brand, and grow your digital presence. Click on any category to
// // // // //             explore our specialized services.
// // // // //           </p>

// // // // //           {/* Stats or Trust Indicators */}
// // // // //           <div className='flex justify-center gap-8 text-sm text-gray-400'>
// // // // //             <div className='text-center'>
// // // // //               <div className='text-2xl font-bold text-white'>50+</div>
// // // // //               <div>Projects Delivered</div>
// // // // //             </div>
// // // // //             <div className='text-center'>
// // // // //               <div className='text-2xl font-bold text-white'>3</div>
// // // // //               <div>Service Categories</div>
// // // // //             </div>
// // // // //             <div className='text-center'>
// // // // //               <div className='text-2xl font-bold text-white'>100%</div>
// // // // //               <div>Client Satisfaction</div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Services Grid */}
// // // // //         <div className='max-w-6xl mx-auto'>
// // // // //           <div className='grid gap-8 md:gap-12'>
// // // // //             {serviceCategories.map((category, index) => (
// // // // //               <div
// // // // //                 key={category.id}
// // // // //                 style={{ animationDelay: `${index * 200}ms` }}
// // // // //               >
// // // // //                 <CategoryCard
// // // // //                   category={category}
// // // // //                   isExpanded={expandedCategory === category.id}
// // // // //                   onToggle={() => toggleCategory(category.id)}
// // // // //                 />
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Bottom CTA Section */}
// // // // //         <div className='text-center mt-16'>
// // // // //           <p className='text-gray-300 mb-6'>
// // // // //             Ready to transform your digital presence?
// // // // //           </p>
// // // // //           <button className='px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200'>
// // // // //             Start Your Project
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import React, { useState } from "react";
// // // // import {
// // // //   motion,
// // // //   useMotionValue,
// // // //   useSpring,
// // // //   useTransform,
// // // //   AnimatePresence,
// // // // } from "framer-motion";
// // // // import {
// // // //   Code,
// // // //   Palette,
// // // //   Search,
// // // //   Globe,
// // // //   Smartphone,
// // // //   Server,
// // // //   Brush,
// // // //   Package,
// // // //   Video,
// // // //   TrendingUp,
// // // //   Target,
// // // //   BarChart3,
// // // //   ChevronDown,
// // // //   ExternalLink,
// // // // } from "lucide-react";

// // // // // Enhanced HolographicIcon Component
// // // // const HolographicIcon = ({
// // // //   IconComponent,
// // // //   size = "w-12 h-12",
// // // // }: {
// // // //   IconComponent: React.ComponentType<any>;
// // // //   size?: string;
// // // // }) => (
// // // //   <motion.div
// // // //     whileHover='hover'
// // // //     className={`relative ${size} grid place-items-center`}
// // // //   >
// // // //     <IconComponent
// // // //       className='relative z-10 h-8 w-8 text-white'
// // // //       style={{
// // // //         filter: `drop-shadow(0 0 2px rgba(167, 139, 250, 0.9))
// // // //                  drop-shadow(0 0 8px rgba(167, 139, 250, 0.6))
// // // //                  drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))`,
// // // //       }}
// // // //     />
// // // //     <motion.div
// // // //       className='absolute inset-0 rounded-full bg-purple-500/40 blur-lg'
// // // //       variants={{ hover: { scale: 1.2, opacity: 0.7 } }}
// // // //       transition={{ type: "spring", damping: 15, stiffness: 200 }}
// // // //     />
// // // //     <motion.div
// // // //       className='absolute inset-0'
// // // //       variants={{
// // // //         hover: { x: [0, -1, 1, -1, 0], y: [0, 1, -1, 1, 0], scale: 1.1 },
// // // //       }}
// // // //       transition={{ duration: 0.3 }}
// // // //     >
// // // //       <IconComponent className='absolute inset-0 h-full w-full text-blue-400/50' />
// // // //     </motion.div>
// // // //   </motion.div>
// // // // );

// // // // // Service category data structure
// // // // const serviceCategories = [
// // // //   {
// // // //     id: "technology",
// // // //     title: "Technology & Development",
// // // //     icon: Code,
// // // //     description:
// // // //       "Full-stack development solutions that bring your digital vision to life",
// // // //     services: [
// // // //       {
// // // //         name: "Web Development",
// // // //         icon: Globe,
// // // //         description: "Frontend & Backend solutions",
// // // //       },
// // // //       {
// // // //         name: "Mobile Apps",
// // // //         icon: Smartphone,
// // // //         description: "iOS & Android applications",
// // // //       },
// // // //       {
// // // //         name: "API Development",
// // // //         icon: Server,
// // // //         description: "Scalable backend services",
// // // //       },
// // // //     ],
// // // //     color: "from-blue-500 to-cyan-500",
// // // //   },
// // // //   {
// // // //     id: "creative",
// // // //     title: "Creative & Design",
// // // //     icon: Palette,
// // // //     description:
// // // //       "Visual identity and creative assets that make your brand unforgettable",
// // // //     services: [
// // // //       {
// // // //         name: "Branding",
// // // //         icon: Brush,
// // // //         description: "Logo, identity & brand guidelines",
// // // //       },
// // // //       {
// // // //         name: "Packaging Design",
// // // //         icon: Package,
// // // //         description: "Product packaging & labels",
// // // //       },
// // // //       {
// // // //         name: "Video Production",
// // // //         icon: Video,
// // // //         description: "Promotional & product videos",
// // // //       },
// // // //     ],
// // // //     color: "from-purple-500 to-pink-500",
// // // //   },
// // // //   {
// // // //     id: "marketing",
// // // //     title: "Marketing & Strategy",
// // // //     icon: Search,
// // // //     description:
// // // //       "Growth and visibility solutions that drive real business results",
// // // //     services: [
// // // //       {
// // // //         name: "SEO Optimization",
// // // //         icon: TrendingUp,
// // // //         description: "Search engine visibility",
// // // //       },
// // // //       {
// // // //         name: "Digital Advertising",
// // // //         icon: Target,
// // // //         description: "Targeted ad campaigns",
// // // //       },
// // // //       {
// // // //         name: "Analytics & Insights",
// // // //         icon: BarChart3,
// // // //         description: "Performance tracking",
// // // //       },
// // // //     ],
// // // //     color: "from-green-500 to-emerald-500",
// // // //   },
// // // // ];

// // // // // Individual Service Card Component
// // // // const ServiceCard = ({
// // // //   service,
// // // //   categoryColor,
// // // // }: {
// // // //   service: (typeof serviceCategories)[0]["services"][0];
// // // //   categoryColor: string;
// // // // }) => (
// // // //   <motion.div
// // // //     initial={{ opacity: 0, y: 20 }}
// // // //     animate={{ opacity: 1, y: 0 }}
// // // //     className='flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors'
// // // //   >
// // // //     <div className='flex-shrink-0'>
// // // //       <HolographicIcon IconComponent={service.icon} size='w-10 h-10' />
// // // //     </div>
// // // //     <div className='flex-1'>
// // // //       <h4 className='text-white font-semibold text-lg'>{service.name}</h4>
// // // //       <p className='text-gray-300 text-sm'>{service.description}</p>
// // // //     </div>
// // // //   </motion.div>
// // // // );

// // // // // Main Category Card Component
// // // // const CategoryCard = ({
// // // //   category,
// // // //   isExpanded,
// // // //   onToggle,
// // // // }: {
// // // //   category: (typeof serviceCategories)[0];
// // // //   isExpanded: boolean;
// // // //   onToggle: () => void;
// // // // }) => (
// // // //   <motion.div
// // // //     layout
// // // //     className='group relative cursor-pointer'
// // // //     onClick={onToggle}
// // // //   >
// // // //     <motion.div
// // // //       layout
// // // //       className={`
// // // //         relative flex flex-col rounded-2xl border border-white/10 bg-white/5
// // // //         backdrop-blur-md shadow-lg transition-all duration-300
// // // //         ${isExpanded ? "p-8" : "p-6"}
// // // //         hover:bg-white/10 hover:border-white/20
// // // //       `}
// // // //     >
// // // //       {/* Header Section */}
// // // //       <div className='flex items-center justify-between mb-4'>
// // // //         <div className='flex items-center gap-4'>
// // // //           <HolographicIcon IconComponent={category.icon} />
// // // //           <div>
// // // //             <h3 className='text-2xl font-bold text-white'>{category.title}</h3>
// // // //             <p className='text-gray-300 text-sm mt-1'>{category.description}</p>
// // // //           </div>
// // // //         </div>
// // // //         <motion.div
// // // //           animate={{ rotate: isExpanded ? 180 : 0 }}
// // // //           transition={{ duration: 0.3 }}
// // // //         >
// // // //           <ChevronDown className='w-6 h-6 text-gray-400' />
// // // //         </motion.div>
// // // //       </div>

// // // //       {/* Expandable Services Section */}
// // // //       <AnimatePresence>
// // // //         {isExpanded && (
// // // //           <motion.div
// // // //             initial={{ opacity: 0, height: 0 }}
// // // //             animate={{ opacity: 1, height: "auto" }}
// // // //             exit={{ opacity: 0, height: 0 }}
// // // //             transition={{ duration: 0.3, ease: "easeInOut" }}
// // // //             className='space-y-3 mt-4 pt-4 border-t border-white/10'
// // // //           >
// // // //             {category.services.map((service, index) => (
// // // //               <motion.div
// // // //                 key={service.name}
// // // //                 initial={{ opacity: 0, x: -20 }}
// // // //                 animate={{ opacity: 1, x: 0 }}
// // // //                 transition={{ delay: index * 0.1 }}
// // // //               >
// // // //                 <ServiceCard service={service} categoryColor={category.color} />
// // // //               </motion.div>
// // // //             ))}

// // // //             {/* CTA Button */}
// // // //             <motion.div
// // // //               initial={{ opacity: 0, y: 20 }}
// // // //               animate={{ opacity: 1, y: 0 }}
// // // //               transition={{ delay: 0.3 }}
// // // //               className='pt-4'
// // // //             >
// // // //               <button
// // // //                 className={`
// // // //                 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl
// // // //                 bg-gradient-to-r ${category.color} text-white font-semibold
// // // //                 hover:shadow-lg hover:scale-105 transition-all duration-200
// // // //               `}
// // // //               >
// // // //                 Get Started
// // // //                 <ExternalLink className='w-4 h-4' />
// // // //               </button>
// // // //             </motion.div>
// // // //           </motion.div>
// // // //         )}
// // // //       </AnimatePresence>

// // // //       {/* Gradient Border Effect */}
// // // //       <div
// // // //         className={`
// // // //         absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
// // // //         transition-opacity duration-300 pointer-events-none
// // // //         bg-gradient-to-r ${category.color} p-[1px]
// // // //       `}
// // // //       >
// // // //         <div className='w-full h-full rounded-2xl bg-gray-900' />
// // // //       </div>
// // // //     </motion.div>
// // // //   </motion.div>
// // // // );

// // // // // Enhanced Services Section Component
// // // // export function ServicesSection() {
// // // //   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

// // // //   const mouseX = useMotionValue(0);
// // // //   const mouseY = useMotionValue(0);
// // // //   const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
// // // //   const dx = useSpring(
// // // //     useTransform(mouseX, (val) => val * -0.5),
// // // //     springConfig
// // // //   );
// // // //   const dy = useSpring(
// // // //     useTransform(mouseY, (val) => val * -0.5),
// // // //     springConfig
// // // //   );

// // // //   const handleMouseMove = (e: React.MouseEvent) => {
// // // //     const { clientX, clientY, currentTarget } = e;
// // // //     const rect = currentTarget.getBoundingClientRect();
// // // //     const { width, height } = rect;
// // // //     mouseX.set(clientX / width - 0.5);
// // // //     mouseY.set(clientY / height - 0.5);
// // // //   };

// // // //   const handleMouseLeave = () => {
// // // //     mouseX.set(0);
// // // //     mouseY.set(0);
// // // //   };

// // // //   const toggleCategory = (categoryId: string) => {
// // // //     setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
// // // //   };

// // // //   return (
// // // //     <section
// // // //       id='services'
// // // //       className='relative w-full py-24 sm:py-32 overflow-hidden'
// // // //     >
// // // //       {/* Background Effects */}
// // // //       <div className='absolute inset-0 z-0'>
// // // //         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50' />
// // // //         <motion.div
// // // //           className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent'
// // // //           style={{ x: dx, y: dy }}
// // // //         />
// // // //       </div>

// // // //       <div className='container mx-auto px-4 relative z-10'>
// // // //         {/* Header Section */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.5, ease: "easeOut" }}
// // // //           viewport={{ once: true, amount: 0.5 }}
// // // //           className='text-center mb-16'
// // // //         >
// // // //           <h2 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-4'>
// // // //             Full-Service Digital Solutions
// // // //           </h2>
// // // //           <p className='text-lg text-gray-300 max-w-3xl mx-auto mb-8'>
// // // //             From concept to launch, we provide everything you need to build,
// // // //             brand, and grow your digital presence. Click on any category to
// // // //             explore our specialized services.
// // // //           </p>

// // // //           {/* Stats or Trust Indicators */}
// // // //           <div className='flex justify-center gap-8 text-sm text-gray-400'>
// // // //             <div className='text-center'>
// // // //               <div className='text-2xl font-bold text-white'>50+</div>
// // // //               <div>Projects Delivered</div>
// // // //             </div>
// // // //             <div className='text-center'>
// // // //               <div className='text-2xl font-bold text-white'>3</div>
// // // //               <div>Service Categories</div>
// // // //             </div>
// // // //             <div className='text-center'>
// // // //               <div className='text-2xl font-bold text-white'>100%</div>
// // // //               <div>Client Satisfaction</div>
// // // //             </div>
// // // //           </div>
// // // //         </motion.div>

// // // //         {/* Services Grid */}
// // // //         <motion.div
// // // //           onMouseMove={handleMouseMove}
// // // //           onMouseLeave={handleMouseLeave}
// // // //           className='max-w-6xl mx-auto'
// // // //         >
// // // //           <div className='grid gap-8 md:gap-12'>
// // // //             {serviceCategories.map((category, index) => (
// // // //               <motion.div
// // // //                 key={category.id}
// // // //                 initial={{ opacity: 0, y: 50 }}
// // // //                 whileInView={{ opacity: 1, y: 0 }}
// // // //                 transition={{ duration: 0.5, delay: index * 0.2 }}
// // // //                 viewport={{ once: true, amount: 0.3 }}
// // // //               >
// // // //                 <CategoryCard
// // // //                   category={category}
// // // //                   isExpanded={expandedCategory === category.id}
// // // //                   onToggle={() => toggleCategory(category.id)}
// // // //                 />
// // // //               </motion.div>
// // // //             ))}
// // // //           </div>
// // // //         </motion.div>

// // // //         {/* Bottom CTA Section */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           whileInView={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.5, delay: 0.6 }}
// // // //           viewport={{ once: true, amount: 0.5 }}
// // // //           className='text-center mt-16'
// // // //         >
// // // //           <p className='text-gray-300 mb-6'>
// // // //             Ready to transform your digital presence?
// // // //           </p>
// // // //           <button className='px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200'>
// // // //             Start Your Project
// // // //           </button>
// // // //         </motion.div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // "use client";

// // // import React, { useState, useCallback, useRef, useEffect } from "react";
// // // import {
// // //   motion,
// // //   useMotionValue,
// // //   useSpring,
// // //   useTransform,
// // //   AnimatePresence,
// // // } from "framer-motion";
// // // import {
// // //   Code,
// // //   Palette,
// // //   Search,
// // //   Globe,
// // //   Smartphone,
// // //   Server,
// // //   Brush,
// // //   Package,
// // //   Video,
// // //   TrendingUp,
// // //   Target,
// // //   BarChart3,
// // //   ChevronDown,
// // //   ExternalLink,
// // //   type LucideProps,
// // // } from "lucide-react";

// // // // --- TYPE DEFINITIONS ---

// // // interface Service {
// // //   name: string;
// // //   icon: React.ComponentType<LucideProps>;
// // //   description: string;
// // // }

// // // interface ServiceCategory {
// // //   id: string;
// // //   title: string;
// // //   icon: React.ComponentType<LucideProps>;
// // //   description: string;
// // //   services: Service[];
// // //   color: string;
// // // }

// // // // --- DATA ---

// // // const serviceCategories: ServiceCategory[] = [
// // //   {
// // //     id: "technology",
// // //     title: "Technology & Development",
// // //     icon: Code,
// // //     description:
// // //       "Full-stack development solutions that bring your digital vision to life.",
// // //     services: [
// // //       {
// // //         name: "Web Development",
// // //         icon: Globe,
// // //         description: "Frontend & Backend solutions",
// // //       },
// // //       {
// // //         name: "Mobile Apps",
// // //         icon: Smartphone,
// // //         description: "iOS & Android applications",
// // //       },
// // //       {
// // //         name: "API Development",
// // //         icon: Server,
// // //         description: "Scalable backend services",
// // //       },
// // //     ],
// // //     color: "from-blue-500 to-cyan-500",
// // //   },
// // //   {
// // //     id: "creative",
// // //     title: "Creative & Design",
// // //     icon: Palette,
// // //     description:
// // //       "Visual identity and creative assets that make your brand unforgettable.",
// // //     services: [
// // //       {
// // //         name: "Branding",
// // //         icon: Brush,
// // //         description: "Logo, identity & brand guidelines",
// // //       },
// // //       {
// // //         name: "Packaging Design",
// // //         icon: Package,
// // //         description: "Product packaging & labels",
// // //       },
// // //       {
// // //         name: "Video Production",
// // //         icon: Video,
// // //         description: "Promotional & product videos",
// // //       },
// // //     ],
// // //     color: "from-purple-500 to-pink-500",
// // //   },
// // //   {
// // //     id: "marketing",
// // //     title: "Marketing & Strategy",
// // //     icon: Search,
// // //     description:
// // //       "Growth and visibility solutions that drive real business results.",
// // //     services: [
// // //       {
// // //         name: "SEO Optimization",
// // //         icon: TrendingUp,
// // //         description: "Search engine visibility",
// // //       },
// // //       {
// // //         name: "Digital Advertising",
// // //         icon: Target,
// // //         description: "Targeted ad campaigns",
// // //       },
// // //       {
// // //         name: "Analytics & Insights",
// // //         icon: BarChart3,
// // //         description: "Performance tracking",
// // //       },
// // //     ],
// // //     color: "from-green-500 to-emerald-500",
// // //   },
// // // ];

// // // // --- REUSABLE COMPONENTS ---

// // // const HolographicIcon = React.memo(
// // //   ({
// // //     IconComponent,
// // //     size = "w-12 h-12",
// // //   }: {
// // //     IconComponent: React.ComponentType<LucideProps>;
// // //     size?: string;
// // //   }) => (
// // //     <motion.div
// // //       whileHover='hover'
// // //       className={`relative ${size} grid place-items-center`}
// // //     >
// // //       <IconComponent
// // //         className='relative z-10 h-8 w-8 text-white'
// // //         style={{
// // //           filter: `drop-shadow(0 0 2px rgba(167, 139, 250, 0.9))
// // //                    drop-shadow(0 0 8px rgba(167, 139, 250, 0.6))
// // //                    drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))`,
// // //         }}
// // //       />
// // //       <motion.div
// // //         className='absolute inset-0 rounded-full bg-purple-500/40 blur-lg'
// // //         variants={{ hover: { scale: 1.2, opacity: 0.7 } }}
// // //         transition={{ type: "spring", damping: 15, stiffness: 200 }}
// // //       />
// // //       <motion.div
// // //         className='absolute inset-0'
// // //         variants={{
// // //           hover: { x: [0, -1, 1, -1, 0], y: [0, 1, -1, 1, 0], scale: 1.1 },
// // //         }}
// // //         transition={{ duration: 0.3 }}
// // //       >
// // //         <IconComponent className='absolute inset-0 h-full w-full text-blue-400/50' />
// // //       </motion.div>
// // //     </motion.div>
// // //   )
// // // );
// // // HolographicIcon.displayName = "HolographicIcon";

// // // const ServiceCard = React.memo(({ service }: { service: Service }) => (
// // //   <motion.div
// // //     initial={{ opacity: 0, y: 20 }}
// // //     animate={{ opacity: 1, y: 0 }}
// // //     className='flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors'
// // //   >
// // //     <div className='flex-shrink-0'>
// // //       <HolographicIcon IconComponent={service.icon} size='w-10 h-10' />
// // //     </div>
// // //     <div className='flex-1'>
// // //       <h4 className='text-white font-semibold text-lg'>{service.name}</h4>
// // //       <p className='text-gray-300 text-sm'>{service.description}</p>
// // //     </div>
// // //   </motion.div>
// // // ));
// // // ServiceCard.displayName = "ServiceCard";

// // // const CategoryCard = React.memo(
// // //   ({
// // //     category,
// // //     isExpanded,
// // //     onToggle,
// // //   }: {
// // //     category: ServiceCategory;
// // //     isExpanded: boolean;
// // //     onToggle: () => void;
// // //   }) => {
// // //     const smoothSpring = {
// // //       type: "spring",
// // //       stiffness: 400,
// // //       damping: 35,
// // //       mass: 0.8,
// // //     };

// // //     return (
// // //       <motion.div
// // //         layout
// // //         transition={smoothSpring}
// // //         className='group relative cursor-pointer rounded-2xl'
// // //         onClick={onToggle}
// // //       >
// // //         {/* ... (No changes to the main card structure or header) ... */}
// // //         <div
// // //           className={`
// // //             relative z-10 flex flex-col rounded-2xl border border-white/10
// // //             bg-white/5 backdrop-blur-md shadow-lg transition-colors duration-300
// // //             ${isExpanded ? "p-8" : "p-6"}
// // //             hover:bg-white/10 hover:border-white/20
// // //           `}
// // //         >
// // //           <div className='flex items-center justify-between'>
// // //             <div className='flex items-center gap-4'>
// // //               <HolographicIcon IconComponent={category.icon} />
// // //               <div>
// // //                 <h3 className='text-2xl font-bold text-white'>
// // //                   {category.title}
// // //                 </h3>
// // //                 <p className='text-gray-300 text-sm mt-1'>
// // //                   {category.description}
// // //                 </p>
// // //               </div>
// // //             </div>
// // //             <motion.div
// // //               animate={{ rotate: isExpanded ? 180 : 0 }}
// // //               transition={{ duration: 0.4, ease: "easeOut" }}
// // //             >
// // //               <ChevronDown className='w-6 h-6 text-gray-400' />
// // //             </motion.div>
// // //           </div>

// // //           <AnimatePresence initial={false}>
// // //             {isExpanded && (
// // //               <motion.div
// // //                 key='content'
// // //                 initial={{ opacity: 0 }}
// // //                 animate={{ opacity: 1 }}
// // //                 exit={{ opacity: 0 }}
// // //                 transition={{ duration: 0.3, delay: 0.1 }}
// // //                 className='space-y-3 mt-4 pt-4 border-t border-white/10 overflow-hidden'
// // //               >
// // //                 {/* ... (No changes to the services map) ... */}
// // //                 {category.services.map((service, index) => (
// // //                   <motion.div
// // //                     key={service.name}
// // //                     initial={{ opacity: 0, x: -20 }}
// // //                     animate={{ opacity: 1, x: 0 }}
// // //                     transition={{
// // //                       type: "spring",
// // //                       stiffness: 300,
// // //                       damping: 30,
// // //                       delay: index * 0.05 + 0.15,
// // //                     }}
// // //                   >
// // //                     <ServiceCard service={service} />
// // //                   </motion.div>
// // //                 ))}

// // //                 {/* --- CHANGE IS HERE --- */}
// // //                 <motion.div
// // //                   initial={{ opacity: 0, y: 20 }}
// // //                   animate={{ opacity: 1, y: 0 }}
// // //                   transition={{ delay: 0.4 }}
// // //                   // 1. Make the button's container a centered flexbox on small screens and up
// // //                   className='pt-4 sm:flex sm:justify-center'
// // //                 >
// // //                   <button
// // //                     className={`
// // //                       w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl
// // //                       bg-gradient-to-r ${category.color} text-white font-semibold
// // //                       hover:shadow-lg hover:scale-105 transition-all duration-200
// // //                       sm:w-auto  // 2. Set width to auto on small screens and up
// // //                     `}
// // //                   >
// // //                     Get Started
// // //                     <ExternalLink className='w-4 h-4' />
// // //                   </button>
// // //                 </motion.div>
// // //                 {/* --- END OF CHANGE --- */}
// // //               </motion.div>
// // //             )}
// // //           </AnimatePresence>
// // //         </div>

// // //         {/* ... (No changes to the gradient border) ... */}
// // //         <div
// // //           className={`
// // //             absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
// // //             transition-opacity duration-300 pointer-events-none
// // //             bg-gradient-to-r ${category.color} p-[1px]
// // //           `}
// // //         >
// // //           <div className='w-full h-full rounded-2xl bg-gray-900' />
// // //         </div>
// // //       </motion.div>
// // //     );
// // //   }
// // // );
// // // CategoryCard.displayName = "CategoryCard";

// // // // --- MAIN COMPONENT ---

// // // export function ServicesSection() {
// // //   const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
// // //   const containerRef = useRef<HTMLDivElement>(null);
// // //   const mouseX = useMotionValue(0);
// // //   const mouseY = useMotionValue(0);

// // //   const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
// // //   const dx = useSpring(
// // //     useTransform(mouseX, (val) => val * -0.5),
// // //     springConfig
// // //   );
// // //   const dy = useSpring(
// // //     useTransform(mouseY, (val) => val * -0.5),
// // //     springConfig
// // //   );

// // //   const handleMouseMove = useCallback(
// // //     (e: React.MouseEvent<HTMLDivElement>) => {
// // //       const { clientX, clientY, currentTarget } = e;
// // //       const rect = currentTarget.getBoundingClientRect();
// // //       mouseX.set((clientX - rect.left) / rect.width - 0.5);
// // //       mouseY.set((clientY - rect.top) / rect.height - 0.5);
// // //     },
// // //     [mouseX, mouseY]
// // //   );

// // //   const handleMouseLeave = useCallback(() => {
// // //     mouseX.set(0);
// // //     mouseY.set(0);
// // //   }, [mouseX, mouseY]);

// // //   const toggleCategory = useCallback((categoryId: string) => {
// // //     setExpandedCategory((prev) => (prev === categoryId ? null : categoryId));
// // //   }, []);

// // //   useEffect(() => {
// // //     const handleClickOutside = (event: MouseEvent) => {
// // //       if (
// // //         containerRef.current &&
// // //         !containerRef.current.contains(event.target as Node)
// // //       ) {
// // //         setExpandedCategory(null);
// // //       }
// // //     };

// // //     if (expandedCategory !== null) {
// // //       document.addEventListener("mousedown", handleClickOutside);
// // //     }

// // //     return () => {
// // //       document.removeEventListener("mousedown", handleClickOutside);
// // //     };
// // //   }, [expandedCategory]);

// // //   return (
// // //     <section
// // //       id='services'
// // //       className='relative w-full bg-gray-950 py-24 sm:py-32 overflow-hidden'
// // //     >
// // //       <div className='absolute inset-0 z-0'>
// // //         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50' />
// // //         <motion.div
// // //           className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent'
// // //           style={{ x: dx, y: dy }}
// // //         />
// // //       </div>

// // //       <div className='container mx-auto px-4 relative z-10'>
// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           whileInView={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.5, ease: "easeOut" }}
// // //           viewport={{ once: true, amount: 0.5 }}
// // //           className='text-center mb-16'
// // //         >
// // //           <h2 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-4'>
// // //             Full-Service Digital Solutions
// // //           </h2>
// // //           <p className='text-lg text-gray-300 max-w-3xl mx-auto mb-8'>
// // //             From concept to launch, we provide everything you need to build,
// // //             brand, and grow your digital presence. Click on any category to
// // //             explore our specialized services.
// // //           </p>
// // //           <div className='flex justify-center gap-8 text-sm text-gray-400'>
// // //             <div className='text-center'>
// // //               <div className='text-2xl font-bold text-white'>50+</div>
// // //               <div>Projects Delivered</div>
// // //             </div>
// // //             <div className='text-center'>
// // //               <div className='text-2xl font-bold text-white'>3</div>
// // //               <div>Service Categories</div>
// // //             </div>
// // //             <div className='text-center'>
// // //               <div className='text-2xl font-bold text-white'>100%</div>
// // //               <div>Client Satisfaction</div>
// // //             </div>
// // //           </div>
// // //         </motion.div>

// // //         <motion.div
// // //           ref={containerRef}
// // //           onMouseMove={handleMouseMove}
// // //           onMouseLeave={handleMouseLeave}
// // //           className='max-w-6xl mx-auto'
// // //         >
// // //           <div className='grid gap-8 md:gap-12'>
// // //             {serviceCategories.map((category, index) => (
// // //               <motion.div
// // //                 key={category.id}
// // //                 initial={{ opacity: 0, y: 50 }}
// // //                 whileInView={{ opacity: 1, y: 0 }}
// // //                 transition={{ duration: 0.5, delay: index * 0.2 }}
// // //                 viewport={{ once: true, amount: 0.3 }}
// // //               >
// // //                 <CategoryCard
// // //                   category={category}
// // //                   isExpanded={expandedCategory === category.id}
// // //                   onToggle={() => toggleCategory(category.id)}
// // //                 />
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </motion.div>
// // //         {/* CTA Block has been removed from here */}
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // "use client";

// // import React, { useState, useCallback, useRef, useEffect } from "react";
// // import {
// //   motion,
// //   useMotionValue,
// //   useSpring,
// //   useTransform,
// //   AnimatePresence,
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
// //   ExternalLink,
// //   type LucideProps,
// // } from "lucide-react";

// // // --- TYPE DEFINITIONS ---

// // interface Service {
// //   name: string;
// //   icon: React.ComponentType<LucideProps>;
// //   description: string;
// // }

// // interface ServiceCategory {
// //   id: string;
// //   title: string;
// //   icon: React.ComponentType<LucideProps>;
// //   description: string;
// //   services: Service[];
// //   color: string;
// // }

// // // --- DATA ---

// // const serviceCategories: ServiceCategory[] = [
// //   {
// //     id: "technology",
// //     title: "Technology & Development",
// //     icon: Code,
// //     description:
// //       "Full-stack development solutions that bring your digital vision to life.",
// //     services: [
// //       {
// //         name: "Web Development",
// //         icon: Globe,
// //         description: "Frontend & Backend solutions",
// //       },
// //       {
// //         name: "Mobile Apps",
// //         icon: Smartphone,
// //         description: "iOS & Android applications",
// //       },
// //       {
// //         name: "API Development",
// //         icon: Server,
// //         description: "Scalable backend services",
// //       },
// //     ],
// //     color: "from-blue-500 to-cyan-500",
// //   },
// //   {
// //     id: "creative",
// //     title: "Creative & Design",
// //     icon: Palette,
// //     description:
// //       "Visual identity and creative assets that make your brand unforgettable.",
// //     services: [
// //       {
// //         name: "Branding",
// //         icon: Brush,
// //         description: "Logo, identity & brand guidelines",
// //       },
// //       {
// //         name: "Packaging Design",
// //         icon: Package,
// //         description: "Product packaging & labels",
// //       },
// //       {
// //         name: "Video Production",
// //         icon: Video,
// //         description: "Promotional & product videos",
// //       },
// //     ],
// //     color: "from-purple-500 to-pink-500",
// //   },
// //   {
// //     id: "marketing",
// //     title: "Marketing & Strategy",
// //     icon: Search,
// //     description:
// //       "Growth and visibility solutions that drive real business results.",
// //     services: [
// //       {
// //         name: "SEO Optimization",
// //         icon: TrendingUp,
// //         description: "Search engine visibility",
// //       },
// //       {
// //         name: "Digital Advertising",
// //         icon: Target,
// //         description: "Targeted ad campaigns",
// //       },
// //       {
// //         name: "Analytics & Insights",
// //         icon: BarChart3,
// //         description: "Performance tracking",
// //       },
// //     ],
// //     color: "from-green-500 to-emerald-500",
// //   },
// // ];

// // // --- REUSABLE COMPONENTS ---

// // const HolographicIcon = React.memo(
// //   ({
// //     IconComponent,
// //     size = "w-12 h-12",
// //   }: {
// //     IconComponent: React.ComponentType<LucideProps>;
// //     size?: string;
// //   }) => (
// //     <motion.div
// //       whileHover='hover'
// //       className={`relative ${size} grid place-items-center`}
// //     >
// //       <IconComponent
// //         className='relative z-10 h-8 w-8 text-white'
// //         style={{
// //           filter: `drop-shadow(0 0 2px rgba(167, 139, 250, 0.9))
// //                   drop-shadow(0 0 8px rgba(167, 139, 250, 0.6))
// //                   drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))`,
// //         }}
// //       />
// //       <motion.div
// //         className='absolute inset-0 rounded-full bg-purple-500/40 blur-lg'
// //         variants={{ hover: { scale: 1.2, opacity: 0.7 } }}
// //         transition={{ type: "spring", damping: 15, stiffness: 200 }}
// //       />
// //       <motion.div
// //         className='absolute inset-0'
// //         variants={{
// //           hover: { x: [0, -1, 1, -1, 0], y: [0, 1, -1, 1, 0], scale: 1.1 },
// //         }}
// //         transition={{ duration: 0.3 }}
// //       >
// //         <IconComponent className='absolute inset-0 h-full w-full text-blue-400/50' />
// //       </motion.div>
// //     </motion.div>
// //   )
// // );
// // HolographicIcon.displayName = "HolographicIcon";

// // const ServiceCard = React.memo(({ service }: { service: Service }) => (
// //   <motion.div
// //     initial={{ opacity: 0, y: 20 }}
// //     animate={{ opacity: 1, y: 0 }}
// //     className='flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors'
// //   >
// //     <div className='flex-shrink-0'>
// //       <HolographicIcon IconComponent={service.icon} size='w-10 h-10' />
// //     </div>
// //     <div className='flex-1'>
// //       <h4 className='text-white font-semibold text-lg'>{service.name}</h4>
// //       <p className='text-gray-300 text-sm'>{service.description}</p>
// //     </div>
// //   </motion.div>
// // ));
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
// //     const smoothSpring = {
// //       type: "spring",
// //       stiffness: 400,
// //       damping: 35,
// //       mass: 0.8,
// //     };

// //     return (
// //       <motion.div
// //         layout
// //         transition={smoothSpring}
// //         className='group relative cursor-pointer rounded-2xl'
// //         onClick={onToggle}
// //       >
// //         <div
// //           className={`
// //             relative z-10 flex flex-col rounded-2xl border border-white/10
// //             bg-white/5 backdrop-blur-md shadow-lg transition-colors duration-300
// //             ${isExpanded ? "p-8" : "p-6"}
// //             hover:bg-white/10 hover:border-white/20
// //           `}
// //         >
// //           <div className='flex items-center justify-between'>
// //             <div className='flex items-center gap-4'>
// //               <HolographicIcon IconComponent={category.icon} />
// //               <div>
// //                 <h3 className='text-2xl font-bold text-white'>
// //                   {category.title}
// //                 </h3>
// //                 <p className='text-gray-300 text-sm mt-1'>
// //                   {category.description}
// //                 </p>
// //               </div>
// //             </div>
// //             <motion.div
// //               animate={{ rotate: isExpanded ? 180 : 0 }}
// //               transition={{ duration: 0.4, ease: "easeOut" }}
// //             >
// //               <ChevronDown className='w-6 h-6 text-gray-400' />
// //             </motion.div>
// //           </div>

// //           <AnimatePresence initial={false}>
// //             {isExpanded && (
// //               <motion.div
// //                 key='content'
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 exit={{ opacity: 0 }}
// //                 transition={{ duration: 0.3, delay: 0.1 }}
// //                 className='space-y-3 mt-4 pt-4 border-t border-white/10 overflow-hidden'
// //               >
// //                 {category.services.map((service, index) => (
// //                   <motion.div
// //                     key={service.name}
// //                     initial={{ opacity: 0, x: -20 }}
// //                     animate={{ opacity: 1, x: 0 }}
// //                     transition={{
// //                       type: "spring",
// //                       stiffness: 300,
// //                       damping: 30,
// //                       delay: index * 0.05 + 0.15,
// //                     }}
// //                   >
// //                     <ServiceCard service={service} />
// //                   </motion.div>
// //                 ))}
// //                 <motion.div
// //                   initial={{ opacity: 0, y: 20 }}
// //                   animate={{ opacity: 1, y: 0 }}
// //                   transition={{ delay: 0.4 }}
// //                   className='pt-4 sm:flex sm:justify-center'
// //                 >
// //                   <button
// //                     className={`
// //                       w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl
// //                       bg-gradient-to-r ${category.color} text-white font-semibold
// //                       hover:shadow-lg hover:scale-105 transition-all duration-200
// //                       sm:w-auto
// //                     `}
// //                   >
// //                     Get Started
// //                     <ExternalLink className='w-4 h-4' />
// //                   </button>
// //                 </motion.div>
// //               </motion.div>
// //             )}
// //           </AnimatePresence>
// //         </div>

// //         <div
// //           className={`
// //             absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
// //             transition-opacity duration-300 pointer-events-none
// //             bg-gradient-to-r ${category.color} p-[1px]
// //           `}
// //         >
// //           <div className='w-full h-full rounded-2xl bg-gray-900' />
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

// //   const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
// //   const dx = useSpring(
// //     useTransform(mouseX, (val) => val * -0.5),
// //     springConfig
// //   );
// //   const dy = useSpring(
// //     useTransform(mouseY, (val) => val * -0.5),
// //     springConfig
// //   );

// //   const handleMouseMove = useCallback(
// //     (e: React.MouseEvent<HTMLDivElement>) => {
// //       const { clientX, clientY, currentTarget } = e;
// //       const rect = currentTarget.getBoundingClientRect();
// //       mouseX.set((clientX - rect.left) / rect.width - 0.5);
// //       mouseY.set((clientY - rect.top) / rect.height - 0.5);
// //     },
// //     [mouseX, mouseY]
// //   );

// //   const handleMouseLeave = useCallback(() => {
// //     mouseX.set(0);
// //     mouseY.set(0);
// //   }, [mouseX, mouseY]);

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

// //   return (
// //     <section
// //       id='services'
// //       className='relative w-full bg-gray-950 py-24 sm:py-32 overflow-hidden'
// //     >
// //       <div className='absolute inset-0 z-0'>
// //         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50' />
// //         <motion.div
// //           className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent'
// //           style={{ x: dx, y: dy }}
// //         />
// //       </div>

// //       <div className='container mx-auto px-4 relative z-10'>
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, ease: "easeOut" }}
// //           viewport={{ once: true, amount: 0.5 }}
// //           className='text-center mb-16'
// //         >
// //           <h2 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-4'>
// //             Full-Service Digital Solutions
// //           </h2>
// //           <p className='text-lg text-gray-300 max-w-3xl mx-auto mb-8'>
// //             From concept to launch, we provide everything you need to build,
// //             brand, and grow your digital presence. Click on any category to
// //             explore our specialized services.
// //           </p>
// //           <div className='flex justify-center gap-8 text-sm text-gray-400'>
// //             <div className='text-center'>
// //               <div className='text-2xl font-bold text-white'>50+</div>
// //               <div>Projects Delivered</div>
// //             </div>
// //             <div className='text-center'>
// //               <div className='text-2xl font-bold text-white'>3</div>
// //               <div>Service Categories</div>
// //             </div>
// //             <div className='text-center'>
// //               <div className='text-2xl font-bold text-white'>100%</div>
// //               <div>Client Satisfaction</div>
// //             </div>
// //           </div>
// //         </motion.div>

// //         <motion.div
// //           ref={containerRef}
// //           onMouseMove={handleMouseMove}
// //           onMouseLeave={handleMouseLeave}
// //           className='max-w-6xl mx-auto'
// //         >
// //           <div className='grid gap-8 md:gap-12'>
// //             {serviceCategories.map((category, index) => (
// //               <motion.div
// //                 key={category.id}
// //                 initial={{ opacity: 0, y: 50 }}
// //                 whileInView={{ opacity: 1, y: 0 }}
// //                 transition={{ duration: 0.5, delay: index * 0.2 }}
// //                 viewport={{ once: true, amount: 0.3 }}
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

// //         {/* --- VIDEO SECTION START --- */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 50 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, delay: 0.4 }}
// //           viewport={{ once: true, amount: 0.3 }}
// //           className='max-w-5xl mx-auto mt-24'
// //         >
// //           <div className='text-center mb-10'>
// //             <h3 className='text-3xl font-bold text-white mb-2'>
// //               See Our Process in Action
// //             </h3>
// //             <p className='text-gray-400'>
// //               A glimpse into how we bring ideas to life.
// //             </p>
// //           </div>
// //           <div className='relative p-1 rounded-3xl bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 shadow-2xl shadow-purple-500/20'>
// //             {/* IMPORTANT: Replace 'your-video.mp4' with your video file name.
// //               The video should be in the /public/videos/ directory.
// //             */}
// //             <video
// //               src='/videos/video.mp4'
// //               className='w-full h-full object-cover rounded-[22px]'
// //               autoPlay
// //               loop
// //               muted
// //               playsInline
// //             />
// //           </div>
// //         </motion.div>
// //         {/* --- VIDEO SECTION END --- */}
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
//   ExternalLink,
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
//     color: "from-blue-500 to-cyan-500",
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
//     color: "from-purple-500 to-pink-500",
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
//     color: "from-green-500 to-emerald-500",
//   },
// ];

// // --- REUSABLE COMPONENTS ---

// const HolographicIcon = React.memo(
//   ({
//     IconComponent,
//     size = "w-12 h-12",
//   }: {
//     IconComponent: React.ComponentType<LucideProps>;
//     size?: string;
//   }) => (
//     <motion.div
//       whileHover='hover'
//       className={`relative ${size} grid place-items-center`}
//     >
//       <IconComponent
//         className='relative z-10 h-8 w-8 text-white'
//         style={{
//           filter: `drop-shadow(0 0 2px rgba(167, 139, 250, 0.9))
//                   drop-shadow(0 0 8px rgba(167, 139, 250, 0.6))
//                   drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))`,
//         }}
//       />
//       <motion.div
//         className='absolute inset-0 rounded-full bg-purple-500/40 blur-lg'
//         variants={{ hover: { scale: 1.2, opacity: 0.7 } }}
//         transition={{ type: "spring", damping: 15, stiffness: 200 }}
//       />
//       <motion.div
//         className='absolute inset-0'
//         variants={{
//           hover: { x: [0, -1, 1, -1, 0], y: [0, 1, -1, 1, 0], scale: 1.1 },
//         }}
//         transition={{ duration: 0.3 }}
//       >
//         <IconComponent className='absolute inset-0 h-full w-full text-blue-400/50' />
//       </motion.div>
//     </motion.div>
//   )
// );
// HolographicIcon.displayName = "HolographicIcon";

// const ServiceCard = React.memo(({ service }: { service: Service }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     className='flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors'
//   >
//     <div className='flex-shrink-0'>
//       <HolographicIcon IconComponent={service.icon} size='w-10 h-10' />
//     </div>
//     <div className='flex-1'>
//       <h4 className='text-white font-semibold text-lg'>{service.name}</h4>
//       <p className='text-gray-300 text-sm'>{service.description}</p>
//     </div>
//   </motion.div>
// ));
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
//     const smoothSpring = {
//       type: "spring",
//       stiffness: 400,
//       damping: 35,
//       mass: 0.8,
//     };

//     return (
//       <motion.div
//         layout
//         transition={smoothSpring}
//         className='group relative cursor-pointer rounded-2xl'
//         onClick={onToggle}
//       >
//         <div
//           className={`
//             relative z-10 flex flex-col rounded-2xl border border-white/10
//             bg-white/5 backdrop-blur-md shadow-lg transition-colors duration-300
//             ${isExpanded ? "p-8" : "p-6"}
//             hover:bg-white/10 hover:border-white/20
//           `}
//         >
//           <div className='flex items-center justify-between'>
//             <div className='flex items-center gap-4'>
//               <HolographicIcon IconComponent={category.icon} />
//               <div>
//                 <h3 className='text-2xl font-bold text-white'>
//                   {category.title}
//                 </h3>
//                 <p className='text-gray-300 text-sm mt-1'>
//                   {category.description}
//                 </p>
//               </div>
//             </div>
//             <motion.div
//               animate={{ rotate: isExpanded ? 180 : 0 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//             >
//               <ChevronDown className='w-6 h-6 text-gray-400' />
//             </motion.div>
//           </div>

//           <AnimatePresence initial={false}>
//             {isExpanded && (
//               <motion.div
//                 key='content'
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.3, delay: 0.1 }}
//                 className='space-y-3 mt-4 pt-4 border-t border-white/10 overflow-hidden'
//               >
//                 {category.services.map((service, index) => (
//                   <motion.div
//                     key={service.name}
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{
//                       type: "spring",
//                       stiffness: 300,
//                       damping: 30,
//                       delay: index * 0.05 + 0.15,
//                     }}
//                   >
//                     <ServiceCard service={service} />
//                   </motion.div>
//                 ))}
//                 <motion.div
//                   initial={{ opacity: 0, y: 20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.4 }}
//                   className='pt-4 sm:flex sm:justify-center'
//                 >
//                   <button
//                     className={`
//                       w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl
//                       bg-gradient-to-r ${category.color} text-white font-semibold
//                       hover:shadow-lg hover:scale-105 transition-all duration-200
//                       sm:w-auto
//                     `}
//                   >
//                     Get Started
//                     <ExternalLink className='w-4 h-4' />
//                   </button>
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         <div
//           className={`
//             absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
//             transition-opacity duration-300 pointer-events-none
//             bg-gradient-to-r ${category.color} p-[1px]
//           `}
//         >
//           <div className='w-full h-full rounded-2xl bg-gray-900' />
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

//   const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
//   const dx = useSpring(
//     useTransform(mouseX, (val) => val * -0.5),
//     springConfig
//   );
//   const dy = useSpring(
//     useTransform(mouseY, (val) => val * -0.5),
//     springConfig
//   );

//   const handleMouseMove = useCallback(
//     (e: React.MouseEvent<HTMLDivElement>) => {
//       const { clientX, clientY, currentTarget } = e;
//       const rect = currentTarget.getBoundingClientRect();
//       mouseX.set((clientX - rect.left) / rect.width - 0.5);
//       mouseY.set((clientY - rect.top) / rect.height - 0.5);
//     },
//     [mouseX, mouseY]
//   );

//   const handleMouseLeave = useCallback(() => {
//     mouseX.set(0);
//     mouseY.set(0);
//   }, [mouseX, mouseY]);

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

//   return (
//     <section
//       id='services'
//       className='relative w-full bg-gray-950 py-24 sm:py-32 overflow-hidden'
//     >
//       <div className='absolute inset-0 z-0'>
//         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50' />
//         <motion.div
//           className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent'
//           style={{ x: dx, y: dy }}
//         />
//       </div>

//       <div className='container mx-auto px-4 relative z-10'>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.5 }}
//           className='text-center mb-16'
//         >
//           <h2 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-4 p-1'>
//             Full-Service Digital Solutions
//           </h2>
//           <p className='text-lg text-gray-300 max-w-3xl mx-auto mb-8'>
//             From concept to launch, we provide everything you need to build,
//             brand, and grow your digital presence. Click on any category to
//             explore our specialized services.
//           </p>
//           <div className='flex justify-center gap-8 text-sm text-gray-400'>
//             <div className='text-center'>
//               <div className='text-2xl font-bold text-white'>50+</div>
//               <div>Projects Delivered</div>
//             </div>
//             <div className='text-center'>
//               <div className='text-2xl font-bold text-white'>3</div>
//               <div>Service Categories</div>
//             </div>
//             <div className='text-center'>
//               <div className='text-2xl font-bold text-white'>100%</div>
//               <div>Client Satisfaction</div>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           ref={containerRef}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className='max-w-6xl mx-auto'
//         >
//           <div className='grid gap-8 md:gap-12'>
//             {serviceCategories.map((category, index) => (
//               <motion.div
//                 key={category.id}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 viewport={{ once: true, amount: 0.3 }}
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
  ExternalLink,
  type LucideProps,
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
    color: "from-blue-500 to-cyan-500",
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
    color: "from-purple-500 to-pink-500",
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
    color: "from-green-500 to-emerald-500",
  },
];

// --- REUSABLE COMPONENTS ---

const HolographicIcon = React.memo(
  ({
    IconComponent,
    size = "w-12 h-12",
  }: {
    IconComponent: React.ComponentType<LucideProps>;
    size?: string;
  }) => (
    <motion.div
      whileHover='hover'
      className={`relative ${size} grid place-items-center`}
    >
      <IconComponent
        className='relative z-10 h-8 w-8 text-white'
        style={{
          filter: `drop-shadow(0 0 2px rgba(167, 139, 250, 0.9)) 
                  drop-shadow(0 0 8px rgba(167, 139, 250, 0.6)) 
                  drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))`,
        }}
      />
      <motion.div
        className='absolute inset-0 rounded-full bg-purple-500/40 blur-lg'
        variants={{ hover: { scale: 1.2, opacity: 0.7 } }}
        transition={{ type: "spring", damping: 15, stiffness: 200 }}
      />
      <motion.div
        className='absolute inset-0'
        variants={{
          hover: { x: [0, -1, 1, -1, 0], y: [0, 1, -1, 1, 0], scale: 1.1 },
        }}
        transition={{ duration: 0.3 }}
      >
        <IconComponent className='absolute inset-0 h-full w-full text-blue-400/50' />
      </motion.div>
    </motion.div>
  )
);
HolographicIcon.displayName = "HolographicIcon";

const ServiceCard = React.memo(({ service }: { service: Service }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className='flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors'
  >
    <div className='flex-shrink-0'>
      <HolographicIcon IconComponent={service.icon} size='w-10 h-10' />
    </div>
    <div className='flex-1'>
      <h4 className='text-white font-semibold text-lg'>{service.name}</h4>
      <p className='text-gray-300 text-sm'>{service.description}</p>
    </div>
  </motion.div>
));
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
    const smoothSpring = {
      type: "spring" as const,
      stiffness: 400,
      damping: 35,
      mass: 0.8,
    };

    return (
      <motion.div
        layout
        transition={smoothSpring}
        className='group relative cursor-pointer rounded-2xl'
        onClick={onToggle}
      >
        <div
          className={`
            relative z-10 flex flex-col rounded-2xl border border-white/10
            bg-white/5 backdrop-blur-md shadow-lg transition-colors duration-300
            ${isExpanded ? "p-8" : "p-6"}
            hover:bg-white/10 hover:border-white/20
          `}
        >
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <HolographicIcon IconComponent={category.icon} />
              <div>
                <h3 className='text-2xl font-bold text-white'>
                  {category.title}
                </h3>
                <p className='text-gray-300 text-sm mt-1'>
                  {category.description}
                </p>
              </div>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <ChevronDown className='w-6 h-6 text-gray-400' />
            </motion.div>
          </div>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                key='content'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className='space-y-3 mt-4 pt-4 border-t border-white/10 overflow-hidden'
              >
                {category.services.map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      type: "spring" as const,
                      stiffness: 300,
                      damping: 30,
                      delay: index * 0.05 + 0.15,
                    }}
                  >
                    <ServiceCard service={service} />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className='pt-4 sm:flex sm:justify-center'
                >
                  <button
                    className={`
                      w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl
                      bg-gradient-to-r ${category.color} text-white font-semibold
                      hover:shadow-lg hover:scale-105 transition-all duration-200
                      sm:w-auto
                    `}
                  >
                    Get Started
                    <ExternalLink className='w-4 h-4' />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div
          className={`
            absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
            transition-opacity duration-300 pointer-events-none
            bg-gradient-to-r ${category.color} p-[1px]
          `}
        >
          <div className='w-full h-full rounded-2xl bg-gray-900' />
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

  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const dx = useSpring(
    useTransform(mouseX, (val) => val * -0.5),
    springConfig
  );
  const dy = useSpring(
    useTransform(mouseY, (val) => val * -0.5),
    springConfig
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { clientX, clientY, currentTarget } = e;
      const rect = currentTarget.getBoundingClientRect();
      mouseX.set((clientX - rect.left) / rect.width - 0.5);
      mouseY.set((clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

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

  return (
    <section
      id='services'
      className='relative w-full bg-gray-950 py-24 sm:py-32 overflow-hidden'
    >
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50' />
        <motion.div
          className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent'
          style={{ x: dx, y: dy }}
        />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-4 p-1'>
            Full-Service Digital Solutions
          </h2>
          <p className='text-lg text-gray-300 max-w-3xl mx-auto mb-8'>
            From concept to launch, we provide everything you need to build,
            brand, and grow your digital presence. Click on any category to
            explore our specialized services.
          </p>
          <div className='flex justify-center gap-8 text-sm text-gray-400'>
            <div className='text-center'>
              <div className='text-2xl font-bold text-white'>50+</div>
              <div>Projects Delivered</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-white'>3</div>
              <div>Service Categories</div>
            </div>
            <div className='text-center'>
              <div className='text-2xl font-bold text-white'>100%</div>
              <div>Client Satisfaction</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className='max-w-6xl mx-auto'
        >
          <div className='grid gap-8 md:gap-12'>
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
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
