// // // "use client";

// // // import React, { useState, useEffect, useCallback, useRef } from "react";
// // // import {
// // //   motion,
// // //   AnimatePresence,
// // //   useMotionValue,
// // //   useSpring,
// // //   useTransform,
// // //   Variants,
// // //   useReducedMotion,
// // // } from "framer-motion";
// // // import { useInView } from "react-intersection-observer";
// // // import { Layers, Smartphone, Cpu, Palette, Sparkles } from "lucide-react";
// // // import Image from "next/image";

// // // // --- Data ---
// // // const projectsData = [
// // //   {
// // //     id: 1,
// // //     title: "E-Horizon Hub",
// // //     category: "Tech Platform",
// // //     image: "/images/projects/ehorizon-hub.png",
// // //     icon: Cpu,
// // //     description: "Digital innovation platform for futuristic solutions and cutting-edge technology implementations.",
// // //     technologies: ["React", "Next.js", "TypeScript"],
// // //     link: "https://www.ehorizonhub.com/"
// // //   },
// // //   {
// // //     id: 2,
// // //     title: "HONO Engineering",
// // //     category: "Engineering Portal",
// // //     image: "/images/projects/hono-engineering.png",
// // //     icon: Layers,
// // //     description: "Premium engineering services platform delivering custom solutions with honor and excellence.",
// // //     technologies: ["React", "Node.js", "MongoDB"],
// // //     link: "https://www.honoengsl.com/"
// // //   },
// // //   {
// // //     id: 3,
// // //     title: "DJ Sonic Architect",
// // //     category: "Music Platform",
// // //     image: "/images/projects/dj-sonic.png",
// // //     icon: Smartphone,
// // //     description: "Immersive music experience platform for electronic music and live performances.",
// // //     technologies: ["Vue.js", "WebAudio API", "Three.js"],
// // //     link: "#"
// // //   },
// // //   {
// // //     id: 4,
// // //     title: "Villa Luxe Resort",
// // //     category: "Hospitality Web",
// // //     image: "/images/projects/villa-luxe.png",
// // //     icon: Palette,
// // //     description: "Luxury accommodation booking platform with premium user experience and elegant design.",
// // //     technologies: ["React", "Tailwind", "Framer Motion"],
// // //     link: "#"
// // //   },
// // // ];

// // // const categories = [
// // //   "All",
// // //   "Web Platform",
// // //   "Mobile App",
// // //   "AI Solution",
// // //   "UI/UX Design",
// // // ];

// // // // --- Reusable Components ---
// // // const ProjectCard = ({
// // //   project,
// // //   index,
// // // }: {
// // //   project: (typeof projectsData)[0];
// // //   index: number;
// // // }) => {
// // //   const Icon = project.icon;
// // //   const shouldReduceMotion = useReducedMotion();
// // //   const cardVariants: Variants = {
// // //     hidden: shouldReduceMotion
// // //       ? { opacity: 0 }
// // //       : { opacity: 0, scale: 0.9, y: 50 },
// // //     visible: {
// // //       opacity: 1,
// // //       scale: 1,
// // //       y: 0,
// // //       transition: {
// // //         type: "spring",
// // //         damping: 25,
// // //         stiffness: 120,
// // //         delay: index * 0.1,
// // //       },
// // //     },
// // //     exit: { opacity: 0, scale: 0.9, y: -30, transition: { duration: 0.3 } },
// // //   };

// // //   return (
// // //     <motion.div
// // //       layoutId={`card-${project.id}`}
// // //       variants={cardVariants}
// // //       initial='hidden'
// // //       animate='visible'
// // //       exit='exit'
// // //       className='group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300'
// // //       style={{
// // //         height: "clamp(280px, 40vh, 400px)",
// // //       }}
// // //       whileHover={
// // //         shouldReduceMotion
// // //           ? {}
// // //           : {
// // //               scale: 1.02,
// // //               y: -5,
// // //               boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
// // //             }
// // //       }
// // //       transition={{ type: "spring", stiffness: 300, damping: 30 }}
// // //     >
// // //       <motion.div
// // //         className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl'
// // //         initial={{ scale: 0.8 }}
// // //         whileHover={{ scale: 1.1 }}
// // //         transition={{ duration: 0.5 }}
// // //       />
// // //       <div className='absolute inset-0 bg-gradient-to-t from-[#111316]/90 via-[#111316]/30 to-transparent' />
// // //       <div
// // //         className='relative z-10 flex h-full flex-col justify-end'
// // //         style={{
// // //           padding: "clamp(0.75rem, 3vw, 1.5rem)",
// // //         }}
// // //       >
// // //         <motion.div
// // //           className='flex items-center'
// // //           style={{
// // //             gap: "clamp(0.5rem, 2vw, 1rem)",
// // //           }}
// // //           initial={shouldReduceMotion ? {} : { y: 20, opacity: 0 }}
// // //           animate={{ y: 0, opacity: 1 }}
// // //           transition={{ delay: 0.2, duration: 0.5 }}
// // //         >
// // //           <motion.div
// // //             className={`flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-[#E7FF1A] to-violet-400 ${shouldReduceMotion ? "" : "group-hover:scale-110"} transition-transform duration-300`}
// // //             style={{
// // //               width: "clamp(2rem, 6vw, 3rem)",
// // //               height: "clamp(2rem, 6vw, 3rem)",
// // //             }}
// // //             whileHover={
// // //               shouldReduceMotion
// // //                 ? {}
// // //                 : {
// // //                     rotate: 10,
// // //                     scale: 1.2,
// // //                     boxShadow: "0px 5px 15px rgba(231, 255, 26, 0.4)",
// // //                   }
// // //             }
// // //             transition={{ type: "spring", stiffness: 400, damping: 25 }}
// // //           >
// // //             <Icon
// // //               className='text-[#111316]'
// // //               style={{
// // //                 width: "clamp(1rem, 3vw, 1.5rem)",
// // //                 height: "clamp(1rem, 3vw, 1.5rem)",
// // //               }}
// // //             />
// // //           </motion.div>
// // //           <div className='min-w-0 flex-1'>
// // //             <h3
// // //               className='font-bold text-white group-hover:text-[#E7FF1A] transition-colors truncate'
// // //               style={{
// // //                 fontSize: "clamp(0.9rem, 2.5vw + 0.2rem, 1.25rem)",
// // //                 lineHeight: "1.2",
// // //               }}
// // //             >
// // //               {project.title}
// // //             </h3>
// // //             <p
// // //               className='text-white/80 truncate'
// // //               style={{
// // //                 fontSize: "clamp(0.75rem, 1.8vw + 0.1rem, 0.95rem)",
// // //               }}
// // //             >
// // //               {project.category}
// // //             </p>
// // //           </div>
// // //         </motion.div>
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // // --- Main Component ---
// // // export function FeaturedWork() {
// // //   const [activeCategory, setActiveCategory] = useState("All");
// // //   const [filteredProjects, setFilteredProjects] = useState(projectsData);
// // //   const containerRef = useRef<HTMLDivElement>(null);
// // //   const mouseX = useMotionValue(0);
// // //   const mouseY = useMotionValue(0);
// // //   const shouldReduceMotion = useReducedMotion();
// // //   const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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
// // //       if (shouldReduceMotion || !containerRef.current) return;
// // //       const { left, top, width, height } =
// // //         e.currentTarget.getBoundingClientRect();
// // //       mouseX.set((e.clientX - left) / width - 0.5);
// // //       mouseY.set((e.clientY - top) / height - 0.5);
// // //     },
// // //     [mouseX, mouseY, shouldReduceMotion]
// // //   );

