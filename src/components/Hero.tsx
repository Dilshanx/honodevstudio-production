// "use client";
// import React from "react";
// import { motion, useReducedMotion, Variants } from "framer-motion";
// import Image from "next/image"; // Import Next.js Image component
// import { ArrowRight, Play, Sparkles } from "lucide-react";

// const Hero = () => {
//   const shouldReduceMotion = useReducedMotion();

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: shouldReduceMotion ? 0 : 0.15,
//         delayChildren: shouldReduceMotion ? 0 : 0.3,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 20, opacity: 0 },
//     visible: shouldReduceMotion
//       ? { opacity: 1, y: 0 }
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

//   const handleScrollToSection = (sectionId: string) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section className='relative w-full flex flex-col bg-[#111316] overflow-hidden min-h-screen xl:h-[calc(100vh-4rem)] 2xl:h-[calc(100vh-5rem)]'>
//       {/* Background Image with Modern Fluid Scaling */}
//       <div className='absolute inset-0 z-0'>
//         <motion.div
//           initial={
//             shouldReduceMotion
//               ? { opacity: 0.8 }
//               : { scale: 1.05, opacity: 0.8 }
//           }
//           animate={
//             shouldReduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }
//           }
//           transition={
//             shouldReduceMotion
//               ? { duration: 0.5 }
//               : { duration: 1.5, ease: "easeOut" }
//           }
//           className='w-full h-full'
//         >
//           {/* Replaced <img> with Next.js <Image> for optimization */}
//           <Image
//             src='/images/hero-background.webp'
//             alt='Hero background'
//             fill // Use fill to make the image cover its parent div
//             priority // Load this image with high priority as it's part of LCP
//             className='object-cover' // Tailwind object-cover for styling
//             sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw' // Define sizes for responsive images
//           />
//           {/* Enhanced Gradient Overlays for Better Readability */}
//           <div className='absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30' />
//           <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40' />
//           {/* Modern Fluid Grid Pattern */}
//           <div
//             className='absolute inset-0 opacity-25'
//             style={{
//               backgroundImage: `linear-gradient(to right, #80808015 1px, transparent 1px), linear-gradient(to bottom, #80808015 1px, transparent 1px)`,
//               backgroundSize: `clamp(1rem, 3vw, 2.5rem) clamp(1rem, 3vw, 2.5rem)`,
//             }}
//           />
//         </motion.div>
//       </div>

//       {/* Main Content Container with 2025 Fluid Layout */}
//       <div className='relative z-10 flex-1 flex flex-col'>
//         <div
//           className='flex-1 flex items-center justify-center'
//           style={{ padding: "clamp(1rem, 4vw, 3rem)" }}
//         >
//           {/* This inner div now includes top padding for navbar clearance on large screens */}
//           <div className='w-full max-w-[min(90vw,1400px)] grid grid-cols-1 xl:grid-cols-2 gap-[clamp(2rem,8vw,4rem)] items-center xl:pt-16 2xl:pt-20'>
//             {/* Enhanced Mobile-First Logo with Fluid Sizing */}
//             <motion.div
//               className='xl:hidden flex justify-center items-center order-1'
//               style={{
//                 marginBottom: "clamp(1rem, 5vh, 2.5rem)",
//                 minHeight: "clamp(180px, 40vw, 350px)",
//               }}
//               initial={
//                 shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
//               }
//               animate={
//                 shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
//               }
//               transition={
//                 shouldReduceMotion
//                   ? { duration: 0.5 }
//                   : { delay: 0.3, duration: 0.8, ease: "easeOut" }
//               }
//             >
//               {/* Replaced <img> with Next.js <Image> for optimization */}
//               <Image
//                 src='/images/hono-logo.svg'
//                 alt='Hono Logo'
//                 fill={false} // Set to false when using explicit width/height
//                 width={400} // Provide a base width
//                 height={400} // Provide a base height
//                 className='object-contain'
//                 style={{
//                   width: "clamp(200px, 45vw, min(400px, 80vw))",
//                   height: "clamp(200px, 45vw, min(400px, 80vw))",
//                   maxWidth: "min(90vw, 400px)",
//                   maxHeight: "min(50vh, 400px)",
//                 }}
//                 sizes='(max-width: 768px) 45vw, (max-width: 1200px) 400px, 400px'
//               />
//             </motion.div>

