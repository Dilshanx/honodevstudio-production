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
import { useInView } from "react-intersection-observer";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  Sparkles,
  ArrowRight,
  Target,
  Users,
  Lightbulb,
  Shield,
} from "lucide-react";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const router = useRouter();
  const shouldReduceMotion = useReducedMotion();

  // Enhanced intersection observer with better threshold
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  // Optimized spring config
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

  const handleOurStoryClick = useCallback(() => {
    router.push("/our-story");
  }, [router]);

  // Enhanced animation variants with staggered children
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

  // Enhanced card variants with more sophisticated animations
  const cardVariants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 0, y: 0 }
      : { y: 30, opacity: 0, scale: 0.95 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
      : {
          y: 0,
          opacity: 1,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 25,
            mass: 0.8,
            duration: 0.8,
          },
        },
  };

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "Always pushing boundaries with latest technologies and creative solutions",
      color: "from-[#E7FF1A] to-violet-400",
    },
    {
      icon: Users,
      title: "Client Success",
      description:
        "Your success is our primary measure of achievement and driving force",
      color: "from-violet-400 to-cyan-400",
    },
    {
      icon: Lightbulb,
      title: "Quality Driven",
      description:
        "Meticulous attention to detail in every project and interaction",
      color: "from-cyan-400 to-pink-400",
    },
    {
      icon: Shield,
      title: "Transparency",
      description:
        "Open communication throughout the entire development process",
      color: "from-pink-400 to-[#E7FF1A]",
    },
  ];

  return (
    <section
      id='about'
      ref={ref}
      className='relative w-full bg-[#111316] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden'
    >
      {/* Enhanced Background with better parallax */}
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
          variants={containerVariants}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          className='max-w-6xl mx-auto'
        >
          {/* Image Section - MOVED UP WITH REDUCED MARGINS */}
          <motion.div
            variants={itemVariants}
            className='flex justify-center mb-3 sm:mb-4 md:mb-5 lg:mb-6'
          >
            <motion.div
              className='relative group -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 xl:-mt-12'
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-125' />
              <div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64'>
                <Image
                  src='/images/kid.svg'
                  alt='About Us'
                  fill
                  className='object-contain drop-shadow-2xl'
                  priority
                  sizes='(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, (max-width: 1280px) 224px, 256px'
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Header Section with enhanced animations - UPDATED TEXT SIZES */}
          <motion.div
            variants={itemVariants}
            className='text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16'
          >
            {/* Badge with enhanced hover effect - UPDATED SIZE */}
            <motion.div
              variants={itemVariants}
              className='inline-flex items-center gap-[clamp(0.4rem,1.5vw,0.75rem)] bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-[clamp(1rem,3vh,2rem)]'
              style={{
                padding: `clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.75rem)`,
              }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Sparkles
                className='text-[#E7FF1A]'
                style={{
                  width: "clamp(14px, 3.5vw, 20px)",
                  height: "clamp(14px, 3.5vw, 20px)",
                }}
              />
              <span
                className='font-medium text-white/90'
                style={{
                  fontSize: "clamp(0.8rem, 2.2vw, 1.1rem)",
                }}
              >
                About Our Studio
              </span>
            </motion.div>

            {/* Title with enhanced text reveal - UPDATED SIZE */}
            <h2
              className='font-bold leading-[0.85] text-white mb-[clamp(1rem,3vh,2rem)]'
              style={{
                fontSize: "clamp(2rem, 8vw + 0.5rem, min(3.5rem, 10vw))",
                lineHeight: "0.9",
                letterSpacing: "-0.02em",
              }}
            >
              <span className='block sm:inline'>CREATIVE MINDS</span>{" "}
              <span className='block sm:inline bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                DIGITAL SOULS
              </span>
            </h2>

            {/* Subtitle with staggered animation - UPDATED SIZE */}
            <motion.p
              className='leading-relaxed text-white/85 max-w-4xl mx-auto px-2'
              style={{
                fontSize: "clamp(1rem, 2.8vw + 0.4rem, 1.3rem)",
                lineHeight: "1.6",
                marginBottom: "clamp(2rem,5vh,3rem)",
              }}
              variants={itemVariants}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              We&apos;re a passionate team of designers, developers, and
              strategists who believe in the power of digital transformation.
              Our mission is to help businesses create meaningful connections
              with their audiences.
            </motion.p>
          </motion.div>

          {/* Main Content Grid with enhanced card animations */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16'>
            {/* Our Story Card with enhanced interactions - UPDATED TEXT SIZES */}
            <motion.div
              variants={cardVariants}
              className='relative group'
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110' />

              <div className='relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 p-6 lg:p-8'>
                <motion.h3
                  className='font-bold text-white mb-4 lg:mb-6'
                  style={{
                    fontSize: "clamp(1.5rem, 4vw + 0.5rem, 2.2rem)",
                    lineHeight: "1.1",
                  }}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Our Story
                </motion.h3>

                <motion.p
                  className='text-white/80 leading-relaxed mb-4'
                  style={{
                    fontSize: "clamp(0.95rem, 2.2vw + 0.3rem, 1.15rem)",
                    lineHeight: "1.6",
                  }}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  From startups to established enterprises, we&apos;ve had the
                  privilege of working with diverse clients across various
                  industries, delivering solutions that not only meet their
                  immediate needs but also position them for long-term success.
                </motion.p>

                <motion.p
                  className='text-white/80 leading-relaxed mb-6 lg:mb-8'
                  style={{
                    fontSize: "clamp(0.95rem, 2.2vw + 0.3rem, 1.15rem)",
                    lineHeight: "1.6",
                  }}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  Our approach combines cutting-edge technology with
                  human-centered design to create experiences that truly
                  resonate with users and drive meaningful business outcomes.
                </motion.p>

                <motion.button
                  onClick={handleOurStoryClick}
                  className='group/btn inline-flex items-center justify-center gap-[clamp(0.5rem,2vw,0.75rem)] bg-[#E7FF1A] text-[#111316] font-bold uppercase rounded-xl transition-all duration-200 hover:bg-[#E7FF1A]/90 hover:shadow-lg hover:shadow-[#E7FF1A]/20 w-full sm:w-auto relative overflow-hidden'
                  style={{
                    padding:
                      "clamp(0.875rem, 3vw, 1.125rem) clamp(2rem, 6vw, 2.5rem)",
                    fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)",
                    minWidth: "clamp(160px, 40vw, 200px)",
                  }}
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                >
                  {/* Animated background */}
                  {!shouldReduceMotion && (
                    <motion.div
                      className='absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent'
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                  <span className='relative z-10'>Our Story</span>
                  <ArrowRight
                    className='group-hover/btn:translate-x-1 transition-transform duration-200 relative z-10'
                    style={{
                      width: "clamp(18px, 4vw, 22px)",
                      height: "clamp(18px, 4vw, 22px)",
                    }}
                  />
                </motion.button>
              </div>
            </motion.div>

            {/* Values Card with enhanced animations - UPDATED TEXT SIZES */}
            <motion.div
              variants={cardVariants}
              className='relative group'
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-violet-400/20 via-cyan-400/20 to-pink-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110' />

              <div className='relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 p-6 lg:p-8'>
                <motion.h3
                  className='font-bold text-white mb-6 lg:mb-8'
                  style={{
                    fontSize: "clamp(1.5rem, 4vw + 0.5rem, 2.2rem)",
                    lineHeight: "1.1",
                  }}
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Our Values
                </motion.h3>

                <div className='space-y-4 lg:space-y-6'>
                  {values.map((value, index) => (
                    <motion.div
                      key={value.title}
                      className='flex items-start gap-4 group/item'
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: -15 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0.4 }
                          : {
                              delay: 1.0 + index * 0.15,
                              duration: 0.6,
                              type: "spring",
                              stiffness: 100,
                            }
                      }
                      whileHover={shouldReduceMotion ? {} : { x: 5 }}
                    >
                      <div
                        className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-r ${value.color} ${shouldReduceMotion ? "" : "group-hover/item:scale-110"} transition-transform duration-200`}
                      >
                        <value.icon className='w-6 h-6 text-[#111316]' />
                      </div>
                      <div>
                        <h4
                          className='text-white font-semibold group-hover/item:text-[#E7FF1A] transition-colors duration-200'
                          style={{
                            fontSize: "clamp(1.05rem, 2.5vw + 0.2rem, 1.25rem)",
                          }}
                        >
                          {value.title}
                        </h4>
                        <p
                          className='text-white/70 leading-relaxed'
                          style={{
                            fontSize: "clamp(0.85rem, 2vw + 0.2rem, 1rem)",
                            lineHeight: "1.5",
                          }}
                        >
                          {value.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
