// // // // // // "use client";

// // // // // // import React, { useRef, useEffect } from "react";
// // // // // // import { motion, useScroll, useTransform } from "framer-motion";

// // // // // // // --- Reusable UI Components ---

// // // // // // const AuroraBackground = () => (
// // // // // //   <div className='fixed inset-0 -z-20 overflow-hidden'>
// // // // // //     <div className='absolute inset-0 bg-gray-950' />
// // // // // //     <motion.div
// // // // // //       initial={{ scale: 1.5, opacity: 0, x: "-50%", y: "-50%" }}
// // // // // //       animate={{
// // // // // //         scale: [1, 1.2, 1],
// // // // // //         rotate: [0, 90, 0],
// // // // // //         opacity: [0.1, 0.3, 0.1],
// // // // // //       }}
// // // // // //       transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
// // // // // //       className='absolute top-1/2 left-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-blue-500/50 via-purple-500/30 to-transparent blur-3xl'
// // // // // //     />
// // // // // //   </div>
// // // // // // );

// // // // // // const AnimatedText = ({
// // // // // //   children,
// // // // // //   delay = 0,
// // // // // // }: {
// // // // // //   children: React.ReactNode;
// // // // // //   delay?: number;
// // // // // // }) => (
// // // // // //   <motion.div
// // // // // //     initial={{ opacity: 0, y: 20 }}
// // // // // //     animate={{ opacity: 1, y: 0 }}
// // // // // //     transition={{ duration: 0.8, delay: delay * 0.2 + 0.5, ease: "easeOut" }}
// // // // // //   >
// // // // // //     {children}
// // // // // //   </motion.div>
// // // // // // );

// // // // // // // --- "Hono Sphere" Interactive Canvas Component ---
// // // // // // const HonoSphereCanvas = () => {
// // // // // //   const canvasRef = useRef<HTMLCanvasElement>(null);

// // // // // //   useEffect(() => {
// // // // // //     const canvas = canvasRef.current;
// // // // // //     if (!canvas) return;

// // // // // //     const ctx = canvas.getContext("2d");
// // // // // //     if (!ctx) return;

// // // // // //     let animationFrameId: number;

// // // // // //     canvas.width = window.innerWidth;
// // // // // //     canvas.height = window.innerHeight;

// // // // // //     const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

// // // // // //     const handleMouseMove = (event: MouseEvent) => {
// // // // // //       mouse.x = event.x;
// // // // // //       mouse.y = event.y;
// // // // // //     };

// // // // // //     window.addEventListener("mousemove", handleMouseMove);

// // // // // //     let particles: Particle[] = [];
// // // // // //     const numParticles = 150;
// // // // // //     const sphereRadius = Math.min(canvas.width, canvas.height) * 0.3;

// // // // // //     class Particle {
// // // // // //       x: number;
// // // // // //       y: number;
// // // // // //       z: number;
// // // // // //       size: number;
// // // // // //       spring: number;
// // // // // //       vx: number;
// // // // // //       vy: number;
// // // // // //       vz: number;

// // // // // //       constructor() {
// // // // // //         const phi = Math.random() * 2 * Math.PI;
// // // // // //         const costheta = Math.random() * 2 - 1;
// // // // // //         const theta = Math.acos(costheta);

// // // // // //         this.x = sphereRadius * Math.sin(theta) * Math.cos(phi);
// // // // // //         this.y = sphereRadius * Math.sin(theta) * Math.sin(phi);
// // // // // //         this.z = sphereRadius * Math.cos(theta);

// // // // // //         this.size = Math.random() * 2 + 1;
// // // // // //         this.spring = 0.05;
// // // // // //         this.vx = 0;
// // // // // //         this.vy = 0;
// // // // // //         this.vz = 0;
// // // // // //       }

// // // // // //       project() {
// // // // // //         if (!canvas) return { x: 0, y: 0, size: 0 };
// // // // // //         const perspective = 600 / (600 + this.z);
// // // // // //         return {
// // // // // //           x: this.x * perspective + canvas.width / 2,
// // // // // //           y: this.y * perspective + canvas.height / 2,
// // // // // //           size: this.size * perspective,
// // // // // //         };
// // // // // //       }

// // // // // //       update() {
// // // // // //         // Interaction with mouse
// // // // // //         const projected = this.project();
// // // // // //         const dx = mouse.x - projected.x;
// // // // // //         const dy = mouse.y - projected.y;
// // // // // //         const dist = Math.sqrt(dx * dx + dy * dy);

// // // // // //         if (dist < 100) {
// // // // // //           const angle = Math.atan2(dy, dx);
// // // // // //           this.vx += (Math.cos(angle) * (100 - dist)) / 500;
// // // // // //           this.vy += (Math.sin(angle) * (100 - dist)) / 500;
// // // // // //         }

// // // // // //         // Spring back to sphere
// // // // // //         this.vx += -this.x * this.spring * 0.001;
// // // // // //         this.vy += -this.y * this.spring * 0.001;
// // // // // //         this.vz += -this.z * this.spring * 0.001;

// // // // // //         this.x += this.vx;
// // // // // //         this.y += this.vy;
// // // // // //         this.z += this.vz;

// // // // // //         this.vx *= 0.95;
// // // // // //         this.vy *= 0.95;
// // // // // //         this.vz *= 0.95;
// // // // // //       }
// // // // // //     }

// // // // // //     function init() {
// // // // // //       particles = [];
// // // // // //       for (let i = 0; i < numParticles; i++) {
// // // // // //         particles.push(new Particle());
// // // // // //       }
// // // // // //     }

// // // // // //     function animate() {
// // // // // //       if (!ctx || !canvas) return;
// // // // // //       animationFrameId = requestAnimationFrame(animate);
// // // // // //       ctx.clearRect(0, 0, canvas.width, canvas.height);

// // // // // //       particles.forEach((p) => {
// // // // // //         p.update();
// // // // // //         const proj = p.project();
// // // // // //         if (
// // // // // //           proj.x > 0 &&
// // // // // //           proj.x < canvas.width &&
// // // // // //           proj.y > 0 &&
// // // // // //           proj.y < canvas.height
// // // // // //         ) {
// // // // // //           ctx.beginPath();
// // // // // //           ctx.arc(proj.x, proj.y, proj.size, 0, 2 * Math.PI);
// // // // // //           ctx.fillStyle = `rgba(180, 180, 220, ${Math.max(
// // // // // //             0.1,
// // // // // //             proj.size / 2
// // // // // //           )})`;
// // // // // //           ctx.fill();
// // // // // //         }
// // // // // //       });
// // // // // //     }

// // // // // //     const handleResize = () => {
// // // // // //       canvas.width = window.innerWidth;
// // // // // //       canvas.height = window.innerHeight;
// // // // // //       init();
// // // // // //     };

// // // // // //     init();
// // // // // //     animate();

// // // // // //     window.addEventListener("resize", handleResize);

// // // // // //     return () => {
// // // // // //       window.removeEventListener("resize", handleResize);
// // // // // //       window.removeEventListener("mousemove", handleMouseMove);
// // // // // //       cancelAnimationFrame(animationFrameId);
// // // // // //     };
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <canvas
// // // // // //       ref={canvasRef}
// // // // // //       className='fixed top-0 left-0 w-full h-full -z-10'
// // // // // //     />
// // // // // //   );
// // // // // // };

// // // // // // // --- Main Hero Component ---
// // // // // // export default function Hero() {
// // // // // //   const targetRef = useRef(null);
// // // // // //   const { scrollYProgress } = useScroll({
// // // // // //     target: targetRef,
// // // // // //     offset: ["start start", "end start"],
// // // // // //   });

// // // // // //   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
// // // // // //   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
// // // // // //   const position = useTransform(scrollYProgress, (pos) =>
// // // // // //     pos >= 1 ? "relative" : "fixed"
// // // // // //   );

// // // // // //   const scrollToContact = () => {
// // // // // //     document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
// // // // // //   };

// // // // // //   return (
// // // // // //     <section ref={targetRef} id='home' className='relative w-full h-[200vh]'>
// // // // // //       <AuroraBackground />
// // // // // //       <HonoSphereCanvas />

// // // // // //       <motion.div
// // // // // //         style={{ opacity, scale, position }}
// // // // // //         className='fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-center p-4'
// // // // // //       >
// // // // // //         <div className='max-w-4xl mx-auto'>
// // // // // //           <AnimatedText delay={0}>
// // // // // //             <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 animate-shine'>
// // // // // //               Hono Dev Studio
// // // // // //             </h1>
// // // // // //           </AnimatedText>
// // // // // //           <AnimatedText delay={1}>
// // // // // //             <p className='mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto'>
// // // // // //               We architect and build exceptional web applications that are as
// // // // // //               intelligent as they are beautiful.
// // // // // //             </p>
// // // // // //           </AnimatedText>
// // // // // //           <AnimatedText delay={2}>
// // // // // //             <motion.button
// // // // // //               onClick={scrollToContact}
// // // // // //               whileHover={{ scale: 1.05 }}
// // // // // //               whileTap={{ scale: 0.95 }}
// // // // // //               className='mt-8 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold backdrop-blur-sm transition-all hover:bg-white/20'
// // // // // //             >
// // // // // //               Start a Project
// // // // // //             </motion.button>
// // // // // //           </AnimatedText>
// // // // // //         </div>
// // // // // //       </motion.div>
// // // // // //     </section>
// // // // // //   );
// // // // // // }

// // // // // // // // src/components/Hero.tsx
// // // // // // // "use client";

// // // // // // // import React, { useRef } from "react";
// // // // // // // import { motion, useScroll, useTransform } from "framer-motion";
// // // // // // // import { useTime } from "@/hooks/useTime";
// // // // // // // import { getTimeBasedTheme } from "@/lib/time-utils";
// // // // // // // import { DynamicAurora } from "./DynamicAurora";
// // // // // // // import { TimeAwareParticles } from "./TimeAwareParticles";

// // // // // // // const AnimatedText = ({
// // // // // // //   children,
// // // // // // //   delay = 0,
// // // // // // // }: {
// // // // // // //   children: React.ReactNode;
// // // // // // //   delay?: number;
// // // // // // // }) => (
// // // // // // //   <motion.div
// // // // // // //     initial={{ opacity: 0, y: 20 }}
// // // // // // //     animate={{ opacity: 1, y: 0 }}
// // // // // // //     transition={{ duration: 0.8, delay: delay * 0.2 + 0.5, ease: "easeOut" }}
// // // // // // //   >
// // // // // // //     {children}
// // // // // // //   </motion.div>
// // // // // // // );

// // // // // // // export default function Hero() {
// // // // // // //   const targetRef = useRef(null);
// // // // // // //   const { scrollYProgress } = useScroll({
// // // // // // //     target: targetRef,
// // // // // // //     offset: ["start start", "end start"],
// // // // // // //   });

// // // // // // //   // --- Time-Based Logic ---
// // // // // // //   const { timeOfDay, currentTime } = useTime();
// // // // // // //   const theme = getTimeBasedTheme(timeOfDay);

// // // // // // //   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
// // // // // // //   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
// // // // // // //   const position = useTransform(scrollYProgress, (pos) =>
// // // // // // //     pos >= 1 ? "relative" : "fixed"
// // // // // // //   );

// // // // // // //   const scrollToContact = () => {
// // // // // // //     document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
// // // // // // //   };

// // // // // // //   const getTimeDisplay = () => {
// // // // // // //     return currentTime.toLocaleTimeString([], {
// // // // // // //       hour: "2-digit",
// // // // // // //       minute: "2-digit",
// // // // // // //       hour12: true,
// // // // // // //     });
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <section ref={targetRef} id='home' className='relative w-full h-[200vh]'>
// // // // // // //       {/* --- Dynamic, Time-Aware Background Components --- */}
// // // // // // //       <DynamicAurora theme={theme} timeOfDay={timeOfDay} />
// // // // // // //       <TimeAwareParticles theme={theme} timeOfDay={timeOfDay} />

// // // // // // //       <motion.div
// // // // // // //         style={{ opacity, scale, position }}
// // // // // // //         className='fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-center p-4'
// // // // // // //       >
// // // // // // //         <div className='max-w-4xl mx-auto'>
// // // // // // //           {/* --- Time Display and Greeting --- */}
// // // // // // //           <AnimatedText delay={0}>
// // // // // // //             <div className='mb-4 flex justify-center items-center gap-4'>
// // // // // // //               <div className='px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20'>
// // // // // // //                 <span className='text-sm text-white/80'>
// // // // // // //                   {getTimeDisplay()} • {theme.greeting}
// // // // // // //                 </span>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </AnimatedText>

