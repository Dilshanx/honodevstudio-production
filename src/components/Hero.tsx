// // // // // // "use client";

// // // // // // import React from "react";
// // // // // // import { motion } from "framer-motion";
// // // // // // import { useInView } from "react-intersection-observer";
// // // // // // import { InteractiveGlobe } from "./InteractiveGlobe";
// // // // // // import ResonantBackground from "./ResonantBackground";
// // // // // // import { ArrowRight, Layers, Cpu, Zap } from "lucide-react";

// // // // // // // --- HELPERS ---

// // // // // // const GrainOverlay = () => (
// // // // // //   <div className='pointer-events-none absolute inset-0 z-0 opacity-20 mix-blend-overlay'>
// // // // // //     <div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] brightness-100 contrast-150' />
// // // // // //   </div>
// // // // // // );

// // // // // // const StaggerText = ({
// // // // // //   children,
// // // // // //   delay = 0,
// // // // // // }: {
// // // // // //   children: React.ReactNode;
// // // // // //   delay?: number;
// // // // // // }) => {
// // // // // //   return (
// // // // // //     <motion.div
// // // // // //       initial='hidden'
// // // // // //       animate='visible'
// // // // // //       variants={{
// // // // // //         hidden: { opacity: 0 },
// // // // // //         visible: {
// // // // // //           opacity: 1,
// // // // // //           transition: { staggerChildren: 0.1, delayChildren: delay },
// // // // // //         },
// // // // // //       }}
// // // // // //     >
// // // // // //       {children}
// // // // // //     </motion.div>
// // // // // //   );
// // // // // // };

// // // // // // const Word = ({
// // // // // //   children,
// // // // // //   className,
// // // // // // }: {
// // // // // //   children: string;
// // // // // //   className?: string;
// // // // // // }) => {
// // // // // //   return (
// // // // // //     <span
// // // // // //       // UPDATED: Added 'pb-2' here to prevent descenders (g, y, p, etc.) from being cut off by overflow-hidden
// // // // // //       className={`inline-block whitespace-nowrap overflow-hidden pb-3 ${className}`}
// // // // // //     >
// // // // // //       <motion.span
// // // // // //         className='inline-block'
// // // // // //         variants={{
// // // // // //           hidden: { y: "100%" },
// // // // // //           visible: {
// // // // // //             y: 0,
// // // // // //             transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
// // // // // //           },
// // // // // //         }}
// // // // // //       >
// // // // // //         {children}
// // // // // //       </motion.span>
// // // // // //     </span>
// // // // // //   );
// // // // // // };

// // // // // // // --- COMPONENT: Snake Beam ---
// // // // // // const SnakeBeam = ({ colorClass }: { colorClass: string }) => {
// // // // // //   const isCyan = colorClass.includes("cyan");
// // // // // //   return (
// // // // // //     <div className='absolute bottom-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden'>
// // // // // //       <motion.div
// // // // // //         className={`h-full w-24 bg-gradient-to-r from-transparent ${isCyan ? "via-cyan-400" : "via-fuchsia-400"} to-transparent blur-[1px]`}
// // // // // //         initial={{ x: "-100%" }}
// // // // // //         animate={{ x: "400%" }}
// // // // // //         transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
// // // // // //       />
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // // --- COMPONENT: Feature HUD Card ---
// // // // // // const FeatureCard = ({
// // // // // //   title,
// // // // // //   subtitle,
// // // // // //   icon: Icon,
// // // // // //   colorClass,
// // // // // //   delay,
// // // // // // }: any) => {
// // // // // //   return (
// // // // // //     <motion.div
// // // // // //       initial={{ opacity: 0, y: 20 }}
// // // // // //       whileInView={{ opacity: 1, y: 0 }}
// // // // // //       viewport={{ once: true }}
// // // // // //       transition={{ delay, duration: 0.6 }}
// // // // // //       className='relative flex-1 group'
// // // // // //     >
// // // // // //       <div className='relative h-full p-3 sm:p-4 lg:p-5 bg-white/[0.03] hover:bg-white/[0.06] border-r border-white/5 last:border-r-0 transition-colors duration-300'>
// // // // // //         <div className='flex flex-col h-full justify-center min-h-[60px] sm:min-h-0'>
// // // // // //           {/* Top: Icon & Title Only */}
// // // // // //           <div className='flex items-center justify-between gap-2'>
// // // // // //             <div className='flex-1 min-w-0'>
// // // // // //               <h3
// // // // // //                 className={`text-base sm:text-lg lg:text-xl font-bold tracking-tight ${colorClass} truncate`}
// // // // // //               >
// // // // // //                 {title}
// // // // // //               </h3>
// // // // // //               <p className='text-[10px] lg:text-xs font-medium text-slate-400 truncate'>
// // // // // //                 {subtitle}
// // // // // //               </p>
// // // // // //             </div>
// // // // // //             <div
// // // // // //               className={`p-1.5 lg:p-2 rounded-lg bg-white/5 ${colorClass} bg-opacity-10 flex-shrink-0`}
// // // // // //             >
// // // // // //               <Icon size={16} className='lg:w-5 lg:h-5' />
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         <SnakeBeam colorClass={colorClass} />
// // // // // //       </div>
// // // // // //     </motion.div>
// // // // // //   );
// // // // // // };

// // // // // // // --- MAIN HERO COMPONENT ---
// // // // // // const Hero = () => {
// // // // // //   const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

// // // // // //   return (
// // // // // //     <section
// // // // // //       ref={ref}
// // // // // //       className='relative w-full min-h-screen flex flex-col bg-[#100b26] text-white overflow-x-hidden'
// // // // // //       style={{
// // // // // //         minHeight: "clamp(600px, 100vh, 1200px)",
// // // // // //       }}
// // // // // //     >
// // // // // //       {/* --- BACKGROUND LAYERS --- */}
// // // // // //       <GrainOverlay />
// // // // // //       <div className='absolute inset-0 z-0'>
// // // // // //         <ResonantBackground />
// // // // // //         <div className='absolute inset-0 bg-[#100b26]/40 z-0 pointer-events-none' />
// // // // // //         <div className='absolute bottom-0 left-0 w-full h-32 sm:h-48 lg:h-64 bg-gradient-to-t from-[#100b26] to-transparent z-10 pointer-events-none' />
// // // // // //       </div>

// // // // // //       {/* --- MAIN LAYOUT --- */}
// // // // // //       <div
// // // // // //         className='relative z-20 w-full h-full flex flex-col'
// // // // // //         style={{
// // // // // //           maxWidth: "min(1400px, 95vw)",
// // // // // //           margin: "0 auto",
// // // // // //           padding: "0 clamp(1rem, 3vw, 2rem)",
// // // // // //         }}
// // // // // //       >
// // // // // //         {/* TOP SPACER: Fluid spacing */}
// // // // // //         <div
// // // // // //           className='shrink-0'
// // // // // //           style={{ height: "clamp(3rem, 8vh, 6rem)" }}
// // // // // //         />

// // // // // //         {/* MIDDLE SECTION: CONTENT */}
// // // // // //         <div
// // // // // //           className='flex-grow flex items-center justify-center'
// // // // // //           style={{ padding: "clamp(1rem, 2vh, 2rem) 0" }}
// // // // // //         >
// // // // // //           <div
// // // // // //             className='grid lg:grid-cols-12 items-center w-full'
// // // // // //             style={{ gap: "clamp(1.5rem, 4vw, 3rem)" }}
// // // // // //           >
// // // // // //             {/* LEFT: TYPOGRAPHY */}
// // // // // //             <div className='lg:col-span-7 relative z-20 order-2 lg:order-1 text-center lg:text-left lg:mt-20'>
// // // // // //               {/* Fluid Typography H1 */}
// // // // // //               <h1
// // // // // //                 className='font-black tracking-tighter leading-[0.9] text-white mb-4 sm:mb-6'
// // // // // //                 style={{
// // // // // //                   fontSize: "clamp(2rem, 5vw + 1rem, 7rem)",
// // // // // //                   marginBottom: "clamp(1rem, 3vh, 2rem)",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <StaggerText delay={0.3}>
// // // // // //                   <div
// // // // // //                     className='flex flex-wrap justify-center lg:justify-start'
// // // // // //                     style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
// // // // // //                   >
// // // // // //                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400'>
// // // // // //                       Crafting
// // // // // //                     </Word>
// // // // // //                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400'>
// // // // // //                       Digital
// // // // // //                     </Word>
// // // // // //                   </div>
// // // // // //                   <div
// // // // // //                     className='flex flex-wrap justify-center lg:justify-start'
// // // // // //                     style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
// // // // // //                   >
// // // // // //                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 via-cyan-400 to-fuchsia-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]'>
// // // // // //                       Experiences
// // // // // //                     </Word>
// // // // // //                   </div>
// // // // // //                 </StaggerText>
// // // // // //               </h1>

// // // // // //               <motion.p
// // // // // //                 initial={{ opacity: 0 }}
// // // // // //                 animate={{ opacity: 1 }}
// // // // // //                 transition={{ delay: 0.8, duration: 1 }}
// // // // // //                 className='text-slate-400 font-medium leading-relaxed mx-auto lg:mx-0'
// // // // // //                 style={{
// // // // // //                   fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
// // // // // //                   maxWidth: "min(100%, 42rem)",
// // // // // //                   marginBottom: "clamp(1.5rem, 4vh, 2.5rem)",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 We merge artistic vision with engineering precision to build
// // // // // //                 immersive, high-performance web interfaces.
// // // // // //               </motion.p>

// // // // // //               {/* BUTTONS - Fully Responsive */}
// // // // // //               <motion.div
// // // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // // //                 transition={{ delay: 1, duration: 0.5 }}
// // // // // //                 className='flex flex-col sm:flex-row items-center justify-center lg:justify-start'
// // // // // //                 style={{ gap: "clamp(0.75rem, 2vw, 1rem)" }}
// // // // // //               >
// // // // // //                 <button
// // // // // //                   className='group relative bg-white text-black font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-200 w-full sm:w-auto'
// // // // // //                   style={{
// // // // // //                     padding:
// // // // // //                       "clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)",
// // // // // //                     fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
// // // // // //                   <span
// // // // // //                     className='relative z-10 flex items-center justify-center'
// // // // // //                     style={{ gap: "clamp(0.25rem, 1vw, 0.5rem)" }}
// // // // // //                   >
// // // // // //                     Start Project <ArrowRight size={18} />
// // // // // //                   </span>
// // // // // //                 </button>

