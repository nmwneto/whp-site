# WHP Site — Instruções do Projeto

## Sobre
Site institucional da **WHP — We Have a Plan**, agência de design.
Deploy automático via GitHub → Vercel.
- **Repo**: github.com/nmwneto/whp-site
- **Vercel**: deploy automático a cada push na branch `main`
- **Dev**: `npm run dev` (Turbopack, porta 3000)

## Stack
- Next.js 16+ (App Router, Turbopack)
- TypeScript + Tailwind CSS v4 + shadcn/ui
- React Bits (reactbits.dev) para efeitos visuais
- three.js + ogl (WebGL), GSAP (animações), motion/react (transitions)
- Fonte: Urbanist (next/font/google)

## Design System — Dark Theme

### Paleta
| Token | Valor |
|---|---|
| Background | `#0a0a0a` |
| Background footer | `#050505` |
| Card background | `#111` |
| Text primary | `#fff` |
| Text secondary | `rgba(255,255,255,0.5)` ou `#86868b` |
| Text muted | `rgba(255,255,255,0.4)` |
| Border | `rgba(255,255,255,0.06)` |
| Border hover | `rgba(255,255,255,0.12)` |
| Accent blue | `#0071e3` |
| Accent green | `#34c759` |
| Accent orange | `#ff9f0a` |
| Accent purple | `#bf5af2` |
| Accent cyan | `#5AC8FA` |

### Tipografia
- Heading: Urbanist 700-800, letter-spacing -0.03em, line-height 1.06-1.15
- Body: Urbanist 400-500, line-height 1.6-1.65
- Label/overline: 0.75rem, uppercase, tracking 0.2em, color `#86868b`
- Tamanhos de heading usam `clamp()` para escala fluida

### Espaçamento
- Section padding: `7rem 4rem`
- Max-width conteúdo: `1100px`
- Max-width heading: `800px`
- Gap entre cards: `gap-4` ou `gap-5`
- Section header margin-bottom: `3.5rem`

### Cards (SpotlightCard)
- Background: `#111 !important`
- Border: `rgba(255,255,255,0.06)`
- Border-radius: `1.25rem`
- Padding: `2rem` (services), `1.75rem` (team)
- Hover: `translateY(-2px)` + border brighten
- Classes CSS: `.services-card`, `.team-card`, `.testimonial-card`

### Botões
- Primary (StarBorder): fundo branco, texto escuro, border-radius 100px, classe `.teste-cta-star`
- Secondary: fundo `rgba(255,255,255,0.06)`, border `rgba(255,255,255,0.12)`, cor branca

### Ambient Gradients
Todas as seções (exceto Hero/Logos/Footer) têm radial gradients sutis no background:
- Opacidade: 0.07-0.10
- Elipses: 700-1000px
- Cada seção usa cores accent diferentes em posições alternadas
- Exemplo: `radial-gradient(ellipse 900px 600px at 85% 20%, rgba(0,113,227,0.1), transparent), #0a0a0a`

## Arquitetura de Componentes

### Seções (ordem na page.tsx)
1. `Hero` — Aurora background + SplitText heading + nav inline
2. `Logos` — LogoLoop com nomes de tecnologias
3. `Stats` — BlurText heading + tags + CountUp counters (grid 3 cols)
4. `Services` — SpotlightCards com ícones SVG (grid 2 cols)
5. `CtaBanner` — BlurText + StarBorder CTA + secondary button
6. `Team` — SpotlightCards com avatar, bio, social (grid 4 cols)
7. `Testimonials` — SpotlightCards com quote, stars, autor (grid 3 cols)
8. `Footer` — 4 colunas: brand/social + nav + serviços + contato

### Wrapper global
- `ClickSparkWrapper` — canvas fixo para sparks brancos ao clicar (z-index 9999)

### Padrão de seção
```tsx
<section style={{ background: '...gradients..., #0a0a0a', padding: '7rem 4rem' }}>
  <div className="mx-auto max-w-[1100px] text-center" style={{ marginBottom: '3.5rem' }}>
    <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#86868b]">Label</p>
    <BlurText text="Título" className="... justify-center" delay={60} animateBy="words" direction="bottom" />
    <p className="... text-[#86868b]">Subtítulo</p>
  </div>
  {/* Grid de conteúdo */}
</section>
```

## React Bits — Componentes Instalados
| Componente | Uso | Notas |
|---|---|---|
| Aurora | Background do Hero | blend=1.2, amplitude=1.8, speed=0.5, container com top=-30%, height=160% |
| SplitText | Heading do Hero | Requer `onLetterAnimationComplete` prop |
| BlurText | Headings de todas as seções | `animateBy="words"`, `direction="bottom"` |
| StarBorder | CTAs primários | thickness=2, classe `.teste-cta-star` |
| SpotlightCard | Cards de serviços, team, testimonials | spotlightColor por card |
| CountUp | Números na Stats | Requer `onStart` e `onEnd` props (TS) |
| LogoLoop | Seção de logos | Requer wrapper com `overflow: hidden` |
| ClickSpark | Efeito de click global | Usado via ClickSparkWrapper custom |
| ChromaGrid | ~~Team~~ (substituído) | Disponível mas não usado |
| GradualBlur | ~~Page blur~~ (removido) | Disponível mas não usado |

### Instalação de novos componentes
```bash
npx shadcn@latest add "https://reactbits.dev/r/NomeComponente-JS-CSS"
```
- Componentes JS não têm tipos TS — causa erros no build
- `next.config.ts` tem `typescript.ignoreBuildErrors: true` por isso

## Build & Deploy

### Configuração (next.config.ts)
```ts
typescript: { ignoreBuildErrors: true }  // ReactBits sem tipagem
eslint: { ignoreDuringBuilds: true }     // Warnings de ReactBits
```

### Deploy
- Push para `main` → Vercel detecta e faz deploy automático
- Não usar `output: 'export'` — o site funciona melhor com SSR da Vercel

### Git
- User: Nelson Mozart (nmwneto@gmail.com)
- Remote: github.com/nmwneto/whp-site
- Branch principal: `main`

## Armadilhas Conhecidas

| Problema | Causa | Solução |
|---|---|---|
| Aurora só no topo do Hero | Shader renderiza no topo por padrão | Container com `top: -30%`, `height: 160%` |
| ClickSpark invisível | z-index baixo, canvas atrás dos elementos | ClickSparkWrapper custom com `position: fixed`, z-index 9999 |
| StarBorder sem efeito | Padding vertical only + gradient transparente muito pequeno | `padding: ${thickness}px` (todos os lados), `transparent 30%` |
| Scroll horizontal | `100vw` inclui scrollbar; LogoLoop excede container | Usar `100%` no lugar de `100vw`; `overflow: hidden` no LogoLoop |
| BlurText desalinhado | Componente usa `display: flex; flexWrap: wrap` | Adicionar `justify-center` na className |
| Hydration mismatch | Extensão ColorZilla adiciona atributo no body | Inofensivo, ignorar |
| Build falha na Vercel | ReactBits sem tipagem TypeScript | `ignoreBuildErrors: true` no next.config |
| SplitText erro TS | Prop obrigatória faltando | Adicionar `onLetterAnimationComplete={() => {}}` |
| CountUp erro TS | Props obrigatórias faltando | Adicionar `onStart` e `onEnd` (ignorado pelo config) |

## Responsividade
- **Não implementada ainda** — site é desktop-only
- Quando implementar: usar CSS classes no globals.css com media queries, NÃO substituir inline styles por classes inexistentes
- Testar desktop PRIMEIRO antes de aplicar media queries
