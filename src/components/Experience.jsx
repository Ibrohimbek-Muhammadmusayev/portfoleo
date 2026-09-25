import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Award } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 relative z-10 max-w-5xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <Briefcase className="w-3.5 h-3.5 text-blue-400" />
          <span>Faoliyatim</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Ish <span className="text-gradient-cyan">Tajribasi</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 mt-4 text-base sm:text-lg"
        >
          Kompaniyalar, startaplar va xalqaro mijozlar bilan erishilgan amaliy yutuqlar.
        </motion.p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-indigo-500/20 ml-4 sm:ml-32 space-y-12">
        {EXPERIENCES.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-8 sm:pl-10 group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 group-hover:border-pink-500 group-hover:bg-pink-500 transition-all duration-300 shadow-lg shadow-indigo-500/50" />

            {/* Floating Date (Left for large screen) */}
            <div className="sm:absolute sm:-left-36 sm:top-1 text-xs sm:text-sm font-mono text-indigo-400 font-semibold mb-2 sm:mb-0">
              {exp.period}
            </div>

            {/* Card Content */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 relative">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-xs px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium">
                  {exp.company}
                </span>
              </div>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mt-3 mb-5">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900/60 text-slate-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