// // // // // //                 <button
// // // // // //                   className='text-white font-medium rounded-full border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center backdrop-blur-sm w-full sm:w-auto'
// // // // // //                   style={{
// // // // // //                     padding:
// // // // // //                       "clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)",
// // // // // //                     fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
// // // // // //                     gap: "clamp(0.25rem, 1vw, 0.5rem)",
// // // // // //                   }}
// // // // // //                 >
// // // // // //                   <Layers size={18} className='text-fuchsia-400' />
// // // // // //                   View Work
// // // // // //                 </button>
// // // // // //               </motion.div>
// // // // // //             </div>

// // // // // //             {/* RIGHT: GLOBE (Badge Removed) */}
// // // // // //             <div className='lg:col-span-5 relative flex flex-col items-center order-1 lg:order-2'>
// // // // // //               {/* Globe Wrapper */}
// // // // // //               <div
// // // // // //                 className='relative w-full flex items-center justify-center -mt-16 lg:-mt-28'
// // // // // //                 style={{
// // // // // //                   height: "clamp(250px, 40vh, 550px)",
// // // // // //                   minHeight: "250px",
// // // // // //                 }}
// // // // // //               >
// // // // // //                 <div
// // // // // //                   className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 blur-[100px] rounded-full'
// // // // // //                   style={{
// // // // // //                     width: "clamp(200px, 30vw, 350px)",
// // // // // //                     height: "clamp(200px, 30vw, 350px)",
// // // // // //                   }}
// // // // // //                 />

// // // // // //                 <motion.div
// // // // // //                   initial={{ opacity: 0, scale: 0.8 }}
// // // // // //                   animate={{ opacity: 1, scale: 1 }}
// // // // // //                   transition={{ duration: 1.5, delay: 0.2 }}
// // // // // //                   className='relative z-10 w-full h-full'
// // // // // //                 >
// // // // // //                   <InteractiveGlobe />
// // // // // //                 </motion.div>
// // // // // //               </div>

// // // // // //               {/* UPDATED: "System Online" Badge removed from here */}
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* BOTTOM: DASHBOARD FOOTER - Responsive Grid */}
// // // // // //         <div
// // // // // //           className='relative z-30 shrink-0 mt-10 lg:mt-24'
// // // // // //           style={{ paddingBottom: "clamp(1.5rem, 4vh, 3rem)" }}
// // // // // //         >
// // // // // //           <motion.div
// // // // // //             initial={{ opacity: 0, y: 40 }}
// // // // // //             animate={{ opacity: 1, y: 0 }}
// // // // // //             transition={{ delay: 1.2, duration: 0.8 }}
// // // // // //             className='w-full mx-auto'
// // // // // //             style={{ maxWidth: "min(80rem, 100%)" }}
// // // // // //           >
// // // // // //             <div className='grid grid-cols-1 sm:grid-cols-2 bg-[#0a0718]/60 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl'>
// // // // // //               <FeatureCard
// // // // // //                 title='High Performance'
// // // // // //                 subtitle='Next.js 14 / Rust / Wasm'
// // // // // //                 icon={Zap}
// // // // // //                 colorClass='text-cyan-400'
// // // // // //                 delay={1.3}
// // // // // //               />
// // // // // //               <FeatureCard
// // // // // //                 title='Future Proof'
// // // // // //                 subtitle='Scalable Architecture'
// // // // // //                 icon={Cpu}
// // // // // //                 colorClass='text-fuchsia-400'
// // // // // //                 delay={1.5}
// // // // // //               />
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default Hero;

// // // // // "use client";

// // // // // import React from "react";
// // // // // import { motion } from "framer-motion";
// // // // // import { useInView } from "react-intersection-observer";
// // // // // import { InteractiveGlobe } from "./InteractiveGlobe";
// // // // // import ResonantBackground from "./ResonantBackground";
// // // // // import { ArrowRight, Layers, Cpu, Zap } from "lucide-react";

// // // // // // --- HELPERS ---

// // // // // const GrainOverlay = () => (
// // // // //   <div className='pointer-events-none absolute inset-0 z-0 opacity-20 mix-blend-overlay'>
// // // // //     <div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] brightness-100 contrast-150' />
// // // // //   </div>
// // // // // );

// // // // // const StaggerText = ({
// // // // //   children,
// // // // //   delay = 0,
// // // // // }: {
// // // // //   children: React.ReactNode;
// // // // //   delay?: number;
// // // // // }) => {
// // // // //   return (
// // // // //     <motion.div
// // // // //       initial='hidden'
// // // // //       animate='visible'
// // // // //       variants={{
// // // // //         hidden: { opacity: 0 },
// // // // //         visible: {
// // // // //           opacity: 1,
// // // // //           transition: { staggerChildren: 0.1, delayChildren: delay },
// // // // //         },
// // // // //       }}
// // // // //     >
// // // // //       {children}
// // // // //     </motion.div>
// // // // //   );
// // // // // };

// // // // // const Word = ({
// // // // //   children,
// // // // //   className,
// // // // // }: {
// // // // //   children: string;
// // // // //   className?: string;
// // // // // }) => {
// // // // //   return (
// // // // //     <span
// // // // //       className={`inline-block whitespace-nowrap overflow-hidden pb-3 ${className}`}
// // // // //     >
// // // // //       <motion.span
// // // // //         className='inline-block'
// // // // //         variants={{
// // // // //           hidden: { y: "100%" },
// // // // //           visible: {
// // // // //             y: 0,
// // // // //             transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
// // // // //           },
// // // // //         }}
// // // // //       >
// // // // //         {children}
// // // // //       </motion.span>
// // // // //     </span>
// // // // //   );
// // // // // };

// // // // // // --- COMPONENT: Snake Beam ---
// // // // // const SnakeBeam = ({ colorClass }: { colorClass: string }) => {
// // // // //   const isCyan = colorClass.includes("cyan");
// // // // //   return (
// // // // //     <div className='absolute bottom-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden'>
// // // // //       <motion.div
// // // // //         className={`h-full w-24 bg-gradient-to-r from-transparent ${isCyan ? "via-cyan-400" : "via-fuchsia-400"} to-transparent blur-[1px]`}
// // // // //         initial={{ x: "-100%" }}
// // // // //         animate={{ x: "400%" }}
// // // // //         transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // --- COMPONENT: Feature HUD Card ---
// // // // // const FeatureCard = ({
// // // // //   title,
// // // // //   subtitle,
// // // // //   icon: Icon,
// // // // //   colorClass,
// // // // //   delay,
// // // // // }: any) => {
// // // // //   return (
// // // // //     <motion.div
// // // // //       initial={{ opacity: 0, y: 20 }}
// // // // //       whileInView={{ opacity: 1, y: 0 }}
// // // // //       viewport={{ once: true }}
// // // // //       transition={{ delay, duration: 0.6 }}
// // // // //       className='relative flex-1 group'
// // // // //     >
// // // // //       <div className='relative h-full p-3 sm:p-4 lg:p-5 bg-white/[0.03] hover:bg-white/[0.06] border-r border-white/5 last:border-r-0 transition-colors duration-300'>
// // // // //         <div className='flex flex-col h-full justify-center min-h-[60px] sm:min-h-0'>
// // // // //           <div className='flex items-center justify-between gap-2'>
// // // // //             <div className='flex-1 min-w-0'>
// // // // //               <h3
// // // // //                 className={`text-base sm:text-lg lg:text-xl font-bold tracking-tight ${colorClass} truncate`}
// // // // //               >
// // // // //                 {title}
// // // // //               </h3>
// // // // //               <p className='text-[10px] lg:text-xs font-medium text-slate-400 truncate'>
// // // // //                 {subtitle}
// // // // //               </p>
// // // // //             </div>
// // // // //             <div
// // // // //               className={`p-1.5 lg:p-2 rounded-lg bg-white/5 ${colorClass} bg-opacity-10 flex-shrink-0`}
// // // // //             >
// // // // //               <Icon size={16} className='lg:w-5 lg:h-5' />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //         <SnakeBeam colorClass={colorClass} />
// // // // //       </div>
// // // // //     </motion.div>
// // // // //   );
// // // // // };

// // // // // // --- MAIN HERO COMPONENT ---
// // // // // const Hero = () => {
// // // // //   const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

// // // // //   return (
// // // // //     <section
// // // // //       ref={ref}
// // // // //       className='relative w-full flex flex-col bg-[#100b26] text-white overflow-x-hidden'
// // // // //       style={{
// // // // //         minHeight: "100vh",
// // // // //       }}
// // // // //     >
// // // // //       {/* --- BACKGROUND LAYERS --- */}
// // // // //       <GrainOverlay />
// // // // //       <div className='absolute inset-0 z-0'>
// // // // //         <ResonantBackground />
// // // // //         <div className='absolute inset-0 bg-[#100b26]/40 z-0 pointer-events-none' />
// // // // //         <div className='absolute bottom-0 left-0 w-full h-32 sm:h-48 lg:h-64 bg-gradient-to-t from-[#100b26] to-transparent z-10 pointer-events-none' />
// // // // //       </div>

// // // // //       {/* --- MAIN LAYOUT --- */}
// // // // //       <div
// // // // //         className='relative z-20 w-full h-full flex flex-col'
// // // // //         style={{
// // // // //           maxWidth: "min(1400px, 95vw)",
// // // // //           margin: "0 auto",
// // // // //           padding: "0 clamp(1rem, 3vw, 2rem) 7rem clamp(1rem, 3vw, 2rem)",
// // // // //         }}
// // // // //       >
// // // // //         {/* TOP SPACER - Hidden on mobile to pull content up */}
// // // // //         <div className='hidden lg:block shrink-0 h-24' />
// // // // //         {/* Reduced spacer for mobile */}
// // // // //         <div className='block lg:hidden shrink-0 h-2' />

