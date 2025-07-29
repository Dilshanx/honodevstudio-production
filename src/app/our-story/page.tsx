// // "use client";

// // import React, { useCallback, useRef } from "react";
// // import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// // import {
// //   ArrowLeft,
// //   Users,
// //   Target,
// //   Lightbulb,
// //   Award,
// //   Calendar,
// //   MapPin,
// // } from "lucide-react";

// // // --- REUSABLE COMPONENTS ---

// // const HolographicIcon = React.memo(({ IconComponent, size = "w-12 h-12" }) => (
// //   <motion.div
// //     whileHover='hover'
// //     className={`relative ${size} grid place-items-center`}
// //   >
// //     <IconComponent
// //       className='relative z-10 h-8 w-8 text-white'
// //       style={{
// //         filter: `drop-shadow(0 0 2px rgba(167, 139, 250, 0.9))
// //                   drop-shadow(0 0 8px rgba(167, 139, 250, 0.6))
// //                   drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))`,
// //       }}
// //     />
// //     <motion.div
// //       className='absolute inset-0 rounded-full bg-purple-500/40 blur-lg'
// //       variants={{ hover: { scale: 1.2, opacity: 0.7 } }}
// //       transition={{ type: "spring", damping: 15, stiffness: 200 }}
// //     />
// //     <motion.div
// //       className='absolute inset-0'
// //       variants={{
// //         hover: { x: [0, -1, 1, -1, 0], y: [0, 1, -1, 1, 0], scale: 1.1 },
// //       }}
// //       transition={{ duration: 0.3 }}
// //     >
// //       <IconComponent className='absolute inset-0 h-full w-full text-blue-400/50' />
// //     </motion.div>
// //   </motion.div>
// // ));
// // HolographicIcon.displayName = "HolographicIcon";

// // export default function OurStoryPage() {
// //   const containerRef = useRef<HTMLDivElement>(null);
// //   const mouseX = useMotionValue(0);
// //   const mouseY = useMotionValue(0);

// //   const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
// //   const dx = useSpring(
// //     useTransform(mouseX, (val) => val * -0.3),
// //     springConfig
// //   );
// //   const dy = useSpring(
// //     useTransform(mouseY, (val) => val * -0.3),
// //     springConfig
// //   );

// //   const handleMouseMove = useCallback(
// //     (e: React.MouseEvent<HTMLDivElement>) => {
// //       const { clientX, clientY, currentTarget } = e;
// //       const rect = currentTarget.getBoundingClientRect();
// //       mouseX.set((clientX - rect.left) / rect.width - 0.5);
// //       mouseY.set((clientY - rect.top) / rect.height - 0.5);
// //     },
// //     [mouseX, mouseY]
// //   );

// //   const handleMouseLeave = useCallback(() => {
// //     mouseX.set(0);
// //     mouseY.set(0);
// //   }, [mouseX, mouseY]);

// //   const milestones = [
// //     {
// //       year: "2019",
// //       title: "The Beginning",
// //       description:
// //         "Started as a small team of passionate designers and developers with a vision to transform digital experiences.",
// //       icon: Lightbulb,
// //     },
// //     {
// //       year: "2020",
// //       title: "First Major Client",
// //       description:
// //         "Landed our first enterprise client, delivering a complete digital transformation that increased their revenue by 300%.",
// //       icon: Target,
// //     },
// //     {
// //       year: "2021",
// //       title: "Team Expansion",
// //       description:
// //         "Grew our team to 15 specialists across design, development, and strategy to better serve our growing client base.",
// //       icon: Users,
// //     },
// //     {
// //       year: "2022",
// //       title: "Industry Recognition",
// //       description:
// //         "Won 'Best Digital Agency' award and featured in top design publications for our innovative approach.",
// //       icon: Award,
// //     },
// //     {
// //       year: "2023",
// //       title: "Global Reach",
// //       description:
// //         "Expanded internationally, serving clients across 3 continents with our cutting-edge digital solutions.",
// //       icon: MapPin,
// //     },
// //     {
// //       year: "2024",
// //       title: "Innovation Lab",
// //       description:
// //         "Launched our R&D division focused on emerging technologies like AI, VR, and blockchain integration.",
// //       icon: Calendar,
// //     },
// //   ];

