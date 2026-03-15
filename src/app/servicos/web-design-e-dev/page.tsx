'use client';

import BlurText from '@/components/BlurText';
import StarBorder from '@/components/StarBorder';
import SpotlightCard from '@/components/SpotlightCard';
import FadeIn from '@/components/FadeIn';
import NavbarWHP from '@/components/NavbarWHP';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const ACCENT = '#34c759';

const deliverables = [
  {
    title: 'Design UI/UX',
    description: 'Interfaces intuitivas e visualmente impactantes, projetadas com foco na experiência do usuário e conversão.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
  },
  {
    title: 'Desenvolvimento Front-end',
    description: 'Código limpo e performático com React, Next.js e tecnologias modernas que garantem velocidade e qualidade.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Responsividade Total',
    description: 'Sites que funcionam perfeitamente em todos os dispositivos — desktop, tablet e mobile.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: 'CMS & Painel Admin',
    description: 'Integração com sistemas de gerenciamento de conteúdo para que você edite seu site com autonomia.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" y1="21" x2="4" y2="14" />
        <line x1="4" y1="10" x2="4" y2="3" />
        <line x1="12" y1="21" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12" y2="3" />
        <line x1="20" y1="21" x2="20" y2="16" />
        <line x1="20" y1="12" x2="20" y2="3" />
        <line x1="1" y1="14" x2="7" y2="14" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="17" y1="16" x2="23" y2="16" />
      </svg>
    ),
  },
  {
    title: 'Performance & SEO Técnico',
    description: 'Otimização de velocidade, Core Web Vitals, meta tags e estrutura semântica para ranquear no Google.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Deploy & Hospedagem',
    description: 'Publicação em infraestrutura moderna com CDN global, SSL, CI/CD e monitoramento contínuo.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
];

export default function WebDesignDevPage() {
  return (
    <>
      <NavbarWHP />

      {/* Hero */}
      <section
        style={{
          background: 'radial-gradient(ellipse 900px 500px at 50% 60%, rgba(52,199,89,0.12), transparent), #0a0a0a',
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
              background: 'rgba(52,199,89,0.1)',
              border: '1px solid rgba(52,199,89,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: ACCENT,
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          </div>

          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
            Serviço
          </p>
          <BlurText
            text="Web Design & Dev"
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] text-white justify-center leading-[1.1]"
            delay={60}
            animateBy="words"
            direction="bottom"
          />
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: 600 }}>
            Projetamos e desenvolvemos sites de alta performance com design único, código limpo e tecnologia de ponta.
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
        <div className="about-grid mx-auto max-w-[900px]" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 className="text-[1.75rem] font-bold tracking-[-0.03em] text-white" style={{ marginBottom: '1rem' }}>
              Por que um site profissional importa?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7 }}>
              Seu site é o cartão de visitas digital da sua marca. Um site rápido, bonito e bem estruturado gera confiança, atrai clientes e converte visitantes em oportunidades reais de negócio.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {['Carregamento ultrarrápido (< 2s)', 'Design que converte visitantes em clientes', 'SEO técnico desde o primeiro dia', 'Código escalável e de fácil manutenção'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: ACCENT, flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section
        style={{
          background: 'radial-gradient(ellipse 800px 500px at 80% 30%, rgba(52,199,89,0.07), transparent), #0a0a0a',
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
                  spotlightColor="rgba(52,199,89,0.2)"
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

      {/* Tech Stack */}
      <section
        style={{
          background: '#0a0a0a',
          padding: '5rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto max-w-[800px]">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#86868b]" style={{ marginBottom: '1rem' }}>
              Tecnologias
            </p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.03em] text-white">
              Stack moderna
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
            {[
              'Next.js', 'React', 'TypeScript', 'Tailwind CSS',
              'Node.js', 'Vercel', 'PostgreSQL', 'Figma',
            ].map((tech) => (
              <div
                key={tech}
                style={{
                  padding: '1rem',
                  background: '#111',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '0.75rem',
                  textAlign: 'center',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.875rem',
                  fontWeight: 500,
                }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section
        style={{
          background: 'radial-gradient(ellipse 700px 400px at 20% 50%, rgba(52,199,89,0.06), transparent), #0a0a0a',
          padding: '5rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto max-w-[800px]">
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
              { step: '01', title: 'Discovery', desc: 'Entendemos os objetivos do projeto, público-alvo e requisitos técnicos e visuais.' },
              { step: '02', title: 'Design', desc: 'Criamos wireframes e layouts de alta fidelidade no Figma com foco em UX e conversão.' },
              { step: '03', title: 'Desenvolvimento', desc: 'Codificamos com tecnologias modernas, garantindo performance, acessibilidade e SEO.' },
              { step: '04', title: 'Testes & Launch', desc: 'QA rigoroso em todos os dispositivos, otimização final e deploy em produção.' },
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
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: 'radial-gradient(ellipse 1000px 500px at 50% 50%, rgba(52,199,89,0.09), transparent), #0a0a0a',
          padding: '6rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <FadeIn className="mx-auto max-w-[600px] text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-white leading-[1.15]">
            Pronto para criar seu site?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7 }}>
            Vamos desenvolver uma presença digital que gera resultados reais.
          </p>
          <StarBorder
            as="a"
            href="/#contato"
            color={ACCENT}
            speed="4s"
            thickness={3}
            className="teste-cta-star cta-green"
          >
            Iniciar projeto
          </StarBorder>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}
