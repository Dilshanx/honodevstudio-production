// src/components/DynamicAurora.tsx
"use client";

import { motion } from "framer-motion";
import { TimeTheme, TimeOfDay } from "@/lib/time-utils";

interface DynamicAuroraProps {
  theme: TimeTheme;
  timeOfDay: TimeOfDay;
}

export const DynamicAurora: React.FC<DynamicAuroraProps> = ({
  theme,
  timeOfDay,
}) => (
  <div className='fixed inset-0 -z-20 overflow-hidden'>
    {/* THIS IS THE FIX: Added -z-10 to place the background behind the particles */}
    <div className='absolute inset-0 -z-10 bg-gray-950' />

    <motion.div
      key={timeOfDay}
      initial={{ scale: 1.5, opacity: 0, x: "-50%", y: "-50%" }}
      animate={{
        scale: [1, 1.2, 1],
        rotate: [0, 90, 0],
        opacity: [0.1, 0.3, 0.1],
      }}
      transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      className={`absolute top-1/2 left-1/2 h-[800px] w-[800px] rounded-full bg-gradient-to-br ${theme.colors.primary} blur-3xl`}
    />
    <motion.div
      key={`secondary-${timeOfDay}`}
      initial={{ scale: 1.2, opacity: 0, x: "-30%", y: "-30%" }}
      animate={{
        scale: [1.2, 1.5, 1.2],
        rotate: [0, -45, 0],
        opacity: [0.05, 0.2, 0.05],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2,
      }}
      className={`absolute top-1/3 left-1/3 h-[600px] w-[600px] rounded-full bg-gradient-to-br ${theme.colors.secondary} blur-2xl`}
    />
  </div>
);
