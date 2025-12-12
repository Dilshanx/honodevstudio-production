// // // "use client";

// // // import React, { useEffect, useRef, useState, useCallback } from "react";

// // // // --- Types ---
// // // type Leech = {
// // //   id: string;
// // //   squareIndex: number;
// // //   side: "top" | "right" | "bottom" | "left";
// // //   progress: number;
// // //   duration: number;
// // //   startTime: number;
// // //   direction: 1 | -1;
// // //   opacity: number;
// // //   path: { squareIndex: number; side: "top" | "right" | "bottom" | "left" }[];
// // //   currentPathIndex: number;
// // //   axisKey: string;
// // // };

// // // type Square = {
// // //   x: number;
// // //   y: number;
// // //   size: number;
// // // };

// // // interface AnimatedBackgroundProps {
// // //   className?: string;
// // // }

// // // const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({
// // //   className,
// // // }) => {
// // //   const containerRef = useRef<HTMLDivElement>(null);
// // //   const [leeches, setLeeches] = useState<Leech[]>([]);
// // //   const [squares, setSquares] = useState<Square[]>([]);
// // //   const animationRef = useRef<number | null>(null);
// // //   const activeAxesRef = useRef<Set<string>>(new Set());
// // //   const squareGridRef = useRef<Map<string, number>>(new Map());
// // //   const gridPositionsRef = useRef<Map<number, { row: number; col: number }>>(
// // //     new Map()
// // //   );

// // //   const SPEED_CONFIG = {
// // //     minSpeed: 25,
// // //     maxSpeed: 65,
// // //   };

// // //   const generateSquares = useCallback(() => {
// // //     const squareSize = 40;
// // //     const maxRadius = 600;
// // //     const diameter = maxRadius * 2;

// // //     const cols = Math.floor(diameter / squareSize);
// // //     const rows = Math.floor(diameter / squareSize);

// // //     const gridWidth = cols * squareSize;
// // //     const gridHeight = rows * squareSize;

// // //     const centerX = diameter / 2;
// // //     const centerY = diameter / 2;
// // //     const startX = centerX - gridWidth / 2;
// // //     const startY = centerY - gridHeight / 2;

// // //     const newSquares: Square[] = [];
// // //     const gridMap = new Map<string, number>();
// // //     const positionsMap = new Map<number, { row: number; col: number }>();

// // //     for (let row = 0; row < rows; row++) {
// // //       for (let col = 0; col < cols; col++) {
// // //         const x = startX + col * squareSize;
// // //         const y = startY + row * squareSize;

// // //         const squareCenterX = x + squareSize / 2;
// // //         const squareCenterY = y + squareSize / 2;
// // //         const distanceFromCenter = Math.sqrt(
// // //           Math.pow(squareCenterX - centerX, 2) +
// // //             Math.pow(squareCenterY - centerY, 2)
// // //         );

// // //         if (distanceFromCenter <= maxRadius) {
// // //           const index = newSquares.length;
// // //           newSquares.push({ x, y, size: squareSize });
// // //           gridMap.set(`${row}-${col}`, index);
// // //           positionsMap.set(index, { row, col });
// // //         }
// // //       }
// // //     }

// // //     setSquares(newSquares);
// // //     squareGridRef.current = gridMap;
// // //     gridPositionsRef.current = positionsMap;
// // //   }, []);

// // //   const calculateLeechDuration = useCallback(
// // //     (pathLength: number, squareSize: number): number => {
// // //       const speed =
// // //         SPEED_CONFIG.minSpeed +
// // //         Math.random() * (SPEED_CONFIG.maxSpeed - SPEED_CONFIG.minSpeed);
// // //       const totalDistance = pathLength * squareSize;
// // //       return (totalDistance / speed) * 1000;
// // //     },
// // //     [SPEED_CONFIG.maxSpeed, SPEED_CONFIG.minSpeed]
// // //   );

// // //   const getAxisKey = useCallback(
// // //     (
// // //       path: { squareIndex: number; side: "top" | "right" | "bottom" | "left" }[]
// // //     ): string => {
// // //       if (path.length === 0) return "";
// // //       const firstSegment = path[0];
// // //       const side = firstSegment.side;
// // //       const firstPos = gridPositionsRef.current.get(firstSegment.squareIndex);
// // //       if (!firstPos) return "";

// // //       let axisIdentifier: string;
// // //       if (side === "top" || side === "bottom") {
// // //         const row = side === "top" ? firstPos.row : firstPos.row + 1;
// // //         axisIdentifier = `h-${row}`;
// // //       } else {
// // //         const col = side === "left" ? firstPos.col : firstPos.col + 1;
// // //         axisIdentifier = `v-${col}`;
// // //       }
// // //       return axisIdentifier;
// // //     },
// // //     []
// // //   );

// // //   const findPathToEdge = useCallback(
// // //     (
// // //       startSquareIndex: number,
// // //       startSide: "top" | "right" | "bottom" | "left",
// // //       direction: 1 | -1,
// // //       minPathRatio: number
// // //     ): { squareIndex: number; side: "top" | "right" | "bottom" | "left" }[] => {
// // //       if (startSquareIndex >= squares.length) return [];

