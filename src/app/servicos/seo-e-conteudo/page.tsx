'use client';

import BlurText from '@/components/BlurText';
import StarBorder from '@/components/StarBorder';
import SpotlightCard from '@/components/SpotlightCard';
import NavbarWHP from '@/components/NavbarWHP';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const deliverables = [
  {
    title: 'Auditoria SEO Completa',
    description: 'Análise técnica profunda do site: crawlability, indexação, velocidade, Core Web Vitals e estrutura de URLs.',
  },
  {
    title: 'Pesquisa de Palavras-chave',
    description: 'Mapeamento de termos estratégicos com volume de busca, dificuldade e intenção para orientar todo o conteúdo.',
  },
  {
    title: 'SEO On-page',
    description: 'Otimização de títulos, meta descriptions, headings, imagens, schema markup e estrutura semântica de cada página.',
  },
  {
    title: 'Estratégia de Conteúdo',
    description: 'Planejamento editorial com calendário de publicações, temas, formatos e objetivos de cada conteúdo.',
  },
  {
    title: 'Produção de Conteúdo',
    description: 'Textos otimizados para SEO com foco em E-E-A-T: experiência, expertise, autoridade e confiabilidade.',
  },
  {
    title: 'Relatórios & Monitoramento',
    description: 'Dashboards com métricas de tráfego, posições, conversões e evolução mês a mês com insights acionáveis.',
  },
];

export default function SeoConteudoPage() {
  return (
    <>
      <NavbarWHP />

      {/* Hero */}
      <section
        style={{
          background: 'radial-gradient(ellipse 900px 500px at 50% 60%, rgba(255,159,10,0.12), transparent), #0a0a0a',
          padding: '10rem 4rem 6rem',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="mx-auto max-w-[800px] text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
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
              background: 'rgba(255,159,10,0.1)',
              border: '1px solid rgba(255,159,10,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ff9f0a',
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </div>

          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#ff9f0a]">
            Serviço
          </p>
          <BlurText
            text="SEO & Conteúdo"
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] text-white justify-center leading-[1.1]"
            delay={60}
            animateBy="words"
            direction="bottom"
          />
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: 600 }}>
            Estratégias de SEO e conteúdo que colocam sua marca nas primeiras posições do Google e geram tráfego qualificado.
          </p>
        </div>
      </section>

      {/* About */}
      <section
        style={{
          background: '#0a0a0a',
          padding: '5rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto max-w-[900px]" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <h2 className="text-[1.75rem] font-bold tracking-[-0.03em] text-white" style={{ marginBottom: '1rem' }}>
              Por que SEO e conteúdo são essenciais?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7 }}>
              O tráfego orgânico é o canal mais sustentável e escalável de aquisição de clientes. Um bom SEO combinado com conteúdo estratégico cria uma máquina de crescimento previsível para o seu negócio.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {['Tráfego orgânico sustentável e escalável', 'Redução do custo de aquisição de clientes', 'Autoridade e confiança para sua marca', 'Resultados comprovados mês a mês'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff9f0a', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section
        style={{
          background: 'radial-gradient(ellipse 800px 500px at 80% 30%, rgba(255,159,10,0.07), transparent), #0a0a0a',
          padding: '5rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#86868b]" style={{ marginBottom: '1rem' }}>
              Entregas
            </p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.03em] text-white">
              O que você recebe
            </h2>
          </div>

          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            {deliverables.map((item) => (
              <SpotlightCard
                key={item.title}
                spotlightColor="rgba(255,159,10,0.2)"
                className="services-card"
              >
                <h3 className="text-base font-semibold tracking-[-0.02em] text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-normal leading-relaxed text-[#86868b]">
                  {item.description}
                </p>
              </SpotlightCard>
            ))}
          </div>
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
              { step: '01', title: 'Auditoria', desc: 'Diagnóstico completo do estado atual do SEO e conteúdo do site com análise competitiva.' },
              { step: '02', title: 'Estratégia', desc: 'Definição de palavras-chave, calendário editorial e priorização de ações por impacto.' },
              { step: '03', title: 'Execução', desc: 'Otimizações técnicas, produção de conteúdo e implementação das melhorias on-page e off-page.' },
              { step: '04', title: 'Análise & Iteração', desc: 'Monitoramento de resultados, relatórios mensais e ajustes contínuos na estratégia.' },
            ].map((item) => (
              <div key={item.step} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#ff9f0a', fontSize: '0.875rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums', flexShrink: 0, paddingTop: 2 }}>
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
          background: 'radial-gradient(ellipse 1000px 500px at 50% 50%, rgba(255,159,10,0.09), transparent), #0a0a0a',
          padding: '6rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto max-w-[600px] text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-white leading-[1.15]">
            Pronto para dominar o Google?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7 }}>
            Vamos criar uma estratégia de SEO que gera resultados reais e mensuráveis.
          </p>
          <StarBorder
            as="a"
            href="/#contato"
            color="#ff9f0a"
            speed="4s"
            thickness={3}
            className="teste-cta-star"
          >
            Iniciar projeto
          </StarBorder>
        </div>
      </section>

      <Footer />
    </>
  );
}
