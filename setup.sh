#!/bin/bash

# 🚀 Script de Inicialização - Simulador de Juros Compostos

echo "🧮 Simulador de Juros Compostos - Setup"
echo "========================================"
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado!"
    echo ""
    echo "Por favor, instale o Node.js primeiro:"
    echo ""
    echo "Opção 1 - Via Conda (se você usa Anaconda):"
    echo "  conda install -c conda-forge nodejs"
    echo ""
    echo "Opção 2 - Via apt (Ubuntu/Debian):"
    echo "  sudo apt update && sudo apt install nodejs npm"
    echo ""
    echo "Opção 3 - Via NVM (Recomendado):"
    echo "  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash"
    echo "  source ~/.bashrc"
    echo "  nvm install --lts"
    echo ""
    exit 1
fi

echo "✅ Node.js $(node --version) detectado"
echo "✅ npm $(npm --version) detectado"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
echo ""

echo "1️⃣ Instalando dependências do frontend..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erro ao instalar dependências do frontend"
    exit 1
fi

echo ""
echo "2️⃣ Instalando dependências do backend..."
cd server
npm install

if [ $? -ne 0 ]; then
    echo "❌ Erro ao instalar dependências do backend"
    exit 1
fi

cd ..

echo ""
echo "✅ Todas as dependências foram instaladas com sucesso!"
echo ""
echo "========================================"
echo "🎉 Setup concluído!"
echo "========================================"
echo ""
echo "Para iniciar o projeto, execute:"
echo ""
echo "  npm run dev:all"
echo ""
echo "Ou execute separadamente:"
echo ""
echo "  Terminal 1: npm run dev:backend"
echo "  Terminal 2: npm run dev"
echo ""
echo "Acesse o aplicativo em: http://localhost:3000"
echo "API Backend em: http://localhost:3001"
echo ""
