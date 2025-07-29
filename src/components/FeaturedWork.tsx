// // "use client";

// // import React, { useState, useEffect, useCallback, useRef } from "react";
// // import {
// //   motion,
// //   AnimatePresence,
// //   useMotionValue,
// //   useSpring,
// //   useTransform,
// //   Variants,
// //   useReducedMotion,
// // } from "framer-motion";
// // import { useInView } from "react-intersection-observer";
// // import { Layers, Smartphone, Cpu, Palette, Sparkles } from "lucide-react";
// // import Image from "next/image";

// // const projectsData = [
// //   {
// //     id: 1,
// //     title: "Elysian E-Commerce",
// //     category: "Web Platform",
// //     image: "/api/placeholder/600/400",
// //     icon: Layers,
// //   },
// //   {
// //     id: 2,
// //     title: "QuantumLeap Mobile",
// //     category: "Mobile App",
// //     image: "/api/placeholder/600/400",
// //     icon: Smartphone,
// //   },
// //   {
// //     id: 3,
// //     title: "Nova AI Dashboard",
// //     category: "AI Solution",
// //     image: "/api/placeholder/600/400",
// //     icon: Cpu,
// //   },
// //   {
// //     id: 4,
// //     title: "Aether Design System",
// //     category: "UI/UX Design",
// //     image: "/api/placeholder/600/400",
// //     icon: Palette,
// //   },
// // ];

// // const categories = [
// //   "All",
// //   "Web Platform",
// //   "Mobile App",
// //   "AI Solution",
// //   "UI/UX Design",
// // ];

// // const ProjectCard = ({
// //   project,
// //   index,
// // }: {
// //   project: (typeof projectsData)[0];
// //   index: number;
// // }) => {
// //   const Icon = project.icon;
// //   const shouldReduceMotion = useReducedMotion();
// //   const cardVariants: Variants = {
// //     hidden: shouldReduceMotion
// //       ? { opacity: 0 }
// //       : { opacity: 0, scale: 0.8, y: 50, rotateY: -15 },
// //     visible: shouldReduceMotion
// //       ? { opacity: 1, transition: { duration: 0.6 } }
// //       : {
// //           opacity: 1,
// //           scale: 1,
// //           y: 0,
// //           rotateY: 0,
// //           transition: {
// //             type: "spring",
// //             damping: 25,
// //             stiffness: 120,
// //             mass: 0.8,
// //             delay: index * 0.1,
// //             duration: 0.8,
// //           },
// //         },
// //     exit: shouldReduceMotion
// //       ? { opacity: 0, transition: { duration: 0.3 } }
// //       : { opacity: 0, scale: 0.8, y: -30, transition: { duration: 0.4 } },
// //   };

