import React from 'react';

const Header: React.FC = () => {
  const handleSignInClick = () => {
    alert('Funcionalidade de login em breve!');
  };

  const handleSignUpClick = () => {
    alert('Funcionalidade de cadastro em breve!');
  };

  return (
    <header className="bg-gradient-to-r from-amber-600 to-amber-800 text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-bold">
          <a href="#">Cartagenes</a>
        </div>
        
        <div className="hidden md:flex flex-grow justify-center px-10">
            <div className="flex items-center space-x-2 bg-white/90 text-gray-700 px-3 py-1.5 rounded-lg w-full max-w-lg shadow-inner">
                <i className="fa fa-search text-gray-400"></i>
                <input 
                    type="text" 
                    placeholder="Pesquise por calculadoras, notícias e mais..." 
                    className="bg-transparent focus:outline-none w-full text-sm placeholder-gray-500"
                />
            </div>
        </div>

        <div className="hidden md:flex items-center space-x-6 text-sm">
          <a href="#" className="hover:text-amber-200 transition-colors">Calculadoras</a>
          <button onClick={handleSignInClick} className="hover:text-amber-200 transition-colors font-semibold">
            Entrar
          </button>
          <button 
            onClick={handleSignUpClick}
            className="bg-white text-amber-800 rounded-md px-4 py-2 text-xs font-bold hover:bg-amber-100 transition-colors"
          >
            Cadastrar-se
          </button>
        </div>

        <div className="md:hidden">
            {/* Mobile menu button can go here */}
            <button className="text-white focus:outline-none">
                <i className="fa fa-bars text-xl"></i>
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;