// // //   const handleMouseLeave = useCallback(() => {
// // //     if (shouldReduceMotion) return;
// // //     mouseX.set(0);
// // //     mouseY.set(0);
// // //   }, [mouseX, mouseY, shouldReduceMotion]);

// // //   useEffect(() => {
// // //     if (activeCategory === "All") {
// // //       setFilteredProjects(projectsData);
// // //     } else {
// // //       setFilteredProjects(
// // //         projectsData.filter((p) => p.category === activeCategory)
// // //       );
// // //     }
// // //   }, [activeCategory]);

// // //   const containerVariants: Variants = {
// // //     hidden: { opacity: 0 },
// // //     visible: {
// // //       opacity: 1,
// // //       transition: {
// // //         staggerChildren: shouldReduceMotion ? 0 : 0.15,
// // //         delayChildren: shouldReduceMotion ? 0 : 0.2,
// // //       },
// // //     },
// // //   };

// // //   const itemVariants: Variants = {
// // //     hidden: shouldReduceMotion ? { opacity: 0 } : { y: 20, opacity: 0 },
// // //     visible: {
// // //       y: 0,
// // //       opacity: 1,
// // //       transition: { type: "spring", stiffness: 120, damping: 20, mass: 0.8 },
// // //     },
// // //   };

// // //   return (
// // //     <section
// // //       id='work'
// // //       ref={ref}
// // //       className='relative w-full bg-[#111316] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden'
// // //     >
// // //       <div className='absolute inset-0 z-0'>
// // //         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2rem_2rem] opacity-30' />
// // //         {!shouldReduceMotion && (
// // //           <motion.div
// // //             className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
// // //             style={{ x: dx, y: dy }}
// // //             initial={{ opacity: 0 }}
// // //             animate={{ opacity: inView ? 1 : 0 }}
// // //             transition={{ duration: 1.5 }}
// // //           />
// // //         )}
// // //         <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
// // //       </div>
// // //       <div className='container mx-auto px-3 sm:px-4 md:px-8 relative z-10'>
// // //         <motion.div
// // //           ref={containerRef}
// // //           onMouseMove={handleMouseMove}
// // //           onMouseLeave={handleMouseLeave}
// // //           className='max-w-6xl mx-auto'
// // //           variants={containerVariants}
// // //           initial='hidden'
// // //           animate={inView ? "visible" : "hidden"}
// // //         >
// // //           <motion.div
// // //             variants={itemVariants}
// // //             className='flex justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12'
// // //           >
// // //             <motion.div
// // //               className='relative group'
// // //               whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
// // //               transition={{ type: "spring", stiffness: 300, damping: 30 }}
// // //             >
// // //               <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-125' />
// // //               <div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64'>
// // //                 <Image
// // //                   src='/images/work.svg'
// // //                   alt='Featured Work'
// // //                   fill
// // //                   className='object-contain drop-shadow-2xl'
// // //                   priority
// // //                   sizes='(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 224px, 256px'
// // //                 />
// // //               </div>
// // //             </motion.div>
// // //           </motion.div>

