"use client";

import React, { useCallback, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  Variants, // Import Variants for explicit typing
  Transition, // Import Transition for explicit typing
} from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
  Sparkles,
} from "lucide-react";

// --- Type Definitions ---
interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

type IconComponent = React.ComponentType<IconProps>;

interface ProcessStep {
  icon: IconComponent;
  title: string;
  description: string;
  color: string;
}

// --- HolographicIcon Component ---
const HolographicIcon = ({
  IconComponent,
  gradient = "from-[#E7FF1A] to-violet-400",
}: {
  IconComponent: IconComponent;
  gradient?: string;
}) => {
  const shouldReduceMotion = useReducedMotion() ?? false; // Handle null case

  // Define transition for hover effect
  const hoverTransition: Transition = shouldReduceMotion
    ? { duration: 0.1 } // Quick transition for reduced motion
    : { type: "spring", damping: 15, stiffness: 200, mass: 0.8 }; // Full spring for motion

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : "hover"} // Conditional whileHover
      className='relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 grid place-items-center flex-shrink-0'
    >
      <div
        className={`p-4 rounded-2xl bg-gradient-to-r ${gradient} ${shouldReduceMotion ? "" : "group-hover:scale-110"} transition-transform duration-200`}
      >
        <IconComponent className='w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-[#111316]' />
      </div>
      {!shouldReduceMotion && (
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-20 blur-lg`}
          variants={{ hover: { scale: 1.2, opacity: 0.4 } }}
          transition={hoverTransition} // Use defined transition
        />
      )}
    </motion.div>
  );
};

const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description:
      "Understanding your business goals and target audience to create a solid foundation",
    color: "from-[#E7FF1A] to-violet-400",
  },
  {
    icon: PenTool,
    title: "Design & Prototyping",
    description:
      "Creating intuitive and engaging user experiences that resonate with your users",
    color: "from-violet-400 to-cyan-400",
  },
  {
    icon: Code2,
    title: "Development",
    description:
      "Building robust and scalable solutions using cutting-edge technologies",
    color: "from-cyan-400 to-pink-400",
  },
  {
    icon: Rocket,
    title: "Testing & Launch",
    description:
      "Ensuring quality through rigorous testing and successful deployment",
    color: "from-pink-400 to-[#E7FF1A]",
  },
  {
    icon: TrendingUp,
    title: "Growth & Optimization",
    description:
      "Continuous improvement and performance monitoring for sustained success",
    color: "from-[#E7FF1A] to-violet-400",
  },
];

const ProcessCard = ({ step, index }: { step: ProcessStep; index: number }) => {
  const isEven = index % 2 === 0;
  const shouldReduceMotion = useReducedMotion() ?? false; // Handle null case

  // Define transition for ProcessCard
  const cardTransition: Transition = shouldReduceMotion
    ? { duration: 0.1 } // Quick transition for reduced motion
    : { duration: 0.5, ease: "easeOut", delay: index * 0.1 };

  return (
    <motion.div
      initial={
        shouldReduceMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: 30 }
      } // Explicit initial state
      whileInView={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
      } // Explicit whileInView state
      transition={cardTransition} // Use defined transition
      viewport={{ once: true, amount: 0.3, margin: "-50px" }} // Increased amount for better trigger
      className={`
        group relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12
        ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"}
        w-full
      `}
    >
      {/* Glow effect - only on desktop */}
      <div
        className={`hidden md:block absolute inset-0 bg-gradient-to-r ${step.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
      />

      {/* Icon Container */}
      <div className='flex-shrink-0 relative z-10'>
        <HolographicIcon IconComponent={step.icon} gradient={step.color} />
      </div>

      {/* Content Container */}
      <div
        className={`
        flex-1 text-center sm:text-left relative z-10
        ${isEven ? "sm:text-left" : "sm:text-right"}
        px-4 sm:px-0
      `}
      >
        <div className='relative p-4 sm:p-6 lg:p-8 2xl:p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300'>
          <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 2xl:mb-3 group-hover:text-[#E7FF1A] transition-colors duration-200'>
            {step.title}
          </h3>
          <p className='text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-md mx-auto sm:mx-0'>
            {step.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export function OurProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion() ?? false; // Handle null case

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

  // Optimized animation variants - Explicitly typed as Variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  // Explicitly typed as Variants.
  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 20, opacity: 0 }, // Explicit initial state
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0 } // Explicit visible state
      : {
          y: 0,
          opacity: 1,
          transition: {
            type: "spring",
            stiffness: 120,
            damping: 20,
            mass: 0.8,
          },
        },
  };

  return (
    <section
      id='process'
      className='relative w-full bg-[#111316] py-12 sm:py-16 lg:py-20 2xl:py-12 overflow-hidden'
    >
      {/* Background with gradient overlay */}
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

      {/* Container */}
      <div className='container mx-auto px-4 md:px-8 lg:px-12 relative z-10'>
        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className='max-w-6xl mx-auto'
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2, margin: "-100px" }}
        >
          {/* Header Section */}
          <motion.div
            variants={itemVariants} // Using itemVariants for header elements
            className='text-center mb-12 lg:mb-16 2xl:mb-12'
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants} // Using itemVariants for badge
              className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-4 lg:mb-6 2xl:mb-4'
            >
              <Sparkles className='w-4 h-4 text-[#E7FF1A]' />
              <span className='text-sm font-medium text-white/90'>
                Our Process
              </span>
            </motion.div>

            <h2 className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white mb-4 lg:mb-6 2xl:mb-4'>
              PROVEN
              <br />
              <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                METHODOLOGY
              </span>
            </h2>

            <p className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-white/80 max-w-3xl mx-auto mb-8 lg:mb-12 2xl:mb-8'>
              A systematic approach to delivering exceptional digital solutions
              that drive real business results and exceed expectations.
            </p>

            {/* Stats Section */}
            <div className='flex flex-wrap justify-center gap-6 md:gap-8 2xl:gap-6'>
              {[
                { number: "5", label: "Step Process" },
                { number: "100%", label: "Success Rate" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label || index} // Added index as fallback key
                  variants={itemVariants} // Using itemVariants for stats
                  className='text-center'
                >
                  <div className='text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E7FF1A] to-violet-400 bg-clip-text text-transparent mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-white/60 text-sm uppercase tracking-wider'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Process Steps */}
          <div className='relative mb-12 lg:mb-16 2xl:mb-12'>
            {/* Timeline Line - Desktop only */}
            <div className='hidden sm:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2'>
              <motion.div
                initial={
                  shouldReduceMotion
                    ? { opacity: 0, y: "-100%" }
                    : { opacity: 0, y: "-100%" }
                } // Explicit initial state
                whileInView={
                  shouldReduceMotion
                    ? { opacity: 1, y: "0%" }
                    : { opacity: 1, y: "0%" }
                } // Explicit whileInView state
                transition={
                  shouldReduceMotion
                    ? { duration: 0.1 }
                    : { duration: 1.5, ease: "circOut" } // Conditional transition
                }
                viewport={{ once: true, amount: 0.2 }}
                className='h-full w-full bg-gradient-to-b from-[#E7FF1A]/20 via-violet-400/40 to-cyan-400/20 rounded-full'
              />
            </div>

            {/* Mobile Timeline Dots */}
            <div className='sm:hidden absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E7FF1A]/20 via-violet-400/40 to-cyan-400/20 rounded-full' />

            {/* Steps Container */}
            <div className='space-y-8 sm:space-y-12 lg:space-y-16 2xl:space-y-12'>
              {processSteps.map((step, index) => (
                <div key={index} className='relative'>
                  {/* Mobile timeline dot */}
                  <div className='sm:hidden absolute left-6 top-12 w-6 h-6 bg-gradient-to-r from-[#E7FF1A] to-violet-400 rounded-full border-2 border-white shadow-lg' />

                  {/* Desktop timeline dot */}
                  <div className='hidden sm:block absolute left-1/2 top-12 w-6 h-6 bg-gradient-to-r from-[#E7FF1A] to-violet-400 rounded-full border-2 border-white shadow-lg -translate-x-1/2 z-10' />

                  <div className='sm:flex sm:justify-center'>
                    <div className='w-full sm:max-w-3xl lg:max-w-5xl ml-16 sm:ml-0'>
                      <ProcessCard step={step} index={index} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
