// // // // // // "use client";

// // // // // // import React, { useState, useEffect, useCallback } from "react";
// // // // // // import {
// // // // // //   motion,
// // // // // //   AnimatePresence,
// // // // // //   useReducedMotion,
// // // // // //   Transition,
// // // // // //   useMotionValue,
// // // // // //   useTransform,
// // // // // //   useSpring,
// // // // // // } from "framer-motion";
// // // // // // import Image from "next/image";
// // // // // // import {
// // // // // //   Home,
// // // // // //   User,
// // // // // //   Briefcase,
// // // // // //   Mail,
// // // // // //   Command,
// // // // // //   X,
// // // // // //   ArrowRight,
// // // // // // } from "lucide-react";

// // // // // // // --- DATA & CONFIG ---
// // // // // // const navItems = [
// // // // // //   { id: "home", name: "Home", href: "/", icon: Home },
// // // // // //   { id: "about", name: "About", href: "/#about", icon: User },
// // // // // //   { id: "work", name: "Work", href: "/#work", icon: Briefcase },
// // // // // //   { id: "contact", name: "Contact", href: "/contact", icon: Mail },
// // // // // // ];

// // // // // // const springTransitionProps: Omit<Transition, "delay"> = {
// // // // // //   type: "spring",
// // // // // //   stiffness: 200,
// // // // // //   damping: 25,
// // // // // //   mass: 0.8,
// // // // // // };

// // // // // // const getHeaderInitialState = (shouldReduce: boolean) =>
// // // // // //   shouldReduce ? { opacity: 0, y: 0 } : { y: -100, opacity: 0 };

// // // // // // const getHeaderAnimateState = (shouldReduce: boolean) =>
// // // // // //   shouldReduce ? { opacity: 1, y: 0 } : { y: 0, opacity: 1 };

// // // // // // // --- HOOKS ---
// // // // // // const useKbd = (callback: () => void) => {
// // // // // //   useEffect(() => {
// // // // // //     const handleKeyDown = (e: KeyboardEvent) => {
// // // // // //       if ((e.metaKey || e.ctrlKey) && e.key === "k") {
// // // // // //         e.preventDefault();
// // // // // //         callback();
// // // // // //       }
// // // // // //     };
// // // // // //     window.addEventListener("keydown", handleKeyDown);
// // // // // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // // // // //   }, [callback]);
// // // // // // };

// // // // // // const useScreenSize = () => {
// // // // // //   const [isXlOrLarger, setIsXlOrLarger] = useState(false);
// // // // // //   useEffect(() => {
// // // // // //     const checkScreenSize = () => {
// // // // // //       setIsXlOrLarger(window.innerWidth >= 1280);
// // // // // //     };
// // // // // //     checkScreenSize();
// // // // // //     window.addEventListener("resize", checkScreenSize);
// // // // // //     return () => window.removeEventListener("resize", checkScreenSize);
// // // // // //   }, []);
// // // // // //   return isXlOrLarger;
// // // // // // };

// // // // // // // --- UI COMPONENTS ---
// // // // // // const CommandMenu = ({
// // // // // //   isOpen,
// // // // // //   setIsOpen,
// // // // // //   onLinkClick,
// // // // // // }: {
// // // // // //   isOpen: boolean;
// // // // // //   setIsOpen: (open: boolean) => void;
// // // // // //   onLinkClick: (href: string) => void;
// // // // // // }) => {
// // // // // //   const shouldReduceMotion = useReducedMotion() ?? false;
// // // // // //   const commands = navItems.map((item) => ({ ...item, type: "Navigate" }));

// // // // // //   return (
// // // // // //     <AnimatePresence>
// // // // // //       {isOpen && (
// // // // // //         <motion.div
// // // // // //           initial={{ opacity: 0 }}
// // // // // //           animate={{ opacity: 1 }}
// // // // // //           exit={{ opacity: 0 }}
// // // // // //           transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
// // // // // //           onClick={() => setIsOpen(false)}
// // // // // //           className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-start pt-24 p-4'
// // // // // //         >
// // // // // //           <motion.div
// // // // // //             initial={
// // // // // //               shouldReduceMotion
// // // // // //                 ? { opacity: 0, y: 0 }
// // // // // //                 : { scale: 0.95, y: -20 }
// // // // // //             }
// // // // // //             animate={
// // // // // //               shouldReduceMotion ? { opacity: 1, y: 0 } : { scale: 1, y: 0 }
// // // // // //             }
// // // // // //             exit={
// // // // // //               shouldReduceMotion
// // // // // //                 ? { opacity: 0, y: 0 }
// // // // // //                 : { scale: 0.95, opacity: 0 }
// // // // // //             }
// // // // // //             transition={
// // // // // //               shouldReduceMotion
// // // // // //                 ? { duration: 0.3 }
// // // // // //                 : { ...springTransitionProps, duration: 0.3 }
// // // // // //             }
// // // // // //             onClick={(e) => e.stopPropagation()}
// // // // // //             className='w-full max-w-lg bg-[#111316]/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl'
// // // // // //           >
// // // // // //             <div className='p-2'>
// // // // // //               <div className='flex justify-between items-center p-2 mb-1'>
// // // // // //                 <p className='text-sm text-white/60'>Navigation</p>
// // // // // //                 <button
// // // // // //                   onClick={() => setIsOpen(false)}
// // // // // //                   className='p-1 rounded-md hover:bg-white/10 transition-colors duration-200'
// // // // // //                 >
// // // // // //                   <X size={18} className='text-white/60' />
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //               {commands.map((item) => (
// // // // // //                 <div
// // // // // //                   key={item.name}
// // // // // //                   onClick={() => {
// // // // // //                     onLinkClick(item.href);
// // // // // //                     setIsOpen(false);
// // // // // //                   }}
// // // // // //                   className='group flex items-center justify-between p-3 text-white/80 hover:bg-white/5 hover:text-[#E7FF1A] rounded-lg cursor-pointer transition-colors duration-200'
// // // // // //                 >
// // // // // //                   <div className='flex items-center gap-4'>
// // // // // //                     <item.icon size={18} />
// // // // // //                     <span>{item.name}</span>
// // // // // //                   </div>
// // // // // //                   <ArrowRight
// // // // // //                     size={16}
// // // // // //                     className='text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
// // // // // //                   />
// // // // // //                 </div>
// // // // // //               ))}
// // // // // //             </div>
// // // // // //           </motion.div>
// // // // // //         </motion.div>
// // // // // //       )}
// // // // // //     </AnimatePresence>
// // // // // //   );
// // // // // // };

// // // // // // // --- Animated Logo Component ---
// // // // // // const AnimatedLogo = ({ onClick }: { onClick: () => void }) => {
// // // // // //   const shouldReduceMotion = useReducedMotion();
// // // // // //   const x = useMotionValue(0);
// // // // // //   const y = useMotionValue(0);

// // // // // //   const mouseXSpring = useSpring(x, { stiffness: 200, damping: 40 });
// // // // // //   const mouseYSpring = useSpring(y, { stiffness: 200, damping: 40 });

// // // // // //   const rotateX = useTransform(
// // // // // //     mouseYSpring,
// // // // // //     [-0.5, 0.5],
// // // // // //     ["12.5deg", "-12.5deg"]
// // // // // //   );
// // // // // //   const rotateY = useTransform(
// // // // // //     mouseXSpring,
// // // // // //     [-0.5, 0.5],
// // // // // //     ["-12.5deg", "12.5deg"]
// // // // // //   );

// // // // // //   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
// // // // // //     if (shouldReduceMotion) return;
// // // // // //     const rect = e.currentTarget.getBoundingClientRect();
// // // // // //     const width = rect.width;
// // // // // //     const height = rect.height;
// // // // // //     const mouseX = e.clientX - rect.left;
// // // // // //     const mouseY = e.clientY - rect.top;
// // // // // //     x.set(mouseX / width - 0.5);
// // // // // //     y.set(mouseY / height - 0.5);
// // // // // //   };

// // // // // //   const handleMouseLeave = () => {
// // // // // //     x.set(0);
// // // // // //     y.set(0);
// // // // // //   };

// // // // // //   return (
// // // // // //     <motion.div
// // // // // //       onClick={onClick}
// // // // // //       onMouseMove={handleMouseMove}
// // // // // //       onMouseLeave={handleMouseLeave}
// // // // // //       style={{
// // // // // //         rotateX,
// // // // // //         rotateY,
// // // // // //         transformStyle: "preserve-3d",
// // // // // //       }}
// // // // // //       className='relative h-24 w-56 cursor-pointer'
// // // // // //     >
// // // // // //       <div
// // // // // //         style={{ transform: "translateZ(8px)", transformStyle: "preserve-3d" }}
// // // // // //         className='absolute inset-0'
// // // // // //       >
// // // // // //         <Image
// // // // // //           src='/images/hono-logo.svg'
// // // // // //           alt='Hono Dev Studio Logo'
// // // // // //           fill
// // // // // //           priority
// // // // // //           className='object-contain'
// // // // // //           sizes='224px'
// // // // // //         />
// // // // // //       </div>
// // // // // //     </motion.div>
// // // // // //   );
// // // // // // };

// // // // // // // --- MAIN NAVBAR COMPONENT ---
// // // // // // export function Navbar() {
// // // // // //   const [isCommandMenuOpen, setCommandMenuOpen] = useState(false);
// // // // // //   const [scrolled, setScrolled] = useState(false);
// // // // // //   const shouldReduceMotion = useReducedMotion() ?? false;
// // // // // //   // Corrected the typo here
// // // // // //   const isXlOrLarger = useScreenSize();

// // // // // //   useKbd(() => setCommandMenuOpen(true));

// // // // // //   useEffect(() => {
// // // // // //     if (!isXlOrLarger) {
// // // // // //       setScrolled(false);
// // // // // //       return;
// // // // // //     }
// // // // // //     let ticking = false;
// // // // // //     const handleScroll = () => {
// // // // // //       if (!ticking) {
// // // // // //         requestAnimationFrame(() => {
// // // // // //           setScrolled(window.scrollY > 50);
// // // // // //           ticking = false;
// // // // // //         });
// // // // // //         ticking = true;
// // // // // //       }
// // // // // //     };
// // // // // //     window.addEventListener("scroll", handleScroll, { passive: true });
// // // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // // //   }, [isXlOrLarger]);

// // // // // //   const handleLinkClick = useCallback(
// // // // // //     (href: string) => {
// // // // // //       if (isCommandMenuOpen) setCommandMenuOpen(false);
// // // // // //       if (href === "/") {
// // // // // //         window.scrollTo({ top: 0, behavior: "smooth" });
// // // // // //         return;
// // // // // //       }
// // // // // //       if (href.startsWith("/#")) {
// // // // // //         const targetId = href.substring(2);
// // // // // //         const element = document.getElementById(targetId);
// // // // // //         if (element) {
// // // // // //           element.scrollIntoView({ behavior: "smooth" });
// // // // // //         }
// // // // // //       } else {
// // // // // //         window.location.href = href;
// // // // // //       }
// // // // // //     },
// // // // // //     [isCommandMenuOpen]
// // // // // //   );

// // // // // //   const headerTransition: Transition = shouldReduceMotion
// // // // // //     ? { duration: 0.3 }
// // // // // //     : { ...springTransitionProps, delay: 0.2 };

// // // // // //   return (
// // // // // //     <>
// // // // // //       <CommandMenu
// // // // // //         isOpen={isCommandMenuOpen}
// // // // // //         setIsOpen={setCommandMenuOpen}
// // // // // //         onLinkClick={handleLinkClick}
// // // // // //       />

