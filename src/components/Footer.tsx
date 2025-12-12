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
// import {
//   ArrowUp, // Not directly used in Footer, but often imported with it
//   Mail,
//   Phone,
//   MapPin,
//   Instagram,
//   Twitter,
//   Linkedin,
//   Github,
//   Sparkles,
//   ArrowRight,
// } from "lucide-react";

// // --- Back To Top Button Component (with responsive logic) ---
// // (This component is included here for context, but it's the same as the immersive above)
// function BackToTopButton() {
//   const [isVisible, setIsVisible] = useState(false);
//   const shouldReduceMotion = useReducedMotion();

//   const handleScroll = () => {
//     if (window.scrollY > 300) {
//       setIsVisible(true);
//     } else {
//       setIsVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <AnimatePresence>
//       {isVisible && (
//         <motion.button
//           onClick={scrollToTop}
//           className='hidden lg:flex fixed right-8 bottom-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-[#E7FF1A] to-violet-400 items-center justify-center shadow-lg shadow-[#E7FF1A]/20 hover:shadow-[#E7FF1A]/40 transition-all duration-300'
//           aria-label='Back to top'
//           initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
//           animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
//           exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
//           transition={
//             shouldReduceMotion
//               ? { duration: 0.3 }
//               : { duration: 0.3, ease: "easeInOut" }
//           }
//           whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.1 }}
//           whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
//         >
//           <ArrowUp className='w-5 h-5 text-[#111316]' />
//         </motion.button>
//       )}
//     </AnimatePresence>
//   );
// }

// // --- Main Footer Component ---
// export function Footer() {
//   const currentYear = new Date().getFullYear();
//   const containerRef = useRef<HTMLDivElement>(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const shouldReduceMotion = useReducedMotion(); // Get reduced motion preference

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
//       // Conditionally apply mouse move effect
//       if (shouldReduceMotion) return;

//       const { clientX, clientY, currentTarget } = e;
//       const rect = currentTarget.getBoundingClientRect();
//       mouseX.set((clientX - rect.left) / rect.width - 0.5);
//       mouseY.set((clientY - rect.top) / rect.height - 0.5);
//     },
//     [mouseX, mouseY, shouldReduceMotion] // Add shouldReduceMotion to dependencies
//   );

//   const handleMouseLeave = useCallback(() => {
//     // Conditionally apply mouse leave effect
//     if (shouldReduceMotion) return;

//     mouseX.set(0);
//     mouseY.set(0);
//   }, [mouseX, mouseY, shouldReduceMotion]); // Add shouldReduceMotion to dependencies

//   const socialLinks = [
//     {
//       name: "Instagram",
//       icon: Instagram,
//       href: "#",
//       color: "from-pink-400 to-purple-400",
//     },
//     {
//       name: "Twitter",
//       icon: Twitter,
//       href: "#",
//       color: "from-cyan-400 to-blue-400",
//     },
//     {
//       name: "LinkedIn",
//       icon: Linkedin,
//       href: "#",
//       color: "from-blue-400 to-indigo-400",
//     },
//     {
//       name: "GitHub",
//       icon: Github,
//       href: "#",
//       color: "from-gray-400 to-gray-600",
//     },
//   ];

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
//     <footer className='relative w-full bg-[#111316] py-16 sm:py-20 lg:py-24 2xl:py-16 pb-24 xl:pb-16 overflow-hidden'>
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
//           {/* Header Section - Reduced spacing for 2xl */}
//           <motion.div
//             variants={itemVariants}
//             className='text-center mb-12 sm:mb-16 lg:mb-20 2xl:mb-12'
//           >
//             {/* Badge similar to other sections */}
//             <motion.div
//               variants={itemVariants}
//               className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-4 lg:mb-6 2xl:mb-4'
//             >
//               <Sparkles className='w-4 h-4 text-[#E7FF1A]' />
//               <span className='text-sm font-medium text-white/90'>
//                 Let&apos;s Connect
//               </span>
//             </motion.div>

//             <h2 className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white mb-4 lg:mb-6 2xl:mb-4'>
//               LET&apos;S BUILD
//               <br />
//               <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
//                 TOGETHER
//               </span>
//             </h2>

//             {/* Subtitle with responsive text - OPTIMIZED FOR MOBILE/TABLET */}
//             <p className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-white/80 max-w-3xl mx-auto'>
//               {/* Mobile/Tablet: Shorter, more direct text */}
//               <span className='block md:hidden'>
//                 Have a project in mind? Let&apos;s create something
//                 extraordinary.
//               </span>
//               {/* Desktop: Full descriptive text */}
//               <span className='hidden md:block'>
//                 Have a project in mind? We&apos;d love to hear about it. Reach
//                 out and let&apos;s create something extraordinary.
//               </span>
//             </p>
//           </motion.div>