// //   return (
// //     <div className='min-h-screen bg-gray-950 text-white overflow-hidden'>
// //       {/* Background Effects */}
// //       <div className='fixed inset-0 z-0'>
// //         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30' />
// //         <motion.div
// //           className='absolute inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-cyan-950/20'
// //           style={{ x: dx, y: dy }}
// //         />
// //       </div>

// //       {/* Header */}
// //       <header className='relative z-10 py-8 px-4'>
// //         <div className='container mx-auto flex items-center justify-between'>
// //           <motion.button
// //             initial={{ opacity: 0, x: -20 }}
// //             animate={{ opacity: 1, x: 0 }}
// //             transition={{ duration: 0.5 }}
// //             className='flex items-center gap-2 text-gray-300 hover:text-white transition-colors'
// //             onClick={() => window.history.back()}
// //           >
// //             <ArrowLeft className='w-5 h-5' />
// //             Back to Home
// //           </motion.button>
// //           <motion.div
// //             initial={{ opacity: 0, y: -20 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.5, delay: 0.2 }}
// //             className='text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
// //           >
// //             Our Story
// //           </motion.div>
// //         </div>
// //       </header>

// //       {/* Hero Section */}
// //       <section
// //         ref={containerRef}
// //         onMouseMove={handleMouseMove}
// //         onMouseLeave={handleMouseLeave}
// //         className='relative z-10 py-24 px-4'
// //       >
// //         <div className='container mx-auto max-w-6xl'>
// //           <motion.div
// //             initial={{ opacity: 0, y: 50 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8 }}
// //             className='text-center mb-20'
// //           >
// //             <h1 className='text-5xl md:text-7xl font-bold mb-6'>
// //               <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400'>
// //                 Our Journey
// //               </span>
// //             </h1>
// //             <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
// //               From a small team with big dreams to a global digital
// //               transformation partner. This is the story of how we've helped
// //               businesses reimagine their digital presence.
// //             </p>
// //           </motion.div>

// //           {/* Mission Statement */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 0.3 }}
// //             className='mb-24'
// //           >
// //             <div className='relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20 transition-colors duration-300'>
// //               <div className='text-center'>
// //                 <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
// //                   Our Mission
// //                 </h2>
// //                 <p className='text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
// //                   We believe that great design and technology should work
// //                   together to create meaningful experiences that not only look
// //                   beautiful but also solve real problems. Our mission is to
// //                   bridge the gap between innovative technology and
// //                   human-centered design, helping businesses create authentic
// //                   connections with their audiences.
// //                 </p>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* Timeline */}
// //           <div className='mb-24'>
// //             <motion.h2
// //               initial={{ opacity: 0, y: 20 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 0.6, delay: 0.4 }}
// //               className='text-3xl md:text-4xl font-bold text-center mb-16'
// //             >
// //               <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400'>
// //                 Our Timeline
// //               </span>
// //             </motion.h2>

// //             <div className='space-y-8'>
// //               {milestones.map((milestone, index) => (
// //                 <motion.div
// //                   key={milestone.year}
// //                   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
// //                   animate={{ opacity: 1, x: 0 }}
// //                   transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
// //                   className={`flex items-center gap-8 ${
// //                     index % 2 === 0 ? "flex-row" : "flex-row-reverse"
// //                   }`}
// //                 >
// //                   <div className='flex-1'>
// //                     <div
// //                       className={`p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20 transition-colors duration-300 ${
// //                         index % 2 === 0 ? "text-left" : "text-right"
// //                       }`}
// //                     >
// //                       <div className='flex items-center gap-3 mb-4'>
// //                         <div
// //                           className={`flex-shrink-0 ${
// //                             index % 2 === 0 ? "order-1" : "order-2"
// //                           }`}
// //                         >
// //                           <HolographicIcon IconComponent={milestone.icon} />
// //                         </div>
// //                         <div
// //                           className={index % 2 === 0 ? "order-2" : "order-1"}
// //                         >
// //                           <h3 className='text-2xl font-bold text-white'>
// //                             {milestone.title}
// //                           </h3>
// //                           <p className='text-purple-400 font-semibold'>
// //                             {milestone.year}
// //                           </p>
// //                         </div>
// //                       </div>
// //                       <p className='text-gray-300 leading-relaxed'>
// //                         {milestone.description}
// //                       </p>
// //                     </div>
// //                   </div>

