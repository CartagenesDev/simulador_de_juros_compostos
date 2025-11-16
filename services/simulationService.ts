import { type CalculationResult, type FormData } from '../types';

const API_URL = '/api/simulations';

export interface SavedSimulation {
  id?: number;
  initial_value: number;
  monthly_value: number;
  interest_rate: number;
  rate_type: string;
  period: number;
  period_type: string;
  final_value: number;
  total_invested: number;
  total_interest: number;
  created_at?: string;
}

export const simulationService = {
  async save(formData: FormData, result: CalculationResult): Promise<{ id: number; message: string }> {
    const simulation: SavedSimulation = {
      initial_value: formData.initialValue,
      monthly_value: formData.monthlyValue,
      interest_rate: formData.interestRate,
      rate_type: formData.rateType,
      period: formData.period,
      period_type: formData.periodType,
      final_value: result.finalValue,
      total_invested: result.totalInvested,
      total_interest: result.totalInterest,
    };

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(simulation),
    });

    if (!response.ok) {
      throw new Error('Erro ao salvar simulação');
    }

    return response.json();
  },

  async getAll(): Promise<SavedSimulation[]> {
    const response = await fetch(API_URL);
    
    if (!response.ok) {
      throw new Error('Erro ao buscar simulações');
    }

    return response.json();
  },

  async getById(id: number): Promise<SavedSimulation> {
    const response = await fetch(`${API_URL}/${id}`);
    
    if (!response.ok) {
      throw new Error('Erro ao buscar simulação');
    }

    return response.json();
  },

  async delete(id: number): Promise<{ message: string }> {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      throw new Error('Erro ao deletar simulação');
    }

    return response.json();
  },
};
