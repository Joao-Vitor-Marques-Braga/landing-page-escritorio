import React, { useEffect, useState } from 'react'

const Footer: React.FC = () => {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer className="border-top border-neutral-200 bg-white border-t">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Alpha Contabilidade & Consultoria. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#" className="hover:text-brand-sky">Instagram</a>
            <a href="#" className="hover:text-brand-sky">LinkedIn</a>
            <a href="#" className="hover:text-brand-sky">Facebook</a>
          </div>
        </div>
      </footer>

      {/* Botão flutuante: Orçamento */}
      <a
        href="#contato"
        className="fixed bottom-6 left-6 z-50 rounded-full bg-brand-sky text-white px-4 py-3 text-sm font-semibold shadow-lg hover:bg-blue-700"
      >
        Solicitar Orçamento
      </a>

      {/* Voltar ao topo */}
      {visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 rounded-full bg-brand-blue text-white w-12 h-12 shadow-lg hover:bg-slate-900"
          aria-label="Voltar ao topo"
        >
          ↑
        </button>
      )}
    </>
  )
}

export default Footer
