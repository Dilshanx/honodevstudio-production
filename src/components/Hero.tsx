"use client";
import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  // Enhanced intersection observer
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  // Enhanced container variants with better timing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
        duration: 1.2,
      },
    },
  };

  // Enhanced item variants with spring animations
  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 50, opacity: 0 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0, transition: { duration: 0.8 } }
      : {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 25,
            mass: 0.8,
            duration: 1.0,
          },
        },
  };

  // Enhanced text reveal variants
  const textRevealVariants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 0 }
      : { opacity: 0, y: 30, scale: 0.95 },
    visible: shouldReduceMotion
      ? { opacity: 1, transition: { duration: 1.0 } }
      : {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 20,
            mass: 0.8,
            duration: 1.2,
          },
        },
  };

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={ref}
      className='relative w-full flex flex-col bg-[#111316] overflow-hidden min-h-screen xl:h-[calc(100vh-4rem)] 2xl:h-[calc(100vh-5rem)] pb-20 xl:pb-0'
    >
      {/* Enhanced Background with better parallax */}
      <div className='absolute inset-0 z-0'>
        <motion.div
          initial={
            shouldReduceMotion ? { opacity: 0.8 } : { scale: 1.1, opacity: 0.8 }
          }
          animate={
            shouldReduceMotion
              ? { opacity: inView ? 1 : 0.8 }
              : { scale: inView ? 1 : 1.1, opacity: inView ? 1 : 0.8 }
          }
          transition={
            shouldReduceMotion
              ? { duration: 1.5 }
              : { duration: 2.5, ease: "easeOut" }
          }
          className='w-full h-full'
        >
          <Image
            src='/images/hero-background.webp'
            alt='Hero background'
            fill
            priority
            className='object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw'
          />
          {/* Enhanced gradient overlays */}
          <motion.div
            className='absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30'
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.div
            className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40'
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
          {/* Enhanced grid pattern */}
          <motion.div
            className='absolute inset-0 opacity-25'
            style={{
              backgroundImage: `linear-gradient(to right, #80808015 1px, transparent 1px), linear-gradient(to bottom, #80808015 1px, transparent 1px)`,
              backgroundSize: `clamp(1rem, 3vw, 2.5rem) clamp(1rem, 3vw, 2.5rem)`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 0.25 : 0 }}
            transition={{ duration: 2.0, delay: 1.0 }}
          />
        </motion.div>
      </div>

      {/* Main Content Container */}
      <div className='relative z-10 flex-1 flex flex-col'>
        <div
          className='flex-1 flex items-center justify-center'
          style={{ padding: "clamp(1rem, 4vw, 3rem)" }}
        >
          <div className='w-full max-w-[min(90vw,1400px)] grid grid-cols-1 xl:grid-cols-2 gap-[clamp(2rem,8vw,4rem)] items-center xl:pt-16 2xl:pt-20'>
            {/* Enhanced Mobile Logo with kid.svg style animation */}
            <motion.div
              className='xl:hidden flex justify-center items-center order-1 relative group cursor-pointer'
              style={{
                marginBottom: "clamp(0.5rem, 2vh, 1rem)", // Reduced gap
                minHeight: "clamp(250px, 55vw, 450px)", // Increased size
              }}
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, y: 30, scale: 0.8 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: inView ? 1 : 0 }
                  : {
                      opacity: inView ? 1 : 0,
                      y: inView ? 0 : 30,
                      scale: inView ? 1 : 0.8,
                    }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 1.0 }
                  : {
                      delay: 0.5,
                      duration: 1.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 25,
                    }
              }
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
              onClick={() => handleScrollToSection("home")}
            >
              {/* Enhanced glow effect - same as kid.svg */}
              <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-125' />

              <Image
                src='/images/hono-logo-mobile.svg'
                alt='Hono Logo'
                width={500} // Increased from 400
                height={500} // Increased from 400
                className='object-contain filter drop-shadow-2xl group-hover:drop-shadow-2xl transition-all duration-300 relative z-10'
                style={{
                  width: "clamp(280px, 60vw, min(500px, 85vw))", // Increased size
                  height: "clamp(280px, 60vw, min(500px, 85vw))", // Increased size
                  maxWidth: "min(90vw, 500px)", // Increased max width
                  maxHeight: "min(60vh, 500px)", // Increased max height
                }}
                sizes='(max-width: 768px) 60vw, (max-width: 1200px) 500px, 500px'
              />
            </motion.div>

            {/* Enhanced Text Content */}
            <motion.div
              className='order-2 xl:order-1 text-center xl:text-left'
              style={{ maxWidth: "min(100%, 700px)" }}
              variants={containerVariants}
              initial='hidden'
              animate={inView ? "visible" : "hidden"}
            >
              {/* Enhanced Badge */}
              <motion.div
                variants={itemVariants}
                className='inline-flex items-center gap-[clamp(0.4rem,1.5vw,0.75rem)] bg-white/10 backdrop-blur-xl border border-white/20 rounded-full mb-[clamp(1rem,3vh,2rem)]'
                style={{
                  padding: `clamp(0.5rem, 2vw, 0.875rem) clamp(1rem, 4vw, 1.75rem)`,
                }}
                whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <motion.div
                  animate={
                    shouldReduceMotion ? {} : { rotate: [0, 10, -10, 0] }
                  }
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Sparkles
                    className='text-[#E7FF1A]'
                    style={{
                      width: "clamp(14px, 3.5vw, 20px)",
                      height: "clamp(14px, 3.5vw, 20px)",
                    }}
                  />
                </motion.div>
                <span
                  className='font-medium text-white/90'
                  style={{
                    fontSize: "clamp(0.8rem, 2.2vw, 1.1rem)",
                  }}
                >
                  Next-Gen Creative Studio
                </span>
              </motion.div>

              {/* Enhanced Heading with word-by-word reveal */}
              <motion.h1
                className='font-bold leading-[0.85] text-white mb-[clamp(1rem,3vh,2rem)]'
                variants={textRevealVariants}
                style={{
                  fontSize: "clamp(2.5rem, 10vw + 1rem, min(4.5rem, 12vw))",
                  lineHeight: "0.9",
                  letterSpacing: "-0.02em",
                }}
              >
                <motion.span
                  initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  CREATIVE TECH
                </motion.span>
                <br />
                <motion.span
                  className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'
                  initial={
                    shouldReduceMotion ? {} : { opacity: 0, y: 20, scale: 0.9 }
                  }
                  animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
                  transition={{
                    duration: 1.0,
                    delay: 1.2,
                    type: "spring",
                    stiffness: 120,
                  }}
                >
                  STUDIO
                </motion.span>
                {!shouldReduceMotion && (
                  <motion.span
                    className='inline-block bg-[#E7FF1A] align-middle'
                    style={{
                      width: "clamp(3px, 0.6vw, 8px)",
                      height: "clamp(2rem, 8vw + 0.5rem, 4rem)",
                      marginLeft: "clamp(0.5rem, 2vw, 1rem)",
                    }}
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut",
                      delay: 2.0,
                    }}
                  />
                )}
              </motion.h1>

              {/* Enhanced Subtitle */}
              <motion.p
                className='leading-relaxed text-white/85 mb-[clamp(2rem,5vh,3rem)]'
                variants={itemVariants}
                style={{
                  fontSize: "clamp(1.1rem, 3vw + 0.5rem, 1.4rem)",
                  lineHeight: "1.6",
                  maxWidth: "min(100%, 600px)",
                  margin: "0 auto",
                  marginBottom: "clamp(2rem,5vh,3rem)",
                }}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.6 }}
              >
                Merging development precision with emotional design to create
                digital experiences that resonate and inspire.
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className='flex flex-col sm:flex-row gap-[clamp(1rem,3vw,1.5rem)] justify-center xl:justify-start items-center'
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 2.0 }}
              >
                {/* Primary CTA with enhanced effects */}
                <motion.button
                  onClick={() => handleScrollToSection("contact")}
                  className='group inline-flex items-center justify-center gap-[clamp(0.5rem,2vw,0.75rem)] bg-[#E7FF1A] text-[#111316] font-bold uppercase rounded-xl transition-all duration-200 hover:bg-[#E7FF1A]/90 hover:shadow-lg hover:shadow-[#E7FF1A]/20 w-full sm:w-auto relative overflow-hidden'
                  style={{
                    padding:
                      "clamp(0.875rem, 3vw, 1.125rem) clamp(2rem, 6vw, 2.5rem)",
                    fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)",
                    minWidth: "clamp(160px, 40vw, 200px)",
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.05,
                          y: -2,
                          boxShadow: "0px 10px 30px rgba(231, 255, 26, 0.4)",
                        }
                  }
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.2, type: "spring", stiffness: 400 }}
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
                  <span className='relative z-10'>Get Started</span>
                  <ArrowRight
                    className='group-hover:translate-x-1 transition-transform duration-200 relative z-10'
                    style={{
                      width: "clamp(18px, 4vw, 22px)",
                      height: "clamp(18px, 4vw, 22px)",
                    }}
                  />
                </motion.button>

                {/* Secondary CTA with enhanced styling */}
                <motion.button
                  onClick={() => handleScrollToSection("work")}
                  className='group inline-flex items-center justify-center gap-[clamp(0.5rem,2vw,0.75rem)] bg-white/10 text-white font-bold uppercase rounded-xl border border-white/20 backdrop-blur-xl transition-all duration-200 hover:bg-white/20 hover:border-white/30 w-full sm:w-auto'
                  style={{
                    padding:
                      "clamp(0.875rem, 3vw, 1.125rem) clamp(2rem, 6vw, 2.5rem)",
                    fontSize: "clamp(0.9rem, 2.2vw, 1.1rem)",
                    minWidth: "clamp(160px, 40vw, 200px)",
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 1.02,
                          y: -1,
                          borderColor: "rgba(255, 255, 255, 0.4)",
                        }
                  }
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  >
                    <Play
                      style={{
                        width: "clamp(18px, 4vw, 22px)",
                        height: "clamp(18px, 4vw, 22px)",
                      }}
                    />
                  </motion.div>
                  View Work
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Enhanced Desktop Video Section */}
            <motion.div
              className='relative xl:block hidden order-2 w-full'
              initial={
                shouldReduceMotion
                  ? { opacity: 0 }
                  : { opacity: 0, x: 50, scale: 0.9 }
              }
              animate={
                shouldReduceMotion
                  ? { opacity: inView ? 1 : 0 }
                  : {
                      opacity: inView ? 1 : 0,
                      x: inView ? 0 : 50,
                      scale: inView ? 1 : 0.9,
                    }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 1.0 }
                  : {
                      delay: 1.0,
                      duration: 1.2,
                      type: "spring",
                      stiffness: 100,
                      damping: 25,
                    }
              }
            >
              <motion.div
                className='w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-white/5 backdrop-blur-sm border border-white/10 relative group'
                whileHover={
                  shouldReduceMotion
                    ? {}
                    : {
                        scale: 1.02,
                        y: -5,
                        boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
                      }
                }
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Enhanced glow effect */}
                {!shouldReduceMotion && (
                  <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl scale-110' />
                )}

                <video
                  className='w-full h-full object-cover relative z-10'
                  src='/videos/hero-showcase.webm'
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload='metadata'
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className='relative z-10 flex justify-center'
          style={{ paddingBottom: "clamp(1.5rem,4vh,2.5rem)" }}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={
            shouldReduceMotion
              ? { opacity: inView ? 1 : 0 }
              : { opacity: inView ? 1 : 0, y: inView ? 0 : 20 }
          }
          transition={
            shouldReduceMotion
              ? { duration: 1.0 }
              : { delay: 2.5, duration: 0.8 }
          }
        >
          <motion.div
            className='rounded-full border-2 border-white/30 flex justify-center cursor-pointer hover:border-white/50 transition-colors duration-200 backdrop-blur-sm bg-white/5 group'
            style={{
              width: "clamp(24px, 5vw, 28px)",
              height: "clamp(40px, 8vw, 48px)",
            }}
            animate={shouldReduceMotion ? {} : { y: [0, 8, 0] }}
            transition={
              shouldReduceMotion
                ? { duration: 1 }
                : {
                    repeat: Infinity,
                    duration: 2.5,
                    ease: "easeInOut",
                    delay: 3.0,
                  }
            }
            onClick={() => handleScrollToSection("about")}
            whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
          >
            <motion.div
              className='bg-white/70 rounded-full group-hover:bg-[#E7FF1A] transition-colors duration-200'
              style={{
                width: "clamp(5px, 1.2vw, 7px)",
                height: "clamp(5px, 1.2vw, 7px)",
                marginTop: "clamp(8px, 2vw, 10px)",
              }}
              animate={shouldReduceMotion ? {} : { y: [0, 15, 0] }}
              transition={
                shouldReduceMotion
                  ? { duration: 1 }
                  : {
                      repeat: Infinity,
                      duration: 2.5,
                      ease: "easeInOut",
                      delay: 3.0,
                    }
              }
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