// // //       const completePath: {
// // //         squareIndex: number;
// // //         side: "top" | "right" | "bottom" | "left";
// // //       }[] = [];
// // //       const maxRadius = 600;
// // //       const diameter = maxRadius * 2;
// // //       const centerX = diameter / 2;
// // //       const centerY = diameter / 2;

// // //       let currentSquare = startSquareIndex;
// // //       let currentSide = startSide;
// // //       const maxIterations = 100;
// // //       let iterations = 0;

// // //       while (iterations < maxIterations) {
// // //         completePath.push({ squareIndex: currentSquare, side: currentSide });
// // //         const square = squares[currentSquare];
// // //         if (!square) break;

// // //         const position = gridPositionsRef.current.get(currentSquare);
// // //         if (!position) break;
// // //         const { row, col } = position;

// // //         let nextSquare = -1;
// // //         let nextSide: "top" | "right" | "bottom" | "left" = currentSide;

// // //         if (currentSide === "top") {
// // //           nextSquare =
// // //             direction === 1
// // //               ? (squareGridRef.current.get(`${row}-${col + 1}`) ?? -1)
// // //               : (squareGridRef.current.get(`${row}-${col - 1}`) ?? -1);
// // //           nextSide = "top";
// // //         } else if (currentSide === "right") {
// // //           nextSquare =
// // //             direction === 1
// // //               ? (squareGridRef.current.get(`${row + 1}-${col}`) ?? -1)
// // //               : (squareGridRef.current.get(`${row - 1}-${col}`) ?? -1);
// // //           nextSide = "right";
// // //         } else if (currentSide === "bottom") {
// // //           nextSquare =
// // //             direction === 1
// // //               ? (squareGridRef.current.get(`${row}-${col - 1}`) ?? -1)
// // //               : (squareGridRef.current.get(`${row}-${col + 1}`) ?? -1);
// // //           nextSide = "bottom";
// // //         } else if (currentSide === "left") {
// // //           nextSquare =
// // //             direction === 1
// // //               ? (squareGridRef.current.get(`${row - 1}-${col}`) ?? -1)
// // //               : (squareGridRef.current.get(`${row + 1}-${col}`) ?? -1);
// // //           nextSide = "left";
// // //         }

// // //         if (nextSquare === -1) break;
// // //         const nextSquareData = squares[nextSquare];
// // //         if (!nextSquareData) break;

// // //         const nextCenterX = nextSquareData.x + nextSquareData.size / 2;
// // //         const nextCenterY = nextSquareData.y + nextSquareData.size / 2;
// // //         const distanceFromCenter = Math.sqrt(
// // //           Math.pow(nextCenterX - centerX, 2) +
// // //             Math.pow(nextCenterY - centerY, 2)
// // //         );

// // //         if (distanceFromCenter > maxRadius) break;

// // //         currentSquare = nextSquare;
// // //         currentSide = nextSide;
// // //         iterations++;
// // //       }

// // //       const totalPossibleLength = completePath.length;
// // //       const minRequiredLength = Math.ceil(totalPossibleLength * minPathRatio);
// // //       if (completePath.length < minRequiredLength) return [];
// // //       return completePath;
// // //     },
// // //     [squares]
// // //   );

// // //   const createLeech = useCallback((): Leech | null => {
// // //     if (squares.length === 0) return null;
// // //     const maxAttempts = 200;
// // //     let attempts = 0;

// // //     while (attempts < maxAttempts) {
// // //       const squareIndex = Math.floor(Math.random() * squares.length);
// // //       const square = squares[squareIndex];
// // //       const sides: Array<"top" | "right" | "bottom" | "left"> = [
// // //         "top",
// // //         "right",
// // //         "bottom",
// // //         "left",
// // //       ];
// // //       const side = sides[Math.floor(Math.random() * sides.length)];
// // //       const direction = Math.random() < 0.5 ? 1 : -1;
// // //       const minPathRatio = 0.3 + Math.random() * 0.4;
// // //       const path = findPathToEdge(squareIndex, side, direction, minPathRatio);

// // //       if (path.length === 0) {
// // //         attempts++;
// // //         continue;
// // //       }

// // //       const axisKey = getAxisKey(path);
// // //       if (!activeAxesRef.current.has(axisKey)) {
// // //         activeAxesRef.current.add(axisKey);
// // //         const duration = calculateLeechDuration(path.length, square.size);

// // //         return {
// // //           id: `leech-${Date.now()}-${Math.random()}`,
// // //           squareIndex: path[0].squareIndex,
// // //           side: path[0].side,
// // //           progress: direction === 1 ? 0 : 1,
// // //           duration,
// // //           startTime: Date.now(),
// // //           direction,
// // //           opacity: 0,
// // //           path,
// // //           currentPathIndex: 0,
// // //           axisKey,
// // //         };
// // //       }
// // //       attempts++;
// // //     }
// // //     return null;
// // //   }, [squares, calculateLeechDuration, getAxisKey, findPathToEdge]);

// // //   const getLeechTransform = useCallback(
// // //     (leech: Leech) => {
// // //       if (
// // //         leech.path.length === 0 ||
// // //         leech.currentPathIndex >= leech.path.length
// // //       )
// // //         return { x: 0, y: 0, rotation: 0 };

// // //       const currentSegment = leech.path[leech.currentPathIndex];
// // //       const squareIndex = currentSegment.squareIndex;
// // //       if (squareIndex >= squares.length) return { x: 0, y: 0, rotation: 0 };

// // //       const square = squares[squareIndex];
// // //       const { progress, side, direction } = leech;
// // //       let x = 0,
// // //         y = 0,
// // //         rotation = 0;

// // //       switch (side) {
// // //         case "top":
// // //           x = square.x + progress * square.size;
// // //           y = square.y;
// // //           rotation = direction === 1 ? 90 : -90;
// // //           break;
// // //         case "right":
// // //           x = square.x + square.size;
// // //           y = square.y + progress * square.size;
// // //           rotation = direction === 1 ? 180 : 0;
// // //           break;
// // //         case "bottom":
// // //           x = square.x + (1 - progress) * square.size;
// // //           y = square.y + square.size;
// // //           rotation = direction === 1 ? -90 : 90;
// // //           break;
// // //         case "left":
// // //           x = square.x;
// // //           y = square.y + (1 - progress) * square.size;
// // //           rotation = direction === 1 ? 0 : 180;
// // //           break;
// // //       }
// // //       return { x: x - 2.5, y: y - 11, rotation };
// // //     },
// // //     [squares]
// // //   );

// // //   const animate = useCallback(() => {
// // //     const currentTime = Date.now();
// // //     setLeeches((prevLeeches) => {
// // //       const updatedLeeches = prevLeeches
// // //         .map((leech) => {
// // //           const elapsed = currentTime - leech.startTime;
// // //           const totalProgress = Math.min(elapsed / leech.duration, 1);
// // //           if (!leech.path || leech.path.length === 0) return null;

// // //           const segmentProgress = totalProgress * leech.path.length;
// // //           const currentPathIndex = Math.min(
// // //             Math.floor(segmentProgress),
// // //             leech.path.length - 1
// // //           );
// // //           const segmentLocalProgress = segmentProgress - currentPathIndex;
// // //           const currentSegment = leech.path[currentPathIndex];
// // //           if (!currentSegment) return null;

// // //           const progress =
// // //             leech.direction === 1
// // //               ? segmentLocalProgress
// // //               : 1 - segmentLocalProgress;

// // //           let opacity = 1;
// // //           const fadeInThreshold = 0.08;
// // //           const fadeOutStart = 0.92;

// // //           if (totalProgress < fadeInThreshold) {
// // //             opacity = totalProgress / fadeInThreshold;
// // //           } else if (totalProgress > fadeOutStart) {
// // //             opacity = (1 - totalProgress) / (1 - fadeOutStart);
// // //           }

// // //           return {
// // //             ...leech,
// // //             progress,
// // //             opacity: Math.max(0, Math.min(1, opacity)),
// // //             currentPathIndex,
// // //             squareIndex: currentSegment.squareIndex,
// // //             side: currentSegment.side,
// // //           };
// // //         })
// // //         .filter((leech): leech is Leech => {
// // //           if (!leech) return false;
// // //           const elapsed = currentTime - leech.startTime;
// // //           const isComplete = elapsed / leech.duration >= 1;
// // //           if (isComplete) activeAxesRef.current.delete(leech.axisKey);
// // //           return !isComplete;
// // //         });

// // //       const activeLeeches = [...updatedLeeches];
// // //       const minLeeches = 12;
// // //       const maxLeeches = 18;
// // //       const targetCount = Math.max(
// // //         minLeeches,
// // //         Math.min(maxLeeches, minLeeches + Math.floor(Math.random() * 5))
// // //       );
// // //       const spawnAttempts = activeLeeches.length < minLeeches ? 5 : 1;

// // //       for (let attempt = 0; attempt < spawnAttempts; attempt++) {
// // //         if (activeLeeches.length >= targetCount) break;
// // //         const newLeech = createLeech();
// // //         if (newLeech) activeLeeches.push(newLeech);
// // //       }

// // //       return activeLeeches;
// // //     });
// // //     animationRef.current = requestAnimationFrame(animate);
// // //   }, [squares, createLeech]);

// // //   useEffect(() => {
// // //     generateSquares();
// // //     const handleResize = () => generateSquares();
// // //     window.addEventListener("resize", handleResize);
// // //     return () => window.removeEventListener("resize", handleResize);
// // //   }, [generateSquares]);

// // //   useEffect(() => {
// // //     if (squares.length > 0)
// // //       animationRef.current = requestAnimationFrame(animate);
// // //     return () => {
// // //       if (animationRef.current) cancelAnimationFrame(animationRef.current);
// // //       activeAxesRef.current.clear();
// // //     };
// // //   }, [squares, animate]);