// // //           <motion.div
// // //             variants={itemVariants}
// // //             className='text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16'
// // //           >
// // //             {/* Badge with matching size from About section */}
// // //             <motion.div
// // //               variants={itemVariants}
// // //               className='inline-flex items-center gap-[clamp(0.4rem,1.5vw,0.75rem)] bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-[clamp(1rem,3vh,2rem)]'
// // //               style={{
// // //                 padding: `clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.75rem)`,
// // //               }}
// // //               whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
// // //               transition={{ type: "spring", stiffness: 400, damping: 25 }}
// // //             >
// // //               <Sparkles
// // //                 className='text-[#E7FF1A]'
// // //                 style={{
// // //                   width: "clamp(14px, 3.5vw, 20px)",
// // //                   height: "clamp(14px, 3.5vw, 20px)",
// // //                 }}
// // //               />
// // //               <span
// // //                 className='font-medium text-white/90'
// // //                 style={{
// // //                   fontSize: "clamp(0.8rem, 2.2vw, 1.1rem)",
// // //                 }}
// // //               >
// // //                 Featured Work
// // //               </span>
// // //             </motion.div>

// // //             {/* Title with matching size from About section */}
// // //             <h2
// // //               className='font-bold leading-[0.85] text-white mb-[clamp(1rem,3vh,2rem)]'
// // //               style={{
// // //                 fontSize: "clamp(2rem, 8vw + 0.5rem, min(3.5rem, 10vw))",
// // //                 lineHeight: "0.9",
// // //                 letterSpacing: "-0.02em",
// // //               }}
// // //             >
// // //               <span className='block sm:inline'>PORTFOLIO</span>{" "}
// // //               <span className='block sm:inline bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
// // //                 SHOWCASE
// // //               </span>
// // //             </h2>

// // //             {/* Subtitle with matching size from About section */}
// // //             <motion.p
// // //               className='leading-relaxed text-white/85 max-w-4xl mx-auto px-2'
// // //               style={{
// // //                 fontSize: "clamp(1rem, 2.8vw + 0.4rem, 1.3rem)",
// // //                 lineHeight: "1.6",
// // //               }}
// // //               variants={itemVariants}
// // //               initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
// // //               animate={inView ? { opacity: 1, y: 0 } : {}}
// // //               transition={{ duration: 0.8, delay: 0.7 }}
// // //             >
// // //               Explore our latest projects and see how we transform ideas into
// // //               exceptional digital experiences.
// // //             </motion.p>
// // //           </motion.div>

// // //           <motion.div
// // //             variants={itemVariants}
// // //             className='flex flex-wrap justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2'
// // //             style={{
// // //               gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
// // //             }}
// // //           >
// // //             {categories.map((category) => (
// // //               <motion.button
// // //                 key={category}
// // //                 onClick={() => setActiveCategory(category)}
// // //                 className={`relative rounded-full font-medium transition-all duration-300 ${activeCategory === category ? "text-[#111316]" : "text-white/70 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10"}`}
// // //                 style={{
// // //                   padding:
// // //                     "clamp(0.375rem, 1.5vw, 0.625rem) clamp(0.75rem, 3vw, 1.25rem)",
// // //                   fontSize: "clamp(0.75rem, 2vw + 0.1rem, 0.9rem)",
// // //                 }}
// // //                 whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
// // //                 whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
// // //               >
// // //                 {activeCategory === category && (
// // //                   <motion.div
// // //                     layoutId='active-category-pill'
// // //                     className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A] to-violet-400 rounded-full'
// // //                     transition={{ type: "spring", damping: 20, stiffness: 200 }}
// // //                   />
// // //                 )}
// // //                 <span className='relative z-10'>{category}</span>
// // //               </motion.button>
// // //             ))}
// // //           </motion.div>

// // //           <motion.div
// // //             className='grid grid-cols-1 md:grid-cols-2'
// // //             style={{
// // //               gap: "clamp(1rem, 3vw, 2rem)",
// // //             }}
// // //             layout
// // //           >
// // //             <AnimatePresence mode='wait'>
// // //               {filteredProjects.map((project, index) => (
// // //                 <ProjectCard key={project.id} project={project} index={index} />
// // //               ))}
// // //             </AnimatePresence>
// // //           </motion.div>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

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

// // // --- Data ---
// // const projectsData = [
// //   {
// //     id: 1,
// //     title: "Dilshan Jayatissa Portfolio",
// //     category: "Personal Portfolio",
// //     image: "/images/projects/portfolio.png",
// //     icon: Palette,
// //     description: "Creative full-stack developer portfolio showcasing innovative web experiences with modern design and cutting-edge technology.",
// //     technologies: ["Next.js", "React", "Framer Motion", "TypeScript"],
// //     link: "https://www.dilshanjayatissa.online/"
// //   },
// //   {
// //     id: 2,
// //     title: "E-Horizon Hub",
// //     category: "Tech Platform",
// //     image: "/images/projects/ehorizon-hub.png",
// //     icon: Cpu,
// //     description: "Digital innovation platform for futuristic solutions and cutting-edge technology implementations.",
// //     technologies: ["React", "Next.js", "TypeScript"],
// //     link: "https://www.ehorizonhub.com/"
// //   },
// //   {
// //     id: 3,
// //     title: "HONO Engineering",
// //     category: "Engineering Portal",
// //     image: "/images/projects/hono-engineering.png",
// //     icon: Layers,
// //     description: "Premium engineering services platform delivering custom solutions with honor and excellence.",
// //     technologies: ["React", "Node.js", "MongoDB"],
// //     link: "https://www.honoengsl.com/"
// //   },
// //   {
// //     id: 4,
// //     title: "FundRaise Hub",
// //     category: "Crowdfunding Platform",
// //     image: "/images/projects/fundraise-hub.png",
// //     icon: Sparkles,
// //     description: "Revolutionary platform connecting passionate creators with global supporters for impactful fundraising.",
// //     technologies: ["React", "Node.js", "PostgreSQL"],
// //     link: "#"
// //   },
// //   {
// //     id: 5,
// //     title: "3D Model Creator",
// //     category: "Creative Tool",
// //     image: "/images/projects/3d-creator.png",
// //     icon: Cpu,
// //     description: "Advanced 3D modeling platform for designing, customizing, and exporting professional 3D models.",
// //     technologies: ["Three.js", "WebGL", "React"],
// //     link: "#"
// //   },
// //   {
// //     id: 6,
// //     title: "WheelsOnDemand",
// //     category: "Car Rental Platform",
// //     image: "/images/projects/wheels-on-demand.png",
// //     icon: Smartphone,
// //     description: "Premium car rental service offering impressive experiences with effortless booking and freedom.",
// //     technologies: ["React", "Express", "MongoDB"],
// //     link: "#"
// //   },
// //   {
// //     id: 7,
// //     title: "DJ Sonic Architect",
// //     category: "Music Platform",
// //     image: "/images/projects/dj-sonic.png",
// //     icon: Smartphone,
// //     description: "Immersive music experience platform for electronic music and live performances.",
// //     technologies: ["Vue.js", "WebAudio API", "Three.js"],
// //     link: "#"
// //   },
// //   {
// //     id: 8,
// //     title: "Villa Luxe Resort",
// //     category: "Hospitality Web",
// //     image: "/images/projects/villa-luxe.png",
// //     icon: Palette,
// //     description: "Luxury accommodation booking platform with premium user experience and elegant design.",
// //     technologies: ["React", "Tailwind", "Framer Motion"],
// //     link: "#"
// //   },
// // ];

