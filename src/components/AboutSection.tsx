// "use client";

// import React, { useRef } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { Code, Palette, Rocket } from "lucide-react";
// import { cn } from "@/lib/utils";

// // --- NEW: HolographicIcon Component ---
// // This component takes a Lucide icon and applies our custom "out of the box" styling.
// const HolographicIcon = ({ IconComponent, className }: {
//   IconComponent: React.ComponentType<any>;
//   className?: string
// }) => {
//   return (
//     <motion.div
//       whileHover='hover'
//       className={cn("relative w-16 h-16 grid place-items-center", className)}
//     >
//       {/* Main Icon Shape with Glow */}
//       <IconComponent
//         className='relative z-10 h-8 w-8 text-white'
//         style={{
//           filter: `
//             drop-shadow(0 0 2px rgba(167, 139, 250, 0.9))
//             drop-shadow(0 0 8px rgba(167, 139, 250, 0.6))
//             drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))
//           `,
//         }}
//       />

//       {/* Background Glow Layer */}
//       <motion.div
//         className='absolute inset-0 rounded-full bg-purple-500/40 blur-lg'
//         variants={{
//           hover: { scale: 1.2, opacity: 0.7 },
//         }}
//         transition={{ type: "spring", damping: 15, stiffness: 200 }}
//       />

//       {/* Subtle Glitch/Layer Effect on Hover */}
//       <motion.div
//         className='absolute inset-0'
//         variants={{
//           hover: {
//             x: [0, -1, 1, -1, 0],
//             y: [0, 1, -1, 1, 0],
//             scale: 1.1,
//           },
//         }}
//         transition={{ duration: 0.3 }}
//       >
//         <IconComponent className='absolute inset-0 h-full w-full text-blue-400/50 opacity-50' />
//       </motion.div>
//     </motion.div>
//   );
// };

// // --- Reusable 3D Interactive Card Component (UPDATED) ---
// const PrincipleCard = ({ icon, title, children, className }: {
//   icon: React.ComponentType<any>;
//   title: string;
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   const ref = useRef<HTMLDivElement>(null);

//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const handleMouseMove = (e: React.MouseEvent) => {
//     if (!ref.current) return;
//     const { left, top, width, height } = ref.current.getBoundingClientRect();
//     mouseX.set(e.clientX - left - width / 2);
//     mouseY.set(e.clientY - top - height / 2);
//   };

//   const springConfig = { stiffness: 150, damping: 20 };
//   const rotateX = useSpring(
//     useTransform(mouseY, [-100, 100], [10, -10]),
//     springConfig
//   );
//   const rotateY = useSpring(
//     useTransform(mouseX, [-100, 100], [-10, 10]),
//     springConfig
//   );

//   return (
//     <motion.div
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={() => {
//         mouseX.set(0);
//         mouseY.set(0);
//       }}
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//       viewport={{ once: true, amount: 0.3 }}
//       style={{
//         transformStyle: "preserve-3d",
//         rotateX,
//         rotateY,
//       }}
//       className={cn(
//         "relative p-8 rounded-3xl overflow-hidden",
//         "bg-white/5 border border-white/10 shadow-2xl",
//         "backdrop-blur-md group", // Added 'group' for hover effects
//         className
//       )}
//     >
//       {/* Follow-spotlight effect */}
//       <motion.div
//         className='absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100'
//         style={{
//           background: useTransform(
//             [mouseX, mouseY],
//             ([x, y]) =>
//               `radial-gradient(350px at ${x}px ${y}px, rgba(147, 112, 219, 0.15), transparent 80%)`
//           ),
//         }}
//       />

//       <div className='relative z-10' style={{ transform: "translateZ(20px)" }}>
//         {/* *** THIS IS THE UPDATED PART *** */}
//         <div className='mb-6'>
//           <HolographicIcon IconComponent={icon} />
//         </div>
//         <h3 className='text-2xl font-bold text-white mb-4'>{title}</h3>
//         <p className='text-gray-300 leading-relaxed'>{children}</p>
//       </div>
//     </motion.div>
//   );
// };

// // --- Main About Section Component ---
// export function AboutSection() {
//   return (
//     <section
//       id='about'
//       className='relative w-full py-24 sm:py-32 overflow-hidden'
//     >
//       {/* Background Grid */}
//       <div className='absolute inset-0 z-0'>
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 0.1 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true, amount: 0.2 }}
//           className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:3rem_3rem]'
//         />
//       </div>

//       <div className='container mx-auto px-4 relative z-10'>
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.5 }}
//           className='text-center mb-16'
//         >
//           <h2 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400'>
//             From Concept to Creation
//           </h2>
//           <p className='mt-4 text-lg text-gray-300 max-w-3xl mx-auto'>
//             At Hono Dev Studio, we believe in a holistic development process. We
//             merge creative design with robust engineering to build digital
//             products that are not only functional but truly exceptional.
//           </p>
//         </motion.div>

