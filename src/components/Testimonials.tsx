// "use client";

// import React, { useState, useEffect, useCallback, useRef } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   useReducedMotion,
//   Variants,
// } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react";

// // --- Data ---
// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Chen",
//     role: "CEO, TechFlow Solutions",
//     company: "TechFlow Solutions",
//     image: "/api/placeholder/80/80",
//     rating: 5,
//     quote:
//       "Working with this team transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.",
//   },
//   {
//     id: 2,
//     name: "Marcus Rodriguez",
//     role: "Founder, GreenSpace",
//     company: "GreenSpace",
//     image: "/api/placeholder/80/80",
//     rating: 5,
//     quote:
//       "The level of professionalism and creativity they brought to our project was outstanding. Our conversion rates increased by 300% after launch.",
//   },
//   {
//     id: 3,
//     name: "Emily Watson",
//     role: "Marketing Director, Nexus Corp",
//     company: "Nexus Corp",
//     image: "/api/placeholder/80/80",
//     rating: 5,
//     quote:
//       "From concept to execution, they delivered beyond what we imagined. The user experience they created is simply phenomenal.",
//   },
//   {
//     id: 4,
//     name: "David Kim",
//     role: "CTO, InnovateLab",
//     company: "InnovateLab",
//     image: "/api/placeholder/80/80",
//     rating: 5,
//     quote:
//       "Their technical expertise combined with creative vision resulted in a product that our users absolutely love. Highly recommended!",
//   },
//   {
//     id: 5,
//     name: "Lisa Thompson",
//     role: "Product Manager, StartupX",
//     company: "StartupX",
//     image: "/api/placeholder/80/80",
//     rating: 5,
//     quote:
//       "The collaboration was seamless, and the results speak for themselves. They truly understand what it takes to build exceptional digital experiences.",
//   },
// ];

// // --- Components ---
// const TestimonialCard = ({
//   testimonial,
//   isActive,
// }: {
//   testimonial: (typeof testimonials)[0];
//   isActive: boolean;
// }) => {
//   const shouldReduceMotion = useReducedMotion();