// // // // // // //           {/* Main Title */}
// // // // // // //           <AnimatedText delay={1}>
// // // // // // //             <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 animate-shine'>
// // // // // // //               Hono Dev Studio
// // // // // // //             </h1>
// // // // // // //           </AnimatedText>

// // // // // // //           {/* Time-Based Message */}
// // // // // // //           <AnimatedText delay={2}>
// // // // // // //             <p className='mt-4 text-lg md:text-xl text-white/90 font-medium'>
// // // // // // //               {theme.message}
// // // // // // //             </p>
// // // // // // //           </AnimatedText>

// // // // // // //           {/* Original Description */}
// // // // // // //           <AnimatedText delay={3}>
// // // // // // //             <p className='mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto'>
// // // // // // //               We architect and build exceptional web applications that are as
// // // // // // //               intelligent as they are beautiful.
// // // // // // //             </p>
// // // // // // //           </AnimatedText>

// // // // // // //           {/* CTA Button */}
// // // // // // //           <AnimatedText delay={4}>
// // // // // // //             <motion.button
// // // // // // //               onClick={scrollToContact}
// // // // // // //               whileHover={{ scale: 1.05 }}
// // // // // // //               whileTap={{ scale: 0.95 }}
// // // // // // //               className='mt-8 px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold backdrop-blur-sm transition-all hover:bg-white/20'
// // // // // // //             >
// // // // // // //               Start a Project
// // // // // // //             </motion.button>
// // // // // // //           </AnimatedText>
// // // // // // //         </div>
// // // // // // //       </motion.div>
// // // // // // //     </section>
// // // // // // //   );
// // // // // // // }

// // // // // "use client";

// // // // // import React, { useRef, useEffect, useState } from "react";
// // // // // import { gsap } from "gsap";
// // // // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // // // import Lenis from "@studio-freight/lenis";

// // // // // // Register GSAP plugins
// // // // // gsap.registerPlugin(ScrollTrigger);

// // // // // // --- Enhanced Aurora Background with GSAP ---
// // // // // const EnhancedAuroraBackground = () => {
// // // // //   const auroraRef = useRef(null);
// // // // //   const gradientRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const aurora = auroraRef.current;
// // // // //     const gradient = gradientRef.current;

// // // // //     if (aurora && gradient) {
// // // // //       // Create multiple aurora layers for depth
// // // // //       gsap.set(aurora, { scale: 1.5, opacity: 0 });

// // // // //       // Main aurora animation with immediate start
// // // // //       gsap.to(aurora, {
// // // // //         scale: 1.2,
// // // // //         opacity: 0.4,
// // // // //         duration: 8,
// // // // //         ease: "power2.inOut",
// // // // //         yoyo: true,
// // // // //         repeat: -1,
// // // // //         delay: 0.1, // Start almost immediately
// // // // //       });

// // // // //       // Rotation animation
// // // // //       gsap.to(aurora, {
// // // // //         rotation: 360,
// // // // //         duration: 60,
// // // // //         ease: "none",
// // // // //         repeat: -1,
// // // // //       });

// // // // //       // Gradient shift animation
// // // // //       gsap.to(gradient, {
// // // // //         backgroundPosition: "200% 200%",
// // // // //         duration: 20,
// // // // //         ease: "none",
// // // // //         repeat: -1,
// // // // //       });
// // // // //     }
// // // // //   }, []);

// // // // //   return (
// // // // //     <div className='fixed inset-0 -z-20 overflow-hidden'>
// // // // //       <div className='absolute inset-0 bg-gray-950' />
// // // // //       <div
// // // // //         ref={auroraRef}
// // // // //         className='absolute top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2'
// // // // //       >
// // // // //         <div
// // // // //           ref={gradientRef}
// // // // //           className='h-full w-full rounded-full bg-gradient-to-br from-blue-500/60 via-purple-500/40 via-pink-500/30 to-transparent blur-3xl'
// // // // //           style={{
// // // // //             backgroundSize: "400% 400%",
// // // // //             backgroundPosition: "0% 0%",
// // // // //           }}
// // // // //         />
// // // // //       </div>

// // // // //       {/* Additional floating orbs */}
// // // // //       <div className='absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl animate-pulse' />
// // // // //       <div
// // // // //         className='absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-purple-400/20 blur-2xl animate-pulse'
// // // // //         style={{ animationDelay: "2s" }}
// // // // //       />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // --- Enhanced Interactive Sphere with GSAP ---
// // // // // const EnhancedHonoSphere = () => {
// // // // //   const canvasRef = useRef(null);
// // // // //   const containerRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const canvas = canvasRef.current;
// // // // //     const container = containerRef.current;
// // // // //     if (!canvas || !container) return;

// // // // //     const ctx = canvas.getContext("2d");
// // // // //     if (!ctx) return;

// // // // //     let animationFrameId;
// // // // //     let mouse = { x: 0, y: 0 };
// // // // //     let targetMouse = { x: 0, y: 0 };

// // // // //     const resizeCanvas = () => {
// // // // //       canvas.width = window.innerWidth;
// // // // //       canvas.height = window.innerHeight;
// // // // //     };

// // // // //     resizeCanvas();

// // // // //     const handleMouseMove = (event) => {
// // // // //       targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
// // // // //       targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
// // // // //     };

// // // // //     window.addEventListener("mousemove", handleMouseMove);
// // // // //     window.addEventListener("resize", resizeCanvas);

// // // // //     // Smooth mouse following
// // // // //     const updateMouse = () => {
// // // // //       mouse.x += (targetMouse.x - mouse.x) * 0.05;
// // // // //       mouse.y += (targetMouse.y - mouse.y) * 0.05;
// // // // //     };

// // // // //     // Enhanced particle system
// // // // //     const particles = [];
// // // // //     const numParticles = 200;
// // // // //     const sphereRadius = Math.min(window.innerWidth, window.innerHeight) * 0.25;

// // // // //     class EnhancedParticle {
// // // // //       constructor() {
// // // // //         this.reset();
// // // // //         this.originalX = this.x;
// // // // //         this.originalY = this.y;
// // // // //         this.originalZ = this.z;
// // // // //         this.time = Math.random() * Math.PI * 2;
// // // // //         this.speed = 0.01 + Math.random() * 0.02;
// // // // //       }

// // // // //       reset() {
// // // // //         const phi = Math.random() * 2 * Math.PI;
// // // // //         const costheta = Math.random() * 2 - 1;
// // // // //         const theta = Math.acos(costheta);

// // // // //         this.x = sphereRadius * Math.sin(theta) * Math.cos(phi);
// // // // //         this.y = sphereRadius * Math.sin(theta) * Math.sin(phi);
// // // // //         this.z = sphereRadius * Math.cos(theta);
// // // // //         this.size = Math.random() * 3 + 1;
// // // // //       }

// // // // //       update() {
// // // // //         this.time += this.speed;

// // // // //         // Gentle floating motion
// // // // //         const floatX = Math.sin(this.time) * 10;
// // // // //         const floatY = Math.cos(this.time * 0.7) * 10;
// // // // //         const floatZ = Math.sin(this.time * 0.5) * 20;

// // // // //         // Mouse interaction
// // // // //         const mouseInfluence = 50;
// // // // //         const mouseX = mouse.x * mouseInfluence;
// // // // //         const mouseY = mouse.y * mouseInfluence;

// // // // //         this.x = this.originalX + floatX + mouseX;
// // // // //         this.y = this.originalY + floatY + mouseY;
// // // // //         this.z = this.originalZ + floatZ;
// // // // //       }

// // // // //       project() {
// // // // //         const perspective = 800 / (800 + this.z);
// // // // //         return {
// // // // //           x: this.x * perspective + canvas.width / 2,
// // // // //           y: this.y * perspective + canvas.height / 2,
// // // // //           size: this.size * perspective,
// // // // //           alpha: Math.max(0.1, perspective),
// // // // //         };
// // // // //       }
// // // // //     }

// // // // //     // Initialize particles
// // // // //     for (let i = 0; i < numParticles; i++) {
// // // // //       particles.push(new EnhancedParticle());
// // // // //     }

// // // // //     // Animation loop
// // // // //     const animate = () => {
// // // // //       animationFrameId = requestAnimationFrame(animate);
// // // // //       updateMouse();

// // // // //       ctx.clearRect(0, 0, canvas.width, canvas.height);

// // // // //       // Sort particles by z-depth for proper rendering
// // // // //       particles.sort((a, b) => b.z - a.z);

// // // // //       particles.forEach((particle, index) => {
// // // // //         particle.update();
// // // // //         const projected = particle.project();

// // // // //         if (
// // // // //           projected.x > -50 &&
// // // // //           projected.x < canvas.width + 50 &&
// // // // //           projected.y > -50 &&
// // // // //           projected.y < canvas.height + 50
// // // // //         ) {
// // // // //           // Create gradient for each particle
// // // // //           const gradient = ctx.createRadialGradient(
// // // // //             projected.x,
// // // // //             projected.y,
// // // // //             0,
// // // // //             projected.x,
// // // // //             projected.y,
// // // // //             projected.size * 2
// // // // //           );

// // // // //           const hue = (index * 137.5) % 360; // Golden angle for color distribution
// // // // //           gradient.addColorStop(
// // // // //             0,
// // // // //             `hsla(${hue}, 70%, 80%, ${projected.alpha})`
// // // // //           );
// // // // //           gradient.addColorStop(1, `hsla(${hue}, 70%, 60%, 0)`);

// // // // //           ctx.beginPath();
// // // // //           ctx.arc(projected.x, projected.y, projected.size, 0, 2 * Math.PI);
// // // // //           ctx.fillStyle = gradient;
// // // // //           ctx.fill();

// // // // //           // Add subtle glow effect
// // // // //           ctx.shadowBlur = projected.size * 2;
// // // // //           ctx.shadowColor = `hsla(${hue}, 70%, 80%, ${projected.alpha * 0.5})`;
// // // // //           ctx.fill();
// // // // //           ctx.shadowBlur = 0;
// // // // //         }
// // // // //       });
// // // // //     };

// // // // //     animate();

// // // // //     return () => {
// // // // //       window.removeEventListener("mousemove", handleMouseMove);
// // // // //       window.removeEventListener("resize", resizeCanvas);
// // // // //       cancelAnimationFrame(animationFrameId);
// // // // //     };
// // // // //   }, []);

// // // // //   return (
// // // // //     <div ref={containerRef} className='fixed inset-0 -z-10'>
// // // // //       <canvas ref={canvasRef} className='w-full h-full' />
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // --- Enhanced Text Animation Component ---
// // // // // const EnhancedAnimatedText = ({ children, delay = 0, className = "" }) => {
// // // // //   const textRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const element = textRef.current;
// // // // //     if (!element) return;

// // // // //     // Set initial state
// // // // //     gsap.set(element, {
// // // // //       opacity: 0,
// // // // //       y: 100,
// // // // //       scale: 0.8,
// // // // //       rotationX: 45,
// // // // //     });

// // // // //     // Animate to final state with proper timing
// // // // //     const tl = gsap.timeline({ delay: delay * 0.3 + 0.2 });

// // // // //     tl.to(element, {
// // // // //       opacity: 1,
// // // // //       y: 0,
// // // // //       scale: 1,
// // // // //       rotationX: 0,
// // // // //       duration: 1.2,
// // // // //       ease: "back.out(1.7)",
// // // // //     });

// // // // //     // Add subtle floating animation after main animation
// // // // //     tl.to(
// // // // //       element,
// // // // //       {
// // // // //         y: -10,
// // // // //         duration: 3,
// // // // //         ease: "power2.inOut",
// // // // //         yoyo: true,
// // // // //         repeat: -1,
// // // // //       },
// // // // //       "+=0.5"
// // // // //     );

// // // // //     return () => {
// // // // //       tl.kill();
// // // // //     };
// // // // //   }, [delay]);

// // // // //   return (
// // // // //     <div ref={textRef} className={className}>
// // // // //       {children}
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // --- Enhanced Button Component ---
// // // // // const EnhancedButton = ({ children, onClick, className = "" }) => {
// // // // //   const buttonRef = useRef(null);
// // // // //   const glowRef = useRef(null);

// // // // //   useEffect(() => {
// // // // //     const button = buttonRef.current;
// // // // //     const glow = glowRef.current;
// // // // //     if (!button || !glow) return;