// //   return (
// //     <motion.div
// //       layoutId={`card-${project.id}`}
// //       variants={cardVariants}
// //       initial='hidden'
// //       animate='visible'
// //       exit='exit'
// //       className='group relative h-[350px] sm:h-[400px] lg:h-[450px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500'
// //       whileHover={
// //         shouldReduceMotion
// //           ? {}
// //           : {
// //               scale: 1.02,
// //               y: -5,
// //               rotateY: 2,
// //               boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
// //             }
// //       }
// //       transition={{ type: "spring", stiffness: 300, damping: 30 }}
// //     >
// //       <motion.div
// //         className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl'
// //         initial={{ scale: 0.8 }}
// //         whileHover={{ scale: 1.1 }}
// //         transition={{ duration: 0.5 }}
// //       />
// //       <motion.div
// //         whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
// //         className='absolute inset-0 transition-transform duration-700 ease-out'
// //       >
// //         <div className='relative w-full h-full bg-gradient-to-br from-[#E7FF1A]/10 via-violet-400/10 to-cyan-400/10 rounded-3xl'>
// //           <motion.div
// //             className='absolute inset-0 bg-gradient-to-t from-[#111316]/90 via-[#111316]/30 to-transparent'
// //             initial={{ opacity: 0.8 }}
// //             whileHover={{ opacity: 0.6 }}
// //             transition={{ duration: 0.3 }}
// //           />
// //         </div>
// //       </motion.div>
// //       <div className='relative z-10 flex h-full flex-col justify-end p-4 sm:p-6'>
// //         <motion.div
// //           className='flex items-center gap-3 sm:gap-4'
// //           initial={shouldReduceMotion ? {} : { y: 20, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
// //         >
// //           <motion.div
// //             className={`flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#E7FF1A] to-violet-400 ${shouldReduceMotion ? "" : "group-hover:scale-110"} transition-transform duration-300`}
// //             whileHover={
// //               shouldReduceMotion
// //                 ? {}
// //                 : {
// //                     rotate: 10,
// //                     scale: 1.2,
// //                     boxShadow: "0px 5px 15px rgba(231, 255, 26, 0.4)",
// //                   }
// //             }
// //             transition={{ type: "spring", stiffness: 400, damping: 25 }}
// //           >
// //             <Icon className='h-5 w-5 sm:h-6 sm:w-6 text-[#111316]' />
// //           </motion.div>
// //           <div>
// //             <motion.h3
// //               className='text-xl sm:text-2xl font-bold text-white group-hover:text-[#E7FF1A] transition-colors'
// //               whileHover={shouldReduceMotion ? {} : { x: 5 }}
// //               transition={{ type: "spring", stiffness: 400, damping: 25 }}
// //             >
// //               {project.title}
// //             </motion.h3>
// //             <motion.p
// //               className='text-xs sm:text-sm text-white/80'
// //               initial={shouldReduceMotion ? {} : { opacity: 0 }}
// //               animate={{ opacity: 1 }}
// //               transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
// //             >
// //               {project.category}
// //             </motion.p>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export function FeaturedWork() {
// //   const [activeCategory, setActiveCategory] = useState("All");
// //   const [filteredProjects, setFilteredProjects] = useState(projectsData);
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const mouseX = useMotionValue(0);
// //   const mouseY = useMotionValue(0);
// //   const shouldReduceMotion = useReducedMotion();
// //   const [ref, inView] = useInView({
// //     threshold: 0.1,
// //     triggerOnce: true,
// //     rootMargin: "-50px 0px",
// //   });
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
// //       if (shouldReduceMotion) return;
// //       if (!containerRef.current) return;
// //       const { left, top, width, height } =
// //         e.currentTarget.getBoundingClientRect();
// //       mouseX.set((e.clientX - left) / width - 0.5);
// //       mouseY.set((e.clientY - top) / height - 0.5);
// //     },
// //     [mouseX, mouseY, shouldReduceMotion]
// //   );

// //   const handleMouseLeave = useCallback(() => {
// //     if (shouldReduceMotion) return;
// //     mouseX.set(0);
// //     mouseY.set(0);
// //   }, [mouseX, mouseY, shouldReduceMotion]);

// //   useEffect(() => {
// //     if (activeCategory === "All") {
// //       setFilteredProjects(projectsData);
// //     } else {
// //       setFilteredProjects(
// //         projectsData.filter((p) => p.category === activeCategory)
// //       );
// //     }
// //   }, [activeCategory]);

