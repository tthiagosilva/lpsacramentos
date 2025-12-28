import React from 'react';
import { Hero } from './components/Hero';
import { InfoBar } from './components/InfoBar';
import { Documents } from './components/Documents';
import { Fees } from './components/Fees';
import { Vacancies } from './components/Vacancies';
import { Rules } from './components/Rules';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-200 selection:text-amber-900">
      <Hero />
      <InfoBar />
      <Documents />
      <Fees />
      <Vacancies />
      <Rules />
      <Footer />
    </div>
  );
}

export default App;