// // // // //     // Initial animation
// // // // //     gsap.set(button, { opacity: 0, scale: 0.8 });

// // // // //     const tl = gsap.timeline({ delay: 1.2 });
// // // // //     tl.to(button, {
// // // // //       opacity: 1,
// // // // //       scale: 1,
// // // // //       duration: 1,
// // // // //       ease: "back.out(1.7)",
// // // // //     });

// // // // //     // Hover animations
// // // // //     const handleMouseEnter = () => {
// // // // //       gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
// // // // //       gsap.to(glow, { opacity: 1, scale: 1.2, duration: 0.3 });
// // // // //     };

// // // // //     const handleMouseLeave = () => {
// // // // //       gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
// // // // //       gsap.to(glow, { opacity: 0, scale: 1, duration: 0.3 });
// // // // //     };

// // // // //     const handleClick = () => {
// // // // //       gsap.to(button, {
// // // // //         scale: 0.95,
// // // // //         duration: 0.1,
// // // // //         yoyo: true,
// // // // //         repeat: 1,
// // // // //         ease: "power2.inOut",
// // // // //       });
// // // // //       onClick?.();
// // // // //     };

// // // // //     button.addEventListener("mouseenter", handleMouseEnter);
// // // // //     button.addEventListener("mouseleave", handleMouseLeave);
// // // // //     button.addEventListener("click", handleClick);

// // // // //     return () => {
// // // // //       button.removeEventListener("mouseenter", handleMouseEnter);
// // // // //       button.removeEventListener("mouseleave", handleMouseLeave);
// // // // //       button.removeEventListener("click", handleClick);
// // // // //       tl.kill();
// // // // //     };
// // // // //   }, [onClick]);

// // // // //   return (
// // // // //     <div className='relative'>
// // // // //       <div
// // // // //         ref={glowRef}
// // // // //         className='absolute inset-0 bg-white/30 rounded-full blur-xl opacity-0'
// // // // //       />
// // // // //       <button
// // // // //         ref={buttonRef}
// // // // //         className={`relative px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold backdrop-blur-sm transition-all hover:bg-white/20 ${className}`}
// // // // //       >
// // // // //         {children}
// // // // //       </button>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // // --- Main Enhanced Hero Component ---
// // // // // export default function EnhancedHero() {
// // // // //   const heroRef = useRef(null);
// // // // //   const contentRef = useRef(null);
// // // // //   const [lenis, setLenis] = useState(null);

// // // // //   useEffect(() => {
// // // // //     // Initialize Lenis for smooth scrolling
// // // // //     const lenisInstance = new Lenis({
// // // // //       duration: 1.2,
// // // // //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// // // // //       smooth: true,
// // // // //     });

// // // // //     setLenis(lenisInstance);

// // // // //     function raf(time) {
// // // // //       lenisInstance.raf(time);
// // // // //       requestAnimationFrame(raf);
// // // // //     }

// // // // //     requestAnimationFrame(raf);

// // // // //     // GSAP ScrollTrigger animations
// // // // //     const hero = heroRef.current;
// // // // //     const content = contentRef.current;

// // // // //     if (hero && content) {
// // // // //       // Parallax effect for the entire hero
// // // // //       gsap.to(hero, {
// // // // //         yPercent: -50,
// // // // //         ease: "none",
// // // // //         scrollTrigger: {
// // // // //           trigger: hero,
// // // // //           start: "top top",
// // // // //           end: "bottom top",
// // // // //           scrub: true,
// // // // //         },
// // // // //       });

// // // // //       // Content fade and scale on scroll
// // // // //       gsap.to(content, {
// // // // //         opacity: 0,
// // // // //         scale: 0.8,
// // // // //         y: -100,
// // // // //         ease: "power2.out",
// // // // //         scrollTrigger: {
// // // // //           trigger: hero,
// // // // //           start: "top top",
// // // // //           end: "50% top",
// // // // //           scrub: true,
// // // // //         },
// // // // //       });
// // // // //     }

// // // // //     return () => {
// // // // //       lenisInstance.destroy();
// // // // //     };
// // // // //   }, []);

// // // // //   const scrollToContact = () => {
// // // // //     if (lenis) {
// // // // //       lenis.scrollTo("#contact", { duration: 2 });
// // // // //     } else {
// // // // //       document
// // // // //         .getElementById("contact")
// // // // //         ?.scrollIntoView({ behavior: "smooth" });
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <section ref={heroRef} id='home' className='relative w-full h-screen'>
// // // // //       <EnhancedAuroraBackground />
// // // // //       <EnhancedHonoSphere />

// // // // //       <div
// // // // //         ref={contentRef}
// // // // //         className='absolute inset-0 flex flex-col justify-center items-center text-center p-4'
// // // // //       >
// // // // //         <div className='max-w-4xl mx-auto'>
// // // // //           <EnhancedAnimatedText delay={0}>
// // // // //             <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-300'>
// // // // //               Hono Dev Studio
// // // // //             </h1>
// // // // //           </EnhancedAnimatedText>

// // // // //           <EnhancedAnimatedText delay={1} className='mt-6'>
// // // // //             <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed'>
// // // // //               We architect and build exceptional web applications that are as
// // // // //               intelligent as they are beautiful.
// // // // //             </p>
// // // // //           </EnhancedAnimatedText>

// // // // //           <EnhancedAnimatedText delay={2} className='mt-8'>
// // // // //             <EnhancedButton onClick={scrollToContact}>
// // // // //               Start a Project
// // // // //             </EnhancedButton>
// // // // //           </EnhancedAnimatedText>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import React, { useRef, useEffect, useState } from "react";
// // // // import { gsap } from "gsap";
// // // // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // // // import Lenis from "@studio-freight/lenis";

// // // // // Register GSAP plugins
// // // // gsap.registerPlugin(ScrollTrigger);

// // // // // --- Enhanced Aurora Background with GSAP ---
// // // // const EnhancedAuroraBackground = () => {
// // // //   const auroraRef = useRef(null);
// // // //   const gradientRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const aurora = auroraRef.current;
// // // //     const gradient = gradientRef.current;

// // // //     if (aurora && gradient) {
// // // //       // Create multiple aurora layers for depth
// // // //       gsap.set(aurora, { scale: 1.5, opacity: 0 });

// // // //       // Main aurora animation with immediate start
// // // //       gsap.to(aurora, {
// // // //         scale: 1.2,
// // // //         opacity: 0.4,
// // // //         duration: 8,
// // // //         ease: "power2.inOut",
// // // //         yoyo: true,
// // // //         repeat: -1,
// // // //         delay: 0.1, // Start almost immediately
// // // //       });

// // // //       // Rotation animation
// // // //       gsap.to(aurora, {
// // // //         rotation: 360,
// // // //         duration: 60,
// // // //         ease: "none",
// // // //         repeat: -1,
// // // //       });

// // // //       // Gradient shift animation
// // // //       gsap.to(gradient, {
// // // //         backgroundPosition: "200% 200%",
// // // //         duration: 20,
// // // //         ease: "none",
// // // //         repeat: -1,
// // // //       });
// // // //     }
// // // //   }, []);

// // // //   return (
// // // //     <div className='fixed inset-0 -z-20 overflow-hidden'>
// // // //       <div className='absolute inset-0 bg-gray-950' />
// // // //       <div
// // // //         ref={auroraRef}
// // // //         className='absolute top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2'
// // // //       >
// // // //         <div
// // // //           ref={gradientRef}
// // // //           className='h-full w-full rounded-full bg-gradient-to-br from-blue-500/60 via-purple-500/40 via-pink-500/30 to-transparent blur-3xl'
// // // //           style={{
// // // //             backgroundSize: "400% 400%",
// // // //             backgroundPosition: "0% 0%",
// // // //           }}
// // // //         />
// // // //       </div>

// // // //       {/* Additional floating orbs */}
// // // //       <div className='absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl animate-pulse' />
// // // //       <div
// // // //         className='absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-purple-400/20 blur-2xl animate-pulse'
// // // //         style={{ animationDelay: "2s" }}
// // // //       />
// // // //     </div>
// // // //   );
// // // // };

// // // // // --- Enhanced Interactive Sphere with GSAP ---
// // // // const EnhancedHonoSphere = () => {
// // // //   const canvasRef = useRef(null);
// // // //   const containerRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const canvas = canvasRef.current;
// // // //     const container = containerRef.current;
// // // //     if (!canvas || !container) return;

// // // //     const ctx = canvas.getContext("2d");
// // // //     if (!ctx) return;

// // // //     let animationFrameId;
// // // //     let mouse = { x: 0, y: 0 };
// // // //     let targetMouse = { x: 0, y: 0 };

// // // //     const resizeCanvas = () => {
// // // //       canvas.width = window.innerWidth;
// // // //       canvas.height = window.innerHeight;
// // // //     };

// // // //     resizeCanvas();

// // // //     const handleMouseMove = (event) => {
// // // //       targetMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
// // // //       targetMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
// // // //     };

// // // //     window.addEventListener("mousemove", handleMouseMove);
// // // //     window.addEventListener("resize", resizeCanvas);

// // // //     // Smooth mouse following
// // // //     const updateMouse = () => {
// // // //       mouse.x += (targetMouse.x - mouse.x) * 0.05;
// // // //       mouse.y += (targetMouse.y - mouse.y) * 0.05;
// // // //     };

// // // //     // Enhanced particle system
// // // //     const particles = [];
// // // //     const numParticles = 200;
// // // //     const sphereRadius = Math.min(window.innerWidth, window.innerHeight) * 0.25;

// // // //     class EnhancedParticle {
// // // //       constructor() {
// // // //         this.reset();
// // // //         this.originalX = this.x;
// // // //         this.originalY = this.y;
// // // //         this.originalZ = this.z;
// // // //         this.time = Math.random() * Math.PI * 2;
// // // //         this.speed = 0.01 + Math.random() * 0.02;
// // // //       }

// // // //       reset() {
// // // //         const phi = Math.random() * 2 * Math.PI;
// // // //         const costheta = Math.random() * 2 - 1;
// // // //         const theta = Math.acos(costheta);

// // // //         this.x = sphereRadius * Math.sin(theta) * Math.cos(phi);
// // // //         this.y = sphereRadius * Math.sin(theta) * Math.sin(phi);
// // // //         this.z = sphereRadius * Math.cos(theta);
// // // //         this.size = Math.random() * 3 + 1;
// // // //       }

// // // //       update() {
// // // //         this.time += this.speed;

// // // //         // Gentle floating motion
// // // //         const floatX = Math.sin(this.time) * 10;
// // // //         const floatY = Math.cos(this.time * 0.7) * 10;
// // // //         const floatZ = Math.sin(this.time * 0.5) * 20;

// // // //         // Mouse interaction
// // // //         const mouseInfluence = 50;
// // // //         const mouseX = mouse.x * mouseInfluence;
// // // //         const mouseY = mouse.y * mouseInfluence;

// // // //         this.x = this.originalX + floatX + mouseX;
// // // //         this.y = this.originalY + floatY + mouseY;
// // // //         this.z = this.originalZ + floatZ;
// // // //       }

// // // //       project() {
// // // //         const perspective = 800 / (800 + this.z);
// // // //         return {
// // // //           x: this.x * perspective + canvas.width / 2,
// // // //           y: this.y * perspective + canvas.height / 2,
// // // //           size: this.size * perspective,
// // // //           alpha: Math.max(0.1, perspective),
// // // //         };
// // // //       }
// // // //     }

// // // //     // Initialize particles
// // // //     for (let i = 0; i < numParticles; i++) {
// // // //       particles.push(new EnhancedParticle());
// // // //     }

// // // //     // Animation loop
// // // //     const animate = () => {
// // // //       animationFrameId = requestAnimationFrame(animate);
// // // //       updateMouse();

// // // //       ctx.clearRect(0, 0, canvas.width, canvas.height);

// // // //       // Sort particles by z-depth for proper rendering
// // // //       particles.sort((a, b) => b.z - a.z);

// // // //       particles.forEach((particle, index) => {
// // // //         particle.update();
// // // //         const projected = particle.project();

// // // //         if (
// // // //           projected.x > -50 &&
// // // //           projected.x < canvas.width + 50 &&
// // // //           projected.y > -50 &&
// // // //           projected.y < canvas.height + 50
// // // //         ) {
// // // //           // Create gradient for each particle
// // // //           const gradient = ctx.createRadialGradient(
// // // //             projected.x,
// // // //             projected.y,
// // // //             0,
// // // //             projected.x,
// // // //             projected.y,
// // // //             projected.size * 2
// // // //           );

