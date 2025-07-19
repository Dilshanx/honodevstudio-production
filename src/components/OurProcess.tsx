// // "use client";

// // import React from "react";
// // import { motion } from "framer-motion";
// // import { Search, PenTool, Code2, Rocket, TrendingUp } from "lucide-react";

// // // --- HolographicIcon Component ---
// // const HolographicIcon = ({
// //   IconComponent,
// // }: {
// //   IconComponent: React.ComponentType<any>;
// // }) => (
// //   <motion.div
// //     whileHover='hover'
// //     className='relative w-24 h-24 grid place-items-center'
// //   >
// //     <IconComponent
// //       className='relative z-10 h-10 w-10 text-white'
// //       style={{
// //         filter: `drop-shadow(0 0 2px rgba(167, 139, 250, 0.9)) drop-shadow(0 0 8px rgba(167, 139, 250, 0.6)) drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))`,
// //       }}
// //     />
// //     <motion.div
// //       className='absolute inset-0 rounded-full bg-purple-500/40 blur-lg'
// //       variants={{ hover: { scale: 1.2, opacity: 0.7 } }}
// //       transition={{ type: "spring", damping: 15, stiffness: 200 }}
// //     />
// //     <motion.div
// //       className='absolute inset-0'
// //       variants={{
// //         hover: { x: [0, -1, 1, -1, 0], y: [0, 1, -1, 1, 0], scale: 1.1 },
// //       }}
// //       transition={{ duration: 0.3 }}
// //     >
// //       <IconComponent className='absolute inset-0 h-full w-full text-blue-400/50 opacity-50' />
// //     </motion.div>
// //   </motion.div>
// // );

// // const processSteps = [
// //   { icon: Search, title: "Discovery & Strategy" },
// //   { icon: PenTool, title: "Design & Prototyping" },
// //   { icon: Code2, title: "Development" },
// //   { icon: Rocket, title: "Testing & Launch" },
// //   { icon: TrendingUp, title: "Growth & Optimization" },
// // ];

// // const ProcessCard = ({
// //   step,
// //   index,
// // }: {
// //   step: (typeof processSteps)[0];
// //   index: number;
// // }) => {
// //   const isEven = index % 2 === 0;
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0, y: 50 }}
// //       whileInView={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
// //       viewport={{ once: true, amount: 0.3 }}
// //       className={`flex items-center gap-6 ${
// //         isEven ? "flex-row" : "flex-row-reverse"
// //       }`}
// //     >
// //       <HolographicIcon IconComponent={step.icon} />
// //       <div className={`pt-6 ${isEven ? "text-left" : "text-right"}`}>
// //         <h3 className='text-2xl font-bold text-white'>{step.title}</h3>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export function OurProcess() {
// //   return (
// //     <section
// //       id='process'
// //       className='relative w-full py-24 sm:py-32 overflow-hidden'
// //     >
// //       <div className='absolute inset-0 -z-10'>
// //         <div className='absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:1rem_1rem]' />
// //         <div className='absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950 opacity-90' />
// //       </div>
// //       <div className='container mx-auto px-4 relative z-10'>
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5, ease: "easeOut" }}
// //           viewport={{ once: true, amount: 0.5 }}
// //           className='text-center mb-20'
// //         >
// //           <h2 className='text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400'>
// //             Our Proven Methodology
// //           </h2>
// //         </motion.div>
// //         <div className='relative'>
// //           <div className='absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2'>
// //             <motion.div
// //               initial={{ y: "-100%" }}
// //               whileInView={{ y: "0%" }}
// //               transition={{ duration: 2, ease: "circOut" }}
// //               viewport={{ once: true, amount: 0.2 }}
// //               className='h-full w-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent'
// //             />
// //           </div>
// //           <div className='space-y-16'>
// //             {processSteps.map((step, index) => (
// //               <div key={index} className='relative flex justify-center'>
// //                 <div className='w-full max-w-3xl'>
// //                   <ProcessCard step={step} index={index} />
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { Search, PenTool, Code2, Rocket, TrendingUp } from "lucide-react";