//             {/* Text Content with Modern Fluid Typography */}
//             <motion.div
//               className='order-2 xl:order-1 text-center xl:text-left'
//               style={{ maxWidth: "min(100%, 700px)" }}
//               variants={containerVariants}
//               initial='hidden'
//               animate='visible'
//             >
//               {/* Enhanced Badge with Fluid Sizing */}
//               <motion.div
//                 variants={itemVariants}
//                 className='inline-flex items-center gap-[clamp(0.4rem,1.5vw,0.75rem)] bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-[clamp(1rem,3vh,2rem)]'
//                 style={{
//                   padding: `clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.75rem)`,
//                 }}
//               >
//                 <Sparkles
//                   className='text-[#E7FF1A]'
//                   style={{
//                     width: "clamp(14px, 3.5vw, 20px)",
//                     height: "clamp(14px, 3.5vw, 20px)",
//                   }}
//                 />
//                 <span
//                   className='font-medium text-white/90'
//                   style={{
//                     fontSize: "clamp(0.8rem, 2.2vw, 1.1rem)",
//                   }}
//                 >
//                   Next-Gen Creative Studio
//                 </span>
//               </motion.div>

//               {/* Modern Fluid Heading with Enhanced Scaling */}
//               <motion.h1
//                 className='font-bold leading-[0.85] text-white mb-[clamp(1rem,3vh,2rem)]'
//                 variants={itemVariants}
//                 style={{
//                   fontSize: "clamp(2.5rem, 10vw + 1rem, min(4.5rem, 12vw))",
//                   lineHeight: "0.9",
//                   letterSpacing: "-0.02em",
//                 }}
//               >
//                 CREATIVE TECH
//                 <br />
//                 <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
//                   STUDIO
//                 </span>
//                 {!shouldReduceMotion && (
//                   <motion.span
//                     className='inline-block bg-[#E7FF1A] align-middle'
//                     style={{
//                       width: "clamp(3px, 0.6vw, 8px)",
//                       height: "clamp(2rem, 8vw + 0.5rem, 4rem)",
//                       marginLeft: "clamp(0.5rem, 2vw, 1rem)",
//                     }}
//                     animate={{ opacity: [1, 0, 1] }}
//                     transition={{
//                       repeat: Infinity,
//                       duration: 1.5,
//                       ease: "easeInOut",
//                     }}
//                   />
//                 )}
//               </motion.h1>

//               {/* Enhanced Fluid Subtitle */}
//               <motion.p
//                 className='leading-relaxed text-white/85 mb-[clamp(2rem,5vh,3rem)]'
//                 variants={itemVariants}
//                 style={{
//                   fontSize: "clamp(1.1rem, 3vw + 0.5rem, 1.4rem)",
//                   lineHeight: "1.6",
//                   maxWidth: "min(100%, 600px)",
//                   margin: "0 auto",
//                   marginBottom: "clamp(2rem,5vh,3rem)",
//                 }}
//               >
//                 Merging development precision with emotional design to create
//                 digital experiences that resonate and inspire.
//               </motion.p>

//               {/* Enhanced CTA Buttons with Better Responsive Behavior */}
//               <motion.div
//                 variants={itemVariants}
//                 className='flex flex-col sm:flex-row gap-[clamp(1rem,3vw,1.5rem)] justify-center xl:justify-start items-center'
//               >
//                 {/* Primary CTA with Enhanced Fluid Sizing */}
//                 <motion.button
//                   onClick={() => handleScrollToSection("contact")}
//                   className='group inline-flex items-center justify-center gap-[clamp(0.5rem,2vw,0.75rem)] bg-[#E7FF1A] text-[#111316] font-bold uppercase rounded-xl transition-all duration-200 hover:bg-[#E7FF1A]/90 hover:shadow-lg hover:shadow-[#E7FF1A]/20 w-full sm:w-auto'
//                   style={{
//                     padding:
//                       "clamp(0.875rem, 3vw, 1.125rem) clamp(2rem, 6vw, 2.5rem)",
//                     fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)",
//                     minWidth: "clamp(160px, 40vw, 200px)",
//                   }}
//                   whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
//                   whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
//                   transition={
//                     shouldReduceMotion ? { duration: 0.1 } : { duration: 0.15 }
//                   }
//                 >
//                   Get Started
//                   <ArrowRight
//                     className='group-hover:translate-x-1 transition-transform duration-200'
//                     style={{
//                       width: "clamp(18px, 4vw, 22px)",
//                       height: "clamp(18px, 4vw, 22px)",
//                     }}
//                   />
//                 </motion.button>

