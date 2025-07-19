// // "use client";

// // import { useRef, useEffect } from "react";
// // import { TimeTheme, TimeOfDay } from "@/lib/time-utils";

// // interface TimeAwareParticlesProps {
// //   theme: TimeTheme;
// //   timeOfDay: TimeOfDay;
// // }

// // export const TimeAwareParticles: React.FC<TimeAwareParticlesProps> = ({
// //   theme,
// //   timeOfDay,
// // }) => {
// //   const canvasRef = useRef<HTMLCanvasElement>(null);

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;

// //     const ctx = canvas.getContext("2d");
// //     if (!ctx) return;

// //     let animationFrameId: number;

// //     canvas.width = window.innerWidth;
// //     canvas.height = window.innerHeight;

// //     const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

// //     const handleMouseMove = (event: MouseEvent) => {
// //       mouse.x = event.clientX;
// //       mouse.y = event.clientY;
// //     };

// //     window.addEventListener("mousemove", handleMouseMove);

// //     let particles: Particle[] = [];

// //     const getParticleCount = () => {
// //       switch (timeOfDay) {
// //         case "dawn":
// //           return 120;
// //         case "morning":
// //           return 180;
// //         case "afternoon":
// //           return 200;
// //         case "evening":
// //           return 150;
// //         case "night":
// //           return 100;
// //         default:
// //           return 150;
// //       }
// //     };

// //     const getParticleSpeed = () => {
// //       switch (timeOfDay) {
// //         case "dawn":
// //           return 0.02;
// //         case "morning":
// //           return 0.05;
// //         case "afternoon":
// //           return 0.08;
// //         case "evening":
// //           return 0.04;
// //         case "night":
// //           return 0.01;
// //         default:
// //           return 0.05;
// //       }
// //     };

// //     const numParticles = getParticleCount();
// //     const sphereRadius = Math.min(canvas.width, canvas.height) * 0.3;
// //     const particleSpeed = getParticleSpeed();

// //     class Particle {
// //       x: number;
// //       y: number;
// //       z: number;
// //       size: number;
// //       spring: number;
// //       vx: number;
// //       vy: number;
// //       vz: number;
// //       alpha: number;

// //       constructor() {
// //         const phi = Math.random() * 2 * Math.PI;
// //         const costheta = Math.random() * 2 - 1;
// //         const theta = Math.acos(costheta);

// //         this.x = sphereRadius * Math.sin(theta) * Math.cos(phi);
// //         this.y = sphereRadius * Math.sin(theta) * Math.sin(phi);
// //         this.z = sphereRadius * Math.cos(theta);

// //         this.size = Math.random() * 3 + 1;
// //         this.spring = particleSpeed;
// //         this.vx = 0;
// //         this.vy = 0;
// //         this.vz = 0;
// //         this.alpha = Math.random() * 0.5 + 0.3;
// //       }

// //       project() {
// //         if (!canvas) return { x: 0, y: 0, size: 0 };
// //         const perspective = 600 / (600 + this.z);
// //         return {
// //           x: this.x * perspective + canvas.width / 2,
// //           y: this.y * perspective + canvas.height / 2,
// //           size: this.size * perspective,
// //         };
// //       }

// //       update() {
// //         const projected = this.project();
// //         const dx = mouse.x - projected.x;
// //         const dy = mouse.y - projected.y;
// //         const dist = Math.sqrt(dx * dx + dy * dy);

// //         if (dist < 150) {
// //           const angle = Math.atan2(dy, dx);
// //           const force = (150 - dist) / 1000;
// //           this.vx += Math.cos(angle) * force;
// //           this.vy += Math.sin(angle) * force;
// //         }

// //         // Time-based movement patterns
// //         const time = Date.now() * 0.001;
// //         switch (timeOfDay) {
// //           case "dawn":
// //             this.vx += Math.sin(time * 0.5) * 0.1;
// //             this.vy += Math.cos(time * 0.3) * 0.1;
// //             break;
// //           case "morning":
// //             this.vx += Math.sin(time * 0.8) * 0.2;
// //             this.vy += Math.cos(time * 0.6) * 0.2;
// //             break;
// //           case "afternoon":
// //             this.vx += Math.sin(time * 1.2) * 0.3;
// //             this.vy += Math.cos(time * 0.9) * 0.3;
// //             break;
// //           case "evening":
// //             this.vx += Math.sin(time * 0.4) * 0.15;
// //             this.vy += Math.cos(time * 0.7) * 0.15;
// //             break;
// //           case "night":
// //             this.vx += Math.sin(time * 0.2) * 0.05;
// //             this.vy += Math.cos(time * 0.1) * 0.05;
// //             break;
// //         }

// //         this.vx += -this.x * this.spring * 0.001;
// //         this.vy += -this.y * this.spring * 0.001;
// //         this.vz += -this.z * this.spring * 0.001;

// //         this.x += this.vx;
// //         this.y += this.vy;
// //         this.z += this.vz;

// //         this.vx *= 0.95;
// //         this.vy *= 0.95;
// //         this.vz *= 0.95;
// //       }
// //     }

