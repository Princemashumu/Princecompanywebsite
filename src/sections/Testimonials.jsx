import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper';

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;

  const prev = () => setActive((a) => (a - 1 + total) % total);
  const next = () => setActive((a) => (a + 1) % total);

  const t = testimonials[active];

  return (
    <SectionWrapper id="testimonials" className="bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What People Say"
          subtitle="Feedback from colleagues, managers, and clients I've had the pleasure of working with."
        />

        <div className="relative">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 p-8 sm:p-12 text-center relative"
          >
            {/* Quote icon */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cyan-600 flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Quote size={18} className="text-white" fill="white" />
            </div>

            <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed italic mt-4">
              "{t.quote}"
            </p>

            <div className="mt-8 flex flex-col items-center gap-2">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-12 h-12 rounded-full border-2 border-cyan-400 object-cover"
              />
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">{t.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
              </div>
            </div>
          </motion.div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all rounded-full ${
                    i === active
                      ? 'w-6 h-2.5 bg-cyan-600'
                      : 'w-2.5 h-2.5 bg-slate-300 dark:bg-slate-600 hover:bg-cyan-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:border-cyan-400 dark:hover:border-cyan-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
