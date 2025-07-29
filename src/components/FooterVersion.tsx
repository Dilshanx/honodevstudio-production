"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  Variants,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Github,
  Sparkles,
} from "lucide-react";

// --- Back To Top Button Component (with responsive logic) ---
function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className='hidden lg:flex fixed right-8 bottom-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-[#E7FF1A] to-violet-400 items-center justify-center shadow-lg shadow-[#E7FF1A]/20 hover:shadow-[#E7FF1A]/40 transition-all duration-300'
          aria-label='Back to top'
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          transition={
            shouldReduceMotion
              ? { duration: 0.3 }
              : { duration: 0.3, ease: "easeInOut" }
          }
          whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.1 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
        >
          <ArrowUp className='w-5 h-5 text-[#111316]' />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// --- Contact Page Footer Component (Modified from Main Footer) ---
export default function ContactPage() {
  const currentYear = new Date().getFullYear();
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

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

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "#",
      color: "from-pink-400 to-purple-400",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "#",
      color: "from-cyan-400 to-blue-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "#",
      color: "from-blue-400 to-indigo-400",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "#",
      color: "from-gray-400 to-gray-600",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 30, opacity: 0 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0 }
      : {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 100,
            damping: 15,
            mass: 0.8,
          },
        },
  };

  return (
    <footer className='relative w-full bg-[#111316] py-16 sm:py-20 lg:py-24 2xl:py-16 pb-24 xl:pb-16 overflow-hidden'>
      {/* Background with gradient overlay similar to other sections */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30' />
        {!shouldReduceMotion && (
          <motion.div
            className='absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/10 to-transparent'
            style={{ x: dx, y: dy }}
          />
        )}
        <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20' />
      </div>

      <div className='container mx-auto px-4 md:px-8 lg:px-12 relative z-10'>
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className='max-w-6xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants}
            className='text-center mb-12 sm:mb-16 lg:mb-20 2xl:mb-12'
          >
            <motion.div
              variants={itemVariants}
              className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-4 lg:mb-6 2xl:mb-4'
            >
              <Sparkles className='w-4 h-4 text-[#E7FF1A]' />
              <span className='text-sm font-medium text-white/90'>
                Let&apos;s Connect
              </span>
            </motion.div>

            <h2 className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white mb-4 lg:mb-6 2xl:mb-4'>
              LET&apos;S BUILD
              <br />
              <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                TOGETHER
              </span>
            </h2>

            <p className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-white/80 max-w-3xl mx-auto'>
              <span className='block md:hidden'>
                Have a project in mind? Let&apos;s create something
                extraordinary.
              </span>
              <span className='hidden md:block'>
                Have a project in mind? We&apos;d love to hear about it. Reach
                out and let&apos;s create something extraordinary.
              </span>
            </p>
          </motion.div>

          {/* Contact Information and Social Links (Left side of the grid) */}
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 2xl:gap-8 items-start mb-12 sm:mb-16 lg:mb-20 2xl:mb-12'>
            <div className='space-y-6 lg:space-y-8 2xl:space-y-6'>
              <motion.div variants={itemVariants}>
                <h3 className='text-2xl md:text-3xl font-bold text-white mb-4 lg:mb-6 2xl:mb-4'>
                  Contact Information
                </h3>
                <div className='space-y-4 lg:space-y-6 2xl:space-y-4 text-white/80'>
                  <motion.div
                    className='group flex items-center gap-4 p-3 lg:p-4 2xl:p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300'
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  >
                    <div className='p-2 rounded-xl bg-gradient-to-r from-[#E7FF1A] to-violet-400 group-hover:scale-110 transition-transform duration-300'>
                      <MapPin className='w-5 h-5 text-[#111316]' />
                    </div>
                    <span className='group-hover:text-[#E7FF1A] transition-colors'>
                      123 Innovation Drive, San Francisco, CA
                    </span>
                  </motion.div>

                  <motion.div
                    className='group flex items-center gap-4 p-3 lg:p-4 2xl:p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300'
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  >
                    <div className='p-2 rounded-xl bg-gradient-to-r from-violet-400 to-cyan-400 group-hover:scale-110 transition-transform duration-300'>
                      <Mail className='w-5 h-5 text-[#111316]' />
                    </div>
                    <span className='group-hover:text-[#E7FF1A] transition-colors'>
                      hello@honodev.studio
                    </span>
                  </motion.div>

                  <motion.div
                    className='group flex items-center gap-4 p-3 lg:p-4 2xl:p-3 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300'
                    whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                  >
                    <div className='p-2 rounded-xl bg-gradient-to-r from-cyan-400 to-pink-400 group-hover:scale-110 transition-transform duration-300'>
                      <Phone className='w-5 h-5 text-[#111316]' />
                    </div>
                    <span className='group-hover:text-[#E7FF1A] transition-colors'>
                      +1 (415) 555-0123
                    </span>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <h3 className='text-2xl md:text-3xl font-bold text-white mb-4 lg:mb-6 2xl:mb-4'>
                  Follow Us
                </h3>
                <div className='flex gap-3 lg:gap-4 2xl:gap-3'>
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      whileHover={
                        shouldReduceMotion
                          ? {}
                          : {
                              scale: 1.1,
                              boxShadow: "0px 0px 15px rgba(231, 255, 26, 0.5)",
                            }
                      }
                      whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
                      className={`p-3 bg-gradient-to-r ${link.color} rounded-2xl backdrop-blur-sm transition-all duration-300 group`}
                      aria-label={link.name}
                    >
                      <link.icon className='h-6 w-6 text-white group-hover:text-[#111316] transition-colors' />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
            {/* The "Call to Action" section is REMOVED for the contact page footer */}
            {/* Keeping this empty div here to maintain grid structure, can be adjusted based on final layout needs */}
            <div></div>
          </div>

          {/* Footer Bottom */}
          <motion.div
            variants={itemVariants}
            className='pt-6 lg:pt-8 2xl:pt-6 border-t border-white/10 text-center'
          >
            <div className='flex flex-col sm:flex-row justify-center items-center gap-3 lg:gap-4 2xl:gap-3 mb-3 lg:mb-4 2xl:mb-3'>
              <a
                href='/privacy'
                className='text-white/60 hover:text-[#E7FF1A] transition-colors duration-300'
              >
                Privacy Policy
              </a>
              <span className='hidden sm:inline text-white/30'>•</span>
              <a
                href='/contact'
                className='text-white/60 hover:text-[#E7FF1A] transition-colors duration-300'
              >
                Contact Us
              </a>
            </div>
            <p className='text-white/40'>
              © {currentYear} Hono Dev Studio. All Rights Reserved.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <BackToTopButton />
    </footer>
  );
}
