import { motion } from 'framer-motion';
import { skillGroups } from '../data/skills';
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper';

function SkillBar({ name, level, delay }) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{name}</span>
        <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400">{level}%</span>
      </div>
      <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay }}
          className="h-full bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-full"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper
      id="skills"
      className="bg-slate-50 dark:bg-slate-950"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Skills"
          title="My Technical Toolkit"
          subtitle="Technologies I use daily to design, build, and ship products."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gi * 0.12 }}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-cyan-300 dark:hover:border-cyan-600 transition-colors"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-6 pb-3 border-b border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500" />
                {group.category}
              </h3>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={gi * 0.1 + si * 0.08}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