//           <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-8 items-start mb-12 sm:mb-16 lg:mb-20 2xl:mb-12'>
//             {/* Contact Information */}
//             <div className='space-y-6 lg:space-y-8 2xl:space-y-6'>
//               <motion.div variants={itemVariants}>
//                 <h3 className='text-2xl md:text-3xl font-bold text-white mb-4 lg:mb-6 2xl:mb-4'>
//                   Contact Information
//                 </h3>
//                 <div className='space-y-4 lg:space-y-6 2xl:space-y-4 text-white/80'>
//                   <motion.div
//                     className='group flex items-center gap-4 p-3 lg:p-4 2xl:p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300'
//                     // Conditional whileHover
//                     whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
//                   >
//                     <div className='p-2 rounded-xl bg-gradient-to-r from-[#E7FF1A] to-violet-400 group-hover:scale-110 transition-transform duration-300'>
//                       <MapPin className='w-5 h-5 text-[#111316]' />
//                     </div>
//                     <span className='group-hover:text-[#E7FF1A] transition-colors'>
//                     N07-E Kandy Katugasthota
//                     </span>
//                   </motion.div>

//                   <motion.div
//                     className='group flex items-center gap-4 p-3 lg:p-4 2xl:p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300'
//                     // Conditional whileHover
//                     whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
//                   >
//                     <div className='p-2 rounded-xl bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:scale-110 transition-transform duration-300'>
//                       <Mail className='w-5 h-5 text-[#111316]' />
//                     </div>
//                     <span className='group-hover:text-[#E7FF1A] transition-colors'>
//                       hello@honodevstudio.com
//                     </span>
//                   </motion.div>

//                   <motion.div
//                     className='group flex items-center gap-4 p-3 lg:p-4 2xl:p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300'
//                     // Conditional whileHover
//                     whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
//                   >
//                     <div className='p-2 rounded-xl bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:scale-110 transition-transform duration-300'>
//                       <Phone className='w-5 h-5 text-[#111316]' />
//                     </div>
//                     <span className='group-hover:text-[#E7FF1A] transition-colors'>
//                       +94763923943
//                     </span>
//                   </motion.div>
//                 </div>
//               </motion.div>

//               {/* Social Links */}
//               <motion.div variants={itemVariants}>
//                 <h3 className='text-2xl md:text-3xl font-bold text-white mb-4 lg:mb-6 2xl:mb-4'>
//                   Follow Us
//                 </h3>
//                 <div className='flex gap-3 lg:gap-4 2xl:gap-3'>
//                   {socialLinks.map((link) => (
//                     <motion.a
//                       key={link.name}
//                       href={link.href}
//                       // Conditional whileHover and whileTap
//                       whileHover={
//                         shouldReduceMotion
//                           ? {}
//                           : {
//                               scale: 1.1,
//                               boxShadow: "0px 0px 15px rgba(231, 255, 26, 0.5)",
//                             }
//                       }
//                       whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
//                       className={`p-3 bg-gradient-to-r ${link.color} rounded-2xl backdrop-blur-sm transition-all duration-300 group`}
//                       aria-label={link.name}
//                     >
//                       <link.icon className='h-6 w-6 text-white group-hover:text-[#111316] transition-colors' />
//                     </motion.a>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>

//             {/* Call to Action - OPTIMIZED FOR MOBILE/TABLET */}
//             <motion.div
//               variants={itemVariants}
//               className='text-center lg:text-left'
//             >
//               <div className='relative group'>
//                 <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl' />

//                 <div className='relative p-6 lg:p-8 2xl:p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500'>
//                   <h3 className='text-2xl md:text-3xl font-bold text-white mb-4 lg:mb-6 2xl:mb-4'>
//                     Ready to Start Your Project?
//                   </h3>

//                   {/* CTA description with responsive text - OPTIMIZED FOR MOBILE/TABLET */}
//                   <p className='text-white/80 mb-6 lg:mb-8 2xl:mb-6 leading-relaxed'>
//                     {/* Mobile/Tablet: Shorter, more direct text */}
//                     <span className='block md:hidden'>
//                       Get in touch today and let&apos;s create something amazing
//                       together.
//                     </span>
//                     {/* Desktop: Full descriptive text */}
//                     <span className='hidden md:block'>
//                       We&apos;re here to help bring your ideas to life. Get in
//                       touch with us today and let&apos;s discuss how we can work
//                       together to create something amazing.
//                     </span>
//                   </p>

