// "use client";

// import React, { useCallback, useRef } from "react";
// import {
//   motion,
//   useMotionValue,
//   useSpring,
//   useTransform,
//   useReducedMotion,
//   Variants,
//   Transition,
// } from "framer-motion";
// import {
//   Search,
//   PenTool,
//   Code2,
//   Rocket,
//   TrendingUp,
//   Sparkles,
// } from "lucide-react";
// import Image from "next/image";

// // --- Type Definitions ---
// interface IconProps {
//   className?: string;
//   style?: React.CSSProperties;
// }
// type IconComponent = React.ComponentType<IconProps>;
// interface ProcessStep {
//   icon: IconComponent;
//   title: string;
//   description: {
//     mobile: string;
//     desktop: string;
//   };
//   color: string;
// }

// // --- Data ---
// const processSteps: ProcessStep[] = [
//   {
//     icon: Search,
//     title: "Discovery & Strategy",
//     description: {
//       mobile: "Understanding your goals and audience.",
//       desktop:
//         "Understanding your business goals and target audience to create a solid foundation.",
//     },
//     color: "from-[#E7FF1A] to-violet-400",
//   },
//   {
//     icon: PenTool,
//     title: "Design & Prototyping",
//     description: {
//       mobile: "Creating engaging user experiences.",
//       desktop:
//         "Creating intuitive and engaging user experiences that resonate with your users.",
//     },
//     color: "from-violet-400 to-cyan-400",
//   },
//   {
//     icon: Code2,
//     title: "Development",
//     description: {
//       mobile: "Building robust, scalable solutions.",
//       desktop:
//         "Building robust and scalable solutions using cutting-edge technologies.",
//     },
//     color: "from-cyan-400 to-pink-400",
//   },
//   {
//     icon: Rocket,
//     title: "Testing & Launch",
//     description: {
//       mobile: "Quality testing and deployment.",
//       desktop:
//         "Ensuring quality through rigorous testing and successful deployment.",
//     },
//     color: "from-pink-400 to-[#E7FF1A]",
//   },
//   {
//     icon: TrendingUp,
//     title: "Growth & Optimization",
//     description: {
//       mobile: "Continuous improvement and monitoring.",
//       desktop:
//         "Continuous improvement and performance monitoring for sustained success.",
//     },
//     color: "from-[#E7FF1A] to-violet-400",
//   },
// ];

// // --- Reusable Components ---
// const HolographicIcon = React.memo(
//   ({
//     IconComponent,
//     gradient = "from-[#E7FF1A] to-violet-400",
//   }: {
//     IconComponent: IconComponent;
//     gradient?: string;
//   }) => {
//     const shouldReduceMotion = useReducedMotion() ?? false;
//     return (
//       <motion.div
//         whileHover={shouldReduceMotion ? {} : "hover"}
//         className='relative flex-shrink-0'
//         style={{
//           width: "clamp(3rem, 8vw, 4rem)",
//           height: "clamp(3rem, 8vw, 4rem)",
//         }}
//       >
//         <div
//           className={`rounded-xl md:rounded-2xl bg-gradient-to-r ${gradient} ${shouldReduceMotion ? "" : "group-hover:scale-110"} transition-transform duration-200 w-full h-full flex items-center justify-center`}
//           style={{
//             padding: "clamp(0.5rem, 2vw, 0.75rem)",
//           }}
//         >
//           <IconComponent
//             className='text-[#111316]'
//             style={{
//               width: "clamp(1rem, 4vw, 1.5rem)",
//               height: "clamp(1rem, 4vw, 1.5rem)",
//             }}
//           />
//         </div>
//         {!shouldReduceMotion && (
//           <motion.div
//             className={`absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r ${gradient} opacity-20 blur-lg`}
//             variants={{ hover: { scale: 1.2, opacity: 0.4 } }}
//             transition={{
//               type: "spring",
//               damping: 15,
//               stiffness: 200,
//               mass: 0.8,
//             }}
//           />
//         )}
//       </motion.div>
//     );
//   }
// );
// HolographicIcon.displayName = "HolographicIcon";

