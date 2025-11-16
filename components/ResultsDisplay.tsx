
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { type CalculationResult } from '../types';
import Card from './ui/Card';

interface ResultsDisplayProps {
  result: CalculationResult;
  onSave: (result: CalculationResult) => void;
}

const formatCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const interestData = payload.find(p => p.dataKey === 'totalInterest');
    const investedData = payload.find(p => p.dataKey === 'totalInvested');

    return (
      <div className="bg-white p-3 border border-gray-300 rounded-md shadow-lg text-sm min-w-[220px]">
        <p className="font-bold text-gray-700 mb-2">{`Mês: ${label}`}</p>
        <div className="space-y-1">
          {interestData && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#B45309] rounded-full mr-2"></span>
                <span>Total em juros</span>
              </div>
              <span className="font-semibold">{formatCurrency(interestData.value)}</span>
            </div>
          )}
          {investedData && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-[#1F2937] rounded-full mr-2"></span>
                <span>Valor Investido</span>
              </div>
              <span className="font-semibold">{formatCurrency(investedData.value)}</span>
            </div>
          )}
        </div>
      </div>
    );
  }
  return null;
};


const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ result, onSave }) => {
  const { finalValue, totalInvested, totalInterest, chartData } = result;
  
  const handleSaveClick = () => {
    onSave(result);
  };

  return (
    <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200 mt-8">
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-2xl font-bold text-amber-800">Resultado</h2>
        <button
          onClick={handleSaveClick}
          className="bg-green-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-300 shadow-md text-sm flex items-center gap-2"
          aria-label="Salvar simulação no Google Sheets"
        >
          <i className="fa-solid fa-cloud-arrow-up"></i>
          Salvar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-center">
        <Card title="Valor total final" value={formatCurrency(finalValue)} isPrimary />
        <Card title="Valor total investido" value={formatCurrency(totalInvested)} />
        <Card title="Total em juros" value={formatCurrency(totalInterest)} />
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-bold text-amber-800 text-center mb-2">Gráfico:</h3>
          <div className="flex items-center justify-center space-x-6 text-sm mb-4">
            <div className="flex items-center">
              <span className="w-4 h-4 bg-[#B45309] rounded-sm mr-2"></span>
              <span>Total em juros</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 h-4 bg-[#1F2937] rounded-sm mr-2"></span>
              <span>Valor Investido</span>
            </div>
          </div>
          <div style={{ width: '100%', height: 400 }}>
            <ResponsiveContainer>
              <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="period" stroke="#333" />
                <YAxis tickFormatter={(value) => `${(Number(value) / 1000)}k`} stroke="#333" />
                <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'black', strokeDasharray: '3 3' }} />
                <Line type="monotone" dataKey="totalInterest" name="Total em Juros" stroke="#B45309" strokeWidth={2.5} dot={{ fill: 'white', stroke: '#B45309', r: 4, strokeWidth: 2 }} activeDot={{ r: 6, fill: '#B45309' }} />
                <Line type="monotone" dataKey="totalInvested" name="Valor Investido" stroke="#1F2937" strokeWidth={2.5} dot={{ fill: 'white', stroke: '#1F2937', r: 4, strokeWidth: 2 }} activeDot={{ r: 6, fill: '#1F2937' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-amber-800 text-center mb-4">Tabela:</h3>
          <div className="overflow-x-auto max-h-[400px] rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100 sticky top-0">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mês</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Juros</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Investido</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Juros</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Acumulado</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {chartData.map((data) => (
                  <tr key={data.period} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{data.period}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{formatCurrency(data.monthlyInterest)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{formatCurrency(data.totalInvested)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{formatCurrency(data.totalInterest)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">{formatCurrency(data.finalValue)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsDisplay;