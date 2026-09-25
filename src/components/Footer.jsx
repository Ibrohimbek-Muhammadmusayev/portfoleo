import React from 'react';
import { Heart, Sparkles, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/5 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center font-bold text-white text-sm">
            I
          </div>
          <span className="font-semibold text-slate-200">
            {PERSONAL_INFO.name} <span className="text-slate-500">| Frontend Engineering</span>
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-400">
          <span>O'zbekistonda</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          <span>va React bilan tayyorlangan. &copy; {new Date().getFullYear()}</span>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-400">
          <a href="#hero" className="hover:text-indigo-400 transition-colors">Bosh sahifa</a>
          <a href="#skills" className="hover:text-indigo-400 transition-colors">Ko'nikmalar</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors">Loyihalar</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">Aloqa</a>
        </div>
      </div>
    </footer>
  );
};