// // // // // //       {isXlOrLarger && (
// // // // // //         <motion.header
// // // // // //           initial={getHeaderInitialState(shouldReduceMotion)}
// // // // // //           animate={getHeaderAnimateState(shouldReduceMotion)}
// // // // // //           transition={headerTransition}
// // // // // //           className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
// // // // // //             scrolled
// // // // // //               ? "bg-[#111316]/80 backdrop-blur-xl border-b border-white/10"
// // // // // //               : "bg-transparent"
// // // // // //           }`}
// // // // // //         >
// // // // // //           <div className='container mx-auto px-4 md:px-8'>
// // // // // //             <div className='flex items-center justify-between h-24'>
// // // // // //               <div style={{ perspective: "800px" }}>
// // // // // //                 <AnimatedLogo onClick={() => handleLinkClick("/")} />
// // // // // //               </div>

// // // // // //               <nav className='flex items-center space-x-8'>
// // // // // //                 {navItems.map((item, index) => {
// // // // // //                   const navButtonTransition: Transition = shouldReduceMotion
// // // // // //                     ? { duration: 0.3 }
// // // // // //                     : { ...springTransitionProps, delay: 0.3 + index * 0.1 };
// // // // // //                   return (
// // // // // //                     <motion.button
// // // // // //                       key={item.id}
// // // // // //                       onClick={() => handleLinkClick(item.href)}
// // // // // //                       className='relative text-white/80 hover:text-[#E7FF1A] transition-colors duration-200 font-medium px-3 py-2'
// // // // // //                       initial={
// // // // // //                         shouldReduceMotion
// // // // // //                           ? { opacity: 0, y: 0 }
// // // // // //                           : { opacity: 0, y: -20 }
// // // // // //                       }
// // // // // //                       animate={
// // // // // //                         shouldReduceMotion
// // // // // //                           ? { opacity: 1, y: 0 }
// // // // // //                           : { opacity: 1, y: 0 }
// // // // // //                       }
// // // // // //                       transition={navButtonTransition}
// // // // // //                       whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
// // // // // //                     >
// // // // // //                       <span className='relative z-10'>{item.name}</span>
// // // // // //                       {!shouldReduceMotion && (
// // // // // //                         <motion.div
// // // // // //                           className='absolute inset-0 bg-white/10 rounded-lg -z-10'
// // // // // //                           initial={{ scale: 0, opacity: 0 }}
// // // // // //                           whileHover={{ scale: 1, opacity: 1 }}
// // // // // //                           transition={{
// // // // // //                             type: "spring",
// // // // // //                             stiffness: 400,
// // // // // //                             damping: 25,
// // // // // //                             mass: 0.8,
// // // // // //                           }}
// // // // // //                         />
// // // // // //                       )}
// // // // // //                     </motion.button>
// // // // // //                   );
// // // // // //                 })}
// // // // // //               </nav>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </motion.header>
// // // // // //       )}

// // // // // //       {!isXlOrLarger && (
// // // // // //         <div className='fixed bottom-4 inset-x-4 z-30'>
// // // // // //           <motion.div
// // // // // //             initial={
// // // // // //               shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 100, opacity: 0 }
// // // // // //             }
// // // // // //             animate={
// // // // // //               shouldReduceMotion ? { opacity: 1, y: 0 } : { y: 0, opacity: 1 }
// // // // // //             }
// // // // // //             transition={
// // // // // //               shouldReduceMotion
// // // // // //                 ? { duration: 0.3 }
// // // // // //                 : { ...springTransitionProps, delay: 0.5 }
// // // // // //             }
// // // // // //             className='w-full h-16 bg-[#111316]/90 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-around shadow-2xl'
// // // // // //           >
// // // // // //             {navItems.slice(0, 3).map((item) => (
// // // // // //               <motion.button
// // // // // //                 key={item.href}
// // // // // //                 onClick={() => handleLinkClick(item.href)}
// // // // // //                 className='p-3 text-white/60 hover:text-[#E7FF1A] transition-colors duration-200'
// // // // // //                 aria-label={item.name}
// // // // // //                 whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
// // // // // //               >
// // // // // //                 <item.icon className='h-6 w-6' />
// // // // // //               </motion.button>
// // // // // //             ))}
// // // // // //             <motion.button
// // // // // //               onClick={() => setCommandMenuOpen(true)}
// // // // // //               className='p-3 text-white/60 hover:text-[#E7FF1A] transition-colors duration-200'
// // // // // //               aria-label='Open menu'
// // // // // //               whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
// // // // // //             >
// // // // // //               <Command className='h-6 w-6' />
// // // // // //             </motion.button>
// // // // // //           </motion.div>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </>
// // // // // //   );
// // // // // // }

// // // // // "use client";

// // // // // import React, { useState, useEffect, useCallback } from "react";
// // // // // import {
// // // // //   motion,
// // // // //   AnimatePresence,
// // // // //   useReducedMotion,
// // // // //   Transition,
// // // // //   useMotionValue,
// // // // //   useTransform,
// // // // //   useSpring,
// // // // // } from "framer-motion";
// // // // // import Image from "next/image";
// // // // // import {
// // // // //   Home,
// // // // //   User,
// // // // //   Briefcase,
// // // // //   Mail,
// // // // //   Command,
// // // // //   X,
// // // // //   ArrowRight,
// // // // // } from "lucide-react";

// // // // // // --- DATA & CONFIG ---
// // // // // const navItems = [
// // // // //   { id: "home", name: "Home", href: "/", icon: Home },
// // // // //   { id: "about", name: "About", href: "/#about", icon: User },
// // // // //   { id: "work", name: "Work", href: "/#work", icon: Briefcase },
// // // // //   { id: "contact", name: "Contact", href: "/contact", icon: Mail },
// // // // // ];

// // // // // const springTransitionProps: Omit<Transition, "delay"> = {
// // // // //   type: "spring",
// // // // //   stiffness: 200,
// // // // //   damping: 25,
// // // // //   mass: 0.8,
// // // // // };

// // // // // const getHeaderInitialState = (shouldReduce: boolean) =>
// // // // //   shouldReduce ? { opacity: 0, y: 0 } : { y: -100, opacity: 0 };

// // // // // const getHeaderAnimateState = (shouldReduce: boolean) =>
// // // // //   shouldReduce ? { opacity: 1, y: 0 } : { y: 0, opacity: 1 };

// // // // // // --- HOOKS ---
// // // // // const useKbd = (callback: () => void) => {
// // // // //   useEffect(() => {
// // // // //     const handleKeyDown = (e: KeyboardEvent) => {
// // // // //       if ((e.metaKey || e.ctrlKey) && e.key === "k") {
// // // // //         e.preventDefault();
// // // // //         callback();
// // // // //       }
// // // // //     };
// // // // //     window.addEventListener("keydown", handleKeyDown);
// // // // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // // // //   }, [callback]);
// // // // // };

// // // // // const useScreenSize = () => {
// // // // //   const [isXlOrLarger, setIsXlOrLarger] = useState(false);
// // // // //   useEffect(() => {
// // // // //     const checkScreenSize = () => {
// // // // //       setIsXlOrLarger(window.innerWidth >= 1280);
// // // // //     };
// // // // //     checkScreenSize();
// // // // //     window.addEventListener("resize", checkScreenSize);
// // // // //     return () => window.removeEventListener("resize", checkScreenSize);
// // // // //   }, []);
// // // // //   return isXlOrLarger;
// // // // // };

// // // // // // --- UI COMPONENTS ---
// // // // // const CommandMenu = ({
// // // // //   isOpen,
// // // // //   setIsOpen,
// // // // //   onLinkClick,
// // // // // }: {
// // // // //   isOpen: boolean;
// // // // //   setIsOpen: (open: boolean) => void;
// // // // //   onLinkClick: (href: string) => void;
// // // // // }) => {
// // // // //   const shouldReduceMotion = useReducedMotion() ?? false;
// // // // //   const commands = navItems.map((item) => ({ ...item, type: "Navigate" }));

// // // // //   return (
// // // // //     <AnimatePresence>
// // // // //       {isOpen && (
// // // // //         <motion.div
// // // // //           initial={{ opacity: 0 }}
// // // // //           animate={{ opacity: 1 }}
// // // // //           exit={{ opacity: 0 }}
// // // // //           transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
// // // // //           onClick={() => setIsOpen(false)}
// // // // //           className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-start pt-24 p-4'
// // // // //         >
// // // // //           <motion.div
// // // // //             initial={
// // // // //               shouldReduceMotion
// // // // //                 ? { opacity: 0, y: 0 }
// // // // //                 : { scale: 0.95, y: -20 }
// // // // //             }
// // // // //             animate={
// // // // //               shouldReduceMotion ? { opacity: 1, y: 0 } : { scale: 1, y: 0 }
// // // // //             }
// // // // //             exit={
// // // // //               shouldReduceMotion
// // // // //                 ? { opacity: 0, y: 0 }
// // // // //                 : { scale: 0.95, opacity: 0 }
// // // // //             }
// // // // //             transition={
// // // // //               shouldReduceMotion
// // // // //                 ? { duration: 0.3 }
// // // // //                 : { ...springTransitionProps, duration: 0.3 }
// // // // //             }
// // // // //             onClick={(e) => e.stopPropagation()}
// // // // //             className='w-full max-w-lg bg-[#111316]/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl'
// // // // //           >
// // // // //             <div className='p-2'>
// // // // //               <div className='flex justify-between items-center p-2 mb-1'>
// // // // //                 <p className='text-sm text-white/60'>Navigation</p>
// // // // //                 <button
// // // // //                   onClick={() => setIsOpen(false)}
// // // // //                   className='p-1 rounded-md hover:bg-white/10 transition-colors duration-200'
// // // // //                 >
// // // // //                   <X size={18} className='text-white/60' />
// // // // //                 </button>
// // // // //               </div>
// // // // //               {commands.map((item) => (
// // // // //                 <div
// // // // //                   key={item.name}
// // // // //                   onClick={() => {
// // // // //                     onLinkClick(item.href);
// // // // //                     setIsOpen(false);
// // // // //                   }}
// // // // //                   className='group flex items-center justify-between p-3 text-white/80 hover:bg-white/5 hover:text-[#E7FF1A] rounded-lg cursor-pointer transition-colors duration-200'
// // // // //                 >
// // // // //                   <div className='flex items-center gap-4'>
// // // // //                     <item.icon size={18} />
// // // // //                     <span>{item.name}</span>
// // // // //                   </div>
// // // // //                   <ArrowRight
// // // // //                     size={16}
// // // // //                     className='text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
// // // // //                   />
// // // // //                 </div>
// // // // //               ))}
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         </motion.div>
// // // // //       )}
// // // // //     </AnimatePresence>
// // // // //   );
// // // // // };

// // // // // // --- Animated Logo Component ---
// // // // // const AnimatedLogo = ({ onClick }: { onClick: () => void }) => {
// // // // //   const shouldReduceMotion = useReducedMotion();
// // // // //   const x = useMotionValue(0);
// // // // //   const y = useMotionValue(0);

// // // // //   const mouseXSpring = useSpring(x, { stiffness: 200, damping: 40 });
// // // // //   const mouseYSpring = useSpring(y, { stiffness: 200, damping: 40 });

// // // // //   const rotateX = useTransform(
// // // // //     mouseYSpring,
// // // // //     [-0.5, 0.5],
// // // // //     ["12.5deg", "-12.5deg"]
// // // // //   );
// // // // //   const rotateY = useTransform(
// // // // //     mouseXSpring,
// // // // //     [-0.5, 0.5],
// // // // //     ["-12.5deg", "12.5deg"]
// // // // //   );

// // // // //   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
// // // // //     if (shouldReduceMotion) return;
// // // // //     const rect = e.currentTarget.getBoundingClientRect();
// // // // //     const width = rect.width;
// // // // //     const height = rect.height;
// // // // //     const mouseX = e.clientX - rect.left;
// // // // //     const mouseY = e.clientY - rect.top;
// // // // //     x.set(mouseX / width - 0.5);
// // // // //     y.set(mouseY / height - 0.5);
// // // // //   };

// // // // //   const handleMouseLeave = () => {
// // // // //     x.set(0);
// // // // //     y.set(0);
// // // // //   };

