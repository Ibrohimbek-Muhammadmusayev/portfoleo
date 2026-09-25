import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Sparkles, Cpu, Terminal, Zap, Atom, 
  Layers, Database, RefreshCw, Network, GitBranch, 
  CheckCircle, Globe, Palette, FileCode, Flame, Box, Send, Cog, Layout
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';

const iconMap = {
  Code2, Sparkles, Cpu, Terminal, Zap, Atom, 
  Layers, Database, RefreshCw, Network, GitBranch, 
  CheckCircle, Globe, Palette, FileCode, Flame, Box, Send, Cog, Figma: Layout
};

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...SKILLS.map(s => s.category)];

  const displayedSkills = selectedCategory === 'All' 
    ? SKILLS.flatMap(c => c.skills)
    : SKILLS.find(c => c.category === selectedCategory)?.skills || [];

  return (
    <section id="skills" className="py-24 px-4 relative z-10 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider mb-4"
        >
          <Zap className="w-3.5 h-3.5 text-yellow-400" />
          <span>Texnologiyalar & Mahorat</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
        >
          Mening <span className="text-gradient">Texnologik Stackim</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 mt-4 text-base sm:text-lg"
        >
          Vibe Coding, AI agentlar, Frontend, Backend, Mobil ilovalar va Telegram botlar bo'yicha kuchli ko'nikmalar to'plami.
        </motion.p>
      </div>

      {/* Category filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                : 'glass text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-white/5'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {displayedSkills.map((skill, index) => {
          const IconComponent = iconMap[skill.icon] || Code2;

          return (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              key={skill.name}
              className="glass-card p-6 rounded-2xl relative overflow-hidden group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:text-indigo-300 transition-all duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-indigo-400 transition-colors">
                  {skill.level}%
                </span>
              </div>

              <h3 className="text-base font-semibold text-white mb-3 group-hover:text-indigo-200 transition-colors">
                {skill.name}
              </h3>

              {/* Progress Bar */}
              <div className="w-full bg-slate-800/80 h-2 rounded-full overflow-hidden p-[1px]">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full"
                />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