// // //   return (
// // //     <div
// // //       ref={containerRef}
// // //       className={`absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden ${className || ""}`}
// // //       style={{ zIndex: 0 }}
// // //     >
// // //       <div
// // //         className='relative'
// // //         style={{
// // //           width: "1200px",
// // //           height: "1200px",
// // //           transform: "scale(1.5) perspective(1000px) rotateX(60deg)",
// // //           opacity: 0.6,
// // //         }}
// // //       >
// // //         <svg className='absolute inset-0 w-full h-full' style={{ zIndex: 1 }}>
// // //           {squares.map((square, index) => (
// // //             <rect
// // //               key={`square-${index}`}
// // //               x={square.x}
// // //               y={square.y}
// // //               width={square.size}
// // //               height={square.size}
// // //               fill='none'
// // //               stroke='#1e3a8a'
// // //               strokeWidth='1'
// // //               strokeOpacity='0.08'
// // //             />
// // //           ))}
// // //         </svg>

// // //         <div className='absolute inset-0' style={{ zIndex: 2 }}>
// // //           {leeches.map((leech) => {
// // //             const transform = getLeechTransform(leech);
// // //             return (
// // //               <div
// // //                 key={leech.id}
// // //                 className='absolute transition-opacity duration-200'
// // //                 style={{
// // //                   left: `${transform.x}px`,
// // //                   top: `${transform.y}px`,
// // //                   opacity: leech.opacity,
// // //                   transform: `rotate(${transform.rotation}deg)`,
// // //                   transformOrigin: "center center",
// // //                 }}
// // //               >
// // //                 <svg
// // //                   width='5'
// // //                   height='22'
// // //                   viewBox='0 0 5 22'
// // //                   className='overflow-visible'
// // //                 >
// // //                   <defs>
// // //                     <linearGradient
// // //                       id={`leechGradient-${leech.id}`}
// // //                       x1='0%'
// // //                       y1='0%'
// // //                       x2='0%'
// // //                       y2='100%'
// // //                     >
// // //                       <stop offset='0%' stopColor='#3B82F6' stopOpacity='0.6' />
// // //                       <stop
// // //                         offset='50%'
// // //                         stopColor='#6366F1'
// // //                         stopOpacity='0.4'
// // //                       />
// // //                       <stop
// // //                         offset='100%'
// // //                         stopColor='#6366F1'
// // //                         stopOpacity='0.1'
// // //                       />
// // //                     </linearGradient>

// // //                     <filter
// // //                       id={`glow-${leech.id}`}
// // //                       x='-50%'
// // //                       y='-50%'
// // //                       width='200%'
// // //                       height='200%'
// // //                     >
// // //                       <feGaussianBlur stdDeviation='2' result='coloredBlur' />
// // //                       <feMerge>
// // //                         <feMergeNode in='coloredBlur' />
// // //                         <feMergeNode in='SourceGraphic' />
// // //                       </feMerge>
// // //                     </filter>
// // //                   </defs>

// // //                   <path
// // //                     d='M 2.5 0 C 4.5 0, 5 1, 5 2 L 4.9 4 L 4.7 6 L 4.5 8 L 4.3 10 L 4.0 12 L 3.7 14 L 3.4 16 L 3.1 18 L 2.8 20 L 2.5 22 L 2.2 20 L 1.9 18 L 1.6 16 L 1.3 14 L 1.0 12 L 0.7 10 L 0.5 8 L 0.3 6 L 0.1 4 L 0 2 C 0 1, 0.5 0, 2.5 0 Z'
// // //                     fill={`url(#leechGradient-${leech.id})`}
// // //                     filter={`url(#glow-${leech.id})`}
// // //                   />

// // //                   <circle
// // //                     cx='2.5'
// // //                     cy='11'
// // //                     r='8'
// // //                     fill='none'
// // //                     stroke='#3B82F6'
// // //                     strokeWidth='0.5'
// // //                     opacity='0.2'
// // //                     filter='blur(2px)'
// // //                   />
// // //                 </svg>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AnimatedBackground;

// // "use client";

// // import React, { useEffect, useRef } from "react";

// // interface ResonantBackgroundProps {
// //   className?: string;
// // }

// // const ResonantBackground: React.FC<ResonantBackgroundProps> = ({
// //   className,
// // }) => {
// //   const canvasRef = useRef<HTMLCanvasElement>(null);
// //   const containerRef = useRef<HTMLDivElement>(null);

// //   // Configuration
// //   const SPACING = 30; // Distance between dots
// //   const RADIUS = 600; // Size of the circular grid
// //   const BEAM_WIDTH = Math.PI / 6; // Width of the scanner beam (30 degrees)
// //   const ROTATION_SPEED = 0.002; // How fast the beam rotates
// //   const LEVITATION_HEIGHT = 40; // How high dots rise when lit

// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;
// //     const ctx = canvas.getContext("2d");
// //     if (!ctx) return;

// //     let animationFrameId: number;
// //     let beamAngle = 0;

// //     // Grid of points
// //     let points: {
// //       x: number;
// //       y: number;
// //       originX: number;
// //       originY: number;
// //       z: number; // Elevation (levitation)
// //       angle: number; // Angle relative to center
// //       dist: number; // Distance from center
// //     }[] = [];

