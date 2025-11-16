import React, { useState, useEffect } from 'react';
import { simulationService, type SavedSimulation } from '../services/simulationService';

const SimulationHistory: React.FC = () => {
  const [simulations, setSimulations] = useState<SavedSimulation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadSimulations = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await simulationService.getAll();
      setSimulations(data);
    } catch (err) {
      setError('Erro ao carregar simulações');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja deletar esta simulação?')) {
      return;
    }

    try {
      await simulationService.delete(id);
      await loadSimulations();
    } catch (err) {
      alert('Erro ao deletar simulação');
      console.error(err);
    }
  };

  useEffect(() => {
    loadSimulations();
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString('pt-BR');
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">📊 Histórico de Simulações</h2>
        <p className="text-gray-600">Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">📊 Histórico de Simulações</h2>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
        <button
          onClick={loadSimulations}
          className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Tentar Novamente
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">📊 Histórico de Simulações</h2>
        <button
          onClick={loadSimulations}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
        >
          🔄 Atualizar
        </button>
      </div>

      {simulations.length === 0 ? (
        <p className="text-gray-600">Nenhuma simulação salva ainda.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor Inicial
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aporte Mensal
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Taxa
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Período
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Valor Final
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Juros
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {simulations.map((sim) => (
                <tr key={sim.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {sim.created_at && formatDate(sim.created_at)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(sim.initial_value)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {formatCurrency(sim.monthly_value)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {sim.interest_rate}% {sim.rate_type === 'annual' ? 'a.a.' : 'a.m.'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {sim.period} {sim.period_type === 'years' ? 'anos' : 'meses'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-green-600">
                    {formatCurrency(sim.final_value)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-blue-600">
                    {formatCurrency(sim.total_interest)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <button
                      onClick={() => sim.id && handleDelete(sim.id)}
                      className="text-red-600 hover:text-red-800 font-medium"
                    >
                      🗑️ Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-4 text-sm text-gray-600">
        Total de simulações: {simulations.length}
      </div>
    </div>
  );
};

export default SimulationHistory;
