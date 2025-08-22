import React from 'react'

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-24 md:pt-28">
      <div
        className="absolute inset-0 -z-10 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2100&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-white/95" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-sm leading-tight">
            Cuidando da sua empresa com transparência e confiança.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-xl">
            Soluções contábeis e consultivas para impulsionar seus resultados.
          </p>
          <div className="mt-8 flex gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-brand-sky text-white px-6 py-3 text-base font-semibold shadow hover:bg-blue-700 transition-colors"
            >
              Solicite uma consultoria
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-full bg-white/80 text-brand-sky px-6 py-3 text-base font-semibold shadow hover:bg-white transition-colors"
            >
              Nossos serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