// // const categories = [
// //   "All",
// //   "Personal Portfolio",
// //   "Tech Platform",
// //   "Engineering Portal",
// //   "Crowdfunding Platform",
// //   "Creative Tool",
// //   "Car Rental Platform",
// //   "Music Platform",
// //   "Hospitality Web",
// // ];

// // // --- Reusable Components ---
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
// //       : { opacity: 0, scale: 0.9, y: 50 },
// //     visible: {
// //       opacity: 1,
// //       scale: 1,
// //       y: 0,
// //       transition: {
// //         type: "spring",
// //         damping: 25,
// //         stiffness: 120,
// //         delay: index * 0.1,
// //       },
// //     },
// //     exit: { opacity: 0, scale: 0.9, y: -30, transition: { duration: 0.3 } },
// //   };

// //   return (
// //     <motion.div
// //       layoutId={`card-${project.id}`}
// //       variants={cardVariants}
// //       initial='hidden'
// //       animate='visible'
// //       exit='exit'
// //       className='group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 shadow-2xl hover:border-white/20 transition-all duration-300 cursor-pointer'
// //       style={{
// //         height: "clamp(280px, 40vh, 400px)",
// //       }}
// //       whileHover={
// //         shouldReduceMotion
// //           ? {}
// //           : {
// //               scale: 1.02,
// //               y: -5,
// //               boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
// //             }
// //       }
// //       transition={{ type: "spring", stiffness: 300, damping: 30 }}
// //       onClick={() => project.link && project.link !== "#" && window.open(project.link, '_blank')}
// //     >
// //       <motion.div
// //         className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl'
// //         initial={{ scale: 0.8 }}
// //         whileHover={{ scale: 1.1 }}
// //         transition={{ duration: 0.5 }}
// //       />

// //       {/* Project Image Background - Clean and Clear */}
// //       <div className='absolute inset-0'>
// //         <Image
// //           src={project.image}
// //           alt={project.title}
// //           fill
// //           className='object-cover'
// //           sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
// //           quality={100}
// //         />
// //       </div>

// //       {/* Light overlay for text readability */}
// //       <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
// //       <div
// //         className='relative z-10 flex h-full flex-col justify-end'
// //         style={{
// //           padding: "clamp(0.75rem, 3vw, 1.5rem)",
// //         }}
// //       >
// //         <motion.div
// //           className='flex items-center'
// //           style={{
// //             gap: "clamp(0.5rem, 2vw, 1rem)",
// //           }}
// //           initial={shouldReduceMotion ? {} : { y: 20, opacity: 0 }}
// //           animate={{ y: 0, opacity: 1 }}
// //           transition={{ delay: 0.2, duration: 0.5 }}
// //         >
// //           <motion.div
// //             className={`flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-[#E7FF1A] to-violet-400 ${shouldReduceMotion ? "" : "group-hover:scale-110"} transition-transform duration-300`}
// //             style={{
// //               width: "clamp(2rem, 6vw, 3rem)",
// //               height: "clamp(2rem, 6vw, 3rem)",
// //             }}
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
// //             <Icon
// //               className='text-[#111316]'
// //               style={{
// //                 width: "clamp(1rem, 3vw, 1.5rem)",
// //                 height: "clamp(1rem, 3vw, 1.5rem)",
// //               }}
// //             />
// //           </motion.div>
// //           <div className='min-w-0 flex-1'>
// //             <h3
// //               className='font-bold text-white group-hover:text-[#E7FF1A] transition-colors truncate'
// //               style={{
// //                 fontSize: "clamp(0.9rem, 2.5vw + 0.2rem, 1.25rem)",
// //                 lineHeight: "1.2",
// //               }}
// //             >
// //               {project.title}
// //             </h3>
// //             <p
// //               className='text-white/80 truncate'
// //               style={{
// //                 fontSize: "clamp(0.75rem, 1.8vw + 0.1rem, 0.95rem)",
// //               }}
// //             >
// //               {project.category}
// //             </p>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // // --- Main Component ---
// // export function FeaturedWork() {
// //   const [activeCategory, setActiveCategory] = useState("All");
// //   const [filteredProjects, setFilteredProjects] = useState(projectsData);
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const mouseX = useMotionValue(0);
// //   const mouseY = useMotionValue(0);
// //   const shouldReduceMotion = useReducedMotion();
// //   const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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
// //       if (shouldReduceMotion || !containerRef.current) return;
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
// //       },
// //     },
// //   };

