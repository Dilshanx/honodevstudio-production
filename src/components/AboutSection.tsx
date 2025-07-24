// "use client";

// import React, { useCallback, useRef } from "react";
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   useReducedMotion,
// } from "framer-motion";
// import { useRouter } from "next/navigation";
// import {
//   Sparkles,
//   ArrowRight,
//   Target,
//   Users,
//   Lightbulb,
//   Shield,
// } from "lucide-react";

// // --- MAIN COMPONENT ---

// export function AboutSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const router = useRouter();
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

//   const handleOurStoryClick = useCallback(() => {
//     router.push("/our-story");
//   }, [router]);

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

//   const values = [
//     {
//       icon: Target,
//       title: "Innovation First",
//       description:
//         "Always pushing boundaries with latest technologies and creative solutions",
//       color: "from-[#E7FF1A] to-violet-400",
//     },
//     {
//       icon: Users,
//       title: "Client Success",
//       description:
//         "Your success is our primary measure of achievement and driving force",
//       color: "from-violet-400 to-cyan-400",
//     },
//     {
//       icon: Lightbulb,
//       title: "Quality Driven",
//       description:
//         "Meticulous attention to detail in every project and interaction",
//       color: "from-cyan-400 to-pink-400",
//     },
//     {
//       icon: Shield,
//       title: "Transparency",
//       description:
//         "Open communication throughout the entire development process",
//       color: "from-pink-400 to-[#E7FF1A]",
//     },
//   ];

//   return (
//     <section
//       id='about'
//       className='relative w-full bg-[#111316] overflow-hidden'
//       style={{
//         // Modern fluid padding using clamp for better responsive scaling
//         padding: `clamp(3rem, 8vh + 2rem, 8rem) clamp(1rem, 4vw, 3rem)`,
//       }}
//     >
//       {/* Background with gradient overlay */}
//       <div className='absolute inset-0 z-0'>
//         {/* Modern Fluid Grid Pattern */}
//         <div
//           className='absolute inset-0 opacity-30'
//           style={{
//             backgroundImage: `linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)`,
//             backgroundSize: `clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 3vw, 2.5rem)`,
//           }}
//         />
//         {!shouldReduceMotion && (
//           <motion.div
//             className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
//             style={{ x: dx, y: dy }}
//           />
//         )}
//         <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
//       </div>

//       <div
//         className='relative z-10'
//         style={{
//           // Modern container with fluid max-width
//           maxWidth: "min(90vw, 1400px)",
//           margin: "0 auto",
//         }}
//       >
//         <motion.div
//           ref={containerRef}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           variants={containerVariants}
//           initial='hidden'
//           whileInView='visible'
//           viewport={{ once: true, amount: 0.2, margin: "-100px" }}
//         >
//           {/* Header Section with Modern Fluid Typography */}
//           <motion.div
//             variants={itemVariants}
//             className='text-center'
//             style={{
//               marginBottom: "clamp(3rem, 8vh, 6rem)",
//             }}
//           >
//             {/* Enhanced Badge with Fluid Sizing */}
//             <motion.div
//               variants={itemVariants}
//               className='inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full'
//               style={{
//                 gap: "clamp(0.4rem, 1.5vw, 0.75rem)",
//                 padding:
//                   "clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.75rem)",
//                 marginBottom: "clamp(1.5rem, 4vh, 2.5rem)",
//               }}
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
//                 About Our Studio
//               </span>
//             </motion.div>

//             {/* Modern Fluid Heading */}
//             <h2
//               className='font-bold leading-[0.9] text-white'
//               style={{
//                 fontSize: "clamp(2.5rem, 8vw + 1rem, min(4.5rem, 12vw))",
//                 lineHeight: "0.9",
//                 letterSpacing: "-0.02em",
//                 marginBottom: "clamp(1.5rem, 4vh, 2.5rem)",
//               }}
//             >
//               CREATIVE MINDS
//               <br />
//               <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
//                 DIGITAL SOULS
//               </span>
//             </h2>

//             {/* Enhanced Fluid Subtitle */}
//             <p
//               className='leading-relaxed text-white/80 mx-auto'
//               style={{
//                 fontSize: "clamp(1.1rem, 2.8vw + 0.3rem, 1.4rem)",
//                 lineHeight: "1.6",
//                 maxWidth: "min(100%, 800px)",
//                 marginBottom: "clamp(2rem, 5vh, 3rem)",
//               }}
//             >
//               We&apos;re a passionate team of designers, developers, and
//               strategists who believe in the power of digital transformation.
//               Our mission is to help businesses create meaningful connections
//               with their audiences.
//             </p>

