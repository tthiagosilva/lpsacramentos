import React from 'react';
import { ArrowRight, Globe, ShieldCheck } from 'lucide-react';
import { CAJU_LINK } from '../types';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white py-24 px-4 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center space-y-12 relative z-10">
        
        {/* Logo Footer */}
        <div className="bg-white/5 p-6 rounded-3xl backdrop-blur-xl border border-white/10 mb-4 transition-transform hover:rotate-3">
            <Logo className="h-28 w-auto" isFooter />
        </div>

        <div className="space-y-4 text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">
                Prepare seu coração.
            </h2>
            <p className="text-xl md:text-2xl text-slate-400 font-light italic">
                A caminhada para os sacramentos começa aqui.
            </p>
        </div>

        <div className="flex flex-col items-center gap-8 w-full">
           

            <div className="flex flex-wrap justify-center gap-8 text-slate-500 text-sm font-medium uppercase tracking-widest">
                <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" />
                    <span>Inscrições 100% Online</span>
                </div>
                <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Vagas Limitadas</span>
                </div>
            </div>
        </div>
        
        <div className="pt-16 w-full flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/10 mt-12 text-slate-500 text-[10px] tracking-[0.3em] uppercase">
            <div>&copy; 2026 Comunidade CAJU</div>
            <div className="flex gap-6">
                <span className="hover:text-amber-500 transition-colors cursor-default underline decoration-amber-500/30 underline-offset-4">Primeira Eucaristia</span>
                <span className="hover:text-amber-500 transition-colors cursor-default underline decoration-amber-500/30 underline-offset-4">Crisma</span>
            </div>
        </div>
      </div>
    </footer>
  );
};
