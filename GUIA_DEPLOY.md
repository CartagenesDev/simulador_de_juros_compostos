# 🌐 Guia de Deploy e Configuração de URLs

## 📍 Onde está a configuração da URL da API

A URL do backend está configurada no arquivo:
```
services/simulationService.ts
```

Linha 4:
```typescript
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';
```

---

## 🔧 Como Configurar para Produção

### **Passo 1: Criar arquivo `.env`**

Na **raiz do projeto** (mesma pasta do `package.json`), crie um arquivo chamado `.env`:

```bash
# Copie o exemplo
cp .env.example .env
```

### **Passo 2: Editar o arquivo `.env`**

Abra o arquivo `.env` e coloque a URL do seu backend em produção:

```env
# URL da API Backend em Produção
VITE_API_URL=https://seu-backend.onrender.com
```

**Exemplos de URLs:**
- Render: `https://simulador-backend.onrender.com`
- Railway: `https://simulador-backend.up.railway.app`
- Heroku: `https://simulador-backend.herokuapp.com`

### **Passo 3: Configurar no serviço de hospedagem**

#### **No Netlify:**
1. Vá em: Site Settings → Environment Variables
2. Adicione:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://seu-backend.onrender.com`

#### **No Vercel:**
1. Vá em: Settings → Environment Variables
2. Adicione:
   - **Name:** `VITE_API_URL`
   - **Value:** `https://seu-backend.onrender.com`

#### **No Render:**
1. Vá em: Environment → Environment Variables
2. Adicione:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://seu-backend.onrender.com`

---

## 🚀 Cenários de Deploy

### **Cenário 1: Tudo Local (Desenvolvimento)**
```env
VITE_API_URL=http://localhost:3001
```

### **Cenário 2: Frontend no Netlify + Backend no Render**
```env
# No Netlify, configure:
VITE_API_URL=https://simulador-backend.onrender.com
```

### **Cenário 3: Tudo no Render**
```env
# Não precisa configurar - usa caminho relativo
# OU configure para a mesma URL
VITE_API_URL=https://simulador-app.onrender.com
```

---

## 🧪 Como Testar

### **1. Verificar se a variável está funcionando:**

Adicione temporariamente no `App.tsx`:
```typescript
console.log('API URL:', import.meta.env.VITE_API_URL);
```

### **2. Testar localmente com backend remoto:**

Crie arquivo `.env`:
```env
VITE_API_URL=https://seu-backend-ja-deployado.onrender.com
```

Execute:
```bash
npm run dev
```

Agora seu frontend local vai usar o backend em produção!

---

## ⚠️ IMPORTANTE

### **Arquivo `.env` NO .gitignore**

O arquivo `.env` com suas URLs reais **NÃO deve ser enviado para o GitHub**!

Verifique se está no `.gitignore`:
```
.env
.env.local
.env.production
```

### **Use `.env.example` para documentação**

O `.env.example` SIM pode ir pro GitHub (sem dados sensíveis):
```env
VITE_API_URL=http://localhost:3001
```

---

## 🎯 Sequência Recomendada de Deploy

### **Passo 1: Deploy do Backend**
1. Faça deploy do backend no Render/Railway
2. Copie a URL gerada (ex: `https://simulador-backend.onrender.com`)

### **Passo 2: Configurar Frontend**
1. Crie arquivo `.env` local:
   ```env
   VITE_API_URL=https://simulador-backend.onrender.com
   ```
2. Teste localmente se está conectando no backend remoto
3. Confirme que salvar simulações funciona

### **Passo 3: Deploy do Frontend**
1. Faça deploy no Netlify/Vercel
2. Configure a variável de ambiente `VITE_API_URL`
3. Teste a aplicação completa na URL pública

---

## 📝 Resumo

**Desenvolvimento Local:**
- Frontend: `http://localhost:3000`
- Backend: `http://localhost:3001`
- `.env`: `VITE_API_URL=http://localhost:3001`

**Produção (Frontend Netlify + Backend Render):**
- Frontend: `https://seu-app.netlify.app`
- Backend: `https://seu-backend.onrender.com`
- Netlify env var: `VITE_API_URL=https://seu-backend.onrender.com`

---

## ❓ Problemas Comuns

### "Erro ao conectar com API"
- ✅ Verifique se a variável `VITE_API_URL` está configurada
- ✅ Verifique se o backend está rodando
- ✅ Verifique se não tem `/` no final da URL
- ✅ Verifique CORS no backend

### "Variável não é reconhecida"
- ✅ Reinicie o servidor de desenvolvimento após criar `.env`
- ✅ Certifique-se que começa com `VITE_`
- ✅ No Vite, use `import.meta.env.VITE_NOME`

---

**💡 Dica:** Sempre teste localmente antes de fazer deploy!
