"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Github,
} from "lucide-react";

// --- Back To Top Button Component (with responsive logic) ---
function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
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
          // hidden on small screens, flex (visible) on large screens (lg:)
          className='hidden lg:flex fixed right-8 bottom-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 items-center justify-center shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300'
          aria-label='Back to top'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          whileHover={{ y: -5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className='w-5 h-5 text-white' />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// --- Main Footer Component ---
export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "GitHub", icon: Github, href: "#" },
  ];

  return (
    <footer className='relative w-full py-24 sm:py-32 overflow-hidden'>
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
            Let&apos;s Build Together
          </h2>
          <p className='mt-4 text-lg text-gray-300 max-w-3xl mx-auto'>
            Have a project in mind? We&apos;d love to hear about it. Reach out
            and let&apos;s create something extraordinary.
          </p>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          {/* Contact Information */}
          <div className='space-y-10'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className='text-2xl font-bold text-white mb-6'>
                Contact Information
              </h3>
              <div className='space-y-4 text-gray-300'>
                <p className='flex items-center gap-3'>
                  <MapPin
                    className='text-purple-400'
                    style={{
                      filter: "drop-shadow(0 0 3px rgba(167, 139, 250, 0.5))",
                    }}
                  />{" "}
                  123 Innovation Drive, San Francisco, CA
                </p>
                <p className='flex items-center gap-3'>
                  <Mail
                    className='text-purple-400'
                    style={{
                      filter: "drop-shadow(0 0 3px rgba(167, 139, 250, 0.5))",
                    }}
                  />{" "}
                  hello@honodev.studio
                </p>
                <p className='flex items-center gap-3'>
                  <Phone
                    className='text-purple-400'
                    style={{
                      filter: "drop-shadow(0 0 3px rgba(167, 139, 250, 0.5))",
                    }}
                  />{" "}
                  +1 (415) 555-0123
                </p>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h3 className='text-2xl font-bold text-white mb-6'>Follow Us</h3>
              <div className='flex gap-4'>
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 0px 15px rgba(147, 112, 219, 0.5)",
                    }}
                    whileTap={{ scale: 0.9 }}
                    className='p-3 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300'
                    aria-label={link.name}
                  >
                    <link.icon className='h-6 w-6 text-purple-400' />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.5 }}
            className='text-center lg:text-left'
          >
            <h3 className='text-2xl font-bold text-white mb-6'>
              Ready to Start Your Project?
            </h3>
            <p className='text-gray-300 mb-8 leading-relaxed'>
              We&apos;re here to help bring your ideas to life. Get in touch
              with us today and let&apos;s discuss how we can work together to
              create something amazing.
            </p>
            <motion.a
              href='/contact'
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(147, 112, 219, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className='inline-block px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300'
            >
              Get in Touch
            </motion.a>
          </motion.div>
        </div>

        <div className='mt-20 pt-8 border-t border-white/10 text-center'>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mb-4'>
            <a
              href='/privacy'
              className='text-gray-400 hover:text-white transition-colors duration-300'
            >
              Privacy Policy
            </a>
            <span className='hidden sm:inline text-gray-600'>•</span>
            <a
              href='/contact'
              className='text-gray-400 hover:text-white transition-colors duration-300'
            >
              Contact Us
            </a>
          </div>
          <p className='text-gray-500'>
            © {currentYear} Hono Dev Studio. All Rights Reserved.
          </p>
        </div>
      </div>

      {/* RENDER THE SMART, RESPONSIVE BUTTON HERE */}
      <BackToTopButton />
    </footer>
  );
}