// const ProcessCard = ({ step, index }: { step: ProcessStep; index: number }) => {
//   const isEven = index % 2 === 0;
//   const shouldReduceMotion = useReducedMotion() ?? false;

//   return (
//     <motion.div
//       initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
//       viewport={{ once: true, amount: 0.3 }}
//       className={`group relative flex items-start sm:items-center ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"}`}
//       style={{
//         gap: "clamp(0.75rem, 3vw, 2rem)",
//       }}
//     >
//       <div
//         className={`hidden md:block absolute inset-0 bg-gradient-to-r ${step.color} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
//       />
//       <div className='relative z-10 mt-1 sm:mt-0'>
//         <HolographicIcon IconComponent={step.icon} gradient={step.color} />
//       </div>
//       <div
//         className={`flex-1 relative z-10 text-left ${isEven ? "sm:text-left" : "sm:text-right"}`}
//       >
//         <div
//           className='relative rounded-xl sm:rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300'
//           style={{
//             padding: "clamp(0.75rem, 3vw, 1.5rem)",
//           }}
//         >
//           <h3
//             className='font-bold text-white group-hover:text-[#E7FF1A] transition-colors duration-200'
//             style={{
//               fontSize: "clamp(1.1rem, 3vw + 0.3rem, 1.6rem)",
//               lineHeight: "1.2",
//               marginBottom: "clamp(0.5rem, 1.5vh, 0.75rem)",
//             }}
//           >
//             {step.title}
//           </h3>
//           <p
//             className='text-white/80 leading-relaxed'
//             style={{
//               fontSize: "clamp(0.85rem, 2.2vw + 0.2rem, 1.1rem)",
//               lineHeight: "1.6",
//             }}
//           >
//             <span className='block sm:hidden'>{step.description.mobile}</span>
//             <span className='hidden sm:block'>{step.description.desktop}</span>
//           </p>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// // --- Main Component ---
// export function OurProcess() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);
//   const shouldReduceMotion = useReducedMotion() ?? false;

//   const springConfig: Transition = { damping: 30, stiffness: 100, mass: 0.8 };
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

//   const containerVariants: Variants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: shouldReduceMotion ? 0 : 0.15,
//         delayChildren: shouldReduceMotion ? 0 : 0.1,
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
//       id='process'
//       className='relative w-full bg-[#111316] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden'
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
//       </div>

//       <div className='container mx-auto px-3 sm:px-4 md:px-8 relative z-10'>
//         <motion.div
//           ref={containerRef}
//           onMouseMove={handleMouseMove}
//           onMouseLeave={handleMouseLeave}
//           className='max-w-6xl mx-auto'
//           variants={containerVariants}
//           initial='hidden'
//           whileInView='visible'
//           viewport={{ once: true, amount: 0.1 }}
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
//                   src='/images/process.svg'
//                   alt='Our Process'
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
//                 Our Process
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
//               <span className='block sm:inline'>PROVEN</span>{" "}
//               <span className='block sm:inline bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
//                 METHODOLOGY
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
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.7 }}
//             >
//               A systematic approach to delivering exceptional digital solutions
//               that drive real business results and exceed expectations.
//             </motion.p>
//           </motion.div>