// //     function init() {
// //       particles = [];
// //       for (let i = 0; i < numParticles; i++) {
// //         particles.push(new Particle());
// //       }
// //     }

// //     function animate() {
// //       if (!ctx || !canvas) return;
// //       animationFrameId = requestAnimationFrame(animate);
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);

// //       particles.forEach((p) => {
// //         p.update();
// //         const proj = p.project();
// //         if (
// //           proj.x > 0 &&
// //           proj.x < canvas.width &&
// //           proj.y > 0 &&
// //           proj.y < canvas.height
// //         ) {
// //           ctx.beginPath();
// //           ctx.arc(proj.x, proj.y, proj.size, 0, 2 * Math.PI);
// //           ctx.fillStyle = theme.colors.particles.replace(
// //             "0.8",
// //             p.alpha.toString()
// //           );
// //           ctx.fill();
// //         }
// //       });
// //     }

// //     const handleResize = () => {
// //       canvas.width = window.innerWidth;
// //       canvas.height = window.innerHeight;
// //       init();
// //     };

// //     init();
// //     animate();

// //     window.addEventListener("resize", handleResize);

// //     return () => {
// //       window.removeEventListener("resize", handleResize);
// //       window.removeEventListener("mousemove", handleMouseMove);
// //       cancelAnimationFrame(animationFrameId);
// //     };
// //   }, [theme, timeOfDay]);

// //   return (
// //     <canvas
// //       ref={canvasRef}
// //       className='fixed top-0 left-0 w-full h-full -z-10'
// //     />
// //   );
// // };

// "use client";

// import { useRef, useEffect } from "react";
// import { TimeTheme, TimeOfDay } from "@/lib/time-utils";

// interface TimeAwareParticlesProps {
//   theme: TimeTheme;
//   timeOfDay: TimeOfDay;
// }

// export const TimeAwareParticles: React.FC<TimeAwareParticlesProps> = ({
//   theme,
//   timeOfDay,
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let animationFrameId: number;

//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

//     const handleMouseMove = (event: MouseEvent) => {
//       mouse.x = event.clientX;
//       mouse.y = event.clientY;
//     };

//     window.addEventListener("mousemove", handleMouseMove);

//     let particles: Particle[] = [];

//     const getParticleCount = () => {
//       switch (timeOfDay) {
//         case "dawn":
//           return 120;
//         case "morning":
//           return 180;
//         case "afternoon":
//           return 200;
//         case "evening":
//           return 150;
//         case "night":
//           return 100;
//         default:
//           return 150;
//       }
//     };

//     const getParticleSpeed = () => {
//       switch (timeOfDay) {
//         case "dawn":
//           return 0.015;
//         case "morning":
//           return 0.035;
//         case "afternoon":
//           return 0.045;
//         case "evening":
//           return 0.025;
//         case "night":
//           return 0.01;
//         default:
//           return 0.035;
//       }
//     };

//     const numParticles = getParticleCount();
//     const sphereRadius = Math.min(canvas.width, canvas.height) * 0.3;
//     const particleSpeed = getParticleSpeed();

//     class Particle {
//       x: number;
//       y: number;
//       z: number;
//       size: number;
//       spring: number;
//       vx: number;
//       vy: number;
//       vz: number;
//       alpha: number;

//       constructor() {
//         const phi = Math.random() * 2 * Math.PI;
//         const costheta = Math.random() * 2 - 1;
//         const theta = Math.acos(costheta);

//         this.x = sphereRadius * Math.sin(theta) * Math.cos(phi);
//         this.y = sphereRadius * Math.sin(theta) * Math.sin(phi);
//         this.z = sphereRadius * Math.cos(theta);

//         this.size = Math.random() * 3 + 1;
//         this.spring = particleSpeed;
//         this.vx = 0;
//         this.vy = 0;
//         this.vz = 0;
//         this.alpha = Math.random() * 0.5 + 0.3;
//       }

//       project() {
//         if (!canvas) return { x: 0, y: 0, size: 0 };
//         const perspective = 600 / (600 + this.z);
//         return {
//           x: this.x * perspective + canvas.width / 2,
//           y: this.y * perspective + canvas.height / 2,
//           size: this.size * perspective,
//         };
//       }

//       update() {
//         const projected = this.project();
//         const dx = mouse.x - projected.x;
//         const dy = mouse.y - projected.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);

//         if (dist < 150) {
//           const angle = Math.atan2(dy, dx);
//           const force = (150 - dist) / 1000;
//           this.vx += Math.cos(angle) * force;
//           this.vy += Math.sin(angle) * force;
//         }

//         // Time-based movement patterns - more balanced
//         const time = Date.now() * 0.001;
//         switch (timeOfDay) {
//           case "dawn":
//             this.vx += Math.sin(time * 0.4) * 0.08;
//             this.vy += Math.cos(time * 0.3) * 0.08;
//             break;
//           case "morning":
//             this.vx += Math.sin(time * 0.6) * 0.15;
//             this.vy += Math.cos(time * 0.5) * 0.15;
//             break;
//           case "afternoon":
//             this.vx += Math.sin(time * 0.8) * 0.2;
//             this.vy += Math.cos(time * 0.7) * 0.2;
//             break;
//           case "evening":
//             this.vx += Math.sin(time * 0.4) * 0.12;
//             this.vy += Math.cos(time * 0.5) * 0.12;
//             break;
//           case "night":
//             this.vx += Math.sin(time * 0.2) * 0.05;
//             this.vy += Math.cos(time * 0.1) * 0.05;
//             break;
//         }