// // // // //         {/* MIDDLE SECTION: CONTENT */}
// // // // //         <div className='flex-grow flex flex-col justify-start lg:justify-center'>
// // // // //           <div className='flex flex-col lg:grid lg:grid-cols-12 items-center w-full gap-12 lg:gap-8'>
// // // // //             {/* ITEM 1: GLOBE (First on Mobile, Right on Desktop) */}
// // // // //             <div className='w-full lg:col-span-5 lg:order-2 relative flex flex-col items-center justify-center'>
// // // // //               <div
// // // // //                 className='relative w-full flex items-center justify-center'
// // // // //                 // FIX:
// // // // //                 // 1. Reduced height to h-[250px] for SE
// // // // //                 // 2. Added -mt-10 to pull it UP significantly on mobile
// // // // //                 // 3. Reset mt-0 on sm/lg screens
// // // // //               >
// // // // //                 <div className='relative w-full h-[250px] sm:h-[400px] lg:h-[550px] -mt-10 sm:mt-0'>
// // // // //                   {/* Glow Effect */}
// // // // //                   <div
// // // // //                     className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 blur-[60px] lg:blur-[80px] rounded-full'
// // // // //                     style={{
// // // // //                       width: "clamp(180px, 30vw, 350px)",
// // // // //                       height: "clamp(180px, 30vw, 350px)",
// // // // //                     }}
// // // // //                   />

// // // // //                   <motion.div
// // // // //                     initial={{ opacity: 0, scale: 0.8 }}
// // // // //                     animate={{ opacity: 1, scale: 1 }}
// // // // //                     transition={{ duration: 1.5, delay: 0.2 }}
// // // // //                     className='relative z-10 w-full h-full'
// // // // //                   >
// // // // //                     <InteractiveGlobe />
// // // // //                   </motion.div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* ITEM 2: TYPOGRAPHY (Second on Mobile, Left on Desktop) */}
// // // // //             <div className='w-full lg:col-span-7 lg:order-1 relative z-20 text-center lg:text-left'>
// // // // //               <h1
// // // // //                 className='font-black tracking-tighter leading-[0.9] text-white mb-4 sm:mb-6'
// // // // //                 style={{
// // // // //                   fontSize: "clamp(2.5rem, 5vw + 1rem, 7rem)",
// // // // //                   marginBottom: "clamp(1rem, 3vh, 2rem)",
// // // // //                 }}
// // // // //               >
// // // // //                 <StaggerText delay={0.3}>
// // // // //                   <div
// // // // //                     className='flex flex-wrap justify-center lg:justify-start'
// // // // //                     style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
// // // // //                   >
// // // // //                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400'>
// // // // //                       Crafting
// // // // //                     </Word>
// // // // //                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400'>
// // // // //                       Digital
// // // // //                     </Word>
// // // // //                   </div>
// // // // //                   <div
// // // // //                     className='flex flex-wrap justify-center lg:justify-start'
// // // // //                     style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
// // // // //                   >
// // // // //                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 via-cyan-400 to-fuchsia-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]'>
// // // // //                       Experiences
// // // // //                     </Word>
// // // // //                   </div>
// // // // //                 </StaggerText>
// // // // //               </h1>

// // // // //               <motion.p
// // // // //                 initial={{ opacity: 0 }}
// // // // //                 animate={{ opacity: 1 }}
// // // // //                 transition={{ delay: 0.8, duration: 1 }}
// // // // //                 className='text-slate-400 font-medium leading-relaxed mx-auto lg:mx-0'
// // // // //                 style={{
// // // // //                   fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
// // // // //                   maxWidth: "min(100%, 42rem)",
// // // // //                   marginBottom: "clamp(1.5rem, 4vh, 2.5rem)",
// // // // //                 }}
// // // // //               >
// // // // //                 We merge artistic vision with engineering precision to build
// // // // //                 immersive, high-performance web interfaces.
// // // // //               </motion.p>

// // // // //               {/* BUTTONS */}
// // // // //               <motion.div
// // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // //                 transition={{ delay: 1, duration: 0.5 }}
// // // // //                 className='flex flex-col sm:flex-row items-center justify-center lg:justify-start'
// // // // //                 style={{ gap: "clamp(0.75rem, 2vw, 1rem)" }}
// // // // //               >
// // // // //                 <button
// // // // //                   className='group relative bg-white text-black font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-200 w-full sm:w-auto'
// // // // //                   style={{
// // // // //                     padding:
// // // // //                       "clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)",
// // // // //                     fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
// // // // //                   }}
// // // // //                 >
// // // // //                   <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
// // // // //                   <span
// // // // //                     className='relative z-10 flex items-center justify-center'
// // // // //                     style={{ gap: "clamp(0.25rem, 1vw, 0.5rem)" }}
// // // // //                   >
// // // // //                     Start Project <ArrowRight size={18} />
// // // // //                   </span>
// // // // //                 </button>

// // // // //                 <button
// // // // //                   className='text-white font-medium rounded-full border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center backdrop-blur-sm w-full sm:w-auto'
// // // // //                   style={{
// // // // //                     padding:
// // // // //                       "clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)",
// // // // //                     fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
// // // // //                     gap: "clamp(0.25rem, 1vw, 0.5rem)",
// // // // //                   }}
// // // // //                 >
// // // // //                   <Layers size={18} className='text-fuchsia-400' />
// // // // //                   View Work
// // // // //                 </button>
// // // // //               </motion.div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* BOTTOM: DASHBOARD FOOTER */}
// // // // //         <div className='relative z-30 shrink-0 mt-8 lg:mt-24'>
// // // // //           <motion.div
// // // // //             initial={{ opacity: 0, y: 40 }}
// // // // //             animate={{ opacity: 1, y: 0 }}
// // // // //             transition={{ delay: 1.2, duration: 0.8 }}
// // // // //             className='w-full mx-auto'
// // // // //             style={{ maxWidth: "min(80rem, 100%)" }}
// // // // //           >
// // // // //             <div className='grid grid-cols-1 sm:grid-cols-2 bg-[#0a0718]/60 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl'>
// // // // //               <FeatureCard
// // // // //                 title='High Performance'
// // // // //                 subtitle='Next.js 14 / Rust / Wasm'
// // // // //                 icon={Zap}
// // // // //                 colorClass='text-cyan-400'
// // // // //                 delay={1.3}
// // // // //               />
// // // // //               <FeatureCard
// // // // //                 title='Future Proof'
// // // // //                 subtitle='Scalable Architecture'
// // // // //                 icon={Cpu}
// // // // //                 colorClass='text-fuchsia-400'
// // // // //                 delay={1.5}
// // // // //               />
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default Hero;

// // // // "use client";

// // // // import React from "react";
// // // // import { motion } from "framer-motion";
// // // // import { useInView } from "react-intersection-observer";
// // // // import { InteractiveGlobe } from "./InteractiveGlobe";
// // // // import ResonantBackground from "./ResonantBackground";
// // // // import { ArrowRight, Layers, Cpu, Zap } from "lucide-react";

// // // // // --- HELPERS ---

// // // // const GrainOverlay = () => (
// // // //   <div className='pointer-events-none absolute inset-0 z-0 opacity-20 mix-blend-overlay'>
// // // //     <div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] brightness-100 contrast-150' />
// // // //   </div>
// // // // );

// // // // const StaggerText = ({
// // // //   children,
// // // //   delay = 0,
// // // // }: {
// // // //   children: React.ReactNode;
// // // //   delay?: number;
// // // // }) => {
// // // //   return (
// // // //     <motion.div
// // // //       initial='hidden'
// // // //       animate='visible'
// // // //       variants={{
// // // //         hidden: { opacity: 0 },
// // // //         visible: {
// // // //           opacity: 1,
// // // //           transition: { staggerChildren: 0.1, delayChildren: delay },
// // // //         },
// // // //       }}
// // // //     >
// // // //       {children}
// // // //     </motion.div>
// // // //   );
// // // // };

// // // // const Word = ({
// // // //   children,
// // // //   className,
// // // // }: {
// // // //   children: string;
// // // //   className?: string;
// // // // }) => {
// // // //   return (
// // // //     <span
// // // //       className={`inline-block whitespace-nowrap overflow-hidden pb-3 ${className}`}
// // // //     >
// // // //       <motion.span
// // // //         className='inline-block'
// // // //         variants={{
// // // //           hidden: { y: "100%" },
// // // //           visible: {
// // // //             y: 0,
// // // //             transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
// // // //           },
// // // //         }}
// // // //       >
// // // //         {children}
// // // //       </motion.span>
// // // //     </span>
// // // //   );
// // // // };

// // // // // --- COMPONENT: Snake Beam ---
// // // // const SnakeBeam = ({ colorClass }: { colorClass: string }) => {
// // // //   const isCyan = colorClass.includes("cyan");
// // // //   return (
// // // //     <div className='absolute bottom-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden'>
// // // //       <motion.div
// // // //         className={`h-full w-24 bg-gradient-to-r from-transparent ${isCyan ? "via-cyan-400" : "via-fuchsia-400"} to-transparent blur-[1px]`}
// // // //         initial={{ x: "-100%" }}
// // // //         animate={{ x: "400%" }}
// // // //         transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // // --- COMPONENT: Feature HUD Card ---
// // // // const FeatureCard = ({
// // // //   title,
// // // //   subtitle,
// // // //   icon: Icon,
// // // //   colorClass,
// // // //   delay,
// // // // }: any) => {
// // // //   return (
// // // //     <motion.div
// // // //       initial={{ opacity: 0, y: 20 }}
// // // //       whileInView={{ opacity: 1, y: 0 }}
// // // //       viewport={{ once: true }}
// // // //       transition={{ delay, duration: 0.6 }}
// // // //       className='relative flex-1 group'
// // // //     >
// // // //       <div className='relative h-full p-3 sm:p-4 lg:p-5 bg-white/[0.03] hover:bg-white/[0.06] border-r border-white/5 last:border-r-0 transition-colors duration-300'>
// // // //         <div className='flex flex-col h-full justify-center min-h-[60px] sm:min-h-0'>
// // // //           <div className='flex items-center justify-between gap-2'>
// // // //             <div className='flex-1 min-w-0'>
// // // //               <h3
// // // //                 className={`text-base sm:text-lg lg:text-xl font-bold tracking-tight ${colorClass} truncate`}
// // // //               >
// // // //                 {title}
// // // //               </h3>
// // // //               <p className='text-[10px] lg:text-xs font-medium text-slate-400 truncate'>
// // // //                 {subtitle}
// // // //               </p>
// // // //             </div>
// // // //             <div
// // // //               className={`p-1.5 lg:p-2 rounded-lg bg-white/5 ${colorClass} bg-opacity-10 flex-shrink-0`}
// // // //             >
// // // //               <Icon size={16} className='lg:w-5 lg:h-5' />
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //         <SnakeBeam colorClass={colorClass} />
// // // //       </div>
// // // //     </motion.div>
// // // //   );
// // // // };