// //     // --- 1. Initialization ---
// //     const init = () => {
// //       // Set canvas size to match visual scale
// //       // We double dimensions for retina displays (high DPI)
// //       const dpr = window.devicePixelRatio || 1;
// //       const rect = canvas.getBoundingClientRect();

// //       canvas.width = rect.width * dpr;
// //       canvas.height = rect.height * dpr;
// //       ctx.scale(dpr, dpr);

// //       const centerX = rect.width / 2;
// //       const centerY = rect.height / 2;

// //       points = [];

// //       // Create a grid of points within a circle
// //       // We calculate from -Radius to +Radius
// //       const cols = Math.floor((RADIUS * 2) / SPACING);
// //       const rows = Math.floor((RADIUS * 2) / SPACING);

// //       for (let i = 0; i <= cols; i++) {
// //         for (let j = 0; j <= rows; j++) {
// //           // Calculate grid position relative to center
// //           const xOffset = i * SPACING - RADIUS;
// //           const yOffset = j * SPACING - RADIUS;

// //           // Distance from center
// //           const dist = Math.sqrt(xOffset * xOffset + yOffset * yOffset);

// //           // Only keep points inside the circle
// //           if (dist <= RADIUS) {
// //             const x = centerX + xOffset;
// //             const y = centerY + yOffset;

// //             // Calculate angle for beam interaction (atan2)
// //             const angle = Math.atan2(yOffset, xOffset);

// //             points.push({
// //               x,
// //               y,
// //               originX: x,
// //               originY: y,
// //               z: 0,
// //               angle,
// //               dist,
// //             });
// //           }
// //         }
// //       }
// //     };

// //     // --- 2. Math Helper: Shortest difference between angles ---
// //     const getAngularDistance = (a1: number, a2: number) => {
// //       let diff = Math.abs(a1 - a2) % (Math.PI * 2);
// //       return diff > Math.PI ? Math.PI * 2 - diff : diff;
// //     };

// //     // --- 3. Animation Loop ---
// //     const render = () => {
// //       // Clear canvas
// //       const rect = canvas.getBoundingClientRect();
// //       ctx.clearRect(0, 0, rect.width, rect.height);

// //       // Update Beam Angle
// //       beamAngle = (beamAngle + ROTATION_SPEED) % (Math.PI * 2);
// //       // Normalize beam angle to -PI to PI to match atan2
// //       const normalizedBeamAngle =
// //         beamAngle > Math.PI ? beamAngle - Math.PI * 2 : beamAngle;

// //       points.forEach((point) => {
// //         // A. Calculate Interaction with Beam
// //         const angleDist = getAngularDistance(point.angle, normalizedBeamAngle);

// //         // Intensity is 1.0 if inside the beam center, fades to 0 at edges
// //         let intensity = 0;
// //         if (angleDist < BEAM_WIDTH) {
// //           intensity = 1 - angleDist / BEAM_WIDTH;
// //           // Ease in out for smoother light edge
// //           intensity = intensity * intensity * (3 - 2 * intensity);
// //         }

// //         // B. Physics: Levitation (Z-Index simulation)
// //         // Target Z is based on intensity.
// //         const targetZ = intensity * LEVITATION_HEIGHT;

// //         // Linear interpolation (Lerp) for smooth movement up and down
// //         // "0.1" is the speed of the easing
// //         point.z += (targetZ - point.z) * 0.1;

// //         // C. Visuals
// //         // Calculate dynamic color
// //         // Inactive: Slate Blue (faint)
// //         // Active: White/Cyan

// //         const baseSize = 2;
// //         const scale = 1 + (point.z / LEVITATION_HEIGHT) * 1.5; // Grow when levitating

// //         // Create 3D shift effect: When point rises (z goes up),
// //         // it should move "up" visually on the Y axis
// //         // (Since we view the floor at an angle, up = negative Y)
// //         const visualY = point.originY - point.z;

// //         ctx.beginPath();
// //         ctx.arc(point.x, visualY, baseSize * scale, 0, Math.PI * 2);

// //         if (point.z > 1) {
// //           // ACTIVE STATE (Lit)
// //           // Mix colors based on height
// //           const alpha = 0.2 + (point.z / LEVITATION_HEIGHT) * 0.8;
// //           ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;

// //           // Add glow for high points
// //           if (point.z > LEVITATION_HEIGHT * 0.8) {
// //             ctx.shadowBlur = 10;
// //             ctx.shadowColor = "rgba(59, 130, 246, 0.8)"; // Blue glow
// //           } else {
// //             ctx.shadowBlur = 0;
// //           }
// //         } else {
// //           // INACTIVE STATE (Dim grid)
// //           ctx.fillStyle = "rgba(30, 58, 138, 0.15)"; // Very faint slate blue
// //           ctx.shadowBlur = 0;
// //         }

// //         ctx.fill();
// //         ctx.shadowBlur = 0; // Reset for next dot
// //       });

// //       animationFrameId = requestAnimationFrame(render);
// //     };

// //     // Run
// //     init();
// //     render();

// //     // Handle Resize
// //     const handleResize = () => {
// //       init();
// //     };
// //     window.addEventListener("resize", handleResize);

