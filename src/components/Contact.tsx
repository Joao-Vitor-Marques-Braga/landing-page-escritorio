import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Mensagem enviada!')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <section id="contato" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-900">Contato</h2>
          <p className="mt-2 text-neutral-600">Fale com a gente e solicite uma consultoria.</p>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Nome"
              className="w-full rounded-xl border border-neutral-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sky"
              required
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              placeholder="Email"
              className="w-full rounded-xl border border-neutral-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sky"
              required
            />
            <textarea
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Mensagem"
              rows={5}
              className="w-full rounded-xl border border-neutral-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-sky"
              required
            />
            <button type="submit" className="inline-flex items-center justify-center rounded-full bg-brand-sky text-white px-6 py-3 text-base font-semibold shadow hover:bg-blue-700 transition-colors">
              Enviar mensagem
            </button>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-100">
                <p className="text-sm text-neutral-600">Telefone</p>
                <p className="font-semibold">(11) 2222-2222</p>
              </div>
              <div className="rounded-xl bg-neutral-50 p-4 border border-neutral-100">
                <p className="text-sm text-neutral-600">Endereço</p>
                <p className="font-semibold">Av. Negócios, 500 - Centro</p>
              </div>
            </div>
          </form>

          <div className="rounded-2xl overflow-hidden shadow-card border border-neutral-100 h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2100&auto=format&fit=crop"
              alt="Escritório"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
