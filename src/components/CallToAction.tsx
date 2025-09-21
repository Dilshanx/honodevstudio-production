
// "use client";

// import React, { useCallback, useRef } from "react";
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   Variants,
//   useReducedMotion,
// } from "framer-motion";
// import { useRouter } from "next/navigation";
// import { ArrowRight, Sparkles } from "lucide-react";
// import Image from "next/image";

// // --- Main CallToAction Section Component ---
// export function CallToAction(): React.JSX.Element {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const router = useRouter();
//   const shouldReduceMotion = useReducedMotion();

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
//   const rotateX = useSpring(
//     useTransform(mouseY, [-0.5, 0.5], [15, -15]),
//     springConfig
//   );
//   const rotateY = useSpring(
//     useTransform(mouseX, [-0.5, 0.5], [-15, 15]),
//     springConfig
//   );

//   // Fix: Use useTransform with correct syntax for multiple motion values
//   const backgroundPosition = useTransform(
//     [mouseX, mouseY],
//     ([latestX, latestY]) =>
//       `${50 + (latestX as number) * 20}% ${50 + (latestY as number) * 20}%`
//   );

//   const handleMouseMove = useCallback(
//     (e: React.MouseEvent<HTMLDivElement>): void => {
//       if (shouldReduceMotion || !containerRef.current) return;
//       const { left, top, width, height } =
//         containerRef.current.getBoundingClientRect();
//       mouseX.set((e.clientX - left) / width - 0.5);
//       mouseY.set((e.clientY - top) / height - 0.5);
//     },
//     [mouseX, mouseY, shouldReduceMotion]
//   );

//   const handleMouseLeave = useCallback((): void => {
//     if (shouldReduceMotion) return;
//     mouseX.set(0);
//     mouseY.set(0);
//   }, [mouseX, mouseY, shouldReduceMotion]);

//   const scrollToContact = (): void => {
//     router.push("/contact");
//   };

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2, delayChildren: 0.3 },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100, damping: 15, mass: 0.8 },
//     },
//   };

//   return (
//     <section
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       id='cta'
//       className='relative w-full bg-[#111316] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden'
//       style={{ perspective: "1000px" }}
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
//         {!shouldReduceMotion && (
//           <motion.div
//             className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(231,255,26,0.05)_0%,transparent_40%)]'
//             style={{
//               backgroundSize: "200% 200%",
//               backgroundPosition,
//             }}
//           />
//         )}
//       </div>

//       <div className='container mx-auto px-3 sm:px-4 md:px-8 relative z-10'>
//         <motion.div
//           style={
//             shouldReduceMotion
//               ? {}
//               : { rotateX, rotateY, transformStyle: "preserve-3d" }
//           }
//           className='max-w-6xl mx-auto'
//           variants={containerVariants}
//           initial='hidden'
//           whileInView='visible'
//           viewport={{ once: true, amount: 0.2 }}
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
//                   src='/images/cta.svg'
//                   alt='Call to Action'
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
//             {/* Badge with updated sizing to match About section */}
//             <motion.div
//               variants={itemVariants}
//               className='inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full'
//               style={{
//                 gap: "clamp(0.4rem,1.5vw,0.75rem)",
//                 padding:
//                   "clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.75rem)",
//                 marginBottom: "clamp(1rem,3vh,2rem)",
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
//                 Let&apos;s Get Started
//               </span>
//             </motion.div>

//             {/* Title with updated sizing to match About section */}
//             <h2
//               className='font-bold text-white px-2'
//               style={{
//                 fontSize: "clamp(2rem, 8vw + 0.5rem, min(3.5rem, 10vw))",
//                 lineHeight: "0.9",
//                 letterSpacing: "-0.02em",
//                 marginBottom: "clamp(1rem,3vh,2rem)",
//               }}
//             >
//               <span className='block sm:inline'>READY TO BUILD</span>{" "}
//               <span className='block sm:inline bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
//                 EXTRAORDINARY?
//               </span>
//             </h2>

//             {/* Subtitle with updated sizing to match About section */}
//             <p
//               className='text-white/80 max-w-4xl mx-auto px-2'
//               style={{
//                 fontSize: "clamp(1rem, 2.8vw + 0.4rem, 1.3rem)",
//                 lineHeight: "1.6",
//               }}
//             >
//               Let&apos;s collaborate to turn your innovative ideas into powerful
//               digital solutions. Reach out today and let us be your partner.
//             </p>
//           </motion.div>

