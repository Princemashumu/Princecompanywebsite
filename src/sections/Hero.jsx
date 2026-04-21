import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons';

const TITLES = [
  'Software Engineer',
  'Full Stack Developer',
  'Cross-Platform Developer',
  'React & Node.js Engineer',
];

function useTypingEffect(texts, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [idx, setIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[idx];
    let timeout;

    if (!deleting && charIdx <= current.length) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx));
        setCharIdx((c) => c + 1);
      }, speed);
    } else if (!deleting && charIdx > current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplay(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, speed / 2);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, idx, texts, speed, pause]);

  return display;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const typedTitle = useTypingEffect(TITLES);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-cyan-50/30 to-white dark:from-slate-950 dark:via-cyan-950/20 dark:to-slate-900">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-400/10 dark:bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-700 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white tracking-tight leading-none"
          >
            Hi, I'm{' '}
            <span className="text-cyan-600 dark:text-cyan-400">Prince</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-4 h-10 flex items-center"
          >
            <span className="text-xl sm:text-2xl font-mono text-slate-500 dark:text-slate-400">
              &lt;{typedTitle}
              <span className="animate-pulse">|</span>&gt;
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed"
          >
            Full Stack Software Engineer based in Johannesburg, South Africa. I build
            cross-platform web and mobile applications — from concept to deployment.
            2+ years of professional experience across startups and tech organisations.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-cyan-600/25"
            >
              View My Work
              <ChevronRight size={16} />
            </button>
            <a
              href="https://1drv.ms/b/c/c29be3c60d57f1f4/IQBfnIl8SO1gSYZWkhHdQ2TcAa0PSbmYe37RrRQLMFVO6k8?e=uvB3Bs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:scale-[1.02]"
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/Princemashumu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/prince-ngwako-mashumu-77977924b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all"
            >
              <LinkedinIcon size={20} />
            </a>
            <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700 max-w-[80px]" />
            <span className="text-xs text-slate-400 dark:text-slate-500">2+ years exp.</span>
          </motion.div>
        </motion.div>

        {/* Right: Visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative w-80 h-80">
            {/* Profile photo */}
            <div className="w-full h-full rounded-3xl border-2 border-cyan-200 dark:border-cyan-700 overflow-hidden shadow-2xl shadow-cyan-500/20">
              <img
                src="/profile.jpeg"
                alt="Prince Ngwako Mashumu"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating stats cards */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 shadow-lg"
            >
              <p className="text-xs text-slate-500 dark:text-slate-400">Projects Shipped</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">10+</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl px-4 py-3 shadow-lg"
            >
              <p className="text-xs text-slate-500 dark:text-slate-400">Years of Experience</p>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">2+</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 dark:text-slate-500"
      >
        <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