//           <div className='relative'>
//             <div className='hidden sm:block absolute left-1/2 top-10 bottom-10 w-1 -translate-x-1/2 bg-gradient-to-b from-transparent via-violet-400/40 to-transparent' />
//             <div className='sm:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-violet-400/40 to-transparent' />
//             <div
//               className='space-y-6 sm:space-y-8 md:space-y-12 lg:space-y-16'
//               style={{
//                 gap: "clamp(1.5rem, 4vh, 4rem)",
//               }}
//             >
//               {processSteps.map((step, index) => (
//                 <div key={index} className='relative sm:flex sm:justify-center'>
//                   <div
//                     className='hidden sm:block absolute left-1/2 bg-gradient-to-r from-[#E7FF1A] to-violet-400 rounded-full border-2 border-white/50 shadow-lg -translate-x-1/2 z-10'
//                     style={{
//                       top: "clamp(1.5rem, 4vh, 1.75rem)",
//                       width: "clamp(1rem, 3vw, 1.5rem)",
//                       height: "clamp(1rem, 3vw, 1.5rem)",
//                     }}
//                   />
//                   <div
//                     className={`w-full sm:w-auto sm:max-w-[calc(50%-2rem)] ${index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"}`}
//                   >
//                     <ProcessCard step={step} index={index} />
//                   </div>
//                 </div>
//               ))}
//             </div>
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
  Variants,
} from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
  Sparkles,
} from "lucide-react";

// --- Type Definitions ---
interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}
type IconComponent = React.ComponentType<IconProps>;

interface ProcessStep {
  icon: IconComponent;
  title: string;
  description: {
    mobile: string;
    desktop: string;
  };
  // Updated to Tailwind gradient classes for the light theme
  gradient: string;
  shadowColor: string;
}

// --- Data (Updated Colors) ---
const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description: {
      mobile: "Understanding your goals and audience.",
      desktop:
        "We dive deep into your business goals and target audience to build a solid strategic foundation.",
    },
    gradient: "from-blue-500 to-indigo-500",
    shadowColor: "shadow-blue-500/20",
  },
  {
    icon: PenTool,
    title: "Design & Prototyping",
    description: {
      mobile: "Creating engaging user experiences.",
      desktop:
        "Crafting intuitive, beautiful interfaces that captivate your users and elevate your brand identity.",
    },
    gradient: "from-indigo-500 to-violet-500",
    shadowColor: "shadow-indigo-500/20",
  },
  {
    icon: Code2,
    title: "Development",
    description: {
      mobile: "Building robust, scalable solutions.",
      desktop:
        "Engineering robust, scalable solutions using modern technologies and clean, maintainable code.",
    },
    gradient: "from-violet-500 to-fuchsia-500",
    shadowColor: "shadow-violet-500/20",
  },
  {
    icon: Rocket,
    title: "Testing & Launch",
    description: {
      mobile: "Quality testing and deployment.",
      desktop:
        " rigorous testing ensures a bug-free experience before a seamless, high-performance deployment.",
    },
    gradient: "from-fuchsia-500 to-pink-500",
    shadowColor: "shadow-fuchsia-500/20",
  },
  {
    icon: TrendingUp,
    title: "Growth & Optimization",
    description: {
      mobile: "Continuous improvement and monitoring.",
      desktop:
        "We don't just launch; we monitor, analyze, and optimize to ensure sustained growth and success.",
    },
    gradient: "from-pink-500 to-rose-500",
    shadowColor: "shadow-pink-500/20",
  },
  {
    icon: Rocket, // Added a 6th step to balance the layout visually if needed, or remove. Keeping 5 as per original.
    title: "Testing & Launch",
    description: { mobile: "", desktop: "" },
    gradient: "",
    shadowColor: "",
  },
].slice(0, 5); // Ensure we stick to 5

// --- Reusable Components ---