// // // // // --- MAIN HERO COMPONENT ---
// // // // const Hero = () => {
// // // //   const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

// // // //   return (
// // // //     <section
// // // //       ref={ref}
// // // //       className='relative w-full flex flex-col bg-[#100b26] text-white overflow-x-hidden'
// // // //       style={{
// // // //         minHeight: "100vh",
// // // //       }}
// // // //     >
// // // //       {/* --- BACKGROUND LAYERS --- */}
// // // //       <GrainOverlay />
// // // //       <div className='absolute inset-0 z-0'>
// // // //         <ResonantBackground />
// // // //         <div className='absolute inset-0 bg-[#100b26]/40 z-0 pointer-events-none' />
// // // //         <div className='absolute bottom-0 left-0 w-full h-32 sm:h-48 lg:h-64 bg-gradient-to-t from-[#100b26] to-transparent z-10 pointer-events-none' />
// // // //       </div>

// // // //       {/* --- MAIN LAYOUT --- */}
// // // //       <div
// // // //         className='relative z-20 w-full h-full flex flex-col'
// // // //         style={{
// // // //           maxWidth: "min(1400px, 95vw)",
// // // //           margin: "0 auto",
// // // //           padding: "0 clamp(1rem, 3vw, 2rem) 7rem clamp(1rem, 3vw, 2rem)",
// // // //         }}
// // // //       >
// // // //         {/* TOP SPACER */}
// // // //         <div className='hidden lg:block shrink-0 h-24' />
// // // //         <div className='block lg:hidden shrink-0 h-2' />

// // // //         {/* MIDDLE SECTION: CONTENT */}
// // // //         <div className='flex-grow flex flex-col justify-start lg:justify-center'>
// // // //           {/* GAP SETTINGS:
// // // //              Mobile: gap-16 (keeps text pushed down safely).
// // // //              Tablet (sm): gap-32 (aggressive for Tab S4).
// // // //              Desktop (lg): gap-8.
// // // //           */}
// // // //           <div className='flex flex-col lg:grid lg:grid-cols-12 items-center w-full gap-16 sm:gap-32 md:gap-24 lg:gap-8'>
// // // //             {/* ITEM 1: GLOBE */}
// // // //             <div className='w-full lg:col-span-5 lg:order-2 relative flex flex-col items-center justify-center'>
// // // //               <div className='relative w-full flex items-center justify-center'>
// // // //                 {/* FIX FOR Z30:
// // // //                    Changed '-mt-12' to '-mt-2'.
// // // //                    This brings the globe DOWN by 40px compared to the S8 version.
// // // //                 */}
// // // //                 <div className='relative w-full h-[320px] sm:h-[400px] lg:h-[550px] -mt-2 sm:mt-0'>
// // // //                   {/* Glow Effect */}
// // // //                   <div
// // // //                     className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 blur-[60px] lg:blur-[80px] rounded-full'
// // // //                     style={{
// // // //                       width: "clamp(180px, 30vw, 350px)",
// // // //                       height: "clamp(180px, 30vw, 350px)",
// // // //                     }}
// // // //                   />

// // // //                   <motion.div
// // // //                     initial={{ opacity: 0, scale: 0.8 }}
// // // //                     animate={{ opacity: 1, scale: 1 }}
// // // //                     transition={{ duration: 1.5, delay: 0.2 }}
// // // //                     className='relative z-10 w-full h-full'
// // // //                   >
// // // //                     <InteractiveGlobe />
// // // //                   </motion.div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             {/* ITEM 2: TYPOGRAPHY */}
// // // //             {/* MARGIN SETTINGS:
// // // //                 Mobile: mt-0 (relies on gap-16).
// // // //                 Tablet (Tab S4): sm:mt-24.
// // // //             */}
// // // //             <div className='w-full lg:col-span-7 lg:order-1 relative z-20 text-center lg:text-left mt-0 sm:mt-24 md:mt-20 lg:mt-0'>
// // // //               <h1
// // // //                 className='font-black tracking-tighter leading-[0.9] text-white mb-4 sm:mb-6'
// // // //                 style={{
// // // //                   fontSize: "clamp(2.5rem, 5vw + 1rem, 7rem)",
// // // //                   marginBottom: "clamp(1rem, 3vh, 2rem)",
// // // //                 }}
// // // //               >
// // // //                 <StaggerText delay={0.3}>
// // // //                   <div
// // // //                     className='flex flex-wrap justify-center lg:justify-start'
// // // //                     style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
// // // //                   >
// // // //                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400'>
// // // //                       Crafting
// // // //                     </Word>
// // // //                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400'>
// // // //                       Digital
// // // //                     </Word>
// // // //                   </div>
// // // //                   <div
// // // //                     className='flex flex-wrap justify-center lg:justify-start'
// // // //                     style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
// // // //                   >
// // // //                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 via-cyan-400 to-fuchsia-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]'>
// // // //                       Experiences
// // // //                     </Word>
// // // //                   </div>
// // // //                 </StaggerText>
// // // //               </h1>

// // // //               <motion.p
// // // //                 initial={{ opacity: 0 }}
// // // //                 animate={{ opacity: 1 }}
// // // //                 transition={{ delay: 0.8, duration: 1 }}
// // // //                 className='text-slate-400 font-medium leading-relaxed mx-auto lg:mx-0'
// // // //                 style={{
// // // //                   fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
// // // //                   maxWidth: "min(100%, 42rem)",
// // // //                   marginBottom: "clamp(1.5rem, 4vh, 2.5rem)",
// // // //                 }}
// // // //               >
// // // //                 We merge artistic vision with engineering precision to build
// // // //                 immersive, high-performance web interfaces.
// // // //               </motion.p>

// // // //               {/* BUTTONS */}
// // // //               <motion.div
// // // //                 initial={{ opacity: 0, y: 20 }}
// // // //                 animate={{ opacity: 1, y: 0 }}
// // // //                 transition={{ delay: 1, duration: 0.5 }}
// // // //                 className='flex flex-col sm:flex-row items-center justify-center lg:justify-start'
// // // //                 style={{ gap: "clamp(0.75rem, 2vw, 1rem)" }}
// // // //               >
// // // //                 <button
// // // //                   className='group relative bg-white text-black font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-200 w-full sm:w-auto'
// // // //                   style={{
// // // //                     padding:
// // // //                       "clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)",
// // // //                     fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
// // // //                   }}
// // // //                 >
// // // //                   <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
// // // //                   <span
// // // //                     className='relative z-10 flex items-center justify-center'
// // // //                     style={{ gap: "clamp(0.25rem, 1vw, 0.5rem)" }}
// // // //                   >
// // // //                     Start Project <ArrowRight size={18} />
// // // //                   </span>
// // // //                 </button>

// // // //                 <button
// // // //                   className='text-white font-medium rounded-full border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center backdrop-blur-sm w-full sm:w-auto'
// // // //                   style={{
// // // //                     padding:
// // // //                       "clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)",
// // // //                     fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
// // // //                     gap: "clamp(0.25rem, 1vw, 0.5rem)",
// // // //                   }}
// // // //                 >
// // // //                   <Layers size={18} className='text-fuchsia-400' />
// // // //                   View Work
// // // //                 </button>
// // // //               </motion.div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* BOTTOM: DASHBOARD FOOTER */}
// // // //         <div className='relative z-30 shrink-0 mt-8 lg:mt-24'>
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 40 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{ delay: 1.2, duration: 0.8 }}
// // // //             className='w-full mx-auto'
// // // //             style={{ maxWidth: "min(80rem, 100%)" }}
// // // //           >
// // // //             <div className='grid grid-cols-1 sm:grid-cols-2 bg-[#0a0718]/60 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl'>
// // // //               <FeatureCard
// // // //                 title='High Performance'
// // // //                 subtitle='Next.js 14 / Rust / Wasm'
// // // //                 icon={Zap}
// // // //                 colorClass='text-cyan-400'
// // // //                 delay={1.3}
// // // //               />
// // // //               <FeatureCard
// // // //                 title='Future Proof'
// // // //                 subtitle='Scalable Architecture'
// // // //                 icon={Cpu}
// // // //                 colorClass='text-fuchsia-400'
// // // //                 delay={1.5}
// // // //               />
// // // //             </div>
// // // //           </motion.div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default Hero;

// // // "use client";

// // // import React from "react";
// // // import { motion } from "framer-motion";
// // // import { useInView } from "react-intersection-observer";
// // // import { InteractiveGlobe } from "./InteractiveGlobe";
// // // import ResonantBackground from "./ResonantBackground";
// // // import { ArrowRight, Layers, Cpu, Zap } from "lucide-react";

// // // // --- HELPERS ---

// // // const GrainOverlay = () => (
// // //   <div className='pointer-events-none absolute inset-0 z-0 opacity-20 mix-blend-overlay'>
// // //     <div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] brightness-100 contrast-150' />
// // //   </div>
// // // );

// // // const StaggerText = ({
// // //   children,
// // //   delay = 0,
// // // }: {
// // //   children: React.ReactNode;
// // //   delay?: number;
// // // }) => {
// // //   return (
// // //     <motion.div
// // //       initial='hidden'
// // //       animate='visible'
// // //       variants={{
// // //         hidden: { opacity: 0 },
// // //         visible: {
// // //           opacity: 1,
// // //           transition: { staggerChildren: 0.1, delayChildren: delay },
// // //         },
// // //       }}
// // //     >
// // //       {children}
// // //     </motion.div>
// // //   );
// // // };

