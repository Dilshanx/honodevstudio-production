"use client";

import React, { useCallback, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  Variants,
  Transition,
} from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Rocket,
  TrendingUp,
  Sparkles,
} from "lucide-react";
import Image from "next/image";

// --- Type Definitions ---
interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

type IconComponent = React.ComponentType<IconProps>;

interface ProcessStep {
  icon: IconComponent;
  title: string;
  description: {
    mobile: string;
    desktop: string;
  };
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
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      whileHover={shouldReduceMotion ? {} : "hover"}
      className='relative w-16 h-16 sm:w-20 sm:h-20 grid place-items-center flex-shrink-0'
    >
      <div
        className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-r ${gradient} ${
          shouldReduceMotion ? "" : "group-hover:scale-110"
        } transition-transform duration-200`}
      >
        <IconComponent className='w-6 h-6 sm:w-8 sm:h-8 text-[#111316]' />
      </div>
      {!shouldReduceMotion && (
        <motion.div
          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${gradient} opacity-20 blur-lg`}
          variants={{ hover: { scale: 1.2, opacity: 0.4 } }}
          transition={{
            type: "spring",
            damping: 15,
            stiffness: 200,
            mass: 0.8,
          }}
        />
      )}
    </motion.div>
  );
};

const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description: {
      mobile: "Understanding your business goals and audience.",
      desktop:
        "Understanding your business goals and target audience to create a solid foundation.",
    },
    color: "from-[#E7FF1A] to-violet-400",
  },
  {
    icon: PenTool,
    title: "Design & Prototyping",
    description: {
      mobile: "Creating engaging user experiences.",
      desktop:
        "Creating intuitive and engaging user experiences that resonate with your users.",
    },
    color: "from-violet-400 to-cyan-400",
  },
  {
    icon: Code2,
    title: "Development",
    description: {
      mobile: "Building robust, scalable solutions.",
      desktop:
        "Building robust and scalable solutions using cutting-edge technologies.",
    },
    color: "from-cyan-400 to-pink-400",
  },
  {
    icon: Rocket,
    title: "Testing & Launch",
    description: {
      mobile: "Quality testing and successful deployment.",
      desktop:
        "Ensuring quality through rigorous testing and successful deployment.",
    },
    color: "from-pink-400 to-[#E7FF1A]",
  },
  {
    icon: TrendingUp,
    title: "Growth & Optimization",
    description: {
      mobile: "Continuous improvement and monitoring.",
      desktop:
        "Continuous improvement and performance monitoring for sustained success.",
    },
    color: "from-[#E7FF1A] to-violet-400",
  },
];