// //   const containerVariants: Variants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         staggerChildren: shouldReduceMotion ? 0 : 0.15,
// //         delayChildren: shouldReduceMotion ? 0 : 0.2,
// //         duration: 0.8,
// //       },
// //     },
// //   };
// //   const itemVariants: Variants = {
// //     hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 50, opacity: 0 },
// //     visible: shouldReduceMotion
// //       ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
// //       : {
// //           y: 0,
// //           opacity: 1,
// //           transition: {
// //             type: "spring",
// //             stiffness: 100,
// //             damping: 20,
// //             mass: 0.8,
// //             duration: 0.8,
// //           },
// //         },
// //   };
// //   const filterVariants: Variants = {
// //     hidden: shouldReduceMotion
// //       ? { opacity: 0 }
// //       : { opacity: 0, y: 20, scale: 0.9 },
// //     visible: shouldReduceMotion
// //       ? { opacity: 1, transition: { duration: 0.4 } }
// //       : {
// //           opacity: 1,
// //           y: 0,
// //           scale: 1,
// //           transition: {
// //             type: "spring",
// //             stiffness: 200,
// //             damping: 25,
// //             mass: 0.8,
// //           },
// //         },
// //   };
// //   const imageVariants: Variants = {
// //     hidden: shouldReduceMotion
// //       ? { opacity: 0, y: 0 }
// //       : { opacity: 0, y: 30, scale: 0.9 },
// //     visible: shouldReduceMotion
// //       ? { opacity: 1, y: 0, transition: { duration: 0.8 } }
// //       : {
// //           opacity: 1,
// //           y: 0,
// //           scale: 1,
// //           transition: {
// //             type: "spring",
// //             stiffness: 100,
// //             damping: 25,
// //             mass: 0.8,
// //             duration: 1.0,
// //             delay: 0.1,
// //           },
// //         },
// //   };

// //   return (
// //     <section
// //       id='work'
// //       ref={ref}
// //       className='relative w-full bg-[#111316] py-12 sm:py-16 lg:py-20 2xl:py-12 pb-20 xl:pb-12 overflow-hidden'
// //     >
// //       <div className='absolute inset-0 z-0'>
// //         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30' />
// //         {!shouldReduceMotion && (
// //           <motion.div
// //             className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
// //             style={{ x: dx, y: dy }}
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: inView ? 1 : 0 }}
// //             transition={{ duration: 1.5 }}
// //           />
// //         )}
// //         <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
// //       </div>
// //       <div className='container mx-auto px-4 md:px-8 lg:px-12 relative z-10'>
// //         <motion.div
// //           ref={containerRef}
// //           onMouseMove={handleMouseMove}
// //           onMouseLeave={handleMouseLeave}
// //           className='max-w-6xl mx-auto'
// //           variants={containerVariants}
// //           initial='hidden'
// //           animate={inView ? "visible" : "hidden"}
// //         >
// //           {/* Image Section - Now visible on all screen sizes */}
// //           <motion.div
// //             variants={imageVariants}
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
// //                   src='/images/work.svg'
// //                   alt='Featured Work'
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
// //               whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
// //               transition={{ type: "spring", stiffness: 400, damping: 25 }}
// //             >
// //               <motion.div
// //                 animate={shouldReduceMotion ? {} : { rotate: [0, 10, -10, 0] }}
// //                 transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
// //               >
// //                 <Sparkles className='w-4 h-4 text-[#E7FF1A]' />
// //               </motion.div>
// //               <span className='text-sm font-medium text-white/90'>
// //                 Featured Work
// //               </span>
// //             </motion.div>
// //             <motion.h2
// //               className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white mb-4 lg:mb-6 2xl:mb-4'
// //               variants={itemVariants}
// //             >
// //               <motion.span
// //                 initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
// //                 animate={inView ? { opacity: 1, y: 0 } : {}}
// //                 transition={{ duration: 0.8, delay: 0.3 }}
// //               >
// //                 PORTFOLIO
// //               </motion.span>