// // // //           const hue = (index * 137.5) % 360; // Golden angle for color distribution
// // // //           gradient.addColorStop(
// // // //             0,
// // // //             `hsla(${hue}, 70%, 80%, ${projected.alpha})`
// // // //           );
// // // //           gradient.addColorStop(1, `hsla(${hue}, 70%, 60%, 0)`);

// // // //           ctx.beginPath();
// // // //           ctx.arc(projected.x, projected.y, projected.size, 0, 2 * Math.PI);
// // // //           ctx.fillStyle = gradient;
// // // //           ctx.fill();

// // // //           // Add subtle glow effect
// // // //           ctx.shadowBlur = projected.size * 2;
// // // //           ctx.shadowColor = `hsla(${hue}, 70%, 80%, ${projected.alpha * 0.5})`;
// // // //           ctx.fill();
// // // //           ctx.shadowBlur = 0;
// // // //         }
// // // //       });
// // // //     };

// // // //     animate();

// // // //     return () => {
// // // //       window.removeEventListener("mousemove", handleMouseMove);
// // // //       window.removeEventListener("resize", resizeCanvas);
// // // //       cancelAnimationFrame(animationFrameId);
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <div ref={containerRef} className='fixed inset-0 -z-10'>
// // // //       <canvas ref={canvasRef} className='w-full h-full' />
// // // //     </div>
// // // //   );
// // // // };

// // // // // --- Enhanced Text Animation Component ---
// // // // const EnhancedAnimatedText = ({ children, delay = 0, className = "" }) => {
// // // //   const textRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const element = textRef.current;
// // // //     if (!element) return;

// // // //     // Set initial state
// // // //     gsap.set(element, {
// // // //       opacity: 0,
// // // //       y: 100,
// // // //       scale: 0.8,
// // // //       rotationX: 45,
// // // //     });

// // // //     // Animate to final state with proper timing
// // // //     const tl = gsap.timeline({ delay: delay * 0.3 + 0.2 });

// // // //     tl.to(element, {
// // // //       opacity: 1,
// // // //       y: 0,
// // // //       scale: 1,
// // // //       rotationX: 0,
// // // //       duration: 1.2,
// // // //       ease: "back.out(1.7)",
// // // //     });

// // // //     // Add subtle floating animation after main animation
// // // //     tl.to(
// // // //       element,
// // // //       {
// // // //         y: -10,
// // // //         duration: 3,
// // // //         ease: "power2.inOut",
// // // //         yoyo: true,
// // // //         repeat: -1,
// // // //       },
// // // //       "+=0.5"
// // // //     );

// // // //     return () => {
// // // //       tl.kill();
// // // //     };
// // // //   }, [delay]);

// // // //   return (
// // // //     <div ref={textRef} className={className}>
// // // //       {children}
// // // //     </div>
// // // //   );
// // // // };

// // // // // --- Enhanced Button Component ---
// // // // const EnhancedButton = ({ children, onClick, className = "" }) => {
// // // //   const buttonRef = useRef(null);
// // // //   const glowRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const button = buttonRef.current;
// // // //     const glow = glowRef.current;
// // // //     if (!button || !glow) return;

// // // //     // Initial animation
// // // //     gsap.set(button, { opacity: 0, scale: 0.8 });

// // // //     const tl = gsap.timeline({ delay: 1.2 });
// // // //     tl.to(button, {
// // // //       opacity: 1,
// // // //       scale: 1,
// // // //       duration: 1,
// // // //       ease: "back.out(1.7)",
// // // //     });

// // // //     // Hover animations
// // // //     const handleMouseEnter = () => {
// // // //       gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
// // // //       gsap.to(glow, { opacity: 1, scale: 1.2, duration: 0.3 });
// // // //     };

// // // //     const handleMouseLeave = () => {
// // // //       gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
// // // //       gsap.to(glow, { opacity: 0, scale: 1, duration: 0.3 });
// // // //     };

// // // //     const handleClick = () => {
// // // //       gsap.to(button, {
// // // //         scale: 0.95,
// // // //         duration: 0.1,
// // // //         yoyo: true,
// // // //         repeat: 1,
// // // //         ease: "power2.inOut",
// // // //       });
// // // //       onClick?.();
// // // //     };

// // // //     button.addEventListener("mouseenter", handleMouseEnter);
// // // //     button.addEventListener("mouseleave", handleMouseLeave);
// // // //     button.addEventListener("click", handleClick);

// // // //     return () => {
// // // //       button.removeEventListener("mouseenter", handleMouseEnter);
// // // //       button.removeEventListener("mouseleave", handleMouseLeave);
// // // //       button.removeEventListener("click", handleClick);
// // // //       tl.kill();
// // // //     };
// // // //   }, [onClick]);

// // // //   return (
// // // //     <div className='relative'>
// // // //       <div
// // // //         ref={glowRef}
// // // //         className='absolute inset-0 bg-white/30 rounded-full blur-xl opacity-0'
// // // //       />
// // // //       <button
// // // //         ref={buttonRef}
// // // //         className={`relative px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold backdrop-blur-sm transition-all hover:bg-white/20 ${className}`}
// // // //       >
// // // //         {children}
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // // --- Main Enhanced Hero Component ---
// // // // export default function EnhancedHero() {
// // // //   const targetRef = useRef(null);
// // // //   const contentRef = useRef(null);
// // // //   const [lenis, setLenis] = useState(null);

// // // //   useEffect(() => {
// // // //     // Initialize Lenis for smooth scrolling
// // // //     const lenisInstance = new Lenis({
// // // //       duration: 1.2,
// // // //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// // // //       smooth: true,
// // // //     });

// // // //     setLenis(lenisInstance);

// // // //     function raf(time) {
// // // //       lenisInstance.raf(time);
// // // //       requestAnimationFrame(raf);
// // // //     }

// // // //     requestAnimationFrame(raf);

// // // //     // GSAP ScrollTrigger animations for smooth parallax scrolling
// // // //     const hero = targetRef.current;
// // // //     const content = contentRef.current;

// // // //     if (hero && content) {
// // // //       // Smooth fade and scale on scroll - similar to second version
// // // //       gsap.to(content, {
// // // //         opacity: 0,
// // // //         scale: 0.8,
// // // //         ease: "none",
// // // //         scrollTrigger: {
// // // //           trigger: hero,
// // // //           start: "start start",
// // // //           end: "50% start",
// // // //           scrub: true,
// // // //         },
// // // //       });

// // // //       // Optional: Add slight upward movement
// // // //       gsap.to(content, {
// // // //         y: -100,
// // // //         ease: "none",
// // // //         scrollTrigger: {
// // // //           trigger: hero,
// // // //           start: "start start",
// // // //           end: "50% start",
// // // //           scrub: true,
// // // //         },
// // // //       });
// // // //     }

// // // //     return () => {
// // // //       lenisInstance.destroy();
// // // //     };
// // // //   }, []);

// // // //   const scrollToContact = () => {
// // // //     if (lenis) {
// // // //       lenis.scrollTo("#contact", { duration: 2 });
// // // //     } else {
// // // //       document
// // // //         .getElementById("contact")
// // // //         ?.scrollIntoView({ behavior: "smooth" });
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section ref={targetRef} id='home' className='relative w-full h-[200vh]'>
// // // //       <EnhancedAuroraBackground />
// // // //       <EnhancedHonoSphere />

// // // //       <div
// // // //         ref={contentRef}
// // // //         className='fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-center p-4'
// // // //       >
// // // //         <div className='max-w-4xl mx-auto'>
// // // //           <EnhancedAnimatedText delay={0}>
// // // //             <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-300'>
// // // //               Hono Dev Studio
// // // //             </h1>
// // // //           </EnhancedAnimatedText>

// // // //           <EnhancedAnimatedText delay={1} className='mt-6'>
// // // //             <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed'>
// // // //               We architect and build exceptional web applications that are as
// // // //               intelligent as they are beautiful.
// // // //             </p>
// // // //           </EnhancedAnimatedText>

// // // //           <EnhancedAnimatedText delay={2} className='mt-8'>
// // // //             <EnhancedButton onClick={scrollToContact}>
// // // //               Start a Project
// // // //             </EnhancedButton>
// // // //           </EnhancedAnimatedText>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // "use client";

// // import React, { useRef, useEffect, useState } from "react";
// // import { gsap } from "gsap";
// // import { ScrollTrigger } from "gsap/ScrollTrigger";
// // import Lenis from "@studio-freight/lenis";

// // // Register GSAP plugins
// // gsap.registerPlugin(ScrollTrigger);

// // // --- Enhanced Aurora Background with GSAP ---
// // const EnhancedAuroraBackground = () => {
// //   const auroraRef = useRef(null);
// //   const gradientRef = useRef(null);

// //   useEffect(() => {
// //     const aurora = auroraRef.current;
// //     const gradient = gradientRef.current;

// //     if (aurora && gradient) {
// //       // Create multiple aurora layers for depth
// //       gsap.set(aurora, { scale: 1.5, opacity: 0 });

// //       // Main aurora animation with immediate start
// //       gsap.to(aurora, {
// //         scale: 1.2,
// //         opacity: 0.4,
// //         duration: 8,
// //         ease: "power2.inOut",
// //         yoyo: true,
// //         repeat: -1,
// //         delay: 0.1, // Start almost immediately
// //       });

// //       // Rotation animation
// //       gsap.to(aurora, {
// //         rotation: 360,
// //         duration: 60,
// //         ease: "none",
// //         repeat: -1,
// //       });

// //       // Gradient shift animation
// //       gsap.to(gradient, {
// //         backgroundPosition: "200% 200%",
// //         duration: 20,
// //         ease: "none",
// //         repeat: -1,
// //       });
// //     }
// //   }, []);

// //   return (
// //     <div className='fixed inset-0 -z-20 overflow-hidden'>
// //       <div className='absolute inset-0 bg-gray-950' />
// //       <div
// //         ref={auroraRef}
// //         className='absolute top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2'
// //       >
// //         <div
// //           ref={gradientRef}
// //           className='h-full w-full rounded-full bg-gradient-to-br from-blue-500/60 via-purple-500/40 via-pink-500/30 to-transparent blur-3xl'
// //           style={{
// //             backgroundSize: "400% 400%",
// //             backgroundPosition: "0% 0%",
// //           }}
// //         />
// //       </div>

// //       {/* Additional floating orbs */}
// //       <div className='absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl animate-pulse' />
// //       <div
// //         className='absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-purple-400/20 blur-2xl animate-pulse'
// //         style={{ animationDelay: "2s" }}
// //       />
// //     </div>
// //   );
// // };

// // // --- Enhanced Interactive Sphere with GSAP ---
// // const EnhancedHonoSphere = () => {
// //   const canvasRef = useRef(null);
// //   const containerRef = useRef(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     const container = containerRef.current;
// //     if (!canvas || !container) return;

// //     const ctx = canvas.getContext("2d");
// //     if (!ctx) return;

// //     let animationFrameId;
// //     let mouse = { x: 0, y: 0 };
// //     let targetMouse = { x: 0, y: 0 };

// //     const resizeCanvas = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //     };

// //     resizeCanvas();

// //     const handleMouseMove = (event) => {
// //       targetMouse.x = event.clientX;
// //       targetMouse.y = event.clientY;
// //     };

// //     window.addEventListener("mousemove", handleMouseMove);
// //     window.addEventListener("resize", resizeCanvas);

// //     // Smooth mouse following with better responsiveness
// //     const updateMouse = () => {
// //       mouse.x += (targetMouse.x - mouse.x) * 0.1;
// //       mouse.y += (targetMouse.y - mouse.y) * 0.1;
// //     };

// //     // Enhanced particle system
// //     const particles = [];
// //     const numParticles = 200;
// //     const sphereRadius = Math.min(window.innerWidth, window.innerHeight) * 0.25;

// //     class EnhancedParticle {
// //       constructor() {
// //         this.reset();
// //         this.originalX = this.x;
// //         this.originalY = this.y;
// //         this.originalZ = this.z;
// //         this.time = Math.random() * Math.PI * 2;
// //         this.speed = 0.01 + Math.random() * 0.02;
// //         this.mouseForceX = 0;
// //         this.mouseForceY = 0;
// //         this.mouseForceZ = 0;
// //         this.baseSize = this.size;
// //       }