// //     return () => {
// //       window.removeEventListener("resize", handleResize);
// //       cancelAnimationFrame(animationFrameId);
// //     };
// //   }, []);

// //   return (
// //     <div
// //       ref={containerRef}
// //       className={`absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden ${className || ""}`}
// //       style={{ zIndex: 0 }}
// //     >
// //       <div
// //         className='relative flex items-center justify-center'
// //         style={{
// //           width: "100%",
// //           height: "100%",
// //           // This creates the "Floor" perspective
// //           transform: "perspective(1000px) rotateX(60deg) scale(1.5)",
// //           transformStyle: "preserve-3d",
// //         }}
// //       >
// //         {/* The Canvas handles the dots and levitation */}
// //         <canvas
// //           ref={canvasRef}
// //           className='absolute w-full h-full'
// //           style={{ width: "100%", height: "100%" }}
// //         />

// //         {/* The Ambient "Snake Beam" Glow (Soft gradient underneath dots) */}
// //         {/* We keep this CSS layer to give the 'atmosphere' while canvas does the physics */}
// //         <div
// //           className='absolute top-[50%] left-[50%] h-[200vmax] w-[200vmax] animate-spin-very-slow opacity-40'
// //           style={{
// //             transform: "translate(-50%, -50%)",
// //             background:
// //               "conic-gradient(from 0deg, transparent 0deg, transparent 320deg, rgba(59, 130, 246, 0) 330deg, rgba(59, 130, 246, 0.4) 350deg, rgba(255, 255, 255, 0.6) 360deg)",
// //             filter: "blur(60px)",
// //           }}
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default ResonantBackground;

// "use client";

// import React, { useEffect, useRef } from "react";

// interface ResonantBackgroundProps {
//   className?: string;
// }

// const ResonantBackground: React.FC<ResonantBackgroundProps> = ({
//   className,
// }) => {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);

//   // --- Configuration ---
//   const SPACING = 30;
//   const RADIUS = 650;
//   const BEAM_WIDTH = Math.PI / 8;
//   const ROTATION_SPEED = 0.003;
//   const LEVITATION_HEIGHT = 60; // INCREASED: More dramatic height
//   const MOUSE_RADIUS = 350; // INCREASED: Larger interaction area
//   const MOUSE_FORCE = 1.2; // INCREASED: Stronger push

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     let animationFrameId: number;
//     let beamAngle = 0;

//     // Mouse state
//     const mouse = { x: -9999, y: -9999, isActive: false };

//     // Point Cloud Data
//     let points: {
//       x: number;
//       y: number;
//       originX: number;
//       originY: number;
//       z: number;
//       angle: number;
//       dist: number;
//     }[] = [];

//     // --- Initialization ---
//     const init = () => {
//       const dpr = window.devicePixelRatio || 1;
//       const rect = canvas.getBoundingClientRect();
//       canvas.width = rect.width * dpr;
//       canvas.height = rect.height * dpr;
//       ctx.scale(dpr, dpr);

//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;

//       points = [];

//       const cols = Math.floor((RADIUS * 2) / SPACING);
//       const rows = Math.floor((RADIUS * 2) / SPACING);

//       for (let i = 0; i <= cols; i++) {
//         for (let j = 0; j <= rows; j++) {
//           const xOffset = i * SPACING - RADIUS;
//           const yOffset = j * SPACING - RADIUS;
//           const dist = Math.sqrt(xOffset * xOffset + yOffset * yOffset);

//           if (dist <= RADIUS) {
//             const x = centerX + xOffset;
//             const y = centerY + yOffset;
//             const angle = Math.atan2(yOffset, xOffset);

//             points.push({
//               x,
//               y,
//               originX: x,
//               originY: y,
//               z: 0,
//               angle,
//               dist,
//             });
//           }
//         }
//       }
//     };

//     const getAngularDistance = (a1: number, a2: number) => {
//       let diff = Math.abs(a1 - a2) % (Math.PI * 2);
//       return diff > Math.PI ? Math.PI * 2 - diff : diff;
//     };

//     // --- Render Loop ---
//     const render = () => {
//       const rect = canvas.getBoundingClientRect();
//       ctx.clearRect(0, 0, rect.width, rect.height);

//       beamAngle = (beamAngle + ROTATION_SPEED) % (Math.PI * 2);
//       const normalizedBeamAngle =
//         beamAngle > Math.PI ? beamAngle - Math.PI * 2 : beamAngle;

//       points.forEach((point) => {
//         // 1. Beam Physics
//         const angleDist = getAngularDistance(point.angle, normalizedBeamAngle);
//         let beamIntensity = 0;
//         if (angleDist < BEAM_WIDTH) {
//           beamIntensity = 1 - angleDist / BEAM_WIDTH;
//           beamIntensity =
//             beamIntensity * beamIntensity * (3 - 2 * beamIntensity);
//         }

//         // 2. Mouse Physics
//         let mouseIntensity = 0;
//         if (mouse.isActive) {
//           const dx = mouse.x - point.x;
//           const dy = mouse.y - point.y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
//           if (dist < MOUSE_RADIUS) {
//             mouseIntensity = 1 - dist / MOUSE_RADIUS;
//             mouseIntensity = Math.pow(mouseIntensity, 2) * MOUSE_FORCE;
//           }
//         }