// //               <motion.span
// //                 className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'
// //                 initial={
// //                   shouldReduceMotion ? {} : { opacity: 0, y: 20, scale: 0.9 }
// //                 }
// //                 animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
// //                 transition={{
// //                   duration: 1.0,
// //                   delay: 0.5,
// //                   type: "spring",
// //                   stiffness: 120,
// //                 }}
// //               >
// //                 SHOWCASE
// //               </motion.span>
// //             </motion.h2>
// //             <motion.p
// //               className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-12 2xl:mb-8'
// //               variants={itemVariants}
// //               initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
// //               animate={inView ? { opacity: 1, y: 0 } : {}}
// //               transition={{ duration: 0.8, delay: 0.7 }}
// //             >
// //               <span className='block md:hidden'>
// //                 See how we transform ideas into exceptional digital experiences.
// //               </span>
// //               <span className='hidden md:block'>
// //                 Explore our latest projects and see how we transform ideas into
// //                 exceptional digital experiences.
// //               </span>
// //             </motion.p>
// //           </motion.div>
// //           <motion.div
// //             variants={itemVariants}
// //             className='flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 lg:mb-12 2xl:mb-8'
// //           >
// //             {categories.map((category, index) => (
// //               <motion.button
// //                 key={category}
// //                 onClick={() => setActiveCategory(category)}
// //                 className={`relative rounded-full px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === category ? "text-[#111316]" : "text-white/60 hover:text-[#E7FF1A] bg-white/5 border border-white/10 hover:bg-white/10"}`}
// //                 variants={filterVariants}
// //                 initial='hidden'
// //                 animate={inView ? "visible" : "hidden"}
// //                 transition={{ delay: 0.9 + index * 0.1 }}
// //                 whileHover={
// //                   shouldReduceMotion
// //                     ? {}
// //                     : {
// //                         scale: 1.05,
// //                         y: -2,
// //                         boxShadow:
// //                           activeCategory === category
// //                             ? "0px 5px 15px rgba(231, 255, 26, 0.3)"
// //                             : "0px 5px 15px rgba(255, 255, 255, 0.1)",
// //                       }
// //                 }
// //                 whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
// //               >
// //                 {activeCategory === category && (
// //                   <motion.div
// //                     layoutId='active-category-pill'
// //                     className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A] to-violet-400 rounded-full'
// //                     transition={
// //                       shouldReduceMotion
// //                         ? { duration: 0.2 }
// //                         : { type: "spring", damping: 20, stiffness: 200 }
// //                     }
// //                     initial={{ scale: 0.8 }}
// //                     animate={{ scale: 1 }}
// //                   />
// //                 )}
// //                 <span className='relative z-10'>{category}</span>
// //               </motion.button>
// //             ))}
// //           </motion.div>
// //           <motion.div
// //             className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 2xl:gap-6 mb-8 sm:mb-12 lg:mb-16 2xl:mb-12'
// //             layout
// //           >
// //             <AnimatePresence mode='wait'>
// //               {filteredProjects.map((project, index) => (
// //                 <ProjectCard key={project.id} project={project} index={index} />
// //               ))}
// //             </AnimatePresence>
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import React, { useState, useEffect, useCallback, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   Variants,
//   useReducedMotion,
// } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { Layers, Smartphone, Cpu, Palette, Sparkles } from "lucide-react";
// import Image from "next/image";

// // --- Data ---
// const projectsData = [
//   {
//     id: 1,
//     title: "Elysian E-Commerce",
//     category: "Web Platform",
//     image: "/api/placeholder/600/400",
//     icon: Layers,
//   },
//   {
//     id: 2,
//     title: "QuantumLeap Mobile",
//     category: "Mobile App",
//     image: "/api/placeholder/600/400",
//     icon: Smartphone,
//   },
//   {
//     id: 3,
//     title: "Nova AI Dashboard",
//     category: "AI Solution",
//     image: "/api/placeholder/600/400",
//     icon: Cpu,
//   },
//   {
//     id: 4,
//     title: "Aether Design System",
//     category: "UI/UX Design",
//     image: "/api/placeholder/600/400",
//     icon: Palette,
//   },
// ];

// const categories = [
//   "All",
//   "Web Platform",
//   "Mobile App",
//   "AI Solution",
//   "UI/UX Design",
// ];

// // --- Reusable Components ---
// const ProjectCard = ({
//   project,
//   index,
// }: {
//   project: (typeof projectsData)[0];
//   index: number;
// }) => {
//   const Icon = project.icon;
//   const shouldReduceMotion = useReducedMotion();
//   const cardVariants: Variants = {
//     hidden: shouldReduceMotion
//       ? { opacity: 0 }
//       : { opacity: 0, scale: 0.9, y: 50 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         damping: 25,
//         stiffness: 120,
//         delay: index * 0.1,
//       },
//     },
//     exit: { opacity: 0, scale: 0.9, y: -30, transition: { duration: 0.3 } },
//   };

//   return (
//     <motion.div
//       layoutId={`card-${project.id}`}
//       variants={cardVariants}
//       initial='hidden'
//       animate='visible'
//       exit='exit'
//       className='group relative h-[280px] sm:h-[320px] md:h-[350px] lg:h-[400px] w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300'
//       whileHover={
//         shouldReduceMotion
//           ? {}
//           : {
//               scale: 1.02,
//               y: -5,
//               boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
//             }
//       }
//       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//     >
//       <motion.div
//         className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl'
//         initial={{ scale: 0.8 }}
//         whileHover={{ scale: 1.1 }}
//         transition={{ duration: 0.5 }}
//       />
//       <div className='absolute inset-0 bg-gradient-to-t from-[#111316]/90 via-[#111316]/30 to-transparent' />
//       <div className='relative z-10 flex h-full flex-col justify-end p-3 sm:p-4 md:p-6'>
//         <motion.div
//           className='flex items-center gap-2 sm:gap-3 md:gap-4'
//           initial={shouldReduceMotion ? {} : { y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//         >
//           <motion.div
//             className={`flex h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-[#E7FF1A] to-violet-400 ${shouldReduceMotion ? "" : "group-hover:scale-110"} transition-transform duration-300`}
//             whileHover={
//               shouldReduceMotion
//                 ? {}
//                 : {
//                     rotate: 10,
//                     scale: 1.2,
//                     boxShadow: "0px 5px 15px rgba(231, 255, 26, 0.4)",
//                   }
//             }
//             transition={{ type: "spring", stiffness: 400, damping: 25 }}
//           >
//             <Icon className='h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-[#111316]' />
//           </motion.div>
//           <div className='min-w-0 flex-1'>
//             <h3 className='text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white group-hover:text-[#E7FF1A] transition-colors truncate'>
//               {project.title}
//             </h3>
//             <p className='text-xs sm:text-sm text-white/80 truncate'>
//               {project.category}
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// // --- Main Component ---
// export function FeaturedWork() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [filteredProjects, setFilteredProjects] = useState(projectsData);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const shouldReduceMotion = useReducedMotion();
//   const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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
//       if (shouldReduceMotion || !containerRef.current) return;
//       const { left, top, width, height } =
//         e.currentTarget.getBoundingClientRect();
//       mouseX.set((e.clientX - left) / width - 0.5);
//       mouseY.set((e.clientY - top) / height - 0.5);
//     },
//     [mouseX, mouseY, shouldReduceMotion]
//   );

//   const handleMouseLeave = useCallback(() => {
//     if (shouldReduceMotion) return;
//     mouseX.set(0);
//     mouseY.set(0);
//   }, [mouseX, mouseY, shouldReduceMotion]);

//   useEffect(() => {
//     if (activeCategory === "All") {
//       setFilteredProjects(projectsData);
//     } else {
//       setFilteredProjects(
//         projectsData.filter((p) => p.category === activeCategory)
//       );
//     }
//   }, [activeCategory]);

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
//       id='work'
//       ref={ref}
//       className='relative w-full bg-[#111316] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden'
//     >
//       <div className='absolute inset-0 z-0'>
//         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2rem_2rem] opacity-30' />
//         {!shouldReduceMotion && (
//           <motion.div
//             className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
//             style={{ x: dx, y: dy }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: inView ? 1 : 0 }}
//             transition={{ duration: 1.5 }}
//           />
//         )}
//         <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
//       </div>
//       <div className='container mx-auto px-3 sm:px-4 md:px-8 relative z-10'>
//         <motion.div
//           ref={containerRef}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className='max-w-6xl mx-auto'
//           variants={containerVariants}
//           initial='hidden'
//           animate={inView ? "visible" : "hidden"}
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
//                   src='/images/work.svg'
//                   alt='Featured Work'
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
//                 Featured Work
//               </span>
//             </motion.div>
//             <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-white mb-3 sm:mb-4 px-2'>
//               <span className='block sm:inline'>PORTFOLIO</span>
//               <span className='block sm:inline bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
//                 SHOWCASE
//               </span>
//             </h2>
//             <p className='text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/80 max-w-4xl mx-auto px-2'>
//               Explore our latest projects and see how we transform ideas into
//               exceptional digital experiences.
//             </p>
//           </motion.div>

//           <motion.div
//             variants={itemVariants}
//             className='flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2'
//           >
//             {categories.map((category) => (
//               <motion.button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`relative rounded-full px-3 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-xs sm:text-sm font-medium transition-all duration-300 ${activeCategory === category ? "text-[#111316]" : "text-white/70 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10"}`}
//                 whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
//                 whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
//               >
//                 {activeCategory === category && (
//                   <motion.div
//                     layoutId='active-category-pill'
//                     className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A] to-violet-400 rounded-full'
//                     transition={{ type: "spring", damping: 20, stiffness: 200 }}
//                   />
//                 )}
//                 <span className='relative z-10'>{category}</span>
//               </motion.button>
//             ))}
//           </motion.div>

//           <motion.div
//             className='grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8'
//             layout
//           >
//             <AnimatePresence mode='wait'>
//               {filteredProjects.map((project, index) => (
//                 <ProjectCard key={project.id} project={project} index={index} />
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  Variants,
  useReducedMotion,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Layers, Smartphone, Cpu, Palette, Sparkles } from "lucide-react";
