import React from 'react'

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 items-center">
        <div className="rounded-2xl overflow-hidden shadow-card border border-neutral-100">
          <img
            src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1974&auto=format&fit=crop"
            alt="Equipe de escritório"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">Sobre Nós</h2>
          <p className="mt-4 text-neutral-700 leading-relaxed">
            Na Alpha Contabilidade & Consultoria, oferecemos atendimento consultivo com foco em resultados. Nossa
            equipe reúne experiência e tecnologia para apoiar sua empresa em decisões estratégicas e no dia a dia
            contábil e financeiro.
          </p>
          <p className="mt-3 text-neutral-700">
            Trabalhamos com transparência, proximidade e excelência técnica.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