//   return (
//     <motion.div
//       layout
//       className={`
//         relative group cursor-pointer transition-all duration-500
//         ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"}
//       `}
//       whileHover={shouldReduceMotion ? {} : { scale: isActive ? 1.02 : 0.98 }}
//       transition={{ type: "spring", stiffness: 300, damping: 30 }}
//     >
//       <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110' />
//       <div className='relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 p-6 lg:p-8'>
//         <motion.div
//           className='absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#E7FF1A] to-violet-400 rounded-full flex items-center justify-center shadow-lg'
//           initial={shouldReduceMotion ? {} : { scale: 0, rotate: -180 }}
//           animate={
//             shouldReduceMotion
//               ? {}
//               : isActive
//                 ? { scale: 1, rotate: 0 }
//                 : { scale: 0.8, rotate: -90 }
//           }
//           transition={{ type: "spring", stiffness: 200, damping: 20 }}
//         >
//           <Quote className='w-4 h-4 text-[#111316]' />
//         </motion.div>
//         <motion.div
//           className='flex gap-1 mb-4 lg:mb-6'
//           initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
//           animate={
//             shouldReduceMotion
//               ? {}
//               : isActive
//                 ? { opacity: 1, y: 0 }
//                 : { opacity: 0.7, y: 5 }
//           }
//           transition={{ delay: 0.1, duration: 0.5 }}
//         >
//           {[...Array(testimonial.rating)].map((_, i) => (
//             <motion.div
//               key={i}
//               initial={shouldReduceMotion ? {} : { scale: 0, rotate: -180 }}
//               animate={
//                 shouldReduceMotion
//                   ? {}
//                   : isActive
//                     ? { scale: 1, rotate: 0 }
//                     : { scale: 0.8, rotate: -90 }
//               }
//               transition={{
//                 delay: 0.2 + i * 0.1,
//                 type: "spring",
//                 stiffness: 200,
//                 damping: 20,
//               }}
//             >
//               <Star className='w-5 h-5 fill-[#E7FF1A] text-[#E7FF1A]' />
//             </motion.div>
//           ))}
//         </motion.div>
//         <motion.blockquote
//           className='text-white/90 leading-relaxed mb-6 lg:mb-8 italic'
//           style={{
//             fontSize: "clamp(0.95rem, 2.2vw + 0.3rem, 1.15rem)",
//             lineHeight: "1.6",
//           }}
//           initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
//           animate={
//             shouldReduceMotion
//               ? {}
//               : isActive
//                 ? { opacity: 1, y: 0 }
//                 : { opacity: 0.8, y: 10 }
//           }
//           transition={{ delay: 0.3, duration: 0.6 }}
//         >
//           &ldquo;{testimonial.quote}&rdquo;
//         </motion.blockquote>
//         <motion.div
//           className='flex items-center gap-4'
//           initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
//           animate={
//             shouldReduceMotion
//               ? {}
//               : isActive
//                 ? { opacity: 1, x: 0 }
//                 : { opacity: 0.7, x: -10 }
//           }
//           transition={{ delay: 0.4, duration: 0.6 }}
//         >
//           <motion.div
//             className='relative w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-[#E7FF1A]/50 transition-colors duration-300'
//             whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
//             transition={{ type: "spring", stiffness: 400, damping: 25 }}
//           >
//             <Image
//               src={testimonial.image}
//               alt={testimonial.name}
//               fill
//               className='object-cover'
//               sizes='(max-width: 768px) 48px, (max-width: 1024px) 64px, 64px'
//             />
//           </motion.div>
//           <div>
//             <h4
//               className='text-white font-bold group-hover:text-[#E7FF1A] transition-colors duration-300'
//               style={{
//                 fontSize: "clamp(1.05rem, 2.5vw + 0.2rem, 1.25rem)",
//               }}
//             >
//               {testimonial.name}
//             </h4>
//             <p
//               className='text-white/70'
//               style={{
//                 fontSize: "clamp(0.85rem, 2vw + 0.2rem, 1rem)",
//               }}
//             >
//               {testimonial.role}
//             </p>
//             <p
//               className='text-white/50'
//               style={{
//                 fontSize: "clamp(0.75rem, 1.8vw + 0.1rem, 0.9rem)",
//               }}
//             >
//               {testimonial.company}
//             </p>
//           </div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export function Testimonials() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const shouldReduceMotion = useReducedMotion();
//   const [ref, inView] = useInView({
//     threshold: 0.1,
//     triggerOnce: true,
//     rootMargin: "-50px 0px",
//   });

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
//       if (shouldReduceMotion) return;
//       if (!containerRef.current) return;
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

//   const nextTestimonial = useCallback(() => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length);
//   }, []);

//   const prevTestimonial = useCallback(() => {
//     setCurrentIndex(
//       (prev) => (prev - 1 + testimonials.length) % testimonials.length
//     );
//   }, []);

//   const goToTestimonial = useCallback((index: number) => {
//     setCurrentIndex(index);
//     setIsAutoPlaying(false);
//   }, []);

//   useEffect(() => {
//     if (!isAutoPlaying || !inView) return;
//     const interval = setInterval(nextTestimonial, 5000);
//     return () => clearInterval(interval);
//   }, [isAutoPlaying, inView, nextTestimonial]);

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: shouldReduceMotion ? 0 : 0.2,
//         delayChildren: shouldReduceMotion ? 0 : 0.3,
//         duration: 0.8,
//       },
//     },
//   };

//   const itemVariants: Variants = {
//     hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 30, opacity: 0 },
//     visible: shouldReduceMotion
//       ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
//       : {
//           y: 0,
//           opacity: 1,
//           transition: {
//             type: "spring",
//             stiffness: 100,
//             damping: 15,
//             mass: 0.8,
//             duration: 0.8,
//           },
//         },
//   };