//                 {/* Secondary CTA with Enhanced Styling */}
//                 <motion.button
//                   onClick={() => handleScrollToSection("work")}
//                   className='group inline-flex items-center justify-center gap-[clamp(0.5rem,2vw,0.75rem)] bg-white/10 text-white font-bold uppercase rounded-xl border border-white/20 backdrop-blur-xl transition-all duration-200 hover:bg-white/20 hover:border-white/30 w-full sm:w-auto'
//                   style={{
//                     padding:
//                       "clamp(0.875rem, 3vw, 1.125rem) clamp(2rem, 6vw, 2.5rem)",
//                     fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)",
//                     minWidth: "clamp(160px, 40vw, 200px)",
//                   }}
//                   whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
//                   whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
//                   transition={
//                     shouldReduceMotion ? { duration: 0.1 } : { duration: 0.15 }
//                   }
//                 >
//                   <Play
//                     style={{
//                       width: "clamp(18px, 4vw, 22px)",
//                       height: "clamp(18px, 4vw, 22px)",
//                     }}
//                   />
//                   View Work
//                 </motion.button>
//               </motion.div>
//             </motion.div>

//             {/* Enhanced Desktop Logo/Video Section */}
//             <motion.div
//               className='relative xl:block hidden order-2 w-full'
//               initial={
//                 shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30 }
//               }
//               animate={
//                 shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
//               }
//               transition={
//                 shouldReduceMotion
//                   ? { duration: 0.5 }
//                   : { delay: 0.6, duration: 0.8, ease: "easeOut" }
//               }
//             >
//               {/* Enhanced Video Player Container */}
//               <motion.div
//                 className='w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10'
//                 whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
//                 transition={
//                   shouldReduceMotion
//                     ? { duration: 0.1 }
//                     : { type: "spring", stiffness: 300, damping: 30 }
//                 }
//               >
//                 <video
//                   className='w-full h-full object-cover'
//                   src='/videos/hero-showcase.webm'
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   preload='metadata'
//                 />
//               </motion.div>
//             </motion.div>
//           </div>
//         </div>

