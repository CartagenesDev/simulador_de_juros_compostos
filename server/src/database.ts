import Database from 'better-sqlite3';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const db = new Database(join(__dirname, '../database.sqlite'));

// Criar tabela de simulações se não existir
db.exec(`
  CREATE TABLE IF NOT EXISTS simulations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    initial_value REAL NOT NULL,
    monthly_value REAL NOT NULL,
    interest_rate REAL NOT NULL,
    rate_type TEXT NOT NULL,
    period INTEGER NOT NULL,
    period_type TEXT NOT NULL,
    final_value REAL NOT NULL,
    total_invested REAL NOT NULL,
    total_interest REAL NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export interface SimulationRecord {
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

export const saveSimulation = (simulation: SimulationRecord) => {
  const stmt = db.prepare(`
    INSERT INTO simulations (
      initial_value, monthly_value, interest_rate, rate_type,
      period, period_type, final_value, total_invested, total_interest
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  const result = stmt.run(
    simulation.initial_value,
    simulation.monthly_value,
    simulation.interest_rate,
    simulation.rate_type,
    simulation.period,
    simulation.period_type,
    simulation.final_value,
    simulation.total_invested,
    simulation.total_interest
  );

  return result.lastInsertRowid;
};

export const getAllSimulations = () => {
  const stmt = db.prepare('SELECT * FROM simulations ORDER BY created_at DESC');
  return stmt.all() as SimulationRecord[];
};

export const getSimulationById = (id: number) => {
  const stmt = db.prepare('SELECT * FROM simulations WHERE id = ?');
  return stmt.get(id) as SimulationRecord | undefined;
};

export const deleteSimulation = (id: number) => {
  const stmt = db.prepare('DELETE FROM simulations WHERE id = ?');
  return stmt.run(id);
};

export default db;