//             {/* Enhanced Stats Section with Fluid Layout */}
//             <div
//               className='flex flex-wrap justify-center items-center'
//               style={{
//                 gap: "clamp(1.5rem, 5vw, 3rem)",
//               }}
//             >
//               {[
//                 { number: "5+", label: "Years Experience" },
//                 { number: "50+", label: "Happy Clients" },
//                 { number: "100+", label: "Projects Completed" },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
//                   variants={itemVariants}
//                   className='text-center'
//                   style={{
//                     minWidth: "clamp(100px, 20vw, 140px)",
//                   }}
//                 >
//                   <div
//                     className='font-bold bg-gradient-to-r from-[#E7FF1A] to-violet-400 bg-clip-text text-transparent'
//                     style={{
//                       fontSize: "clamp(1.8rem, 5vw + 0.5rem, 3rem)",
//                       marginBottom: "clamp(0.3rem, 1vh, 0.5rem)",
//                     }}
//                   >
//                     {stat.number}
//                   </div>
//                   <div
//                     className='text-white/60 uppercase tracking-wider'
//                     style={{
//                       fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)",
//                     }}
//                   >
//                     {stat.label}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </motion.div>

//           {/* Main Content Grid with Enhanced Responsive Layout */}
//           <div
//             className='grid items-start'
//             style={{
//               gridTemplateColumns:
//                 "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
//               gap: "clamp(1.5rem, 4vw, 2.5rem)",
//               marginBottom: "clamp(3rem, 6vh, 4rem)",
//             }}
//           >
//             {/* Our Story Card with Enhanced Responsive Design */}
//             <motion.div variants={itemVariants} className='relative group'>
//               {/* Glow effect - only on desktop */}
//               <div className='hidden md:block absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl' />

//               <div
//                 className='relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300'
//                 style={{
//                   padding: "clamp(1.5rem, 4vw, 2.5rem)",
//                 }}
//               >
//                 <h3
//                   className='font-bold text-white'
//                   style={{
//                     fontSize: "clamp(1.5rem, 4vw + 0.5rem, 2.2rem)",
//                     marginBottom: "clamp(1rem, 3vh, 1.5rem)",
//                   }}
//                 >
//                   Our Story
//                 </h3>
//                 <p
//                   className='text-white/80 leading-relaxed'
//                   style={{
//                     fontSize: "clamp(0.95rem, 2.2vw + 0.2rem, 1.1rem)",
//                     lineHeight: "1.6",
//                     marginBottom: "clamp(1rem, 2.5vh, 1.5rem)",
//                   }}
//                 >
//                   From startups to established enterprises, we&apos;ve had the
//                   privilege of working with diverse clients across various
//                   industries, delivering solutions that not only meet their
//                   immediate needs but also position them for long-term success.
//                 </p>
//                 <p
//                   className='text-white/80 leading-relaxed'
//                   style={{
//                     fontSize: "clamp(0.95rem, 2.2vw + 0.2rem, 1.1rem)",
//                     lineHeight: "1.6",
//                     marginBottom: "clamp(1.5rem, 4vh, 2.5rem)",
//                   }}
//                 >
//                   Our approach combines cutting-edge technology with
//                   human-centered design to create experiences that truly
//                   resonate with users and drive meaningful business outcomes.
//                 </p>

//                 <motion.button
//                   onClick={handleOurStoryClick}
//                   className='group/btn inline-flex items-center bg-[#E7FF1A] text-[#111316] font-bold uppercase rounded-2xl transition-all duration-200 hover:bg-[#E7FF1A]/90 hover:shadow-lg hover:shadow-[#E7FF1A]/20 w-full sm:w-auto justify-center sm:justify-start'
//                   style={{
//                     gap: "clamp(0.5rem, 2vw, 0.75rem)",
//                     padding:
//                       "clamp(0.875rem, 2.5vw, 1.125rem) clamp(1.5rem, 4vw, 2rem)",
//                     fontSize: "clamp(0.9rem, 2vw, 1rem)",
//                     minWidth: "clamp(140px, 30vw, 180px)",
//                   }}
//                   whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
//                   whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
//                 >
//                   Our Story
//                   <ArrowRight
//                     className='group-hover/btn:translate-x-1 transition-transform duration-200'
//                     style={{
//                       width: "clamp(16px, 3.5vw, 20px)",
//                       height: "clamp(16px, 3.5vw, 20px)",
//                     }}
//                   />
//                 </motion.button>
//               </div>
//             </motion.div>