// //       reset() {
// //         const phi = Math.random() * 2 * Math.PI;
// //         const costheta = Math.random() * 2 - 1;
// //         const theta = Math.acos(costheta);

// //         this.x = sphereRadius * Math.sin(theta) * Math.cos(phi);
// //         this.y = sphereRadius * Math.sin(theta) * Math.sin(phi);
// //         this.z = sphereRadius * Math.cos(theta);
// //         this.size = Math.random() * 3 + 1;
// //         this.baseSize = this.size;
// //       }

// //       update() {
// //         this.time += this.speed;

// //         // Gentle floating motion
// //         const floatX = Math.sin(this.time) * 15;
// //         const floatY = Math.cos(this.time * 0.7) * 15;
// //         const floatZ = Math.sin(this.time * 0.5) * 30;

// //         // Enhanced mouse interaction with repulsion and attraction
// //         const projected = this.project();
// //         const dx = mouse.x - projected.x;
// //         const dy = mouse.y - projected.y;
// //         const distance = Math.sqrt(dx * dx + dy * dy);

// //         // Create different interaction zones
// //         const attractionRadius = 120;
// //         const repulsionRadius = 60;

// //         if (distance < attractionRadius) {
// //           const force = (attractionRadius - distance) / attractionRadius;

// //           if (distance < repulsionRadius) {
// //             // Repulsion zone - push away
// //             const angle = Math.atan2(dy, dx);
// //             const repulsionForce =
// //               ((repulsionRadius - distance) / repulsionRadius) * 2;
// //             this.mouseForceX += -Math.cos(angle) * repulsionForce;
// //             this.mouseForceY += -Math.sin(angle) * repulsionForce;
// //             this.mouseForceZ += Math.sin(this.time * 2) * repulsionForce;

// //             // Size grows when close to mouse
// //             this.size = this.baseSize * (1 + repulsionForce * 0.5);
// //           } else {
// //             // Attraction zone - gentle pull
// //             const angle = Math.atan2(dy, dx);
// //             const attractionForce = force * 0.3;
// //             this.mouseForceX += Math.cos(angle) * attractionForce;
// //             this.mouseForceY += Math.sin(angle) * attractionForce;

// //             // Slight size increase in attraction zone
// //             this.size = this.baseSize * (1 + force * 0.2);
// //           }
// //         } else {
// //           // Return to base size when far from mouse
// //           this.size += (this.baseSize - this.size) * 0.1;
// //         }

// //         // Apply forces with damping
// //         this.mouseForceX *= 0.85;
// //         this.mouseForceY *= 0.85;
// //         this.mouseForceZ *= 0.85;

// //         // Spring back to original position
// //         const springForce = 0.02;
// //         const returnX = (this.originalX - this.x) * springForce;
// //         const returnY = (this.originalY - this.y) * springForce;
// //         const returnZ = (this.originalZ - this.z) * springForce;

// //         // Combine all forces
// //         this.x = this.originalX + floatX + this.mouseForceX * 8 + returnX * 20;
// //         this.y = this.originalY + floatY + this.mouseForceY * 8 + returnY * 20;
// //         this.z = this.originalZ + floatZ + this.mouseForceZ * 8 + returnZ * 20;
// //       }

// //       project() {
// //         const perspective = 800 / (800 + this.z);
// //         return {
// //           x: this.x * perspective + canvas.width / 2,
// //           y: this.y * perspective + canvas.height / 2,
// //           size: this.size * perspective,
// //           alpha: Math.max(0.1, perspective),
// //         };
// //       }
// //     }

// //     // Initialize particles
// //     for (let i = 0; i < numParticles; i++) {
// //       particles.push(new EnhancedParticle());
// //     }

// //     // Animation loop
// //     const animate = () => {
// //       animationFrameId = requestAnimationFrame(animate);
// //       updateMouse();

// //       ctx.clearRect(0, 0, canvas.width, canvas.height);

// //       // Sort particles by z-depth for proper rendering
// //       particles.sort((a, b) => b.z - a.z);

// //       particles.forEach((particle, index) => {
// //         particle.update();
// //         const projected = particle.project();

// //         if (
// //           projected.x > -50 &&
// //           projected.x < canvas.width + 50 &&
// //           projected.y > -50 &&
// //           projected.y < canvas.height + 50
// //         ) {
// //           // Enhanced gradient for each particle with distance-based intensity
// //           const gradient = ctx.createRadialGradient(
// //             projected.x,
// //             projected.y,
// //             0,
// //             projected.x,
// //             projected.y,
// //             projected.size * 3
// //           );

// //           const hue = (index * 137.5) % 360; // Golden angle for color distribution
// //           const intensity = Math.max(0.3, projected.alpha);

// //           // Brighter colors when particles are affected by mouse
// //           const distance = Math.sqrt(
// //             Math.pow(mouse.x - projected.x, 2) +
// //               Math.pow(mouse.y - projected.y, 2)
// //           );
// //           const mouseEffect = distance < 120 ? (120 - distance) / 120 : 0;
// //           const brightness = 60 + mouseEffect * 40;
// //           const saturation = 50 + mouseEffect * 30;

// //           gradient.addColorStop(
// //             0,
// //             `hsla(${hue}, ${saturation}%, ${brightness}%, ${projected.alpha * (1 + mouseEffect)})`
// //           );
// //           gradient.addColorStop(
// //             0.5,
// //             `hsla(${hue}, ${saturation}%, ${brightness * 0.7}%, ${projected.alpha * 0.5})`
// //           );
// //           gradient.addColorStop(
// //             1,
// //             `hsla(${hue}, ${saturation}%, ${brightness * 0.4}%, 0)`
// //           );

// //           // Main particle
// //           ctx.beginPath();
// //           ctx.arc(projected.x, projected.y, projected.size, 0, 2 * Math.PI);
// //           ctx.fillStyle = gradient;
// //           ctx.fill();

// //           // Enhanced glow effect when near mouse
// //           if (mouseEffect > 0) {
// //             ctx.shadowBlur = projected.size * 4 * mouseEffect;
// //             ctx.shadowColor = `hsla(${hue}, ${saturation}%, ${brightness}%, ${projected.alpha * mouseEffect})`;
// //             ctx.fill();
// //             ctx.shadowBlur = 0;

// //             // Additional inner glow
// //             const innerGradient = ctx.createRadialGradient(
// //               projected.x,
// //               projected.y,
// //               0,
// //               projected.x,
// //               projected.y,
// //               projected.size
// //             );
// //             innerGradient.addColorStop(
// //               0,
// //               `hsla(${hue}, 90%, 90%, ${mouseEffect * 0.5})`
// //             );
// //             innerGradient.addColorStop(1, `hsla(${hue}, 90%, 90%, 0)`);

// //             ctx.beginPath();
// //             ctx.arc(
// //               projected.x,
// //               projected.y,
// //               projected.size * 0.6,
// //               0,
// //               2 * Math.PI
// //             );
// //             ctx.fillStyle = innerGradient;
// //             ctx.fill();
// //           }
// //         }
// //       });
// //     };

// //     animate();

// //     return () => {
// //       window.removeEventListener("mousemove", handleMouseMove);
// //       window.removeEventListener("resize", resizeCanvas);
// //       cancelAnimationFrame(animationFrameId);
// //     };
// //   }, []);

// //   return (
// //     <div ref={containerRef} className='fixed inset-0 -z-10'>
// //       <canvas ref={canvasRef} className='w-full h-full' />
// //     </div>
// //   );
// // };

// // // --- Enhanced Text Animation Component ---
// // const EnhancedAnimatedText = ({ children, delay = 0, className = "" }) => {
// //   const textRef = useRef(null);

// //   useEffect(() => {
// //     const element = textRef.current;
// //     if (!element) return;

// //     // Set initial state
// //     gsap.set(element, {
// //       opacity: 0,
// //       y: 100,
// //       scale: 0.8,
// //       rotationX: 45,
// //     });

// //     // Animate to final state with proper timing
// //     const tl = gsap.timeline({ delay: delay * 0.3 + 0.2 });

// //     tl.to(element, {
// //       opacity: 1,
// //       y: 0,
// //       scale: 1,
// //       rotationX: 0,
// //       duration: 1.2,
// //       ease: "back.out(1.7)",
// //     });

// //     // Add subtle floating animation after main animation
// //     tl.to(
// //       element,
// //       {
// //         y: -10,
// //         duration: 3,
// //         ease: "power2.inOut",
// //         yoyo: true,
// //         repeat: -1,
// //       },
// //       "+=0.5"
// //     );

// //     return () => {
// //       tl.kill();
// //     };
// //   }, [delay]);

// //   return (
// //     <div ref={textRef} className={className}>
// //       {children}
// //     </div>
// //   );
// // };

// // // --- Enhanced Button Component ---
// // const EnhancedButton = ({ children, onClick, className = "" }) => {
// //   const buttonRef = useRef(null);
// //   const glowRef = useRef(null);

// //   useEffect(() => {
// //     const button = buttonRef.current;
// //     const glow = glowRef.current;
// //     if (!button || !glow) return;

// //     // Initial animation
// //     gsap.set(button, { opacity: 0, scale: 0.8 });

// //     const tl = gsap.timeline({ delay: 1.2 });
// //     tl.to(button, {
// //       opacity: 1,
// //       scale: 1,
// //       duration: 1,
// //       ease: "back.out(1.7)",
// //     });

// //     // Hover animations
// //     const handleMouseEnter = () => {
// //       gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
// //       gsap.to(glow, { opacity: 1, scale: 1.2, duration: 0.3 });
// //     };

// //     const handleMouseLeave = () => {
// //       gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
// //       gsap.to(glow, { opacity: 0, scale: 1, duration: 0.3 });
// //     };

// //     const handleClick = () => {
// //       gsap.to(button, {
// //         scale: 0.95,
// //         duration: 0.1,
// //         yoyo: true,
// //         repeat: 1,
// //         ease: "power2.inOut",
// //       });
// //       onClick?.();
// //     };

// //     button.addEventListener("mouseenter", handleMouseEnter);
// //     button.addEventListener("mouseleave", handleMouseLeave);
// //     button.addEventListener("click", handleClick);

// //     return () => {
// //       button.removeEventListener("mouseenter", handleMouseEnter);
// //       button.removeEventListener("mouseleave", handleMouseLeave);
// //       button.removeEventListener("click", handleClick);
// //       tl.kill();
// //     };
// //   }, [onClick]);

// //   return (
// //     <div className='relative'>
// //       <div
// //         ref={glowRef}
// //         className='absolute inset-0 bg-white/30 rounded-full blur-xl opacity-0'
// //       />
// //       <button
// //         ref={buttonRef}
// //         className={`relative px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold backdrop-blur-sm transition-all hover:bg-white/20 ${className}`}
// //       >
// //         {children}
// //       </button>
// //     </div>
// //   );
// // };

// // // --- Main Enhanced Hero Component ---
// // export default function EnhancedHero() {
// //   const targetRef = useRef(null);
// //   const contentRef = useRef(null);
// //   const [lenis, setLenis] = useState(null);

// //   useEffect(() => {
// //     // Initialize Lenis for smooth scrolling
// //     const lenisInstance = new Lenis({
// //       duration: 1.2,
// //       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
// //       smooth: true,
// //     });

// //     setLenis(lenisInstance);

// //     function raf(time) {
// //       lenisInstance.raf(time);
// //       requestAnimationFrame(raf);
// //     }

// //     requestAnimationFrame(raf);

// //     // GSAP ScrollTrigger animations for smooth parallax scrolling
// //     const hero = targetRef.current;
// //     const content = contentRef.current;

// //     if (hero && content) {
// //       // Smooth fade and scale on scroll - similar to second version
// //       gsap.to(content, {
// //         opacity: 0,
// //         scale: 0.8,
// //         ease: "none",
// //         scrollTrigger: {
// //           trigger: hero,
// //           start: "start start",
// //           end: "50% start",
// //           scrub: true,
// //         },
// //       });

// //       // Optional: Add slight upward movement
// //       gsap.to(content, {
// //         y: -100,
// //         ease: "none",
// //         scrollTrigger: {
// //           trigger: hero,
// //           start: "start start",
// //           end: "50% start",
// //           scrub: true,
// //         },
// //       });
// //     }

// //     return () => {
// //       lenisInstance.destroy();
// //     };
// //   }, []);

// //   const scrollToContact = () => {
// //     if (lenis) {
// //       lenis.scrollTo("#contact", { duration: 2 });
// //     } else {
// //       document
// //         .getElementById("contact")
// //         ?.scrollIntoView({ behavior: "smooth" });
// //     }
// //   };

