# Instituto Hands On — Landing Page

Landing page do Instituto Hands On, escola de Quality Assurance.

## Stack
- Next.js 15 + TypeScript
- Tailwind CSS v4
- Fontes: Syne + DM Sans (Google Fonts)

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse em `http://localhost:3000`

## Deploy (Vercel)

```bash
npx vercel --prod
```

## Estrutura

```
app/
├── components/
│   ├── Cursor.tsx       # Cursor customizado
│   ├── Nav.tsx          # Navbar com scroll effect
│   ├── Hero.tsx         # Hero com contadores animados
│   ├── Marquee.tsx      # Marquee de ferramentas
│   ├── Para.tsx         # Seção "para você"
│   ├── Founders.tsx     # Storytelling dos fundadores
│   ├── Modulos.tsx      # Módulos com tabs interativas
│   ├── Depoimentos.tsx  # Depoimentos de alunos
│   ├── Pricing.tsx      # Planos Prata / Ouro / Diamante
│   ├── FAQ.tsx          # FAQ + CTA final
│   └── Footer.tsx
├── globals.css          # Design system / CSS vars
├── layout.tsx
└── page.tsx
```

## Contato
WhatsApp: (11) 96331-9196  
Instagram: @handsoninstituto
