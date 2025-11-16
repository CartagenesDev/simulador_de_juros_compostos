# 🚀 Guia de Deploy COMPLETO na Vercel

## ✅ **Tudo Pronto para Deploy!**

Acabei de preparar seu projeto para rodar **TUDO na Vercel** (frontend + backend juntos)!

---

## 📦 **O que foi criado:**

1. ✅ **`/api/simulations.ts`** - Serverless function para gerenciar simulações
2. ✅ **`/api/health.ts`** - Endpoint de health check
3. ✅ **`vercel.json`** - Configuração do deploy
4. ✅ **`package.json`** - Atualizado com dependências da Vercel
5. ✅ **`.env`** - Configurado para funcionar na Vercel
6. ✅ **`services/simulationService.ts`** - Atualizado para usar rotas relativas

---

## 🎯 **Passo a Passo para Deploy:**

### **PASSO 1: Fazer commit e push**

```bash
cd /home/galdino-junior/Área\ de\ trabalho/calculadora_juros_compostos/simulador_de_juros_compostos

git add .
git commit -m "feat: Adicionar suporte para Vercel Serverless Functions"
git push origin main
```

### **PASSO 2: Configurar na Vercel**

1. Acesse: https://vercel.com/cartagenesdevs-projects/simulador-de-juros-compostos
2. Vá em **Settings** → **General**
3. Em **Build & Development Settings**, configure:
   ```
   Framework Preset: Vite
   Build Command: npm run build
   Output Directory: dist
   Install Command: npm install
   ```

### **PASSO 3: Configurar Variáveis de Ambiente (Opcional)**

Na Vercel, vá em **Settings** → **Environment Variables**

**Para desenvolvimento local**, adicione:
```
VITE_API_URL = http://localhost:3001
```

**Para produção na Vercel**, deixe vazio ou não adicione
(A API vai usar rotas relativas automaticamente)

### **PASSO 4: Fazer Redeploy**

1. Vá em **Deployments**
2. Clique nos 3 pontos do último deploy
3. Clique em **Redeploy**
4. Aguarde o build terminar (1-2 minutos)

---

## 🌐 **URLs da Aplicação:**

Após o deploy, suas URLs serão:

### **Frontend:**
```
https://simulador-de-juros-compostos-xxx.vercel.app
```

### **API (Backend):**
```
https://simulador-de-juros-compostos-xxx.vercel.app/api/simulations
https://simulador-de-juros-compostos-xxx.vercel.app/api/health
```

---

## 🧪 **Como Testar:**

### **1. Testar o Health Check:**

Acesse no navegador:
```
https://SEU-APP.vercel.app/api/health
```

Deve retornar:
```json
{
  "status": "OK",
  "message": "Servidor rodando na Vercel!",
  "timestamp": "2025-11-16T..."
}
```

### **2. Testar a Aplicação:**

1. Acesse: `https://SEU-APP.vercel.app`
2. Preencha o formulário de simulação
3. Clique em "Calcular"
4. Clique em "Salvar Simulação"
5. Deve aparecer mensagem de sucesso! ✅

### **3. Verificar simulações salvas:**

Acesse:
```
https://SEU-APP.vercel.app/api/simulations
```

Deve retornar array com as simulações (inicialmente vazio `[]`)

---

## ⚠️ **IMPORTANTE - Limitação do SQLite na Vercel:**

O SQLite na Vercel usa armazenamento temporário (`/tmp`).

**Isso significa:**
- ✅ Funciona perfeitamente
- ⚠️ Dados são **temporários**
- ⚠️ Podem ser perdidos quando a função reinicia

**Soluções para produção real:**

### **Opção A: Usar Vercel Postgres (Recomendado)**
- Banco de dados permanente
- Grátis até 60 horas/mês
- https://vercel.com/docs/storage/vercel-postgres

### **Opção B: Usar Vercel KV (Redis)**
- Simples e rápido
- Grátis até 30 MB
- https://vercel.com/docs/storage/vercel-kv

### **Opção C: Backend no Render + Frontend na Vercel**
- SQLite permanente no Render
- Frontend super rápido na Vercel
- 100% grátis

---

## 📊 **Estrutura Final do Projeto:**

```
simulador_de_juros_compostos/
├── api/                        # 🆕 Vercel Serverless Functions
│   ├── health.ts              # Health check endpoint
│   └── simulations.ts         # CRUD de simulações
├── components/
├── services/
│   └── simulationService.ts   # ✏️ Atualizado
├── server/                     # Backend Node.js (não usado na Vercel)
├── .env                        # ✏️ Atualizado
├── vercel.json                # 🆕 Configuração Vercel
├── package.json               # ✏️ Atualizado
└── ...
```

---

## 🎯 **Checklist de Deploy:**

- [ ] Commit e push feitos
- [ ] Configurações na Vercel ajustadas
- [ ] Redeploy disparado
- [ ] `/api/health` funcionando
- [ ] Aplicação carregando
- [ ] Salvar simulação funcionando

---

## ❓ **Problemas Comuns:**

### **"Cannot find module '@vercel/node'"**
✅ Já está no `package.json`, vai instalar automaticamente

### **"API não responde"**
✅ Verifique se o caminho é `/api/simulations` (com `/api/`)
✅ Veja os logs em: Deployments → Clique no deploy → Functions

### **"Dados não são salvos"**
✅ Normal no SQLite temporário da Vercel
✅ Considere migrar para Vercel Postgres

---

## 💡 **Próximos Passos Opcionais:**

1. **Adicionar Vercel Postgres** (dados permanentes)
2. **Configurar domínio personalizado**
3. **Adicionar autenticação**
4. **Monitoramento e analytics**

---

## 🚀 **Agora é só fazer o deploy!**

Execute os comandos do PASSO 1 e pronto! 🎉
