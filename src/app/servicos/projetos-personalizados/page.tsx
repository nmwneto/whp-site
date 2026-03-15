'use client';

import BlurText from '@/components/BlurText';
import StarBorder from '@/components/StarBorder';
import SpotlightCard from '@/components/SpotlightCard';
import FadeIn from '@/components/FadeIn';
import NavbarWHP from '@/components/NavbarWHP';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const ACCENT = '#ff375f';

const deliverables = [
  {
    title: 'Consultoria Estratégica',
    description: 'Análise profunda do seu negócio para identificar oportunidades e definir o escopo ideal do projeto.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    title: 'Prototipagem Rápida',
    description: 'Criação de protótipos interativos para validar conceitos antes do desenvolvimento completo.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: 'Design & Desenvolvimento',
    description: 'Execução integrada de design e código, com entregas incrementais e feedback contínuo.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
  {
    title: 'Integrações & APIs',
    description: 'Conexão com ferramentas e plataformas externas: CRM, ERPs, gateways de pagamento e automações.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    title: 'Automação & IA',
    description: 'Implementação de chatbots, fluxos automatizados e inteligência artificial aplicada ao negócio.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1.27A7 7 0 0 1 14 22h-4a7 7 0 0 1-6.73-5H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z" />
        <circle cx="9.5" cy="15.5" r="1" />
        <circle cx="14.5" cy="15.5" r="1" />
      </svg>
    ),
  },
  {
    title: 'Suporte & Evolução',
    description: 'Acompanhamento pós-entrega com suporte técnico, melhorias contínuas e evolução do produto.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9 9a9 9 0 0 1 9-9" />
      </svg>
    ),
  },
];

export default function ProjetosPersonalizadosPage() {
  return (
    <>
      <NavbarWHP />

      {/* Hero */}
      <section
        style={{
          background: 'radial-gradient(ellipse 900px 500px at 50% 60%, rgba(255,55,95,0.12), transparent), #0a0a0a',
          padding: '10rem 4rem 6rem',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FadeIn className="mx-auto max-w-[800px] text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'rgba(255,255,255,0.5)',
              fontSize: '0.875rem',
              textDecoration: 'none',
              transition: 'color 0.3s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; }}
          >
            <ArrowLeft size={16} />
            Voltar ao início
          </a>

          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: 'rgba(255,55,95,0.1)',
              border: '1px solid rgba(255,55,95,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: ACCENT,
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>

          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
            Serviço
          </p>
          <BlurText
            text="Projetos Personalizados"
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] text-white justify-center leading-[1.1]"
            delay={60}
            animateBy="words"
            direction="bottom"
          />
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: 600 }}>
            Soluções sob medida que combinam design, tecnologia e estratégia para resolver desafios únicos do seu negócio.
          </p>
        </FadeIn>
      </section>

      {/* About */}
      <section
        style={{
          background: '#0a0a0a',
          padding: '5rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <FadeIn className="about-grid mx-auto max-w-[900px]" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 className="text-[1.75rem] font-bold tracking-[-0.03em] text-white" style={{ marginBottom: '1rem' }}>
              Por que um projeto personalizado?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7 }}>
              Nem todo desafio se encaixa em uma caixa pronta. Projetos personalizados são ideais quando sua empresa precisa de uma solução que conecte múltiplas disciplinas — do branding à automação, do design ao código.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {['Escopo adaptado à sua realidade', 'Equipe multidisciplinar dedicada', 'Entregas incrementais com feedback', 'Orçamento flexível e transparente'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: ACCENT, flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Deliverables */}
      <section
        style={{
          background: 'radial-gradient(ellipse 800px 500px at 80% 30%, rgba(255,55,95,0.07), transparent), #0a0a0a',
          padding: '5rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto max-w-[1100px]">
          <FadeIn>
            <div className="text-center" style={{ marginBottom: '3.5rem' }}>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#86868b]" style={{ marginBottom: '1rem' }}>
                Entregas
              </p>
              <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.03em] text-white">
                O que você recebe
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="deliverables-grid grid gap-4" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {deliverables.map((item) => (
                <SpotlightCard
                  key={item.title}
                  spotlightColor="rgba(255,55,95,0.2)"
                  className="services-card"
                >
                  <div
                    className="services-card__icon"
                    style={{ color: ACCENT }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-[-0.02em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-normal leading-relaxed text-[#86868b]">
                    {item.description}
                  </p>
                </SpotlightCard>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section
        style={{
          background: '#0a0a0a',
          padding: '5rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <FadeIn className="mx-auto max-w-[800px]">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#86868b]" style={{ marginBottom: '1rem' }}>
              Processo
            </p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.03em] text-white">
              Como trabalhamos
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {[
              { step: '01', title: 'Discovery', desc: 'Mapeamos as necessidades, objetivos e restrições do projeto em workshops colaborativos.' },
              { step: '02', title: 'Planejamento', desc: 'Definimos o escopo, tecnologias, cronograma e milestones com entregas claras.' },
              { step: '03', title: 'Execução', desc: 'Desenvolvemos em sprints com entregas incrementais, feedback contínuo e ajustes em tempo real.' },
              { step: '04', title: 'Lançamento & Suporte', desc: 'Deploy assistido, monitoramento pós-launch e suporte contínuo para evolução do produto.' },
            ].map((item) => (
              <div key={item.step} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                <span style={{ color: ACCENT, fontSize: '0.875rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums', flexShrink: 0, paddingTop: 2 }}>
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-white" style={{ marginBottom: '0.5rem' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9375rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* CTA */}
      <section
        style={{
          background: 'radial-gradient(ellipse 1000px 500px at 50% 50%, rgba(255,55,95,0.09), transparent), #0a0a0a',
          padding: '6rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <FadeIn className="mx-auto max-w-[600px] text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-white leading-[1.15]">
            Tem um projeto em mente?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7 }}>
            Conte-nos sobre o seu desafio e vamos construir a solução ideal juntos.
          </p>
          <StarBorder
            as="a"
            href="/contato"
            color={ACCENT}
            speed="4s"
            thickness={3}
            className="teste-cta-star cta-red"
          >
            Iniciar projeto
          </StarBorder>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}