// // // // //   return (
// // // // //     <motion.div
// // // // //       onClick={onClick}
// // // // //       onMouseMove={handleMouseMove}
// // // // //       onMouseLeave={handleMouseLeave}
// // // // //       style={{
// // // // //         rotateX,
// // // // //         rotateY,
// // // // //         transformStyle: "preserve-3d",
// // // // //       }}
// // // // //       className='relative h-20 w-48 cursor-pointer'
// // // // //     >
// // // // //       <div
// // // // //         style={{ transform: "translateZ(8px)", transformStyle: "preserve-3d" }}
// // // // //         className='absolute inset-0'
// // // // //       >
// // // // //         <Image
// // // // //           src='/images/hono-logo.svg'
// // // // //           alt='Hono Dev Studio Logo'
// // // // //           fill
// // // // //           priority
// // // // //           className='object-contain'
// // // // //           sizes='192px'
// // // // //         />
// // // // //       </div>
// // // // //     </motion.div>
// // // // //   );
// // // // // };

// // // // // // --- MAIN NAVBAR COMPONENT ---
// // // // // export function Navbar() {
// // // // //   const [isCommandMenuOpen, setCommandMenuOpen] = useState(false);
// // // // //   const [scrolled, setScrolled] = useState(false);
// // // // //   const shouldReduceMotion = useReducedMotion() ?? false;
// // // // //   const isXlOrLarger = useScreenSize();

// // // // //   useKbd(() => setCommandMenuOpen(true));

// // // // //   useEffect(() => {
// // // // //     if (!isXlOrLarger) {
// // // // //       setScrolled(false);
// // // // //       return;
// // // // //     }
// // // // //     let ticking = false;
// // // // //     const handleScroll = () => {
// // // // //       if (!ticking) {
// // // // //         requestAnimationFrame(() => {
// // // // //           setScrolled(window.scrollY > 50);
// // // // //           ticking = false;
// // // // //         });
// // // // //         ticking = true;
// // // // //       }
// // // // //     };
// // // // //     window.addEventListener("scroll", handleScroll, { passive: true });
// // // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // // //   }, [isXlOrLarger]);

// // // // //   const handleLinkClick = useCallback(
// // // // //     (href: string) => {
// // // // //       if (isCommandMenuOpen) setCommandMenuOpen(false);
// // // // //       if (href === "/") {
// // // // //         window.scrollTo({ top: 0, behavior: "smooth" });
// // // // //         return;
// // // // //       }
// // // // //       if (href.startsWith("/#")) {
// // // // //         const targetId = href.substring(2);
// // // // //         const element = document.getElementById(targetId);
// // // // //         if (element) {
// // // // //           element.scrollIntoView({ behavior: "smooth" });
// // // // //         }
// // // // //       } else {
// // // // //         window.location.href = href;
// // // // //       }
// // // // //     },
// // // // //     [isCommandMenuOpen]
// // // // //   );

// // // // //   const headerTransition: Transition = shouldReduceMotion
// // // // //     ? { duration: 0.3 }
// // // // //     : { ...springTransitionProps, delay: 0.2 };

// // // // //   return (
// // // // //     <>
// // // // //       <CommandMenu
// // // // //         isOpen={isCommandMenuOpen}
// // // // //         setIsOpen={setCommandMenuOpen}
// // // // //         onLinkClick={handleLinkClick}
// // // // //       />

// // // // //       {isXlOrLarger && (
// // // // //         <motion.header
// // // // //           initial={getHeaderInitialState(shouldReduceMotion)}
// // // // //           animate={getHeaderAnimateState(shouldReduceMotion)}
// // // // //           transition={headerTransition}
// // // // //           className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
// // // // //             scrolled
// // // // //               ? "bg-[#111316]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
// // // // //               : "bg-transparent"
// // // // //           }`}
// // // // //         >
// // // // //           <div className='container mx-auto px-6 md:px-8'>
// // // // //             <div className='flex items-center justify-center h-20 relative'>
// // // // //               {/* Logo positioned absolutely to the left */}
// // // // //               <div
// // // // //                 className='absolute left-0 top-1/2 transform -translate-y-1/2'
// // // // //                 style={{ perspective: "800px" }}
// // // // //               >
// // // // //                 <AnimatedLogo onClick={() => handleLinkClick("/")} />
// // // // //               </div>

// // // // //               {/* Centered Navigation */}
// // // // //               <nav className='flex items-center justify-center'>
// // // // //                 <motion.div
// // // // //                   className={`flex items-center space-x-1 ${
// // // // //                     scrolled
// // // // //                       ? "bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-3"
// // // // //                       : "bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-3"
// // // // //                   } transition-all duration-300`}
// // // // //                   initial={
// // // // //                     shouldReduceMotion
// // // // //                       ? { opacity: 0, y: 0 }
// // // // //                       : { opacity: 0, y: -20, scale: 0.9 }
// // // // //                   }
// // // // //                   animate={
// // // // //                     shouldReduceMotion
// // // // //                       ? { opacity: 1, y: 0 }
// // // // //                       : { opacity: 1, y: 0, scale: 1 }
// // // // //                   }
// // // // //                   transition={
// // // // //                     shouldReduceMotion
// // // // //                       ? { duration: 0.3, delay: 0.4 }
// // // // //                       : { ...springTransitionProps, delay: 0.4 }
// // // // //                   }
// // // // //                 >
// // // // //                   {navItems.map((item, index) => {
// // // // //                     const navButtonTransition: Transition = shouldReduceMotion
// // // // //                       ? { duration: 0.3 }
// // // // //                       : { ...springTransitionProps, delay: 0.5 + index * 0.1 };
// // // // //                     return (
// // // // //                       <motion.button
// // // // //                         key={item.id}
// // // // //                         onClick={() => handleLinkClick(item.href)}
// // // // //                         className='relative text-white/80 hover:text-[#E7FF1A] transition-all duration-300 font-medium px-6 py-2.5 rounded-full group'
// // // // //                         initial={
// // // // //                           shouldReduceMotion
// // // // //                             ? { opacity: 0, y: 0 }
// // // // //                             : { opacity: 0, y: -10 }
// // // // //                         }
// // // // //                         animate={
// // // // //                           shouldReduceMotion
// // // // //                             ? { opacity: 1, y: 0 }
// // // // //                             : { opacity: 1, y: 0 }
// // // // //                         }
// // // // //                         transition={navButtonTransition}
// // // // //                         whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
// // // // //                         whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
// // // // //                       >
// // // // //                         <span className='relative z-10 text-sm font-semibold tracking-wide'>
// // // // //                           {item.name}
// // // // //                         </span>
// // // // //                         {!shouldReduceMotion && (
// // // // //                           <motion.div
// // // // //                             className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-full -z-10 opacity-0 group-hover:opacity-100'
// // // // //                             initial={{ scale: 0 }}
// // // // //                             whileHover={{ scale: 1 }}
// // // // //                             transition={{
// // // // //                               type: "spring",
// // // // //                               stiffness: 400,
// // // // //                               damping: 25,
// // // // //                               mass: 0.8,
// // // // //                             }}
// // // // //                           />
// // // // //                         )}
// // // // //                         <motion.div
// // // // //                           className='absolute inset-0 bg-white/10 rounded-full -z-20 opacity-0 group-hover:opacity-100'
// // // // //                           initial={{ scale: 0.8, opacity: 0 }}
// // // // //                           whileHover={{ scale: 1, opacity: 1 }}
// // // // //                           transition={{
// // // // //                             type: "spring",
// // // // //                             stiffness: 300,
// // // // //                             damping: 20,
// // // // //                           }}
// // // // //                         />
// // // // //                       </motion.button>
// // // // //                     );
// // // // //                   })}
// // // // //                 </motion.div>
// // // // //               </nav>

// // // // //               {/* Optional: CTA Button or other elements can go on the right */}
// // // // //               <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
// // // // //                 {/* Space for future CTA button or additional elements */}
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </motion.header>
// // // // //       )}

// // // // //       {!isXlOrLarger && (
// // // // //         <div className='fixed bottom-4 inset-x-4 z-30'>
// // // // //           <motion.div
// // // // //             initial={
// // // // //               shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 100, opacity: 0 }
// // // // //             }
// // // // //             animate={
// // // // //               shouldReduceMotion ? { opacity: 1, y: 0 } : { y: 0, opacity: 1 }
// // // // //             }
// // // // //             transition={
// // // // //               shouldReduceMotion
// // // // //                 ? { duration: 0.3 }
// // // // //                 : { ...springTransitionProps, delay: 0.5 }
// // // // //             }
// // // // //             className='w-full h-16 bg-[#111316]/90 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-around shadow-2xl'
// // // // //           >
// // // // //             {navItems.slice(0, 3).map((item) => (
// // // // //               <motion.button
// // // // //                 key={item.href}
// // // // //                 onClick={() => handleLinkClick(item.href)}
// // // // //                 className='p-3 text-white/60 hover:text-[#E7FF1A] transition-colors duration-200'
// // // // //                 aria-label={item.name}
// // // // //                 whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
// // // // //               >
// // // // //                 <item.icon className='h-6 w-6' />
// // // // //               </motion.button>
// // // // //             ))}
// // // // //             <motion.button
// // // // //               onClick={() => setCommandMenuOpen(true)}
// // // // //               className='p-3 text-white/60 hover:text-[#E7FF1A] transition-colors duration-200'
// // // // //               aria-label='Open menu'
// // // // //               whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
// // // // //             >
// // // // //               <Command className='h-6 w-6' />
// // // // //             </motion.button>
// // // // //           </motion.div>
// // // // //         </div>
// // // // //       )}
// // // // //     </>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import React, { useState, useEffect, useCallback } from "react";
// // // // import {
// // // //   motion,
// // // //   AnimatePresence,
// // // //   useReducedMotion,
// // // //   Transition,
// // // //   useMotionValue,
// // // //   useTransform,
// // // //   useSpring,
// // // // } from "framer-motion";
// // // // import Image from "next/image";
// // // // import {
// // // //   Home,
// // // //   User,
// // // //   Briefcase,
// // // //   Mail,
// // // //   Command,
// // // //   X,
// // // //   ArrowRight,
// // // // } from "lucide-react";

// // // // // --- DATA & CONFIG ---
// // // // const navItems = [
// // // //   { id: "home", name: "Home", href: "/", icon: Home },
// // // //   { id: "about", name: "About", href: "/#about", icon: User },
// // // //   { id: "work", name: "Work", href: "/#work", icon: Briefcase },
// // // //   { id: "contact", name: "Contact", href: "/contact", icon: Mail },
// // // // ];

// // // // const springTransitionProps: Omit<Transition, "delay"> = {
// // // //   type: "spring",
// // // //   stiffness: 200,
// // // //   damping: 25,
// // // //   mass: 0.8,
// // // // };

// // // // const getHeaderInitialState = (shouldReduce: boolean) =>
// // // //   shouldReduce ? { opacity: 0, y: 0 } : { y: -100, opacity: 0 };

// // // // const getHeaderAnimateState = (shouldReduce: boolean) =>
// // // //   shouldReduce ? { opacity: 1, y: 0 } : { y: 0, opacity: 1 };

// // // // // --- HOOKS ---
// // // // const useKbd = (callback: () => void) => {
// // // //   useEffect(() => {
// // // //     const handleKeyDown = (e: KeyboardEvent) => {
// // // //       if ((e.metaKey || e.ctrlKey) && e.key === "k") {
// // // //         e.preventDefault();
// // // //         callback();
// // // //       }
// // // //     };
// // // //     window.addEventListener("keydown", handleKeyDown);
// // // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // // //   }, [callback]);
// // // // };

// // // // const useScreenSize = () => {
// // // //   const [isXlOrLarger, setIsXlOrLarger] = useState(false);
// // // //   useEffect(() => {
// // // //     const checkScreenSize = () => {
// // // //       setIsXlOrLarger(window.innerWidth >= 1280);
// // // //     };
// // // //     checkScreenSize();
// // // //     window.addEventListener("resize", checkScreenSize);
// // // //     return () => window.removeEventListener("resize", checkScreenSize);
// // // //   }, []);
// // // //   return isXlOrLarger;
// // // // };

