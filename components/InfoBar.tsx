import React from 'react';
import { Info } from 'lucide-react';

export const InfoBar: React.FC = () => {
  return (
    <section className="bg-slate-100 py-10 px-4 border-b border-slate-200">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4 text-center md:text-left bg-white p-6 rounded-lg shadow-sm">
        <div className="p-3 bg-blue-100 rounded-full shrink-0">
          <Info className="w-8 h-8 text-blue-600" />
        </div>
        <p className="text-slate-700 text-lg leading-relaxed">
          No site, você terá acesso a todas as orientações detalhadas, cronogramas e requisitos específicos antes de efetivar sua inscrição. Leia tudo com atenção.
        </p>
      </div>
    </section>
  );
};