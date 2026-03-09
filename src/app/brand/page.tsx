'use client';

import { useState } from 'react';
import SpotlightCard from '@/components/SpotlightCard';
import StarBorder from '@/components/StarBorder';

/* ─── Data ─── */

const primaryColors = [
  { name: 'Dark', hex: '#0a0a0a', usage: 'Backgrounds principais', textColor: '#fff' },
  { name: 'White', hex: '#ffffff', usage: 'Texto sobre dark', textColor: '#0a0a0a' },
];

const accentColors = [
  { name: 'Blue', hex: '#0071e3', usage: 'Accent principal, links, CTAs', textColor: '#fff' },
  { name: 'Cyan', hex: '#5AC8FA', usage: 'Destaques, gradientes, efeitos', textColor: '#0a0a0a' },
  { name: 'Purple', hex: '#bf5af2', usage: 'Accent criativo, social media', textColor: '#fff' },
  { name: 'Green', hex: '#34c759', usage: 'Sucesso, status, dev/tech', textColor: '#0a0a0a' },
  { name: 'Orange', hex: '#ff9f0a', usage: 'Alertas, SEO, métricas', textColor: '#0a0a0a' },
];

const surfaceColors = [
  { name: 'Card', hex: '#111111', usage: 'Superfície de cards', textColor: '#fff' },
  { name: 'Footer', hex: '#050505', usage: 'Footer, áreas recuadas', textColor: '#fff' },
  { name: 'Border', hex: 'rgba(255,255,255,0.06)', display: '#ffffff0f', usage: 'Borders padrão', textColor: '#fff' },
  { name: 'Border Hover', hex: 'rgba(255,255,255,0.12)', display: '#ffffff1f', usage: 'Borders em hover', textColor: '#fff' },
];

const typeScale = [
  { label: 'Display', size: 'clamp(2.25rem, 5.5vw, 4rem)', weight: 800, tracking: '-0.035em', sample: 'WHP' },
  { label: 'Heading 1', size: 'clamp(2rem, 4vw, 3rem)', weight: 700, tracking: '-0.03em', sample: 'Cresça sua marca' },
  { label: 'Heading 2', size: 'clamp(1.75rem, 3.5vw, 2.75rem)', weight: 700, tracking: '-0.03em', sample: 'Sobre o time' },
  { label: 'Heading 3', size: '1.125rem', weight: 600, tracking: '-0.02em', sample: 'Identidade Visual' },
  { label: 'Body', size: '1.0625rem', weight: 400, tracking: '-0.01em', sample: 'Auxiliamos empresas a alavancar seus negócios utilizando metodologias criativas.' },
  { label: 'Small', size: '0.875rem', weight: 400, tracking: '-0.01em', sample: 'Soluções completas para marcas que querem se destacar no digital.' },
  { label: 'Overline', size: '0.75rem', weight: 600, tracking: '0.2em', sample: 'O QUE FAZEMOS' },
];

/* ─── Helpers ─── */

function ColorSwatch({ name, hex, display, usage, textColor }: {
  name: string; hex: string; display?: string; usage: string; textColor: string;
}) {
  const [copied, setCopied] = useState(false);
  const showHex = display || hex;

  const handleCopy = () => {
    navigator.clipboard.writeText(showHex);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div
      onClick={handleCopy}
      style={{
        cursor: 'pointer',
        borderRadius: '1rem',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.06)',
        transition: 'transform 0.2s ease, border-color 0.2s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
      }}
    >
      <div
        style={{
          background: hex,
          height: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: textColor,
          fontSize: '0.8125rem',
          fontWeight: 600,
        }}
      >
        {copied ? 'Copiado!' : ''}
      </div>
      <div style={{ padding: '0.875rem 1rem', background: '#111' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#fff', fontSize: '0.875rem', fontWeight: 600 }}>{name}</span>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', fontFamily: 'monospace' }}>{showHex}</span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{usage}</p>
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: '0.75rem',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        color: '#86868b',
        marginBottom: '1rem',
      }}
    >
      {children}
    </p>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 700,
        color: '#fff',
        letterSpacing: '-0.03em',
        lineHeight: 1.15,
      }}
    >
      {children}
    </h2>
  );
}

