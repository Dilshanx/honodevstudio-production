"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Quote, X } from "lucide-react";

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

// --- Orb Component ---
const Orb = ({
  testimonial,
  onClick,
  index,
}: {
  testimonial: (typeof testimonialsData)[0];
  onClick: (testimonial: (typeof testimonialsData)[0]) => void;
  index: number;
}) => {
  const positions = [
    { top: "10%", left: "20%" },
    { top: "30%", left: "70%" },
    { top: "60%", left: "10%" },
    { top: "80%", left: "80%" },
    { top: "50%", left: "45%" },
  ];
  const size = index === 4 ? "120px" : "80px";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: index * 0.1,
      }}
      viewport={{ once: true, amount: 0.5 }}
      whileHover={{ scale: 1.15, zIndex: 20 }}
      onClick={() => onClick(testimonial)}
      className='absolute cursor-pointer rounded-full bg-black/50 shadow-2xl overflow-hidden'
      style={{ ...positions[index], width: size, height: size }}
    >
      <div className='relative w-full h-full bg-gradient-to-br from-purple-500/30 to-blue-500/30'>
        <div className='absolute inset-2 rounded-full border-2 border-white/10 bg-gray-800/50 flex items-center justify-center'>
          <div className='text-white font-bold text-lg'>
            {testimonial.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// --- Focused Card Component ---
const FocusedCard = ({
  testimonial,
  onClose,
}: {
  testimonial: (typeof testimonialsData)[0] | null;
  onClose: () => void;
}) => {
  if (!testimonial) return null;
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ type: "spring", damping: 20, stiffness: 150 }}
      className='fixed inset-0 z-50 flex items-center justify-center p-4'
    >
      <div
        className='absolute inset-0 bg-black/80 backdrop-blur-sm'
        onClick={onClose}
      />
      <div className='relative w-full max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-lg'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20'
        >
          <X size={20} />
        </button>
        <Quote
          className='absolute -top-8 -left-8 h-24 w-24 text-purple-500/10'
          style={{ filter: "drop-shadow(0 0 10px rgba(167, 139, 250, 0.3))" }}
        />
        <p className='relative z-10 mb-6 text-xl italic leading-relaxed text-gray-200'>
          {testimonial.quote}
        </p>
        <div className='flex items-center gap-4'>
          <div className='w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 border-2 border-purple-400/50 flex items-center justify-center'>
            <div className='text-white font-bold'>
              {testimonial.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
          </div>
          <div>
            <h4 className='text-xl font-bold text-white'>{testimonial.name}</h4>
            <p className='text-purple-300'>{testimonial.title}</p>
          </div>
        </div>
      </div>
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
  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [10, -10]),
    springConfig
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-10, 10]),
    springConfig
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - left) / width - 0.5);
    mouseY.set((e.clientY - top) / height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id='testimonials'
      className='relative w-full py-24 sm:py-32 overflow-hidden'
    >
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-gray-950' />
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]' />
      </div>

      <div className='container mx-auto px-4 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 p-1'>
            Trusted by Innovators
          </h2>
          <p className='mt-4 text-lg text-gray-300 max-w-3xl mx-auto'>
            Don&apos;t just take our word for it—hear from the businesses
            we&apos;ve helped transform.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ transformStyle: "preserve-3d", rotateX, rotateY }}
          className='relative h-[400px] w-full max-w-4xl mx-auto'
        >
          {testimonialsData.map((testimonial, index) => (
            <Orb
              key={testimonial.id}
              testimonial={testimonial}
              onClick={setSelectedTestimonial}
              index={index}
            />
          ))}
        </motion.div>
      </div>

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
