import React from 'react'

const items = [
  { title: 'Assessoria Contábil', desc: 'Rotinas contábeis completas e conformidade fiscal.', icon: '📊' },
  { title: 'Planejamento Tributário', desc: 'Estratégias para reduzir custos e riscos.', icon: '📈' },
  { title: 'Gestão Financeira', desc: 'Fluxo de caixa, DRE e indicadores de desempenho.', icon: '💼' },
  { title: 'Consultoria Empresarial', desc: 'Organização, processos e crescimento sustentável.', icon: '🧭' },
]

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">Serviços</h2>
          <p className="mt-2 text-neutral-600">Soluções completas para cada fase do seu negócio.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((s) => (
            <div key={s.title} className="rounded-2xl bg-white p-6 shadow-card border border-neutral-100 hover:shadow-lg transition-shadow">
              <div className="text-4xl">{s.icon}</div>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-neutral-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
