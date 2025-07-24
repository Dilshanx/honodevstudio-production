"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  Variants, // Import Variants type
  useReducedMotion, // Import useReducedMotion
} from "framer-motion";
import { Layers, Smartphone, Cpu, Palette, Sparkles } from "lucide-react";

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

const ProjectCard = ({ project }: { project: (typeof projectsData)[0] }) => {
  const Icon = project.icon;
  const shouldReduceMotion = useReducedMotion(); // Use useReducedMotion here

  return (
    <motion.div
      layoutId={`card-${project.id}`}
      // Added conditional initial/animate/exit based on shouldReduceMotion
      initial={
        shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: 50 }
      }
      animate={
        shouldReduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1, y: 0 }
      }
      exit={
        shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.8, y: -50 }
      }
      // Added mass to spring transition for type compatibility
      transition={
        shouldReduceMotion
          ? { duration: 0.2 }
          : { type: "spring", damping: 20, stiffness: 150, mass: 0.8 }
      }
      className='group relative h-[450px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500'
    >
      {/* Glow effect */}
      <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl' />

      <motion.div
        // Conditional whileHover based on shouldReduceMotion
        whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
        className='absolute inset-0 transition-transform duration-500 ease-out'
      >
        <div className='relative w-full h-full bg-gradient-to-br from-[#E7FF1A]/10 via-violet-400/10 to-cyan-400/10 rounded-3xl'>
          <div className='absolute inset-0 bg-gradient-to-t from-[#111316]/90 via-[#111316]/30 to-transparent' />
        </div>
      </motion.div>

      <div className='relative z-10 flex h-full flex-col justify-end p-6'>
        <div className='flex items-center gap-4'>
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#E7FF1A] to-violet-400 ${shouldReduceMotion ? "" : "group-hover:scale-110"} transition-transform duration-300`}
          >
            <Icon className='h-6 w-6 text-[#111316]' />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-white group-hover:text-[#E7FF1A] transition-colors'>
              {project.title}
            </h3>
            <p className='text-sm text-white/80'>{project.category}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion(); // Use useReducedMotion here

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
      // Conditionally apply mouse move effect
      if (shouldReduceMotion) return;

      if (!containerRef.current) return;
      // FIX: Access currentTarget from the event object 'e'
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - left) / width - 0.5);
      mouseY.set((e.clientY - top) / height - 0.5);
    },
    [mouseX, mouseY, shouldReduceMotion] // Add shouldReduceMotion to dependencies
  );

  const handleMouseLeave = useCallback(() => {
    // Conditionally apply mouse leave effect
    if (shouldReduceMotion) return;

    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY, shouldReduceMotion]); // Add shouldReduceMotion to dependencies

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((p) => p.category === activeCategory)
      );
    }
  }, [activeCategory]);

  // Animation variants matching other sections - Explicitly typed as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2, // Conditional stagger
        delayChildren: shouldReduceMotion ? 0 : 0.3, // Conditional delay
      },
    },
  };

  // Explicitly typed as Variants.
  // Ensured 'mass' is included in the transition for 'spring' type.
  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 30, opacity: 0 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.8, // Added mass property to satisfy Variants type for spring transition
          },
        },
  };

  return (
    <section
      id='work'
      className='relative w-full bg-[#111316] py-12 sm:py-16 lg:py-20 2xl:py-12 overflow-hidden'
    >
      {/* Background with gradient overlay similar to other sections */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30' />
        {/* Conditional rendering of motion.div for mouse parallax */}
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
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className='max-w-6xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className='text-center mb-12 lg:mb-16 2xl:mb-12'
          >
            {/* Badge similar to other sections */}
            <motion.div
              variants={itemVariants}
              className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-4 lg:mb-6 2xl:mb-4'
            >
              <Sparkles className='w-4 h-4 text-[#E7FF1A]' />
              <span className='text-sm font-medium text-white/90'>
                Featured Work
              </span>
            </motion.div>

            <h2 className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white mb-4 lg:mb-6 2xl:mb-4'>
              PORTFOLIO
              <br />
              <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                SHOWCASE
              </span>
            </h2>

            <p className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-white/80 max-w-3xl mx-auto mb-8 lg:mb-12 2xl:mb-8'>
              Explore our latest projects and see how we transform ideas into
              exceptional digital experiences.
            </p>

            {/* Stats Section */}
            <div className='flex flex-wrap justify-center gap-6 md:gap-8 2xl:gap-6 mb-8 lg:mb-12 2xl:mb-8'>
              {[
                { number: "50+", label: "Projects Completed" },
                { number: "4", label: "Categories" },
                { number: "100%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label || index} // Use index as fallback key if label might not be unique
                  variants={itemVariants}
                  className='text-center'
                >
                  <div className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E7FF1A] to-violet-400 bg-clip-text text-transparent mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-white/60 text-sm uppercase tracking-wider'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className='flex flex-wrap justify-center gap-3 mb-8 lg:mb-12 2xl:mb-8'
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "text-[#111316]"
                    : "text-white/60 hover:text-[#E7FF1A] bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
                // Conditional whileHover/whileTap based on shouldReduceMotion
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              >
                {activeCategory === category && (
                  <motion.div
                    layoutId='active-category-pill'
                    className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A] to-violet-400 rounded-full'
                    // Conditional transition based on shouldReduceMotion
                    transition={
                      shouldReduceMotion
                        ? { duration: 0.2 }
                        : { type: "spring", damping: 20, stiffness: 200 }
                    }
                  />
                )}
                <span className='relative z-10'>{category}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 2xl:gap-6 mb-12 lg:mb-16 2xl:mb-12'>
            <AnimatePresence mode='sync'>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// "use client";

// import React, { useState, useEffect, useCallback, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   Variants, // Import Variants type
//   useReducedMotion, // Import useReducedMotion
// } from "framer-motion";
// import { Layers, Smartphone, Cpu, Palette, Sparkles } from "lucide-react";

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

// const ProjectCard = ({ project }: { project: (typeof projectsData)[0] }) => {
//   const Icon = project.icon;
//   const shouldReduceMotion = useReducedMotion() ?? false; // Use useReducedMotion here and handle null

//   return (
//     <motion.div
//       layoutId={`card-${project.id}`}
//       // New animation: fade-in and slight scale
//       initial={
//         shouldReduceMotion
//           ? { opacity: 0, scale: 1 }
//           : { opacity: 0, scale: 0.98 }
//       }
//       animate={
//         shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }
//       }
//       exit={
//         shouldReduceMotion
//           ? { opacity: 0, scale: 1 }
//           : { opacity: 0, scale: 0.98 }
//       }
//       transition={
//         shouldReduceMotion
//           ? { duration: 0.2 }
//           : { type: "tween", duration: 0.4, ease: "easeOut" } // Smooth tween transition
//       }
//       className='group relative h-[450px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl hover:bg-white/10 hover:border-white/20 transition-all duration-500'
//     >
//       {/* Glow effect */}
//       {!shouldReduceMotion && ( // Conditionally render glow
//         <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl' />
//       )}

//       <motion.div
//         // Conditional whileHover based on shouldReduceMotion
//         whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
//         className='absolute inset-0 transition-transform duration-500 ease-out'
//       >
//         <div className='relative w-full h-full bg-gradient-to-br from-[#E7FF1A]/10 via-violet-400/10 to-cyan-400/10 rounded-3xl'>
//           <div className='absolute inset-0 bg-gradient-to-t from-[#111316]/90 via-[#111316]/30 to-transparent' />
//         </div>
//       </motion.div>

//       <div className='relative z-10 flex h-full flex-col justify-end p-6'>
//         <div className='flex items-center gap-4'>
//           <div
//             className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-[#E7FF1A] to-violet-400 ${shouldReduceMotion ? "" : "group-hover:scale-110"} transition-transform duration-300`}
//           >
//             <Icon className='h-6 w-6 text-[#111316]' />
//           </div>
//           <div>
//             <h3 className='text-2xl font-bold text-white group-hover:text-[#E7FF1A] transition-colors'>
//               {project.title}
//             </h3>
//             <p className='text-sm text-white/80'>{project.category}</p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export function FeaturedWork() {
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [filteredProjects, setFilteredProjects] = useState(projectsData);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const shouldReduceMotion = useReducedMotion() ?? false; // Use useReducedMotion here and handle null

//   // Explicitly type springConfig as Transition
//   const springConfig: Transition = { damping: 25, stiffness: 120, mass: 0.5 };
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
//       // Conditionally apply mouse move effect
//       if (shouldReduceMotion) return;

//       if (!containerRef.current) return;
//       // FIX: Access currentTarget from the event object 'e'
//       const { left, top, width, height } =
//         e.currentTarget.getBoundingClientRect();
//       mouseX.set((e.clientX - left) / width - 0.5);
//       mouseY.set((e.clientY - top) / height - 0.5);
//     },
//     [mouseX, mouseY, shouldReduceMotion] // Add shouldReduceMotion to dependencies
//   );

//   const handleMouseLeave = useCallback(() => {
//     // Conditionally apply mouse leave effect
//     if (shouldReduceMotion) return;

//     mouseX.set(0);
//     mouseY.set(0);
//   }, [mouseX, mouseY, shouldReduceMotion]); // Add shouldReduceMotion to dependencies

//   useEffect(() => {
//     if (activeCategory === "All") {
//       setFilteredProjects(projectsData);
//     } else {
//       setFilteredProjects(
//         projectsData.filter((p) => p.category === activeCategory)
//       );
//     }
//   }, [activeCategory]);

//   // Animation variants matching other sections - Explicitly typed as Variants
//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: shouldReduceMotion ? 0 : 0.2, // Conditional stagger
//         delayChildren: shouldReduceMotion ? 0 : 0.3, // Conditional delay
//       },
//     },
//   };

//   // Explicitly typed as Variants.
//   // Ensured 'mass' is included in the transition for 'spring' type.
//   const itemVariants: Variants = {
//     hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 30, opacity: 0 },
//     visible: shouldReduceMotion
//       ? { opacity: 1, y: 0 }
//       : {
//           y: 0,
//           opacity: 1,
//           transition: {
//             type: "spring",
//             stiffness: 100,
//             damping: 15,
//             mass: 0.8, // Added mass property to satisfy Variants type for spring transition
//           },
//         },
//   };

//   return (
//     <section
//       id='work'
//       className='relative w-full bg-[#111316] py-12 sm:py-16 lg:py-20 2xl:py-12 overflow-hidden'
//     >
//       {/* Background with gradient overlay similar to other sections */}
//       <div className='absolute inset-0 z-0'>
//         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30' />
//         {/* Conditional rendering of motion.div for mouse parallax */}
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
//           ref={containerRef}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className='max-w-6xl mx-auto'
//           variants={containerVariants}
//           initial='hidden'
//           whileInView='visible'
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {/* Header Section */}
//           <motion.div
//             variants={itemVariants}
//             className='text-center mb-12 lg:mb-16 2xl:mb-12'
//           >
//             {/* Badge similar to other sections */}
//             <motion.div
//               variants={itemVariants}
//               className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-4 lg:mb-6 2xl:mb-4'
//             >
//               <Sparkles className='w-4 h-4 text-[#E7FF1A]' />
//               <span className='text-sm font-medium text-white/90'>
//                 Featured Work
//               </span>
//             </motion.div>

//             <h2 className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white mb-4 lg:mb-6 2xl:mb-4'>
//               PORTFOLIO
//               <br />
//               <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
//                 SHOWCASE
//               </span>
//             </h2>

//             <p className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-white/80 max-w-3xl mx-auto mb-8 lg:mb-12 2xl:mb-8'>
//               Explore our latest projects and see how we transform ideas into
//               exceptional digital experiences.
//             </p>

//             {/* Stats Section */}
//             <div className='flex flex-wrap justify-center gap-6 md:gap-8 2xl:gap-6 mb-8 lg:mb-12 2xl:mb-8'>
//               {[
//                 { number: "50+", label: "Projects Completed" },
//                 { number: "4", label: "Categories" },
//                 { number: "100%", label: "Client Satisfaction" },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={stat.label || index} // Use index as fallback key if label might not be unique
//                   variants={itemVariants}
//                   className='text-center'
//                 >
//                   <div className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E7FF1A] to-violet-400 bg-clip-text text-transparent mb-2'>
//                     {stat.number}
//                   </div>
//                   <div className='text-white/60 text-sm uppercase tracking-wider'>
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Category Filter */}
//           <motion.div
//             variants={itemVariants}
//             className='flex flex-wrap justify-center gap-3 mb-8 lg:mb-12 2xl:mb-8'
//           >
//             {categories.map((category) => (
//               <motion.button
//                 key={category}
//                 onClick={() => setActiveCategory(category)}
//                 className={`relative rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 ${
//                   activeCategory === category
//                     ? "text-[#111316]"
//                     : "text-white/60 hover:text-[#E7FF1A] bg-white/5 border border-white/10 hover:bg-white/10"
//                 }`}
//                 // Conditional whileHover/whileTap based on shouldReduceMotion
//                 whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
//                 whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
//               >
//                 {activeCategory === category && (
//                   <motion.div
//                     layoutId='active-category-pill'
//                     className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A] to-violet-400 rounded-full'
//                     // Conditional transition based on shouldReduceMotion
//                     transition={
//                       shouldReduceMotion
//                         ? { duration: 0.2 }
//                         : { type: "spring", damping: 20, stiffness: 200 }
//                     }
//                   />
//                 )}
//                 <span className='relative z-10'>{category}</span>
//               </motion.button>
//             ))}
//           </motion.div>

//           {/* Projects Grid */}
//           <motion.div className='grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 2xl:gap-6 mb-12 lg:mb-16 2xl:mb-12'>
//             <AnimatePresence mode='sync'>
//               {filteredProjects.map((project) => (
//                 <ProjectCard key={project.id} project={project} />
//               ))}
//             </AnimatePresence>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }
