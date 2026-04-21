import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function SectionWrapper({ id, children, className = '' }) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={variants}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="text-center mb-14">
      <span className="text-xs font-semibold tracking-widest uppercase text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/30 px-3 py-1 rounded-full">
        {label}
      </span>
      <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