// // // const Word = ({
// // //   children,
// // //   className,
// // // }: {
// // //   children: string;
// // //   className?: string;
// // // }) => {
// // //   return (
// // //     <span
// // //       className={`inline-block whitespace-nowrap overflow-hidden pb-3 ${className}`}
// // //     >
// // //       <motion.span
// // //         className='inline-block'
// // //         variants={{
// // //           hidden: { y: "100%" },
// // //           visible: {
// // //             y: 0,
// // //             transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
// // //           },
// // //         }}
// // //       >
// // //         {children}
// // //       </motion.span>
// // //     </span>
// // //   );
// // // };

// // // // --- COMPONENT: Snake Beam ---
// // // const SnakeBeam = ({ colorClass }: { colorClass: string }) => {
// // //   const isCyan = colorClass.includes("cyan");
// // //   return (
// // //     <div className='absolute bottom-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden'>
// // //       <motion.div
// // //         className={`h-full w-24 bg-gradient-to-r from-transparent ${isCyan ? "via-cyan-400" : "via-fuchsia-400"} to-transparent blur-[1px]`}
// // //         initial={{ x: "-100%" }}
// // //         animate={{ x: "400%" }}
// // //         transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
// // //       />
// // //     </div>
// // //   );
// // // };

// // // // --- COMPONENT: Feature HUD Card ---
// // // const FeatureCard = ({
// // //   title,
// // //   subtitle,
// // //   icon: Icon,
// // //   colorClass,
// // //   delay,
// // // }: any) => {
// // //   return (
// // //     <motion.div
// // //       initial={{ opacity: 0, y: 20 }}
// // //       whileInView={{ opacity: 1, y: 0 }}
// // //       viewport={{ once: true }}
// // //       transition={{ delay, duration: 0.6 }}
// // //       className='relative flex-1 group'
// // //     >
// // //       <div className='relative h-full p-3 sm:p-4 lg:p-5 bg-white/[0.03] hover:bg-white/[0.06] border-r border-white/5 last:border-r-0 transition-colors duration-300'>
// // //         <div className='flex flex-col h-full justify-center min-h-[60px] sm:min-h-0'>
// // //           <div className='flex items-center justify-between gap-2'>
// // //             <div className='flex-1 min-w-0'>
// // //               <h3
// // //                 className={`text-base sm:text-lg lg:text-xl font-bold tracking-tight ${colorClass} truncate`}
// // //               >
// // //                 {title}
// // //               </h3>
// // //               <p className='text-[10px] lg:text-xs font-medium text-slate-400 truncate'>
// // //                 {subtitle}
// // //               </p>
// // //             </div>
// // //             <div
// // //               className={`p-1.5 lg:p-2 rounded-lg bg-white/5 ${colorClass} bg-opacity-10 flex-shrink-0`}
// // //             >
// // //               <Icon size={16} className='lg:w-5 lg:h-5' />
// // //             </div>
// // //           </div>
// // //         </div>
// // //         <SnakeBeam colorClass={colorClass} />
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // // --- MAIN HERO COMPONENT ---
// // // const Hero = () => {
// // //   const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

// // //   return (
// // //     <section
// // //       ref={ref}
// // //       className='relative w-full flex flex-col bg-[#100b26] text-white overflow-x-hidden'
// // //       style={{
// // //         minHeight: "100vh",
// // //       }}
// // //     >
// // //       {/* --- BACKGROUND LAYERS --- */}
// // //       <GrainOverlay />
// // //       <div className='absolute inset-0 z-0'>
// // //         <ResonantBackground />
// // //         <div className='absolute inset-0 bg-[#100b26]/40 z-0 pointer-events-none' />
// // //         <div className='absolute bottom-0 left-0 w-full h-32 sm:h-48 lg:h-64 bg-gradient-to-t from-[#100b26] to-transparent z-10 pointer-events-none' />
// // //       </div>

// // //       {/* --- MAIN LAYOUT --- */}
// // //       <div
// // //         className='relative z-20 w-full h-full flex flex-col'
// // //         style={{
// // //           maxWidth: "min(1400px, 95vw)",
// // //           margin: "0 auto",
// // //           padding: "0 clamp(1rem, 3vw, 2rem) 7rem clamp(1rem, 3vw, 2rem)",
// // //         }}
// // //       >
// // //         {/* TOP SPACER */}
// // //         <div className='hidden xl:block shrink-0 h-24' />
// // //         <div className='block xl:hidden shrink-0 h-2' />

// // //         {/* MIDDLE SECTION: CONTENT */}
// // //         <div className='flex-grow flex flex-col justify-start lg:justify-center'>
// // //           {/* GAP SETTINGS:
// // //              Mobile: gap-6 (24px) - Minimal gap.
// // //              Tablet (sm): gap-32 (128px) - Aggressive gap for Tab S4.
// // //              Desktop (xl): gap-8.
// // //           */}
// // //           <div className='flex flex-col xl:grid xl:grid-cols-12 items-center w-full gap-6 sm:gap-32 md:gap-24 xl:gap-8'>
// // //             {/* ITEM 1: GLOBE */}
// // //             <div className='w-full xl:col-span-5 xl:order-2 relative flex flex-col items-center justify-center'>
// // //               <div className='relative w-full flex items-center justify-center'>
// // //                 {/* FIX FOR IPHONE SE:
// // //                    Reverted '-mt-12' to '-mt-2' to move the globe DOWN and away from the screen edge.
// // //                 */}
// // //                 <div className='relative w-full h-[320px] sm:h-[400px] lg:h-[550px] -mt-2 sm:mt-0'>
// // //                   {/* Glow Effect */}
// // //                   <div
// // //                     className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 blur-[60px] lg:blur-[80px] rounded-full'
// // //                     style={{
// // //                       width: "clamp(180px, 30vw, 350px)",
// // //                       height: "clamp(180px, 30vw, 350px)",
// // //                     }}
// // //                   />

// // //                   <motion.div
// // //                     initial={{ opacity: 0, scale: 0.8 }}
// // //                     animate={{ opacity: 1, scale: 1 }}
// // //                     transition={{ duration: 1.5, delay: 0.2 }}
// // //                     className='relative z-10 w-full h-full'
// // //                   >
// // //                     <InteractiveGlobe />
// // //                   </motion.div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             {/* ITEM 2: TYPOGRAPHY */}
// // //             <div className='w-full xl:col-span-7 xl:order-1 relative z-20 text-center xl:text-left mt-0 sm:mt-24 md:mt-20 xl:mt-0'>
// // //               <h1
// // //                 className='font-black tracking-tighter leading-[0.9] text-white mb-4 sm:mb-6'
// // //                 style={{
// // //                   fontSize: "clamp(2.5rem, 5vw + 1rem, 7rem)",
// // //                   marginBottom: "clamp(1rem, 3vh, 2rem)",
// // //                 }}
// // //               >
// // //                 <StaggerText delay={0.3}>
// // //                   <div
// // //                     className='flex flex-wrap justify-center xl:justify-start'
// // //                     style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
// // //                   >
// // //                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400'>
// // //                       Crafting
// // //                     </Word>
// // //                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400'>
// // //                       Digital
// // //                     </Word>
// // //                   </div>
// // //                   <div
// // //                     className='flex flex-wrap justify-center xl:justify-start'
// // //                     style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
// // //                   >
// // //                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 via-cyan-400 to-fuchsia-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]'>
// // //                       Experiences
// // //                     </Word>
// // //                   </div>
// // //                 </StaggerText>
// // //               </h1>

// // //               <motion.p
// // //                 initial={{ opacity: 0 }}
// // //                 animate={{ opacity: 1 }}
// // //                 transition={{ delay: 0.8, duration: 1 }}
// // //                 className='text-slate-400 font-medium leading-relaxed mx-auto xl:mx-0'
// // //                 style={{
// // //                   fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
// // //                   maxWidth: "min(100%, 42rem)",
// // //                   marginBottom: "clamp(1.5rem, 4vh, 2.5rem)",
// // //                 }}
// // //               >
// // //                 We merge artistic vision with engineering precision to build
// // //                 immersive, high-performance web interfaces.
// // //               </motion.p>

// // //               {/* BUTTONS */}
// // //               <motion.div
// // //                 initial={{ opacity: 0, y: 20 }}
// // //                 animate={{ opacity: 1, y: 0 }}
// // //                 transition={{ delay: 1, duration: 0.5 }}
// // //                 className='flex flex-col sm:flex-row items-center justify-center xl:justify-start'
// // //                 style={{ gap: "clamp(0.75rem, 2vw, 1rem)" }}
// // //               >
// // //                 <button
// // //                   className='group relative bg-white text-black font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-200 w-full sm:w-auto'
// // //                   style={{
// // //                     padding:
// // //                       "clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)",
// // //                     fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
// // //                   }}
// // //                 >
// // //                   <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
// // //                   <span
// // //                     className='relative z-10 flex items-center justify-center'
// // //                     style={{ gap: "clamp(0.25rem, 1vw, 0.5rem)" }}
// // //                   >
// // //                     Start Project <ArrowRight size={18} />
// // //                   </span>
// // //                 </button>

// // //                 <button
// // //                   className='text-white font-medium rounded-full border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center backdrop-blur-sm w-full sm:w-auto'
// // //                   style={{
// // //                     padding:
// // //                       "clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)",
// // //                     fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
// // //                     gap: "clamp(0.25rem, 1vw, 0.5rem)",
// // //                   }}
// // //                 >
// // //                   <Layers size={18} className='text-fuchsia-400' />
// // //                   View Work
// // //                 </button>
// // //               </motion.div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {/* BOTTOM: DASHBOARD FOOTER */}
// // //         <div className='relative z-30 shrink-0 mt-8 xl:mt-24'>
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 40 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 1.2, duration: 0.8 }}
// // //             className='w-full mx-auto'
// // //             style={{ maxWidth: "min(80rem, 100%)" }}
// // //           >
// // //             <div className='grid grid-cols-1 sm:grid-cols-2 bg-[#0a0718]/60 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl'>
// // //               <FeatureCard
// // //                 title='High Performance'
// // //                 subtitle='Next.js 14 / Rust / Wasm'
// // //                 icon={Zap}
// // //                 colorClass='text-cyan-400'
// // //                 delay={1.3}
// // //               />
// // //               <FeatureCard
// // //                 title='Future Proof'
// // //                 subtitle='Scalable Architecture'
// // //                 icon={Cpu}
// // //                 colorClass='text-fuchsia-400'
// // //                 delay={1.5}
// // //               />
// // //             </div>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default Hero;

// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";
// // import { useInView } from "react-intersection-observer";
// // import { InteractiveGlobe } from "./InteractiveGlobe";
// // import ResonantBackground from "./ResonantBackground";
// // import { ArrowRight, Layers, Cpu, Zap } from "lucide-react";

// // // --- HELPERS ---

// // const GrainOverlay = () => (
// //   <div className='pointer-events-none absolute inset-0 z-0 opacity-20 mix-blend-overlay'>
// //     <div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] brightness-100 contrast-150' />
// //   </div>
// // );

// // const StaggerText = ({
// //   children,
// //   delay = 0,
// // }: {
// //   children: React.ReactNode;
// //   delay?: number;
// // }) => {
// //   return (
// //     <motion.div
// //       initial='hidden'
// //       animate='visible'
// //       variants={{
// //         hidden: { opacity: 0 },
// //         visible: {
// //           opacity: 1,
// //           transition: { staggerChildren: 0.1, delayChildren: delay },
// //         },
// //       }}
// //     >
// //       {children}
// //     </motion.div>
// //   );
// // };

// // const Word = ({
// //   children,
// //   className,
// // }: {
// //   children: string;
// //   className?: string;
// // }) => {
// //   return (
// //     <span
// //       className={`inline-block whitespace-nowrap overflow-hidden pb-3 ${className}`}
// //     >
// //       <motion.span
// //         className='inline-block'
// //         variants={{
// //           hidden: { y: "100%" },
// //           visible: {
// //             y: 0,
// //             transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
// //           },
// //         }}
// //       >
// //         {children}
// //       </motion.span>
// //     </span>
// //   );
// // };

// // // --- COMPONENT: Snake Beam ---
// // const SnakeBeam = ({ colorClass }: { colorClass: string }) => {
// //   const isCyan = colorClass.includes("cyan");
// //   return (
// //     <div className='absolute bottom-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden'>
// //       <motion.div
// //         className={`h-full w-24 bg-gradient-to-r from-transparent ${isCyan ? "via-cyan-400" : "via-fuchsia-400"} to-transparent blur-[1px]`}
// //         initial={{ x: "-100%" }}
// //         animate={{ x: "400%" }}
// //         transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
// //       />
// //     </div>
// //   );
// // };

// // // --- COMPONENT: Feature HUD Card ---
// // const FeatureCard = ({
// //   title,
// //   subtitle,
// //   icon: Icon,
// //   colorClass,
// //   delay,
// // }: any) => {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 20 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       viewport={{ once: true }}
// //       transition={{ delay, duration: 0.6 }}
// //       className='relative flex-1 group'
// //     >
// //       <div className='relative h-full p-3 sm:p-4 lg:p-5 bg-white/[0.03] hover:bg-white/[0.06] border-r border-white/5 last:border-r-0 transition-colors duration-300'>
// //         <div className='flex flex-col h-full justify-center min-h-[60px] sm:min-h-0'>
// //           <div className='flex items-center justify-between gap-2'>
// //             <div className='flex-1 min-w-0'>
// //               <h3
// //                 className={`text-base sm:text-lg lg:text-xl font-bold tracking-tight ${colorClass} truncate`}
// //               >
// //                 {title}
// //               </h3>
// //               <p className='text-[10px] lg:text-xs font-medium text-slate-400 truncate'>
// //                 {subtitle}
// //               </p>
// //             </div>
// //             <div
// //               className={`p-1.5 lg:p-2 rounded-lg bg-white/5 ${colorClass} bg-opacity-10 flex-shrink-0`}
// //             >
// //               <Icon size={16} className='lg:w-5 lg:h-5' />
// //             </div>
// //           </div>
// //         </div>
// //         <SnakeBeam colorClass={colorClass} />
// //       </div>
// //     </motion.div>
// //   );
// // };

// // // --- MAIN HERO COMPONENT ---
// // const Hero = () => {
// //   const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

// //   return (
// //     <section
// //       ref={ref}
// //       className='relative w-full flex flex-col bg-[#100b26] text-white overflow-x-hidden'
// //       style={{
// //         minHeight: "100vh",
// //       }}
// //     >
// //       {/* --- BACKGROUND LAYERS --- */}
// //       <GrainOverlay />
// //       <div className='absolute inset-0 z-0'>
// //         <ResonantBackground />
// //         <div className='absolute inset-0 bg-[#100b26]/40 z-0 pointer-events-none' />
// //         <div className='absolute bottom-0 left-0 w-full h-32 sm:h-48 lg:h-64 bg-gradient-to-t from-[#100b26] to-transparent z-10 pointer-events-none' />
// //       </div>

// //       {/* --- MAIN LAYOUT --- */}
// //       <div
// //         className='relative z-20 w-full h-full flex flex-col'
// //         style={{
// //           maxWidth: "min(1400px, 95vw)",
// //           margin: "0 auto",
// //           padding: "0 clamp(1rem, 3vw, 2rem) 7rem clamp(1rem, 3vw, 2rem)",
// //         }}
// //       >
// //         {/* TOP SPACER */}
// //         <div className='hidden xl:block shrink-0 h-24' />
// //         <div className='block xl:hidden shrink-0 h-2' />

// //         {/* MIDDLE SECTION: CONTENT */}
// //         <div className='flex-grow flex flex-col justify-start lg:justify-center'>
// //           {/* GAP SETTINGS:
// //              Mobile: gap-6 (24px) - Minimal gap.
// //              Tablet (sm): gap-32 (128px) - Aggressive gap for Tab S4.
// //              Desktop (xl): gap-8.
// //           */}
// //           <div className='flex flex-col xl:grid xl:grid-cols-12 items-center w-full gap-6 sm:gap-32 md:gap-24 xl:gap-8'>
// //             {/* ITEM 1: GLOBE */}
// //             <div className='w-full xl:col-span-5 xl:order-2 relative flex flex-col items-center justify-center'>
// //               <div className='relative w-full flex items-center justify-center'>
// //                 {/* SAFE COMPROMISE MOBILE MARGIN: -mt-6
// //                    Using -mt-6 for the base mobile style.
// //                 */}
// //                 <div className='relative w-full h-[320px] sm:h-[400px] lg:h-[550px] -mt-6 sm:mt-0'>
// //                   {/* Glow Effect */}
// //                   <div
// //                     className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 blur-[60px] lg:blur-[80px] rounded-full'
// //                     style={{
// //                       width: "clamp(180px, 30vw, 350px)",
// //                       height: "clamp(180px, 30vw, 350px)",
// //                     }}
// //                   />

// //                   <motion.div
// //                     initial={{ opacity: 0, scale: 0.8 }}
// //                     animate={{ opacity: 1, scale: 1 }}
// //                     transition={{ duration: 1.5, delay: 0.2 }}
// //                     className='relative z-10 w-full h-full'
// //                   >
// //                     <InteractiveGlobe />
// //                   </motion.div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* ITEM 2: TYPOGRAPHY */}
// //             <div className='w-full xl:col-span-7 xl:order-1 relative z-20 text-center xl:text-left mt-0 sm:mt-24 md:mt-20 xl:mt-0'>
// //               <h1
// //                 className='font-black tracking-tighter leading-[0.9] text-white mb-4 sm:mb-6'
// //                 style={{
// //                   fontSize: "clamp(2.5rem, 5vw + 1rem, 7rem)",
// //                   marginBottom: "clamp(1rem, 3vh, 2rem)",
// //                 }}
// //               >
// //                 <StaggerText delay={0.3}>
// //                   <div
// //                     className='flex flex-wrap justify-center xl:justify-start'
// //                     style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
// //                   >
// //                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400'>
// //                       Crafting
// //                     </Word>
// //                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400'>
// //                       Digital
// //                     </Word>
// //                   </div>
// //                   <div
// //                     className='flex flex-wrap justify-center xl:justify-start'
// //                     style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
// //                   >
// //                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 via-cyan-400 to-fuchsia-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]'>
// //                       Experiences
// //                     </Word>
// //                   </div>
// //                 </StaggerText>
// //               </h1>

// //               <motion.p
// //                 initial={{ opacity: 0 }}
// //                 animate={{ opacity: 1 }}
// //                 transition={{ delay: 0.8, duration: 1 }}
// //                 className='text-slate-400 font-medium leading-relaxed mx-auto xl:mx-0'
// //                 style={{
// //                   fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
// //                   maxWidth: "min(100%, 42rem)",
// //                   marginBottom: "clamp(1.5rem, 4vh, 2.5rem)",
// //                 }}
// //               >
// //                 We merge artistic vision with engineering precision to build
// //                 immersive, high-performance web interfaces.
// //               </motion.p>

// //               {/* BUTTONS */}
// //               <motion.div
// //                 initial={{ opacity: 0, y: 20 }}
// //                 animate={{ opacity: 1, y: 0 }}
// //                 transition={{ delay: 1, duration: 0.5 }}
// //                 className='flex flex-col sm:flex-row items-center justify-center xl:justify-start'
// //                 style={{ gap: "clamp(0.75rem, 2vw, 1rem)" }}
// //               >
// //                 <button
// //                   className='group relative bg-white text-black font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-200 w-full sm:w-auto'
// //                   style={{
// //                     padding:
// //                       "clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)",
// //                     fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
// //                   }}
// //                 >
// //                   <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
// //                   <span
// //                     className='relative z-10 flex items-center justify-center'
// //                     style={{ gap: "clamp(0.25rem, 1vw, 0.5rem)" }}
// //                   >
// //                     Start Project <ArrowRight size={18} />
// //                   </span>
// //                 </button>

