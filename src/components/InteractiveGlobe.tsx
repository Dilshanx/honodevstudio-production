// "use client";
// import createGlobe from "cobe";
// import { useEffect, useRef } from "react";
// import { useSpring } from "framer-motion";

// export const InteractiveGlobe = () => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const pointerInteracting = useRef(null);
//   const pointerInteractionMovement = useRef(0);

//   // Physics for smooth rotation
//   const r = useSpring(0, {
//     r: 0,
//     mass: 1,
//     damping: 10,
//     stiffness: 280,
//     restDelta: 0.001,
//   });

//   useEffect(() => {
//     let phi = 0;
//     let width = 0;
//     const onResize = () =>
//       canvasRef.current && (width = canvasRef.current.offsetWidth);
//     window.addEventListener("resize", onResize);
//     onResize();
//     const globe = createGlobe(canvasRef.current!, {
//       devicePixelRatio: 2,
//       width: width * 2,
//       height: width * 2,
//       phi: 0,
//       theta: 0.3,
//       dark: 1,
//       diffuse: 1.2,
//       mapSamples: 16000,
//       mapBrightness: 6,
//       baseColor: [0.3, 0.3, 0.3], // Slate-ish gray
//       markerColor: [0.02, 0.71, 0.83], // Cyan-500
//       glowColor: [0.55, 0.36, 0.96], // Purple-500
//       markers: [
//         // longitude latitude
//         { location: [37.7595, -122.4367], size: 0.03 }, // San Francisco
//         { location: [40.7128, -74.006], size: 0.1 }, // New York
//         { location: [51.5074, -0.1278], size: 0.05 }, // London
//         { location: [6.9271, 79.8612], size: 0.08 }, // Sri Lanka (Colombo)
//         { location: [35.6762, 139.6503], size: 0.05 }, // Tokyo
//         { location: [-33.8688, 151.2093], size: 0.04 }, // Sydney
//       ],
//       onRender: (state) => {
//         // This runs on every animation frame
//         if (!pointerInteracting.current) {
//           // Auto rotation
//           phi += 0.003;
//         }
//         state.phi = phi + r.get();
//         state.width = width * 2;
//         state.height = width * 2;
//       },
//     });
//     setTimeout(() => (canvasRef.current!.style.opacity = "1"));
//     return () => {
//       globe.destroy();
//       window.removeEventListener("resize", onResize);
//     };
//   }, []);

//   return (
//     <div
//       className='w-full max-w-[600px] aspect-square relative mx-auto'
//       style={{
//         width: "100%",
//         maxWidth: 600,
//         aspectRatio: 1,
//       }}
//     >
//       <div className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl' />

//       <canvas
//         ref={canvasRef}
//         onPointerDown={(e) => {
//           // @ts-ignore
//           pointerInteracting.current =
//             e.clientX - pointerInteractionMovement.current;
//           // @ts-ignore
//           canvasRef.current.style.cursor = "grabbing";
//         }}
//         onPointerUp={() => {
//           pointerInteracting.current = null;
//           // @ts-ignore
//           canvasRef.current.style.cursor = "grab";
//         }}
//         onPointerOut={() => {
//           pointerInteracting.current = null;
//           // @ts-ignore
//           canvasRef.current.style.cursor = "grab";
//         }}
//         onMouseMove={(e) => {
//           if (pointerInteracting.current !== null) {
//             const delta = e.clientX - pointerInteracting.current;
//             pointerInteractionMovement.current = delta;
//             r.set(delta / 200);
//           }
//         }}
//         onTouchMove={(e) => {
//           if (pointerInteracting.current !== null && e.touches[0]) {
//             const delta = e.touches[0].clientX - pointerInteracting.current;
//             pointerInteractionMovement.current = delta;
//             r.set(delta / 100);
//           }
//         }}
//         className='w-full h-full opacity-0 transition-opacity duration-1000 ease-in-out cursor-grab relative z-10'
//         style={{
//           width: "100%",
//           height: "100%",
//           contain: "layout paint size",
//         }}
//       />

//       {/* Optional: Floating Stats Cards overlaying the Globe */}
//       <div className='absolute bottom-10 right-0 lg:-right-10 bg-slate-900/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl z-20 hidden md:block animate-float-delayed'>
//         <div className='flex items-center gap-3'>
//           <div className='w-2 h-2 rounded-full bg-green-500 animate-pulse' />
//           <span className='text-slate-200 text-sm font-medium'>
//             Servers Operational
//           </span>
//         </div>
//         <div className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400 mt-1'>
//           99.99% Uptime
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";
import createGlobe from "cobe";
import { useEffect, useRef } from "react";

export const InteractiveGlobe = () => {
  const canvasRef = useRef(null);
  const pointerInteracting = useRef(null);
  const pointerInteractionMovement = useRef(0);

  // Use Refs for animation values to avoid React re-renders causing jank
  const phiRef = useRef(0);
  const widthRef = useRef(0);

  useEffect(() => {
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
        widthRef.current = width;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.02, 0.71, 0.83], // Cyan
      glowColor: [0.55, 0.36, 0.96], // Purple
      // The markers (dots) are kept exactly as they were
      markers: [
        { location: [6.9271, 79.8612], size: 0.1 }, // Sri Lanka
        { location: [40.7128, -74.006], size: 0.1 }, // USA (New York)
        { location: [-33.8688, 151.2093], size: 0.1 }, // Australia (Sydney)
      ],
      onRender: (state) => {
        // --- ANIMATION LOGIC ---

        // 1. If user is dragging
        if (pointerInteracting.current !== null) {
          const delta = pointerInteractionMovement.current;
          pointerInteractionMovement.current = 0;
          phiRef.current += delta * 0.005;
        }
        // 2. Default auto-rotation
        else {
          phiRef.current += 0.003;
        }

        state.phi = phiRef.current;
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;
      },
    });

    setTimeout(() => (canvasRef.current.style.opacity = "1"));

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className='w-full max-w-[600px] mx-auto flex flex-col items-center gap-6'>
      {/* Globe Container */}
      <div className='w-full aspect-square relative'>
        {/* Background Glow */}
        <div className='absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl' />

        {/* The Globe Canvas */}
        <canvas
          ref={canvasRef}
          onPointerDown={(e) => {
            pointerInteracting.current =
              e.clientX - pointerInteractionMovement.current;
            canvasRef.current.style.cursor = "grabbing";
          }}
          onPointerUp={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = "grab";
          }}
          onPointerOut={() => {
            pointerInteracting.current = null;
            canvasRef.current.style.cursor = "grab";
          }}
          onMouseMove={(e) => {
            if (pointerInteracting.current !== null) {
              const delta = e.clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              pointerInteracting.current = e.clientX;
            }
          }}
          onTouchMove={(e) => {
            if (pointerInteracting.current !== null && e.touches[0]) {
              const delta = e.touches[0].clientX - pointerInteracting.current;
              pointerInteractionMovement.current = delta;
              pointerInteracting.current = e.touches[0].clientX;
            }
          }}
          className='w-full h-full opacity-0 transition-opacity duration-1000 ease-in-out cursor-grab relative z-10'
        />
      </div>
    </div>
  );
};