/* ─── Page ─── */

export default function BrandPage() {
  return (
    <div style={{ background: '#0a0a0a', minHeight: '100vh' }}>

      {/* ── Hero ── */}
      <section
        style={{
          padding: '8rem 4rem 6rem',
          textAlign: 'center',
          background: 'radial-gradient(ellipse 1000px 600px at 50% 40%, rgba(0,113,227,0.08), transparent), radial-gradient(ellipse 800px 500px at 20% 80%, rgba(191,90,242,0.06), transparent), #0a0a0a',
        }}
      >
        <div className="mx-auto max-w-[900px]">
          {/* Logo display */}
          <div
            style={{
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.05em',
              lineHeight: 0.9,
              marginBottom: '1.5rem',
            }}
          >
            WHP
          </div>
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.4)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '3rem',
            }}
          >
            We Have a Plan
          </p>
          <div
            style={{
              width: 60,
              height: 1,
              background: 'rgba(255,255,255,0.12)',
              margin: '0 auto 3rem',
            }}
          />
          <p
            style={{
              fontSize: '1.0625rem',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.7,
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            Identidade visual da WHP — uma marca construída sobre os pilares de
            tecnologia, estratégia e design. Futurista, minimalista e precisa.
          </p>
        </div>
      </section>

      {/* ── Logo Variations ── */}
      <section style={{ padding: '7rem 4rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mx-auto max-w-[1100px]">
          <SectionLabel>01 — Logo</SectionLabel>
          <SectionTitle>Marca</SectionTitle>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '600px', marginTop: '1rem', marginBottom: '3rem' }}>
            A wordmark WHP utiliza Urbanist 800 com tracking comprimido. Minimalista e direta — reflete a abordagem da agência.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {/* Dark bg */}
            <div
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '1.25rem',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                minHeight: 220,
              }}
            >
              <span style={{ fontSize: '3.5rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.05em' }}>WHP</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>We Have a Plan</span>
              <span style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.2)', marginTop: '0.5rem' }}>Positiva — sobre fundo escuro</span>
            </div>

            {/* Light bg */}
            <div
              style={{
                background: '#fbfbfd',
                border: '1px solid rgba(0,0,0,0.08)',
                borderRadius: '1.25rem',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
                minHeight: 220,
              }}
            >
              <span style={{ fontSize: '3.5rem', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-0.05em' }}>WHP</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'rgba(0,0,0,0.4)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>We Have a Plan</span>
              <span style={{ fontSize: '0.6875rem', color: 'rgba(0,0,0,0.3)', marginTop: '0.5rem' }}>Negativa — sobre fundo claro</span>
            </div>
          </div>

          {/* Logo with accents */}
          <div
            style={{
              marginTop: '1.5rem',
              background: '#111',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '1.25rem',
              padding: '3rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '3rem',
              minHeight: 180,
            }}
          >
            {['#0071e3', '#5AC8FA', '#bf5af2', '#34c759', '#ff9f0a'].map((color) => (
              <span
                key={color}
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 800,
                  color,
                  letterSpacing: '-0.05em',
                  transition: 'transform 0.2s ease',
                }}
              >
                WHP
              </span>
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '0.6875rem', color: 'rgba(255,255,255,0.2)', marginTop: '0.75rem' }}>
            Variações accent — uso restrito a destaques e materiais digitais
          </p>
        </div>
      </section>

      {/* ── Colors ── */}
      <section
        style={{
          padding: '7rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'radial-gradient(ellipse 800px 500px at 90% 30%, rgba(90,200,250,0.05), transparent), #0a0a0a',
        }}
      >
        <div className="mx-auto max-w-[1100px]">
          <SectionLabel>02 — Cores</SectionLabel>
          <SectionTitle>Paleta</SectionTitle>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '600px', marginTop: '1rem', marginBottom: '3rem' }}>
            Paleta dark-first com accents vibrantes. Cada cor accent tem um papel funcional definido. Clique para copiar o hex.
          </p>

          {/* Primary */}
          <h3 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Primárias</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
            {primaryColors.map((c) => <ColorSwatch key={c.hex} {...c} />)}
          </div>

          {/* Accents */}
          <h3 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Accents</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1rem', marginBottom: '2.5rem' }}>
            {accentColors.map((c) => <ColorSwatch key={c.hex} {...c} />)}
          </div>

          {/* Surfaces */}
          <h3 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Superfícies & Borders</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {surfaceColors.map((c) => <ColorSwatch key={c.name} {...c} />)}
          </div>
        </div>
      </section>

      {/* ── Typography ── */}
      <section style={{ padding: '7rem 4rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="mx-auto max-w-[1100px]">
          <SectionLabel>03 — Tipografia</SectionLabel>
          <SectionTitle>Urbanist</SectionTitle>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '600px', marginTop: '1rem', marginBottom: '3rem' }}>
            Urbanist é a fonte exclusiva da WHP. Geométrica, moderna e altamente legível — funciona de headings display a corpo de texto.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {typeScale.map((t, i) => (
              <div
                key={t.label}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '160px 1fr',
                  gap: '2rem',
                  alignItems: 'baseline',
                  padding: '1.5rem 0',
                  borderBottom: i < typeScale.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}
              >
                {/* Meta */}
                <div>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 600, color: '#fff' }}>{t.label}</p>
                  <p style={{ fontSize: '0.6875rem', color: 'rgba(255,255,255,0.3)', marginTop: '0.25rem', fontFamily: 'monospace' }}>
                    {typeof t.size === 'string' && t.size.includes('clamp') ? t.size.split(',')[2]?.replace(')', '').trim() : t.size} · {t.weight} · {t.tracking}
                  </p>
                </div>
                {/* Sample */}
                <p
                  style={{
                    fontSize: t.size,
                    fontWeight: t.weight,
                    letterSpacing: t.tracking,
                    color: '#fff',
                    lineHeight: 1.3,
                    textTransform: t.label === 'Overline' ? 'uppercase' : undefined,
                  }}
                >
                  {t.sample}
                </p>
              </div>
            ))}
          </div>

          {/* Weight showcase */}
          <div
            style={{
              marginTop: '3rem',
              padding: '2.5rem',
              background: '#111',
              borderRadius: '1.25rem',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem' }}>Pesos disponíveis</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                { weight: 300, label: 'Light' },
                { weight: 400, label: 'Regular' },
                { weight: 500, label: 'Medium' },
                { weight: 600, label: 'Semibold' },
                { weight: 700, label: 'Bold' },
                { weight: 800, label: 'Extrabold' },
              ].map((w) => (
                <div key={w.weight} style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem' }}>
                  <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace', width: '3rem' }}>{w.weight}</span>
                  <span style={{ fontSize: '1.5rem', fontWeight: w.weight, color: '#fff', letterSpacing: '-0.02em' }}>
                    {w.label} — Estratégia, design e tecnologia.
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Visual Language ── */}
      <section
        style={{
          padding: '7rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          background: 'radial-gradient(ellipse 800px 500px at 10% 40%, rgba(191,90,242,0.06), transparent), radial-gradient(ellipse 700px 400px at 90% 70%, rgba(52,199,89,0.05), transparent), #0a0a0a',
        }}
      >
        <div className="mx-auto max-w-[1100px]">
          <SectionLabel>04 — Linguagem Visual</SectionLabel>
          <SectionTitle>Elementos</SectionTitle>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.0625rem', lineHeight: 1.7, maxWidth: '600px', marginTop: '1rem', marginBottom: '3rem' }}>
            Componentes visuais que definem a experiência da marca — de cards interativos a botões com efeitos de luz.
          </p>

          {/* Cards */}
          <h3 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Cards com Spotlight</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
            {[
              { title: 'Card Padrão', color: 'rgba(0, 113, 227, 0.25)', accent: '#0071e3' },
              { title: 'Card Accent', color: 'rgba(191, 90, 242, 0.25)', accent: '#bf5af2' },
              { title: 'Card Destaque', color: 'rgba(52, 199, 89, 0.25)', accent: '#34c759' },
            ].map((card) => (
              <SpotlightCard key={card.title} spotlightColor={card.color} className="services-card">
                <div
                  className="services-card__icon"
                  style={{ color: card.accent }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-[-0.02em] text-white">{card.title}</h3>
                <p className="mt-2 text-sm font-normal leading-relaxed text-[#86868b]">
                  Hover para ver o efeito spotlight com gradiente radial que acompanha o cursor.
                </p>
              </SpotlightCard>
            ))}
          </div>

          {/* Buttons */}
          <h3 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Botões</h3>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '2.5rem',
              background: '#111',
              borderRadius: '1.25rem',
              border: '1px solid rgba(255,255,255,0.06)',
              marginBottom: '3rem',
            }}
          >
            <StarBorder
              as="a"
              href="#"
              color="#5AC8FA"
              speed="5s"
              thickness={2}
              className="teste-cta-star"
            >
              Primary CTA
            </StarBorder>
            <a
              href="#"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '0.875rem 2rem',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: '100px',
                color: '#fff',
                fontWeight: 600,
                fontSize: '0.9375rem',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Secondary CTA
            </a>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.5rem 1.25rem',
                borderRadius: '100px',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#0071e3',
                background: 'rgba(0,113,227,0.1)',
              }}
            >
              Tag / Badge
            </span>
          </div>

          {/* Gradients */}
          <h3 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ambient Gradients</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '3rem' }}>
            {[
              { bg: 'radial-gradient(ellipse 400px 300px at 50% 50%, rgba(0,113,227,0.12), transparent), #0a0a0a', label: 'Blue glow' },
              { bg: 'radial-gradient(ellipse 400px 300px at 50% 50%, rgba(191,90,242,0.12), transparent), #0a0a0a', label: 'Purple glow' },
              { bg: 'radial-gradient(ellipse 400px 300px at 30% 40%, rgba(52,199,89,0.1), transparent), radial-gradient(ellipse 400px 300px at 70% 60%, rgba(255,159,10,0.1), transparent), #0a0a0a', label: 'Dual glow' },
            ].map((g) => (
              <div
                key={g.label}
                style={{
                  background: g.bg,
                  borderRadius: '1.25rem',
                  border: '1px solid rgba(255,255,255,0.06)',
                  height: 160,
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '1rem',
                }}
              >
                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', fontFamily: 'monospace' }}>{g.label}</span>
              </div>
            ))}
          </div>

          {/* Icons */}
          <h3 style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Iconografia</h3>
          <div
            style={{
              display: 'flex',
              gap: '1.5rem',
              padding: '2.5rem',
              background: '#111',
              borderRadius: '1.25rem',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {[
              { color: '#0071e3', icon: <><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></> },
              { color: '#34c759', icon: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></> },
              { color: '#ff9f0a', icon: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></> },
              { color: '#bf5af2', icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /> },
              { color: '#5AC8FA', icon: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></> },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  width: 56,
                  height: 56,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  color: item.color,
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  {item.icon}
                </svg>
              </div>
            ))}
            <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
              <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)', maxWidth: '200px', lineHeight: 1.5 }}>
                Ícones em estilo stroke (1.5px), arredondados, na cor accent correspondente ao contexto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <section
        style={{
          padding: '5rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          WHP — We Have a Plan &middot; Brand Guidelines v1.0
        </p>
      </section>
    </div>
  );
}
