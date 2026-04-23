import { motion } from 'framer-motion';
import { Code2, Zap, Users, Sparkles, GraduationCap, BookOpen, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import SectionWrapper, { SectionHeading } from '../components/SectionWrapper';
import { education } from '../data/education';

const highlights = [
  { icon: Code2, label: 'Clean Code', desc: 'Readable, maintainable, and well-tested.', color: 'from-blue-500 to-cyan-500' },
  { icon: Zap, label: 'Performance', desc: 'Optimized for speed and Core Web Vitals.', color: 'from-yellow-500 to-orange-500' },
  { icon: Users, label: 'Collaboration', desc: 'Agile teams, great communicator.', color: 'from-purple-500 to-pink-500' },
  { icon: Sparkles, label: 'Innovation', desc: 'Always learning and adapting.', color: 'from-green-500 to-emerald-500' },
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
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
            className="space-y-6"
          >
            {/* Main Bio */}
            <div className="space-y-4">
              <motion.p 
                className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                I'm <span className="font-bold bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 bg-clip-text text-transparent">Prince Ngwako Mashumu</span>, a Full Stack Software Engineer with 2+ years of professional experience building cross-platform web and mobile applications.
              </motion.p>
              <motion.p 
                className="text-slate-600 dark:text-slate-400 leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                I currently work at <span className="font-semibold text-slate-900 dark:text-white">TOBUN PROFESSIONALS</span> in Bryanston, where I architect and deliver scalable software solutions across the full stack.
              </motion.p>
            </div>

            {/* Journey Timeline */}
            <motion.div 
              className="space-y-4 pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <motion.h3 
                className="text-sm font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-2 cursor-default"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles size={14} />
                </motion.div>
                My Journey
              </motion.h3>
              <div className="space-y-3">
                {[
                  { title: 'mLab Southern Africa', desc: 'Built websites & mobile apps for community orgs' },
                  { title: 'Startup Environments', desc: 'Delivered dynamic solutions in fast-paced teams' },
                  { title: 'Education', desc: 'Dip. IT (Software Dev) from Tshwane University' },
                  { title: 'Current Focus', desc: 'Mentoring African tech talent & clean code' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
                    whileHover={{ x: 8 }}
                    className="flex gap-3 group cursor-pointer hover:cursor-pointer"
                  >
                    <motion.div 
                      className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mt-2"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    />
                    <div>
                      <motion.p 
                        className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors"
                        whileHover={{ x: 4 }}
                      >
                        {item.title}
                      </motion.p>
                      <motion.p 
                        className="text-xs text-slate-500 dark:text-slate-400"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {item.desc}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Facts Grid */}
            <motion.div 
              className="grid grid-cols-2 gap-3 pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.65, duration: 0.6 }}
            >
              {[
                ['Location', 'Soweto, Jhb 🇿🇦'],
                ['Experience', '2+ Years'],
                ['Availability', 'Open to work'],
                ['Education', 'Dip. IT — TUT'],
              ].map(([key, val], i) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.65 + i * 0.08, type: 'spring', stiffness: 200 }}
                  whileHover={{ y: -4, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                  className="p-3 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-900/50 border border-slate-200/50 dark:border-slate-700/50 hover:border-cyan-400 dark:hover:border-cyan-500 transition-colors cursor-pointer hover:cursor-pointer"
                >
                  <motion.p 
                    className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-400"
                    initial={{ opacity: 0.7 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                  >
                    {key}
                  </motion.p>
                  <motion.p 
                    className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1"
                    initial={{ y: 0 }}
                    whileHover={{ y: -2 }}
                  >
                    {val}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Highlights & Education */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
          >
            {/* Highlight Cards */}
            <motion.div className="space-y-3 cursor-pointer">
              <div className="grid grid-cols-2 gap-4">
                {highlights.map(({ icon: Icon, label, desc, color }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 30, rotateX: -20 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12, type: 'spring', stiffness: 120 }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
                      rotateY: 5,
                    }}
                    className="group relative p-5 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-br from-white/80 to-slate-50/80 dark:from-slate-800/50 dark:to-slate-900/50 hover:border-transparent transition-all duration-300 overflow-hidden cursor-pointer hover:cursor-pointer"
                  >
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className={`mb-3 w-10 h-10 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <motion.div
                          animate={{ rotateZ: -5 }}
                          transition={{ duration: 3, repeat: Infinity, type: 'spring' }}
                        >
                          <Icon size={20} className="text-white" />
                        </motion.div>
                      </motion.div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm">{label}</h3>
                      <motion.p 
                        className="text-xs text-slate-500 dark:text-slate-400 mt-1"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {desc}
                      </motion.p>
                    </div>

                    <motion.div
                      className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                      initial={{ x: 10, opacity: 0 }}
                      whileHover={{ x: 0, opacity: 1 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <ArrowRight size={14} className="text-slate-400 dark:text-slate-500" />
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5, type: 'spring', stiffness: 100 }}
              className="space-y-3"
            >
              <motion.h3 
                className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 flex items-center gap-2 cursor-default"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.55, duration: 0.5 }}
              >
                <motion.div
                  animate={{ rotate: [0, -20, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <GraduationCap size={14} />
                </motion.div>
                Education
              </motion.h3>
              {education.map((edu, i) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1, type: 'spring', stiffness: 150 }}
                  whileHover={{ 
                    x: 8,
                    boxShadow: '0 10px 30px rgba(6, 182, 212, 0.15)',
                  }}
                  className="group relative flex items-start gap-3 p-4 rounded-xl border border-slate-200/50 dark:border-slate-700/50 bg-gradient-to-r from-slate-50/80 to-blue-50/50 dark:from-slate-800/30 dark:to-blue-900/20 hover:border-cyan-400 dark:hover:border-cyan-500 transition-all duration-300 overflow-hidden cursor-pointer hover:cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <motion.div 
                    className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center shrink-0 mt-0.5"
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <BookOpen size={14} className="text-white" />
                  </motion.div>
                  <div className="relative z-10">
                    <motion.p 
                      className="text-sm font-bold text-slate-900 dark:text-white leading-tight"
                      initial={{ opacity: 0.9 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {edu.degree}
                    </motion.p>
                    <motion.p 
                      className="text-xs text-cyan-600 dark:text-cyan-400 font-semibold mt-0.5"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      {edu.field}
                    </motion.p>
                    <motion.p 
                      className="text-xs text-slate-500 dark:text-slate-400 mt-0.5"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {edu.institution} &middot; {edu.start}–{edu.end}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
