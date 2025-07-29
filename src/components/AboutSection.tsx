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
  const springConfig = { damping: 30, stiffness: 100, mass: 0.8 };
  const dx = useSpring(
    useTransform(mouseX, (val) => val * -0.3),
    springConfig
  );
  const dy = useSpring(
    useTransform(mouseY, (val) => val * -0.3),
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
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 50, opacity: 0 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0.6 } }
      : {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 20,
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

  // Image animation variants
  const imageVariants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 0, y: 0 }
      : { opacity: 0, y: 30, scale: 0.9 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0.8 } }
      : {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 25,
            mass: 0.8,
            duration: 1.0,
            delay: 0.1,
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
      className='relative w-full bg-[#111316] py-12 sm:py-16 lg:py-20 2xl:py-12 pb-20 xl:pb-12 overflow-hidden'
    >
      {/* Enhanced Background with better parallax */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30' />
        {!shouldReduceMotion && (
          <motion.div
            className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
            style={{ x: dx, y: dy }}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1.2 }}
          />
        )}
        <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
      </div>

      <div className='container mx-auto px-4 md:px-8 lg:px-12 relative z-10'>
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          variants={containerVariants}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
          className='max-w-6xl mx-auto'
        >
          {/* SVG Image Section - Only visible on XL and above */}
          <motion.div
            variants={imageVariants}
            className='hidden xl:flex justify-center mb-8 lg:mb-12 2xl:mb-8'
          >
            <motion.div
              className='relative group'
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Glow effect for image */}
              <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-125' />

              {/* SVG Image from public folder using Next.js Image */}
              <div className='relative w-64 h-64 lg:w-80 lg:h-80 2xl:w-72 2xl:h-72'>
                <Image
                  src='/images/kid.svg'
                  alt='About Us'
                  width={320}
                  height={320}
                  className='w-full h-full object-contain drop-shadow-2xl'
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Header Section with enhanced animations */}
          <motion.div
            variants={itemVariants}
            className='text-center mb-12 lg:mb-16 2xl:mb-12'
          >
            {/* Badge with enhanced hover effect */}
            <motion.div
              variants={itemVariants}
              className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-4 lg:mb-6 2xl:mb-4'
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Sparkles className='w-4 h-4 text-[#E7FF1A]' />
              <span className='text-sm font-medium text-white/90'>
                About Our Studio
              </span>
            </motion.div>

            {/* Title with enhanced text reveal */}
            <motion.h2
              className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white mb-4 lg:mb-6 2xl:mb-4'
              variants={itemVariants}
            >
              <motion.span
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                CREATIVE MINDS
              </motion.span>
              <br />
              <motion.span
                className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                DIGITAL SOULS
              </motion.span>
            </motion.h2>

            {/* Subtitle with staggered animation */}
            <motion.p
              className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-white/80 max-w-3xl mx-auto'
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
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 2xl:gap-6 mb-12 lg:mb-16 2xl:mb-12'>
            {/* Our Story Card with enhanced interactions */}
            <motion.div
              variants={cardVariants}
              className='relative group'
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Enhanced glow effect */}
              <div className='hidden md:block absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110' />

              <div className='relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 p-6 lg:p-8'>
                <motion.h3
                  className='text-2xl lg:text-3xl font-bold text-white mb-4 lg:mb-6'
                  initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  Our Story
                </motion.h3>

                <motion.p
                  className='text-white/80 leading-relaxed mb-4 text-base lg:text-lg'
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
                  className='text-white/80 leading-relaxed mb-6 lg:mb-8 text-base lg:text-lg'
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
                  className='group/btn inline-flex items-center gap-3 bg-[#E7FF1A] text-[#111316] font-bold uppercase py-3 px-6 lg:py-4 lg:px-8 rounded-2xl transition-all duration-200 hover:bg-[#E7FF1A]/90 hover:shadow-lg hover:shadow-[#E7FF1A]/20 w-full sm:w-auto justify-center sm:justify-start'
                  whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  style={{ transitionDelay: "1.4s" }}
                >
                  Our Story
                  <ArrowRight className='w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-200' />
                </motion.button>
              </div>
            </motion.div>

            {/* Values Card with enhanced animations */}
            <motion.div
              variants={cardVariants}
              className='relative group'
              whileHover={shouldReduceMotion ? {} : { y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              {/* Enhanced glow effect */}
              <div className='hidden md:block absolute inset-0 bg-gradient-to-r from-violet-400/20 via-cyan-400/20 to-pink-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110' />

              <div className='relative rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-500 p-6 lg:p-8'>
                <motion.h3
                  className='text-2xl lg:text-3xl font-bold text-white mb-6 lg:mb-8'
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
                        <h4 className='text-white font-semibold text-lg group-hover/item:text-[#E7FF1A] transition-colors duration-200'>
                          {value.title}
                        </h4>
                        <p className='text-white/70 text-sm leading-relaxed'>
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