// //   return (
// //     <section ref={targetRef} id='home' className='relative w-full h-[200vh]'>
// //       <EnhancedAuroraBackground />
// //       <EnhancedHonoSphere />

// //       <div
// //         ref={contentRef}
// //         className='fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-center p-4'
// //       >
// //         <div className='max-w-4xl mx-auto'>
// //           <EnhancedAnimatedText delay={0}>
// //             <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-300'>
// //               Hono Dev Studio
// //             </h1>
// //           </EnhancedAnimatedText>

// //           <EnhancedAnimatedText delay={1} className='mt-6'>
// //             <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed'>
// //               We architect and build exceptional web applications that are as
// //               intelligent as they are beautiful.
// //             </p>
// //           </EnhancedAnimatedText>

// //           <EnhancedAnimatedText delay={2} className='mt-8'>
// //             <EnhancedButton onClick={scrollToContact}>
// //               Start a Project
// //             </EnhancedButton>
// //           </EnhancedAnimatedText>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// //nice code

// "use client";

// import React, { useRef, useEffect, useState, useCallback } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Lenis from "@studio-freight/lenis";

// // Register GSAP plugins
// gsap.registerPlugin(ScrollTrigger);

// // --- Enhanced Aurora Background with GSAP ---
// const EnhancedAuroraBackground = () => {
//   const auroraRef = useRef(null);
//   const gradientRef = useRef(null);

//   useEffect(() => {
//     const aurora = auroraRef.current;
//     const gradient = gradientRef.current;

//     if (aurora && gradient) {
//       // Create multiple aurora layers for depth
//       gsap.set(aurora, { scale: 1.5, opacity: 0 });

//       // Main aurora animation with immediate start and more dynamic scaling
//       gsap.to(aurora, {
//         scale: 1.2,
//         opacity: 0.4,
//         duration: 8,
//         ease: "power2.inOut",
//         yoyo: true,
//         repeat: -1,
//         delay: 0.1, // Start almost immediately
//         // Introduce slight x/y variation for a more organic feel
//         x: "+=20",
//         y: "-=15",
//       });

//       // Rotation animation with a slightly different speed for subtle de-sync
//       gsap.to(aurora, {
//         rotation: 360,
//         duration: 70, // Slightly longer duration
//         ease: "none",
//         repeat: -1,
//       });

//       // Gradient shift animation
//       gsap.to(gradient, {
//         backgroundPosition: "200% 200%",
//         duration: 20,
//         ease: "none",
//         repeat: -1,
//       });
//     }
//   }, []);

//   return (
//     <div className='fixed inset-0 -z-20 overflow-hidden'>
//       <div className='absolute inset-0 bg-gray-950' />
//       <div
//         ref={auroraRef}
//         className='absolute top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2'
//       >
//         <div
//           ref={gradientRef}
//           className='h-full w-full rounded-full bg-gradient-to-br from-blue-500/60 via-purple-500/40 via-pink-500/30 to-transparent blur-3xl'
//           style={{
//             backgroundSize: "400% 400%",
//             backgroundPosition: "0% 0%",
//           }}
//         />
//       </div>

//       {/* Additional floating orbs with subtle independent animations */}
//       <div className='absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl animate-pulse' />
//       <div
//         className='absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-purple-400/20 blur-2xl animate-pulse'
//         style={{ animationDelay: "2s", animationDuration: "3s" }} // Vary duration
//       />
//       <div
//         className='absolute top-1/3 right-1/5 h-20 w-20 rounded-full bg-pink-400/15 blur-2xl animate-pulse'
//         style={{ animationDelay: "1s", animationDuration: "4s" }} // Add another orb
//       />
//     </div>
//   );
// };

// // --- Enhanced Interactive Sphere with GSAP ---
// const EnhancedHonoSphere = () => {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const animationFrameId = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     if (!canvas || !container) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let mouse = { x: 0, y: 0 };
//     let targetMouse = { x: 0, y: 0 };

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     resizeCanvas();

//     const handleMouseMove = (event) => {
//       targetMouse.x = event.clientX;
//       targetMouse.y = event.clientY;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("resize", resizeCanvas);

//     const updateMouse = () => {
//       mouse.x += (targetMouse.x - mouse.x) * 0.1;
//       mouse.y += (targetMouse.y - mouse.y) * 0.1;
//     };

//     // Enhanced particle system
//     const particles = [];
//     // Adjust particle count based on screen size for performance
//     const numParticles = window.innerWidth < 768 ? 120 : 250; // More particles on larger screens
//     const sphereRadius = Math.min(window.innerWidth, window.innerHeight) * 0.25;

//     class EnhancedParticle {
//       constructor() {
//         this.reset();
//         this.originalX = this.x;
//         this.originalY = this.y;
//         this.originalZ = this.z;
//         this.time = Math.random() * Math.PI * 2;
//         this.speed = 0.01 + Math.random() * 0.02;
//         this.mouseForceX = 0;
//         this.mouseForceY = 0;
//         this.mouseForceZ = 0;
//         this.baseSize = this.size;
//       }

//       reset() {
//         const phi = Math.random() * 2 * Math.PI;
//         const costheta = Math.random() * 2 - 1;
//         const theta = Math.acos(costheta);

//         this.x = sphereRadius * Math.sin(theta) * Math.cos(phi);
//         this.y = sphereRadius * Math.sin(theta) * Math.sin(phi);
//         this.z = sphereRadius * Math.cos(theta) + (Math.random() - 0.5) * 50; // Add subtle initial z variation
//         this.size = Math.random() * 2 + 1.5; // Slightly adjusted base size range
//         this.baseSize = this.size;
//       }

//       update() {
//         this.time += this.speed;

//         // Gentle floating motion
//         const floatX = Math.sin(this.time) * 15;
//         const floatY = Math.cos(this.time * 0.7) * 15;
//         const floatZ = Math.sin(this.time * 0.5) * 30;

//         // Enhanced mouse interaction with repulsion and attraction
//         const projected = this.project();
//         const dx = mouse.x - projected.x;
//         const dy = mouse.y - projected.y;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         // Create different interaction zones
//         const attractionRadius = 150; // Slightly larger attraction zone
//         const repulsionRadius = 70; // Slightly larger repulsion zone

//         if (distance < attractionRadius) {
//           const force = (attractionRadius - distance) / attractionRadius;

//           if (distance < repulsionRadius) {
//             // Repulsion zone - push away
//             const angle = Math.atan2(dy, dx);
//             const repulsionForce =
//               ((repulsionRadius - distance) / repulsionRadius) * 2.5; // Stronger repulsion
//             this.mouseForceX += -Math.cos(angle) * repulsionForce;
//             this.mouseForceY += -Math.sin(angle) * repulsionForce;
//             this.mouseForceZ +=
//               Math.sin(this.time * 2.2) * repulsionForce * 0.5; // Z-axis interaction
//             this.size = this.baseSize * (1 + repulsionForce * 0.7); // More pronounced size growth
//           } else {
//             // Attraction zone - gentle pull
//             const angle = Math.atan2(dy, dx);
//             const attractionForce = force * 0.4; // Slightly stronger attraction
//             this.mouseForceX += Math.cos(angle) * attractionForce;
//             this.mouseForceY += Math.sin(angle) * attractionForce;
//             this.size = this.baseSize * (1 + force * 0.3); // Slightly more size increase
//           }
//         } else {
//           // Return to base size when far from mouse
//           this.size += (this.baseSize - this.size) * 0.15; // Faster return to base size
//         }

//         // Apply forces with damping
//         this.mouseForceX *= 0.82; // Slightly more damping
//         this.mouseForceY *= 0.82;
//         this.mouseForceZ *= 0.82;

//         // Spring back to original position with dynamic spring constant
//         const springForce = 0.025; // Slightly stronger spring
//         const returnX = (this.originalX - this.x) * springForce;
//         const returnY = (this.originalY - this.y) * springForce;
//         const returnZ = (this.originalZ - this.z) * springForce;

//         // Combine all forces
//         this.x += floatX + this.mouseForceX * 8 + returnX * 20;
//         this.y += floatY + this.mouseForceY * 8 + returnY * 20;
//         this.z += floatZ + this.mouseForceZ * 8 + returnZ * 20;
//       }

//       project() {
//         const perspective = 800 / (800 + this.z);
//         return {
//           x: this.x * perspective + canvas.width / 2,
//           y: this.y * perspective + canvas.height / 2,
//           size: this.size * perspective,
//           alpha: Math.max(0.1, perspective),
//         };
//       }
//     }

//     // Initialize particles
//     for (let i = 0; i < numParticles; i++) {
//       particles.push(new EnhancedParticle());
//     }

//     // Animation loop
//     const animate = () => {
//       animationFrameId.current = requestAnimationFrame(animate);
//       updateMouse();

//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Sort particles by z-depth for proper rendering
//       particles.sort((a, b) => b.z - a.z);

//       particles.forEach((particle, index) => {
//         particle.update();
//         const projected = particle.project();

//         if (
//           projected.x > -50 &&
//           projected.x < canvas.width + 50 &&
//           projected.y > -50 &&
//           projected.y < canvas.height + 50
//         ) {
//           // Enhanced gradient for each particle with distance-based intensity
//           const gradient = ctx.createRadialGradient(
//             projected.x,
//             projected.y,
//             0,
//             projected.x,
//             projected.y,
//             projected.size * 3
//           );

//           const hue = (index * 137.5) % 360; // Golden angle for color distribution
//           const intensity = Math.max(0.3, projected.alpha);

//           // Brighter colors when particles are affected by mouse
//           const distance = Math.sqrt(
//             Math.pow(mouse.x - projected.x, 2) +
//               Math.pow(mouse.y - projected.y, 2)
//           );
//           const mouseEffect = distance < 150 ? (150 - distance) / 150 : 0; // Larger influence radius
//           const brightness = 65 + mouseEffect * 35; // Brighter default, strong mouse effect
//           const saturation = 55 + mouseEffect * 35; // More saturation with mouse effect

//           gradient.addColorStop(
//             0,
//             `hsla(${hue}, ${saturation}%, ${brightness}%, ${projected.alpha * (1 + mouseEffect * 0.5)})` // Higher alpha when affected
//           );
//           gradient.addColorStop(
//             0.5,
//             `hsla(${hue}, ${saturation}%, ${brightness * 0.7}%, ${projected.alpha * 0.6})`
//           );
//           gradient.addColorStop(
//             1,
//             `hsla(${hue}, ${saturation}%, ${brightness * 0.4}%, 0)`
//           );

//           // Main particle
//           ctx.beginPath();
//           ctx.arc(projected.x, projected.y, projected.size, 0, 2 * Math.PI);
//           ctx.fillStyle = gradient;
//           ctx.fill();

//           // Enhanced glow effect when near mouse
//           if (mouseEffect > 0) {
//             ctx.shadowBlur = projected.size * 5 * mouseEffect; // Stronger glow
//             ctx.shadowColor = `hsla(${hue}, ${saturation}%, ${brightness}%, ${projected.alpha * mouseEffect * 0.7})`; // More opaque glow
//             ctx.fill();
//             ctx.shadowBlur = 0; // Reset shadow blur

//             // Additional inner glow
//             const innerGradient = ctx.createRadialGradient(
//               projected.x,
//               projected.y,
//               0,
//               projected.x,
//               projected.y,
//               projected.size
//             );
//             innerGradient.addColorStop(
//               0,
//               `hsla(${hue}, 95%, 95%, ${mouseEffect * 0.6})` // Brighter inner glow
//             );
//             innerGradient.addColorStop(1, `hsla(${hue}, 90%, 90%, 0)`);

//             ctx.beginPath();
//             ctx.arc(
//               projected.x,
//               projected.y,
//               projected.size * 0.7, // Slightly larger inner glow
//               0,
//               2 * Math.PI
//             );
//             ctx.fillStyle = innerGradient;
//             ctx.fill();
//           }
//         }
//       });
//     };

