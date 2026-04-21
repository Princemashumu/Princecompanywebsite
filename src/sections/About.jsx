import { motion } from 'framer-motion';
import { Code2, Zap, Users, Coffee, GraduationCap, BookOpen } from 'lucide-react';
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper';
import { education } from '../data/education';

const highlights = [
  { icon: Code2, label: 'Clean Code', desc: 'Readable, maintainable, and well-tested.' },
  { icon: Zap, label: 'Performance', desc: 'Optimized for speed and Core Web Vitals.' },
  { icon: Users, label: 'Collaboration', desc: 'Agile teams, great communicator.' },
  { icon: Coffee, label: 'Dedication', desc: '2+ years of consistent shipping.' },
];

export default function About() {
  return (
    <SectionWrapper
      id="about"
      className="bg-white dark:bg-slate-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Me"
          title="Turning Ideas Into Products"
          subtitle="I'm a software engineer based in Johannesburg, South Africa, passionate about building impactful cross-platform digital experiences."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            <p>
              I'm <span className="font-semibold text-slate-900 dark:text-white">Prince Ngwako Mashumu</span>, a Full Stack Software Engineer
              with 2+ years of professional experience building cross-platform web and mobile applications.
              I currently work at <span className="font-semibold text-slate-900 dark:text-white">TOBUN PROFESSIONALS</span> in Bryanston,
              where I architect and deliver scalable software solutions across the full stack.
            </p>
            <p>
              My journey spans roles at mLab Southern Africa — where I built websites and mobile apps
              for community organisations — to dynamic startup environments. I hold a
              <span className="font-semibold text-slate-900 dark:text-white"> Diploma in Information Technology (Software Development)</span> from
              Tshwane University of Technology.
            </p>
            <p>
              I'm passionate about <span className="font-semibold text-slate-900 dark:text-white">clean code, cross-platform development</span>, and
              mentoring the next generation of African tech talent.
            </p>

            {/* Quick facts */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                ['Location', 'Soweto, Jhb 🇿🇦'],
                ['Experience', '2+ Years'],
                ['Availability', 'Open to work'],
                ['Education', 'Dip. IT — TUT'],
              ].map(([key, val]) => (
                <div key={key}>
                  <p className="text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                    {key}
                  </p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-0.5">
                    {val}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group p-5 rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 hover:border-cyan-400 dark:hover:border-cyan-500 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all"
                >
                  <div className="mb-3 w-10 h-10 rounded-xl bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                    <Icon size={20} className="text-cyan-600 dark:text-cyan-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white text-sm">{label}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Education cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-3"
            >
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-2">
                <GraduationCap size={14} /> Education
              </h3>
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="flex items-start gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50"
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-900/40 flex items-center justify-center shrink-0 mt-0.5">
                    <BookOpen size={14} className="text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white leading-tight">
                      {edu.degree}
                    </p>
                    <p className="text-xs text-cyan-600 dark:text-cyan-400 font-medium mt-0.5">
                      {edu.field}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      {edu.institution} &middot; {edu.start}–{edu.end}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
