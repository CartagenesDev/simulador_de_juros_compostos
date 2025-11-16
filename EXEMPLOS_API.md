# 🔌 Exemplos de Uso da API

Este arquivo contém exemplos práticos de como usar a API do backend.

## 📍 Base URL

```
http://localhost:3001
```

## 🔍 Endpoints Disponíveis

### 1. Health Check

Verifica se o servidor está funcionando.

```bash
curl http://localhost:3001/health
```

**Resposta:**
```json
{
  "status": "OK",
  "message": "Servidor rodando!"
}
```

---

### 2. Listar Todas as Simulações

```bash
curl http://localhost:3001/api/simulations
```

**Resposta:**
```json
[
  {
    "id": 1,
    "initial_value": 1000,
    "monthly_value": 100,
    "interest_rate": 10,
    "rate_type": "annual",
    "period": 12,
    "period_type": "months",
    "final_value": 2500.50,
    "total_invested": 2200,
    "total_interest": 300.50,
    "created_at": "2025-11-16 10:30:00"
  },
  {
    "id": 2,
    "initial_value": 5000,
    "monthly_value": 500,
    "interest_rate": 12,
    "rate_type": "annual",
    "period": 5,
    "period_type": "years",
    "final_value": 45000.75,
    "total_invested": 35000,
    "total_interest": 10000.75,
    "created_at": "2025-11-16 11:45:00"
  }
]
```

---

### 3. Buscar Simulação por ID

```bash
curl http://localhost:3001/api/simulations/1
```

**Resposta:**
```json
{
  "id": 1,
  "initial_value": 1000,
  "monthly_value": 100,
  "interest_rate": 10,
  "rate_type": "annual",
  "period": 12,
  "period_type": "months",
  "final_value": 2500.50,
  "total_invested": 2200,
  "total_interest": 300.50,
  "created_at": "2025-11-16 10:30:00"
}
```

**Erro (404):**
```json
{
  "error": "Simulação não encontrada"
}
```

---

### 4. Salvar Nova Simulação

```bash
curl -X POST http://localhost:3001/api/simulations \
  -H "Content-Type: application/json" \
  -d '{
    "initial_value": 1000,
    "monthly_value": 100,
    "interest_rate": 10,
    "rate_type": "annual",
    "period": 12,
    "period_type": "months",
    "final_value": 2500.50,
    "total_invested": 2200,
    "total_interest": 300.50
  }'
```

**Resposta:**
```json
{
  "id": 3,
  "message": "Simulação salva com sucesso!"
}
```

**Exemplo com valores maiores:**
```bash
curl -X POST http://localhost:3001/api/simulations \
  -H "Content-Type: application/json" \
  -d '{
    "initial_value": 10000,
    "monthly_value": 500,
    "interest_rate": 12,
    "rate_type": "annual",
    "period": 10,
    "period_type": "years",
    "final_value": 115000.25,
    "total_invested": 70000,
    "total_interest": 45000.25
  }'
```

---

### 5. Deletar Simulação

```bash
curl -X DELETE http://localhost:3001/api/simulations/1
```

**Resposta:**
```json
{
  "message": "Simulação deletada com sucesso!"
}
```

---

## 🐍 Exemplos em Python

```python
import requests

BASE_URL = "http://localhost:3001"

# Listar todas as simulações
response = requests.get(f"{BASE_URL}/api/simulations")
simulations = response.json()
print(simulations)

# Salvar nova simulação
nova_simulacao = {
    "initial_value": 1000,
    "monthly_value": 100,
    "interest_rate": 10,
    "rate_type": "annual",
    "period": 12,
    "period_type": "months",
    "final_value": 2500.50,
    "total_invested": 2200,
    "total_interest": 300.50
}

response = requests.post(
    f"{BASE_URL}/api/simulations",
    json=nova_simulacao
)
resultado = response.json()
print(f"Simulação salva com ID: {resultado['id']}")

# Buscar simulação específica
sim_id = 1
response = requests.get(f"{BASE_URL}/api/simulations/{sim_id}")
simulacao = response.json()
print(simulacao)

# Deletar simulação
response = requests.delete(f"{BASE_URL}/api/simulations/{sim_id}")
print(response.json())
```

---

## 📱 Exemplos em JavaScript/TypeScript

```javascript
const BASE_URL = "http://localhost:3001";

// Listar todas as simulações
async function listarSimulacoes() {
  const response = await fetch(`${BASE_URL}/api/simulations`);
  const simulacoes = await response.json();
  console.log(simulacoes);
}

// Salvar nova simulação
async function salvarSimulacao() {
  const novaSimulacao = {
    initial_value: 1000,
    monthly_value: 100,
    interest_rate: 10,
    rate_type: "annual",
    period: 12,
    period_type: "months",
    final_value: 2500.50,
    total_invested: 2200,
    total_interest: 300.50
  };

  const response = await fetch(`${BASE_URL}/api/simulations`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(novaSimulacao),
  });

  const resultado = await response.json();
  console.log(`Simulação salva com ID: ${resultado.id}`);
}

// Buscar simulação por ID
async function buscarSimulacao(id) {
  const response = await fetch(`${BASE_URL}/api/simulations/${id}`);
  const simulacao = await response.json();
  console.log(simulacao);
}

// Deletar simulação
async function deletarSimulacao(id) {
  const response = await fetch(`${BASE_URL}/api/simulations/${id}`, {
    method: 'DELETE',
  });
  const resultado = await response.json();
  console.log(resultado.message);
}
```

---

## 🧪 Testando com Postman/Insomnia

### Salvar Simulação (POST)
- **URL:** `http://localhost:3001/api/simulations`
- **Method:** POST
- **Headers:** `Content-Type: application/json`
- **Body (JSON):**
```json
{
  "initial_value": 1000,
  "monthly_value": 100,
  "interest_rate": 10,
  "rate_type": "annual",
  "period": 12,
  "period_type": "months",
  "final_value": 2500.50,
  "total_invested": 2200,
  "total_interest": 300.50
}
```

### Listar Simulações (GET)
- **URL:** `http://localhost:3001/api/simulations`
- **Method:** GET

### Buscar por ID (GET)
- **URL:** `http://localhost:3001/api/simulations/1`
- **Method:** GET

### Deletar (DELETE)
- **URL:** `http://localhost:3001/api/simulations/1`
- **Method:** DELETE

---

## 📊 Validação de Dados

Todos os campos são obrigatórios ao salvar uma simulação:

| Campo | Tipo | Descrição | Exemplo |
|-------|------|-----------|---------|
| initial_value | number | Valor inicial | 1000 |
| monthly_value | number | Aporte mensal | 100 |
| interest_rate | number | Taxa de juros | 10 |
| rate_type | string | "annual" ou "monthly" | "annual" |
| period | number | Período | 12 |
| period_type | string | "years" ou "months" | "months" |
| final_value | number | Valor final calculado | 2500.50 |
| total_invested | number | Total investido | 2200 |
| total_interest | number | Total de juros | 300.50 |

---

## 💡 Dicas

1. O banco de dados é criado automaticamente no primeiro uso
2. O arquivo do banco fica em `server/database.sqlite`
3. Use um cliente SQLite para visualizar os dados diretamente
4. O campo `created_at` é preenchido automaticamente
5. O campo `id` é auto-incrementado

---

**📝 Nota:** Todos esses exemplos assumem que o backend está rodando em `http://localhost:3001`
