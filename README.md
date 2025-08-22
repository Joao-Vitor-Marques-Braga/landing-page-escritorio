# Alpha Contabilidade & Consultoria — Site Institucional

Site institucional fictício para a empresa Alpha Contabilidade & Consultoria, construído com React + Vite e estilizado com TailwindCSS. O layout é responsivo (mobile first) e segue estética corporativa (azul escuro, branco e cinza), com componentes reutilizáveis.

### Principais seções
- Navbar fixa com âncoras
- Hero com imagem de fundo e CTA “Solicite uma consultoria”
- Sobre Nós (texto + imagem)
- Serviços (grid com 4 cards)
- Depoimentos (3 cards)
- Contato (formulário básico + dados)
- Footer com redes sociais e botões flutuantes: “Solicitar Orçamento” e “Voltar ao topo”

## Tecnologias
- React + Vite (TypeScript)
- TailwindCSS
- ESLint configurado

## Como rodar localmente
Pré‑requisitos: Node.js LTS e npm.

```bash
git clone <seu-repo>
cd DIREITO
npm install
npm run dev
```
Aplicação em `http://localhost:5173`.

Build de produção e preview:
```bash
npm run build
npm run preview
```

## Estrutura de pastas (resumo)
```txt
src/
  components/
    About.tsx
    Contact.tsx
    Footer.tsx
    Hero.tsx
    Navbar.tsx
    Services.tsx
    Testimonials.tsx
  App.tsx
  main.tsx
  index.css
tailwind.config.js
postcss.config.js
index.html
```

## Personalização
- Cores e tipografia: ajuste em `tailwind.config.js` em `theme.extend.colors.brand` e `fontFamily`.
- Imagens: substitua as URLs do Unsplash nos componentes (`Hero`, `About`, etc.).
- Textos/links: edite diretamente os componentes em `src/components`.

## Deploy na Vercel
1) Faça o build local: `npm run build` (gera `dist/`).
2) Opção A: suba o repositório no GitHub e importe na Vercel; framework = Vite, comando de build padrão.
3) Opção B: via CLI da Vercel (`vercel`), apontando para o projeto e deployando `dist/`.

## Acessibilidade e SEO
- HTML semântico, contrastes adequados, foco no teclado.
- Ajuste metatags em `index.html` (título, description, OG/Twitter) conforme necessidade.

## Créditos de imagens
As imagens utilizam links do Unsplash apenas para fins demonstrativos. Substitua por imagens próprias antes do uso comercial.

---
Feito com ❤️ para demonstração de portfólio.