import React from 'react';
import { AlertCircle } from 'lucide-react';

export const Rules: React.FC = () => {
  return (
    <section className="py-12 px-4 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-4 bg-white/10 rounded-full mb-6">
            <AlertCircle className="w-8 h-8 text-amber-400" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Regras Importantes</h2>
        <div className="grid md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <p className="font-semibold text-lg text-amber-400 mb-2">01. Sem Reservas</p>
                <p className="text-slate-300">Não serão feitas reservas de vagas sob nenhuma hipótese.</p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
                <p className="font-semibold text-lg text-amber-400 mb-2">02. Ordem de Inscrição</p>
                <p className="text-slate-300">As vagas serão preenchidas estritamente por ordem de inscrição no site.</p>
            </div>
        </div>
      </div>
    </section>
  );
};