// // // // // --- UI COMPONENTS ---
// // // // const CommandMenu = ({
// // // //   isOpen,
// // // //   setIsOpen,
// // // //   onLinkClick,
// // // // }: {
// // // //   isOpen: boolean;
// // // //   setIsOpen: (open: boolean) => void;
// // // //   onLinkClick: (href: string) => void;
// // // // }) => {
// // // //   const shouldReduceMotion = useReducedMotion() ?? false;
// // // //   const commands = navItems.map((item) => ({ ...item, type: "Navigate" }));

// // // //   return (
// // // //     <AnimatePresence>
// // // //       {isOpen && (
// // // //         <motion.div
// // // //           initial={{ opacity: 0 }}
// // // //           animate={{ opacity: 1 }}
// // // //           exit={{ opacity: 0 }}
// // // //           transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
// // // //           onClick={() => setIsOpen(false)}
// // // //           className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-start pt-24 p-4'
// // // //         >
// // // //           <motion.div
// // // //             initial={
// // // //               shouldReduceMotion
// // // //                 ? { opacity: 0, y: 0 }
// // // //                 : { scale: 0.95, y: -20 }
// // // //             }
// // // //             animate={
// // // //               shouldReduceMotion ? { opacity: 1, y: 0 } : { scale: 1, y: 0 }
// // // //             }
// // // //             exit={
// // // //               shouldReduceMotion
// // // //                 ? { opacity: 0, y: 0 }
// // // //                 : { scale: 0.95, opacity: 0 }
// // // //             }
// // // //             transition={
// // // //               shouldReduceMotion
// // // //                 ? { duration: 0.3 }
// // // //                 : { ...springTransitionProps, duration: 0.3 }
// // // //             }
// // // //             onClick={(e) => e.stopPropagation()}
// // // //             className='w-full max-w-lg bg-[#111316]/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl'
// // // //           >
// // // //             <div className='p-2'>
// // // //               <div className='flex justify-between items-center p-2 mb-1'>
// // // //                 <p className='text-sm text-white/60'>Navigation</p>
// // // //                 <button
// // // //                   onClick={() => setIsOpen(false)}
// // // //                   className='p-1 rounded-md hover:bg-white/10 transition-colors duration-200'
// // // //                 >
// // // //                   <X size={18} className='text-white/60' />
// // // //                 </button>
// // // //               </div>
// // // //               {commands.map((item) => (
// // // //                 <div
// // // //                   key={item.name}
// // // //                   onClick={() => {
// // // //                     onLinkClick(item.href);
// // // //                     setIsOpen(false);
// // // //                   }}
// // // //                   className='group flex items-center justify-between p-3 text-white/80 hover:bg-white/5 hover:text-[#E7FF1A] rounded-lg cursor-pointer transition-colors duration-200'
// // // //                 >
// // // //                   <div className='flex items-center gap-4'>
// // // //                     <item.icon size={18} />
// // // //                     <span>{item.name}</span>
// // // //                   </div>
// // // //                   <ArrowRight
// // // //                     size={16}
// // // //                     className='text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
// // // //                   />
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </motion.div>
// // // //         </motion.div>
// // // //       )}
// // // //     </AnimatePresence>
// // // //   );
// // // // };

// // // // // --- Animated Logo Component ---
// // // // const AnimatedLogo = ({ onClick }: { onClick: () => void }) => {
// // // //   const shouldReduceMotion = useReducedMotion();
// // // //   const x = useMotionValue(0);
// // // //   const y = useMotionValue(0);

// // // //   const mouseXSpring = useSpring(x, { stiffness: 200, damping: 40 });
// // // //   const mouseYSpring = useSpring(y, { stiffness: 200, damping: 40 });

// // // //   const rotateX = useTransform(
// // // //     mouseYSpring,
// // // //     [-0.5, 0.5],
// // // //     ["12.5deg", "-12.5deg"]
// // // //   );
// // // //   const rotateY = useTransform(
// // // //     mouseXSpring,
// // // //     [-0.5, 0.5],
// // // //     ["-12.5deg", "12.5deg"]
// // // //   );

// // // //   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
// // // //     if (shouldReduceMotion) return;
// // // //     const rect = e.currentTarget.getBoundingClientRect();
// // // //     const width = rect.width;
// // // //     const height = rect.height;
// // // //     const mouseX = e.clientX - rect.left;
// // // //     const mouseY = e.clientY - rect.top;
// // // //     x.set(mouseX / width - 0.5);
// // // //     y.set(mouseY / height - 0.5);
// // // //   };

// // // //   const handleMouseLeave = () => {
// // // //     x.set(0);
// // // //     y.set(0);
// // // //   };

// // // //   return (
// // // //     <motion.div
// // // //       onClick={onClick}
// // // //       onMouseMove={handleMouseMove}
// // // //       onMouseLeave={handleMouseLeave}
// // // //       style={{
// // // //         rotateX,
// // // //         rotateY,
// // // //         transformStyle: "preserve-3d",
// // // //       }}
// // // //       className='relative h-20 w-48 cursor-pointer'
// // // //     >
// // // //       <div
// // // //         style={{ transform: "translateZ(8px)", transformStyle: "preserve-3d" }}
// // // //         className='absolute inset-0'
// // // //       >
// // // //         <Image
// // // //           src='/images/hono-logo.svg'
// // // //           alt='Hono Dev Studio Logo'
// // // //           fill
// // // //           priority
// // // //           className='object-contain'
// // // //           sizes='192px'
// // // //         />
// // // //       </div>
// // // //     </motion.div>
// // // //   );
// // // // };

// // // // // --- MAIN NAVBAR COMPONENT ---
// // // // export function Navbar() {
// // // //   const [isCommandMenuOpen, setCommandMenuOpen] = useState(false);
// // // //   const [scrolled, setScrolled] = useState(false);
// // // //   const shouldReduceMotion = useReducedMotion() ?? false;
// // // //   const isXlOrLarger = useScreenSize();

// // // //   useKbd(() => setCommandMenuOpen(true));

// // // //   useEffect(() => {
// // // //     if (!isXlOrLarger) {
// // // //       setScrolled(false);
// // // //       return;
// // // //     }
// // // //     let ticking = false;
// // // //     const handleScroll = () => {
// // // //       if (!ticking) {
// // // //         requestAnimationFrame(() => {
// // // //           setScrolled(window.scrollY > 50);
// // // //           ticking = false;
// // // //         });
// // // //         ticking = true;
// // // //       }
// // // //     };
// // // //     window.addEventListener("scroll", handleScroll, { passive: true });
// // // //     return () => window.removeEventListener("scroll", handleScroll);
// // // //   }, [isXlOrLarger]);

// // // //   const handleLinkClick = useCallback(
// // // //     (href: string) => {
// // // //       if (isCommandMenuOpen) setCommandMenuOpen(false);

// // // //       // Get current path
// // // //       const currentPath = window.location.pathname;

// // // //       if (href === "/") {
// // // //         if (currentPath === "/") {
// // // //           // If already on home page, scroll to top
// // // //           window.scrollTo({ top: 0, behavior: "smooth" });
// // // //         } else {
// // // //           // If on different page, navigate to home
// // // //           window.location.href = href;
// // // //         }
// // // //         return;
// // // //       }

// // // //       if (href.startsWith("/#")) {
// // // //         if (currentPath === "/") {
// // // //           // If on home page, scroll to section
// // // //           const targetId = href.substring(2);
// // // //           const element = document.getElementById(targetId);
// // // //           if (element) {
// // // //             element.scrollIntoView({ behavior: "smooth" });
// // // //           }
// // // //         } else {
// // // //           // If on different page, navigate to home with hash
// // // //           window.location.href = href;
// // // //         }
// // // //       } else {
// // // //         // Navigate to other pages
// // // //         window.location.href = href;
// // // //       }
// // // //     },
// // // //     [isCommandMenuOpen]
// // // //   );

// // // //   const headerTransition: Transition = shouldReduceMotion
// // // //     ? { duration: 0.3 }
// // // //     : { ...springTransitionProps, delay: 0.2 };

// // // //   return (
// // // //     <>
// // // //       <CommandMenu
// // // //         isOpen={isCommandMenuOpen}
// // // //         setIsOpen={setCommandMenuOpen}
// // // //         onLinkClick={handleLinkClick}
// // // //       />

// // // //       {isXlOrLarger && (
// // // //         <motion.header
// // // //           initial={getHeaderInitialState(shouldReduceMotion)}
// // // //           animate={getHeaderAnimateState(shouldReduceMotion)}
// // // //           transition={headerTransition}
// // // //           className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
// // // //             scrolled
// // // //               ? "bg-[#111316]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
// // // //               : "bg-transparent"
// // // //           }`}
// // // //         >
// // // //           <div className='container mx-auto px-6 md:px-8'>
// // // //             <div className='flex items-center justify-center h-20 relative'>
// // // //               {/* Logo positioned absolutely to the left */}
// // // //               <div
// // // //                 className='absolute left-0 top-1/2 transform -translate-y-1/2'
// // // //                 style={{ perspective: "800px" }}
// // // //               >
// // // //                 <AnimatedLogo onClick={() => handleLinkClick("/")} />
// // // //               </div>

// // // //               {/* Centered Navigation */}
// // // //               <nav className='flex items-center justify-center'>
// // // //                 <motion.div
// // // //                   className={`flex items-center space-x-1 ${
// // // //                     scrolled
// // // //                       ? "bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-8 py-3"
// // // //                       : "bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-8 py-3"
// // // //                   } transition-all duration-300`}
// // // //                   initial={
// // // //                     shouldReduceMotion
// // // //                       ? { opacity: 0, y: 0 }
// // // //                       : { opacity: 0, y: -20, scale: 0.9 }
// // // //                   }
// // // //                   animate={
// // // //                     shouldReduceMotion
// // // //                       ? { opacity: 1, y: 0 }
// // // //                       : { opacity: 1, y: 0, scale: 1 }
// // // //                   }
// // // //                   transition={
// // // //                     shouldReduceMotion
// // // //                       ? { duration: 0.3, delay: 0.4 }
// // // //                       : { ...springTransitionProps, delay: 0.4 }
// // // //                   }
// // // //                 >
// // // //                   {navItems.map((item, index) => {
// // // //                     const navButtonTransition: Transition = shouldReduceMotion
// // // //                       ? { duration: 0.3 }
// // // //                       : { ...springTransitionProps, delay: 0.5 + index * 0.1 };
// // // //                     return (
// // // //                       <motion.button
// // // //                         key={item.id}
// // // //                         onClick={() => handleLinkClick(item.href)}
// // // //                         className='relative text-white/80 hover:text-[#E7FF1A] transition-all duration-300 font-medium px-6 py-2.5 rounded-full group'
// // // //                         initial={
// // // //                           shouldReduceMotion
// // // //                             ? { opacity: 0, y: 0 }
// // // //                             : { opacity: 0, y: -10 }
// // // //                         }
// // // //                         animate={
// // // //                           shouldReduceMotion
// // // //                             ? { opacity: 1, y: 0 }
// // // //                             : { opacity: 1, y: 0 }
// // // //                         }
// // // //                         transition={navButtonTransition}
// // // //                         whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
// // // //                         whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
// // // //                       >
// // // //                         <span className='relative z-10 text-sm font-semibold tracking-wide'>
// // // //                           {item.name}
// // // //                         </span>
// // // //                         {!shouldReduceMotion && (
// // // //                           <motion.div
// // // //                             className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-full -z-10 opacity-0 group-hover:opacity-100'
// // // //                             initial={{ scale: 0 }}
// // // //                             whileHover={{ scale: 1 }}
// // // //                             transition={{
// // // //                               type: "spring",
// // // //                               stiffness: 400,
// // // //                               damping: 25,
// // // //                               mass: 0.8,
// // // //                             }}
// // // //                           />
// // // //                         )}
// // // //                         <motion.div
// // // //                           className='absolute inset-0 bg-white/10 rounded-full -z-20 opacity-0 group-hover:opacity-100'
// // // //                           initial={{ scale: 0.8, opacity: 0 }}
// // // //                           whileHover={{ scale: 1, opacity: 1 }}
// // // //                           transition={{
// // // //                             type: "spring",
// // // //                             stiffness: 300,
// // // //                             damping: 20,
// // // //                           }}
// // // //                         />
// // // //                       </motion.button>
// // // //                     );
// // // //                   })}
// // // //                 </motion.div>
// // // //               </nav>