//         // 3. Target Height
//         const targetZ =
//           beamIntensity * LEVITATION_HEIGHT +
//           mouseIntensity * LEVITATION_HEIGHT * 1.5;
//         point.z += (targetZ - point.z) * 0.1;

//         // 4. Draw
//         const visualY = point.originY - point.z;
//         const scale = 1 + (point.z / LEVITATION_HEIGHT) * 1.5; // INCREASED scale for impact

//         ctx.beginPath();
//         // Base size increased slightly for visibility
//         ctx.arc(point.x, visualY, 2.5 * scale, 0, Math.PI * 2);

//         // --- NEW VIBRANT COLOR LOGIC ---
//         if (point.z > 2) {
//           const isMouseDriven = mouseIntensity > 0.1;
//           const alpha = 0.4 + (point.z / LEVITATION_HEIGHT) * 0.6; // Higher base alpha

//           if (isMouseDriven) {
//             // MOUSE: Electric Cyan + White Hot Center
//             ctx.fillStyle = `rgba(180, 255, 255, ${alpha})`;

//             // Stronger Glow
//             if (point.z > 15) {
//               ctx.shadowBlur = 20; // More glow
//               ctx.shadowColor = "rgba(0, 255, 255, 0.8)"; // Neon Cyan
//             }
//           } else {
//             // BEAM: Deep Indigo to Violet Gradient (Simulated)
//             // This contrasts beautifully with the light blue background
//             ctx.fillStyle = `rgba(99, 102, 241, ${alpha})`; // Indigo-500

//             if (point.z > 15) {
//               ctx.shadowBlur = 15;
//               ctx.shadowColor = "rgba(79, 70, 229, 0.6)"; // Violet Glow
//             }
//           }
//         } else {
//           // RESTING STATE: Much more visible now
//           // Using a darker blue-grey to stand out against the light bg
//           ctx.fillStyle = "rgba(71, 85, 105, 0.3)"; // Slate-600 with 30% opacity
//           ctx.shadowBlur = 0;
//         }

//         ctx.fill();
//         ctx.shadowBlur = 0;
//       });

//       animationFrameId = requestAnimationFrame(render);
//     };

//     init();
//     render();

//     // Event Listeners
//     const handleResize = () => init();

//     const handleMouseMove = (e: MouseEvent) => {
//       if (!containerRef.current || !canvasRef.current) return;
//       const rect = canvasRef.current.getBoundingClientRect();
//       const x = (e.clientX - rect.left) * (window.devicePixelRatio || 1);
//       const y = (e.clientY - rect.top) * (window.devicePixelRatio || 1);

//       mouse.x = x;
//       mouse.y = y;
//       mouse.isActive = true;
//     };

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("mousemove", handleMouseMove);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("mousemove", handleMouseMove);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className={`absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden ${className || ""}`}
//       style={{ zIndex: 0 }}
//     >
//       <div
//         className='relative flex items-center justify-center'
//         style={{
//           width: "100%",
//           height: "100%",
//           transform: "perspective(1000px) rotateX(60deg) scale(1.5)",
//           transformStyle: "preserve-3d",
//         }}
//       >
//         <canvas
//           ref={canvasRef}
//           className='absolute w-full h-full'
//           style={{ width: "100%", height: "100%" }}
//         />

//         {/* Updated Ambient Glow: Stronger colors */}
//         <div
//           className='absolute top-[50%] left-[50%] h-[200vmax] w-[200vmax] animate-spin-very-slow opacity-50'
//           style={{
//             transform: "translate(-50%, -50%)",
//             background:
//               "conic-gradient(from 0deg, transparent 0deg, transparent 320deg, rgba(99, 102, 241, 0) 330deg, rgba(99, 102, 241, 0.5) 350deg, rgba(255, 255, 255, 0.8) 360deg)",
//             filter: "blur(60px)",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ResonantBackground;

"use client";

import React, { useEffect, useRef } from "react";

interface ResonantBackgroundProps {
  className?: string;
}