// // --- HolographicIcon Component ---
// const HolographicIcon = ({
//   IconComponent,
// }: {
//   IconComponent: React.ComponentType<any>;
// }) => (
//   <motion.div
//     whileHover='hover'
//     className='relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 grid place-items-center flex-shrink-0'
//   >
//     <IconComponent
//       className='relative z-10 h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white'
//       style={{
//         filter: `drop-shadow(0 0 2px rgba(167, 139, 250, 0.9)) drop-shadow(0 0 8px rgba(167, 139, 250, 0.6)) drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))`,
//       }}
//     />
//     <motion.div
//       className='absolute inset-0 rounded-full bg-purple-500/40 blur-lg'
//       variants={{ hover: { scale: 1.2, opacity: 0.7 } }}
//       transition={{ type: "spring", damping: 15, stiffness: 200 }}
//     />
//     <motion.div
//       className='absolute inset-0'
//       variants={{
//         hover: { x: [0, -1, 1, -1, 0], y: [0, 1, -1, 1, 0], scale: 1.1 },
//       }}
//       transition={{ duration: 0.3 }}
//     >
//       <IconComponent className='absolute inset-0 h-full w-full text-blue-400/50 opacity-50' />
//     </motion.div>
//   </motion.div>
// );

// const processSteps = [
//   {
//     icon: Search,
//     title: "Discovery & Strategy",
//     description: "Understanding your business goals and target audience",
//   },
//   {
//     icon: PenTool,
//     title: "Design & Prototyping",
//     description: "Creating intuitive and engaging user experiences",
//   },
//   {
//     icon: Code2,
//     title: "Development",
//     description: "Building robust and scalable solutions",
//   },
//   {
//     icon: Rocket,
//     title: "Testing & Launch",
//     description: "Ensuring quality and successful deployment",
//   },
//   {
//     icon: TrendingUp,
//     title: "Growth & Optimization",
//     description: "Continuous improvement and performance monitoring",
//   },
// ];

// const ProcessCard = ({
//   step,
//   index,
// }: {
//   step: (typeof processSteps)[0];
//   index: number;
// }) => {
//   const isEven = index % 2 === 0;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
//       viewport={{ once: true, amount: 0.3 }}
//       className={`
//         flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8
//         ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"}
//         w-full
//       `}
//     >
//       {/* Icon Container */}
//       <div className='flex-shrink-0'>
//         <HolographicIcon IconComponent={step.icon} />
//       </div>

//       {/* Content Container */}
//       <div
//         className={`
//         flex-1 text-center sm:text-left
//         ${isEven ? "sm:text-left" : "sm:text-right"}
//         px-4 sm:px-0
//       `}
//       >
//         <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3'>
//           {step.title}
//         </h3>
//         <p className='text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-md mx-auto sm:mx-0'>
//           {step.description}
//         </p>
//       </div>
//     </motion.div>
//   );
// };

// export function OurProcess() {
//   return (
//     <section
//       id='process'
//       className='relative w-full bg-black py-16 sm:py-24 lg:py-32 overflow-hidden'
//     >
//       {/* Background */}
//       <div className='absolute inset-0 -z-10'>
//         <div className='absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:0.75rem_0.75rem] sm:bg-[size:1rem_1rem]' />
//         <div className='absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950 opacity-90' />
//       </div>

//       {/* Container */}
//       <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl'>
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, ease: "easeOut" }}
//           viewport={{ once: true, amount: 0.5 }}
//           className='text-center mb-12 sm:mb-16 lg:mb-20'
//         >
//           <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 leading-tight p-1'>
//             Our Proven Methodology
//           </h2>
//           <p className='mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4'>
//             A systematic approach to delivering exceptional digital solutions
//           </p>
//         </motion.div>

//         {/* Process Steps */}
//         <div className='relative'>
//           {/* Timeline Line */}
//           <div className='hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 lg:w-1 -translate-x-1/2'>
//             <motion.div
//               initial={{ y: "-100%" }}
//               whileInView={{ y: "0%" }}
//               transition={{ duration: 2, ease: "circOut" }}
//               viewport={{ once: true, amount: 0.2 }}
//               className='h-full w-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent'
//             />
//           </div>

//           {/* Mobile Timeline Dots */}
//           <div className='sm:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent' />

//           {/* Steps Container */}
//           <div className='space-y-8 sm:space-y-12 lg:space-y-16'>
//             {processSteps.map((step, index) => (
//               <div key={index} className='relative'>
//                 <div className='sm:hidden absolute left-6 top-8 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-lg' />
//                 <div className='sm:flex sm:justify-center'>
//                   <div className='w-full sm:max-w-2xl lg:max-w-4xl ml-16 sm:ml-0'>
//                     <ProcessCard step={step} index={index} />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Block is now here */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.3 }} // A slight delay so it appears after the last step
//           viewport={{ once: true, amount: 0.5 }}
//           className='text-center mt-16 sm:mt-24'
//         >
//           <p className='text-lg text-gray-300 mb-6'>
//             Ready to transform your digital presence?
//           </p>
//           <button className='px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200'>
//             Start Your Project
//           </button>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, TrendingUp } from "lucide-react";

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
}