// // // //               {/* Optional: CTA Button or other elements can go on the right */}
// // // //               <div className='absolute right-0 top-1/2 transform -translate-y-1/2'>
// // // //                 {/* Space for future CTA button or additional elements */}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </motion.header>
// // // //       )}

// // // //       {!isXlOrLarger && (
// // // //         <div className='fixed bottom-4 inset-x-4 z-30'>
// // // //           <motion.div
// // // //             initial={
// // // //               shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 100, opacity: 0 }
// // // //             }
// // // //             animate={
// // // //               shouldReduceMotion ? { opacity: 1, y: 0 } : { y: 0, opacity: 1 }
// // // //             }
// // // //             transition={
// // // //               shouldReduceMotion
// // // //                 ? { duration: 0.3 }
// // // //                 : { ...springTransitionProps, delay: 0.5 }
// // // //             }
// // // //             className='w-full h-16 bg-[#111316]/90 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-around shadow-2xl'
// // // //           >
// // // //             {navItems.slice(0, 3).map((item) => (
// // // //               <motion.button
// // // //                 key={item.href}
// // // //                 onClick={() => handleLinkClick(item.href)}
// // // //                 className='p-3 text-white/60 hover:text-[#E7FF1A] transition-colors duration-200'
// // // //                 aria-label={item.name}
// // // //                 whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
// // // //               >
// // // //                 <item.icon className='h-6 w-6' />
// // // //               </motion.button>
// // // //             ))}
// // // //             <motion.button
// // // //               onClick={() => setCommandMenuOpen(true)}
// // // //               className='p-3 text-white/60 hover:text-[#E7FF1A] transition-colors duration-200'
// // // //               aria-label='Open menu'
// // // //               whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
// // // //             >
// // // //               <Command className='h-6 w-6' />
// // // //             </motion.button>
// // // //           </motion.div>
// // // //         </div>
// // // //       )}
// // // //     </>
// // // //   );
// // // // }

// // // "use client";

// // // import React, { useState, useEffect, useCallback } from "react";
// // // import {
// // //   motion,
// // //   AnimatePresence,
// // //   useReducedMotion,
// // //   Transition,
// // //   useMotionValue,
// // //   useTransform,
// // //   useSpring,
// // // } from "framer-motion";
// // // import Image from "next/image";
// // // import {
// // //   Home,
// // //   User,
// // //   Briefcase,
// // //   Mail,
// // //   Command,
// // //   X,
// // //   ArrowRight,
// // // } from "lucide-react";

// // // // --- DATA & CONFIG ---
// // // const navItems = [
// // //   { id: "home", name: "Home", href: "/", icon: Home },
// // //   { id: "about", name: "About", href: "/#about", icon: User },
// // //   { id: "work", name: "Work", href: "/#work", icon: Briefcase },
// // //   { id: "contact", name: "Contact", href: "/contact", icon: Mail },
// // // ];

// // // const springTransitionProps: Omit<Transition, "delay"> = {
// // //   type: "spring",
// // //   stiffness: 200,
// // //   damping: 25,
// // //   mass: 0.8,
// // // };

// // // const getHeaderInitialState = (shouldReduce: boolean) =>
// // //   shouldReduce ? { opacity: 0, y: 0 } : { y: -100, opacity: 0 };

// // // const getHeaderAnimateState = (shouldReduce: boolean) =>
// // //   shouldReduce ? { opacity: 1, y: 0 } : { y: 0, opacity: 1 };

// // // // --- HOOKS ---
// // // const useKbd = (callback: () => void) => {
// // //   useEffect(() => {
// // //     const handleKeyDown = (e: KeyboardEvent) => {
// // //       if ((e.metaKey || e.ctrlKey) && e.key === "k") {
// // //         e.preventDefault();
// // //         callback();
// // //       }
// // //     };
// // //     window.addEventListener("keydown", handleKeyDown);
// // //     return () => window.removeEventListener("keydown", handleKeyDown);
// // //   }, [callback]);
// // // };

// // // const useScreenSize = () => {
// // //   const [isXlOrLarger, setIsXlOrLarger] = useState(false);
// // //   useEffect(() => {
// // //     const checkScreenSize = () => {
// // //       setIsXlOrLarger(window.innerWidth >= 1280);
// // //     };
// // //     checkScreenSize();
// // //     window.addEventListener("resize", checkScreenSize);
// // //     return () => window.removeEventListener("resize", checkScreenSize);
// // //   }, []);
// // //   return isXlOrLarger;
// // // };

// // // // --- UI COMPONENTS ---

// // // // Updated Command Menu (White/Clean Theme)
// // // const CommandMenu = ({
// // //   isOpen,
// // //   setIsOpen,
// // //   onLinkClick,
// // // }: {
// // //   isOpen: boolean;
// // //   setIsOpen: (open: boolean) => void;
// // //   onLinkClick: (href: string) => void;
// // // }) => {
// // //   const shouldReduceMotion = useReducedMotion() ?? false;
// // //   const commands = navItems.map((item) => ({ ...item, type: "Navigate" }));

// // //   return (
// // //     <AnimatePresence>
// // //       {isOpen && (
// // //         <motion.div
// // //           initial={{ opacity: 0 }}
// // //           animate={{ opacity: 1 }}
// // //           exit={{ opacity: 0 }}
// // //           transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
// // //           onClick={() => setIsOpen(false)}
// // //           className='fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-50 flex justify-center items-start pt-24 p-4'
// // //         >
// // //           <motion.div
// // //             initial={
// // //               shouldReduceMotion
// // //                 ? { opacity: 0, y: 0 }
// // //                 : { scale: 0.95, y: -20 }
// // //             }
// // //             animate={
// // //               shouldReduceMotion ? { opacity: 1, y: 0 } : { scale: 1, y: 0 }
// // //             }
// // //             exit={
// // //               shouldReduceMotion
// // //                 ? { opacity: 0, y: 0 }
// // //                 : { scale: 0.95, opacity: 0 }
// // //             }
// // //             transition={
// // //               shouldReduceMotion
// // //                 ? { duration: 0.3 }
// // //                 : { ...springTransitionProps, duration: 0.3 }
// // //             }
// // //             onClick={(e) => e.stopPropagation()}
// // //             className='w-full max-w-lg bg-white/90 border border-white/60 rounded-2xl shadow-2xl shadow-blue-900/10 overflow-hidden backdrop-blur-xl'
// // //           >
// // //             <div className='p-2'>
// // //               <div className='flex justify-between items-center p-2 mb-1 border-b border-slate-100'>
// // //                 <p className='text-xs font-semibold text-slate-400 uppercase tracking-wider'>
// // //                   Navigation
// // //                 </p>
// // //                 <button
// // //                   onClick={() => setIsOpen(false)}
// // //                   className='p-1 rounded-md hover:bg-slate-100 transition-colors duration-200'
// // //                 >
// // //                   <X size={18} className='text-slate-400' />
// // //                 </button>
// // //               </div>
// // //               {commands.map((item) => (
// // //                 <div
// // //                   key={item.name}
// // //                   onClick={() => {
// // //                     onLinkClick(item.href);
// // //                     setIsOpen(false);
// // //                   }}
// // //                   className='group flex items-center justify-between p-3 text-slate-600 hover:bg-blue-50 hover:text-blue-600 rounded-xl cursor-pointer transition-colors duration-200'
// // //                 >
// // //                   <div className='flex items-center gap-4'>
// // //                     <item.icon size={18} />
// // //                     <span className='font-medium'>{item.name}</span>
// // //                   </div>
// // //                   <ArrowRight
// // //                     size={16}
// // //                     className='text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
// // //                   />
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </motion.div>
// // //         </motion.div>
// // //       )}
// // //     </AnimatePresence>
// // //   );
// // // };

// // // // Updated Logo Animation
// // // const AnimatedLogo = ({ onClick }: { onClick: () => void }) => {
// // //   const shouldReduceMotion = useReducedMotion();
// // //   const x = useMotionValue(0);
// // //   const y = useMotionValue(0);

// // //   const mouseXSpring = useSpring(x, { stiffness: 200, damping: 40 });
// // //   const mouseYSpring = useSpring(y, { stiffness: 200, damping: 40 });

// // //   const rotateX = useTransform(
// // //     mouseYSpring,
// // //     [-0.5, 0.5],
// // //     ["12.5deg", "-12.5deg"]
// // //   );
// // //   const rotateY = useTransform(
// // //     mouseXSpring,
// // //     [-0.5, 0.5],
// // //     ["-12.5deg", "12.5deg"]
// // //   );

// // //   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
// // //     if (shouldReduceMotion) return;
// // //     const rect = e.currentTarget.getBoundingClientRect();
// // //     const width = rect.width;
// // //     const height = rect.height;
// // //     const mouseX = e.clientX - rect.left;
// // //     const mouseY = e.clientY - rect.top;
// // //     x.set(mouseX / width - 0.5);
// // //     y.set(mouseY / height - 0.5);
// // //   };

// // //   const handleMouseLeave = () => {
// // //     x.set(0);
// // //     y.set(0);
// // //   };

// // //   return (
// // //     <motion.div
// // //       onClick={onClick}
// // //       onMouseMove={handleMouseMove}
// // //       onMouseLeave={handleMouseLeave}
// // //       style={{
// // //         rotateX,
// // //         rotateY,
// // //         transformStyle: "preserve-3d",
// // //       }}
// // //       className='relative h-20 w-48 cursor-pointer'
// // //     >
// // //       <div
// // //         style={{ transform: "translateZ(8px)", transformStyle: "preserve-3d" }}
// // //         className='absolute inset-0'
// // //       >
// // //         {/* Note: Ensure this SVG works on Light Mode (Dark Text) */}
// // //         <Image
// // //           src='/images/hono-logo.svg'
// // //           alt='Hono Dev Studio Logo'
// // //           fill
// // //           priority
// // //           className='object-contain'
// // //           sizes='192px'
// // //         />
// // //       </div>
// // //     </motion.div>
// // //   );
// // // };

// // // // --- MAIN NAVBAR COMPONENT ---
// // // export function Navbar() {
// // //   const [isCommandMenuOpen, setCommandMenuOpen] = useState(false);
// // //   const [scrolled, setScrolled] = useState(false);
// // //   const shouldReduceMotion = useReducedMotion() ?? false;
// // //   const isXlOrLarger = useScreenSize();

// // //   useKbd(() => setCommandMenuOpen(true));

// // //   useEffect(() => {
// // //     if (!isXlOrLarger) {
// // //       setScrolled(false);
// // //       return;
// // //     }
// // //     let ticking = false;
// // //     const handleScroll = () => {
// // //       if (!ticking) {
// // //         requestAnimationFrame(() => {
// // //           setScrolled(window.scrollY > 50);
// // //           ticking = false;
// // //         });
// // //         ticking = true;
// // //       }
// // //     };
// // //     window.addEventListener("scroll", handleScroll, { passive: true });
// // //     return () => window.removeEventListener("scroll", handleScroll);
// // //   }, [isXlOrLarger]);