//             {/* Values Card with Enhanced Responsive Design */}
//             <motion.div variants={itemVariants} className='relative group'>
//               {/* Glow effect - only on desktop */}
//               <div className='hidden md:block absolute inset-0 bg-gradient-to-r from-violet-400/20 via-cyan-400/20 to-pink-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl' />

//               <div
//                 className='relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300'
//                 style={{
//                   padding: "clamp(1.5rem, 4vw, 2.5rem)",
//                 }}
//               >
//                 <h3
//                   className='font-bold text-white'
//                   style={{
//                     fontSize: "clamp(1.5rem, 4vw + 0.5rem, 2.2rem)",
//                     marginBottom: "clamp(1.5rem, 4vh, 2rem)",
//                   }}
//                 >
//                   Our Values
//                 </h3>
//                 <div
//                   className='space-y-0'
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "clamp(1rem, 3vh, 1.5rem)",
//                   }}
//                 >
//                   {values.map((value, index) => (
//                     <motion.div
//                       key={value.title}
//                       className='flex items-start group/item'
//                       style={{
//                         gap: "clamp(0.75rem, 2.5vw, 1rem)",
//                       }}
//                       initial={shouldReduceMotion ? {} : { opacity: 0, x: -15 }}
//                       whileInView={
//                         shouldReduceMotion ? {} : { opacity: 1, x: 0 }
//                       }
//                       transition={
//                         shouldReduceMotion
//                           ? {}
//                           : { delay: index * 0.1, duration: 0.4 }
//                       }
//                       viewport={{ once: true, margin: "-50px" }}
//                     >
//                       <div
//                         className={`rounded-xl bg-gradient-to-r ${value.color} group-hover/item:scale-110 transition-transform duration-200 flex-shrink-0`}
//                         style={{
//                           padding: "clamp(0.5rem, 1.5vw, 0.625rem)",
//                         }}
//                       >
//                         <value.icon
//                           className='text-[#111316]'
//                           style={{
//                             width: "clamp(18px, 4vw, 24px)",
//                             height: "clamp(18px, 4vw, 24px)",
//                           }}
//                         />
//                       </div>
//                       <div className='flex-1 min-w-0'>
//                         <h4
//                           className='text-white font-semibold group-hover/item:text-[#E7FF1A] transition-colors duration-200'
//                           style={{
//                             fontSize: "clamp(1rem, 2.5vw + 0.2rem, 1.2rem)",
//                             marginBottom: "clamp(0.25rem, 0.5vh, 0.375rem)",
//                           }}
//                         >
//                           {value.title}
//                         </h4>
//                         <p
//                           className='text-white/70 leading-relaxed'
//                           style={{
//                             fontSize: "clamp(0.85rem, 2vw + 0.1rem, 0.95rem)",
//                             lineHeight: "1.5",
//                           }}
//                         >
//                           {value.description}
//                         </p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useCallback, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  Variants, // Import Variants type
} from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  Shield,
} from "lucide-react";

