// export type TimeOfDay = "dawn" | "morning" | "afternoon" | "evening" | "night";

// export const getTimeOfDay = (): TimeOfDay => {
//   const hour = new Date().getHours();
//   if (hour >= 5 && hour < 7) return "dawn";
//   if (hour >= 7 && hour < 12) return "morning";
//   if (hour >= 12 && hour < 17) return "afternoon";
//   if (hour >= 17 && hour < 19) return "evening";
//   return "night"; // Covers 7 PM to 4:59 AM
// };

// export interface TimeTheme {
//   colors: {
//     primary: string;
//     secondary: string;
//     particles: string;
//   };
//   message: string;
//   greeting: string;
// }

// export const getTimeBasedTheme = (timeOfDay: TimeOfDay): TimeTheme => {
//   const themes: Record<TimeOfDay, TimeTheme> = {
//     dawn: {
//       colors: {
//         primary: "from-rose-200/60 via-slate-300/40 to-sky-300/30",
//         secondary: "from-rose-100/40 via-slate-200/30 to-sky-200/20",
//         particles: "rgba(225, 204, 204, 0.7)", // Soft, dusty rose
//       },
//       message: "A fresh start to build something new.",
//       greeting: "Good Morning",
//     },
//     morning: {
//       colors: {
//         primary: "from-sky-400/60 via-slate-300/40 to-neutral-300/30",
//         secondary: "from-sky-300/40 via-slate-200/30 to-neutral-200/20",
//         particles: "rgba(186, 230, 253, 0.7)", // Light sky blue
//       },
//       message: "Let's get to work.",
//       greeting: "Good Morning",
//     },
//     afternoon: {
//       colors: {
//         primary: "from-stone-400/60 via-neutral-400/40 to-slate-400/30",
//         secondary: "from-stone-300/40 via-neutral-300/30 to-slate-300/20",
//         particles: "rgba(214, 211, 209, 0.6)", // Warm, stony gray
//       },
//       message: "Powering through the day with code.",
//       greeting: "Good Afternoon",
//     },
//     evening: {
//       colors: {
//         primary: "from-indigo-400/60 via-slate-500/40 to-neutral-600/30",
//         secondary: "from-indigo-300/40 via-slate-400/30 to-neutral-500/20",
//         particles: "rgba(165, 180, 252, 0.7)", // Muted indigo
//       },
//       message: "Winding down, but the creativity continues.",
//       greeting: "Good Evening",
//     },
//     night: {
//       colors: {
//         primary: "from-slate-800/60 via-slate-900/40 to-black/30",
//         secondary: "from-slate-700/40 via-slate-800/30 to-black/20",
//         particles: "rgba(203, 213, 225, 0.5)", // Faint, silvery starlight
//       },
//       message: "Building under the stars.",
//       greeting: "Good Evening",
//     },
//   };
//   return themes[timeOfDay];
// };

// In lib/time-utils.ts

export type TimeOfDay = "dawn" | "morning" | "afternoon" | "evening" | "night";

export const getTimeOfDay = (): TimeOfDay => {
  const hour = new Date().getHours();
  if (hour >= 5 && hour < 7) return "dawn";
  if (hour >= 7 && hour < 12) return "morning";
  if (hour >= 12 && hour < 17) return "afternoon";
  if (hour >= 17 && hour < 19) return "evening";
  return "night"; // Covers 7 PM to 4:59 AM
};

export interface TimeTheme {
  colors: {
    primary: string;
    secondary: string;
    particles: string; // The rgba color string for canvas particles
  };
  message: string;
  greeting: string;
}

export const getTimeBasedTheme = (timeOfDay: TimeOfDay): TimeTheme => {
  const themes: Record<TimeOfDay, TimeTheme> = {
    dawn: {
      colors: {
        primary: "from-rose-200/60 via-slate-300/40 to-sky-300/30",
        secondary: "from-rose-100/40 via-slate-200/30 to-sky-200/20",
        // SUGGESTION: Lighter, softer pink for a gentle glow
        particles: "rgba(244, 226, 226, 0.6)",
      },
      message: "A fresh start to build something new.",
      greeting: "Good Morning",
    },
    morning: {
      colors: {
        primary: "from-sky-400/60 via-slate-300/40 to-neutral-300/30",
        secondary: "from-sky-300/40 via-slate-200/30 to-neutral-200/20",
        // SUGGESTION: More subtle blue with lower opacity for a clear day feel
        particles: "rgba(201, 233, 252, 0.6)",
      },
      message: "Let's get to work.",
      greeting: "Good Morning",
    },
    afternoon: {
      colors: {
        primary: "from-stone-400/60 via-neutral-400/40 to-slate-400/30",
        secondary: "from-stone-300/40 via-neutral-300/30 to-slate-300/20",
        // SUGGESTION: A warmer off-white for better contrast with hazy grays
        particles: "rgba(225, 220, 215, 0.6)",
      },
      message: "Powering through the day with code.",
      greeting: "Good Afternoon",
    },
    evening: {
      colors: {
        primary: "from-indigo-400/60 via-slate-500/40 to-neutral-600/30",
        secondary: "from-indigo-300/40 via-slate-400/30 to-neutral-500/20",
        // SUGGESTION: Softer, desaturated lavender for a twilight feel
        particles: "rgba(190, 190, 220, 0.55)",
      },
      message: "Winding down, but the creativity continues.",
      greeting: "Good Evening",
    },
    night: {
      colors: {
        primary: "from-slate-800/60 via-slate-900/40 to-black/30",
        secondary: "from-slate-700/40 via-slate-800/30 to-black/20",
        // NO CHANGE: This is a perfect "starlight" color
        particles: "rgba(203, 213, 225, 0.5)",
      },
      message: "Building under the stars.",
      greeting: "Good Evening",
    },
  };
  return themes[timeOfDay];
};
