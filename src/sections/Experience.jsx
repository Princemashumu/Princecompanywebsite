import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '../data/experience';
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper';

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Experience"
          title="My Career Journey"
          subtitle="Roles where I've made meaningful impact through quality engineering."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200 dark:bg-slate-700" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-cyan-100 dark:bg-cyan-900/40 border-2 border-cyan-400 dark:border-cyan-500 flex items-center justify-center">
                  <Briefcase size={16} className="text-cyan-600 dark:text-cyan-400" />
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 p-6 hover:border-cyan-300 dark:hover:border-cyan-600 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">
                        {exp.role}
                      </h3>
                      <p className="text-cyan-600 dark:text-cyan-400 font-semibold text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end gap-1 text-xs text-slate-400 dark:text-slate-500 shrink-0">
                      <span className="flex items-center gap-1">
                        <Calendar size={11} />
                        {exp.start} — {exp.end}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={11} />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
