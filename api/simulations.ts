import { VercelRequest, VercelResponse } from '@vercel/node';
import sqlite3 from 'sqlite3';
import { promisify } from 'util';
import path from 'path';

// Configuração do banco de dados
const dbPath = '/tmp/database.sqlite';
const db = new sqlite3.Database(dbPath);

// Promisificar métodos do SQLite
const dbRun = promisify(db.run.bind(db));
const dbAll = promisify(db.all.bind(db));
const dbGet = promisify(db.get.bind(db));

// Criar tabela se não existir
db.serialize(() => {
  db.run(`
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
});

// Configurar CORS
const setCorsHeaders = (res: VercelResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res);

  // Handle OPTIONS request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { method } = req;

  try {
    // GET - Listar todas as simulações
    if (method === 'GET') {
      const simulations = await dbAll('SELECT * FROM simulations ORDER BY created_at DESC');
      return res.status(200).json(simulations);
    }

    // POST - Salvar nova simulação
    if (method === 'POST') {
      const simulation = req.body;
      
      const result = await dbRun(
        `INSERT INTO simulations (
          initial_value, monthly_value, interest_rate, rate_type,
          period, period_type, final_value, total_invested, total_interest
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          simulation.initial_value,
          simulation.monthly_value,
          simulation.interest_rate,
          simulation.rate_type,
          simulation.period,
          simulation.period_type,
          simulation.final_value,
          simulation.total_invested,
          simulation.total_interest,
        ]
      );

      return res.status(201).json({
        id: (result as any).lastID,
        message: 'Simulação salva com sucesso!',
      });
    }

    // DELETE - Deletar simulação
    if (method === 'DELETE') {
      const { id } = req.query;
      
      if (!id) {
        return res.status(400).json({ error: 'ID não fornecido' });
      }

      await dbRun('DELETE FROM simulations WHERE id = ?', [id]);
      return res.status(200).json({ message: 'Simulação deletada com sucesso!' });
    }

    return res.status(405).json({ error: 'Método não permitido' });
  } catch (error) {
    console.error('Erro:', error);
    return res.status(500).json({ error: 'Erro no servidor' });
  }
}
