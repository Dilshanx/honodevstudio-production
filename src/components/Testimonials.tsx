// "use client";

// import React, { useState, useRef, useCallback } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useMotionValue,
//   useSpring,
//   useTransform,
// } from "framer-motion";
// import { Quote, X, Sparkles, ArrowRight } from "lucide-react";

// // --- Data ---
// const testimonialsData = [
//   {
//     id: 1,
//     name: "Sarah Jennings",
//     title: "CEO, Innovatech",
//     avatar: "/api/placeholder/64/64",
//     quote:
//       "They transformed our vision into a stunning reality. Their expertise and dedication are unmatched.",
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     title: "CTO, NextGen Corp",
//     avatar: "/api/placeholder/64/64",
//     quote:
//       "The team is incredibly talented and responsive. They delivered a complex AI platform ahead of schedule.",
//   },
//   {
//     id: 3,
//     name: "Emily Rodriguez",
//     title: "Marketing Director, Stellar",
//     avatar: "/api/placeholder/64/64",
//     quote:
//       "Working with them felt like a true partnership. Their creative UI/UX designs have significantly improved our conversion rates.",
//   },
//   {
//     id: 4,
//     name: "David Lee",
//     title: "Head of Engineering, Quantum",
//     avatar: "/api/placeholder/64/64",
//     quote:
//       "The performance optimizations they implemented resulted in a 40% reduction in our page load times.",
//   },
//   {
//     id: 5,
//     name: "Jessica Williams",
//     title: "Founder, Artifex",
//     avatar: "/api/placeholder/64/64",
//     quote:
//       "From concept to deployment, their process was transparent and efficient. A truly world-class development studio.",
//   },
// ];

// // --- Orb Component ---
// const Orb = ({
//   testimonial,
//   onClick,
//   index,
// }: {
//   testimonial: (typeof testimonialsData)[0];
//   onClick: (testimonial: (typeof testimonialsData)[0]) => void;
//   index: number;
// }) => {
//   const positions = [
//     { top: "10%", left: "20%" },
//     { top: "30%", left: "70%" },
//     { top: "60%", left: "10%" },
//     { top: "80%", left: "80%" },
//     { top: "50%", left: "45%" },
//   ];
//   const size = index === 4 ? "120px" : "80px";
//   const gradients = [
//     "from-[#E7FF1A] to-violet-400",
//     "from-violet-400 to-cyan-400",
//     "from-cyan-400 to-pink-400",
//     "from-pink-400 to-[#E7FF1A]",
//     "from-[#E7FF1A] via-violet-400 to-cyan-400",
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0 }}
//       whileInView={{ opacity: 1, scale: 1 }}
//       transition={{
//         type: "spring",
//         damping: 15,
//         stiffness: 100,
//         delay: index * 0.1,
//       }}
//       viewport={{ once: true, amount: 0.5 }}
//       whileHover={{ scale: 1.15, zIndex: 20 }}
//       onClick={() => onClick(testimonial)}
//       className='absolute cursor-pointer rounded-full shadow-2xl overflow-hidden group'
//       style={{ ...positions[index], width: size, height: size }}
//     >
//       {/* Glow effect */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-r ${gradients[index]} opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-lg scale-110`}
//       />

//       <div
//         className={`relative w-full h-full bg-gradient-to-br ${gradients[index]} p-1`}
//       >
//         <div className='w-full h-full rounded-full bg-[#111316]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-[#111316]/60 transition-colors duration-300'>
//           <div className='text-white font-bold text-lg group-hover:text-[#E7FF1A] transition-colors'>
//             {testimonial.name
//               .split(" ")
//               .map((n) => n[0])
//               .join("")}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // --- Focused Card Component ---
// const FocusedCard = ({
//   testimonial,
//   onClose,
// }: {
//   testimonial: (typeof testimonialsData)[0] | null;
//   onClose: () => void;
// }) => {
//   if (!testimonial) return null;
//   return (
//     <motion.div
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.8 }}
//       transition={{ type: "spring", damping: 20, stiffness: 150 }}
//       className='fixed inset-0 z-50 flex items-center justify-center p-4'
//     >
//       <div
//         className='absolute inset-0 bg-black/80 backdrop-blur-sm'
//         onClick={onClose}
//       />
//       <div className='relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#111316]/95 p-6 lg:p-8 2xl:p-6 shadow-2xl backdrop-blur-xl'>
//         <button
//           onClick={onClose}
//           className='absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 hover:text-[#E7FF1A]'
//         >
//           <X size={20} />
//         </button>
//         <Quote
//           className='absolute -top-8 -left-8 h-24 w-24 text-[#E7FF1A]/20'
//           style={{ filter: "drop-shadow(0 0 10px rgba(231, 255, 26, 0.3))" }}
//         />
//         <p className='relative z-10 mb-4 lg:mb-6 2xl:mb-4 text-xl italic leading-relaxed text-white/90'>
//           "{testimonial.quote}"
//         </p>
//         <div className='flex items-center gap-4'>
//           <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#E7FF1A] to-violet-400 border-2 border-white/20 flex items-center justify-center'>
//             <div className='text-[#111316] font-bold'>
//               {testimonial.name
//                 .split(" ")
//                 .map((n) => n[0])
//                 .join("")}
//             </div>
//           </div>
//           <div>
//             <h4 className='text-xl font-bold text-white'>{testimonial.name}</h4>
//             <p className='text-[#E7FF1A]'>{testimonial.title}</p>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // --- Main Testimonials Section Component ---
// export function Testimonials() {
//   const [selectedTestimonial, setSelectedTestimonial] = useState<
//     (typeof testimonialsData)[0] | null
//   >(null);
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
//   const rotateX = useSpring(
//     useTransform(mouseY, [-0.5, 0.5], [10, -10]),
//     springConfig
//   );
//   const rotateY = useSpring(
//     useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
//     springConfig
//   );