//                   <div className='flex flex-col sm:flex-row gap-3 lg:gap-4 2xl:gap-3'>
//                     <motion.a
//                       href='/contact'
//                       // Conditional whileHover and whileTap
//                       whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
//                       whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
//                       className='group/btn inline-flex items-center gap-3 bg-[#E7FF1A] text-[#111316] font-bold uppercase py-3 lg:py-4 2xl:py-3 px-6 lg:px-8 2xl:px-6 rounded-2xl transition-all duration-300 hover:bg-[#E7FF1A]/90 hover:shadow-lg hover:shadow-[#E7FF1A]/20'
//                     >
//                       Get in Touch
//                       <ArrowRight className='w-5 h-5 group-hover/btn:translate-x-1 transition-transform' />
//                     </motion.a>

//                     <motion.a
//                       href='/#work'
//                       // Conditional whileHover and whileTap
//                       whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
//                       whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
//                       className='group/btn inline-flex items-center gap-3 bg-white/10 text-white font-bold uppercase py-3 lg:py-4 2xl:py-3 px-6 lg:px-8 2xl:px-6 rounded-2xl border border-white/20 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:border-white/30'
//                     >
//                       View Work
//                       <ArrowRight className='w-5 h-5 group-hover/btn:translate-x-1 transition-transform' />
//                     </motion.a>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Footer Bottom - Reduced spacing for 2xl */}
//           <motion.div
//             variants={itemVariants}
//             className='pt-6 lg:pt-8 2xl:pt-6 border-t border-white/10 text-center'
//           >
//             <div className='flex flex-col sm:flex-row justify-center items-center gap-3 lg:gap-4 2xl:gap-3 mb-3 lg:mb-4 2xl:mb-3'>
//               <a
//                 href='/privacy'
//                 className='text-white/60 hover:text-[#E7FF1A] transition-colors duration-300'
//               >
//                 Privacy Policy
//               </a>
//               <span className='hidden sm:inline text-white/30'>•</span>
//               <a
//                 href='/contact'
//                 className='text-white/60 hover:text-[#E7FF1A] transition-colors duration-300'
//               >
//                 Contact Us
//               </a>
//             </div>
//             <p className='text-white/40'>
//               © {currentYear} Hono Dev Studio. All Rights Reserved.
//             </p>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* RENDER THE SMART, RESPONSIVE BUTTON HERE */}
//       <BackToTopButton />
//     </footer>
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
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// --- Back To Top Button Component ---
function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className='hidden lg:flex fixed right-8 bottom-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 items-center justify-center shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 text-white'
          aria-label='Back to top'
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className='w-5 h-5' />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// --- Main Footer Component ---
export function Footer() {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

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

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "from-sky-400 to-blue-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "from-blue-600 to-indigo-600",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "#",
      color: "from-slate-700 to-slate-900",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0 } : { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8,
      },
    },
  };

  return (
    <footer className='relative w-full bg-[#E0F2FE] py-16 sm:py-20 lg:py-24 2xl:py-16 pb-24 xl:pb-16 overflow-hidden'>
      {/* --- Background Elements --- */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        {/* Soft Blobs (Animated via Mouse) */}
        {!shouldReduceMotion && (
          <motion.div
            style={{ x: dx, y: dy }}
            className='absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white/40 rounded-full blur-[100px]'
          />
        )}
        <div className='absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-200/40 rounded-full blur-[100px]' />

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

      <div className='container mx-auto px-4 md:px-8 lg:px-12 relative z-10'>
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className='max-w-6xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className='text-center mb-12 sm:mb-16 lg:mb-20 2xl:mb-12'
          >
            {/* Badge */}
            <div className='inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/60 rounded-full px-4 py-2 mb-4 lg:mb-6 2xl:mb-4 shadow-sm'>
              <Sparkles className='w-4 h-4 text-blue-600' />
              <span className='text-sm font-semibold text-slate-700 uppercase tracking-wide'>
                Let's Connect
              </span>
            </div>

            <h2 className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-slate-900 mb-4 lg:mb-6 2xl:mb-4'>
              LET&apos;S BUILD
              <br />
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600'>
                TOGETHER
              </span>
            </h2>

            {/* Subtitle */}
            <p className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-slate-600 max-w-3xl mx-auto'>
              <span className='block md:hidden'>
                Have a project in mind? Let&apos;s create something
                extraordinary.
              </span>
              <span className='hidden md:block'>
                Have a project in mind? We&apos;d love to hear about it. Reach
                out and let&apos;s create something extraordinary.
              </span>
            </p>
          </motion.div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-8 items-start mb-12 sm:mb-16 lg:mb-20 2xl:mb-12'>
            {/* Left Column: Contact Information */}
            <div className='space-y-6 lg:space-y-8 2xl:space-y-6'>
              <motion.div variants={itemVariants}>
                <h3 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4 lg:mb-6 2xl:mb-4'>
                  Contact Information
                </h3>

                <div className='space-y-4 lg:space-y-6 2xl:space-y-4'>
                  {/* Map Item */}
                  <motion.div
                    className='group flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-white/80 hover:bg-white/90 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300'
                    whileHover={shouldReduceMotion ? {} : { x: 5 }}
                  >
                    <div className='p-3 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 shadow-md'>
                      <MapPin className='w-5 h-5 text-white' />
                    </div>
                    <span className='text-slate-700 font-medium group-hover:text-blue-600 transition-colors'>
                      N07-E Kandy Katugasthota
                    </span>
                  </motion.div>

                  {/* Mail Item */}
                  <motion.div
                    className='group flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-white/80 hover:bg-white/90 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300'
                    whileHover={shouldReduceMotion ? {} : { x: 5 }}
                  >
                    <div className='p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 shadow-md'>
                      <Mail className='w-5 h-5 text-white' />
                    </div>
                    <span className='text-slate-700 font-medium group-hover:text-indigo-600 transition-colors'>
                      hello@honodevstudio.com
                    </span>
                  </motion.div>

                  {/* Phone Item */}
                  <motion.div
                    className='group flex items-center gap-4 p-4 rounded-2xl bg-white/60 border border-white/80 hover:bg-white/90 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300'
                    whileHover={shouldReduceMotion ? {} : { x: 5 }}
                  >
                    <div className='p-3 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-md'>
                      <Phone className='w-5 h-5 text-white' />
                    </div>
                    <span className='text-slate-700 font-medium group-hover:text-violet-600 transition-colors'>
                      +94763923943
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div variants={itemVariants}>
                <h3 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4 lg:mb-6 2xl:mb-4'>
                  Follow Us
                </h3>
                <div className='flex gap-3 lg:gap-4 2xl:gap-3'>
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      whileHover={
                        shouldReduceMotion ? {} : { scale: 1.1, y: -2 }
                      }
                      whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                      className={`p-3 rounded-xl bg-gradient-to-br ${link.color} shadow-md hover:shadow-lg transition-all duration-300`}
                      aria-label={link.name}
                    >
                      <link.icon className='h-6 w-6 text-white' />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column: CTA Card */}
            <motion.div
              variants={itemVariants}
              className='text-center lg:text-left h-full'
            >
              <div className='relative group h-full'>
                {/* Glow */}
                <div className='absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-400/20 to-violet-400/20 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl' />

                <div className='relative h-full p-8 lg:p-10 rounded-[2rem] bg-white/60 backdrop-blur-xl border border-white/80 shadow-xl shadow-blue-900/5 flex flex-col justify-center'>
                  <h3 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>
                    Ready to Start Your Project?
                  </h3>

                  <p className='text-slate-600 mb-8 leading-relaxed'>
                    <span className='block md:hidden'>
                      Get in touch today and let&apos;s create something amazing
                      together.
                    </span>
                    <span className='hidden md:block'>
                      We&apos;re here to help bring your ideas to life. Get in
                      touch with us today and let&apos;s discuss how we can work
                      together.
                    </span>
                  </p>

                  <div className='flex flex-col sm:flex-row gap-4'>
                    {/* Primary Button */}
                    <motion.a
                      href='/contact'
                      className='group/btn inline-flex items-center justify-center gap-2 bg-slate-900 text-white font-bold px-6 py-4 rounded-xl transition-all duration-300 hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/10 w-full sm:w-auto'
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    >
                      Get in Touch
                      <ArrowRight className='w-5 h-5 transition-transform group-hover/btn:translate-x-1' />
                    </motion.a>

                    {/* Secondary Button */}
                    <motion.a
                      href='/#work'
                      className='group/btn inline-flex items-center justify-center gap-2 bg-white text-slate-900 font-bold px-6 py-4 rounded-xl border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 w-full sm:w-auto'
                      whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                    >
                      View Work
                      <ArrowRight className='w-5 h-5 transition-transform group-hover/btn:translate-x-1' />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            variants={itemVariants}
            className='pt-8 border-t border-slate-200/60 text-center'
          >
            <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mb-4'>
              <a
                href='/privacy'
                className='text-slate-500 hover:text-blue-600 transition-colors duration-300 font-medium'
              >
                Privacy Policy
              </a>
              <span className='hidden sm:inline text-slate-300'>•</span>
              <a
                href='/contact'
                className='text-slate-500 hover:text-blue-600 transition-colors duration-300 font-medium'
              >
                Contact Us
              </a>
            </div>
            <p className='text-slate-400 text-sm'>
              © {currentYear} Hono Dev Studio. All Rights Reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <BackToTopButton />
    </footer>
  );
}
