
import React, { useState } from 'react';
import { type FormData, RateType, PeriodType } from '../types';
import InputGroup from './ui/InputGroup';

interface CalculatorFormProps {
  onCalculate: (data: FormData) => void;
  onClear: () => void;
}

const initialFormState: FormData = {
  initialValue: 0,
  monthlyValue: 0,
  interestRate: 0,
  rateType: RateType.Annual,
  period: 0,
  periodType: PeriodType.Years,
};

const clearedFormState: FormData = {
  initialValue: 0,
  monthlyValue: 0,
  interestRate: 0,
  rateType: RateType.Annual,
  period: 0,
  periodType: PeriodType.Years,
};

// Cenários pré-definidos para simular o carregamento do Google Sheets
const scenarios = {
  'default': initialFormState,
  'conservador': {
    initialValue: 5000,
    monthlyValue: 300,
    interestRate: 6,
    rateType: RateType.Annual,
    period: 15,
    periodType: PeriodType.Years,
  },
  'moderado': {
    initialValue: 10000,
    monthlyValue: 1000,
    interestRate: 9,
    rateType: RateType.Annual,
    period: 10,
    periodType: PeriodType.Years,
  },
  'agressivo': {
    initialValue: 15000,
    monthlyValue: 2000,
    interestRate: 12,
    rateType: RateType.Annual,
    period: 5,
    periodType: PeriodType.Years,
  }
};


const CalculatorForm: React.FC<CalculatorFormProps> = ({ onCalculate, onClear }) => {
  const [formData, setFormData] = useState<FormData>(initialFormState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleNumericChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      const parsedValue = value === '' ? '' : parseFloat(value.replace(/[^0-9,.]/g, '').replace(',', '.'));
      setFormData(prev => ({...prev, [name]: parsedValue === '' ? 0 : parsedValue}))
  }

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const rawValue = value.replace(/\D/g, '');

    if (!rawValue) {
      setFormData(prev => ({ ...prev, [name]: 0 }));
      return;
    }
    
    const numericValue = parseFloat(rawValue) / 100;
    setFormData(prev => ({ ...prev, [name]: numericValue }));
  };

  const formatCurrencyForInput = (value: number) => {
    if (!value || isNaN(value)) {
      return '';
    }
    return value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(formData);
  };
  
  const handleClearForm = () => {
    setFormData(clearedFormState);
    onClear();
  }
  
  const handleScenarioChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const scenarioKey = e.target.value as keyof typeof scenarios;
    setFormData(scenarios[scenarioKey] || initialFormState);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-amber-800">
          Simulador de Juros Compostos
        </h2>
        <div className="flex items-center gap-2">
            <label htmlFor="scenario-select" className="text-sm font-medium text-gray-700 whitespace-nowrap">Carregar cenário:</label>
            <select
              id="scenario-select"
              onChange={handleScenarioChange}
              className="bg-white border border-gray-300 rounded-md p-2 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-amber-500"
            >
              <option value="default">Padrão</option>
              <option value="conservador">Conservador</option>
              <option value="moderado">Moderado</option>
              <option value="agressivo">Agressivo</option>
            </select>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          <InputGroup
            label="Valor inicial"
            name="initialValue"
            value={formatCurrencyForInput(formData.initialValue)}
            onChange={handleCurrencyChange}
            prefix="R$"
            placeholder="0,00"
          />
          <InputGroup
            label="Valor mensal"
            name="monthlyValue"
            value={formatCurrencyForInput(formData.monthlyValue)}
            onChange={handleCurrencyChange}
            prefix="R$"
            placeholder="0,00"
          />
          <InputGroup
            label="Taxa de juros"
            name="interestRate"
            value={formData.interestRate.toString()}
            onChange={handleNumericChange}
            prefix="%"
            type="number"
            suffix={
              <select
                name="rateType"
                value={formData.rateType}
                onChange={handleChange}
                className="bg-white border-l border-gray-300 rounded-r-md p-2 text-gray-700 focus:outline-none focus:ring-0"
              >
                <option value={RateType.Annual}>anual</option>
                <option value={RateType.Monthly}>mensal</option>
              </select>
            }
          />
          <InputGroup
            label="Período"
            name="period"
            value={formData.period.toString()}
            onChange={handleNumericChange}
            type="number"
            suffix={
              <select
                name="periodType"
                value={formData.periodType}
                onChange={handleChange}
                className="bg-white border-l border-gray-300 rounded-r-md p-2 text-gray-700 focus:outline-none focus:ring-0"
              >
                <option value={PeriodType.Years}>ano(s)</option>
                <option value={PeriodType.Months}>mês(es)</option>
              </select>
            }
          />
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <button
            type="submit"
            className="w-full sm:w-auto bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Calcular
          </button>
          <button type="button" onClick={handleClearForm} className="text-sm text-gray-600 font-semibold hover:underline">
              Limpar
          </button>
        </div>
      </form>
    </div>
  );
};

export default CalculatorForm;