// //   const itemVariants: Variants = {
// //     hidden: shouldReduceMotion ? { opacity: 0 } : { y: 20, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: { type: "spring", stiffness: 120, damping: 20, mass: 0.8 },
// //     },
// //   };

// //   return (
// //     <section
// //       id='work'
// //       ref={ref}
// //       className='relative w-full bg-[#111316] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden'
// //     >
// //       <div className='absolute inset-0 z-0'>
// //         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2rem_2rem] opacity-30' />
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
// //       <div className='container mx-auto px-3 sm:px-4 md:px-8 relative z-10'>
// //         <motion.div
// //           ref={containerRef}
// //           onMouseMove={handleMouseMove}
// //           onMouseLeave={handleMouseLeave}
// //           className='max-w-6xl mx-auto'
// //           variants={containerVariants}
// //           initial='hidden'
// //           animate={inView ? "visible" : "hidden"}
// //         >
// //           <motion.div
// //             variants={itemVariants}
// //             className='flex justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12'
// //           >
// //             <motion.div
// //               className='relative group'
// //               whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
// //               transition={{ type: "spring", stiffness: 300, damping: 30 }}
// //             >
// //               <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-125' />
// //               <div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64'>
// //                 <Image
// //                   src='/images/work.svg'
// //                   alt='Featured Work'
// //                   fill
// //                   className='object-contain drop-shadow-2xl'
// //                   priority
// //                   sizes='(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 224px, 256px'
// //                 />
// //               </div>
// //             </motion.div>
// //           </motion.div>

// //           <motion.div
// //             variants={itemVariants}
// //             className='text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16'
// //           >
// //             {/* Badge with matching size from About section */}
// //             <motion.div
// //               variants={itemVariants}
// //               className='inline-flex items-center gap-[clamp(0.4rem,1.5vw,0.75rem)] bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-[clamp(1rem,3vh,2rem)]'
// //               style={{
// //                 padding: `clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.75rem)`,
// //               }}
// //               whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
// //               transition={{ type: "spring", stiffness: 400, damping: 25 }}
// //             >
// //               <Sparkles
// //                 className='text-[#E7FF1A]'
// //                 style={{
// //                   width: "clamp(14px, 3.5vw, 20px)",
// //                   height: "clamp(14px, 3.5vw, 20px)",
// //                 }}
// //               />
// //               <span
// //                 className='font-medium text-white/90'
// //                 style={{
// //                   fontSize: "clamp(0.8rem, 2.2vw, 1.1rem)",
// //                 }}
// //               >
// //                 Featured Work
// //               </span>
// //             </motion.div>

// //             {/* Title with matching size from About section */}
// //             <h2
// //               className='font-bold leading-[0.85] text-white mb-[clamp(1rem,3vh,2rem)]'
// //               style={{
// //                 fontSize: "clamp(2rem, 8vw + 0.5rem, min(3.5rem, 10vw))",
// //                 lineHeight: "0.9",
// //                 letterSpacing: "-0.02em",
// //               }}
// //             >
// //               <span className='block sm:inline'>PORTFOLIO</span>{" "}
// //               <span className='block sm:inline bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
// //                 SHOWCASE
// //               </span>
// //             </h2>

// //             {/* Subtitle with matching size from About section */}
// //             <motion.p
// //               className='leading-relaxed text-white/85 max-w-4xl mx-auto px-2'
// //               style={{
// //                 fontSize: "clamp(1rem, 2.8vw + 0.4rem, 1.3rem)",
// //                 lineHeight: "1.6",
// //               }}
// //               variants={itemVariants}
// //               initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
// //               animate={inView ? { opacity: 1, y: 0 } : {}}
// //               transition={{ duration: 0.8, delay: 0.7 }}
// //             >
// //               Explore our latest projects and see how we transform ideas into
// //               exceptional digital experiences.
// //             </motion.p>
// //           </motion.div>

// //           <motion.div
// //             variants={itemVariants}
// //             className='flex flex-wrap justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2'
// //             style={{
// //               gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
// //             }}
// //           >
// //             {categories.map((category) => (
// //               <motion.button
// //                 key={category}
// //                 onClick={() => setActiveCategory(category)}
// //                 className={`relative rounded-full font-medium transition-all duration-300 ${activeCategory === category ? "text-[#111316]" : "text-white/70 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10"}`}
// //                 style={{
// //                   padding:
// //                     "clamp(0.375rem, 1.5vw, 0.625rem) clamp(0.75rem, 3vw, 1.25rem)",
// //                   fontSize: "clamp(0.75rem, 2vw + 0.1rem, 0.9rem)",
// //                 }}
// //                 whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
// //                 whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
// //               >
// //                 {activeCategory === category && (
// //                   <motion.div
// //                     layoutId='active-category-pill'
// //                     className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A] to-violet-400 rounded-full'
// //                     transition={{ type: "spring", damping: 20, stiffness: 200 }}
// //                   />
// //                 )}
// //                 <span className='relative z-10'>{category}</span>
// //               </motion.button>
// //             ))}
// //           </motion.div>

