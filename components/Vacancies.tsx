import React from 'react';
import { Users, User, UserPlus, BookOpen, Clock } from 'lucide-react';

export const Vacancies: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-800">Vagas Disponíveis</h2>
          <p className="text-slate-500 mt-2">Confira as turmas, horários e requisitos para 2026</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="bg-amber-50 p-6 flex items-center justify-between">
                <h3 className="font-bold text-xl text-amber-900">Primeira Eucaristia</h3>
                <Users className="w-6 h-6 text-amber-600" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <div className="text-4xl font-bold text-slate-800 mb-2">45 <span className="text-base font-normal text-slate-500">vagas</span></div>
                <p className="text-slate-600 mb-4">Para crianças a partir de 7 anos completos.</p>
                
                <div className="mt-2 mb-6 p-3 bg-amber-50/50 rounded-lg border border-amber-100">
                  <div className="flex items-center gap-2 text-amber-800 font-semibold mb-1">
                    <Clock className="w-4 h-4" />
                    <span>Horário dos Encontros</span>
                  </div>
                  <p className="text-slate-700 pl-6">Sábados, 09h às 11h</p>
                </div>

                <div className="mt-auto pt-4 border-t border-slate-100 text-sm text-slate-500">
                    Turma infantil
                </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col relative">
            <div className="bg-red-50 p-6 flex items-center justify-between">
                <h3 className="font-bold text-xl text-red-900">Crisma (Jovens)</h3>
                <User className="w-6 h-6 text-red-600" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <div className="text-4xl font-bold text-slate-800 mb-2">40 <span className="text-base font-normal text-slate-500">vagas</span></div>
                <p className="text-slate-600 mb-4">Para jovens de 13 a 17 anos.</p>
                
                <div className="mt-2 mb-4 p-3 bg-red-50/30 rounded-lg border border-red-100">
                  <div className="flex items-center gap-2 text-red-800 font-semibold mb-1">
                    <Clock className="w-4 h-4" />
                    <span>Horário dos Encontros</span>
                  </div>
                  <p className="text-slate-700 pl-6">Sábados, 17:30h às 19:30h</p>
                </div>
                
                <div className="bg-red-50/50 p-3 rounded-lg mt-auto">
                    <div className="flex items-center gap-2 mb-1">
                        <BookOpen className="w-4 h-4 text-red-600" />
                        <span className="text-xs font-bold text-red-700 uppercase">Atenção</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                        Jovens que ainda não realizaram a 1ª Eucaristia poderão fazê-la no 1º semestre (formação intensiva, 5 ou 6 encontros).
                    </p>
                </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <div className="bg-blue-50 p-6 flex items-center justify-between">
                <h3 className="font-bold text-xl text-blue-900">Crisma de Adultos</h3>
                <UserPlus className="w-6 h-6 text-blue-600" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
                <div className="text-4xl font-bold text-slate-800 mb-2">15 a 20 <span className="text-base font-normal text-slate-500">vagas</span></div>
                <p className="text-slate-600 mb-4">Para adultos a partir de 18 anos.</p>
                
                <div className="mt-2 mb-6 p-3 bg-blue-50/30 rounded-lg border border-blue-100">
                  <div className="flex items-center gap-2 text-blue-800 font-semibold mb-1">
                    <Clock className="w-4 h-4" />
                    <span>Horário dos Encontros</span>
                  </div>
                  <p className="text-slate-700 pl-6">Terças-feiras, 19:30h às 21:30h</p>
                </div>

                <ul className="text-sm text-slate-600 space-y-2 mb-4 mt-auto">
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5"></span>
                        Necessário já possuir Batismo e Primeira Eucaristia
                    </li>
                    <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5"></span>
                        Inscrição realizada por link separado
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};