// //                   <div className='flex-shrink-0'>
// //                     <div className='w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative'>
// //                       <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-20' />
// //                     </div>
// //                   </div>

// //                   <div className='flex-1' />
// //                 </motion.div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* Stats Section */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 1.2 }}
// //             className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-24'
// //           >
// //             {[
// //               { number: "100+", label: "Projects Completed" },
// //               { number: "50+", label: "Happy Clients" },
// //               { number: "15+", label: "Team Members" },
// //               { number: "5+", label: "Years Experience" },
// //             ].map((stat, index) => (
// //               <div
// //                 key={index}
// //                 className='text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20 transition-colors duration-300'
// //               >
// //                 <div className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2'>
// //                   {stat.number}
// //                 </div>
// //                 <div className='text-gray-300 text-sm md:text-base'>
// //                   {stat.label}
// //                 </div>
// //               </div>
// //             ))}
// //           </motion.div>

// //           {/* CTA Section */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             animate={{ opacity: 1, y: 0 }}
// //             transition={{ duration: 0.8, delay: 1.4 }}
// //             className='text-center'
// //           >
// //             <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
// //               Ready to Write Your Success Story?
// //             </h2>
// //             <p className='text-lg text-gray-300 mb-8 max-w-2xl mx-auto'>
// //               Let's collaborate to create something amazing together. Your
// //               vision combined with our expertise.
// //             </p>
// //             <div className='flex flex-col sm:flex-row gap-4 justify-center'>
// //               <button className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200'>
// //                 Start Your Project
// //               </button>
// //               <button className='border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all duration-200'>
// //                 Contact Us
// //               </button>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }

// "use client";

// import React, { JSX, useCallback, useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import {
//   ArrowLeft,
//   Users,
//   Target,
//   Lightbulb,
//   Award,
//   Calendar,
//   MapPin,
//   LucideIcon,
// } from "lucide-react";

// // --- TYPES ---
// interface HolographicIconProps {
//   IconComponent: LucideIcon;
//   size?: string;
// }

// interface Milestone {
//   year: string;
//   title: string;
//   description: string;
//   icon: LucideIcon;
// }

// interface Stat {
//   number: string;
//   label: string;
// }

// // --- REUSABLE COMPONENTS ---

// const HolographicIcon = React.memo<HolographicIconProps>(
//   ({ IconComponent, size = "w-12 h-12" }) => (
//     <motion.div
//       whileHover='hover'
//       className={`relative ${size} grid place-items-center`}
//     >
//       <IconComponent
//         className='relative z-10 h-8 w-8 text-white'
//         style={{
//           filter: `drop-shadow(0 0 2px rgba(167, 139, 250, 0.9))
//                   drop-shadow(0 0 8px rgba(167, 139, 250, 0.6))
//                   drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))`,
//         }}
//       />
//       <motion.div
//         className='absolute inset-0 rounded-full bg-purple-500/40 blur-lg'
//         variants={{ hover: { scale: 1.2, opacity: 0.7 } }}
//         transition={{ type: "spring", damping: 15, stiffness: 200 }}
//       />
//       <motion.div
//         className='absolute inset-0'
//         variants={{
//           hover: { x: [0, -1, 1, -1, 0], y: [0, 1, -1, 1, 0], scale: 1.1 },
//         }}
//         transition={{ duration: 0.3 }}
//       >
//         <IconComponent className='absolute inset-0 h-full w-full text-blue-400/50' />
//       </motion.div>
//     </motion.div>
//   )
// );
// HolographicIcon.displayName = "HolographicIcon";

// export default function OurStoryPage(): JSX.Element {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
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
//       const { clientX, clientY, currentTarget } = e;
//       const rect = currentTarget.getBoundingClientRect();
//       mouseX.set((clientX - rect.left) / rect.width - 0.5);
//       mouseY.set((clientY - rect.top) / rect.height - 0.5);
//     },
//     [mouseX, mouseY]
//   );

