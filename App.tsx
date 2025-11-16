
import React, { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';
import InfoSection from './components/InfoSection';
import { type FormData, type CalculationResult } from './types';
import useCompoundInterest from './hooks/useCompoundInterest';
import Header from './components/Header';

const App: React.FC = () => {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const { calculate, error } = useCompoundInterest();

  const handleCalculate = (data: FormData) => {
    const calculationResult = calculate(data);
    setResult(calculationResult);
  };

  const handleClear = () => {
    setResult(null);
  }

  const handleSaveSimulation = async (resultToSave: CalculationResult) => {
    // Em uma aplicação real, isso seria uma requisição POST para seu backend.
    // O backend então lidaria com a autenticação e escrita dos dados no Google Sheets.
    console.log('Salvando simulação:', resultToSave);
    alert('Funcionalidade de salvar em breve! Isto enviaria os dados para um backend que os salvaria no Google Sheets.');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-800 font-sans">
      <Header />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="space-y-8">
          <CalculatorForm onCalculate={handleCalculate} onClear={handleClear} />

          {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Erro!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>}
            
          {result && <ResultsDisplay result={result} onSave={handleSaveSimulation} />}
          
          <InfoSection />
        </div>
      </main>

      <footer className="bg-white mt-8 py-4 text-center text-gray-600 border-t">
        <p>&copy; {new Date().getFullYear()} Simulador de Juros Compostos. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default App;