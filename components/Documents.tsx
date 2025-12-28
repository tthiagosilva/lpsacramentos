import React from 'react';
import { CheckCircle2, AlertTriangle, FileText } from 'lucide-react';

export const Documents: React.FC = () => {
  const commonDocs = [
    "Foto 3x4",
    "Assinatura do termo de comprometimento"
  ];

  const eucharistDocs = [
    ...commonDocs,
    "Cópia da certidão de nascimento",
    "Cópia do RG do responsável",
    "Cópia da certidão de batismo",
  ];

  const crismaDocs = [
    ...commonDocs,
    "Cópia da certidão de batismo",
    "Cópia do RG",
    "Declaração da Primeira Eucaristia (indispensável para a turma de adultos)",
    "Certidão, declaração ou comprovante de Crisma do padrinho/madrinha (caso ainda não possua, deverá ser entregue até agosto de 2026)",
  ];

  return (
    <section className="py-20 px-4 bg-white" id="documentos">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-amber-600 font-semibold tracking-wide uppercase text-sm">Prepare-se</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800 mt-2">Documentos Necessários</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Os documentos deverão ser entregues presencialmente na 1ª formação.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Eucharist Card */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
              <div className="bg-amber-100 p-2 rounded-lg">
                <FileText className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Primeira Eucaristia</h3>
            </div>
            <ul className="space-y-4">
              {eucharistDocs.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Crisma Card */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
              <div className="bg-red-100 p-2 rounded-lg">
                <FileText className="w-6 h-6 text-red-700" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800">Crisma</h3>
            </div>
            <ul className="space-y-4">
              {crismaDocs.map((doc, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-slate-700">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Warning */}
        <div className="mt-12 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
            <div>
                <h4 className="font-bold text-amber-800 text-lg">Observação Importante</h4>
                <p className="text-amber-900 mt-1">
                    A não entrega completa dos documentos na 1ª formação implicará no não recebimento do material para as formações.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};