//   const handleMouseLeave = useCallback(() => {
//     mouseX.set(0);
//     mouseY.set(0);
//   }, [mouseX, mouseY]);

//   const handleBackToHome = useCallback((): void => {
//     window.history.back();
//   }, []);

//   const handleStartProject = useCallback((): void => {
//     // Add your navigation logic here
//     console.log("Start Project clicked");
//   }, []);

//   const handleContactUs = useCallback((): void => {
//     // Add your navigation logic here
//     console.log("Contact Us clicked");
//   }, []);

//   const milestones: Milestone[] = [
//     {
//       year: "2019",
//       title: "The Beginning",
//       description:
//         "Started as a small team of passionate designers and developers with a vision to transform digital experiences.",
//       icon: Lightbulb,
//     },
//     {
//       year: "2020",
//       title: "First Major Client",
//       description:
//         "Landed our first enterprise client, delivering a complete digital transformation that increased their revenue by 300%.",
//       icon: Target,
//     },
//     {
//       year: "2021",
//       title: "Team Expansion",
//       description:
//         "Grew our team to 15 specialists across design, development, and strategy to better serve our growing client base.",
//       icon: Users,
//     },
//     {
//       year: "2022",
//       title: "Industry Recognition",
//       description:
//         "Won &apos;Best Digital Agency&apos; award and featured in top design publications for our innovative approach.",
//       icon: Award,
//     },
//     {
//       year: "2023",
//       title: "Global Reach",
//       description:
//         "Expanded internationally, serving clients across 3 continents with our cutting-edge digital solutions.",
//       icon: MapPin,
//     },
//     {
//       year: "2024",
//       title: "Innovation Lab",
//       description:
//         "Launched our R&D division focused on emerging technologies like AI, VR, and blockchain integration.",
//       icon: Calendar,
//     },
//   ];

//   const stats: Stat[] = [
//     { number: "100+", label: "Projects Completed" },
//     { number: "50+", label: "Happy Clients" },
//     { number: "15+", label: "Team Members" },
//     { number: "5+", label: "Years Experience" },
//   ];

//   return (
//     <div className='min-h-screen bg-gray-950 text-white overflow-hidden'>
//       {/* Background Effects */}
//       <div className='fixed inset-0 z-0'>
//         <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30' />
//         <motion.div
//           className='absolute inset-0 bg-gradient-to-br from-purple-950/20 via-transparent to-cyan-950/20'
//           style={{ x: dx, y: dy }}
//         />
//       </div>

//       {/* Header */}
//       <header className='relative z-10 py-8 px-4'>
//         <div className='container mx-auto flex items-center justify-between'>
//           <motion.button
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             className='flex items-center gap-2 text-gray-300 hover:text-white transition-colors'
//             onClick={handleBackToHome}
//           >
//             <ArrowLeft className='w-5 h-5' />
//             Back to Home
//           </motion.button>
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className='text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent'
//           >
//             Our Story
//           </motion.div>
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section
//         ref={containerRef}
//         onMouseMove={handleMouseMove}
//         onMouseLeave={handleMouseLeave}
//         className='relative z-10 py-24 px-4'
//       >
//         <div className='container mx-auto max-w-6xl'>
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             className='text-center mb-20'
//           >
//             <h1 className='text-5xl md:text-7xl font-bold mb-6'>
//               <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400'>
//                 Our Journey
//               </span>
//             </h1>
//             <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
//               From a small team with big dreams to a global digital
//               transformation partner. This is the story of how we&apos;ve helped
//               businesses reimagine their digital presence.
//             </p>
//           </motion.div>

//           {/* Mission Statement */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className='mb-24'
//           >
//             <div className='relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20 transition-colors duration-300'>
//               <div className='text-center'>
//                 <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
//                   Our Mission
//                 </h2>
//                 <p className='text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed'>
//                   We believe that great design and technology should work
//                   together to create meaningful experiences that not only look
//                   beautiful but also solve real problems. Our mission is to
//                   bridge the gap between innovative technology and
//                   human-centered design, helping businesses create authentic
//                   connections with their audiences.
//                 </p>
//               </div>
//             </div>
//           </motion.div>

