import React from 'react'

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="text-xl md:text-2xl font-extrabold text-brand-sky font-display">
          Alpha Contabilidade & Consultoria
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <a href="#home" className="hover:text-brand-sky transition-colors">Home</a>
          <a href="#sobre" className="hover:text-brand-sky transition-colors">Sobre</a>
          <a href="#servicos" className="hover:text-brand-sky transition-colors">Serviços</a>
          <a href="#depoimentos" className="hover:text-brand-sky transition-colors">Depoimentos</a>
          <a href="#contato" className="hover:text-brand-sky transition-colors">Contato</a>
        </div>
        <a href="#contato" className="inline-flex items-center justify-center rounded-full bg-brand-sky text-white px-4 py-2 text-sm font-semibold shadow hover:bg-blue-700 transition-colors">
          Solicite uma consultoria
        </a>
      </nav>
    </header>
  )
}

export default Navbar
