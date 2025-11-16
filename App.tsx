import React, { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';
import InfoSection from './components/InfoSection';
import { type FormData, type CalculationResult } from './types';
import useCompoundInterest from './hooks/useCompoundInterest';
import Header from './components/Header';
import { simulationService } from './services/simulationService';

const App: React.FC = () => {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [formData, setFormData] = useState<FormData | null>(null);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState<string | null>(null);
  const { calculate, error } = useCompoundInterest();

  const handleCalculate = (data: FormData) => {
    const calculationResult = calculate(data);
    setResult(calculationResult);
    setFormData(data);
    setSaveError(null);
    setSaveSuccess(null);
  };

  const handleClear = () => {
    setResult(null);
    setFormData(null);
    setSaveError(null);
    setSaveSuccess(null);
  }

  const handleSaveSimulation = async (resultToSave: CalculationResult) => {
    if (!formData) {
      setSaveError('Dados do formulário não encontrados');
      return;
    }

    try {
      setSaveError(null);
      setSaveSuccess(null);
      const response = await simulationService.save(formData, resultToSave);
      setSaveSuccess(`✅ Simulação salva com sucesso! ID: ${response.id}`);
      console.log('Simulação salva:', response);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Erro ao salvar simulação';
      setSaveError(errorMessage);
      console.error('Erro ao salvar:', err);
    }
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

          {saveError && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <strong className="font-bold">Erro ao salvar!</strong>
              <span className="block sm:inline"> {saveError}</span>
            </div>}

          {saveSuccess && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{saveSuccess}</span>
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