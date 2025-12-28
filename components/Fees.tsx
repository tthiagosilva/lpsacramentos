import React from 'react';
import { CreditCard, Wallet } from 'lucide-react';

export const Fees: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800">Taxas de Inscrição</h2>
          <p className="text-slate-500 mt-2">Investimento para o material e encontros</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-amber-500 text-center transform transition-transform hover:-translate-y-1">
            <h3 className="text-xl font-medium text-slate-500 uppercase tracking-wide mb-4">Primeira Eucaristia</h3>
            <div className="text-5xl font-bold text-slate-800 mb-2">R$ 300<span className="text-2xl text-slate-400">,00</span></div>
            <div className="w-16 h-1 bg-slate-100 mx-auto my-6"></div>
            <p className="text-slate-600">Incluso todo material didático</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-red-500 text-center transform transition-transform hover:-translate-y-1">
            <h3 className="text-xl font-medium text-slate-500 uppercase tracking-wide mb-4">Crisma</h3>
            <div className="text-5xl font-bold text-slate-800 mb-2">R$ 350<span className="text-2xl text-slate-400">,00</span></div>
            <div className="w-16 h-1 bg-slate-100 mx-auto my-6"></div>
            <p className="text-slate-600">Incluso todo material didático</p>
          </div>
        </div>

        <div className="bg-slate-200 rounded-xl p-8">
            <h4 className="text-xl font-bold text-slate-700 mb-6 flex items-center justify-center gap-2">
                <Wallet className="w-6 h-6" />
                Formas de Pagamento
            </h4>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-3 rounded-full">
                        <span className="font-bold text-green-700 text-lg">Pix</span>
                    </div>
                    <span className="text-slate-700 font-medium">Pagamento à vista</span>
                </div>
                <div className="h-8 w-px bg-slate-300 hidden md:block"></div>
                <div className="flex items-center gap-3">
                    <div className="bg-blue-100 p-3 rounded-full">
                        <CreditCard className="w-6 h-6 text-blue-700" />
                    </div>
                    <span className="text-slate-700 font-medium">Parcelamento em até 12x</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};