// // //   const handleLinkClick = useCallback(
// // //     (href: string) => {
// // //       if (isCommandMenuOpen) setCommandMenuOpen(false);
// // //       const currentPath = window.location.pathname;
// // //       if (href === "/") {
// // //         if (currentPath === "/") {
// // //           window.scrollTo({ top: 0, behavior: "smooth" });
// // //         } else {
// // //           window.location.href = href;
// // //         }
// // //         return;
// // //       }
// // //       if (href.startsWith("/#")) {
// // //         if (currentPath === "/") {
// // //           const targetId = href.substring(2);
// // //           const element = document.getElementById(targetId);
// // //           if (element) {
// // //             element.scrollIntoView({ behavior: "smooth" });
// // //           }
// // //         } else {
// // //           window.location.href = href;
// // //         }
// // //       } else {
// // //         window.location.href = href;
// // //       }
// // //     },
// // //     [isCommandMenuOpen]
// // //   );

// // //   const headerTransition: Transition = shouldReduceMotion
// // //     ? { duration: 0.3 }
// // //     : { ...springTransitionProps, delay: 0.2 };

// // //   return (
// // //     <>
// // //       <CommandMenu
// // //         isOpen={isCommandMenuOpen}
// // //         setIsOpen={setCommandMenuOpen}
// // //         onLinkClick={handleLinkClick}
// // //       />

// // //       {isXlOrLarger && (
// // //         <motion.header
// // //           initial={getHeaderInitialState(shouldReduceMotion)}
// // //           animate={getHeaderAnimateState(shouldReduceMotion)}
// // //           transition={headerTransition}
// // //           className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 pointer-events-none`}
// // //         >
// // //           <div className='container mx-auto px-6 md:px-8'>
// // //             <div className='flex items-center justify-center relative'>
// // //               {/* Logo (Absolute Left) - Pointer events enabled for logo */}
// // //               <div
// // //                 className='absolute left-0 top-1/2 transform -translate-y-1/2 pointer-events-auto'
// // //                 style={{ perspective: "800px" }}
// // //               >
// // //                 <AnimatedLogo onClick={() => handleLinkClick("/")} />
// // //               </div>

// // //               {/* Centered Navigation Pill - Pointer events enabled */}
// // //               <nav className='flex items-center justify-center pointer-events-auto'>
// // //                 <motion.div
// // //                   className={`flex items-center p-1.5 ${
// // //                     scrolled
// // //                       ? "bg-white/70 backdrop-blur-xl border border-white/60 shadow-xl shadow-blue-900/5"
// // //                       : "bg-white/40 backdrop-blur-md border border-white/40 shadow-lg shadow-blue-900/5"
// // //                   } rounded-full transition-all duration-300`}
// // //                   initial={
// // //                     shouldReduceMotion
// // //                       ? { opacity: 0, y: 0 }
// // //                       : { opacity: 0, y: -20, scale: 0.9 }
// // //                   }
// // //                   animate={
// // //                     shouldReduceMotion
// // //                       ? { opacity: 1, y: 0 }
// // //                       : { opacity: 1, y: 0, scale: 1 }
// // //                   }
// // //                   transition={
// // //                     shouldReduceMotion
// // //                       ? { duration: 0.3, delay: 0.4 }
// // //                       : { ...springTransitionProps, delay: 0.4 }
// // //                   }
// // //                 >
// // //                   {navItems.map((item, index) => {
// // //                     const navButtonTransition: Transition = shouldReduceMotion
// // //                       ? { duration: 0.3 }
// // //                       : { ...springTransitionProps, delay: 0.5 + index * 0.1 };
// // //                     return (
// // //                       <motion.button
// // //                         key={item.id}
// // //                         onClick={() => handleLinkClick(item.href)}
// // //                         className='relative text-slate-500 hover:text-blue-600 transition-colors duration-300 font-medium px-6 py-2.5 rounded-full group overflow-hidden'
// // //                         initial={
// // //                           shouldReduceMotion
// // //                             ? { opacity: 0, y: 0 }
// // //                             : { opacity: 0, y: -10 }
// // //                         }
// // //                         animate={
// // //                           shouldReduceMotion
// // //                             ? { opacity: 1, y: 0 }
// // //                             : { opacity: 1, y: 0 }
// // //                         }
// // //                         transition={navButtonTransition}
// // //                         whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
// // //                         whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
// // //                       >
// // //                         <span className='relative z-10 text-sm font-semibold tracking-wide'>
// // //                           {item.name}
// // //                         </span>

// // //                         {/* Hover Pill Background */}
// // //                         {!shouldReduceMotion && (
// // //                           <motion.div
// // //                             className='absolute inset-0 bg-white rounded-full -z-10 shadow-sm opacity-0 group-hover:opacity-100'
// // //                             initial={{ scale: 0.8 }}
// // //                             whileHover={{ scale: 1 }}
// // //                             transition={{
// // //                               type: "spring",
// // //                               stiffness: 400,
// // //                               damping: 25,
// // //                               mass: 0.8,
// // //                             }}
// // //                           />
// // //                         )}
// // //                       </motion.button>
// // //                     );
// // //                   })}
// // //                 </motion.div>
// // //               </nav>
// // //             </div>
// // //           </div>
// // //         </motion.header>
// // //       )}

// // //       {/* Mobile Bottom Bar */}
// // //       {!isXlOrLarger && (
// // //         <div className='fixed bottom-6 inset-x-4 z-40 flex justify-center pointer-events-none'>
// // //           <motion.div
// // //             initial={
// // //               shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 100, opacity: 0 }
// // //             }
// // //             animate={
// // //               shouldReduceMotion ? { opacity: 1, y: 0 } : { y: 0, opacity: 1 }
// // //             }
// // //             transition={
// // //               shouldReduceMotion
// // //                 ? { duration: 0.3 }
// // //                 : { ...springTransitionProps, delay: 0.5 }
// // //             }
// // //             className='w-full max-w-sm h-16 bg-white/80 border border-white/60 backdrop-blur-xl rounded-2xl flex items-center justify-evenly shadow-2xl shadow-blue-900/10 pointer-events-auto'
// // //           >
// // //             {navItems.slice(0, 3).map((item) => (
// // //               <motion.button
// // //                 key={item.href}
// // //                 onClick={() => handleLinkClick(item.href)}
// // //                 className='p-3 text-slate-400 hover:text-blue-600 transition-colors duration-200'
// // //                 aria-label={item.name}
// // //                 whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
// // //               >
// // //                 <item.icon className='h-6 w-6' />
// // //               </motion.button>
// // //             ))}
// // //             <motion.button
// // //               onClick={() => setCommandMenuOpen(true)}
// // //               className='p-3 text-slate-400 hover:text-blue-600 transition-colors duration-200'
// // //               aria-label='Open menu'
// // //               whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
// // //             >
// // //               <Command className='h-6 w-6' />
// // //             </motion.button>
// // //           </motion.div>
// // //         </div>
// // //       )}
// // //     </>
// // //   );
// // // }

// // "use client";

// // import React, { useState, useEffect, useCallback } from "react";
// // import {
// //   motion,
// //   AnimatePresence,
// //   useReducedMotion,
// //   Transition,
// //   useMotionValue,
// //   useTransform,
// //   useSpring,
// // } from "framer-motion";
// // import Image from "next/image";
// // import {
// //   Home,
// //   User,
// //   Briefcase,
// //   Mail,
// //   Command,
// //   X,
// //   ArrowRight,
// // } from "lucide-react";

// // // --- DATA & CONFIG ---
// // const navItems = [
// //   { id: "home", name: "Home", href: "/", icon: Home },
// //   { id: "about", name: "About", href: "/#about", icon: User },
// //   { id: "work", name: "Work", href: "/#work", icon: Briefcase },
// //   { id: "contact", name: "Contact", href: "/contact", icon: Mail },
// // ];

// // const springTransitionProps: Omit<Transition, "delay"> = {
// //   type: "spring",
// //   stiffness: 200,
// //   damping: 25,
// //   mass: 0.8,
// // };

// // const getHeaderInitialState = (shouldReduce: boolean) =>
// //   shouldReduce ? { opacity: 0, y: 0 } : { y: -100, opacity: 0 };

// // const getHeaderAnimateState = (shouldReduce: boolean) =>
// //   shouldReduce ? { opacity: 1, y: 0 } : { y: 0, opacity: 1 };

// // // --- HOOKS ---
// // const useKbd = (callback: () => void) => {
// //   useEffect(() => {
// //     const handleKeyDown = (e: KeyboardEvent) => {
// //       if ((e.metaKey || e.ctrlKey) && e.key === "k") {
// //         e.preventDefault();
// //         callback();
// //       }
// //     };
// //     window.addEventListener("keydown", handleKeyDown);
// //     return () => window.removeEventListener("keydown", handleKeyDown);
// //   }, [callback]);
// // };

// // const useScreenSize = () => {
// //   const [isXlOrLarger, setIsXlOrLarger] = useState(false);
// //   useEffect(() => {
// //     const checkScreenSize = () => {
// //       setIsXlOrLarger(window.innerWidth >= 1280);
// //     };
// //     checkScreenSize();
// //     window.addEventListener("resize", checkScreenSize);
// //     return () => window.removeEventListener("resize", checkScreenSize);
// //   }, []);
// //   return isXlOrLarger;
// // };

// // // --- UI COMPONENTS ---

// // // Updated Command Menu (Dark/Cyber Theme)
// // const CommandMenu = ({
// //   isOpen,
// //   setIsOpen,
// //   onLinkClick,
// // }: {
// //   isOpen: boolean;
// //   setIsOpen: (open: boolean) => void;
// //   onLinkClick: (href: string) => void;
// // }) => {
// //   const shouldReduceMotion = useReducedMotion() ?? false;
// //   const commands = navItems.map((item) => ({ ...item, type: "Navigate" }));

// //   return (
// //     <AnimatePresence>
// //       {isOpen && (
// //         <motion.div
// //           initial={{ opacity: 0 }}
// //           animate={{ opacity: 1 }}
// //           exit={{ opacity: 0 }}
// //           transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
// //           onClick={() => setIsOpen(false)}
// //           className='fixed inset-0 bg-[#0a0618]/60 backdrop-blur-md z-50 flex justify-center items-start pt-24 p-4'
// //         >
// //           <motion.div
// //             initial={
// //               shouldReduceMotion
// //                 ? { opacity: 0, y: 0 }
// //                 : { scale: 0.95, y: -20 }
// //             }
// //             animate={
// //               shouldReduceMotion ? { opacity: 1, y: 0 } : { scale: 1, y: 0 }
// //             }
// //             exit={
// //               shouldReduceMotion
// //                 ? { opacity: 0, y: 0 }
// //                 : { scale: 0.95, opacity: 0 }
// //             }
// //             transition={
// //               shouldReduceMotion
// //                 ? { duration: 0.3 }
// //                 : { ...springTransitionProps, duration: 0.3 }
// //             }
// //             onClick={(e) => e.stopPropagation()}
// //             // Updated: Dark background, light border
// //             className='w-full max-w-lg bg-[#16103a]/90 border border-white/10 rounded-2xl shadow-2xl shadow-cyan-900/20 overflow-hidden backdrop-blur-xl'
// //           >
// //             <div className='p-2'>
// //               <div className='flex justify-between items-center p-2 mb-1 border-b border-white/5'>
// //                 <p className='text-xs font-semibold text-cyan-200/70 uppercase tracking-wider'>
// //                   Navigation
// //                 </p>
// //                 <button
// //                   onClick={() => setIsOpen(false)}
// //                   className='p-1 rounded-md hover:bg-white/10 transition-colors duration-200'
// //                 >
// //                   <X size={18} className='text-slate-400' />
// //                 </button>
// //               </div>
// //               {commands.map((item) => (
// //                 <div
// //                   key={item.name}
// //                   onClick={() => {
// //                     onLinkClick(item.href);
// //                     setIsOpen(false);
// //                   }}
// //                   // Updated: Hover effects to match Hero accents
// //                   className='group flex items-center justify-between p-3 text-slate-300 hover:bg-white/5 hover:text-cyan-300 rounded-xl cursor-pointer transition-colors duration-200'
// //                 >
// //                   <div className='flex items-center gap-4'>
// //                     <item.icon size={18} />
// //                     <span className='font-medium'>{item.name}</span>
// //                   </div>
// //                   <ArrowRight
// //                     size={16}
// //                     className='text-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
// //                   />
// //                 </div>
// //               ))}
// //             </div>
// //           </motion.div>
// //         </motion.div>
// //       )}
// //     </AnimatePresence>
// //   );
// // };