const ProcessIcon = React.memo(
  ({
    IconComponent,
    gradient,
  }: {
    IconComponent: IconComponent;
    gradient: string;
  }) => {
    return (
      <div className='relative flex-shrink-0 w-16 h-16 md:w-20 md:h-20'>
        {/* Icon Container */}
        <div
          className={`w-full h-full rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg shadow-black/5 z-10 relative`}
        >
          <IconComponent className='text-white w-8 h-8 md:w-10 md:h-10' />
        </div>

        {/* Soft Glow behind icon */}
        <div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} blur-xl opacity-40 transform translate-y-2`}
        />
      </div>
    );
  }
);
ProcessIcon.displayName = "ProcessIcon";

const ProcessCard = ({ step, index }: { step: ProcessStep; index: number }) => {
  const isEven = index % 2 === 0;
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`relative flex items-start sm:items-center ${
        isEven ? "sm:flex-row" : "sm:flex-row-reverse"
      } gap-6 md:gap-8`}
    >
      {/* Icon Wrapper */}
      <div className='relative z-10 flex-shrink-0'>
        <ProcessIcon IconComponent={step.icon} gradient={step.gradient} />
      </div>

      {/* Text Card */}
      <div
        className={`flex-1 relative z-10 ${
          isEven ? "text-left" : "sm:text-right text-left"
        }`}
      >
        <motion.div
          className={`relative rounded-3xl bg-white/60 backdrop-blur-xl border border-white/80 p-6 md:p-8 shadow-xl ${step.shadowColor} hover:bg-white/80 transition-all duration-300`}
          whileHover={shouldReduceMotion ? {} : { y: -5 }}
        >
          <h3 className='font-bold text-slate-900 text-xl md:text-2xl mb-3'>
            {step.title}
          </h3>
          <p className='text-slate-600 leading-relaxed text-sm md:text-base'>
            <span className='block sm:hidden'>{step.description.mobile}</span>
            <span className='hidden sm:block'>{step.description.desktop}</span>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// --- Main Component ---
export function OurProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion() ?? false;

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

  // --- Background Animation (Reused from About) ---
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const dx = useSpring(
    useTransform(mouseX, (val) => val * -0.5),
    springConfig
  );
  const dy = useSpring(
    useTransform(mouseY, (val) => val * -0.5),
    springConfig
  );

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id='process'
      className='relative w-full py-20 lg:py-32 overflow-hidden bg-[#E0F2FE]' // Light Blue Base
    >
      {/* --- Background Elements --- */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        {/* Soft Blobs */}
        <motion.div
          style={{ x: dx, y: dy }}
          className='absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-white/40 rounded-full blur-[100px]'
        />
        <div className='absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200/40 rounded-full blur-[80px]' />

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
          className='max-w-6xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* --- Header Section --- */}
          <div className='text-center mb-16 lg:mb-24'>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className='inline-flex items-center gap-2 bg-white/60 backdrop-blur-md border border-white/60 rounded-full px-4 py-2 mb-6 shadow-sm'
            >
              <Sparkles className='w-4 h-4 text-blue-600' />
              <span className='text-sm font-semibold text-slate-700 uppercase tracking-wide'>
                Our Process
              </span>
            </motion.div>

            {/* Title */}
            <h2 className='text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[0.9]'>
              <span className='block'>Proven</span>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600'>
                Methodology
              </span>
            </h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className='text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed'
            >
              A systematic approach to delivering exceptional digital solutions
              that drive real business results.
            </motion.p>
          </div>

          {/* --- Timeline Container --- */}
          <div className='relative'>
            {/* Central Timeline Line (Desktop) */}
            <div className='hidden sm:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-300 to-transparent' />

            {/* Left Timeline Line (Mobile) */}
            <div className='sm:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-300 to-transparent' />

            <div className='space-y-12 sm:space-y-24'>
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className='relative sm:flex sm:justify-center w-full'
                >
                  {/* Central Dot (Desktop) */}
                  <div className='hidden sm:flex absolute left-1/2 top-10 -translate-x-1/2 z-20 items-center justify-center'>
                    <div
                      className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.gradient} shadow-lg ring-4 ring-[#E0F2FE]`}
                    />
                  </div>

                  {/* Mobile Layout Wrapper */}
                  <div
                    className={`w-full sm:w-[calc(50%-3rem)] ${
                      index % 2 === 0
                        ? "sm:ml-auto pl-20 sm:pl-0"
                        : "sm:mr-auto pl-20 sm:pl-0"
                    }`}
                  >
                    {/* Mobile Dot (Absolute Left) */}
                    <div className='sm:hidden absolute left-6 top-8 -translate-x-1/2 z-20 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 ring-4 ring-[#E0F2FE]' />

                    <ProcessCard step={step} index={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
