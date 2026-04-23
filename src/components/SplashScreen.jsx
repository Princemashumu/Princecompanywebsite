import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ onDone }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
    }, 2500);
    return () => clearTimeout(t);
  }, []);

  // Animated background particles
  const particles = Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    delay: i * 0.1,
  }));

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-30">
            {/* Top gradient orb */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.5, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 blur-3xl"
            />
            
            {/* Bottom gradient orb */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 blur-3xl"
            />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute w-1 h-1 rounded-full bg-cyan-400"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0,
                }}
                animate={{
                  y: [0, -100, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  delay: particle.delay,
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            {/* Logo mark with animation */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotateZ: -180 }}
              animate={{ scale: 1, opacity: 1, rotateZ: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative mb-8"
            >
              <motion.div
                animate={{ rotateZ: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-600/20 blur-lg"
              />
              
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                <motion.span
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-white font-extrabold text-3xl tracking-tight select-none"
                >
                  PM
                </motion.span>
              </div>
            </motion.div>

            {/* Name with staggered animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-center"
            >
              <motion.p className="text-white font-extrabold text-3xl tracking-tight">
                Prince
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.65 }}
                  className="text-cyan-400"
                >
                  {' '}Mashumu
                </motion.span>
              </motion.p>
            </motion.div>

            {/* Title */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              className="text-cyan-400 text-sm font-semibold mt-2 tracking-widest uppercase"
            >
              Full Stack Software Engineer
            </motion.p>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
              className="text-slate-400 text-xs mt-4 tracking-wide"
            >
              Building impactful digital experiences
            </motion.p>

            {/* Advanced loading bar */}
            <motion.div
              className="mt-12 flex items-center gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
            >
              <motion.div
                className="w-48 h-1 bg-slate-800/50 rounded-full overflow-hidden border border-slate-700/50"
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full"
                  initial={{ width: '0%', boxShadow: 'none' }}
                  animate={{
                    width: '100%',
                    boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
                  }}
                  transition={{ delay: 1.3, duration: 1.2, ease: 'easeInOut' }}
                />
              </motion.div>
              <motion.span
                className="text-cyan-400 text-xs font-semibold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Loading
              </motion.span>
            </motion.div>

            {/* Decorative dots */}
            <motion.div
              className="flex gap-2 mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-cyan-400/60"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{
                    delay: 1.3 + i * 0.15,
                    duration: 1,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
