import express, { Request, Response } from 'express';
import cors from 'cors';
import { saveSimulation, getAllSimulations, getSimulationById, deleteSimulation, SimulationRecord } from './database.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.get('/api/simulations', async (req: Request, res: Response) => {
  try {
    const simulations = await getAllSimulations();
    res.json(simulations);
  } catch (error) {
    console.error('Erro ao buscar simulações:', error);
    res.status(500).json({ error: 'Erro ao buscar simulações' });
  }
});

app.get('/api/simulations/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const simulation = await getSimulationById(id);
    
    if (!simulation) {
      return res.status(404).json({ error: 'Simulação não encontrada' });
    }
    
    res.json(simulation);
  } catch (error) {
    console.error('Erro ao buscar simulação:', error);
    res.status(500).json({ error: 'Erro ao buscar simulação' });
  }
});

app.post('/api/simulations', async (req: Request, res: Response) => {
  try {
    const simulation: SimulationRecord = req.body;
    const id = await saveSimulation(simulation);
    res.status(201).json({ id, message: 'Simulação salva com sucesso!' });
  } catch (error) {
    console.error('Erro ao salvar simulação:', error);
    res.status(500).json({ error: 'Erro ao salvar simulação' });
  }
});

app.delete('/api/simulations/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    await deleteSimulation(id);
    res.json({ message: 'Simulação deletada com sucesso!' });
  } catch (error) {
    console.error('Erro ao deletar simulação:', error);
    res.status(500).json({ error: 'Erro ao deletar simulação' });
  }
});

// Rota de health check
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'Servidor rodando!' });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`📊 API disponível em http://localhost:${PORT}/api/simulations`);
});
