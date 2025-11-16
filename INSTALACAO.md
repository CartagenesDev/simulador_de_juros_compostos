# Guia de Instalação - Integração com Banco de Dados

## 📋 Pré-requisitos

Você precisa ter o Node.js e npm instalados no seu sistema.

### Opção 1: Instalar via apt (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install nodejs npm
```

### Opção 2: Instalar via Conda (Recomendado se você já usa Conda)
```bash
conda install -c conda-forge nodejs
```

### Opção 3: Instalar via NVM (Node Version Manager - Recomendado)
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
```

## 🚀 Instalação do Projeto

### 1. Instalar dependências do Backend
```bash
cd server
npm install
```

### 2. Instalar dependências do Frontend (se necessário)
```bash
cd ..
npm install
```

## ▶️ Como Executar

### Opção A: Executar Backend e Frontend Separadamente

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```
O backend estará rodando em `http://localhost:3001`

**Terminal 2 - Frontend:**
```bash
npm run dev
```
O frontend estará rodando em `http://localhost:5173`

### Opção B: Executar Tudo de Uma Vez (após configurar)
```bash
npm run dev:all
```

## 📊 Estrutura do Banco de Dados

O banco SQLite será criado automaticamente em `server/database.sqlite` com a seguinte estrutura:

**Tabela: simulations**
- id (INTEGER PRIMARY KEY)
- initial_value (REAL) - Valor inicial
- monthly_value (REAL) - Aporte mensal
- interest_rate (REAL) - Taxa de juros
- rate_type (TEXT) - Tipo de taxa (annual/monthly)
- period (INTEGER) - Período
- period_type (TEXT) - Tipo de período (years/months)
- final_value (REAL) - Valor final
- total_invested (REAL) - Total investido
- total_interest (REAL) - Total de juros
- created_at (DATETIME) - Data de criação

## 🔌 Endpoints da API

### GET /api/simulations
Retorna todas as simulações salvas

### GET /api/simulations/:id
Retorna uma simulação específica

### POST /api/simulations
Salva uma nova simulação
```json
{
  "initial_value": 1000,
  "monthly_value": 100,
  "interest_rate": 10,
  "rate_type": "annual",
  "period": 12,
  "period_type": "months",
  "final_value": 2500,
  "total_invested": 2200,
  "total_interest": 300
}
```

### DELETE /api/simulations/:id
Deleta uma simulação

## 🧪 Testar a API

```bash
# Health check
curl http://localhost:3001/health

# Listar simulações
curl http://localhost:3001/api/simulations

# Salvar simulação
curl -X POST http://localhost:3001/api/simulations \
  -H "Content-Type: application/json" \
  -d '{"initial_value":1000,"monthly_value":100,"interest_rate":10,"rate_type":"annual","period":12,"period_type":"months","final_value":2500,"total_invested":2200,"total_interest":300}'
```

## ❓ Problemas Comuns

### Erro: "Cannot find module"
```bash
cd server
npm install
```

### Porta 3001 já em uso
Altere a porta no arquivo `server/src/index.ts` ou defina a variável de ambiente:
```bash
PORT=3002 npm run dev
```

### CORS Error
Certifique-se de que o backend está rodando e que o proxy no Vite está configurado corretamente.

## 📝 Próximos Passos

Após instalar o Node.js:
1. Instale as dependências com `npm install`
2. Execute o backend com `npm run dev` na pasta server
3. Execute o frontend com `npm run dev` na pasta raiz
4. Acesse `http://localhost:5173` no navegador
5. Faça uma simulação e clique em "Salvar Simulação"
6. Os dados serão salvos no banco SQLite!