//   const handleMouseMove = useCallback(
//     (e: React.MouseEvent) => {
//       if (!containerRef.current) return;
//       const { left, top, width, height } =
//         containerRef.current.getBoundingClientRect();
//       mouseX.set((e.clientX - left) / width - 0.5);
//       mouseY.set((e.clientY - top) / height - 0.5);
//     },
//     [mouseX, mouseY]
//   );

//   const handleMouseLeave = useCallback(() => {
//     mouseX.set(0);
//     mouseY.set(0);
//   }, [mouseX, mouseY]);

//   // Animation variants matching other sections
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//       },
//     },
//   };

//   return (
//     <section
//       id='testimonials'
//       className='relative w-full bg-[#111316] py-12 sm:py-16 lg:py-20 2xl:py-12 overflow-hidden'
//     >
//       {/* Background with gradient overlay similar to other sections */}
//       <div className='absolute inset-0 z-0'>
//         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30' />
//         <motion.div
//           className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
//           style={{ x: dx, y: dy }}
//         />
//         <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
//       </div>

//       <div className='container mx-auto px-4 md:px-8 lg:px-12 relative z-10'>
//         <motion.div
//           className='max-w-6xl mx-auto'
//           variants={containerVariants}
//           initial='hidden'
//           whileInView='visible'
//           viewport={{ once: true, amount: 0.3 }}
//         >
//           {/* Header Section */}
//           <motion.div
//             variants={itemVariants}
//             className='text-center mb-12 sm:mb-16 2xl:mb-12'
//           >
//             {/* Badge similar to other sections */}
//             <motion.div
//               variants={itemVariants}
//               className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-4 lg:mb-6 2xl:mb-4'
//             >
//               <Sparkles className='w-4 h-4 text-[#E7FF1A]' />
//               <span className='text-sm font-medium text-white/90'>
//                 Client Testimonials
//               </span>
//             </motion.div>

//             <h2 className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white mb-4 lg:mb-6 2xl:mb-4'>
//               TRUSTED BY
//               <br />
//               <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
//                 INNOVATORS
//               </span>
//             </h2>

//             <p className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-white/80 max-w-3xl mx-auto mb-8 sm:mb-10 2xl:mb-8'>
//               Don&apos;t just take our word for it—hear from the businesses
//               we&apos;ve helped transform with cutting-edge solutions.
//             </p>

//             {/* Stats Section */}
//             <div className='flex flex-wrap justify-center gap-6 md:gap-8 2xl:gap-6'>
//               {[
//                 { number: "50+", label: "Happy Clients" },
//                 { number: "5★", label: "Average Rating" },
//                 { number: "100%", label: "Satisfaction Rate" },
//               ].map((stat, index) => (
//                 <motion.div
//                   key={stat.label}
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

//           {/* Interactive Testimonials */}
//           <motion.div
//             ref={containerRef}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//             style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
//             className='relative h-[400px] w-full max-w-4xl mx-auto mb-12 lg:mb-20 2xl:mb-12'
//             variants={itemVariants}
//           >
//             {testimonialsData.map((testimonial, index) => (
//               <Orb
//                 key={testimonial.id}
//                 testimonial={testimonial}
//                 onClick={setSelectedTestimonial}
//                 index={index}
//               />
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>

//       <AnimatePresence>
//         {selectedTestimonial && (
//           <FocusedCard
//             testimonial={selectedTestimonial}
//             onClose={() => setSelectedTestimonial(null)}
//           />
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion, // Import useReducedMotion
  Variants, // Import Variants
  Transition, // Import Transition
} from "framer-motion";
import { Quote, X, Sparkles } from "lucide-react";