//           {/* Timeline */}
//           <div className='mb-24'>
//             <motion.h2
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: 0.4 }}
//               className='text-3xl md:text-4xl font-bold text-center mb-16'
//             >
//               <span className='text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400'>
//                 Our Timeline
//               </span>
//             </motion.h2>

//             <div className='space-y-8'>
//               {milestones.map((milestone, index) => (
//                 <motion.div
//                   key={milestone.year}
//                   initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                   animate={{ opacity: 1, x: 0 }}
//                   transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
//                   className={`flex items-center gap-8 ${
//                     index % 2 === 0 ? "flex-row" : "flex-row-reverse"
//                   }`}
//                 >
//                   <div className='flex-1'>
//                     <div
//                       className={`p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20 transition-colors duration-300 ${
//                         index % 2 === 0 ? "text-left" : "text-right"
//                       }`}
//                     >
//                       <div className='flex items-center gap-3 mb-4'>
//                         <div
//                           className={`flex-shrink-0 ${
//                             index % 2 === 0 ? "order-1" : "order-2"
//                           }`}
//                         >
//                           <HolographicIcon IconComponent={milestone.icon} />
//                         </div>
//                         <div
//                           className={index % 2 === 0 ? "order-2" : "order-1"}
//                         >
//                           <h3 className='text-2xl font-bold text-white'>
//                             {milestone.title}
//                           </h3>
//                           <p className='text-purple-400 font-semibold'>
//                             {milestone.year}
//                           </p>
//                         </div>
//                       </div>
//                       <p className='text-gray-300 leading-relaxed'>
//                         {milestone.description}
//                       </p>
//                     </div>
//                   </div>

//                   <div className='flex-shrink-0'>
//                     <div className='w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative'>
//                       <div className='absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-ping opacity-20' />
//                     </div>
//                   </div>

