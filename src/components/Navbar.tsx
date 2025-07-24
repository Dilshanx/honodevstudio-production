"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  Transition,
} from "framer-motion"; // Import Variants and Transition
import Image from "next/image"; // Import Next.js Image component
import {
  Home,
  User,
  Briefcase,
  Mail,
  Command,
  X,
  ArrowRight,
} from "lucide-react";

// --- DATA & CONFIG ---
const navItems = [
  { id: "home", name: "Home", href: "/", icon: Home },
  { id: "about", name: "About", href: "/#about", icon: User },
  { id: "work", name: "Work", href: "/#work", icon: Briefcase },
  { id: "contact", name: "Contact", href: "/contact", icon: Mail },
];

// Optimized spring config for better performance
const springTransitionProps: Omit<Transition, "delay"> = {
  // Define base spring properties without delay
  type: "spring",
  stiffness: 200,
  damping: 25,
  mass: 0.8,
};

// Functions to get specific initial/animate states for header
const getHeaderInitialState = (shouldReduce: boolean) =>
  shouldReduce ? { opacity: 0, y: 0 } : { y: -100, opacity: 0 };

const getHeaderAnimateState = (shouldReduce: boolean) =>
  shouldReduce ? { opacity: 1, y: 0 } : { y: 0, opacity: 1 };

// --- HOOKS ---
const useKbd = (callback: () => void) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        callback();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [callback]);
};

// Hook to detect screen size
const useScreenSize = () => {
  const [isXlOrLarger, setIsXlOrLarger] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsXlOrLarger(window.innerWidth >= 1280); // xl breakpoint is 1280px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return isXlOrLarger;
};

// --- UI COMPONENTS ---

const CommandMenu = ({
  isOpen,
  setIsOpen,
  onLinkClick,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onLinkClick: (href: string) => void;
}) => {
  const shouldReduceMotion = useReducedMotion() ?? false; // Handle null case

  const commands = navItems.map((item) => ({ ...item, type: "Navigate" }));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
          onClick={() => setIsOpen(false)}
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-start pt-24 p-4'
        >
          <motion.div
            initial={
              shouldReduceMotion
                ? { opacity: 0, y: 0 }
                : { scale: 0.95, y: -20 }
            }
            animate={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { scale: 1, y: 0 }
            }
            exit={
              shouldReduceMotion
                ? { opacity: 0, y: 0 }
                : { scale: 0.95, opacity: 0 }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0.3 }
                : { ...springTransitionProps, duration: 0.3 }
            } // Use spread with base spring
            onClick={(e) => e.stopPropagation()}
            className='w-full max-w-lg bg-[#111316]/95 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl'
          >
            <div className='p-2'>
              <div className='flex justify-between items-center p-2 mb-1'>
                <p className='text-sm text-white/60'>Navigation</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className='p-1 rounded-md hover:bg-white/10 transition-colors duration-200'
                >
                  <X size={18} className='text-white/60' />
                </button>
              </div>
              {commands.map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    onLinkClick(item.href);
                    setIsOpen(false);
                  }}
                  className='group flex items-center justify-between p-3 text-white/80 hover:bg-white/5 hover:text-[#E7FF1A] rounded-lg cursor-pointer transition-colors duration-200'
                >
                  <div className='flex items-center gap-4'>
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </div>
                  <ArrowRight
                    size={16}
                    className='text-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- MAIN NAVBAR COMPONENT ---
