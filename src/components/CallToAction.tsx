// "use client";

// import React, { useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// // --- Main CallToAction Section Component ---
// export function CallToAction() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const springConfig = { damping: 25, stiffness: 120 };
//   const rotateX = useSpring(
//     useTransform(mouseY, [-0.5, 0.5], [15, -15]),
//     springConfig
//   );
//   const rotateY = useSpring(
//     useTransform(mouseX, [-0.5, 0.5], [-15, 15]),
//     springConfig
//   );

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!containerRef.current) return;
//     const { left, top, width, height } =
//       containerRef.current.getBoundingClientRect();
//     mouseX.set((e.clientX - left) / width - 0.5);
//     mouseY.set((e.clientY - top) / height - 0.5);
//   };

//   const handleMouseLeave = () => {
//     mouseX.set(0);
//     mouseY.set(0);
//   };

//   const scrollToContact = () => {
//     window.location.href = "/contact";
//   };

//   return (
//     <section
//       ref={containerRef}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       id='cta'
//       className='relative w-full py-24 sm:py-32 overflow-hidden'
//       style={{ perspective: "1000px" }}
//     >
//       {/* Background Elements */}
//       <div className='absolute inset-0 -z-20 bg-gray-950' />
//       <motion.div
//         className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(147,112,219,0.1)_0%,transparent_40%)]'
//         style={{
//           backgroundSize: "200% 200%",
//           backgroundPosition: useTransform(
//             [mouseX, mouseY],
//             (latest: number[]) =>
//               `${50 + latest[0] * 20}% ${50 + latest[1] * 20}%`
//           ),
//         }}
//       />

//       <motion.div
//         style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
//         className='container mx-auto px-4 relative z-10 flex flex-col items-center text-center'
//       >
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.5 }}
//           className='max-w-3xl'
//         >
//           <h2 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 leading-tight p-1'>
//             Ready to Build Something Extraordinary?
//           </h2>
//           <p className='mt-6 text-lg md:text-xl text-gray-300 leading-relaxed'>
//             Let's collaborate to turn your innovative ideas into powerful
//             digital solutions. Reach out today and let us be your partner in
//             success.
//           </p>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//           viewport={{ once: true, amount: 0.5 }}
//           className='mt-12'
//         >
//           <motion.button
//             onClick={scrollToContact}
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0px 0px 30px rgba(147, 112, 219, 0.6)",
//             }}
//             whileTap={{ scale: 0.95 }}
//             className='group relative flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300'
//             style={{ transformStyle: "preserve-3d" }}
//           >
//             <span
//               className='relative z-10'
//               style={{ transform: "translateZ(20px)" }}
//             >
//               Get a Free Quote
//             </span>
//             <ArrowRight
//               className='ml-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1'
//               style={{ transform: "translateZ(20px)" }}
//             />

//             {/* Orbital Glow */}
//             <motion.div
//               className='absolute inset-0 rounded-full border-2 border-purple-400/50'
//               animate={{ scale: [1, 1.1, 1], opacity: [0, 0.7, 0] }}
//               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
//               style={{ transform: "translateZ(-10px)" }}
//             />
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }

"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

// --- Main CallToAction Section Component ---
export function CallToAction(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [15, -15]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-15, 15]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };

  const handleMouseLeave = (): void => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const scrollToContact = (): void => {
    window.location.href = "/contact";
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id='cta'
      className='relative w-full py-24 sm:py-32 overflow-hidden'
      style={{ perspective: "1000px" }}
    >
      {/* Background Elements */}
      <div className='absolute inset-0 -z-20 bg-gray-950' />
      <motion.div
        className='absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(147,112,219,0.1)_0%,transparent_40%)]'
        style={{
          backgroundSize: "200% 200%",
          backgroundPosition: useTransform(
            [mouseX, mouseY],
            (latest: number[]) =>
              `${50 + latest[0] * 20}% ${50 + latest[1] * 20}%`
          ),
        }}
      />

      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className='container mx-auto px-4 relative z-10 flex flex-col items-center text-center'
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className='max-w-3xl'
        >
          <h2 className='text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 leading-tight p-1'>
            Ready to Build Something Extraordinary?
          </h2>
          <p className='mt-6 text-lg md:text-xl text-gray-300 leading-relaxed'>
            Let&apos;s collaborate to turn your innovative ideas into powerful
            digital solutions. Reach out today and let us be your partner in
            success.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className='mt-12'
        >
          <motion.button
            onClick={scrollToContact}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(147, 112, 219, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className='group relative flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300'
            style={{ transformStyle: "preserve-3d" }}
          >
            <span
              className='relative z-10'
              style={{ transform: "translateZ(20px)" }}
            >
              Get a Free Quote
            </span>
            <ArrowRight
              className='ml-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1'
              style={{ transform: "translateZ(20px)" }}
            />

            {/* Orbital Glow */}
            <motion.div
              className='absolute inset-0 rounded-full border-2 border-purple-400/50'
              animate={{ scale: [1, 1.1, 1], opacity: [0, 0.7, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(-10px)" }}
            />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