//         {/* Enhanced Scroll Indicator with Modern Styling */}
//         <motion.div
//           className='relative z-10 flex justify-center'
//           style={{ paddingBottom: "clamp(1.5rem,4vh,2.5rem)" }}
//           initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
//           animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
//           transition={
//             shouldReduceMotion
//               ? { duration: 0.5 }
//               : { delay: 1.2, duration: 0.6 }
//           }
//         >
//           <motion.div
//             className='rounded-full border-2 border-white/30 flex justify-center cursor-pointer hover:border-white/50 transition-colors duration-200 backdrop-blur-sm bg-white/5'
//             style={{
//               width: "clamp(24px, 5vw, 28px)",
//               height: "clamp(40px, 8vw, 48px)",
//             }}
//             animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
//             transition={
//               shouldReduceMotion
//                 ? { duration: 1 }
//                 : { repeat: Infinity, duration: 2, ease: "easeInOut" }
//             }
//             onClick={() => handleScrollToSection("about")}
//           >
//             <motion.div
//               className='bg-white/70 rounded-full'
//               style={{
//                 width: "clamp(5px, 1.2vw, 7px)",
//                 height: "clamp(5px, 1.2vw, 7px)",
//                 marginTop: "clamp(8px, 2vw, 10px)",
//               }}
//               animate={shouldReduceMotion ? {} : { y: [0, 12, 0] }}
//               transition={
//                 shouldReduceMotion
//                   ? { duration: 1 }
//                   : { repeat: Infinity, duration: 2, ease: "easeInOut" }
//               }
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";
import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import Image from "next/image"; // Import Next.js Image component
import { ArrowRight, Play, Sparkles } from "lucide-react";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 20, opacity: 0 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0 }
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

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className='relative w-full flex flex-col bg-[#111316] overflow-hidden min-h-screen xl:h-[calc(100vh-4rem)] 2xl:h-[calc(100vh-5rem)]'>
      {/* Background Image with Modern Fluid Scaling */}
      <div className='absolute inset-0 z-0'>
        <motion.div
          initial={
            shouldReduceMotion
              ? { opacity: 0.8 }
              : { scale: 1.05, opacity: 0.8 }
          }
          animate={
            shouldReduceMotion ? { opacity: 1 } : { scale: 1, opacity: 1 }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0.5 }
              : { duration: 1.5, ease: "easeOut" }
          }
          className='w-full h-full'
        >
          {/* Replaced <img> with Next.js <Image> for optimization */}
          <Image
            src='/images/hero-background.webp'
            alt='Hero background'
            fill // Use fill to make the image cover its parent div
            priority // Load this image with high priority as it's part of LCP
            className='object-cover' // Tailwind object-cover for styling
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw' // Define sizes for responsive images
          />
          {/* Enhanced Gradient Overlays for Better Readability */}
          <div className='absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30' />
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40' />
          {/* Modern Fluid Grid Pattern */}
          <div
            className='absolute inset-0 opacity-25'
            style={{
              backgroundImage: `linear-gradient(to right, #80808015 1px, transparent 1px), linear-gradient(to bottom, #80808015 1px, transparent 1px)`,
              backgroundSize: `clamp(1rem, 3vw, 2.5rem) clamp(1rem, 3vw, 2.5rem)`,
            }}
          />
        </motion.div>
      </div>

      {/* Main Content Container with 2025 Fluid Layout */}
      <div className='relative z-10 flex-1 flex flex-col'>
        <div
          className='flex-1 flex items-center justify-center'
          style={{ padding: "clamp(1rem, 4vw, 3rem)" }}
        >
          {/* This inner div now includes top padding for navbar clearance on large screens */}
          <div className='w-full max-w-[min(90vw,1400px)] grid grid-cols-1 xl:grid-cols-2 gap-[clamp(2rem,8vw,4rem)] items-center xl:pt-16 2xl:pt-20'>
            {/* Enhanced Mobile-First Logo with Fluid Sizing */}
            <motion.div
              className='xl:hidden flex justify-center items-center order-1'
              style={{
                marginBottom: "clamp(1rem, 5vh, 2.5rem)",
                minHeight: "clamp(180px, 40vw, 350px)",
              }}
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }
              }
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0.5 }
                  : { delay: 0.3, duration: 0.8, ease: "easeOut" }
              }
            >
              {/* Replaced <img> with Next.js <Image> for optimization */}
              <Image
                src='/images/hono-logo.svg'
                alt='Hono Logo'
                fill={false} // Set to false when using explicit width/height
                width={400} // Provide a base width
                height={400} // Provide a base height
                className='object-contain'
                style={{
                  width: "clamp(200px, 45vw, min(400px, 80vw))",
                  height: "clamp(200px, 45vw, min(400px, 80vw))",
                  maxWidth: "min(90vw, 400px)",
                  maxHeight: "min(50vh, 400px)",
                }}
                sizes='(max-width: 768px) 45vw, (max-width: 1200px) 400px, 400px'
              />
            </motion.div>

            {/* Text Content with Modern Fluid Typography */}
            <motion.div
              className='order-2 xl:order-1 text-center xl:text-left'
              style={{ maxWidth: "min(100%, 700px)" }}
              variants={containerVariants}
              initial='hidden'
              animate='visible'
            >
              {/* Enhanced Badge with Fluid Sizing */}
              <motion.div
                variants={itemVariants}
                className='inline-flex items-center gap-[clamp(0.4rem,1.5vw,0.75rem)] bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-[clamp(1rem,3vh,2rem)]'
                style={{
                  padding: `clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.75rem)`,
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
                  Next-Gen Creative Studio
                </span>
              </motion.div>

              {/* Modern Fluid Heading with Enhanced Scaling */}
              <motion.h1
                className='font-bold leading-[0.85] text-white mb-[clamp(1rem,3vh,2rem)]'
                variants={itemVariants}
                style={{
                  fontSize: "clamp(2.5rem, 10vw + 1rem, min(4.5rem, 12vw))",
                  lineHeight: "0.9",
                  letterSpacing: "-0.02em",
                }}
              >
                CREATIVE TECH
                <br />
                <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                  STUDIO
                </span>
                {!shouldReduceMotion && (
                  <motion.span
                    className='inline-block bg-[#E7FF1A] align-middle'
                    style={{
                      width: "clamp(3px, 0.6vw, 8px)",
                      height: "clamp(2rem, 8vw + 0.5rem, 4rem)",
                      marginLeft: "clamp(0.5rem, 2vw, 1rem)",
                    }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  />
                )}
              </motion.h1>

              {/* Enhanced Fluid Subtitle */}
              <motion.p
                className='leading-relaxed text-white/85 mb-[clamp(2rem,5vh,3rem)]'
                variants={itemVariants}
                style={{
                  fontSize: "clamp(1.1rem, 3vw + 0.5rem, 1.4rem)",
                  lineHeight: "1.6",
                  maxWidth: "min(100%, 600px)",
                  margin: "0 auto",
                  marginBottom: "clamp(2rem,5vh,3rem)",
                }}
              >
                Merging development precision with emotional design to create
                digital experiences that resonate and inspire.
              </motion.p>

              {/* Enhanced CTA Buttons with Better Responsive Behavior */}
              <motion.div
                variants={itemVariants}
                className='flex flex-col sm:flex-row gap-[clamp(1rem,3vw,1.5rem)] justify-center xl:justify-start items-center'
              >
                {/* Primary CTA with Enhanced Fluid Sizing */}
                <motion.button
                  onClick={() => handleScrollToSection("contact")}
                  className='group inline-flex items-center justify-center gap-[clamp(0.5rem,2vw,0.75rem)] bg-[#E7FF1A] text-[#111316] font-bold uppercase rounded-xl transition-all duration-200 hover:bg-[#E7FF1A]/90 hover:shadow-lg hover:shadow-[#E7FF1A]/20 w-full sm:w-auto'
                  style={{
                    padding:
                      "clamp(0.875rem, 3vw, 1.125rem) clamp(2rem, 6vw, 2.5rem)",
                    fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)",
                    minWidth: "clamp(160px, 40vw, 200px)",
                  }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={
                    shouldReduceMotion ? { duration: 0.1 } : { duration: 0.15 }
                  }
                >
                  Get Started
                  <ArrowRight
                    className='group-hover:translate-x-1 transition-transform duration-200'
                    style={{
                      width: "clamp(18px, 4vw, 22px)",
                      height: "clamp(18px, 4vw, 22px)",
                    }}
                  />
                </motion.button>

                {/* Secondary CTA with Enhanced Styling */}
                <motion.button
                  onClick={() => handleScrollToSection("work")}
                  className='group inline-flex items-center justify-center gap-[clamp(0.5rem,2vw,0.75rem)] bg-white/10 text-white font-bold uppercase rounded-xl border border-white/20 backdrop-blur-xl transition-all duration-200 hover:bg-white/20 hover:border-white/30 w-full sm:w-auto'
                  style={{
                    padding:
                      "clamp(0.875rem, 3vw, 1.125rem) clamp(2rem, 6vw, 2.5rem)",
                    fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)",
                    minWidth: "clamp(160px, 40vw, 200px)",
                  }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={
                    shouldReduceMotion ? { duration: 0.1 } : { duration: 0.15 }
                  }
                >
                  <Play
                    style={{
                      width: "clamp(18px, 4vw, 22px)",
                      height: "clamp(18px, 4vw, 22px)",
                    }}
                  />
                  View Work
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Enhanced Desktop Logo/Video Section */}
            <motion.div
              className='relative xl:block hidden order-2 w-full'
              initial={
                shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 30 }
              }
              animate={
                shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0.5 }
                  : { delay: 0.6, duration: 0.8, ease: "easeOut" }
              }
            >
              {/* Enhanced Video Player Container */}
              <motion.div
                className='w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10'
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.1 }
                    : { type: "spring", stiffness: 300, damping: 30 }
                }
              >
                <video
                  className='w-full h-full object-cover'
                  src='/videos/hero-showcase.webm'
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload='metadata'
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator with Modern Styling */}
        <motion.div
          className='relative z-10 flex justify-center'
          style={{ paddingBottom: "clamp(1.5rem,4vh,2.5rem)" }}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={
            shouldReduceMotion
              ? { duration: 0.5 }
              : { delay: 1.2, duration: 0.6 }
          }
        >
          <motion.div
            className='rounded-full border-2 border-white/30 flex justify-center cursor-pointer hover:border-white/50 transition-colors duration-200 backdrop-blur-sm bg-white/5'
            style={{
              width: "clamp(24px, 5vw, 28px)",
              height: "clamp(40px, 8vw, 48px)",
            }}
            animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
            transition={
              shouldReduceMotion
                ? { duration: 1 }
                : { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }
            onClick={() => handleScrollToSection("about")}
          >
            <motion.div
              className='bg-white/70 rounded-full'
              style={{
                width: "clamp(5px, 1.2vw, 7px)",
                height: "clamp(5px, 1.2vw, 7px)",
                marginTop: "clamp(8px, 2vw, 10px)",
              }}
              animate={shouldReduceMotion ? {} : { y: [0, 12, 0] }}
              transition={
                shouldReduceMotion
                  ? { duration: 1 }
                  : { repeat: Infinity, duration: 2, ease: "easeInOut" }
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