//           <motion.div variants={itemVariants} className='text-center px-2'>
//             <div className='relative group inline-block w-full'>
//               <div className='absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl sm:rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl' />
//               <div className='relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10'>
//                 {/* Card title with updated sizing */}
//                 <h3
//                   className='font-bold text-white leading-tight'
//                   style={{
//                     fontSize: "clamp(1.5rem, 4vw + 0.5rem, 2.2rem)",
//                     lineHeight: "1.1",
//                     marginBottom: "clamp(1rem,3vh,2rem)",
//                   }}
//                 >
//                   Transform Your Vision Into Reality
//                 </h3>

//                 {/* Card description with updated sizing */}
//                 <p
//                   className='text-white/80 max-w-2xl mx-auto'
//                   style={{
//                     fontSize: "clamp(0.95rem, 2.2vw + 0.3rem, 1.15rem)",
//                     lineHeight: "1.6",
//                     marginBottom: "clamp(2rem,5vh,3rem)",
//                   }}
//                 >
//                   Get a free consultation and discover how we can help you
//                   achieve your digital goals with our expert team.
//                 </p>

//                 <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'>
//                   {/* Primary button with updated sizing */}
//                   <motion.button
//                     onClick={scrollToContact}
//                     className='group/btn inline-flex items-center justify-center bg-[#E7FF1A] text-[#111316] font-bold uppercase rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-[#E7FF1A]/90 hover:shadow-lg hover:shadow-[#E7FF1A]/20'
//                     style={{
//                       gap: "clamp(0.5rem,2vw,0.75rem)",
//                       padding:
//                         "clamp(0.875rem, 3vw, 1.125rem) clamp(2rem, 6vw, 2.5rem)",
//                       fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)",
//                     }}
//                     whileHover={
//                       shouldReduceMotion
//                         ? {}
//                         : {
//                             scale: 1.05,
//                             boxShadow: "0px 0px 30px rgba(231, 255, 26, 0.6)",
//                           }
//                     }
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     Get Free Quote
//                     <ArrowRight
//                       className='group-hover/btn:translate-x-1 transition-transform'
//                       style={{
//                         width: "clamp(18px, 4vw, 22px)",
//                         height: "clamp(18px, 4vw, 22px)",
//                       }}
//                     />
//                   </motion.button>

//                   {/* Secondary button with updated sizing */}
//                   <motion.button
//                     onClick={() =>
//                       document
//                         .getElementById("work")
//                         ?.scrollIntoView({ behavior: "smooth" })
//                     }
//                     className='group/btn inline-flex items-center justify-center bg-white/10 text-white font-bold uppercase rounded-xl sm:rounded-2xl border border-white/20 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:border-white/30'
//                     style={{
//                       gap: "clamp(0.5rem,2vw,0.75rem)",
//                       padding:
//                         "clamp(0.875rem, 3vw, 1.125rem) clamp(2rem, 6vw, 2.5rem)",
//                       fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)",
//                     }}
//                     whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
//                     whileTap={{ scale: 0.98 }}
//                   >
//                     View Portfolio
//                     <ArrowRight
//                       className='group-hover/btn:translate-x-1 transition-transform'
//                       style={{
//                         width: "clamp(18px, 4vw, 22px)",
//                         height: "clamp(18px, 4vw, 22px)",
//                       }}
//                     />
//                   </motion.button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";

