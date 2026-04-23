import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.classList.contains('cursor-pointer') ||
        target.closest('.cursor-pointer') ||
        target.closest('a') ||
        target.closest('button');

      setIsPointer(!!isClickable);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
        input, textarea, select {
          cursor: text !important;
        }
      `}</style>

      {/* Main cursor dot */}
      <motion.div
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        className={`fixed w-4 h-4 rounded-full pointer-events-none z-[9998] transition-colors duration-200 ${
          isPointer
            ? 'bg-cyan-500 shadow-lg shadow-cyan-500/50'
            : 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/30'
        }`}
        style={{ opacity: isVisible ? 1 : 0 }}
      />

      {/* Outer glow ring */}
      <motion.div
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isPointer ? 2 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 35,
          mass: 1,
        }}
        className="fixed w-10 h-10 rounded-full pointer-events-none z-[9997] border-2 border-cyan-400/50"
        style={{
          opacity: isVisible ? 0.6 : 0,
          boxShadow: isPointer
            ? '0 0 20px rgba(6, 182, 212, 0.6)'
            : '0 0 15px rgba(34, 211, 238, 0.4)',
        }}
      />

      {/* Trail effect - subtle follow circle */}
      <motion.div
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 40,
          mass: 1.5,
        }}
        className="fixed w-3 h-3 rounded-full pointer-events-none z-[9996] bg-cyan-300/40"
        style={{ opacity: isVisible ? 0.5 : 0 }}
      />
    </>
  );
}