// //           <motion.div
// //             className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
// //             style={{
// //               gap: "clamp(1rem, 3vw, 2rem)",
// //             }}
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
//     title: "Portfolio",
//     category: "Personal Portfolio",
//     image: "/images/projects/portfolio.png",
//     icon: Palette,
//     description:
//       "Creative full-stack developer portfolio showcasing innovative web experiences with modern design and cutting-edge technology.",
//     technologies: ["Next.js", "React", "Framer Motion", "TypeScript"],
//     link: "https://www.dilshanjayatissa.online/",
//   },
//   {
//     id: 2,
//     title: "E-Horizon Hub",
//     category: "Tech Platform",
//     image: "/images/projects/ehorizon-hub.png",
//     icon: Cpu,
//     description:
//       "Digital innovation platform for futuristic solutions and cutting-edge technology implementations.",
//     technologies: ["React", "Next.js", "TypeScript"],
//     link: "https://www.ehorizonhub.com/",
//   },
//   {
//     id: 3,
//     title: "HONO Engineering",
//     category: "Engineering Portal",
//     image: "/images/projects/hono-engineering.png",
//     icon: Layers,
//     description:
//       "Premium engineering services platform delivering custom solutions with honor and excellence.",
//     technologies: ["React", "Node.js", "MongoDB"],
//     link: "https://www.honoengsl.com/",
//   },
//   {
//     id: 4,
//     title: "FundRaise Hub",
//     category: "Crowdfunding Platform",
//     image: "/images/projects/fundraise-hub.png",
//     icon: Sparkles,
//     description:
//       "Revolutionary platform connecting passionate creators with global supporters for impactful fundraising.",
//     technologies: ["React", "Node.js", "PostgreSQL"],
//     link: "#",
//   },
//   {
//     id: 5,
//     title: "3D Model Creator",
//     category: "Creative Tool",
//     image: "/images/projects/3d-creator.png",
//     icon: Cpu,
//     description:
//       "Advanced 3D modeling platform for designing, customizing, and exporting professional 3D models.",
//     technologies: ["Three.js", "WebGL", "React"],
//     link: "https://3-d-creator.vercel.app/",
//   },
//   {
//     id: 6,
//     title: "WheelsOnDemand",
//     category: "Car Rental Platform",
//     image: "/images/projects/wheels-on-demand.png",
//     icon: Smartphone,
//     description:
//       "Premium car rental service offering impressive experiences with effortless booking and freedom.",
//     technologies: ["React", "Express", "MongoDB"],
//     link: "#",
//   },
//   {
//     id: 7,
//     title: "DJ Sonic Architect",
//     category: "Music Platform",
//     image: "/images/projects/dj-sonic.png",
//     icon: Smartphone,
//     description:
//       "Immersive music experience platform for electronic music and live performances.",
//     technologies: ["Vue.js", "WebAudio API", "Three.js"],
//     link: "#",
//   },
//   {
//     id: 8,
//     title: "O2 Villas",
//     category: "Hospitality Web",
//     image: "/images/projects/o2-villas.png",
//     icon: Palette,
//     description:
//       "Premium villa rental platform offering luxury accommodations with seamless booking experience.",
//     technologies: ["React", "Tailwind", "Framer Motion"],
//     link: "#",
//   },
//   {
//     id: 9,
//     title: "Villa Luxe Resort",
//     category: "Hospitality Web",
//     image: "/images/projects/villa-luxe.png",
//     icon: Palette,
//     description:
//       "Exclusive luxury resort website featuring unparalleled accommodations where luxury meets tranquility.",
//     technologies: ["React", "Next.js", "Tailwind", "Framer Motion"],
//     link: "#",
//   },
// ];

// const categories = [
//   "All",
//   "Personal Portfolio",
//   "Tech Platform",
//   "Engineering Portal",
//   "Crowdfunding Platform",
//   "Creative Tool",
//   "Car Rental Platform",
//   "Music Platform",
//   "Hospitality Web",
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
//       className='group relative w-full overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 shadow-2xl hover:border-white/20 transition-all duration-300 cursor-pointer'
//       style={{
//         height: "clamp(280px, 40vh, 400px)",
//       }}
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
//       onClick={() =>
//         project.link &&
//         project.link !== "#" &&
//         window.open(project.link, "_blank")
//       }
//     >
//       <motion.div
//         className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl'
//         initial={{ scale: 0.8 }}
//         whileHover={{ scale: 1.1 }}
//         transition={{ duration: 0.5 }}
//       />

//       {/* Project Image Background - Clean and Clear */}
//       <div className='absolute inset-0'>
//         <Image
//           src={project.image}
//           alt={project.title}
//           fill
//           className='object-cover'
//           sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
//           quality={100}
//         />
//       </div>