const ResonantBackground: React.FC<ResonantBackgroundProps> = ({
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Configuration ---
  const SPACING = 35; // Slightly wider spacing for a cleaner look
  const RADIUS = 800; // Wider coverage
  const BEAM_WIDTH = Math.PI / 6;
  const ROTATION_SPEED = 0.002; // Slower, more elegant rotation
  const LEVITATION_HEIGHT = 50;
  const MOUSE_RADIUS = 400;
  const MOUSE_FORCE = 1.5;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let beamAngle = 0;
    const mouse = { x: -9999, y: -9999, isActive: false };

    // Point Cloud Data
    let points: {
      x: number;
      y: number;
      originX: number;
      originY: number;
      z: number;
      angle: number;
      dist: number;
    }[] = [];

    const init = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      points = [];
      // Create a grid, but filter by circle
      const cols = Math.floor((RADIUS * 2) / SPACING);
      const rows = Math.floor((RADIUS * 2) / SPACING);

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const xOffset = i * SPACING - RADIUS;
          const yOffset = j * SPACING - RADIUS;
          const dist = Math.sqrt(xOffset * xOffset + yOffset * yOffset);

          if (dist <= RADIUS) {
            const x = centerX + xOffset;
            const y = centerY + yOffset;
            const angle = Math.atan2(yOffset, xOffset);

            points.push({
              x,
              y,
              originX: x,
              originY: y,
              z: 0,
              angle,
              dist,
            });
          }
        }
      }
    };

    const getAngularDistance = (a1: number, a2: number) => {
      let diff = Math.abs(a1 - a2) % (Math.PI * 2);
      return diff > Math.PI ? Math.PI * 2 - diff : diff;
    };

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      beamAngle = (beamAngle + ROTATION_SPEED) % (Math.PI * 2);
      const normalizedBeamAngle =
        beamAngle > Math.PI ? beamAngle - Math.PI * 2 : beamAngle;

      points.forEach((point) => {
        // 1. Beam Physics
        const angleDist = getAngularDistance(point.angle, normalizedBeamAngle);
        let beamIntensity = 0;
        if (angleDist < BEAM_WIDTH) {
          beamIntensity = 1 - angleDist / BEAM_WIDTH;
          // Smooth ease curve
          beamIntensity =
            beamIntensity * beamIntensity * (3 - 2 * beamIntensity);
        }

        // 2. Mouse Physics
        let mouseIntensity = 0;
        if (mouse.isActive) {
          const dx = mouse.x - point.x;
          const dy = mouse.y - point.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS) {
            mouseIntensity = 1 - dist / MOUSE_RADIUS;
            mouseIntensity = Math.pow(mouseIntensity, 2) * MOUSE_FORCE;
          }
        }

        // 3. Target Height
        const targetZ =
          beamIntensity * LEVITATION_HEIGHT +
          mouseIntensity * LEVITATION_HEIGHT * 1.8;

        // Linear interpolation for smooth movement
        point.z += (targetZ - point.z) * 0.08;

        // 4. Draw
        const visualY = point.originY - point.z;

        // Scale logic: higher = larger
        const scale = 1 + (point.z / LEVITATION_HEIGHT) * 1.2;

        ctx.beginPath();
        ctx.arc(point.x, visualY, 2 * scale, 0, Math.PI * 2);

        // --- COLOR PALETTE: ICY / GLASS THEME ---

        if (point.z > 2) {
          const isMouseDriven = mouseIntensity > 0.1;
          const alpha = 0.3 + (point.z / LEVITATION_HEIGHT) * 0.7;

          if (isMouseDriven) {
            // MOUSE INTERACTION: Deep Blue / Slate Ripple
            // Matches the "Secondary Button" hover states or text color
            ctx.fillStyle = `rgba(30, 58, 138, ${alpha})`; // Blue-900

            if (point.z > 15) {
              ctx.shadowBlur = 10;
              ctx.shadowColor = "rgba(147, 197, 253, 0.5)"; // Blue-300 glow
            }
          } else {
            // AUTOMATIC BEAM: Pure White / Cyan Highlight
            // Looks like light hitting glass
            ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;

            if (point.z > 10) {
              ctx.shadowBlur = 15;
              ctx.shadowColor = "rgba(255, 255, 255, 0.8)"; // White Glow
            }
          }
        } else {
          // RESTING STATE: Subtle Grid
          // Matches the Hero's repeating-radial-gradient
          ctx.fillStyle = "rgba(59, 130, 246, 0.15)"; // Blue-500 very low opacity
          ctx.shadowBlur = 0;
        }

        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      });

      animationFrameId = requestAnimationFrame(render);
    };

    init();
    render();

    const handleResize = () => init();
    const handleMouseMove = (e: MouseEvent) => {
      // Need global window coordinates mapped to canvas
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) * (window.devicePixelRatio || 1);
      const y = (e.clientY - rect.top) * (window.devicePixelRatio || 1);
      mouse.x = x;
      mouse.y = y;
      mouse.isActive = true;
    };

    window.addEventListener("resize", handleResize);
    // Attach to window so we can track mouse even if overlaying elements block direct hover
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden ${className || ""}`}
      style={{ zIndex: 0 }}
    >
      <div
        className='relative flex items-center justify-center'
        style={{
          width: "100%",
          height: "100%",
          // Matches the Hero floor perspective
          transform: "perspective(1000px) rotateX(60deg) scale(1.5)",
          transformStyle: "preserve-3d",
        }}
      >
        <canvas ref={canvasRef} className='absolute w-full h-full' />

        {/* Ambient Glow matching the Hero's white/blue theme */}
        <div
          className='absolute top-[50%] left-[50%] h-[150vmax] w-[150vmax] animate-spin-very-slow opacity-30'
          style={{
            transform: "translate(-50%, -50%)",
            background:
              "conic-gradient(from 0deg, transparent 0deg, transparent 320deg, rgba(224, 242, 254, 0) 330deg, rgba(255, 255, 255, 0.4) 350deg, rgba(255, 255, 255, 0.8) 360deg)",
            filter: "blur(50px)",
          }}
        />
      </div>
    </div>
  );
};

export default ResonantBackground;
