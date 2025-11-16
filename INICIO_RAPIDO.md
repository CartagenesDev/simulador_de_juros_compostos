# 🎯 GUIA RÁPIDO DE USO

## ⚡ Início Rápido

### 1️⃣ Instalar Node.js (PRIMEIRO PASSO!)

Escolha UMA das opções abaixo:

**Opção A - Via Conda (se você já usa Anaconda):**
```bash
conda install -c conda-forge nodejs
```

**Opção B - Via apt (Ubuntu/Debian):**
```bash
sudo apt update
sudo apt install nodejs npm
```

**Opção C - Via NVM (Mais recomendado):**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
```

### 2️⃣ Verificar Instalação

```bash
node --version  # Deve mostrar v18 ou superior
npm --version   # Deve mostrar a versão do npm
```

### 3️⃣ Instalar Dependências do Projeto

**Opção A - Script automático (Linux/Mac):**
```bash
./setup.sh
```

**Opção B - Manual:**
```bash
# Instalar tudo de uma vez
npm run install:all

# OU instalar separadamente:
npm install                    # Frontend
cd server && npm install       # Backend
```

### 4️⃣ Executar o Projeto

**Opção A - Tudo junto (mais fácil):**
```bash
npm run dev:all
```

**Opção B - Separadamente (mais controle):**

Terminal 1:
```bash
npm run dev:backend
```

Terminal 2:
```bash
npm run dev
```

### 5️⃣ Acessar a Aplicação

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:3001

## 📝 Como Usar

1. Abra http://localhost:3000 no navegador
2. Preencha o formulário com:
   - Valor inicial (ex: 1000)
   - Aporte mensal (ex: 100)
   - Taxa de juros (ex: 10)
   - Período (ex: 12 meses)
3. Clique em "Calcular"
4. Veja o resultado e o gráfico
5. Clique em "Salvar Simulação" para armazenar no banco

## 🎨 EXTRA: Visualizar Histórico de Simulações

Para adicionar a visualização do histórico, edite o `App.tsx`:

```tsx
import SimulationHistory from './components/SimulationHistory';

// Adicione dentro do return, após <InfoSection />:
<SimulationHistory />
```

## 🧪 Testar a API Diretamente

```bash
# Ver todas as simulações salvas
curl http://localhost:3001/api/simulations

# Ver uma simulação específica
curl http://localhost:3001/api/simulations/1

# Deletar uma simulação
curl -X DELETE http://localhost:3001/api/simulations/1
```

## ❓ Problemas Comuns

### "npm: comando não encontrado"
➡️ Você precisa instalar o Node.js primeiro (veja passo 1)

### "Porta já em uso"
➡️ Feche o processo usando a porta ou altere no código

### "Erro ao conectar com API"
➡️ Certifique-se de que o backend está rodando (npm run dev:backend)

### Mensagem de erro ao salvar
➡️ Abra o DevTools (F12) no navegador e veja o console
➡️ Verifique o terminal do backend para logs

## 📂 O que Foi Criado

```
✅ server/                     # Backend completo
   ├── src/
   │   ├── index.ts           # Servidor Express
   │   └── database.ts        # Configuração SQLite
   ├── package.json
   └── tsconfig.json

✅ services/
   └── simulationService.ts   # Serviço de comunicação com API

✅ components/
   └── SimulationHistory.tsx  # (Opcional) Visualizar histórico

✅ App.tsx                     # Atualizado com integração
✅ vite.config.ts              # Configurado com proxy
✅ package.json                # Scripts adicionados
✅ setup.sh                    # Script de instalação
✅ README_COMPLETO.md          # Documentação completa
✅ INSTALACAO.md               # Guia de instalação
```

## 🚀 Próximos Passos (Opcional)

1. Adicionar autenticação de usuários
2. Criar dashboard com estatísticas
3. Exportar simulações para PDF
4. Adicionar comparação entre simulações
5. Implementar gráficos mais avançados

## 📞 Suporte

Se encontrar problemas:
1. Verifique se Node.js está instalado
2. Verifique se ambos os servidores estão rodando
3. Veja os logs no terminal
4. Abra o DevTools (F12) no navegador

---

**✨ Tudo pronto! Sua calculadora agora salva dados em um banco SQLite! ✨**