// //                 <button
// //                   className='text-white font-medium rounded-full border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center backdrop-blur-sm w-full sm:w-auto'
// //                   style={{
// //                     padding:
// //                       "clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)",
// //                     fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
// //                     gap: "clamp(0.25rem, 1vw, 0.5rem)",
// //                   }}
// //                 >
// //                   <Layers size={18} className='text-fuchsia-400' />
// //                   View Work
// //                 </button>
// //               </motion.div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* BOTTOM: DASHBOARD FOOTER */}
// //         <div className='relative z-30 shrink-0 mt-8 xl:mt-24'>
// //           <motion.div
// //             initial={{ opacity: 0, y: 40 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 1.2, duration: 0.8 }}
// //             className='w-full mx-auto'
// //             style={{ maxWidth: "min(80rem, 100%)" }}
// //           >
// //             <div className='grid grid-cols-1 sm:grid-cols-2 bg-[#0a0718]/60 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl'>
// //               <FeatureCard
// //                 title='High Performance'
// //                 subtitle='Next.js 14 / Rust / Wasm'
// //                 icon={Zap}
// //                 colorClass='text-cyan-400'
// //                 delay={1.3}
// //               />
// //               <FeatureCard
// //                 title='Future Proof'
// //                 subtitle='Scalable Architecture'
// //                 icon={Cpu}
// //                 colorClass='text-fuchsia-400'
// //                 delay={1.5}
// //               />
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Hero;

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import { InteractiveGlobe } from "./InteractiveGlobe";
// import ResonantBackground from "./ResonantBackground";
// import { ArrowRight, Layers, Cpu, Zap } from "lucide-react";

// // --- HELPERS ---

// const GrainOverlay = () => (
//   <div className='pointer-events-none absolute inset-0 z-0 opacity-20 mix-blend-overlay'>
//     <div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] brightness-100 contrast-150' />
//   </div>
// );

// const StaggerText = ({
//   children,
//   delay = 0,
// }: {
//   children: React.ReactNode;
//   delay?: number;
// }) => {
//   return (
//     <motion.div
//       initial='hidden'
//       animate='visible'
//       variants={{
//         hidden: { opacity: 0 },
//         visible: {
//           opacity: 1,
//           transition: { staggerChildren: 0.1, delayChildren: delay },
//         },
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

// const Word = ({
//   children,
//   className,
// }: {
//   children: string;
//   className?: string;
// }) => {
//   return (
//     <span
//       className={`inline-block whitespace-nowrap overflow-hidden pb-3 ${className}`}
//     >
//       <motion.span
//         className='inline-block'
//         variants={{
//           hidden: { y: "100%" },
//           visible: {
//             y: 0,
//             transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
//           },
//         }}
//       >
//         {children}
//       </motion.span>
//     </span>
//   );
// };

// // --- COMPONENT: Snake Beam ---
// const SnakeBeam = ({ colorClass }: { colorClass: string }) => {
//   const isCyan = colorClass.includes("cyan");
//   return (
//     <div className='absolute bottom-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden'>
//       <motion.div
//         className={`h-full w-24 bg-gradient-to-r from-transparent ${isCyan ? "via-cyan-400" : "via-fuchsia-400"} to-transparent blur-[1px]`}
//         initial={{ x: "-100%" }}
//         animate={{ x: "400%" }}
//         transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
//       />
//     </div>
//   );
// };

// // --- COMPONENT: Feature HUD Card ---
// const FeatureCard = ({
//   title,
//   subtitle,
//   icon: Icon,
//   colorClass,
//   delay,
// }: any) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay, duration: 0.6 }}
//       className='relative flex-1 group'
//     >
//       <div className='relative h-full p-3 sm:p-4 lg:p-5 bg-white/[0.03] hover:bg-white/[0.06] border-r border-white/5 last:border-r-0 transition-colors duration-300'>
//         <div className='flex flex-col h-full justify-center min-h-[60px] sm:min-h-0'>
//           <div className='flex items-center justify-between gap-2'>
//             <div className='flex-1 min-w-0'>
//               <h3
//                 className={`text-base sm:text-lg lg:text-xl font-bold tracking-tight ${colorClass} truncate`}
//               >
//                 {title}
//               </h3>
//               <p className='text-[10px] lg:text-xs font-medium text-slate-400 truncate'>
//                 {subtitle}
//               </p>
//             </div>
//             <div
//               className={`p-1.5 lg:p-2 rounded-lg bg-white/5 ${colorClass} bg-opacity-10 flex-shrink-0`}
//             >
//               <Icon size={16} className='lg:w-5 lg:h-5' />
//             </div>
//           </div>
//         </div>
//         <SnakeBeam colorClass={colorClass} />
//       </div>
//     </motion.div>
//   );
// };

// // --- MAIN HERO COMPONENT ---
// const Hero = () => {
//   const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

//   return (
//     <section
//       ref={ref}
//       className='relative w-full flex flex-col bg-[#100b26] text-white overflow-x-hidden'
//       style={{
//         minHeight: "100vh",
//       }}
//     >
//       {/* --- BACKGROUND LAYERS --- */}
//       <GrainOverlay />
//       <div className='absolute inset-0 z-0'>
//         <ResonantBackground />
//         <div className='absolute inset-0 bg-[#100b26]/40 z-0 pointer-events-none' />
//         <div className='absolute bottom-0 left-0 w-full h-32 sm:h-48 lg:h-64 bg-gradient-to-t from-[#100b26] to-transparent z-10 pointer-events-none' />
//       </div>

//       {/* --- MAIN LAYOUT --- */}
//       <div
//         className='relative z-20 w-full h-full flex flex-col'
//         style={{
//           maxWidth: "min(1400px, 95vw)",
//           margin: "0 auto",
//           padding: "0 clamp(1rem, 3vw, 2rem) 7rem clamp(1rem, 3vw, 2rem)",
//         }}
//       >
//         {/* TOP SPACER */}
//         <div className='hidden xl:block shrink-0 h-24' />
//         <div className='block xl:hidden shrink-0 h-2' />

//         {/* MIDDLE SECTION: CONTENT */}
//         <div className='flex-grow flex flex-col justify-start lg:justify-center'>
//           {/* GAP SETTINGS:
//              Mobile: gap-6 (24px) - Minimal gap.
//              Tablet (sm): gap-32 (128px) - Aggressive gap for Tab S4.
//              Desktop (xl): gap-8.
//           */}
//           <div className='flex flex-col xl:grid xl:grid-cols-12 items-center w-full gap-6 sm:gap-32 md:gap-24 xl:gap-8'>
//             {/* ITEM 1: GLOBE */}
//             <div className='w-full xl:col-span-5 xl:order-2 relative flex flex-col items-center justify-center'>
//               <div className='relative w-full flex items-center justify-center'>
//                 {/* Globe Position:
//                    Mobile: -mt-6 (Compromise lift)
//                    Tablet: sm:mt-0
//                    Desktop (XL): xl:-mt-12 (Pulls the globe up for desktop viewing)
//                 */}
//                 <div className='relative w-full h-[320px] sm:h-[400px] lg:h-[550px] -mt-6 sm:mt-0 xl:-mt-12'>
//                   {/* Glow Effect */}
//                   <div
//                     className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 blur-[60px] lg:blur-[80px] rounded-full'
//                     style={{
//                       width: "clamp(180px, 30vw, 350px)",
//                       height: "clamp(180px, 30vw, 350px)",
//                     }}
//                   />

//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 1.5, delay: 0.2 }}
//                     className='relative z-10 w-full h-full'
//                   >
//                     <InteractiveGlobe />
//                   </motion.div>
//                 </div>
//               </div>
//             </div>

//             {/* ITEM 2: TYPOGRAPHY */}
//             <div className='w-full xl:col-span-7 xl:order-1 relative z-20 text-center xl:text-left mt-0 sm:mt-24 md:mt-20 xl:mt-0'>
//               <h1
//                 className='font-black tracking-tighter leading-[0.9] text-white mb-4 sm:mb-6'
//                 style={{
//                   fontSize: "clamp(2.5rem, 5vw + 1rem, 7rem)",
//                   marginBottom: "clamp(1rem, 3vh, 2rem)",
//                 }}
//               >
//                 <StaggerText delay={0.3}>
//                   <div
//                     className='flex flex-wrap justify-center xl:justify-start'
//                     style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
//                   >
//                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400'>
//                       Crafting
//                     </Word>
//                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400'>
//                       Digital
//                     </Word>
//                   </div>
//                   <div
//                     className='flex flex-wrap justify-center xl:justify-start'
//                     style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
//                   >
//                     <Word className='text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 via-cyan-400 to-fuchsia-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]'>
//                       Experiences
//                     </Word>
//                   </div>
//                 </StaggerText>
//               </h1>

//               <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.8, duration: 1 }}
//                 className='text-slate-400 font-medium leading-relaxed mx-auto xl:mx-0'
//                 style={{
//                   fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
//                   maxWidth: "min(100%, 42rem)",
//                   marginBottom: "clamp(1.5rem, 4vh, 2.5rem)",
//                 }}
//               >
//                 We merge artistic vision with engineering precision to build
//                 immersive, high-performance web interfaces.
//               </motion.p>

//               {/* BUTTONS */}
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1, duration: 0.5 }}
//                 className='flex flex-col sm:flex-row items-center justify-center xl:justify-start'
//                 style={{ gap: "clamp(0.75rem, 2vw, 1rem)" }}
//               >
//                 <button
//                   className='group relative bg-white text-black font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-200 w-full sm:w-auto'
//                   style={{
//                     padding:
//                       "clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)",
//                     fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
//                   }}
//                 >
//                   <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
//                   <span
//                     className='relative z-10 flex items-center justify-center'
//                     style={{ gap: "clamp(0.25rem, 1vw, 0.5rem)" }}
//                   >
//                     Start Project <ArrowRight size={18} />
//                   </span>
//                 </button>

//                 <button
//                   className='text-white font-medium rounded-full border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center backdrop-blur-sm w-full sm:w-auto'
//                   style={{
//                     padding:
//                       "clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)",
//                     fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
//                     gap: "clamp(0.25rem, 1vw, 0.5rem)",
//                   }}
//                 >
//                   <Layers size={18} className='text-fuchsia-400' />
//                   View Work
//                 </button>
//               </motion.div>
//             </div>
//           </div>
//         </div>