//       {/* Light overlay for text readability */}
//       <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
//       <div
//         className='relative z-10 flex h-full flex-col justify-end'
//         style={{
//           padding: "clamp(0.75rem, 3vw, 1.5rem)",
//         }}
//       >
//         <motion.div
//           className='flex items-center'
//           style={{
//             gap: "clamp(0.5rem, 2vw, 1rem)",
//           }}
//           initial={shouldReduceMotion ? {} : { y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//         >
//           <motion.div
//             className={`flex items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-r from-[#E7FF1A] to-violet-400 ${shouldReduceMotion ? "" : "group-hover:scale-110"} transition-transform duration-300`}
//             style={{
//               width: "clamp(2rem, 6vw, 3rem)",
//               height: "clamp(2rem, 6vw, 3rem)",
//             }}
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
//             <Icon
//               className='text-[#111316]'
//               style={{
//                 width: "clamp(1rem, 3vw, 1.5rem)",
//                 height: "clamp(1rem, 3vw, 1.5rem)",
//               }}
//             />
//           </motion.div>
//           <div className='min-w-0 flex-1'>
//             <h3
//               className='font-bold text-white group-hover:text-[#E7FF1A] transition-colors truncate'
//               style={{
//                 fontSize: "clamp(0.9rem, 2.5vw + 0.2rem, 1.25rem)",
//                 lineHeight: "1.2",
//               }}
//             >
//               {project.title}
//             </h3>
//             <p
//               className='text-white/80 truncate'
//               style={{
//                 fontSize: "clamp(0.75rem, 1.8vw + 0.1rem, 0.95rem)",
//               }}
//             >
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
//       className='relative w-full bg-[#111316] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden'
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
//             className='flex justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12'
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
//             {/* Badge with matching size from About section */}
//             <motion.div
//               variants={itemVariants}
//               className='inline-flex items-center gap-[clamp(0.4rem,1.5vw,0.75rem)] bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-[clamp(1rem,3vh,2rem)]'
//               style={{
//                 padding: `clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.75rem)`,
//               }}
//               whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
//               transition={{ type: "spring", stiffness: 400, damping: 25 }}
//             >
//               <Sparkles
//                 className='text-[#E7FF1A]'
//                 style={{
//                   width: "clamp(14px, 3.5vw, 20px)",
//                   height: "clamp(14px, 3.5vw, 20px)",
//                 }}
//               />
//               <span
//                 className='font-medium text-white/90'
//                 style={{
//                   fontSize: "clamp(0.8rem, 2.2vw, 1.1rem)",
//                 }}
//               >
//                 Featured Work
//               </span>
//             </motion.div>

//             {/* Title with matching size from About section */}
//             <h2
//               className='font-bold leading-[0.85] text-white mb-[clamp(1rem,3vh,2rem)]'
//               style={{
//                 fontSize: "clamp(2rem, 8vw + 0.5rem, min(3.5rem, 10vw))",
//                 lineHeight: "0.9",
//                 letterSpacing: "-0.02em",
//               }}
//             >
//               <span className='block sm:inline'>PORTFOLIO</span>{" "}
//               <span className='block sm:inline bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
//                 SHOWCASE
//               </span>
//             </h2>

//             {/* Subtitle with matching size from About section */}
//             <motion.p
//               className='leading-relaxed text-white/85 max-w-4xl mx-auto px-2'
//               style={{
//                 fontSize: "clamp(1rem, 2.8vw + 0.4rem, 1.3rem)",
//                 lineHeight: "1.6",
//               }}
//               variants={itemVariants}
//               initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.8, delay: 0.7 }}
//             >
//               Explore our latest projects and see how we transform ideas into
//               exceptional digital experiences.
//             </motion.p>
//           </motion.div>