// // // Updated Logo Animation
// // const AnimatedLogo = ({ onClick }: { onClick: () => void }) => {
// //   const shouldReduceMotion = useReducedMotion();
// //   const x = useMotionValue(0);
// //   const y = useMotionValue(0);

// //   const mouseXSpring = useSpring(x, { stiffness: 200, damping: 40 });
// //   const mouseYSpring = useSpring(y, { stiffness: 200, damping: 40 });

// //   const rotateX = useTransform(
// //     mouseYSpring,
// //     [-0.5, 0.5],
// //     ["12.5deg", "-12.5deg"]
// //   );
// //   const rotateY = useTransform(
// //     mouseXSpring,
// //     [-0.5, 0.5],
// //     ["-12.5deg", "12.5deg"]
// //   );

// //   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
// //     if (shouldReduceMotion) return;
// //     const rect = e.currentTarget.getBoundingClientRect();
// //     const width = rect.width;
// //     const height = rect.height;
// //     const mouseX = e.clientX - rect.left;
// //     const mouseY = e.clientY - rect.top;
// //     x.set(mouseX / width - 0.5);
// //     y.set(mouseY / height - 0.5);
// //   };

// //   const handleMouseLeave = () => {
// //     x.set(0);
// //     y.set(0);
// //   };

// //   return (
// //     <motion.div
// //       onClick={onClick}
// //       onMouseMove={handleMouseMove}
// //       onMouseLeave={handleMouseLeave}
// //       style={{
// //         rotateX,
// //         rotateY,
// //         transformStyle: "preserve-3d",
// //       }}
// //       className='relative h-20 w-48 cursor-pointer'
// //     >
// //       <div
// //         style={{ transform: "translateZ(8px)", transformStyle: "preserve-3d" }}
// //         className='absolute inset-0'
// //       >
// //         <Image
// //           src='/images/hono-logo.svg'
// //           alt='Hono Dev Studio Logo'
// //           fill
// //           priority
// //           // Added invert brightness-0 to ensure visibility on dark bg if logo is black
// //           // Remove `invert` if your logo is already white
// //           className='object-contain brightness-0 invert'
// //           sizes='192px'
// //         />
// //       </div>
// //     </motion.div>
// //   );
// // };

// // // --- MAIN NAVBAR COMPONENT ---
// // export function Navbar() {
// //   const [isCommandMenuOpen, setCommandMenuOpen] = useState(false);
// //   const [scrolled, setScrolled] = useState(false);
// //   const shouldReduceMotion = useReducedMotion() ?? false;
// //   const isXlOrLarger = useScreenSize();

// //   useKbd(() => setCommandMenuOpen(true));

// //   useEffect(() => {
// //     if (!isXlOrLarger) {
// //       setScrolled(false);
// //       return;
// //     }
// //     let ticking = false;
// //     const handleScroll = () => {
// //       if (!ticking) {
// //         requestAnimationFrame(() => {
// //           setScrolled(window.scrollY > 50);
// //           ticking = false;
// //         });
// //         ticking = true;
// //       }
// //     };
// //     window.addEventListener("scroll", handleScroll, { passive: true });
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [isXlOrLarger]);

// //   const handleLinkClick = useCallback(
// //     (href: string) => {
// //       if (isCommandMenuOpen) setCommandMenuOpen(false);
// //       const currentPath = window.location.pathname;
// //       if (href === "/") {
// //         if (currentPath === "/") {
// //           window.scrollTo({ top: 0, behavior: "smooth" });
// //         } else {
// //           window.location.href = href;
// //         }
// //         return;
// //       }
// //       if (href.startsWith("/#")) {
// //         if (currentPath === "/") {
// //           const targetId = href.substring(2);
// //           const element = document.getElementById(targetId);
// //           if (element) {
// //             element.scrollIntoView({ behavior: "smooth" });
// //           }
// //         } else {
// //           window.location.href = href;
// //         }
// //       } else {
// //         window.location.href = href;
// //       }
// //     },
// //     [isCommandMenuOpen]
// //   );

// //   const headerTransition: Transition = shouldReduceMotion
// //     ? { duration: 0.3 }
// //     : { ...springTransitionProps, delay: 0.2 };

// //   return (
// //     <>
// //       <CommandMenu
// //         isOpen={isCommandMenuOpen}
// //         setIsOpen={setCommandMenuOpen}
// //         onLinkClick={handleLinkClick}
// //       />

// //       {isXlOrLarger && (
// //         <motion.header
// //           initial={getHeaderInitialState(shouldReduceMotion)}
// //           animate={getHeaderAnimateState(shouldReduceMotion)}
// //           transition={headerTransition}
// //           className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 pointer-events-none`}
// //         >
// //           <div className='container mx-auto px-6 md:px-8'>
// //             <div className='flex items-center justify-center relative'>
// //               {/* Logo (Absolute Left) */}
// //               <div
// //                 className='absolute left-0 top-1/2 transform -translate-y-1/2 pointer-events-auto'
// //                 style={{ perspective: "800px" }}
// //               >
// //                 <AnimatedLogo onClick={() => handleLinkClick("/")} />
// //               </div>

// //               {/* Centered Navigation Pill */}
// //               <nav className='flex items-center justify-center pointer-events-auto'>
// //                 <motion.div
// //                   // UPDATED: Reduced padding from p-1.5 to p-1 for a tighter container
// //                   className={`flex items-center p-1 ${
// //                     scrolled
// //                       ? "bg-[#100b26]/70 backdrop-blur-xl border border-white/10 shadow-xl shadow-cyan-900/5"
// //                       : "bg-[#100b26]/30 backdrop-blur-md border border-white/5 shadow-lg shadow-cyan-900/5"
// //                   } rounded-full transition-all duration-300`}
// //                   initial={
// //                     shouldReduceMotion
// //                       ? { opacity: 0, y: 0 }
// //                       : { opacity: 0, y: -20, scale: 0.9 }
// //                   }
// //                   animate={
// //                     shouldReduceMotion
// //                       ? { opacity: 1, y: 0 }
// //                       : { opacity: 1, y: 0, scale: 1 }
// //                   }
// //                   transition={
// //                     shouldReduceMotion
// //                       ? { duration: 0.3, delay: 0.4 }
// //                       : { ...springTransitionProps, delay: 0.4 }
// //                   }
// //                 >
// //                   {navItems.map((item, index) => {
// //                     const navButtonTransition: Transition = shouldReduceMotion
// //                       ? { duration: 0.3 }
// //                       : { ...springTransitionProps, delay: 0.5 + index * 0.1 };
// //                     return (
// //                       <motion.button
// //                         key={item.id}
// //                         onClick={() => handleLinkClick(item.href)}
// //                         // UPDATED: Reduced vertical padding (py-2.5 -> py-2) and horizontal (px-6 -> px-5)
// //                         className='relative text-slate-300 hover:text-white transition-colors duration-300 font-medium px-5 py-2 rounded-full group overflow-hidden'
// //                         initial={
// //                           shouldReduceMotion
// //                             ? { opacity: 0, y: 0 }
// //                             : { opacity: 0, y: -10 }
// //                         }
// //                         animate={
// //                           shouldReduceMotion
// //                             ? { opacity: 1, y: 0 }
// //                             : { opacity: 1, y: 0 }
// //                         }
// //                         transition={navButtonTransition}
// //                         whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
// //                         whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
// //                       >
// //                         <span className='relative z-10 text-sm font-semibold tracking-wide'>
// //                           {item.name}
// //                         </span>

// //                         {/* Hover Pill Background */}
// //                         {!shouldReduceMotion && (
// //                           <motion.div
// //                             className='absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-full -z-10 shadow-[0_0_15px_rgba(34,211,238,0.3)] opacity-0 group-hover:opacity-100'
// //                             initial={{ scale: 0.8 }}
// //                             whileHover={{ scale: 1 }}
// //                             transition={{
// //                               type: "spring",
// //                               stiffness: 400,
// //                               damping: 25,
// //                               mass: 0.8,
// //                             }}
// //                           />
// //                         )}
// //                       </motion.button>
// //                     );
// //                   })}
// //                 </motion.div>
// //               </nav>
// //             </div>
// //           </div>
// //         </motion.header>
// //       )}

// //       {/* Mobile Bottom Bar */}
// //       {!isXlOrLarger && (
// //         <div className='fixed bottom-6 inset-x-4 z-40 flex justify-center pointer-events-none'>
// //           <motion.div
// //             initial={
// //               shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 100, opacity: 0 }
// //             }
// //             animate={
// //               shouldReduceMotion ? { opacity: 1, y: 0 } : { y: 0, opacity: 1 }
// //             }
// //             transition={
// //               shouldReduceMotion
// //                 ? { duration: 0.3 }
// //                 : { ...springTransitionProps, delay: 0.5 }
// //             }
// //             className='w-full max-w-sm h-16 bg-[#16103a]/80 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-evenly shadow-2xl shadow-black/40 pointer-events-auto'
// //           >
// //             {navItems.slice(0, 3).map((item) => (
// //               <motion.button
// //                 key={item.href}
// //                 onClick={() => handleLinkClick(item.href)}
// //                 className='p-3 text-slate-400 hover:text-cyan-400 transition-colors duration-200'
// //                 aria-label={item.name}
// //                 whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
// //               >
// //                 <item.icon className='h-6 w-6' />
// //               </motion.button>
// //             ))}
// //             <motion.button
// //               onClick={() => setCommandMenuOpen(true)}
// //               className='p-3 text-slate-400 hover:text-fuchsia-400 transition-colors duration-200'
// //               aria-label='Open menu'
// //               whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
// //             >
// //               <Command className='h-6 w-6' />
// //             </motion.button>
// //           </motion.div>
// //         </div>
// //       )}
// //     </>
// //   );
// // }

// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import {
//   motion,
//   AnimatePresence,
//   useReducedMotion,
//   Transition,
// } from "framer-motion";
// import Image from "next/image";
// import {
//   Home,
//   User,
//   Briefcase,
//   Mail,
//   Command,
//   X,
//   ArrowRight,
//   Menu,
// } from "lucide-react";

// // --- DATA & CONFIG ---
// const navItems = [
//   { id: "home", name: "Home", href: "/", icon: Home },
//   { id: "about", name: "About", href: "/#about", icon: User },
//   { id: "work", name: "Work", href: "/#work", icon: Briefcase },
//   { id: "contact", name: "Contact", href: "/contact", icon: Mail },
// ];

// const springTransitionProps: Omit<Transition, "delay"> = {
//   type: "spring",
//   stiffness: 200,
//   damping: 25,
//   mass: 0.8,
// };

// // --- HOOKS ---
// const useKbd = (callback: () => void) => {
//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if ((e.metaKey || e.ctrlKey) && e.key === "k") {
//         e.preventDefault();
//         callback();
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [callback]);
// };

// const useScreenSize = () => {
//   const [isXlOrLarger, setIsXlOrLarger] = useState(false);
//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsXlOrLarger(window.innerWidth >= 1280);
//     };
//     checkScreenSize();
//     window.addEventListener("resize", checkScreenSize);
//     return () => window.removeEventListener("resize", checkScreenSize);
//   }, []);
//   return isXlOrLarger;
// };

// // --- UI COMPONENTS ---

// // 1. Command Menu (Full Screen Overlay)
// const CommandMenu = ({
//   isOpen,
//   setIsOpen,
//   onLinkClick,
// }: {
//   isOpen: boolean;
//   setIsOpen: (open: boolean) => void;
//   onLinkClick: (href: string) => void;
// }) => {
//   const shouldReduceMotion = useReducedMotion() ?? false;
//   const commands = navItems.map((item) => ({ ...item, type: "Navigate" }));

