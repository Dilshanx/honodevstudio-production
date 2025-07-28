"use client";

import React, { useState, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  Variants,
  Transition,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote, X, Sparkles } from "lucide-react";

// --- Data ---
const testimonialsData = [
  {
    id: 1,
    name: "Sarah Jennings",
    title: "CEO, Innovatech",
    avatar: "/api/placeholder/64/64",
    quote:
      "They transformed our vision into a stunning reality. Their expertise and dedication are unmatched.",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "CTO, NextGen Corp",
    avatar: "/api/placeholder/64/64",
    quote:
      "The team is incredibly talented and responsive. They delivered a complex AI platform ahead of schedule.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    title: "Marketing Director, Stellar",
    avatar: "/api/placeholder/64/64",
    quote:
      "Working with them felt like a true partnership. Their creative UI/UX designs have significantly improved our conversion rates.",
  },
  {
    id: 4,
    name: "David Lee",
    title: "Head of Engineering, Quantum",
    avatar: "/api/placeholder/64/64",
    quote:
      "The performance optimizations they implemented resulted in a 40% reduction in our page load times.",
  },
  {
    id: 5,
    name: "Jessica Williams",
    title: "Founder, Artifex",
    avatar: "/api/placeholder/64/64",
    quote:
      "From concept to deployment, their process was transparent and efficient. A truly world-class development studio.",
  },
];

