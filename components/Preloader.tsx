import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  // SVG Path Data (Letters)
  const letters = [
    { d: "M0.0 -18.35C0.0 -18.35 17.48 -36.44 28.24 -31.24C28.32 -31.52 30.96 -29.88 28.68 -23.56C28.68 -23.56 32.76 -32.2 24.48 -31.84C22.24 -31.76 7.4 -28.08 -2.4 -9.08C-2.4 -9.08 -5.64 0.0 0.76 0.0C1.76 0.0 3.0 -0.36 4.56 -0.88C5.32 -1.12 12.24 -4.56 19.92 -13.12C28.8 -23.04 30.8 -25.0 36.16 -30.96C35.68 -31.08 16.64 -7.4 17.04 -2.84C17.04 -2.84 16.76 -0.04 20.0 0.0C21.12 0.0 22.76 -0.16 24.92 -1.16C24.92 -1.16 34.0 -5.59 44.16 -18.35", x: 0 },
    { d: "M0.0 -18.35C0.0 -18.35 17.48 -36.44 28.24 -31.24C28.32 -31.52 30.96 -29.88 28.68 -23.56C28.68 -23.56 32.76 -32.2 24.48 -31.84C22.24 -31.76 7.4 -28.08 -2.4 -9.08C-2.4 -9.08 -5.64 0.0 0.76 0.0C1.76 0.0 3.0 -0.36 4.56 -0.88C5.32 -1.12 12.24 -4.56 19.92 -13.12C28.8 -23.04 30.8 -25.0 36.16 -30.96C35.68 -31.08 16.64 -7.4 17.04 -2.84C17.04 -2.84 16.76 -0.04 20.0 0.0C21.12 0.0 22.76 -0.16 24.92 -1.16C24.92 -1.16 34.0 -5.59 44.16 -18.35", x: 44.16 },
    { d: "M0.0 -18.35C0.0 -18.35 14.8 -31.36 14.8 -31.36C14.8 -31.36 -1.16 -15.88 -5.68 -5.52C-5.68 -5.52 -9.04 3.56 4.04 -1.28C4.04 -1.28 11.2 -2.64 22.88 -14.64C30.56 -22.56 29.4 -21.68 38.32 -31.16C29.48 -22.0 -5.96 41.48 -29.04 38.32C-38.4 37.0 -22.88 21.96 1.56 14.28C10.32 11.52 24.32 4.48 32.48 -4.28C40.68 -13.08 44.68 -17.91 44.6 -18.35", x: 88.32 },
    { d: "M0.0 -18.35C0.0 -18.35 13.44 -31.64 13.44 -31.64C13.44 -31.64 0.96 -18.16 -5.36 -8.28C-6.4 -6.68 -8.4 0.04 -2.0 0.0C9.84 0.64 28.48 -25.76 35.72 -31.72C37.0 -32.76 16.92 -10.96 15.92 -5.2C15.88 -4.92 14.92 -0.12 19.16 0.0C20.4 0.04 22.0 -0.2 24.2 -1.16C26.84 -2.28 33.96 -6.99 43.56 -18.35", x: 132.92 },
    { d: "M0.0 -18.35C0.0 -18.35 8.06 -28.47 12.87 -33.49C14.11 -34.77 15.85 -35.21 16.81 -37.12C17.41 -38.33 14.82 -39.49 14.17 -34.86C14.17 -34.86 12.76 -31.79 12.91 -16.41C13.03 -5.03 3.69 1.61 -4.51 -0.06C-4.51 -0.06 -16.85 -1.22 -9.02 -9.71C-7.12 -11.77 -4.62 -11.29 -4.2 -11.11C-3.61 -10.86 -3.85 -8.59 -6.82 -9.4M11.57 -9.22C11.57 -9.22 15.83 -8.34 17.05 -8.65C19.11 -9.17 22.69 -10.47 29.3 -18.35", x: 176.48 },
    { d: "M0.0 -18.35C0.0 -18.35 42.68 -75.44 42.68 -75.44C42.68 -75.44 -8.32 -1.48 -8.32 -1.48C-5.4 -3.6 7.64 -18.88 18.16 -27.08C28.52 -35.8 39.68 -33.6 26.88 -18.44C24.88 -16.12 21.68 -13.16 18.56 -8.84C9.0 4.48 25.36 1.8 34.92 -7.32C40.08 -12.8 42.16 -15.35 44.64 -18.35", x: 205.78 }
  ];

  return (
    <motion.div
      // This handles the Exit Animation (Fade out when loading finishes)
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.8, ease: "easeInOut" } }}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#0a0a0a', // Matched to bg-dark-900 for seamless blend
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      <svg 
        viewBox="0 0 260 250" 
        style={{ width: '80vmin', maxWidth: '900px', height: 'auto' }}
      >
        {/* DEFINE THE GRADIENT COLOR */}
        <defs>
          <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            {/* You can change these hex codes to match your portfolio colors */}
            <stop offset="0%" stopColor="#00C6FF" />  {/* Cyan */}
            <stop offset="50%" stopColor="#0072FF" />  {/* Blue */}
            <stop offset="100%" stopColor="#d400d4" /> {/* Neon Pink */}
          </linearGradient>
        </defs>

        <g transform="translate(5, 120)">
          {letters.map((letter, index) => (
            <motion.path
              key={index}
              d={letter.d}
              transform={`translate(${letter.x}, 0)`}
              fill="transparent"
              stroke="url(#brandGradient)" // REFERENCE THE GRADIENT ID
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 1.2,
                delay: index * 0.2, 
                ease: "easeInOut"
              }}
            />
          ))}
          
          {/* The Dot */}
           <motion.circle 
             cx="255" cy="-18" r="2.5" 
             fill="url(#brandGradient)" // Dot gets gradient too
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ delay: 2.5 }} 
          />
        </g>
      </svg>
    </motion.div>
  );
};

export default Preloader;