export function Navbar() {
  const [isCommandMenuOpen, setCommandMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const shouldReduceMotion = useReducedMotion() ?? false; // Handle null case
  const isXlOrLarger = useScreenSize();

  useKbd(() => setCommandMenuOpen(true));

  // Optimized scroll handler with throttling - only track scroll on xl+ screens
  useEffect(() => {
    if (!isXlOrLarger) {
      setScrolled(false);
      return;
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isXlOrLarger]);

  const handleLinkClick = useCallback(
    (href: string) => {
      if (isCommandMenuOpen) setCommandMenuOpen(false);

      if (href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      // Check if the href starts with '/#' which indicates an anchor link within the current page
      if (href.startsWith("/#")) {
        const targetId = href.substring(2); // Remove '/#' to get the ID
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // For external links or full page navigations (e.g., /contact)
        window.location.href = href;
      }
    },
    [isCommandMenuOpen]
  );

  // Define header transition outside for clarity and type safety
  const headerTransition: Transition = shouldReduceMotion
    ? { duration: 0.3 }
    : { ...springTransitionProps, delay: 0.2 }; // Use spread with base spring and add delay

  return (
    <>
      <CommandMenu
        isOpen={isCommandMenuOpen}
        setIsOpen={setCommandMenuOpen}
        onLinkClick={handleLinkClick}
      />

      {/* Top Navbar - Only visible on xl and 2xl screens */}
      {isXlOrLarger && (
        <motion.header
          initial={getHeaderInitialState(shouldReduceMotion)} // Use direct state object
          animate={getHeaderAnimateState(shouldReduceMotion)} // Use direct state object
          transition={headerTransition} // Use the defined transition variable
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
            scrolled
              ? "bg-[#111316]/80 backdrop-blur-xl border-b border-white/10"
              : "bg-transparent"
          }`}
        >
          <div className='container mx-auto px-4 md:px-8'>
            <div className='flex items-center justify-between h-20'>
              {/* Logo */}
              <motion.div
                className='relative group cursor-pointer'
                whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0.1 }
                    : { type: "spring", stiffness: 400, damping: 25, mass: 0.8 } // This specific transition is fine as a direct object
                }
                onClick={() => handleLinkClick("/")}
              >
                <div className='flex items-center'>
                  <div className='relative'>
                    {/* Glow effect */}
                    <div className='absolute inset-0 bg-gradient-to-r from-[#E7FF1A]/20 via-violet-400/20 to-cyan-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl scale-110' />

                    {/* Logo container */}
                    <div
                      className={`relative transition-all duration-300 ${
                        scrolled
                          ? "bg-[#111316]/20 backdrop-blur-xl"
                          : "bg-[#111316]/30 backdrop-blur-xl"
                      }`}
                    >
                      {/* Replaced <img> with Next.js <Image> for optimization */}
                      <Image
                        src='/images/hono-logo.svg'
                        alt='Studio Logo'
                        width={80} // Base width for the logo
                        height={80} // Base height for the logo
                        priority // Load with high priority
                        className='h-16 xl:h-20 w-auto filter drop-shadow-lg group-hover:drop-shadow-2xl transition-all duration-300'
                        sizes='(max-width: 1280px) 64px, 80px' // Responsive sizes
                      />
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className='flex items-center space-x-8'>
                {navItems.map((item, index) => {
                  // Define nav button transition outside for clarity and type safety
                  const navButtonTransition: Transition = shouldReduceMotion
                    ? { duration: 0.3 }
                    : { ...springTransitionProps, delay: 0.3 + index * 0.1 }; // Use spread with base spring and add delay

                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleLinkClick(item.href)}
                      className='relative text-white/80 hover:text-[#E7FF1A] transition-colors duration-200 font-medium px-3 py-2'
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0, y: 0 }
                          : { opacity: 0, y: -20 }
                      }
                      animate={
                        shouldReduceMotion
                          ? { opacity: 1, y: 0 }
                          : { opacity: 1, y: 0 }
                      }
                      transition={navButtonTransition} // Use the defined transition variable
                      whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
                    >
                      <span className='relative z-10'>{item.name}</span>
                      {!shouldReduceMotion && (
                        <motion.div
                          className='absolute inset-0 bg-white/10 rounded-lg -z-10'
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1, opacity: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 25,
                            mass: 0.8, // Added mass
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </nav>
            </div>
          </div>
        </motion.header>
      )}

      {/* Mobile Bottom Navigation - Hidden on xl and larger screens */}
      {!isXlOrLarger && (
        <footer className='fixed bottom-4 inset-x-4 z-30'>
          <motion.div
            initial={
              shouldReduceMotion ? { opacity: 0, y: 0 } : { y: 100, opacity: 0 }
            }
            animate={
              shouldReduceMotion ? { opacity: 1, y: 0 } : { y: 0, opacity: 1 }
            }
            // Define mobile footer transition outside for clarity and type safety
            transition={
              shouldReduceMotion
                ? { duration: 0.3 }
                : { ...springTransitionProps, delay: 0.5 }
            } // Use spread with base spring and add delay
            className='w-full h-16 bg-[#111316]/90 border border-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-around shadow-2xl'
          >
            {navItems.slice(0, 3).map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleLinkClick(item.href)}
                className='p-3 text-white/60 hover:text-[#E7FF1A] transition-colors duration-200'
                aria-label={item.name}
                whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
              >
                <item.icon className='h-6 w-6' />
              </motion.button>
            ))}
            <motion.button
              onClick={() => setCommandMenuOpen(true)}
              className='p-3 text-white/60 hover:text-[#E7FF1A] transition-colors duration-200'
              aria-label='Open menu'
              whileTap={shouldReduceMotion ? {} : { scale: 0.9 }}
            >
              <Command className='h-6 w-6' />
            </motion.button>
          </motion.div>
        </footer>
      )}
    </>
  );
}