//                   <div className='flex-1' />
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           {/* Stats Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1.2 }}
//             className='grid grid-cols-2 md:grid-cols-4 gap-8 mb-24'
//           >
//             {stats.map((stat) => (
//               <div
//                 key={stat.label}
//                 className='text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20 transition-colors duration-300'
//               >
//                 <div className='text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2'>
//                   {stat.number}
//                 </div>
//                 <div className='text-gray-300 text-sm md:text-base'>
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </motion.div>

//           {/* CTA Section */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 1.4 }}
//             className='text-center'
//           >
//             <h2 className='text-3xl md:text-4xl font-bold mb-6 text-white'>
//               Ready to Write Your Success Story?
//             </h2>
//             <p className='text-lg text-gray-300 mb-8 max-w-2xl mx-auto'>
//               Let&apos;s collaborate to create something amazing together. Your
//               vision combined with our expertise.
//             </p>
//             <div className='flex flex-col sm:flex-row gap-4 justify-center'>
//               <button
//                 className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200'
//                 onClick={handleStartProject}
//               >
//                 Start Your Project
//               </button>
//               <button
//                 className='border border-white/20 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/5 transition-all duration-200'
//                 onClick={handleContactUs}
//               >
//                 Contact Us
//               </button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }
"use client";
import React, { useCallback, useRef } from "react";
import {
  ArrowLeft,
  Users,
  Target,
  Lightbulb,
  Award,
  Calendar,
  MapPin,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

// --- TYPES ---
interface HolographicIconProps {
  IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: string;
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface Stat {
  number: string;
  label: string;
}

// --- REUSABLE COMPONENTS ---
const HolographicIcon = React.memo<HolographicIconProps>(
  ({ IconComponent, size = "w-12 h-12" }) => (
    <div
      className={`relative ${size} grid place-items-center group cursor-pointer`}
    >
      <IconComponent
        className='relative z-10 h-8 w-8 text-white transition-all duration-300'
        style={{
          filter: `drop-shadow(0 0 2px rgba(231, 255, 26, 0.9)) 
                  drop-shadow(0 0 8px rgba(167, 139, 250, 0.6)) 
                  drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))`,
        }}
      />
      <div className='absolute inset-0 rounded-full bg-yellow-400/40 blur-lg group-hover:scale-125 group-hover:opacity-70 transition-all duration-300' />
      <div className='absolute inset-0 group-hover:scale-110 transition-transform duration-300'>
        <IconComponent className='absolute inset-0 h-full w-full text-violet-400/50' />
      </div>
    </div>
  )
);

HolographicIcon.displayName = "HolographicIcon";

export default function OurStoryPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleBackToHome = useCallback((): void => {
    router.push("/");
  }, [router]);

  const handleStartProject = useCallback((): void => {
    router.push("/contact");
  }, [router]);

  const milestones: Milestone[] = [
    {
      year: "2019",
      title: "The Beginning",
      description:
        "Started as a small team of passionate designers and developers with a vision to transform digital experiences.",
      icon: Lightbulb,
    },
    {
      year: "2020",
      title: "First Major Client",
      description:
        "Landed our first enterprise client, delivering a complete digital transformation that increased their revenue by 300%.",
      icon: Target,
    },
    {
      year: "2021",
      title: "Team Expansion",
      description:
        "Grew our team to 15 specialists across design, development, and strategy to better serve our growing client base.",
      icon: Users,
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description:
        "Won 'Best Digital Agency' award and featured in top design publications for our innovative approach.",
      icon: Award,
    },
    {
      year: "2023",
      title: "Global Reach",
      description:
        "Expanded internationally, serving clients across 3 continents with our cutting-edge digital solutions.",
      icon: MapPin,
    },
    {
      year: "2024",
      title: "Innovation Lab",
      description:
        "Launched our R&D division focused on emerging technologies like AI, VR, and blockchain integration.",
      icon: Calendar,
    },
  ];

  const stats: Stat[] = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "15+", label: "Team Members" },
    { number: "5+", label: "Years Experience" },
  ];

  return (
    <section className='relative w-full flex flex-col bg-gray-900 overflow-hidden min-h-screen pb-20'>
      {/* Background */}
      <div className='absolute inset-0 z-0'>
        <div className='w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900'>
          {/* Grid pattern */}
          <div
            className='absolute inset-0 opacity-25'
            style={{
              backgroundImage: `linear-gradient(to right, #80808015 1px, transparent 1px), linear-gradient(to bottom, #80808015 1px, transparent 1px)`,
              backgroundSize: `2rem 2rem`,
            }}
          />
          {/* Gradient overlays */}
          <div className='absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30' />
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40' />
          <div className='absolute inset-0 bg-gradient-to-br from-yellow-400/5 via-violet-400/5 to-cyan-400/5' />
        </div>
      </div>

      {/* Header */}
      <header className='relative z-10 py-6 md:py-8 px-4'>
        <div className='container mx-auto flex items-center justify-between'>
          <button
            className='flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm md:text-base'
            onClick={handleBackToHome}
          >
            <ArrowLeft className='w-4 h-4 md:w-5 md:h-5' />
            Back to Home
          </button>
          <div className='text-lg md:text-xl font-bold bg-gradient-to-r from-yellow-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
            Our Story
          </div>
        </div>
      </header>

      {/* Image Section */}
      <div className='relative z-10 flex justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6'>
        <div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 hover:scale-105 hover:-translate-y-2 transition-all duration-300'>
          <Image
            src='/images/our-storykid.svg'
            alt='Our Story Illustration'
            fill
            className='object-contain rounded-2xl'
            priority
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className='relative z-10 flex-1 flex flex-col'>
        <div className='flex-1 flex items-start justify-center p-4 lg:p-8'>
          <div className='w-full max-w-6xl'>
            {/* Hero Section */}
            <section ref={containerRef} className='py-6 md:py-12 lg:py-16'>
              <div className='text-center mb-12 md:mb-16 lg:mb-20'>
                {/* Badge */}
                <div className='inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-6 md:mb-8 px-4 md:px-6 py-2 md:py-3 hover:scale-105 transition-transform duration-200'>
                  <Sparkles className='text-yellow-400 w-4 h-4 md:w-5 md:h-5 animate-pulse' />
                  <span className='font-medium text-white/90 text-sm md:text-lg'>
                    Our Journey
                  </span>
                </div>

                {/* Heading */}
                <h1 className='font-bold leading-tight text-white mb-6 md:mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'>
                  <span className='block'>FROM VISION TO</span>
                  <span className='bg-gradient-to-r from-yellow-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                    REALITY
                  </span>
                </h1>

                {/* Subtitle */}
                <p className='text-base md:text-lg lg:text-xl leading-relaxed text-white/85 mb-8 md:mb-12 max-w-4xl mx-auto px-4'>
                  From a small team with big dreams to a global digital
                  transformation partner. This is the story of how we&apos;ve
                  helped businesses reimagine their digital presence and create
                  meaningful connections with their audiences.
                </p>
              </div>

              {/* Mission Statement */}
              <div className='mb-16 md:mb-20 lg:mb-24'>
                <div className='relative p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300'>
                  <div className='text-center'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white'>
                      Our Mission
                    </h2>
                    <p className='text-base md:text-lg lg:text-xl text-white/85 max-w-4xl mx-auto leading-relaxed'>
                      We believe that great design and technology should work
                      together to create meaningful experiences that not only
                      look beautiful but also solve real problems. Our mission
                      is to bridge the gap between innovative technology and
                      human-centered design, helping businesses create authentic
                      connections with their audiences.
                    </p>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className='mb-16 md:mb-20 lg:mb-24'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12 md:mb-16'>
                  <span className='bg-gradient-to-r from-yellow-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                    Our Timeline
                  </span>
                </h2>

                <div className='space-y-6 md:space-y-8'>
                  {milestones.map((milestone, index) => (
                    <div
                      key={milestone.year}
                      className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${
                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                    >
                      <div className='flex-1 w-full'>
                        <div
                          className={`p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300 ${
                            index % 2 === 0
                              ? "text-center md:text-left"
                              : "text-center md:text-right"
                          }`}
                        >
                          <div
                            className={`flex items-center gap-3 mb-4 ${
                              index % 2 === 0
                                ? "justify-center md:justify-start"
                                : "justify-center md:justify-end"
                            }`}
                          >
                            <div
                              className={`flex-shrink-0 ${
                                index % 2 === 0
                                  ? "order-1"
                                  : "md:order-2 order-1"
                              }`}
                            >
                              <HolographicIcon IconComponent={milestone.icon} />
                            </div>
                            <div
                              className={
                                index % 2 === 0
                                  ? "order-2"
                                  : "md:order-1 order-2"
                              }
                            >
                              <h3 className='text-xl md:text-2xl font-bold text-white'>
                                {milestone.title}
                              </h3>
                              <p className='text-yellow-400 font-semibold'>
                                {milestone.year}
                              </p>
                            </div>
                          </div>
                          <p className='text-white/85 leading-relaxed text-sm md:text-base'>
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      <div className='flex-shrink-0 hidden md:block'>
                        <div className='w-4 h-4 bg-gradient-to-r from-yellow-400 to-violet-400 rounded-full relative'>
                          <div className='absolute inset-0 bg-gradient-to-r from-yellow-400 to-violet-400 rounded-full animate-ping opacity-20' />
                        </div>
                      </div>

                      <div className='flex-1 hidden md:block' />
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Section */}
              <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-16 md:mb-20 lg:mb-24'>
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className='text-center p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20 transition-all duration-300'
                  >
                    <div className='text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2'>
                      {stat.number}
                    </div>
                    <div className='text-white/85 text-xs md:text-sm lg:text-base'>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className='text-center'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white'>
                  Ready to Write Your Success Story?
                </h2>
                <p className='text-base md:text-lg text-white/85 mb-6 md:mb-8 max-w-2xl mx-auto px-4'>
                  Let&apos;s collaborate to create something amazing together.
                  Your vision combined with our expertise.
                </p>
                <div className='flex justify-center items-center'>
                  {/* Primary CTA */}
                  <button
                    onClick={handleStartProject}
                    className='group inline-flex items-center justify-center gap-3 bg-yellow-400 text-gray-900 font-bold uppercase rounded-xl transition-all duration-200 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/20 px-6 md:px-8 py-3 md:py-4 text-sm md:text-base hover:scale-105 hover:-translate-y-1'
                  >
                    <span>Start Your Project</span>
                    <ArrowRight className='group-hover:translate-x-1 transition-transform duration-200 w-4 h-4 md:w-5 md:h-5' />
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