//   return (
//     <section
//       id='testimonials'
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
//           {/* Image Section */}
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
//                   src='/images/testimonials.svg'
//                   alt='Client Testimonials'
//                   fill
//                   className='object-contain drop-shadow-2xl'
//                   priority
//                   sizes='(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 224px, 256px'
//                 />
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Header Section with updated text sizing */}
//           <motion.div
//             variants={itemVariants}
//             className='text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16'
//           >
//             {/* Badge with updated sizing */}
//             <motion.div
//               variants={itemVariants}
//               className='inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full'
//               style={{
//                 gap: "clamp(0.4rem,1.5vw,0.75rem)",
//                 padding:
//                   "clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.75rem)",
//                 marginBottom: "clamp(1rem,3vh,2rem)",
//               }}
//               whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
//               transition={{ type: "spring", stiffness: 400, damping: 25 }}
//             >
//               <motion.div
//                 animate={shouldReduceMotion ? {} : { rotate: [0, 10, -10, 0] }}
//                 transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
//               >
//                 <Sparkles
//                   className='text-[#E7FF1A]'
//                   style={{
//                     width: "clamp(14px, 3.5vw, 20px)",
//                     height: "clamp(14px, 3.5vw, 20px)",
//                   }}
//                 />
//               </motion.div>
//               <span
//                 className='font-medium text-white/90'
//                 style={{
//                   fontSize: "clamp(0.8rem, 2.2vw, 1.1rem)",
//                 }}
//               >
//                 Client Stories
//               </span>
//             </motion.div>

//             {/* Title with updated sizing */}
//             <h2
//               className='font-bold text-white px-2'
//               style={{
//                 fontSize: "clamp(2rem, 8vw + 0.5rem, min(3.5rem, 10vw))",
//                 lineHeight: "0.9",
//                 letterSpacing: "-0.02em",
//                 marginBottom: "clamp(1rem,3vh,2rem)",
//               }}
//             >
//               <span className='block sm:inline'>WHAT CLIENTS</span>{" "}
//               <span className='block sm:inline bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
//                 SAY ABOUT US
//               </span>
//             </h2>

//             {/* Subtitle with updated sizing */}
//             <p
//               className='text-white/80 max-w-4xl mx-auto px-2'
//               style={{
//                 fontSize: "clamp(1rem, 2.8vw + 0.4rem, 1.3rem)",
//                 lineHeight: "1.6",
//               }}
//             >
//               Real stories from clients who have transformed their businesses
//               and achieved remarkable success with our solutions.
//             </p>
//           </motion.div>

//           <motion.div variants={itemVariants} className='relative px-2'>
//             <div className='relative mb-6 lg:mb-8'>
//               <AnimatePresence mode='wait'>
//                 <motion.div
//                   key={currentIndex}
//                   initial={
//                     shouldReduceMotion
//                       ? { opacity: 0 }
//                       : { opacity: 0, x: 50, scale: 0.9 }
//                   }
//                   animate={
//                     shouldReduceMotion
//                       ? { opacity: 1 }
//                       : { opacity: 1, x: 0, scale: 1 }
//                   }
//                   exit={
//                     shouldReduceMotion
//                       ? { opacity: 0 }
//                       : { opacity: 0, x: -50, scale: 0.9 }
//                   }
//                   transition={{
//                     duration: shouldReduceMotion ? 0.3 : 0.5,
//                     type: shouldReduceMotion ? "tween" : "spring",
//                     stiffness: 100,
//                     damping: 20,
//                   }}
//                   className='max-w-4xl mx-auto'
//                 >
//                   <TestimonialCard
//                     testimonial={testimonials[currentIndex]}
//                     isActive={true}
//                   />
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//             <div className='flex items-center justify-center gap-4 lg:gap-6'>
//               <motion.button
//                 onClick={() => {
//                   prevTestimonial();
//                   setIsAutoPlaying(false);
//                 }}
//                 className='group p-3 lg:p-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300'
//                 whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
//                 whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
//                 aria-label='Previous testimonial'
//               >
//                 <ChevronLeft className='w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:text-[#E7FF1A] transition-colors' />
//               </motion.button>
//               <div className='flex gap-2 lg:gap-3'>
//                 {testimonials.map((_, index) => (
//                   <motion.button
//                     key={index}
//                     onClick={() => goToTestimonial(index)}
//                     className={`relative w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
//                       index === currentIndex
//                         ? "bg-[#E7FF1A]"
//                         : "bg-white/30 hover:bg-white/50"
//                     }`}
//                     whileHover={shouldReduceMotion ? {} : { scale: 1.2 }}
//                     whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
//                     transition={{ type: "spring", stiffness: 400, damping: 25 }}
//                     aria-label={`Go to testimonial ${index + 1}`}
//                   >
//                     {index === currentIndex && !shouldReduceMotion && (
//                       <motion.div
//                         className='absolute inset-0 rounded-full border-2 border-[#E7FF1A]'
//                         initial={{ scale: 0, opacity: 0 }}
//                         animate={{ scale: 1.5, opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     )}
//                   </motion.button>
//                 ))}
//               </div>
//               <motion.button
//                 onClick={() => {
//                   nextTestimonial();
//                   setIsAutoPlaying(false);
//                 }}
//                 className='group p-3 lg:p-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300'
//                 whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
//                 whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
//                 aria-label='Next testimonial'
//               >
//                 <ChevronRight className='w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:text-[#E7FF1A] transition-colors' />
//               </motion.button>
//             </div>
//             <motion.div
//               className='flex items-center justify-center gap-2 mt-4 lg:mt-6'
//               variants={itemVariants}
//             >
//               <motion.button
//                 onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//                 className={`px-3 py-1 rounded-full border transition-all duration-300 ${
//                   isAutoPlaying
//                     ? "text-[#E7FF1A] border-[#E7FF1A]/30 bg-[#E7FF1A]/10"
//                     : "text-white/60 border-white/20 hover:text-white/80"
//                 }`}
//                 style={{
//                   fontSize: "clamp(0.75rem, 1.8vw + 0.1rem, 0.9rem)",
//                 }}
//                 whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
//                 whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
//               >
//                 {isAutoPlaying ? "Auto-playing" : "Paused"}
//               </motion.button>
//             </motion.div>
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
  useReducedMotion,
  Variants,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles } from "lucide-react";