const ProcessCard = ({ step, index }: { step: ProcessStep; index: number }) => {
  const isEven = index % 2 === 0;
  const shouldReduceMotion = useReducedMotion() ?? false;

  return (
    <motion.div
      initial={
        shouldReduceMotion ? { opacity: 0, y: 0 } : { opacity: 0, y: 20 }
      }
      whileInView={
        shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
      }
      transition={
        shouldReduceMotion
          ? { duration: 0.3 }
          : { duration: 0.5, ease: "easeOut", delay: index * 0.1 }
      }
      viewport={{ once: true, amount: 0.2 }}
      className={`
        group relative flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8
        ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"}
        w-full
      `}
    >
      <div
        className={`hidden md:block absolute inset-0 bg-gradient-to-r ${step.color} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}
      />
      <div className='flex-shrink-0 relative z-10'>
        <HolographicIcon IconComponent={step.icon} gradient={step.color} />
      </div>
      <div
        className={`
        flex-1 text-center sm:text-left relative z-10
        ${isEven ? "sm:text-left" : "sm:text-right"}
        px-0
      `}
      >
        <div className='relative p-4 sm:p-6 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300'>
          <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 sm:mb-3 group-hover:text-[#E7FF1A] transition-colors duration-200'>
            {step.title}
          </h3>
          <p className='text-sm sm:text-base text-white/80 leading-relaxed'>
            <span className='block md:hidden'>{step.description.mobile}</span>
            <span className='hidden md:block'>{step.description.desktop}</span>
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
  const shouldReduceMotion = useReducedMotion() ?? false;

  const springConfig: Transition = { damping: 30, stiffness: 100, mass: 0.8 };
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

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 20, opacity: 0 },
    visible: shouldReduceMotion
      ? { opacity: 1, y: 0 }
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
      className='relative w-full bg-[#111316] py-12 sm:py-16 lg:py-20 2xl:py-12 pb-20 xl:pb-12 overflow-hidden'
    >
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
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Image Section - Now visible on all screen sizes */}
          <motion.div
            variants={itemVariants}
            className='flex justify-center mb-8 lg:mb-12 2xl:mb-8'
          >
            <motion.div
              className='relative group'
              whileHover={shouldReduceMotion ? {} : { scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl scale-125' />
              <div className='relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 2xl:w-72 2xl:h-72'>
                <Image
                  src='/images/process.svg'
                  alt='Our Process'
                  width={320}
                  height={320}
                  className='w-full h-full object-contain drop-shadow-2xl'
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className='text-center mb-8 sm:mb-12 lg:mb-16 2xl:mb-12'
          >
            <motion.div
              variants={itemVariants}
              className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-4 py-2 mb-4 lg:mb-6 2xl:mb-4'
            >
              <Sparkles className='w-4 h-4 text-[#E7FF1A]' />
              <span className='text-sm font-medium text-white/90'>
                Our Process
              </span>
            </motion.div>
            <h2 className='font-bold text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] text-white mb-4 lg:mb-6 2xl:mb-4'>
              PROVEN
              <span className='bg-gradient-to-r from-[#E7FF1A] via-violet-400 to-cyan-400 bg-clip-text text-transparent'>
                METHODOLOGY
              </span>
            </h2>
            <p className='text-[clamp(1.1rem,2.5vw,1.3rem)] leading-relaxed text-white/80 max-w-3xl mx-auto mb-6 sm:mb-8 lg:mb-12 2xl:mb-8'>
              <span className='block md:hidden'>
                A systematic approach to delivering exceptional digital
                solutions.
              </span>
              <span className='hidden md:block'>
                A systematic approach to delivering exceptional digital
                solutions that drive real business results and exceed
                expectations.
              </span>
            </p>
            <div className='flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 2xl:gap-6'>
              {[
                { number: "5", label: "Step Process" },
                { number: "100%", label: "Success Rate" },
                { number: "24/7", label: "Support" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label || index}
                  variants={itemVariants}
                  className='text-center min-w-[80px]'
                >
                  <div className='text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#E7FF1A] to-violet-400 bg-clip-text text-transparent mb-1 sm:mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-white/60 text-xs sm:text-sm uppercase tracking-wider'>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className='relative mb-8 sm:mb-12 lg:mb-16 2xl:mb-12'>
            <div className='hidden sm:block absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2'>
              <motion.div
                initial={{ opacity: 0, scaleY: 0 }}
                whileInView={{ opacity: 1, scaleY: 1 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.3 }
                    : { duration: 1.2, ease: "easeOut" }
                }
                viewport={{ once: true, amount: 0.2 }}
                className='h-full w-full bg-gradient-to-b from-[#E7FF1A]/20 via-violet-400/40 to-cyan-400/20 rounded-full origin-top'
              />
            </div>
            <div className='sm:hidden absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#E7FF1A]/20 via-violet-400/40 to-cyan-400/20 rounded-full' />
            <div className='space-y-6 sm:space-y-8 lg:space-y-12 2xl:space-y-8'>
              {processSteps.map((step, index) => (
                <div key={index} className='relative'>
                  <div className='sm:hidden absolute left-4 top-8 w-5 h-5 bg-gradient-to-r from-[#E7FF1A] to-violet-400 rounded-full border-2 border-white shadow-lg' />
                  <div className='hidden sm:block absolute left-1/2 top-8 w-6 h-6 bg-gradient-to-r from-[#E7FF1A] to-violet-400 rounded-full border-2 border-white shadow-lg -translate-x-1/2 z-10' />
                  <div className='sm:flex sm:justify-center'>
                    <div className='w-full sm:max-w-4xl ml-12 sm:ml-0'>
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