//     // Check for reduced motion preference
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     if (!prefersReducedMotion) {
//       animate();
//     } else {
//       // If reduced motion is preferred, render a static image or a much simpler state
//       // For this example, we'll just not animate the particles.
//       // In a real app, you might show a simplified background.
//       ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear if anything was drawn by default
//     }

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("resize", resizeCanvas);
//       cancelAnimationFrame(animationFrameId.current);
//     };
//   }, []); // Empty dependency array means this runs once on mount

//   return (
//     <div ref={containerRef} className='fixed inset-0 -z-10'>
//       <canvas ref={canvasRef} className='w-full h-full' />
//     </div>
//   );
// };

// // --- Enhanced Text Animation Component ---
// const EnhancedAnimatedText = ({ children, delay = 0, className = "" }) => {
//   const textRef = useRef(null);
//   const tl = useRef(null); // Use ref for timeline to ensure it's stable

//   useEffect(() => {
//     const element = textRef.current;
//     if (!element) return;

//     // Check for reduced motion preference
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     // Set initial state
//     gsap.set(element, {
//       opacity: 0,
//       y: 100,
//       scale: 0.8,
//       rotationX: 45,
//     });

//     if (!prefersReducedMotion) {
//       // Animate to final state with proper timing
//       tl.current = gsap.timeline({ delay: delay * 0.3 + 0.2 });

//       tl.current.to(element, {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         rotationX: 0,
//         duration: 1.2,
//         ease: "back.out(1.7)",
//       });

//       // Add subtle floating animation after main animation
//       tl.current.to(
//         element,
//         {
//           y: -10,
//           duration: 3,
//           ease: "power2.inOut",
//           yoyo: true,
//           repeat: -1,
//         },
//         "+=0.5"
//       );
//     } else {
//       // Instantly show content if reduced motion is preferred
//       gsap.set(element, { opacity: 1, y: 0, scale: 1, rotationX: 0 });
//     }

//     return () => {
//       if (tl.current) {
//         tl.current.kill();
//       }
//     };
//   }, [delay]); // Only re-run if delay changes

//   return (
//     <div ref={textRef} className={className}>
//       {children}
//     </div>
//   );
// };

// // --- Enhanced Button Component ---
// const EnhancedButton = ({ children, onClick, className = "", ariaLabel }) => {
//   const buttonRef = useRef(null);
//   const glowRef = useRef(null);
//   const tl = useRef(null); // Use ref for timeline

//   const handleClick = useCallback(() => {
//     gsap.to(buttonRef.current, {
//       scale: 0.95,
//       duration: 0.1,
//       yoyo: true,
//       repeat: 1,
//       ease: "power2.inOut",
//     });
//     onClick?.();
//   }, [onClick]);

//   useEffect(() => {
//     const button = buttonRef.current;
//     const glow = glowRef.current;
//     if (!button || !glow) return;

//     // Check for reduced motion preference
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     // Initial animation
//     gsap.set(button, { opacity: 0, scale: 0.8 });

//     if (!prefersReducedMotion) {
//       tl.current = gsap.timeline({ delay: 1.2 });
//       tl.current.to(button, {
//         opacity: 1,
//         scale: 1,
//         duration: 1,
//         ease: "back.out(1.7)",
//       });

//       // Hover animations
//       const handleMouseEnter = () => {
//         gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
//         gsap.to(glow, { opacity: 1, scale: 1.2, duration: 0.3 });
//       };

//       const handleMouseLeave = () => {
//         gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
//         gsap.to(glow, { opacity: 0, scale: 1, duration: 0.3 });
//       };

//       button.addEventListener("mouseenter", handleMouseEnter);
//       button.addEventListener("mouseleave", handleMouseLeave);
//       button.addEventListener("click", handleClick);

//       return () => {
//         button.removeEventListener("mouseenter", handleMouseEnter);
//         button.removeEventListener("mouseleave", handleMouseLeave);
//         button.removeEventListener("click", handleClick);
//         if (tl.current) {
//           tl.current.kill();
//         }
//       };
//     } else {
//       // Instantly show button if reduced motion
//       gsap.set(button, { opacity: 1, scale: 1 });
//       button.addEventListener("click", handleClick);
//       return () => {
//         button.removeEventListener("click", handleClick);
//       };
//     }
//   }, [handleClick]);

//   return (
//     <div className='relative'>
//       <div
//         ref={glowRef}
//         className='absolute inset-0 bg-white/30 rounded-full blur-xl opacity-0'
//       />
//       <button
//         ref={buttonRef}
//         className={`relative px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold backdrop-blur-sm transition-all hover:bg-white/20 ${className}`}
//         aria-label={ariaLabel || children} // Add aria-label for accessibility
//       >
//         {children}
//       </button>
//     </div>
//   );
// };

// // --- Main Enhanced Hero Component ---
// export default function EnhancedHero() {
//   const targetRef = useRef(null);
//   const contentRef = useRef(null);
//   const [lenis, setLenis] = useState(null);
//   const rafId = useRef(null); // Ref for requestAnimationFrame ID

//   useEffect(() => {
//     // Initialize Lenis for smooth scrolling
//     const lenisInstance = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       smooth: true,
//       // Further fine-tune parameters for a premium feel
//       smoothTouch: false, // Often better for touch devices
//       touchMultiplier: 1.5,
//     });

//     setLenis(lenisInstance);

//     const raf = (time) => {
//       lenisInstance.raf(time);
//       rafId.current = requestAnimationFrame(raf);
//     };

//     // Check for reduced motion preference for main ScrollTrigger animations
//     const prefersReducedMotion = window.matchMedia(
//       "(prefers-reduced-motion: reduce)"
//     ).matches;

//     if (!prefersReducedMotion) {
//       rafId.current = requestAnimationFrame(raf); // Start RAF loop for Lenis
//     } else {
//       // If reduced motion, set content to fully visible and remove scroll trigger effects
//       if (contentRef.current) {
//         gsap.set(contentRef.current, { opacity: 1, scale: 1, y: 0 });
//       }
//     }

//     // GSAP ScrollTrigger animations for smooth parallax scrolling
//     const hero = targetRef.current;
//     const content = contentRef.current;

//     if (hero && content && !prefersReducedMotion) {
//       // Smooth fade and scale on scroll
//       const tlScroll = gsap.timeline({
//         scrollTrigger: {
//           trigger: hero,
//           start: "start start",
//           end: "50% start",
//           scrub: true,
//         },
//       });

//       tlScroll.to(content, {
//         opacity: 0,
//         scale: 0.8,
//         y: -100, // Combine upward movement directly into this tween
//         ease: "power1.out", // A softer ease for scroll effects
//       });
//     }

//     return () => {
//       lenisInstance.destroy();
//       cancelAnimationFrame(rafId.current); // Clean up RAF
//       // Also ensure ScrollTrigger instances are reverted/killed if necessary
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []); // Empty dependency array means this runs once on mount

//   const scrollToContact = () => {
//     if (lenis) {
//       lenis.scrollTo("#contact", {
//         duration: 1.5,
//         easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       }); // Slightly faster, custom easing
//     } else {
//       document
//         .getElementById("contact")
//         ?.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <section ref={targetRef} id='home' className='relative w-full h-[200vh]'>
//       <EnhancedAuroraBackground />
//       <EnhancedHonoSphere />

//       <div
//         ref={contentRef}
//         className='fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-center p-4'
//       >
//         <div className='max-w-4xl mx-auto'>
//           <EnhancedAnimatedText delay={0}>
//             <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-300'>
//               Hono Dev Studio
//             </h1>
//           </EnhancedAnimatedText>

//           <EnhancedAnimatedText delay={1} className='mt-6'>
//             <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed'>
//               We architect and build exceptional web applications that are as
//               intelligent as they are beautiful.
//             </p>
//           </EnhancedAnimatedText>

//           <EnhancedAnimatedText delay={2} className='mt-8'>
//             <EnhancedButton
//               onClick={scrollToContact}
//               ariaLabel='Start a project with Hono Dev Studio'
//             >
//               Start a Project
//             </EnhancedButton>
//           </EnhancedAnimatedText>
//         </div>
//       </div>
//     </section>
//   );
// }
// // type scrpit not corret

"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Type definitions
interface MousePosition {
  x: number;
  y: number;
}

interface ProjectedParticle {
  x: number;
  y: number;
  size: number;
  alpha: number;
}

interface EnhancedAnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

interface EnhancedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  ariaLabel?: string;
}

// --- Enhanced Aurora Background with GSAP ---
const EnhancedAuroraBackground: React.FC = () => {
  const auroraRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const aurora = auroraRef.current;
    const gradient = gradientRef.current;

    if (aurora && gradient) {
      // Create multiple aurora layers for depth
      gsap.set(aurora, { scale: 1.5, opacity: 0 });

      // Main aurora animation with immediate start and more dynamic scaling
      gsap.to(aurora, {
        scale: 1.2,
        opacity: 0.4,
        duration: 8,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.1, // Start almost immediately
        // Introduce slight x/y variation for a more organic feel
        x: "+=20",
        y: "-=15",
      });

      // Rotation animation with a slightly different speed for subtle de-sync
      gsap.to(aurora, {
        rotation: 360,
        duration: 70, // Slightly longer duration
        ease: "none",
        repeat: -1,
      });

      // Gradient shift animation
      gsap.to(gradient, {
        backgroundPosition: "200% 200%",
        duration: 20,
        ease: "none",
        repeat: -1,
      });
    }
  }, []);

  return (
    <div className='fixed inset-0 -z-20 overflow-hidden'>
      <div className='absolute inset-0 bg-gray-950' />
      <div
        ref={auroraRef}
        className='absolute top-1/2 left-1/2 h-[1000px] w-[1000px] -translate-x-1/2 -translate-y-1/2'
      >
        <div
          ref={gradientRef}
          className='h-full w-full rounded-full bg-gradient-to-br from-blue-500/60 via-purple-500/40 to-transparent blur-3xl'
          style={{
            backgroundSize: "400% 400%",
            backgroundPosition: "0% 0%",
          }}
        />
      </div>

      {/* Additional floating orbs with subtle independent animations */}
      <div className='absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-blue-400/20 blur-2xl animate-pulse' />
      <div
        className='absolute bottom-1/4 right-1/4 h-24 w-24 rounded-full bg-purple-400/20 blur-2xl animate-pulse'
        style={{ animationDelay: "2s", animationDuration: "3s" }} // Vary duration
      />
      <div
        className='absolute top-1/3 right-1/5 h-20 w-20 rounded-full bg-pink-400/15 blur-2xl animate-pulse'
        style={{ animationDelay: "1s", animationDuration: "4s" }} // Add another orb
      />
    </div>
  );
};