// --- Enhanced Orb Component ---
const Orb = ({
  testimonial,
  onClick,
  index,
  inView,
}: {
  testimonial: (typeof testimonialsData)[0];
  onClick: (testimonial: (typeof testimonialsData)[0]) => void;
  index: number;
  inView: boolean;
}) => {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const positions = [
    { top: "10%", left: "20%" },
    { top: "30%", left: "70%" },
    { top: "60%", left: "10%" },
    { top: "80%", left: "80%" },
    { top: "50%", left: "45%" },
  ];
  const size = index === 4 ? "120px" : "80px";
  const gradients = [
    "from-[#E7FF1A] to-violet-400",
    "from-violet-400 to-cyan-400",
    "from-cyan-400 to-pink-400",
    "from-pink-400 to-[#E7FF1A]",
    "from-[#E7FF1A] via-violet-400 to-cyan-400",
  ];

  // Enhanced orb variants
  const orbVariants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 0, scale: 0 }
      : { opacity: 0, scale: 0, y: 50, rotateY: -90 },
    visible: shouldReduceMotion
      ? {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, delay: index * 0.1 },
        }
      : {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateY: 0,
          transition: {
            type: "spring",
            damping: 20,
            stiffness: 120,
            mass: 0.8,
            delay: index * 0.15,
            duration: 0.8,
          },
        },
  };

  return (
    <motion.div
      variants={orbVariants}
      initial='hidden'
      animate={inView ? "visible" : "hidden"}
      whileHover={
        shouldReduceMotion
          ? {}
          : {
              scale: 1.2,
              zIndex: 20,
              y: -10,
              rotateY: 10,
              boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.3)",
            }
      }
      whileTap={shouldReduceMotion ? {} : { scale: 0.95 }}
      onClick={() => onClick(testimonial)}
      className='absolute cursor-pointer rounded-full shadow-2xl overflow-hidden group'
      style={{ ...positions[index], width: size, height: size }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Enhanced glow effect */}
      {!shouldReduceMotion && (
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${gradients[index]} opacity-20 group-hover:opacity-50 transition-opacity duration-500 blur-lg scale-110`}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        />
      )}

      {/* Enhanced orb content */}
      <motion.div
        className={`relative w-full h-full bg-gradient-to-br ${gradients[index]} p-1`}
        whileHover={shouldReduceMotion ? {} : { rotate: 5 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <div className='w-full h-full rounded-full bg-[#111316]/80 backdrop-blur-xl border border-white/10 flex items-center justify-center group-hover:bg-[#111316]/60 transition-all duration-300'>
          <motion.div
            className='text-white font-bold text-lg group-hover:text-[#E7FF1A] transition-colors'
            whileHover={shouldReduceMotion ? {} : { scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </motion.div>
        </div>
      </motion.div>

      {/* Floating animation */}
      {!shouldReduceMotion && (
        <motion.div
          className='absolute inset-0'
          animate={{ y: [0, -5, 0] }}
          transition={{
            duration: 2 + index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        />
      )}
    </motion.div>
  );
};

// --- Enhanced Focused Card Component ---
const FocusedCard = ({
  testimonial,
  onClose,
}: {
  testimonial: (typeof testimonialsData)[0] | null;
  onClose: () => void;
}) => {
  const shouldReduceMotion = useReducedMotion() ?? false;

  if (!testimonial) return null;

  // Enhanced card variants
  const cardVariants: Variants = {
    hidden: shouldReduceMotion
      ? { opacity: 0, scale: 0.8 }
      : { opacity: 0, scale: 0.8, y: 50, rotateX: -15 },
    visible: shouldReduceMotion
      ? { opacity: 1, scale: 1, transition: { duration: 0.4 } }
      : {
          opacity: 1,
          scale: 1,
          y: 0,
          rotateX: 0,
          transition: {
            type: "spring",
            damping: 25,
            stiffness: 150,
            mass: 0.8,
            duration: 0.6,
          },
        },
    exit: shouldReduceMotion
      ? { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
      : {
          opacity: 0,
          scale: 0.8,
          y: -50,
          rotateX: 15,
          transition: { duration: 0.4 },
        },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
      style={{ perspective: "1000px" }}
    >
      {/* Enhanced backdrop */}
      <motion.div
        className='absolute inset-0 bg-black/80 backdrop-blur-sm'
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Enhanced card */}
      <motion.div
        className='relative w-full max-w-2xl rounded-3xl border border-white/10 bg-[#111316]/95 p-6 lg:p-8 2xl:p-6 shadow-2xl backdrop-blur-xl'
        whileHover={shouldReduceMotion ? {} : { y: -5, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Enhanced close button */}
        <motion.button
          onClick={onClose}
          className='absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20 hover:text-[#E7FF1A]'
          whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 90 }}
          whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <X size={20} />
        </motion.button>

        {/* Enhanced quote icon */}
        <motion.div
          initial={
            shouldReduceMotion ? {} : { opacity: 0, scale: 0, rotate: -45 }
          }
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
            type: "spring",
            stiffness: 200,
          }}
        >
          <Quote
            className='absolute -top-8 -left-8 h-24 w-24 text-[#E7FF1A]/20'
            style={{ filter: "drop-shadow(0 0 10px rgba(231, 255, 26, 0.3))" }}
          />
        </motion.div>

        {/* Enhanced quote text */}
        <motion.p
          className='relative z-10 mb-4 lg:mb-6 2xl:mb-4 text-xl italic leading-relaxed text-white/90'
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {testimonial.quote}
        </motion.p>

        {/* Enhanced author info */}
        <motion.div
          className='flex items-center gap-4'
          initial={shouldReduceMotion ? {} : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <motion.div
            className='w-16 h-16 rounded-full bg-gradient-to-br from-[#E7FF1A] to-violet-400 border-2 border-white/20 flex items-center justify-center'
            whileHover={shouldReduceMotion ? {} : { scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className='text-[#111316] font-bold'>
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </motion.div>
          <div>
            <motion.h4
              className='text-xl font-bold text-white'
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              {testimonial.name}
            </motion.h4>
            <motion.p
              className='text-[#E7FF1A]'
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
            >
              {testimonial.title}
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// --- Main Testimonials Section Component ---
export function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<
    (typeof testimonialsData)[0] | null
  >(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion() ?? false;

  // Enhanced intersection observer
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  // Enhanced spring config
  const springConfig: Transition = { damping: 25, stiffness: 120, mass: 0.5 };
  const dx = useSpring(
    useTransform(mouseX, (val) => val * -0.5),
    springConfig
  );
  const dy = useSpring(
    useTransform(mouseY, (val) => val * -0.5),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [5, -5]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-5, 5]),
    springConfig
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (shouldReduceMotion) return;
      if (!containerRef.current) return;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();
      mouseX.set((e.clientX - left) / width - 0.5);
      mouseY.set((e.clientY - top) / height - 0.5);
    },
    [mouseX, mouseY, shouldReduceMotion]
  );

  const handleMouseLeave = useCallback(() => {
    if (shouldReduceMotion) return;
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY, shouldReduceMotion]);

  // Enhanced animation variants
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
            stiffness: 100,
            damping: 20,
            mass: 0.8,
            duration: 0.8,
          },
        },
  };

  return (
    <section
      id='testimonials'
      ref={ref}
      className='relative w-full bg-[#111316] py-12 sm:py-16 lg:py-20 2xl:py-12 pb-20 xl:pb-12 overflow-hidden'
    >
      {/* Enhanced background */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30' />
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

      <div className='container mx-auto px-4 md:px-8 lg:px-12 relative z-10'>
        <motion.div
          className='max-w-6xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          animate={inView ? "visible" : "hidden"}
        >
          {/* Enhanced Header Section */}
          <motion.div
            variants={itemVariants}
            className='text-center mb-12 sm:mb-16 2xl:mb-12'
          >
            {/* Enhanced Badge */}
            <motion.div
              variants={itemVariants}
              className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-4 lg:mb-6 2xl:mb-4'
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <motion.div
                animate={shouldReduceMotion ? {} : { rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <Sparkles className='w-4 h-4 text-[#E7FF1A]' />
              </motion.div>
              <span className='text-sm font-medium text-white/90'>
                Client Testimonials
              </span>
            </motion.div>

            {/* Enhanced Title */}
            <motion.h2
              className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white mb-4 lg:mb-6 2xl:mb-4'
              variants={itemVariants}
            >
              <motion.span
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                TRUSTED BY
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
                  delay: 0.5,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                INNOVATORS
              </motion.span>
            </motion.h2>

            {/* Enhanced Subtitle */}
            <motion.p
              className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-white/80 max-w-3xl mx-auto mb-8 sm:mb-10 2xl:mb-8'
              variants={itemVariants}
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              Don&apos;t just take our word for it—hear from the businesses
              we&apos;ve helped transform with cutting-edge solutions.
            </motion.p>
          </motion.div>

          {/* Enhanced Interactive Testimonials */}
          <motion.div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={
              shouldReduceMotion
                ? {}
                : { transformStyle: "preserve-3d", rotateX, rotateY }
            }
            className='relative h-[400px] w-full max-w-4xl mx-auto mb-12 lg:mb-20 2xl:mb-12'
            variants={itemVariants}
          >
            {/* Enhanced instruction text */}
            <motion.div
              className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 text-center'
              initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <p className='text-white/60 text-sm'>
                Click on any testimonial to read more
              </p>
            </motion.div>

            {testimonialsData.map((testimonial, index) => (
              <Orb
                key={testimonial.id}
                testimonial={testimonial}
                onClick={setSelectedTestimonial}
                index={index}
                inView={inView}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedTestimonial && (
          <FocusedCard
            testimonial={selectedTestimonial}
            onClose={() => setSelectedTestimonial(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