// --- Updated Data with proper image paths ---
const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO, TechFlow Solutions",
    company: "TechFlow Solutions",
    image: "/images/testimonials/sarah-chen.png", // Updated path
    rating: 5,
    quote:
      "Working with this team transformed our digital presence completely. Their attention to detail and innovative approach exceeded our expectations.",
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Founder, GreenSpace",
    company: "GreenSpace",
    image: "/images/testimonials/marcus-rodriguez.png", // Updated path
    rating: 5,
    quote:
      "The level of professionalism and creativity they brought to our project was outstanding. Our conversion rates increased by 300% after launch.",
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Marketing Director, Nexus Corp",
    company: "Nexus Corp",
    image: "/images/testimonials/emily-watson.png", // Updated path
    rating: 5,
    quote:
      "From concept to execution, they delivered beyond what we imagined. The user experience they created is simply phenomenal.",
  },
  {
    id: 4,
    name: "David Kim",
    role: "CTO, InnovateLab",
    company: "InnovateLab",
    image: "/images/testimonials/david-kim.png", // Updated path
    rating: 5,
    quote:
      "Their technical expertise combined with creative vision resulted in a product that our users absolutely love. Highly recommended!",
  },
  {
    id: 5,
    name: "Lis Thompson",
    role: "Product Manager, StartupX",
    company: "StartupX",
    image: "/images/testimonials/lisa-thompson.png", // Updated path
    rating: 5,
    quote:
      "The collaboration was seamless, and the results speak for themselves. They truly understand what it takes to build exceptional digital experiences.",
  },
];

