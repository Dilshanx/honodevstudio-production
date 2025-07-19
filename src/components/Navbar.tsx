"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Menu,
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

  const spring = {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  };

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

// --- UI COMPONENTS ---

const DockItem = ({ item, onLinkClick }: { item: typeof navItems[0]; onLinkClick: (href: string) => void }) => {
  const Icon = item.icon;

  return (
    <motion.button
      onClick={() => onLinkClick(item.href)}
      className='relative grid h-14 w-14 place-content-center cursor-pointer group'
      aria-label={item.name}
      whileHover={{ scale: 1.2, y: -8 }}
      transition={spring}
    >
      <Icon
        className='h-7 w-7 text-gray-400 transition-colors duration-300 group-hover:text-violet-300'
        style={{ filter: "drop-shadow(0 0 8px rgba(167, 139, 250, 0.5))" }}
      />
      <span className='absolute -bottom-7 text-xs text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
        {item.name}
      </span>
    </motion.button>
  );
};

const CommandMenu = ({ isOpen, setIsOpen, onLinkClick }: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  onLinkClick: (href: string) => void
}) => {
  const commands = navItems.map((item) => ({ ...item, type: "Navigate" }));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className='fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-start pt-24 p-4'
        >
          <motion.div
            initial={{ scale: 0.95, y: -20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={spring}
            onClick={(e) => e.stopPropagation()}
            className='w-full max-w-lg bg-gray-900/80 border border-white/10 rounded-2xl shadow-2xl overflow-hidden'
          >
            <div className='p-2'>
              <div className='flex justify-between items-center p-2 mb-1'>
                <p className='text-sm text-gray-400'>Navigation</p>
                <button
                  onClick={() => setIsOpen(false)}
                  className='p-1 rounded-md hover:bg-white/10 transition-colors'
                >
                  <X size={18} className='text-gray-400' />
                </button>
              </div>
              {commands.map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    onLinkClick(item.href);
                    setIsOpen(false);
                  }}
                  className='group flex items-center justify-between p-3 text-gray-200 hover:bg-white/5 rounded-lg cursor-pointer transition-colors'
                >
                  <div className='flex items-center gap-4'>
                    <item.icon size={18} />
                    <span>{item.name}</span>
                  </div>
                  <ArrowRight
                    size={16}
                    className='text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity'
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

const MobileBottomBar = ({ onMenuClick, onLinkClick }: {
  onMenuClick: () => void;
  onLinkClick: (href: string) => void
}) => (
  <footer className='lg:hidden fixed bottom-4 inset-x-4 z-40'>
    <div className='w-full h-16 bg-gray-900/80 border border-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-around shadow-2xl'>
      {navItems.slice(0, 3).map((item) => (
        <motion.button
          key={item.href}
          onClick={() => onLinkClick(item.href)}
          className='p-3'
          aria-label={item.name}
          whileTap={{ scale: 0.9 }}
        >
          <item.icon className='h-6 w-6 text-gray-300' />
        </motion.button>
      ))}
      <motion.button
        onClick={onMenuClick}
        className='p-3'
        aria-label='Open menu'
        whileTap={{ scale: 0.9 }}
      >
        <Menu className='h-6 w-6 text-gray-300' />
      </motion.button>
    </div>
  </footer>
);

// --- MAIN NAVBAR CONTROLLER ---
export function Navbar() {
  const [isCommandMenuOpen, setCommandMenuOpen] = useState(false);
  useKbd(() => setCommandMenuOpen(true));

  const handleLinkClick = useCallback(
    (href: string) => {
      if (isCommandMenuOpen) setCommandMenuOpen(false);

      if (href === "/") {
        window.location.href = "/";
        return;
      }

      if (href.startsWith("/#")) {
        const targetId = href.substring(2);
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else {
          // If we're not on the home page, navigate to home first
          window.location.href = href;
        }
      } else {
        window.location.href = href;
      }
    },
    [isCommandMenuOpen]
  );

  return (
    <>
      <CommandMenu
        isOpen={isCommandMenuOpen}
        setIsOpen={setCommandMenuOpen}
        onLinkClick={handleLinkClick}
      />
      <header className='hidden lg:flex fixed bottom-8 left-1/2 -translate-x-1/2 z-40'>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...spring, delay: 0.5 }}
          className='flex items-center gap-2 bg-gray-900/80 border border-white/10 backdrop-blur-lg rounded-2xl p-2 shadow-2xl'
        >
          {navItems.map((item) => (
            <DockItem key={item.id} item={item} onLinkClick={handleLinkClick} />
          ))}
          <div className='w-px h-10 bg-white/10 mx-2' />
          <motion.button
            onClick={() => setCommandMenuOpen(true)}
            className='relative grid h-14 w-14 place-content-center cursor-pointer group'
            aria-label='Open command menu'
            whileHover={{ scale: 1.2, y: -8 }}
            transition={spring}
          >
            <Command
              className='h-7 w-7 text-gray-400 transition-colors duration-300 group-hover:text-violet-300'
              style={{
                filter: "drop-shadow(0 0 8px rgba(167, 139, 250, 0.5))",
              }}
            />
            <span className='absolute -bottom-7 text-xs text-gray-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              Search
            </span>
          </motion.button>
        </motion.div>
      </header>

      <MobileBottomBar
        onMenuClick={() => setCommandMenuOpen(true)}
        onLinkClick={handleLinkClick}
      />
    </>
  );
}
