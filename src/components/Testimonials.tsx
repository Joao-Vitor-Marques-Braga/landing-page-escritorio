import React from 'react'

const testimonials = [
  {
    name: 'Mariana R.',
    text: 'Profissionais competentes e atenciosos. A Alpha simplificou nossa rotina contábil.',
  },
  {
    name: 'Eduardo S.',
    text: 'Consultoria estratégica que ajudou a reduzir custos e aumentar a eficiência.',
  },
  {
    name: 'Luciana P.',
    text: 'Transparência e agilidade. Recomendo para qualquer empresa que busca parceria.',
  },
]

const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-neutral-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">Depoimentos</h2>
          <p className="mt-2 text-neutral-600">O que nossos clientes dizem</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl bg-white p-6 shadow-card border border-neutral-100">
              <p className="text-neutral-700">“{t.text}”</p>
              <p className="mt-4 text-sm font-semibold text-neutral-900">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