import Image from "next/image";

// --- Data ---
const projectsData = [
  {
    id: 1,
    title: "Elysian E-Commerce",
    category: "Web Platform",
    image: "/api/placeholder/600/400",
    icon: Layers,
  },
  {
    id: 2,
    title: "QuantumLeap Mobile",
    category: "Mobile App",
    image: "/api/placeholder/600/400",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Nova AI Dashboard",
    category: "AI Solution",
    image: "/api/placeholder/600/400",
    icon: Cpu,
  },
  {
    id: 4,
    title: "Aether Design System",
    category: "UI/UX Design",
    image: "/api/placeholder/600/400",
    icon: Palette,
  },
];

const categories = [
  "All",
  "Web Platform",
  "Mobile App",
  "AI Solution",
  "UI/UX Design",
];

// --- Reusable Components ---
const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projectsData)[0];
  index: number;
}) => {
  const Icon = project.icon;
  const shouldReduceMotion = useReducedMotion();
  const cardVariants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 120,
        delay: index * 0.1,
      },
    },
    exit: { opacity: 0, scale: 0.9, y: -30, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      layoutId={`card-${project.id}`}
      variants={cardVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300'
      style={{
        height: "clamp(280px, 40vh, 400px)",
      }}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              scale: 1.02,
              y: -5,
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
            }
      }
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl'
        initial={{ scale: 0.8 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
      <div className='absolute inset-0 bg-gradient-to-t from-[#111316]/90 via-[#111316]/30 to-transparent' />
      <div
        className='relative z-10 flex h-full flex-col justify-end'
        style={{
          padding: "clamp(0.75rem, 3vw, 1.5rem)",
        }}
      >
        <motion.div
          className='flex items-center'
          style={{
            gap: "clamp(0.5rem, 2vw, 1rem)",
          }}
          initial={shouldReduceMotion ? {} : { y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div
            className={`flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-[#E7FF1A] to-violet-400 ${shouldReduceMotion ? "" : "group-hover:scale-110"} transition-transform duration-300`}
            style={{
              width: "clamp(2rem, 6vw, 3rem)",
              height: "clamp(2rem, 6vw, 3rem)",
            }}
            whileHover={
              shouldReduceMotion
                ? {}
                : {
                    rotate: 10,
                    scale: 1.2,
                    boxShadow: "0px 5px 15px rgba(231, 255, 26, 0.4)",
                  }
            }
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Icon
              className='text-[#111316]'
              style={{
                width: "clamp(1rem, 3vw, 1.5rem)",
                height: "clamp(1rem, 3vw, 1.5rem)",
              }}
            />
          </motion.div>
          <div className='min-w-0 flex-1'>
            <h3
              className='font-bold text-white group-hover:text-[#E7FF1A] transition-colors truncate'
              style={{
                fontSize: "clamp(0.9rem, 2.5vw + 0.2rem, 1.25rem)",
                lineHeight: "1.2",
              }}
            >
              {project.title}
            </h3>
            <p
              className='text-white/80 truncate'
              style={{
                fontSize: "clamp(0.75rem, 1.8vw + 0.1rem, 0.95rem)",
              }}
            >
              {project.category}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
export function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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
      if (shouldReduceMotion || !containerRef.current) return;
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - left) / width - 0.5);
      mouseY.set((e.clientY - top) / height - 0.5);
    },
    [mouseX, mouseY, shouldReduceMotion]
  );

  const handleMouseLeave = useCallback(() => {
    if (shouldReduceMotion) return;
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY, shouldReduceMotion]);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((p) => p.category === activeCategory)
      );
    }
  }, [activeCategory]);

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
      id='work'
      ref={ref}
      className='relative w-full bg-[#111316] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden'
    >
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2rem_2rem] opacity-30' />
        {!shouldReduceMotion && (
          <motion.div
            className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
            style={{ x: dx, y: dy }}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1.5 }}
          />
        )}
        <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
      </div>
      <div className='container mx-auto px-3 sm:px-4 md:px-8 relative z-10'>
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className='max-w-6xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
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
                  src='/images/work.svg'
                  alt='Featured Work'
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
            {/* Badge with matching size from About section */}
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
                Featured Work
              </span>
            </motion.div>

            {/* Title with matching size from About section */}
            <h2
              className='font-bold leading-[0.85] text-white mb-[clamp(1rem,3vh,2rem)]'
              style={{
                fontSize: "clamp(2rem, 8vw + 0.5rem, min(3.5rem, 10vw))",
                lineHeight: "0.9",
                letterSpacing: "-0.02em",
              }}
            >
              <span className='block sm:inline'>PORTFOLIO</span>{" "}
              <span className='block sm:inline bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                SHOWCASE
              </span>
            </h2>

            {/* Subtitle with matching size from About section */}
            <motion.p
              className='leading-relaxed text-white/85 max-w-4xl mx-auto px-2'
              style={{
                fontSize: "clamp(1rem, 2.8vw + 0.4rem, 1.3rem)",
                lineHeight: "1.6",
              }}
              variants={itemVariants}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Explore our latest projects and see how we transform ideas into
              exceptional digital experiences.
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='flex flex-wrap justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2'
            style={{
              gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
            }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative rounded-full font-medium transition-all duration-300 ${activeCategory === category ? "text-[#111316]" : "text-white/70 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10"}`}
                style={{
                  padding:
                    "clamp(0.375rem, 1.5vw, 0.625rem) clamp(0.75rem, 3vw, 1.25rem)",
                  fontSize: "clamp(0.75rem, 2vw + 0.1rem, 0.9rem)",
                }}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId='active-category-pill'
                    className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A] to-violet-400 rounded-full'
                    transition={{ type: "spring", damping: 20, stiffness: 200 }}
                  />
                )}
                <span className='relative z-10'>{category}</span>
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            className='grid grid-cols-1 md:grid-cols-2'
            style={{
              gap: "clamp(1rem, 3vw, 2rem)",
            }}
            layout
          >
            <AnimatePresence mode='wait'>
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
