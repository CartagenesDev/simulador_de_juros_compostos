# 🧮 Simulador de Juros Compostos com Banco de Dados

Um simulador interativo de juros compostos construído com React, TypeScript e Vite, com backend Node.js e banco de dados SQLite para armazenar simulações.

## ✨ Funcionalidades

- 📊 Cálculo de juros compostos com visualização gráfica
- 💾 **NOVO:** Salvamento de simulações em banco de dados
- 📈 Gráfico interativo mostrando evolução do investimento
- 📱 Interface responsiva e moderna
- 🎨 Design limpo com Tailwind CSS
- 🔄 Suporte para taxas anuais e mensais
- 📅 Períodos em anos ou meses

## 🏗️ Arquitetura

### Frontend
- **React 19** - Biblioteca UI
- **TypeScript** - Tipagem estática
- **Vite** - Build tool
- **Recharts** - Visualização de dados
- **Tailwind CSS** - Estilização

### Backend
- **Node.js + Express** - Servidor HTTP
- **SQLite** (better-sqlite3) - Banco de dados
- **TypeScript** - Tipagem estática
- **CORS** - Comunicação entre frontend e backend

## 📋 Pré-requisitos

Antes de começar, você precisa ter instalado:

- **Node.js** (versão 18 ou superior)
- **npm** ou **yarn**

### Instalar Node.js

**Opção 1: Via Conda (se você usa Anaconda/Miniconda)**
```bash
conda install -c conda-forge nodejs
```

**Opção 2: Via apt (Ubuntu/Debian)**
```bash
sudo apt update
sudo apt install nodejs npm
```

**Opção 3: Via NVM (Recomendado - Node Version Manager)**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
```

## 🚀 Instalação

### 1. Clone o repositório (já feito)
```bash
git clone https://github.com/CartagenesDev/simulador_de_juros_compostos
cd simulador_de_juros_compostos
```

### 2. Instale todas as dependências
```bash
npm run install:all
```

Ou manualmente:
```bash
# Dependências do frontend
npm install

# Dependências do backend
cd server
npm install
cd ..
```

## ▶️ Executando o Projeto

### Opção 1: Executar Backend e Frontend Simultaneamente (Recomendado)

```bash
npm run dev:all
```

### Opção 2: Executar Separadamente

**Terminal 1 - Backend:**
```bash
npm run dev:backend
# ou
cd server && npm run dev
```
O backend estará disponível em: `http://localhost:3001`

**Terminal 2 - Frontend:**
```bash
npm run dev
```
O frontend estará disponível em: `http://localhost:3000`

## 📊 Estrutura do Banco de Dados

O banco SQLite é criado automaticamente em `server/database.sqlite`

### Tabela: `simulations`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| id | INTEGER | Chave primária (auto-increment) |
| initial_value | REAL | Valor inicial investido |
| monthly_value | REAL | Aporte mensal |
| interest_rate | REAL | Taxa de juros |
| rate_type | TEXT | Tipo da taxa (annual/monthly) |
| period | INTEGER | Período de investimento |
| period_type | TEXT | Tipo do período (years/months) |
| final_value | REAL | Valor final calculado |
| total_invested | REAL | Total investido |
| total_interest | REAL | Total de juros ganho |
| created_at | DATETIME | Data de criação |

## 🔌 API Endpoints

### GET /health
Verifica se o servidor está funcionando
```bash
curl http://localhost:3001/health
```

### GET /api/simulations
Retorna todas as simulações salvas
```bash
curl http://localhost:3001/api/simulations
```

### GET /api/simulations/:id
Retorna uma simulação específica
```bash
curl http://localhost:3001/api/simulations/1
```

### POST /api/simulations
Salva uma nova simulação
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

### DELETE /api/simulations/:id
Deleta uma simulação
```bash
curl -X DELETE http://localhost:3001/api/simulations/1
```

## 📁 Estrutura do Projeto

```
simulador_de_juros_compostos/
├── components/              # Componentes React
│   ├── CalculatorForm.tsx
│   ├── ResultsDisplay.tsx
│   ├── Header.tsx
│   ├── InfoSection.tsx
│   └── ui/
├── hooks/                   # Custom hooks
│   └── useCompoundInterest.ts
├── services/               # Serviços de API
│   └── simulationService.ts
├── server/                 # Backend
│   ├── src/
│   │   ├── index.ts       # Servidor Express
│   │   └── database.ts    # Configuração do banco
│   ├── package.json
│   └── tsconfig.json
├── App.tsx                 # Componente principal
├── types.ts               # Tipos TypeScript
├── vite.config.ts         # Configuração Vite
└── package.json

```

## 🎯 Como Usar

1. **Inicie o servidor**: Execute `npm run dev:all`
2. **Acesse o app**: Abra `http://localhost:3000` no navegador
3. **Preencha o formulário**:
   - Valor inicial
   - Aporte mensal
   - Taxa de juros
   - Período de investimento
4. **Calcule**: Clique em "Calcular"
5. **Visualize**: Veja o resultado e o gráfico
6. **Salve**: Clique em "Salvar Simulação" para armazenar no banco

## 🧪 Testando a Integração

1. Faça uma simulação no frontend
2. Clique em "Salvar Simulação"
3. Você verá uma mensagem de sucesso com o ID
4. Verifique os dados salvos:
```bash
curl http://localhost:3001/api/simulations
```

## ❓ Solução de Problemas

### "npm: comando não encontrado"
Instale o Node.js seguindo as instruções em [Pré-requisitos](#📋-pré-requisitos)

### Porta 3001 já em uso
Altere a porta no arquivo `server/src/index.ts`:
```typescript
const PORT = process.env.PORT || 3002;
```

### Erro de CORS
Certifique-se de que:
1. O backend está rodando em `http://localhost:3001`
2. O proxy está configurado no `vite.config.ts`
3. Ambos os servidores estão rodando

### Erro ao salvar simulação
1. Verifique se o backend está rodando
2. Abra o console do navegador (F12) para ver erros
3. Verifique os logs do servidor no terminal

## 📦 Build para Produção

### Frontend
```bash
npm run build
npm run preview
```

### Backend
```bash
cd server
npm run build
npm start
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou pull requests.

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

CartagenesDev

---

**Desenvolvido com ❤️ usando React, TypeScript e Node.js**