// --- MAIN COMPONENT ---

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

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

  const handleOurStoryClick = useCallback(() => {
    router.push("/our-story");
  }, [router]);

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

  // FIX: Ensure itemVariants always return objects with expected properties
  // Explicitly typed as Variants
  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 20, opacity: 0 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0 } // Explicitly set final state without transition
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

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "Always pushing boundaries with latest technologies and creative solutions",
      color: "from-[#E7FF1A] to-violet-400",
    },
    {
      icon: Users,
      title: "Client Success",
      description:
        "Your success is our primary measure of achievement and driving force",
      color: "from-violet-400 to-cyan-400",
    },
    {
      icon: Lightbulb,
      title: "Quality Driven",
      description:
        "Meticulous attention to detail in every project and interaction",
      color: "from-cyan-400 to-pink-400",
    },
    {
      icon: Shield,
      title: "Transparency",
      description:
        "Open communication throughout the entire development process",
      color: "from-pink-400 to-[#E7FF1A]",
    },
  ];

  return (
    <section
      id='about'
      className='relative w-full bg-[#111316] overflow-hidden'
      style={{
        // Modern fluid padding using clamp for better responsive scaling
        padding: `clamp(3rem, 8vh + 2rem, 8rem) clamp(1rem, 4vw, 3rem)`,
      }}
    >
      {/* Background with gradient overlay */}
      <div className='absolute inset-0 z-0'>
        {/* Modern Fluid Grid Pattern */}
        <div
          className='absolute inset-0 opacity-30'
          style={{
            backgroundImage: `linear-gradient(to right, #80808012 1px, transparent 1px), linear-gradient(to bottom, #80808012 1px, transparent 1px)`,
            backgroundSize: `clamp(1.5rem, 3vw, 2.5rem) clamp(1.5rem, 3vw, 2.5rem)`,
          }}
        />
        {!shouldReduceMotion && (
          <motion.div
            className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
            style={{ x: dx, y: dy }}
          />
        )}
        <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
      </div>

      <div
        className='relative z-10'
        style={{
          // Modern container with fluid max-width
          maxWidth: "min(90vw, 1400px)",
          margin: "0 auto",
        }}
      >
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2, margin: "-100px" }}
        >
          {/* Header Section with Modern Fluid Typography */}
          <motion.div
            variants={itemVariants}
            className='text-center'
            style={{
              marginBottom: "clamp(3rem, 8vh, 6rem)",
            }}
          >
            {/* Enhanced Badge with Fluid Sizing */}
            <motion.div
              variants={itemVariants}
              className='inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full'
              style={{
                gap: "clamp(0.4rem, 1.5vw, 0.75rem)",
                padding:
                  "clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.75rem)",
                marginBottom: "clamp(1.5rem, 4vh, 2.5rem)",
              }}
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
                About Our Studio
              </span>
            </motion.div>

            {/* Modern Fluid Heading */}
            <h2
              className='font-bold leading-[0.9] text-white'
              style={{
                fontSize: "clamp(2.5rem, 8vw + 1rem, min(4.5rem, 12vw))",
                lineHeight: "0.9",
                letterSpacing: "-0.02em",
                marginBottom: "clamp(1.5rem, 4vh, 2.5rem)",
              }}
            >
              CREATIVE MINDS
              <br />
              <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                DIGITAL SOULS
              </span>
            </h2>

            {/* Enhanced Fluid Subtitle */}
            <p
              className='leading-relaxed text-white/80 mx-auto'
              style={{
                fontSize: "clamp(1.1rem, 2.8vw + 0.3rem, 1.4rem)",
                lineHeight: "1.6",
                maxWidth: "min(100%, 800px)",
                margin: "0 auto",
                marginBottom: "clamp(2rem, 5vh, 3rem)",
              }}
            >
              We&apos;re a passionate team of designers, developers, and
              strategists who believe in the power of digital transformation.
              Our mission is to help businesses create meaningful connections
              with their audiences.
            </p>

            {/* Enhanced Stats Section with Fluid Layout */}
            <div
              className='flex flex-wrap justify-center items-center'
              style={{
                gap: "clamp(1.5rem, 5vw, 3rem)",
              }}
            >
              {[
                { number: "5+", label: "Years Experience" },
                { number: "50+", label: "Happy Clients" },
                { number: "100+", label: "Projects Completed" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={itemVariants}
                  className='text-center'
                  style={{
                    minWidth: "clamp(100px, 20vw, 140px)",
                  }}
                >
                  <div
                    className='font-bold bg-gradient-to-r from-[#E7FF1A] to-violet-400 bg-clip-text text-transparent'
                    style={{
                      fontSize: "clamp(1.8rem, 5vw + 0.5rem, 3rem)",
                      marginBottom: "clamp(0.3rem, 1vh, 0.5rem)",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    className='text-white/60 uppercase tracking-wider'
                    style={{
                      fontSize: "clamp(0.7rem, 1.8vw, 0.9rem)",
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Main Content Grid with Enhanced Responsive Layout */}
          <div
            className='grid items-start'
            style={{
              gridTemplateColumns:
                "repeat(auto-fit, minmax(min(100%, 400px), 1fr))",
              gap: "clamp(1.5rem, 4vw, 2.5rem)",
              marginBottom: "clamp(3rem, 6vh, 4rem)",
            }}
          >
            {/* Our Story Card with Enhanced Responsive Design */}
            <motion.div variants={itemVariants} className='relative group'>
              {/* Glow effect - only on desktop */}
              <div className='hidden md:block absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl' />

              <div
                className='relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300'
                style={{
                  padding: "clamp(1.5rem, 4vw, 2.5rem)",
                }}
              >
                <h3
                  className='font-bold text-white'
                  style={{
                    fontSize: "clamp(1.5rem, 4vw + 0.5rem, 2.2rem)",
                    marginBottom: "clamp(1rem, 3vh, 1.5rem)",
                  }}
                >
                  Our Story
                </h3>
                <p
                  className='text-white/80 leading-relaxed'
                  style={{
                    fontSize: "clamp(0.95rem, 2.2vw + 0.2rem, 1.1rem)",
                    lineHeight: "1.6",
                    marginBottom: "clamp(1rem, 2.5vh, 1.5rem)",
                  }}
                >
                  From startups to established enterprises, we&apos;ve had the
                  privilege of working with diverse clients across various
                  industries, delivering solutions that not only meet their
                  immediate needs but also position them for long-term success.
                </p>
                <p
                  className='text-white/80 leading-relaxed'
                  style={{
                    fontSize: "clamp(0.95rem, 2.2vw + 0.2rem, 1.1rem)",
                    lineHeight: "1.6",
                    marginBottom: "clamp(1.5rem, 4vh, 2.5rem)",
                  }}
                >
                  Our approach combines cutting-edge technology with
                  human-centered design to create experiences that truly
                  resonate with users and drive meaningful business outcomes.
                </p>

                <motion.button
                  onClick={handleOurStoryClick}
                  className='group/btn inline-flex items-center bg-[#E7FF1A] text-[#111316] font-bold uppercase rounded-2xl transition-all duration-200 hover:bg-[#E7FF1A]/90 hover:shadow-lg hover:shadow-[#E7FF1A]/20 w-full sm:w-auto justify-center sm:justify-start'
                  style={{
                    gap: "clamp(0.5rem, 2vw, 0.75rem)",
                    padding:
                      "clamp(0.875rem, 2.5vw, 1.125rem) clamp(1.5rem, 4vw, 2rem)",
                    fontSize: "clamp(0.9rem, 2vw, 1rem)",
                    minWidth: "clamp(140px, 30vw, 180px)",
                  }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  Our Story
                  <ArrowRight
                    className='group-hover/btn:translate-x-1 transition-transform duration-200'
                    style={{
                      width: "clamp(16px, 3.5vw, 20px)",
                      height: "clamp(16px, 3.5vw, 20px)",
                    }}
                  />
                </motion.button>
              </div>
            </motion.div>

            {/* Values Card with Enhanced Responsive Design */}
            <motion.div variants={itemVariants} className='relative group'>
              {/* Glow effect - only on desktop */}
              <div className='hidden md:block absolute inset-0 bg-gradient-to-r from-violet-400/20 via-cyan-400/20 to-pink-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl' />

              <div
                className='relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300'
                style={{
                  padding: "clamp(1.5rem, 4vw, 2.5rem)",
                }}
              >
                <h3
                  className='font-bold text-white'
                  style={{
                    fontSize: "clamp(1.5rem, 4vw + 0.5rem, 2.2rem)",
                    marginBottom: "clamp(1.5rem, 4vh, 2rem)",
                  }}
                >
                  Our Values
                </h3>
                <div
                  className='space-y-0'
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "clamp(1rem, 3vh, 1.5rem)",
                  }}
                >
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      className='flex items-start group/item'
                      style={{
                        gap: "clamp(0.75rem, 2.5vw, 1rem)",
                      }}
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: -15 }}
                      whileInView={
                        shouldReduceMotion ? {} : { opacity: 1, x: 0 }
                      }
                      transition={
                        shouldReduceMotion
                          ? {}
                          : { delay: index * 0.1, duration: 0.4 }
                      }
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      <div
                        className={`rounded-xl bg-gradient-to-r ${value.color} group-hover/item:scale-110 transition-transform duration-200 flex-shrink-0`}
                        style={{
                          padding: "clamp(0.5rem, 1.5vw, 0.625rem)",
                        }}
                      >
                        <value.icon
                          className='text-[#111316]'
                          style={{
                            width: "clamp(18px, 4vw, 24px)",
                            height: "clamp(18px, 4vw, 24px)",
                          }}
                        />
                      </div>
                      <div className='flex-1 min-w-0'>
                        <h4
                          className='text-white font-semibold group-hover/item:text-[#E7FF1A] transition-colors duration-200'
                          style={{
                            fontSize: "clamp(1rem, 2.5vw + 0.2rem, 1.2rem)",
                            marginBottom: "clamp(0.25rem, 0.5vh, 0.375rem)",
                          }}
                        >
                          {value.title}
                        </h4>
                        <p
                          className='text-white/70 leading-relaxed'
                          style={{
                            fontSize: "clamp(0.85rem, 2vw + 0.1rem, 0.95rem)",
                            lineHeight: "1.5",
                          }}
                        >
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