// --- Data ---
const testimonialsData = [
  {
    id: 1,
    name: "Sarah Jennings",
    title: "CEO, Innovatech",
    avatar: "/api/placeholder/64/64", // Placeholder image URL
    quote:
      "They transformed our vision into a stunning reality. Their expertise and dedication are unmatched.",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CTO, NextGen Corp",
    avatar: "/api/placeholder/64/64", // Placeholder image URL
    quote:
      "The team is incredibly talented and responsive. They delivered a complex AI platform ahead of schedule.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Marketing Director, Stellar",
    avatar: "/api/placeholder/64/64", // Placeholder image URL
    quote:
      "Working with them felt like a true partnership. Their creative UI/UX designs have significantly improved our conversion rates.",
  },
  {
    id: 4,
    name: "David Lee",
    title: "Head of Engineering, Quantum",
    avatar: "/api/placeholder/64/64", // Placeholder image URL
    quote:
      "The performance optimizations they implemented resulted in a 40% reduction in our page load times.",
  },
  {
    id: 5,
    name: "Jessica Williams",
    title: "Founder, Artifex",
    avatar: "/api/placeholder/64/64", // Placeholder image URL
    quote:
      "From concept to deployment, their process was transparent and efficient. A truly world-class development studio.",
  },
];

// --- Orb Component ---
const Orb = ({
  testimonial,
  onClick,
  index,
}: {
  testimonial: (typeof testimonialsData)[0];
  onClick: (testimonial: (typeof testimonialsData)[0]) => void;
  index: number;
}) => {
  const shouldReduceMotion = useReducedMotion() ?? false; // Handle null case

  const positions = [
    { top: "10%", left: "20%" },
    { top: "30%", left: "70%" },
    { top: "60%", left: "10%" },
    { top: "80%", left: "80%" },
    { top: "50%", left: "45%" },
  ];
  const size = index === 4 ? "120px" : "80px";
  const gradients = [
    "from-[#E7FF1A] to-violet-400",
    "from-violet-400 to-cyan-400",
    "from-cyan-400 to-pink-400",
    "from-pink-400 to-[#E7FF1A]",
    "from-[#E7FF1A] via-violet-400 to-cyan-400",
  ];

  // Define Orb transition
  const orbTransition: Transition = shouldReduceMotion
    ? { duration: 0.3 } // Simple duration for reduced motion
    : {
        type: "spring",
        damping: 15,
        stiffness: 100,
        mass: 0.8, // Explicitly add mass
        delay: index * 0.1,
      };

  return (
    <motion.div
      initial={
        shouldReduceMotion ? { opacity: 0, scale: 0 } : { opacity: 0, scale: 0 }
      } // Explicit initial state
      whileInView={
        shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }
      } // Explicit whileInView state
      transition={orbTransition} // Use defined transition
      viewport={{ once: true, amount: 0.5 }}
      whileHover={shouldReduceMotion ? {} : { scale: 1.15, zIndex: 20 }} // Conditional whileHover
      onClick={() => onClick(testimonial)}
      className='absolute cursor-pointer rounded-full shadow-2xl overflow-hidden group'
      style={{ ...positions[index], width: size, height: size }}
    >
      {/* Glow effect */}
      {!shouldReduceMotion && ( // Conditionally render glow
        <div
          className={`absolute inset-0 bg-gradient-to-r ${gradients[index]} opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-lg scale-110`}
        />
      )}

      <div
        className={`relative w-full h-full bg-gradient-to-br ${gradients[index]} p-1`}
      >
        <div className='w-full h-full rounded-full bg-[#111316]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-[#111316]/60 transition-colors duration-300'>
          <div className='text-white font-bold text-lg group-hover:text-[#E7FF1A] transition-colors'>
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Focused Card Component ---
const FocusedCard = ({
  testimonial,
  onClose,
}: {
  testimonial: (typeof testimonialsData)[0] | null;
  onClose: () => void;
}) => {
  const shouldReduceMotion = useReducedMotion() ?? false; // Handle null case

  if (!testimonial) return null;

  // Define FocusedCard transition
  const focusedCardTransition: Transition = shouldReduceMotion
    ? { duration: 0.3 } // Simple duration for reduced motion
    : { type: "spring", damping: 20, stiffness: 150, mass: 0.8 }; // Explicitly add mass

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 0, scale: 0.8 }
          : { opacity: 0, scale: 0.8 }
      } // Explicit initial state
      animate={
        shouldReduceMotion ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }
      } // Explicit animate state
      exit={
        shouldReduceMotion
          ? { opacity: 0, scale: 0.8 }
          : { opacity: 0, scale: 0.8 }
      } // Explicit exit state
      transition={focusedCardTransition} // Use defined transition
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
    >
      <div
        className='absolute inset-0 bg-black/80 backdrop-blur-sm'
        onClick={onClose}
      />
      <div className='relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#111316]/95 p-6 lg:p-8 2xl:p-6 shadow-2xl backdrop-blur-xl'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 hover:text-[#E7FF1A]'
        >
          <X size={20} />
        </button>
        <Quote
          className='absolute -top-8 -left-8 h-24 w-24 text-[#E7FF1A]/20'
          style={{ filter: "drop-shadow(0 0 10px rgba(231, 255, 26, 0.3))" }}
        />
        <p className='relative z-10 mb-4 lg:mb-6 2xl:mb-4 text-xl italic leading-relaxed text-white/90'>
          {testimonial.quote}
        </p>
        <div className='flex items-center gap-4'>
          <div className='w-16 h-16 rounded-full bg-gradient-to-br from-[#E7FF1A] to-violet-400 border-2 border-white/20 flex items-center justify-center'>
            <div className='text-[#111316] font-bold'>
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>
          <div>
            <h4 className='text-xl font-bold text-white'>{testimonial.name}</h4>
            <p className='text-[#E7FF1A]'>{testimonial.title}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main Testimonials Section Component ---
export function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<
    (typeof testimonialsData)[0] | null
  >(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion() ?? false; // Handle null case

  // Optimized spring config
  const springConfig: Transition = { damping: 25, stiffness: 120, mass: 0.5 }; // Explicitly type springConfig as Transition
  const dx = useSpring(
    useTransform(mouseX, (val) => val * -0.5),
    springConfig
  );
  const dy = useSpring(
    useTransform(mouseY, (val) => val * -0.5),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [10, -10]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
    springConfig
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (shouldReduceMotion) return; // Disable parallax for reduced motion
      if (!containerRef.current) return;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - left) / width - 0.5);
      mouseY.set((e.clientY - top) / height - 0.5);
    },
    [mouseX, mouseY, shouldReduceMotion] // Add shouldReduceMotion to dependencies
  );

  const handleMouseLeave = useCallback(() => {
    if (shouldReduceMotion) return; // Disable parallax for reduced motion
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY, shouldReduceMotion]); // Add shouldReduceMotion to dependencies

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
  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 30, opacity: 0 }, // Explicit initial state
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0 } // Explicit visible state
      : {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.8, // Explicitly add mass
          },
        },
  };

  return (
    <section
      id='testimonials'
      className='relative w-full bg-[#111316] py-12 sm:py-16 lg:py-20 2xl:py-12 overflow-hidden'
    >
      {/* Background with gradient overlay similar to other sections */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30' />
        {!shouldReduceMotion && ( // Conditionally render parallax background
          <motion.div
            className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
            style={{ x: dx, y: dy }}
          />
        )}
        <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
      </div>

      <div className='container mx-auto px-4 md:px-8 lg:px-12 relative z-10'>
        <motion.div
          className='max-w-6xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className='text-center mb-12 sm:mb-16 2xl:mb-12'
          >
            {/* Badge similar to other sections */}
            <motion.div
              variants={itemVariants}
              className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-4 lg:mb-6 2xl:mb-4'
            >
              <Sparkles className='w-4 h-4 text-[#E7FF1A]' />
              <span className='text-sm font-medium text-white/90'>
                Client Testimonials
              </span>
            </motion.div>

            <h2 className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white mb-4 lg:mb-6 2xl:mb-4'>
              TRUSTED BY
              <br />
              <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                INNOVATORS
              </span>
            </h2>

            <p className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-white/80 max-w-3xl mx-auto mb-8 sm:mb-10 2xl:mb-8'>
              Don&apos;t just take our word for it—hear from the businesses
              we&apos;ve helped transform with cutting-edge solutions.
            </p>

            {/* Stats Section */}
            <div className='flex flex-wrap justify-center gap-6 md:gap-8 2xl:gap-6'>
              {[
                { number: "50+", label: "Happy Clients" },
                { number: "5★", label: "Average Rating" },
                { number: "100%", label: "Satisfaction Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label || index} // Added index as fallback key
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

          {/* Interactive Testimonials */}
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            // Conditionally apply transformStyle and rotations
            style={
              shouldReduceMotion
                ? {}
                : { transformStyle: "preserve-3d", rotateX, rotateY }
            }
            className='relative h-[400px] w-full max-w-4xl mx-auto mb-12 lg:mb-20 2xl:mb-12'
            variants={itemVariants}
          >
            {testimonialsData.map((testimonial, index) => (
              <Orb
                key={testimonial.id}
                testimonial={testimonial}
                onClick={setSelectedTestimonial}
                index={index}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedTestimonial && (
          <FocusedCard
            testimonial={selectedTestimonial}
            onClose={() => setSelectedTestimonial(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