// --- HolographicIcon Component ---
const HolographicIcon = ({
  IconComponent,
}: {
  IconComponent: IconComponent;
}) => (
  <motion.div
    whileHover='hover'
    className='relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 grid place-items-center flex-shrink-0'
  >
    <IconComponent
      className='relative z-10 h-8 w-8 sm:h-9 sm:w-9 lg:h-10 lg:w-10 text-white'
      style={{
        filter: `drop-shadow(0 0 2px rgba(167, 139, 250, 0.9)) drop-shadow(0 0 8px rgba(167, 139, 250, 0.6)) drop-shadow(0 0 15px rgba(96, 165, 250, 0.4))`,
      }}
    />
    <motion.div
      className='absolute inset-0 rounded-full bg-purple-500/40 blur-lg'
      variants={{ hover: { scale: 1.2, opacity: 0.7 } }}
      transition={{ type: "spring", damping: 15, stiffness: 200 }}
    />
    <motion.div
      className='absolute inset-0'
      variants={{
        hover: { x: [0, -1, 1, -1, 0], y: [0, 1, -1, 1, 0], scale: 1.1 },
      }}
      transition={{ duration: 0.3 }}
    >
      <IconComponent className='absolute inset-0 h-full w-full text-blue-400/50 opacity-50' />
    </motion.div>
  </motion.div>
);

const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: "Discovery & Strategy",
    description: "Understanding your business goals and target audience",
  },
  {
    icon: PenTool,
    title: "Design & Prototyping",
    description: "Creating intuitive and engaging user experiences",
  },
  {
    icon: Code2,
    title: "Development",
    description: "Building robust and scalable solutions",
  },
  {
    icon: Rocket,
    title: "Testing & Launch",
    description: "Ensuring quality and successful deployment",
  },
  {
    icon: TrendingUp,
    title: "Growth & Optimization",
    description: "Continuous improvement and performance monitoring",
  },
];

const ProcessCard = ({ step, index }: { step: ProcessStep; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
      className={`
        flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-8
        ${isEven ? "sm:flex-row" : "sm:flex-row-reverse"}
        w-full
      `}
    >
      {/* Icon Container */}
      <div className='flex-shrink-0'>
        <HolographicIcon IconComponent={step.icon} />
      </div>

      {/* Content Container */}
      <div
        className={`
        flex-1 text-center sm:text-left
        ${isEven ? "sm:text-left" : "sm:text-right"}
        px-4 sm:px-0
      `}
      >
        <h3 className='text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3'>
          {step.title}
        </h3>
        <p className='text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed max-w-md mx-auto sm:mx-0'>
          {step.description}
        </p>
      </div>
    </motion.div>
  );
};

export function OurProcess() {
  return (
    <section
      id='process'
      className='relative w-full bg-black py-16 sm:py-24 lg:py-32 overflow-hidden'
    >
      {/* Background */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:0.75rem_0.75rem] sm:bg-[size:1rem_1rem]' />
        <div className='absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950 opacity-90' />
      </div>

      {/* Container */}
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className='text-center mb-12 sm:mb-16 lg:mb-20'
        >
          <h2 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-400 leading-tight p-1'>
            Our Proven Methodology
          </h2>
          <p className='mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto px-4'>
            A systematic approach to delivering exceptional digital solutions
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className='relative'>
          {/* Timeline Line */}
          <div className='hidden sm:block absolute left-1/2 top-0 bottom-0 w-0.5 lg:w-1 -translate-x-1/2'>
            <motion.div
              initial={{ y: "-100%" }}
              whileInView={{ y: "0%" }}
              transition={{ duration: 2, ease: "circOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className='h-full w-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent'
            />
          </div>

          {/* Mobile Timeline Dots */}
          <div className='sm:hidden absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent' />

          {/* Steps Container */}
          <div className='space-y-8 sm:space-y-12 lg:space-y-16'>
            {processSteps.map((step, index) => (
              <div key={index} className='relative'>
                <div className='sm:hidden absolute left-6 top-8 w-4 h-4 bg-purple-500 rounded-full border-2 border-white shadow-lg' />
                <div className='sm:flex sm:justify-center'>
                  <div className='w-full sm:max-w-2xl lg:max-w-4xl ml-16 sm:ml-0'>
                    <ProcessCard step={step} index={index} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.5 }}
          className='text-center mt-16 sm:mt-24'
        >
          <p className='text-lg text-gray-300 mb-6'>
            Ready to transform your digital presence?
          </p>
          <button className='px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-200'>
            Start Your Project
          </button>
        </motion.div>
      </div>
    </section>
  );
}