//         {/* BOTTOM: DASHBOARD FOOTER */}
//         <div className='relative z-30 shrink-0 mt-8 xl:mt-24'>
//           <motion.div
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2, duration: 0.8 }}
//             className='w-full mx-auto'
//             style={{ maxWidth: "min(80rem, 100%)" }}
//           >
//             <div className='grid grid-cols-1 sm:grid-cols-2 bg-[#0a0718]/60 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl'>
//               <FeatureCard
//                 title='High Performance'
//                 subtitle='Next.js 14 / Rust / Wasm'
//                 icon={Zap}
//                 colorClass='text-cyan-400'
//                 delay={1.3}
//               />
//               <FeatureCard
//                 title='Future Proof'
//                 subtitle='Scalable Architecture'
//                 icon={Cpu}
//                 colorClass='text-fuchsia-400'
//                 delay={1.5}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { InteractiveGlobe } from "./InteractiveGlobe";
import ResonantBackground from "./ResonantBackground";
import { ArrowRight, Layers, Cpu, Zap } from "lucide-react";

// --- HELPERS ---

const GrainOverlay = () => (
  <div className='pointer-events-none absolute inset-0 z-0 opacity-20 mix-blend-overlay'>
    <div className='absolute inset-0 bg-[url("https://grainy-gradients.vercel.app/noise.svg")] brightness-100 contrast-150' />
  </div>
);

const StaggerText = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  return (
    <motion.div
      initial='hidden'
      animate='visible'
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.1, delayChildren: delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

const Word = ({
  children,
  className,
}: {
  children: string;
  className?: string;
}) => {
  return (
    <span
      className={`inline-block whitespace-nowrap overflow-hidden pb-3 ${className}`}
    >
      <motion.span
        className='inline-block'
        variants={{
          hidden: { y: "100%" },
          visible: {
            y: 0,
            transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
          },
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

// --- COMPONENT: Snake Beam ---
const SnakeBeam = ({ colorClass }: { colorClass: string }) => {
  const isCyan = colorClass.includes("cyan");
  return (
    <div className='absolute bottom-0 left-0 w-full h-[1px] bg-white/5 overflow-hidden'>
      <motion.div
        className={`h-full w-24 bg-gradient-to-r from-transparent ${isCyan ? "via-cyan-400" : "via-fuchsia-400"} to-transparent blur-[1px]`}
        initial={{ x: "-100%" }}
        animate={{ x: "400%" }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
      />
    </div>
  );
};

// --- COMPONENT: Feature HUD Card ---
const FeatureCard = ({
  title,
  subtitle,
  icon: Icon,
  colorClass,
  delay,
}: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className='relative flex-1 group'
    >
      <div className='relative h-full p-3 sm:p-4 lg:p-5 bg-white/[0.03] hover:bg-white/[0.06] border-r border-white/5 last:border-r-0 transition-colors duration-300'>
        <div className='flex flex-col h-full justify-center min-h-[60px] sm:min-h-0'>
          <div className='flex items-center justify-between gap-2'>
            <div className='flex-1 min-w-0'>
              <h3
                className={`text-base sm:text-lg lg:text-xl font-bold tracking-tight ${colorClass} truncate`}
              >
                {title}
              </h3>
              <p className='text-[10px] lg:text-xs font-medium text-slate-400 truncate'>
                {subtitle}
              </p>
            </div>
            <div
              className={`p-1.5 lg:p-2 rounded-lg bg-white/5 ${colorClass} bg-opacity-10 flex-shrink-0`}
            >
              <Icon size={16} className='lg:w-5 lg:h-5' />
            </div>
          </div>
        </div>
        <SnakeBeam colorClass={colorClass} />
      </div>
    </motion.div>
  );
};

// --- MAIN HERO COMPONENT ---
const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      ref={ref}
      className='relative w-full flex flex-col bg-[#100b26] text-white overflow-x-hidden'
      style={{
        minHeight: "100vh",
      }}
    >
      {/* --- BACKGROUND LAYERS --- */}
      <GrainOverlay />
      <div className='absolute inset-0 z-0'>
        <ResonantBackground />
        <div className='absolute inset-0 bg-[#100b26]/40 z-0 pointer-events-none' />
        <div className='absolute bottom-0 left-0 w-full h-32 sm:h-48 lg:h-64 bg-gradient-to-t from-[#100b26] to-transparent z-10 pointer-events-none' />
      </div>

      {/* --- MAIN LAYOUT --- */}
      <div
        className='relative z-20 w-full h-full flex flex-col'
        style={{
          maxWidth: "min(1400px, 95vw)",
          margin: "0 auto",
          padding: "0 clamp(1rem, 3vw, 2rem) 7rem clamp(1rem, 3vw, 2rem)",
        }}
      >
        {/* TOP SPACER */}
        <div className='hidden xl:block shrink-0 h-24' />
        <div className='block xl:hidden shrink-0 h-2' />

        {/* MIDDLE SECTION: CONTENT */}
        <div className='flex-grow flex flex-col justify-start lg:justify-center'>
          {/* GAP SETTINGS:
             Mobile: gap-6 (24px) - Minimal gap.
             Tablet (sm): gap-32 (128px) - Aggressive gap for Tab S4.
             Desktop (xl): gap-8.
          */}
          <div className='flex flex-col xl:grid xl:grid-cols-12 items-center w-full gap-6 sm:gap-32 md:gap-24 xl:gap-8'>
            {/* ITEM 1: GLOBE */}
            <div className='w-full xl:col-span-5 xl:order-2 relative flex flex-col items-center justify-center'>
              <div className='relative w-full flex items-center justify-center'>
                {/* Globe Position:
                   Mobile: -mt-6 (Compromise lift)
                   Tablet: sm:mt-0 md:mt-8 (Moves globe down for iPad Pro)
                   Desktop (XL): xl:-mt-12 (Pulls the globe up for desktop viewing)
                */}
                <div className='relative w-full h-[320px] sm:h-[400px] lg:h-[550px] -mt-6 sm:mt-0 md:mt-12 xl:-mt-12'>
                  {/* Glow Effect */}
                  <div
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-cyan-500/20 blur-[60px] lg:blur-[80px] rounded-full'
                    style={{
                      width: "clamp(180px, 30vw, 350px)",
                      height: "clamp(180px, 30vw, 350px)",
                    }}
                  />

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, delay: 0.2 }}
                    className='relative z-10 w-full h-full'
                  >
                    <InteractiveGlobe />
                  </motion.div>
                </div>
              </div>
            </div>

            {/* ITEM 2: TYPOGRAPHY */}
            <div className='w-full xl:col-span-7 xl:order-1 relative z-20 text-center xl:text-left mt-0 sm:mt-24 md:mt-8 xl:mt-0'>
              <h1
                className='font-black tracking-tighter leading-[0.9] text-white mb-4 sm:mb-6'
                style={{
                  fontSize: "clamp(2.5rem, 5vw + 1rem, 7rem)",
                  marginBottom: "clamp(1rem, 3vh, 2rem)",
                }}
              >
                <StaggerText delay={0.3}>
                  <div
                    className='flex flex-wrap justify-center xl:justify-start'
                    style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
                  >
                    <Word className='text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400'>
                      Crafting
                    </Word>
                    <Word className='text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-400'>
                      Digital
                    </Word>
                  </div>
                  <div
                    className='flex flex-wrap justify-center xl:justify-start'
                    style={{ gap: "clamp(0.5rem, 1.5vw, 1rem)" }}
                  >
                    <Word className='text-transparent bg-clip-text bg-gradient-to-b from-cyan-200 via-cyan-400 to-fuchsia-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.3)]'>
                      Experiences
                    </Word>
                  </div>
                </StaggerText>
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 1 }}
                className='text-slate-400 font-medium leading-relaxed mx-auto xl:mx-0'
                style={{
                  fontSize: "clamp(0.875rem, 1.5vw, 1.25rem)",
                  maxWidth: "min(100%, 42rem)",
                  marginBottom: "clamp(1.5rem, 4vh, 2.5rem)",
                }}
              >
                We merge artistic vision with engineering precision to build
                immersive, high-performance web interfaces.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className='flex flex-col sm:flex-row items-center justify-center xl:justify-start'
                style={{ gap: "clamp(0.75rem, 2vw, 1rem)" }}
              >
                <button
                  className='group relative bg-white text-black font-bold rounded-full overflow-hidden hover:scale-105 transition-transform duration-200 w-full sm:w-auto'
                  style={{
                    padding:
                      "clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)",
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                  }}
                >
                  <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                  <span
                    className='relative z-10 flex items-center justify-center'
                    style={{ gap: "clamp(0.25rem, 1vw, 0.5rem)" }}
                  >
                    Start Project <ArrowRight size={18} />
                  </span>
                </button>

                <button
                  className='text-white font-medium rounded-full border border-white/20 hover:bg-white/5 hover:border-white/40 transition-all flex items-center justify-center backdrop-blur-sm w-full sm:w-auto'
                  style={{
                    padding:
                      "clamp(0.625rem, 1.5vw, 0.875rem) clamp(1.25rem, 3vw, 1.75rem)",
                    fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                    gap: "clamp(0.25rem, 1vw, 0.5rem)",
                  }}
                >
                  <Layers size={18} className='text-fuchsia-400' />
                  View Work
                </button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* BOTTOM: DASHBOARD FOOTER */}
        {/* FIX: Changed xl:mt-24 to xl:mt-12 to bring the footer up */}
        <div className='relative z-30 shrink-0 mt-8 md:mt-16 xl:mt-12'>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className='w-full mx-auto'
            style={{ maxWidth: "min(80rem, 100%)" }}
          >
            <div className='grid grid-cols-1 sm:grid-cols-2 bg-[#0a0718]/60 backdrop-blur-xl border border-white/10 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl'>
              <FeatureCard
                title='High Performance'
                subtitle='Next.js 14 / Rust / Wasm'
                icon={Zap}
                colorClass='text-cyan-400'
                delay={1.3}
              />
              <FeatureCard
                title='Future Proof'
                subtitle='Scalable Architecture'
                icon={Cpu}
                colorClass='text-fuchsia-400'
                delay={1.5}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