// --- Components ---
const TestimonialCard = ({
  testimonial,
  isActive,
}: {
  testimonial: (typeof testimonials)[0];
  isActive: boolean;
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      layout
      className={`
        relative group cursor-pointer transition-all duration-500
        ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-70"}
      `}
      whileHover={shouldReduceMotion ? {} : { scale: isActive ? 1.02 : 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110' />
      <div className='relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 p-6 lg:p-8'>
        <motion.div
          className='absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-[#E7FF1A] to-violet-400 rounded-full flex items-center justify-center shadow-lg'
          initial={shouldReduceMotion ? {} : { scale: 0, rotate: -180 }}
          animate={
            shouldReduceMotion
              ? {}
              : isActive
                ? { scale: 1, rotate: 0 }
                : { scale: 0.8, rotate: -90 }
          }
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <Quote className='w-4 h-4 text-[#111316]' />
        </motion.div>
        <motion.div
          className='flex gap-1 mb-4 lg:mb-6'
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
          animate={
            shouldReduceMotion
              ? {}
              : isActive
                ? { opacity: 1, y: 0 }
                : { opacity: 0.7, y: 5 }
          }
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          {[...Array(testimonial.rating)].map((_, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? {} : { scale: 0, rotate: -180 }}
              animate={
                shouldReduceMotion
                  ? {}
                  : isActive
                    ? { scale: 1, rotate: 0 }
                    : { scale: 0.8, rotate: -90 }
              }
              transition={{
                delay: 0.2 + i * 0.1,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <Star className='w-5 h-5 fill-[#E7FF1A] text-[#E7FF1A]' />
            </motion.div>
          ))}
        </motion.div>
        <motion.blockquote
          className='text-white/90 leading-relaxed mb-6 lg:mb-8 italic'
          style={{
            fontSize: "clamp(0.95rem, 2.2vw + 0.3rem, 1.15rem)",
            lineHeight: "1.6",
          }}
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={
            shouldReduceMotion
              ? {}
              : isActive
                ? { opacity: 1, y: 0 }
                : { opacity: 0.8, y: 10 }
          }
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          &ldquo;{testimonial.quote}&rdquo;
        </motion.blockquote>
        <motion.div
          className='flex items-center gap-4'
          initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
          animate={
            shouldReduceMotion
              ? {}
              : isActive
                ? { opacity: 1, x: 0 }
                : { opacity: 0.7, x: -10 }
          }
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div
            className='relative w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-[#E7FF1A]/50 transition-colors duration-300'
            whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Image
              src={testimonial.image}
              alt={`${testimonial.name} - ${testimonial.company}`}
              fill
              className='object-cover'
              sizes='(max-width: 768px) 48px, (max-width: 1024px) 64px, 64px'
              onError={(e) => {
                // Fallback to a default avatar if image fails to load
                const target = e.target as HTMLImageElement;
                target.src = '/images/testimonials/default-avatar.jpg';
              }}
            />
          </motion.div>
          <div>
            <h4
              className='text-white font-bold group-hover:text-[#E7FF1A] transition-colors duration-300'
              style={{
                fontSize: "clamp(1.05rem, 2.5vw + 0.2rem, 1.25rem)",
              }}
            >
              {testimonial.name}
            </h4>
            <p
              className='text-white/70'
              style={{
                fontSize: "clamp(0.85rem, 2vw + 0.2rem, 1rem)",
              }}
            >
              {testimonial.role}
            </p>
            <p
              className='text-white/50'
              style={{
                fontSize: "clamp(0.75rem, 1.8vw + 0.1rem, 0.9rem)",
              }}
            >
              {testimonial.company}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

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
      if (!containerRef.current) return;
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

  const nextTestimonial = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  const goToTestimonial = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying || !inView) return;
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, inView, nextTestimonial]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 30, opacity: 0 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
      : {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.8,
            duration: 0.8,
          },
        },
  };

  return (
    <section
      id='testimonials'
      ref={ref}
      className='relative w-full bg-[#111316] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden'
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
          {/* Image Section */}
          <motion.div
            variants={itemVariants}
            className='flex justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6 -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12'
          >
            <motion.div
              className='relative group'
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-125' />
              <div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64'>
                <Image
                  src='/images/testimonials.svg'
                  alt='Client Testimonials'
                  fill
                  className='object-contain drop-shadow-2xl'
                  priority
                  sizes='(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 224px, 256px'
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Header Section with updated text sizing */}
          <motion.div
            variants={itemVariants}
            className='text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16'
          >
            {/* Badge with updated sizing */}
            <motion.div
              variants={itemVariants}
              className='inline-flex items-center bg-white/10 backdrop-blur-xl border border-white/20 rounded-full'
              style={{
                gap: "clamp(0.4rem,1.5vw,0.75rem)",
                padding:
                  "clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.75rem)",
                marginBottom: "clamp(1rem,3vh,2rem)",
              }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.div
                animate={shouldReduceMotion ? {} : { rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles
                  className='text-[#E7FF1A]'
                  style={{
                    width: "clamp(14px, 3.5vw, 20px)",
                    height: "clamp(14px, 3.5vw, 20px)",
                  }}
                />
              </motion.div>
              <span
                className='font-medium text-white/90'
                style={{
                  fontSize: "clamp(0.8rem, 2.2vw, 1.1rem)",
                }}
              >
                Client Stories
              </span>
            </motion.div>

            {/* Title with updated sizing */}
            <h2
              className='font-bold text-white px-2'
              style={{
                fontSize: "clamp(2rem, 8vw + 0.5rem, min(3.5rem, 10vw))",
                lineHeight: "0.9",
                letterSpacing: "-0.02em",
                marginBottom: "clamp(1rem,3vh,2rem)",
              }}
            >
              <span className='block sm:inline'>WHAT CLIENTS</span>{" "}
              <span className='block sm:inline bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                SAY ABOUT US
              </span>
            </h2>

            {/* Subtitle with updated sizing */}
            <p
              className='text-white/80 max-w-4xl mx-auto px-2'
              style={{
                fontSize: "clamp(1rem, 2.8vw + 0.4rem, 1.3rem)",
                lineHeight: "1.6",
              }}
            >
              Real stories from clients who have transformed their businesses
              and achieved remarkable success with our solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className='relative px-2'>
            <div className='relative mb-6 lg:mb-8'>
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentIndex}
                  initial={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: 50, scale: 0.9 }
                  }
                  animate={
                    shouldReduceMotion
                      ? { opacity: 1 }
                      : { opacity: 1, x: 0, scale: 1 }
                  }
                  exit={
                    shouldReduceMotion
                      ? { opacity: 0 }
                      : { opacity: 0, x: -50, scale: 0.9 }
                  }
                  transition={{
                    duration: shouldReduceMotion ? 0.3 : 0.5,
                    type: shouldReduceMotion ? "tween" : "spring",
                    stiffness: 100,
                    damping: 20,
                  }}
                  className='max-w-4xl mx-auto'
                >
                  <TestimonialCard
                    testimonial={testimonials[currentIndex]}
                    isActive={true}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className='flex items-center justify-center gap-4 lg:gap-6'>
              <motion.button
                onClick={() => {
                  prevTestimonial();
                  setIsAutoPlaying(false);
                }}
                className='group p-3 lg:p-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300'
                whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                aria-label='Previous testimonial'
              >
                <ChevronLeft className='w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:text-[#E7FF1A] transition-colors' />
              </motion.button>
              <div className='flex gap-2 lg:gap-3'>
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`relative w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-[#E7FF1A]"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    whileHover={shouldReduceMotion ? {} : { scale: 1.2 }}
                    whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    {index === currentIndex && !shouldReduceMotion && (
                      <motion.div
                        className='absolute inset-0 rounded-full border-2 border-[#E7FF1A]'
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1.5, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
              <motion.button
                onClick={() => {
                  nextTestimonial();
                  setIsAutoPlaying(false);
                }}
                className='group p-3 lg:p-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl hover:bg-white/20 hover:border-white/30 transition-all duration-300'
                whileHover={shouldReduceMotion ? {} : { scale: 1.1, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                aria-label='Next testimonial'
              >
                <ChevronRight className='w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:text-[#E7FF1A] transition-colors' />
              </motion.button>
            </div>
            <motion.div
              className='flex items-center justify-center gap-2 mt-4 lg:mt-6'
              variants={itemVariants}
            >
              <motion.button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className={`px-3 py-1 rounded-full border transition-all duration-300 ${
                  isAutoPlaying
                    ? "text-[#E7FF1A] border-[#E7FF1A]/30 bg-[#E7FF1A]/10"
                    : "text-white/60 border-white/20 hover:text-white/80"
                }`}
                style={{
                  fontSize: "clamp(0.75rem, 1.8vw + 0.1rem, 0.9rem)",
                }}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
              >
                {isAutoPlaying ? "Auto-playing" : "Paused"}
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}