// Modern 2025 Next.js CTA Component - Clean and Simple
export function CallToAction(): React.JSX.Element {
  // Simple scroll handler for portfolio
  const scrollToPortfolio = () => {
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="cta"
      className="relative w-full bg-[#111316] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] sm:bg-[size:2rem_2rem] opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(231,255,26,0.05)_0%,transparent_40%)]" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Image */}
          <div className="flex justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-125" />
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 transition-transform duration-300 group-hover:scale-105 group-hover:-translate-y-2">
                <Image
                  src="/images/cta.svg"
                  alt="Call to Action"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 224px, 256px"
                />
              </div>
            </div>
          </div>

          {/* Header Content */}
          <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16">
            
            {/* Badge */}
            <div
              className="inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full"
              style={{
                gap: "clamp(0.4rem,1.5vw,0.75rem)",
                padding: "clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.75rem)",
                marginBottom: "clamp(1rem,3vh,2rem)",
              }}
            >
              <Sparkles
                className="text-[#E7FF1A]"
                style={{
                  width: "clamp(14px, 3.5vw, 20px)",
                  height: "clamp(14px, 3.5vw, 20px)",
                }}
              />
              <span
                className="font-medium text-white/90"
                style={{
                  fontSize: "clamp(0.8rem, 2.2vw, 1.1rem)",
                }}
              >
                Let&apos;s Get Started
              </span>
            </div>

            {/* Main Title */}
            <h2
              className="font-bold text-white px-2"
              style={{
                fontSize: "clamp(2rem, 8vw + 0.5rem, min(3.5rem, 10vw))",
                lineHeight: "0.9",
                letterSpacing: "-0.02em",
                marginBottom: "clamp(1rem,3vh,2rem)",
              }}
            >
              <span className="block sm:inline">READY TO BUILD</span>{" "}
              <span className="block sm:inline bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                EXTRAORDINARY?
              </span>
            </h2>

            {/* Subtitle */}
            <p
              className="text-white/80 max-w-4xl mx-auto px-2"
              style={{
                fontSize: "clamp(1rem, 2.8vw + 0.4rem, 1.3rem)",
                lineHeight: "1.6",
              }}
            >
              Let&apos;s collaborate to turn your innovative ideas into powerful
              digital solutions. Reach out today and let us be your partner.
            </p>
          </div>

          {/* CTA Card */}
          <div className="text-center px-2">
            <div className="relative group inline-block w-full max-w-5xl">
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl sm:rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />
              
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10">
                
                {/* Card Title */}
                <h3
                  className="font-bold text-white leading-tight"
                  style={{
                    fontSize: "clamp(1.5rem, 4vw + 0.5rem, 2.2rem)",
                    lineHeight: "1.1",
                    marginBottom: "clamp(1rem,3vh,2rem)",
                  }}
                >
                  Transform Your Vision Into Reality
                </h3>

                {/* Card Description */}
                <p
                  className="text-white/80 max-w-2xl mx-auto"
                  style={{
                    fontSize: "clamp(0.95rem, 2.2vw + 0.3rem, 1.15rem)",
                    lineHeight: "1.6",
                    marginBottom: "clamp(2rem,5vh,3rem)",
                  }}
                >
                  Get a free consultation and discover how we can help you
                  achieve your digital goals with our expert team.
                </p>

                {/* Modern 2025 Button Container */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  
                  {/* Primary CTA Button - Using Next.js Link */}
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center bg-[#E7FF1A] text-[#111316] font-bold uppercase rounded-xl sm:rounded-2xl transition-all duration-300 hover:bg-[#E7FF1A]/90 hover:shadow-lg hover:shadow-[#E7FF1A]/30 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#E7FF1A]/50 focus:ring-offset-2 focus:ring-offset-[#111316]"
                    style={{
                      gap: "clamp(0.5rem,2vw,0.75rem)",
                      padding: "clamp(0.875rem, 3vw, 1.125rem) clamp(2rem, 6vw, 2.5rem)",
                      fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)",
                    }}
                  >
                    Get Free Quote
                    <ArrowRight
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      style={{
                        width: "clamp(18px, 4vw, 22px)",
                        height: "clamp(18px, 4vw, 22px)",
                      }}
                    />
                  </Link>

                  {/* Secondary Button - Modern Event Handler */}
                  <button
                    onClick={scrollToPortfolio}
                    type="button"
                    className="group inline-flex items-center justify-center bg-white/10 text-white font-bold uppercase rounded-xl sm:rounded-2xl border border-white/20 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-[#111316]"
                    style={{
                      gap: "clamp(0.5rem,2vw,0.75rem)",
                      padding: "clamp(0.875rem, 3vw, 1.125rem) clamp(2rem, 6vw, 2.5rem)",
                      fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)",
                    }}
                    aria-label="View our portfolio"
                  >
                    View Portfolio
                    <ArrowRight
                      className="transition-transform duration-300 group-hover:translate-x-1"
                      style={{
                        width: "clamp(18px, 4vw, 22px)",
                        height: "clamp(18px, 4vw, 22px)",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}