//           <motion.div
//             variants={itemVariants}
//             className='flex flex-wrap justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-2'
//             style={{
//               gap: "clamp(0.5rem, 1.5vw, 0.75rem)",
//             }}
//           >
//             {categories.map((category) => (
//               <motion.button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`relative rounded-full font-medium transition-all duration-300 ${activeCategory === category ? "text-[#111316]" : "text-white/70 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10"}`}
//                 style={{
//                   padding:
//                     "clamp(0.375rem, 1.5vw, 0.625rem) clamp(0.75rem, 3vw, 1.25rem)",
//                   fontSize: "clamp(0.75rem, 2vw + 0.1rem, 0.9rem)",
//                 }}
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
//             className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
//             style={{
//               gap: "clamp(1rem, 3vw, 2rem)",
//             }}
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
import {
  Layers,
  Smartphone,
  Cpu,
  Palette,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

// --- Data ---
const projectsData = [
  {
    id: 1,
    title: "Portfolio",
    category: "Personal Portfolio",
    image: "/images/projects/portfolio.png",
    icon: Palette,
    description:
      "Creative full-stack developer portfolio showcasing innovative web experiences.",
    technologies: ["Next.js", "React", "Framer Motion"],
    link: "https://www.dilshanjayatissa.online/",
    gradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 2,
    title: "E-Horizon Hub",
    category: "Tech Platform",
    image: "/images/projects/ehorizon-hub.png",
    icon: Cpu,
    description:
      "Digital innovation platform for futuristic solutions technology.",
    technologies: ["React", "Next.js", "TypeScript"],
    link: "https://www.ehorizonhub.com/",
    gradient: "from-indigo-500 to-violet-500",
  },
  {
    id: 3,
    title: "HONO Engineering",
    category: "Engineering Portal",
    image: "/images/projects/hono-engineering.png",
    icon: Layers,
    description:
      "Premium engineering services platform delivering custom solutions.",
    technologies: ["React", "Node.js", "MongoDB"],
    link: "https://www.honoengsl.com/",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    id: 4,
    title: "FundRaise Hub",
    category: "Crowdfunding Platform",
    image: "/images/projects/fundraise-hub.png",
    icon: Sparkles,
    description:
      "Revolutionary platform connecting passionate creators with supporters.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    id: 5,
    title: "3D Model Creator",
    category: "Creative Tool",
    image: "/images/projects/3d-creator.png",
    icon: Cpu,
    description:
      "Advanced 3D modeling platform for designing professional models.",
    technologies: ["Three.js", "WebGL", "React"],
    link: "https://3-d-creator.vercel.app/",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    id: 6,
    title: "WheelsOnDemand",
    category: "Car Rental Platform",
    image: "/images/projects/wheels-on-demand.png",
    icon: Smartphone,
    description: "Premium car rental service offering impressive experiences.",
    technologies: ["React", "Express", "MongoDB"],
    link: "#",
    gradient: "from-rose-500 to-orange-500",
  },
  {
    id: 7,
    title: "DJ Sonic Architect",
    category: "Music Platform",
    image: "/images/projects/dj-sonic.png",
    icon: Smartphone,
    description: "Immersive music experience platform for electronic music.",
    technologies: ["Vue.js", "WebAudio API"],
    link: "#",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    id: 8,
    title: "O2 Villas",
    category: "Hospitality Web",
    image: "/images/projects/o2-villas.png",
    icon: Palette,
    description:
      "Premium villa rental platform offering luxury accommodations.",
    technologies: ["React", "Tailwind"],
    link: "#",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    id: 9,
    title: "Villa Luxe Resort",
    category: "Hospitality Web",
    image: "/images/projects/villa-luxe.png",
    icon: Palette,
    description:
      "Exclusive luxury resort website featuring unparalleled accommodations.",
    technologies: ["Next.js", "Tailwind"],
    link: "#",
    gradient: "from-yellow-500 to-lime-500",
  },
];

const categories = [
  "All",
  "Personal Portfolio",
  "Tech Platform",
  "Engineering Portal",
  "Crowdfunding Platform",
  "Creative Tool",
  "Car Rental Platform",
  "Music Platform",
  "Hospitality Web",
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
      : { opacity: 0, scale: 0.9, y: 30 },
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
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <motion.div
      layout
      variants={cardVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='group relative flex flex-col overflow-hidden rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-lg hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 h-full'
      whileHover={shouldReduceMotion ? {} : { y: -8 }}
    >
      {/* 1. Image Section (Top) */}
      <div className='relative h-56 sm:h-64 overflow-hidden rounded-t-3xl'>
        <Image
          src={project.image}
          alt={project.title}
          fill
          className='object-cover transform group-hover:scale-110 transition-transform duration-500'
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />

        {/* Overlay on hover */}
        <div className='absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />

        {/* Floating Action Button */}
        <div className='absolute bottom-4 right-4 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-100'>
          <button
            onClick={() =>
              project.link &&
              project.link !== "#" &&
              window.open(project.link, "_blank")
            }
            className='bg-white text-slate-900 p-3 rounded-full shadow-lg hover:bg-blue-50 transition-colors'
          >
            <ExternalLink className='w-5 h-5' />
          </button>
        </div>
      </div>

      {/* 2. Content Section (Bottom) */}
      <div className='flex-1 p-6 flex flex-col'>
        {/* Header: Icon + Title */}
        <div className='flex items-start gap-4 mb-3'>
          <div
            className={`p-2 rounded-xl bg-gradient-to-br ${project.gradient} shadow-md shrink-0`}
          >
            <Icon className='w-5 h-5 text-white' />
          </div>
          <div>
            <h3 className='font-bold text-slate-900 text-lg leading-tight mb-1 group-hover:text-blue-600 transition-colors'>
              {project.title}
            </h3>
            <span className='text-xs font-semibold uppercase tracking-wider text-slate-500'>
              {project.category}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className='text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3'>
          {project.description}
        </p>

        {/* Tags */}
        <div className='mt-auto flex flex-wrap gap-2'>
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className='px-2 py-1 bg-white/50 border border-white/60 rounded-md text-xs font-medium text-slate-600'
            >
              {tech}
            </span>
          ))}
        </div>
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

  return (
    <section
      id='work'
      ref={ref}
      className='relative w-full py-20 lg:py-32 overflow-hidden bg-[#E0F2FE]' // Light Blue Base
    >
      {/* --- Background Elements --- */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        {/* Soft Blobs - Animated via Mouse */}
        <motion.div
          style={{ x: dx, y: dy }}
          className='absolute top-[10%] left-[20%] w-[60%] h-[60%] bg-white/40 rounded-full blur-[120px]'
        />
        <div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/40 rounded-full blur-[100px]' />

        {/* Perspective Grid Floor */}
        <div
          className='absolute inset-0 opacity-30'
          style={{
            backgroundImage: `
                    linear-gradient(to right, rgba(59, 130, 246, 0.15) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(59, 130, 246, 0.15) 1px, transparent 1px)
                `,
            backgroundSize: "60px 60px",
            transform:
              "perspective(1000px) rotateX(60deg) translateY(-50px) scale(1.5)",
            transformOrigin: "top center",
            maskImage:
              "linear-gradient(to bottom, transparent, black, transparent)",
          }}
        />
      </div>

      <div className='container mx-auto px-4 md:px-8 relative z-10'>
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className='max-w-7xl mx-auto'
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {/* Header Section */}
          <div className='text-center mb-12 lg:mb-16'>
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className='inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/60 rounded-full px-4 py-2 mb-6 shadow-sm'
            >
              <Sparkles className='w-4 h-4 text-blue-600' />
              <span className='text-sm font-semibold text-slate-700 uppercase tracking-wide'>
                Portfolio Showcase
              </span>
            </motion.div>

            {/* Title */}
            <motion.h2
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className='text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[0.9]'
            >
              <span className='block'>Featured</span>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>
                Work
              </span>
            </motion.h2>

            <motion.p
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              className='text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed'
            >
              Explore our latest projects and see how we transform ideas into
              exceptional digital experiences.
            </motion.p>
          </div>

          {/* Filter Categories */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            className='flex flex-wrap justify-center gap-2 md:gap-3 mb-12'
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "text-white shadow-lg shadow-blue-500/25"
                    : "text-slate-600 bg-white/40 border border-white/60 hover:bg-white/60 hover:text-slate-900"
                }`}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId='active-category-bg'
                    className='absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full'
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className='relative z-10'>{category}</span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'
          >
            <AnimatePresence mode='popLayout'>
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