//         {/* Bento Grid for Core Principles */}
//         <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
//           <PrincipleCard
//             icon={Palette}
//             title='Design'
//             className='lg:col-span-1'
//           >
//             Our process begins with a deep dive into user experience. We design
//             intuitive, beautiful interfaces that are a joy to use, ensuring your
//             vision is translated into a pixel-perfect reality.
//           </PrincipleCard>

//           <PrincipleCard icon={Code} title='Develop' className='lg:col-span-2'>
//             We write clean, scalable, and maintainable code using the latest
//             technologies. Our engineering is focused on performance and
//             security, building a solid foundation for your application's future
//             growth.
//           </PrincipleCard>

//           <PrincipleCard
//             icon={Rocket}
//             title='Deploy & Iterate'
//             className='lg:col-span-3'
//           >
//             Launching is just the beginning. We provide seamless deployment and
//             ongoing support, analyzing performance and user feedback to
//             continuously improve and iterate on your product for long-term
//             success.
//           </PrincipleCard>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

// --- MAIN COMPONENT ---

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const router = useRouter();

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
      const { clientX, clientY, currentTarget } = e;
      const rect = currentTarget.getBoundingClientRect();
      mouseX.set((clientX - rect.left) / rect.width - 0.5);
      mouseY.set((clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const handleOurStoryClick = useCallback(() => {
    router.push("/our-story");
  }, [router]);

  return (
    <section
      id='about'
      className='relative w-full bg-gray-950 py-24 sm:py-32 overflow-hidden'
    >
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50' />
        <motion.div
          className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent'
          style={{ x: dx, y: dy }}
        />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        {/* --- VIDEO SECTION START --- */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className='max-w-5xl mx-auto mb-24'
        >
          <div className='text-center mb-10'>
            <h2 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-4'>
              See Our Process in Action
            </h2>
            <p className='text-lg text-gray-300'>
              A glimpse into how we bring ideas to life.
            </p>
          </div>
          <div className='relative p-1 rounded-3xl bg-gradient-to-r from-purple-500 via-cyan-400 to-pink-500 shadow-2xl shadow-purple-500/20'>
            {/* IMPORTANT: Replace 'your-video.mp4' with your video file name.
              The video should be in the /public/videos/ directory.
            */}
            <video
              src='/videos/video.mp4'
              className='w-full h-full object-cover rounded-[22px]'
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </motion.div>
        {/* --- VIDEO SECTION END --- */}

        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className='max-w-6xl mx-auto'
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.5 }}
            className='text-center mb-16'
          >
            <h3 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 mb-4'>
              About Our Journey
            </h3>
            <p className='text-lg text-gray-300 max-w-3xl mx-auto mb-8'>
              We&apos;re a passionate team of designers, developers, and
              strategists who believe in the power of digital transformation.
              Our mission is to help businesses create meaningful connections
              with their audiences.
            </p>
            <div className='flex justify-center gap-8 text-sm text-gray-400'>
              <div className='text-center'>
                <div className='text-2xl font-bold text-white'>5+</div>
                <div>Years Experience</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-white'>50+</div>
                <div>Happy Clients</div>
              </div>
              <div className='text-center'>
                <div className='text-2xl font-bold text-white'>100+</div>
                <div>Projects Completed</div>
              </div>
            </div>
          </motion.div>

          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className='relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20 transition-colors duration-300'
            >
              <h4 className='text-2xl font-bold text-white mb-6'>Our Story</h4>
              <p className='text-gray-300 mb-6'>
                From startups to established enterprises, we&apos;ve had the
                privilege of working with diverse clients across various
                industries, delivering solutions that not only meet their
                immediate needs but also position them for long-term success.
              </p>
              <p className='text-gray-300 mb-8'>
                Our approach combines cutting-edge technology with
                human-centered design to create experiences that truly resonate
                with users and drive meaningful business outcomes.
              </p>
              <div className='flex justify-center'>
                <button
                  onClick={handleOurStoryClick}
                  className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200'
                >
                  Our Story
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className='relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:bg-white/10 hover:border-white/20 transition-colors duration-300'
            >
              <h4 className='text-2xl font-bold text-white mb-6'>Our Values</h4>
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <h5 className='text-white font-semibold'>
                      Innovation First
                    </h5>
                    <p className='text-gray-300 text-sm'>
                      Always pushing boundaries with latest technologies
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <h5 className='text-white font-semibold'>Client Success</h5>
                    <p className='text-gray-300 text-sm'>
                      Your success is our primary measure of achievement
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <h5 className='text-white font-semibold'>Quality Driven</h5>
                    <p className='text-gray-300 text-sm'>
                      Meticulous attention to detail in every project
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <div className='w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0'></div>
                  <div>
                    <h5 className='text-white font-semibold'>Transparency</h5>
                    <p className='text-gray-300 text-sm'>
                      Open communication throughout the entire process
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
