"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, Smartphone, Cpu, Palette } from "lucide-react";

// --- Data ---
const projectsData = [
  {
    id: 1,
    title: "Elysian E-Commerce",
    category: "Web Platform",
    image: "/api/placeholder/600/400",
    icon: Layers,
  },
  {
    id: 2,
    title: "QuantumLeap Mobile",
    category: "Mobile App",
    image: "/api/placeholder/600/400",
    icon: Smartphone,
  },
  {
    id: 3,
    title: "Nova AI Dashboard",
    category: "AI Solution",
    image: "/api/placeholder/600/400",
    icon: Cpu,
  },
  {
    id: 4,
    title: "Aether Design System",
    category: "UI/UX Design",
    image: "/api/placeholder/600/400",
    icon: Palette,
  },
];
const categories = [
  "All",
  "Web Platform",
  "Mobile App",
  "AI Solution",
  "UI/UX Design",
];

const ProjectCard = ({ project }: { project: (typeof projectsData)[0] }) => {
  const Icon = project.icon;
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: -50 }}
      transition={{ type: "spring", damping: 20, stiffness: 150 }}
      className='group relative h-[450px] w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md'
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        className='absolute inset-0 transition-transform duration-500 ease-out'
        style={{ transform: "translateZ(0px)" }}
      >
        <div className='relative w-full h-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl'>
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent' />
        </div>
      </motion.div>
      <div
        className='relative z-10 flex h-full flex-col justify-end'
        style={{ transform: "translateZ(20px)" }}
      >
        <div className='flex items-center gap-3'>
          <div className='flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/50 backdrop-blur-lg'>
            <Icon
              className='h-6 w-6 text-white'
              style={{
                filter: "drop-shadow(0 0 3px rgba(167, 139, 250, 0.5))",
              }}
            />
          </div>
          <div>
            <h3 className='text-2xl font-bold text-white'>{project.title}</h3>
            <p className='text-sm text-purple-300'>{project.category}</p>
          </div>
        </div>
      </div>
      <motion.div
        className='absolute inset-0 rounded-3xl border-2 border-transparent transition-colors duration-300 group-hover:border-purple-500'
        style={{ transform: "translateZ(10px)" }}
      />
    </motion.div>
  );
};

export function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((p) => p.category === activeCategory)
      );
    }
  }, [activeCategory]);

  return (
    <section
      id='work'
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
          className='text-center mb-12'
        >
          <h2 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400'>
            Featured Work
          </h2>
        </motion.div>
        <div className='flex flex-wrap justify-center gap-3 mb-12'>
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${activeCategory !== category && "text-gray-400 hover:text-white"}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeCategory === category && (
                <motion.div
                  layoutId='active-category-pill'
                  className='absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full'
                  transition={{ type: "spring", damping: 20, stiffness: 200 }}
                />
              )}
              <span className='relative z-10'>{category}</span>
            </motion.button>
          ))}
        </div>
        <motion.div
          className='grid grid-cols-1 md:grid-cols-2 gap-8'
          style={{ perspective: "1000px" }}
        >
          <AnimatePresence mode='sync'>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
