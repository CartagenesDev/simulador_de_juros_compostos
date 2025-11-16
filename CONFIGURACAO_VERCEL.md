# 🌐 Configuração da URL da API na Vercel

## 📍 Sua aplicação na Vercel

**Dashboard:** https://vercel.com/cartagenesdevs-projects/simulador-de-juros-compostos

---

## ⚠️ ATENÇÃO - Você precisa fazer deploy do BACKEND primeiro!

Atualmente você só fez deploy do **FRONTEND** (interface React) na Vercel.
Para salvar simulações funcionar, você precisa fazer deploy do **BACKEND** também.

---

## 🚀 Passo a Passo COMPLETO:

### **PASSO 1: Deploy do Backend no Render** (OBRIGATÓRIO)

1. Acesse: https://render.com
2. Faça login/cadastro (pode usar GitHub)
3. Clique em "New +" → "Web Service"
4. Conecte seu repositório: `CartagenesDev/simulador_de_juros_compostos`
5. Configure:
   ```
   Name: simulador-backend
   Root Directory: server
   Build Command: npm install && npm run build
   Start Command: npm start
   ```
6. Clique em "Create Web Service"
7. **COPIE A URL GERADA** (tipo: `https://simulador-backend.onrender.com`)

---

### **PASSO 2: Configurar a URL na Vercel**

#### **Opção A: Via Dashboard (Mais Fácil)**

1. Acesse: https://vercel.com/cartagenesdevs-projects/simulador-de-juros-compostos
2. Vá em: **Settings** → **Environment Variables**
3. Adicione uma nova variável:
   ```
   Name:  VITE_API_URL
   Value: https://SEU-BACKEND.onrender.com
   ```
   *(Cole a URL que você copiou do Render)*
4. Clique em **Save**
5. Vá em **Deployments** → Clique nos 3 pontos do último deploy → **Redeploy**

#### **Opção B: Via Arquivo (Mais Profissional)**

Crie arquivo `vercel.json` na raiz do projeto:

```json
{
  "env": {
    "VITE_API_URL": "https://SEU-BACKEND.onrender.com"
  }
}
```

---

### **PASSO 3: Fazer Commit e Push**

```bash
git add .
git commit -m "feat: Adicionar configuração de ambiente para produção"
git push origin main
```

A Vercel vai fazer deploy automático!

---

## 📋 **Checklist de Deploy Completo:**

- [ ] Backend deployado no Render
- [ ] URL do backend copiada
- [ ] Variável `VITE_API_URL` configurada na Vercel
- [ ] Redeploy feito na Vercel
- [ ] Testado salvar simulação no site público

---

## 🧪 **Como Testar se Está Funcionando:**

1. Acesse seu site na Vercel
2. Preencha o formulário de simulação
3. Clique em "Calcular"
4. Clique em "Salvar Simulação"
5. Se aparecer mensagem de sucesso ✅ → FUNCIONOU!
6. Se aparecer erro ❌ → Backend não está configurado

---

## 🎯 **URLs da Sua Aplicação:**

### **Desenvolvimento (Local):**
- Frontend: http://localhost:3000
- Backend: http://localhost:3001

### **Produção:**
- Frontend (Vercel): https://simulador-de-juros-compostos-xxx.vercel.app
- Backend (Render): https://simulador-backend.onrender.com *(você ainda vai criar)*

---

## ❓ **Precisa de Ajuda?**

### **"Não sei fazer deploy do backend no Render"**
Vou criar um guia detalhado para você!

### **"Não consigo encontrar as configurações na Vercel"**
1. Vá em: https://vercel.com/cartagenesdevs-projects
2. Clique no projeto "simulador-de-juros-compostos"
3. Aba "Settings" no topo
4. "Environment Variables" no menu lateral

### **"Como saber se o backend está funcionando?"**
Depois de deployar no Render, teste:
```
https://SEU-BACKEND.onrender.com/health
```
Deve retornar: `{"status":"OK","message":"Servidor rodando!"}`

---

## 💡 **Quer que eu crie o guia de deploy do backend no Render?**

Posso criar um passo-a-passo com screenshots e tudo mais!