//         this.vx += -this.x * this.spring * 0.001;
//         this.vy += -this.y * this.spring * 0.001;
//         this.vz += -this.z * this.spring * 0.001;

//         this.x += this.vx;
//         this.y += this.vy;
//         this.z += this.vz;

//         this.vx *= 0.95;
//         this.vy *= 0.95;
//         this.vz *= 0.95;
//       }
//     }

//     function init() {
//       particles = [];
//       for (let i = 0; i < numParticles; i++) {
//         particles.push(new Particle());
//       }
//     }

//     function animate() {
//       if (!ctx || !canvas) return;
//       animationFrameId = requestAnimationFrame(animate);
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((p) => {
//         p.update();
//         const proj = p.project();
//         if (
//           proj.x > 0 &&
//           proj.x < canvas.width &&
//           proj.y > 0 &&
//           proj.y < canvas.height
//         ) {
//           ctx.beginPath();
//           ctx.arc(proj.x, proj.y, proj.size, 0, 2 * Math.PI);
//           ctx.fillStyle = theme.colors.particles.replace(
//             "0.8",
//             p.alpha.toString()
//           );
//           ctx.fill();
//         }
//       });
//     }

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       init();
//     };

//     init();
//     animate();

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [theme, timeOfDay]);

//   return (
//     <canvas
//       ref={canvasRef}
//       className='fixed top-0 left-0 w-full h-full -z-10'
//     />
//   );
// };

// src/components/TimeAwareParticles.tsx
"use client";

import { useRef, useEffect } from "react";
import { TimeTheme, TimeOfDay } from "@/lib/time-utils";

interface TimeAwareParticlesProps {
  theme: TimeTheme;
  timeOfDay: TimeOfDay;
}

export const TimeAwareParticles: React.FC<TimeAwareParticlesProps> = ({
  theme,
  timeOfDay,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = { x: canvas.width / 2, y: canvas.height / 2 };
    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let particles: Particle[] = [];
    const getParticleCount = () => {
      switch (timeOfDay) {
        case "dawn":
          return 120;
        case "morning":
          return 180;
        case "afternoon":
          return 200;
        case "evening":
          return 150;
        case "night":
          return 100;
        default:
          return 150;
      }
    };
    const numParticles = getParticleCount();
    const sphereRadius = Math.min(canvas.width, canvas.height) * 0.3;

    class Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      spring: number;
      vx: number;
      vy: number;
      vz: number;
      alpha: number;

      constructor() {
        const phi = Math.random() * 2 * Math.PI;
        const costheta = Math.random() * 2 - 1;
        const theta = Math.acos(costheta);
        this.x = sphereRadius * Math.sin(theta) * Math.cos(phi);
        this.y = sphereRadius * Math.sin(theta) * Math.sin(phi);
        this.z = sphereRadius * Math.cos(theta);
        this.size = Math.random() * 3 + 1;
        this.spring = 0.05;
        this.vx = 0;
        this.vy = 0;
        this.vz = 0;
        this.alpha = Math.random() * 0.5 + 0.3;
      }

      project() {
        if (!canvas) return { x: 0, y: 0, size: 0 };
        const perspective = 600 / (600 + this.z);
        return {
          x: this.x * perspective + canvas.width / 2,
          y: this.y * perspective + canvas.height / 2,
          size: this.size * perspective,
        };
      }

      update() {
        const projected = this.project();
        const dx = mouse.x - projected.x;
        const dy = mouse.y - projected.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const angle = Math.atan2(dy, dx);
          const force = (150 - dist) / 1000;
          this.vx += Math.cos(angle) * force;
          this.vy += Math.sin(angle) * force;
        }

        this.vx += -this.x * this.spring * 0.001;
        this.vy += -this.y * this.spring * 0.001;
        this.vz += -this.z * this.spring * 0.001;

        this.x += this.vx;
        this.y += this.vy;
        this.z += this.vz;
        this.vx *= 0.95;
        this.vy *= 0.95;
        this.vz *= 0.95;
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < numParticles; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      if (!ctx || !canvas) return;
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.update();
        const proj = p.project();
        if (
          proj.x > 0 &&
          proj.x < canvas.width &&
          proj.y > 0 &&
          proj.y < canvas.height
        ) {
          ctx.beginPath();
          ctx.arc(proj.x, proj.y, proj.size, 0, 2 * Math.PI);
          ctx.fillStyle = theme.colors.particles.replace(
            "0.8",
            p.alpha.toString()
          );
          ctx.fill();
        }
      });
    }

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
      }
    };

    init();
    animate();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, timeOfDay]);

  return (
    <canvas
      ref={canvasRef}
      className='fixed top-0 left-0 w-full h-full -z-10'
    />
  );
};
