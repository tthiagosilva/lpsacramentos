import React from 'react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { CAJU_LINK } from '../types';
import { Logo } from './Logo';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[#0a0f1a] text-white overflow-hidden px-4 py-20">
      {/* Elementos Decorativos de Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(194,65,12,0.15),transparent_50%)] z-0" />
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        
        {/* Logo animado */}
        <div className="flex justify-center mb-6">
            <Logo className="h-32 md:h-44 w-auto drop-shadow-[0_0_25px_rgba(212,175,55,0.3)] hover:scale-105 transition-transform duration-700 ease-out" />
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-extrabold leading-[1.1] tracking-tight text-white">
            Abertura das <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              Inscrições 2026
            </span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 font-light tracking-wide max-w-2xl mx-auto">
            Caminhada de Iniciação Cristã: <br className="hidden md:block" />
            <span className="text-white font-medium italic">Primeira Eucaristia e Crisma</span>
          </p>
        </div>

        {/* Info Cards com Glassmorphism */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 pt-4">
          <div className="w-full md:w-auto flex items-center gap-4 bg-white/5 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/10 shadow-2xl transition-all hover:bg-white/10">
            <Calendar className="w-10 h-10 text-amber-500" />
            <div className="text-left">
              <p className="text-[10px] text-amber-500/80 uppercase font-bold tracking-[0.2em]">Início em</p>
              <p className="text-2xl font-bold font-sans">12 de Janeiro</p>
            </div>
          </div>
          <div className="w-full md:w-auto flex items-center gap-4 bg-white/5 backdrop-blur-md px-8 py-5 rounded-2xl border border-white/10 shadow-2xl transition-all hover:bg-white/10">
            <Clock className="w-10 h-10 text-amber-500" />
            <div className="text-left">
              <p className="text-[10px] text-amber-500/80 uppercase font-bold tracking-[0.2em]">Horário</p>
              <p className="text-2xl font-bold font-sans">às 12h</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-8 pt-6">
          <div className="text-slate-400 text-sm md:text-lg flex flex-col items-center gap-2">
            <span>Inscrições exclusivamente através do portal</span>
            <span className="text-white font-semibold bg-white/10 px-3 py-1 rounded-md border border-white/5">www.comunidadecaju.com.br</span>
          </div>
        </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <div className="w-1 h-12 rounded-full bg-gradient-to-b from-amber-500 to-transparent"></div>
      </div>
    </section>
  );
};
