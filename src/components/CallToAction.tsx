"use client";

import React, { useCallback, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  Variants, // Import Variants type
} from "framer-motion";
import { useRouter } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";

// --- Main CallToAction Section Component ---
export function CallToAction(): React.JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const router = useRouter();
  // Although useReducedMotion is not directly used in the variants for CTA,
  // it's good practice to keep it if there's a possibility of adding
  // reduced motion logic to this component's animations in the future.
  // const shouldReduceMotion = useReducedMotion();

  // Optimized spring config - Added 'mass' property for consistency and type safety
  const springConfig = { damping: 25, stiffness: 120, mass: 0.5 };
  const dx = useSpring(
    useTransform(mouseX, (val) => val * -0.5),
    springConfig
  );
  const dy = useSpring(
    useTransform(mouseY, (val) => val * -0.5),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [15, -15]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-15, 15]),
    springConfig
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>): void => {
      if (!containerRef.current) return;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - left) / width - 0.5);
      mouseY.set((e.clientY - top) / height - 0.5);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback((): void => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const scrollToContact = (): void => {
    router.push("/contact"); // Using Next.js router as requested
  };

  // Animation variants matching other sections - Explicitly typed as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Explicitly typed as Variants.
  // Ensured 'mass' is included in the transition for 'spring' type.
  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        mass: 0.8, // Added mass property to satisfy Variants type for spring transition
      },
    },
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id='cta'
      className='relative w-full bg-[#111316] py-12 sm:py-16 lg:py-20 2xl:py-12 overflow-hidden'
      style={{ perspective: "1000px" }}
    >
      {/* Background with gradient overlay similar to other sections */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30' />
        <motion.div
          className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
          style={{ x: dx, y: dy }}
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
        <motion.div
          className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(231,255,26,0.05)_0%,transparent_40%)]'
          style={{
            backgroundSize: "200% 200%",
            backgroundPosition: useTransform(
              [mouseX, mouseY],
              (latest: number[]) =>
                `${50 + latest[0] * 20}% ${50 + latest[1] * 20}%`
            ),
          }}
        />
      </div>

      <div className='container mx-auto px-4 md:px-8 lg:px-12 relative z-10'>
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
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
                Let&ops;s Get Started
              </span>
            </motion.div>

            <h2 className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white mb-4 lg:mb-6 2xl:mb-4'>
              READY TO BUILD
              <br />
              <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                EXTRAORDINARY?
              </span>
            </h2>

            <p className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-white/80 max-w-3xl mx-auto mb-8 sm:mb-10 2xl:mb-8'>
              Let&apos;s collaborate to turn your innovative ideas into powerful
              digital solutions. Reach out today and let us be your partner in
              success.
            </p>

            {/* Stats Section */}
            <div className='flex flex-wrap justify-center gap-6 md:gap-8 2xl:gap-6'>
              {[
                { number: "24h", label: "Response Time" },
                { number: "Free", label: "Consultation" },
                { number: "100%", label: "Satisfaction" },
              ].map(
                (
                  stat,
                  index // Added index for key
                ) => (
                  <motion.div
                    key={stat.label || index} // Use index as fallback key if label might not be unique
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
                )
              )}
            </div>
          </motion.div>

          {/* Main CTA Section */}
          <motion.div variants={itemVariants} className='text-center'>
            <div className='relative group inline-block'>
              <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl scale-110' />

              <div className='relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 lg:p-12 2xl:p-8'>
                <h3 className='text-2xl md:text-3xl font-bold text-white mb-3 lg:mb-4 2xl:mb-3'>
                  Transform Your Vision Into Reality
                </h3>
                <p className='text-white/80 mb-6 lg:mb-8 2xl:mb-6 max-w-2xl mx-auto'>
                  Get a free consultation and discover how we can help you
                  achieve your digital goals with our expert team.
                </p>

                <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                  <motion.button
                    onClick={scrollToContact}
                    className='group/btn inline-flex items-center gap-3 bg-[#E7FF1A] text-[#111316] font-bold uppercase py-4 px-8 rounded-2xl transition-all duration-300 hover:bg-[#E7FF1A]/90 hover:shadow-lg hover:shadow-[#E7FF1A]/20'
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 0px 30px rgba(231, 255, 26, 0.6)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <span
                      className='relative z-10'
                      style={{ transform: "translateZ(20px)" }}
                    >
                      Get Free Quote
                    </span>
                    <ArrowRight
                      className='w-5 h-5 group-hover/btn:translate-x-1 transition-transform relative z-10'
                      style={{ transform: "translateZ(20px)" }}
                    />

                    {/* Orbital Glow */}
                    <motion.div
                      className='absolute inset-0 rounded-2xl border-2 border-[#E7FF1A]/50'
                      animate={{ scale: [1, 1.1, 1], opacity: [0, 0.7, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{ transform: "translateZ(-10px)" }}
                    />
                  </motion.button>

                  <motion.button
                    onClick={() => {
                      const element = document.getElementById("work");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className='group/btn inline-flex items-center gap-3 bg-white/10 text-white font-bold uppercase py-4 px-8 rounded-2xl border border-white/20 backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:border-white/30'
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Portfolio
                    <ArrowRight className='w-5 h-5 group-hover/btn:translate-x-1 transition-transform' />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