// --- Enhanced Interactive Sphere with GSAP ---
const EnhancedHonoSphere: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mouse: MousePosition = { x: 0, y: 0 };
    const targetMouse: MousePosition = { x: 0, y: 0 };

    const resizeCanvas = (): void => {
      // Use non-null assertion since we've already checked canvas exists
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    };

    resizeCanvas();

    const handleMouseMove = (event: MouseEvent): void => {
      targetMouse.x = event.clientX;
      targetMouse.y = event.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", resizeCanvas);

    const updateMouse = (): void => {
      mouse.x += (targetMouse.x - mouse.x) * 0.1;
      mouse.y += (targetMouse.y - mouse.y) * 0.1;
    };

    // Enhanced particle system
    const particles: EnhancedParticle[] = [];
    // Adjust particle count based on screen size for performance
    const numParticles = window.innerWidth < 768 ? 120 : 250; // More particles on larger screens
    const sphereRadius = Math.min(window.innerWidth, window.innerHeight) * 0.25;

    class EnhancedParticle {
      x: number = 0;
      y: number = 0;
      z: number = 0;
      originalX: number = 0;
      originalY: number = 0;
      originalZ: number = 0;
      size: number = 0;
      baseSize: number = 0;
      time: number = 0;
      speed: number = 0;
      mouseForceX: number = 0;
      mouseForceY: number = 0;
      mouseForceZ: number = 0;

      constructor() {
        this.reset();
        this.originalX = this.x;
        this.originalY = this.y;
        this.originalZ = this.z;
        this.time = Math.random() * Math.PI * 2;
        this.speed = 0.01 + Math.random() * 0.02;
        this.mouseForceX = 0;
        this.mouseForceY = 0;
        this.mouseForceZ = 0;
        this.baseSize = this.size;
      }

      reset(): void {
        const phi = Math.random() * 2 * Math.PI;
        const costheta = Math.random() * 2 - 1;
        const theta = Math.acos(costheta);

        this.x = sphereRadius * Math.sin(theta) * Math.cos(phi);
        this.y = sphereRadius * Math.sin(theta) * Math.sin(phi);
        this.z = sphereRadius * Math.cos(theta) + (Math.random() - 0.5) * 50; // Add subtle initial z variation
        this.size = Math.random() * 2 + 1.5; // Slightly adjusted base size range
        this.baseSize = this.size;
      }

      update(): void {
        this.time += this.speed;

        // Gentle floating motion
        const floatX = Math.sin(this.time) * 15;
        const floatY = Math.cos(this.time * 0.7) * 15;
        const floatZ = Math.sin(this.time * 0.5) * 30;

        // Enhanced mouse interaction with repulsion and attraction
        const projected = this.project();
        const dx = mouse.x - projected.x;
        const dy = mouse.y - projected.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Create different interaction zones
        const attractionRadius = 150; // Slightly larger attraction zone
        const repulsionRadius = 70; // Slightly larger repulsion zone

        if (distance < attractionRadius) {
          const force = (attractionRadius - distance) / attractionRadius;

          if (distance < repulsionRadius) {
            // Repulsion zone - push away
            const angle = Math.atan2(dy, dx);
            const repulsionForce =
              ((repulsionRadius - distance) / repulsionRadius) * 2.5; // Stronger repulsion
            this.mouseForceX += -Math.cos(angle) * repulsionForce;
            this.mouseForceY += -Math.sin(angle) * repulsionForce;
            this.mouseForceZ +=
              Math.sin(this.time * 2.2) * repulsionForce * 0.5; // Z-axis interaction
            this.size = this.baseSize * (1 + repulsionForce * 0.7); // More pronounced size growth
          } else {
            // Attraction zone - gentle pull
            const angle = Math.atan2(dy, dx);
            const attractionForce = force * 0.4; // Slightly stronger attraction
            this.mouseForceX += Math.cos(angle) * attractionForce;
            this.mouseForceY += Math.sin(angle) * attractionForce;
            this.size = this.baseSize * (1 + force * 0.3); // Slightly more size increase
          }
        } else {
          // Return to base size when far from mouse
          this.size += (this.baseSize - this.size) * 0.15; // Faster return to base size
        }

        // Apply forces with damping
        this.mouseForceX *= 0.82; // Slightly more damping
        this.mouseForceY *= 0.82;
        this.mouseForceZ *= 0.82;

        // Spring back to original position with dynamic spring constant
        const springForce = 0.025; // Slightly stronger spring
        const returnX = (this.originalX - this.x) * springForce;
        const returnY = (this.originalY - this.y) * springForce;
        const returnZ = (this.originalZ - this.z) * springForce;

        // Combine all forces
        this.x += floatX + this.mouseForceX * 8 + returnX * 20;
        this.y += floatY + this.mouseForceY * 8 + returnY * 20;
        this.z += floatZ + this.mouseForceZ * 8 + returnZ * 20;
      }

      project(): ProjectedParticle {
        const perspective = 800 / (800 + this.z);
        return {
          x: this.x * perspective + canvas!.width / 2,
          y: this.y * perspective + canvas!.height / 2,
          size: this.size * perspective,
          alpha: Math.max(0.1, perspective),
        };
      }
    }

    // Initialize particles
    for (let i = 0; i < numParticles; i++) {
      particles.push(new EnhancedParticle());
    }

    // Animation loop
    const animate = (): void => {
      animationFrameId.current = requestAnimationFrame(animate);
      updateMouse();

      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      // Sort particles by z-depth for proper rendering
      particles.sort((a, b) => b.z - a.z);

      particles.forEach((particle, index) => {
        particle.update();
        const projected = particle.project();

        if (
          projected.x > -50 &&
          projected.x < canvas!.width + 50 &&
          projected.y > -50 &&
          projected.y < canvas!.height + 50
        ) {
          // Enhanced gradient for each particle with distance-based intensity
          const gradient = ctx.createRadialGradient(
            projected.x,
            projected.y,
            0,
            projected.x,
            projected.y,
            projected.size * 3
          );

          const hue = (index * 137.5) % 360; // Golden angle for color distribution
          const intensity = Math.max(0.3, projected.alpha);

          // Brighter colors when particles are affected by mouse
          const distance = Math.sqrt(
            Math.pow(mouse.x - projected.x, 2) +
              Math.pow(mouse.y - projected.y, 2)
          );
          const mouseEffect = distance < 150 ? (150 - distance) / 150 : 0; // Larger influence radius
          const brightness = (65 + mouseEffect * 35) * intensity; // Brighter default, strong mouse effect
          const saturation = 55 + mouseEffect * 35; // More saturation with mouse effect

          gradient.addColorStop(
            0,
            `hsla(${hue}, ${saturation}%, ${brightness}%, ${projected.alpha * (1 + mouseEffect * 0.5)})` // Higher alpha when affected
          );
          gradient.addColorStop(
            0.5,
            `hsla(${hue}, ${saturation}%, ${brightness * 0.7}%, ${projected.alpha * 0.6})`
          );
          gradient.addColorStop(
            1,
            `hsla(${hue}, ${saturation}%, ${brightness * 0.4}%, 0)`
          );

          // Main particle
          ctx.beginPath();
          ctx.arc(projected.x, projected.y, projected.size, 0, 2 * Math.PI);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Enhanced glow effect when near mouse
          if (mouseEffect > 0) {
            ctx.shadowBlur = projected.size * 5 * mouseEffect; // Stronger glow
            ctx.shadowColor = `hsla(${hue}, ${saturation}%, ${brightness}%, ${projected.alpha * mouseEffect * 0.7})`; // More opaque glow
            ctx.fill();
            ctx.shadowBlur = 0; // Reset shadow blur

            // Additional inner glow
            const innerGradient = ctx.createRadialGradient(
              projected.x,
              projected.y,
              0,
              projected.x,
              projected.y,
              projected.size
            );
            innerGradient.addColorStop(
              0,
              `hsla(${hue}, 95%, 95%, ${mouseEffect * 0.6})` // Brighter inner glow
            );
            innerGradient.addColorStop(1, `hsla(${hue}, 90%, 90%, 0)`);

            ctx.beginPath();
            ctx.arc(
              projected.x,
              projected.y,
              projected.size * 0.7, // Slightly larger inner glow
              0,
              2 * Math.PI
            );
            ctx.fillStyle = innerGradient;
            ctx.fill();
          }
        }
      });
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      animate();
    } else {
      // If reduced motion is preferred, render a static image or a much simpler state
      // For this example, we'll just not animate the particles.
      // In a real app, you might show a simplified background.
      ctx.clearRect(0, 0, canvas!.width, canvas!.height); // Clear if anything was drawn by default
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId.current !== null) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div ref={containerRef} className='fixed inset-0 -z-10'>
      <canvas ref={canvasRef} className='w-full h-full' />
    </div>
  );
};

// --- Enhanced Text Animation Component ---
const EnhancedAnimatedText: React.FC<EnhancedAnimatedTextProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null); // Use ref for timeline to ensure it's stable

  useEffect(() => {
    const element = textRef.current;
    if (!element) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      y: 100,
      scale: 0.8,
      rotationX: 45,
    });

    if (!prefersReducedMotion) {
      // Animate to final state with proper timing
      tl.current = gsap.timeline({ delay: delay * 0.3 + 0.2 });

      tl.current.to(element, {
        opacity: 1,
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
      });

      // Add subtle floating animation after main animation
      tl.current.to(
        element,
        {
          y: -10,
          duration: 3,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1,
        },
        "+=0.5"
      );
    } else {
      // Instantly show content if reduced motion is preferred
      gsap.set(element, { opacity: 1, y: 0, scale: 1, rotationX: 0 });
    }

    return () => {
      if (tl.current) {
        tl.current.kill();
      }
    };
  }, [delay]); // Only re-run if delay changes

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  );
};

// --- Enhanced Button Component ---
const EnhancedButton: React.FC<EnhancedButtonProps> = ({
  children,
  onClick,
  className = "",
  ariaLabel,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null); // Use ref for timeline

  const handleClick = useCallback(() => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }
    onClick?.();
  }, [onClick]);

  useEffect(() => {
    const button = buttonRef.current;
    const glow = glowRef.current;
    if (!button || !glow) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Initial animation
    gsap.set(button, { opacity: 0, scale: 0.8 });

    if (!prefersReducedMotion) {
      tl.current = gsap.timeline({ delay: 1.2 });
      tl.current.to(button, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "back.out(1.7)",
      });

      // Hover animations
      const handleMouseEnter = (): void => {
        gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        gsap.to(glow, { opacity: 1, scale: 1.2, duration: 0.3 });
      };

      const handleMouseLeave = (): void => {
        gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });
        gsap.to(glow, { opacity: 0, scale: 1, duration: 0.3 });
      };

      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
      button.addEventListener("click", handleClick);

      return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
        button.removeEventListener("click", handleClick);
        if (tl.current) {
          tl.current.kill();
        }
      };
    } else {
      // Instantly show button if reduced motion
      gsap.set(button, { opacity: 1, scale: 1 });
      button.addEventListener("click", handleClick);
      return () => {
        button.removeEventListener("click", handleClick);
      };
    }
  }, [handleClick]);

  return (
    <div className='relative'>
      <div
        ref={glowRef}
        className='absolute inset-0 bg-white/30 rounded-full blur-xl opacity-0'
      />
      <button
        ref={buttonRef}
        className={`relative px-8 py-4 bg-white/10 border border-white/20 rounded-full text-white font-semibold backdrop-blur-sm transition-all hover:bg-white/20 ${className}`}
        aria-label={
          ariaLabel || (typeof children === "string" ? children : "Button")
        } // Add aria-label for accessibility
        type='button'
      >
        {children}
      </button>
    </div>
  );
};

// --- Main Enhanced Hero Component ---
const EnhancedHero: React.FC = () => {
  const targetRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const rafId = useRef<number | null>(null); // Ref for requestAnimationFrame ID

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      // Remove 'smooth' and 'smoothTouch' - they don't exist in current API
      // Use 'touchMultiplier' for touch sensitivity (this should still work)
      touchMultiplier: 1.5,
      // Alternative: use 'lerp' instead of duration for different smoothing approach
      // lerp: 0.1, // uncomment this and remove duration if you prefer lerp-based smoothing
    });
    setLenis(lenisInstance);

    const raf = (time: number): void => {
      lenisInstance.raf(time);
      rafId.current = requestAnimationFrame(raf);
    };

    // Check for reduced motion preference for main ScrollTrigger animations
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      rafId.current = requestAnimationFrame(raf); // Start RAF loop for Lenis
    } else {
      // If reduced motion, set content to fully visible and remove scroll trigger effects
      if (contentRef.current) {
        gsap.set(contentRef.current, { opacity: 1, scale: 1, y: 0 });
      }
    }

    // GSAP ScrollTrigger animations for smooth parallax scrolling
    const hero = targetRef.current;
    const content = contentRef.current;

    if (hero && content && !prefersReducedMotion) {
      // Smooth fade and scale on scroll
      const tlScroll = gsap.timeline({
        scrollTrigger: {
          trigger: hero,
          start: "start start",
          end: "50% start",
          scrub: true,
        },
      });

      tlScroll.to(content, {
        opacity: 0,
        scale: 0.8,
        y: -100, // Combine upward movement directly into this tween
        ease: "power1.out", // A softer ease for scroll effects
      });
    }

    return () => {
      lenisInstance.destroy();
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current); // Clean up RAF
      }
      // Also ensure ScrollTrigger instances are reverted/killed if necessary
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array means this runs once on mount

  const scrollToContact = useCallback((): void => {
    if (lenis) {
      lenis.scrollTo("#contact", {
        duration: 1.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      }); // Slightly faster, custom easing
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  }, [lenis]);

  return (
    <section ref={targetRef} id='home' className='relative w-full h-[200vh]'>
      <EnhancedAuroraBackground />
      <EnhancedHonoSphere />

      <div
        ref={contentRef}
        className='fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center text-center p-4'
      >
        <div className='max-w-4xl mx-auto'>
          <EnhancedAnimatedText delay={0}>
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-white to-gray-300'>
              Hono Dev Studio
            </h1>
          </EnhancedAnimatedText>

          <EnhancedAnimatedText delay={1} className='mt-6'>
            <p className='text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed'>
              We architect and build exceptional web applications that are as
              intelligent as they are beautiful.
            </p>
          </EnhancedAnimatedText>

          <EnhancedAnimatedText delay={2} className='mt-8'>
            <EnhancedButton
              onClick={scrollToContact}
              ariaLabel='Start a project with Hono Dev Studio'
            >
              Start a Project
            </EnhancedButton>
          </EnhancedAnimatedText>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHero;