//   return (
//     <AnimatePresence>
//       {isOpen && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 0.2 }}
//           onClick={() => setIsOpen(false)}
//           className='fixed inset-0 bg-[#0a0618]/80 backdrop-blur-lg z-[60] flex justify-center items-start pt-32 p-4'
//         >
//           <motion.div
//             initial={{ scale: 0.95, y: -20, opacity: 0 }}
//             animate={{ scale: 1, y: 0, opacity: 1 }}
//             exit={{ scale: 0.95, opacity: 0 }}
//             transition={springTransitionProps}
//             onClick={(e) => e.stopPropagation()}
//             className='w-full max-w-lg bg-[#16103a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden'
//           >
//             <div className='p-2'>
//               <div className='flex justify-between items-center p-3 border-b border-white/5 mb-2'>
//                 <span className='text-xs font-bold text-cyan-400 uppercase tracking-widest'>
//                   Navigation
//                 </span>
//                 <div className='flex items-center gap-2'>
//                   <span className='text-[10px] text-slate-500 bg-white/5 px-2 py-1 rounded'>
//                     ESC
//                   </span>
//                 </div>
//               </div>
//               {commands.map((item) => (
//                 <div
//                   key={item.name}
//                   onClick={() => {
//                     onLinkClick(item.href);
//                     setIsOpen(false);
//                   }}
//                   className='group flex items-center justify-between p-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-xl cursor-pointer transition-all'
//                 >
//                   <div className='flex items-center gap-4'>
//                     <item.icon
//                       size={18}
//                       className='text-slate-500 group-hover:text-cyan-400 transition-colors'
//                     />
//                     <span className='font-medium'>{item.name}</span>
//                   </div>
//                   <ArrowRight
//                     size={16}
//                     className='text-fuchsia-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all'
//                   />
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // --- MAIN NAVBAR COMPONENT ---
// export function Navbar() {
//   const [isCommandMenuOpen, setCommandMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const shouldReduceMotion = useReducedMotion() ?? false;
//   const isXlOrLarger = useScreenSize();

//   useKbd(() => setCommandMenuOpen(true));

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLinkClick = useCallback((href: string) => {
//     setCommandMenuOpen(false);
//     // Simple navigation logic
//     if (href.startsWith("/#")) {
//       const element = document.getElementById(href.substring(2));
//       if (element) element.scrollIntoView({ behavior: "smooth" });
//     } else {
//       window.location.href = href;
//     }
//   }, []);

//   return (
//     <>
//       <CommandMenu
//         isOpen={isCommandMenuOpen}
//         setIsOpen={setCommandMenuOpen}
//         onLinkClick={handleLinkClick}
//       />

//       {/* --- DESKTOP FLOATING DOCK (Top Center) --- */}
//       {isXlOrLarger && (
//         <motion.header
//           initial={{ y: -100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ ...springTransitionProps, delay: 0.2 }}
//           className='fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none'
//         >
//           <motion.div
//             // THE CHANGE: A self-contained capsule instead of full width
//             className={`
//               pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500
//               ${
//                 scrolled
//                   ? "bg-[#0a0618]/60 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
//                   : "bg-transparent border-transparent" // Invisible background when at top
//               }
//             `}
//           >
//             {/* Optional: Tiny Logo inside the dock when scrolled */}
//             <AnimatePresence>
//               {scrolled && (
//                 <motion.div
//                   initial={{ width: 0, opacity: 0 }}
//                   animate={{ width: "auto", opacity: 1 }}
//                   exit={{ width: 0, opacity: 0 }}
//                   className='pl-3 pr-1 overflow-hidden'
//                 >
//                   <div className='w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center'>
//                     <span className='text-cyan-400 font-bold text-xs'>H</span>
//                   </div>
//                 </motion.div>
//               )}
//             </AnimatePresence>

//             {/* Nav Items */}
//             <nav className='flex items-center'>
//               {navItems.map((item) => (
//                 <button
//                   key={item.id}
//                   onClick={() => handleLinkClick(item.href)}
//                   className={`
//                     relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
//                     ${scrolled ? "text-slate-300 hover:text-white" : "text-white/80 hover:text-white hover:bg-white/10"}
//                   `}
//                 >
//                   {item.name}
//                   {/* Subtle Glow on Hover */}
//                   {scrolled && (
//                     <div className='absolute inset-0 rounded-full hover:bg-white/5 transition-colors' />
//                   )}
//                 </button>
//               ))}
//             </nav>

//             {/* Action Button */}
//             <div className='pl-1 pr-1'>
//               <button
//                 onClick={() => setCommandMenuOpen(true)}
//                 className={`
//                         p-2 rounded-full transition-all duration-300
//                         ${
//                           scrolled
//                             ? "bg-white/10 hover:bg-cyan-500 text-white"
//                             : "bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/5"
//                         }
//                     `}
//               >
//                 <Command size={16} />
//               </button>
//             </div>
//           </motion.div>
//         </motion.header>
//       )}

//       {/* --- MOBILE BOTTOM DOCK (No changes, this is excellent) --- */}
//       {!isXlOrLarger && (
//         <div className='fixed bottom-6 inset-x-4 z-50 flex justify-center pointer-events-none'>
//           <motion.div
//             initial={{ y: 100, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ ...springTransitionProps, delay: 0.5 }}
//             className='pointer-events-auto w-full max-w-xs h-16 bg-[#16103a]/80 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-between px-6 shadow-2xl shadow-black/50'
//           >
//             {navItems.slice(0, 3).map((item) => (
//               <button
//                 key={item.href}
//                 onClick={() => handleLinkClick(item.href)}
//                 className='text-slate-400 hover:text-cyan-400 transition-colors p-2'
//               >
//                 <item.icon size={22} />
//               </button>
//             ))}
//             <button
//               onClick={() => setCommandMenuOpen(true)}
//               className='text-slate-400 hover:text-fuchsia-400 transition-colors p-2'
//             >
//               <Command size={22} />
//             </button>
//           </motion.div>
//         </div>
//       )}
//     </>
//   );
// }

"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  Transition,
} from "framer-motion";
import Image from "next/image";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Command,
  ArrowRight,
  LayoutGrid,
} from "lucide-react";

// --- DATA ---
const navItems = [
  { id: "home", name: "Home", href: "/", icon: Home },
  { id: "about", name: "About", href: "/#about", icon: User },
  { id: "work", name: "Work", href: "/#work", icon: Briefcase },
  { id: "contact", name: "Contact", href: "/contact", icon: Mail },
];

const springTransitionProps: Omit<Transition, "delay"> = {
  type: "spring",
  stiffness: 200,
  damping: 25,
  mass: 0.8,
};

// --- HOOKS ---
const useKbd = (callback: () => void) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        callback();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [callback]);
};

// Change this function
const useScreenSize = () => {
  const [isLgOrLarger, setIsLgOrLarger] = useState(false);
  useEffect(() => {
    const checkScreenSize = () => {
      // CHANGED: Lowered from 1280 (xl) to 1024 (lg)
      setIsLgOrLarger(window.innerWidth >= 1024);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return isLgOrLarger;
};

// --- COMPONENT: Command Menu (Overlay) ---
const CommandMenu = ({
  isOpen,
  setIsOpen,
  onLinkClick,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onLinkClick: (href: string) => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsOpen(false)}
          className='fixed inset-0 bg-[#0a0618]/80 backdrop-blur-lg z-[60] flex justify-center items-start pt-32 p-4'
        >
          <motion.div
            initial={{ scale: 0.95, y: -20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={springTransitionProps}
            onClick={(e) => e.stopPropagation()}
            className='w-full max-w-lg bg-[#16103a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden'
          >
            <div className='p-2'>
              <div className='flex justify-between items-center p-3 border-b border-white/5 mb-2'>
                <span className='text-xs font-bold text-cyan-400 uppercase tracking-widest'>
                  Navigation
                </span>
                <span className='text-[10px] text-slate-500 bg-white/5 px-2 py-1 rounded'>
                  ESC to close
                </span>
              </div>
              {navItems.map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    onLinkClick(item.href);
                    setIsOpen(false);
                  }}
                  className='group flex items-center justify-between p-3 text-slate-300 hover:bg-white/5 hover:text-white rounded-xl cursor-pointer transition-all'
                >
                  <div className='flex items-center gap-4'>
                    <item.icon
                      size={18}
                      className='text-slate-500 group-hover:text-cyan-400 transition-colors'
                    />
                    <span className='font-medium'>{item.name}</span>
                  </div>
                  <ArrowRight
                    size={16}
                    className='text-fuchsia-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all'
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- MAIN NAVBAR COMPONENT ---
export function Navbar() {
  const [isCommandMenuOpen, setCommandMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home"); // Track active tab for the "Spotlight" effect
  const [scrolled, setScrolled] = useState(false);
  const isXlOrLarger = useScreenSize();

  useKbd(() => setCommandMenuOpen(true));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = useCallback((href: string, id: string) => {
    setActiveTab(id);
    setCommandMenuOpen(false);
    if (href.startsWith("/#")) {
      const element = document.getElementById(href.substring(2));
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = href;
    }
  }, []);

  return (
    <>
      <CommandMenu
        isOpen={isCommandMenuOpen}
        setIsOpen={setCommandMenuOpen}
        onLinkClick={(href) => handleLinkClick(href, "")}
      />

      {/* --- DESKTOP: FLOATING GLASS CAPSULE --- */}
      {isXlOrLarger && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...springTransitionProps, delay: 0.2 }}
          className='fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none'
        >
          {/* THE CAPSULE CONTAINER */}
          <motion.div
            className={`
              pointer-events-auto flex items-center gap-1 p-1.5 rounded-full border transition-all duration-500
              ${
                scrolled
                  ? "bg-[#0a0618]/60 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                  : "bg-white/5 backdrop-blur-sm border-white/5 shadow-lg"
              }
            `}
          >
            {/* Optional: Tiny Logo or Icon on left */}
            <div className='pl-3 pr-2 border-r border-white/5 mr-1'>
              <LayoutGrid size={18} className='text-cyan-400' />
            </div>

            <nav className='flex items-center'>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.href, item.id)}
                  onMouseEnter={() => setActiveTab(item.id)}
                  className={`
                    relative px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-10
                    ${activeTab === item.id ? "text-white" : "text-slate-400 hover:text-slate-200"}
                  `}
                >
                  {/* TEXT */}
                  {item.name}

                  {/* SPOTLIGHT EFFECT (The sliding background) */}
                  {activeTab === item.id && (
                    <motion.div
                      layoutId='active-pill'
                      className='absolute inset-0 bg-white/10 rounded-full -z-10'
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* CMD Button */}
            <div className='pl-2 pr-1 ml-1 border-l border-white/5'>
              <button
                onClick={() => setCommandMenuOpen(true)}
                className='p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 transition-all border border-transparent hover:border-white/10'
              >
                <Command size={14} />
              </button>
            </div>
          </motion.div>
        </motion.header>
      )}

      {/* --- MOBILE: BOTTOM GLASS BAR (Unchanged, it works great) --- */}
      {!isXlOrLarger && (
        <div className='fixed bottom-6 inset-x-4 z-50 flex justify-center pointer-events-none'>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...springTransitionProps, delay: 0.5 }}
            className='pointer-events-auto w-full max-w-xs h-16 bg-[#16103a]/80 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-between px-6 shadow-2xl shadow-black/50'
          >
            {navItems.slice(0, 3).map((item) => (
              <button
                key={item.href}
                onClick={() => handleLinkClick(item.href, item.id)}
                className='text-slate-400 hover:text-cyan-400 transition-colors p-2'
              >
                <item.icon size={22} />
              </button>
            ))}
            <button
              onClick={() => setCommandMenuOpen(true)}
              className='text-slate-400 hover:text-fuchsia-400 transition-colors p-2'
            >
              <Command size={22} />
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
}
