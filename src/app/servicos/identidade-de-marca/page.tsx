'use client';

import BlurText from '@/components/BlurText';
import StarBorder from '@/components/StarBorder';
import SpotlightCard from '@/components/SpotlightCard';
import NavbarWHP from '@/components/NavbarWHP';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';

const deliverables = [
  {
    title: 'Logotipo & Variações',
    description: 'Criação do logo principal com versões horizontal, vertical, monocromática e ícone isolado para diferentes aplicações.',
  },
  {
    title: 'Paleta de Cores',
    description: 'Definição de cores primárias, secundárias e de apoio com códigos HEX, RGB e CMYK para uso digital e impresso.',
  },
  {
    title: 'Tipografia',
    description: 'Seleção de fontes para heading e body, com hierarquia tipográfica completa e regras de uso.',
  },
  {
    title: 'Brand Guidelines',
    description: 'Manual de marca digital com todas as regras de aplicação, espaçamentos, usos incorretos e exemplos práticos.',
  },
  {
    title: 'Papelaria & Aplicações',
    description: 'Cartão de visita, papel timbrado, assinatura de e-mail e templates para apresentações.',
  },
  {
    title: 'Social Media Kit',
    description: 'Templates para posts, stories e capas de perfil adaptados à identidade visual da marca.',
  },
];

export default function IdentidadeDeMarcaPage() {
  return (
    <>
      <NavbarWHP />

      {/* Hero */}
      <section
        style={{
          background: 'radial-gradient(ellipse 900px 500px at 50% 60%, rgba(0,113,227,0.12), transparent), #0a0a0a',
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
              background: 'rgba(0,113,227,0.1)',
              border: '1px solid rgba(0,113,227,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0071e3',
            }}
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>

          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#0071e3]">
            Serviço
          </p>
          <BlurText
            text="Identidade de Marca"
            className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[-0.03em] text-white justify-center leading-[1.1]"
            delay={60}
            animateBy="words"
            direction="bottom"
          />
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: 600 }}>
            Criamos identidades visuais memoráveis que traduzem a essência da sua marca em cada ponto de contato — do digital ao impresso.
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
              Por que investir em identidade visual?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7 }}>
              Uma identidade visual forte é o alicerce de qualquer marca de sucesso. Ela cria reconhecimento instantâneo, transmite profissionalismo e diferencia sua empresa da concorrência.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {['Reconhecimento imediato no mercado', 'Consistência em todos os canais', 'Confiança e credibilidade para o cliente', 'Diferenciação da concorrência'].map((item) => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0071e3', flexShrink: 0 }} />
                <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9375rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section
        style={{
          background: 'radial-gradient(ellipse 800px 500px at 80% 30%, rgba(0,113,227,0.07), transparent), #0a0a0a',
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
                spotlightColor="rgba(0,113,227,0.2)"
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
              { step: '01', title: 'Imersão', desc: 'Entendemos o negócio, público-alvo, concorrentes e os valores que a marca precisa comunicar.' },
              { step: '02', title: 'Conceituação', desc: 'Desenvolvemos moodboards, referências visuais e direções criativas para aprovação.' },
              { step: '03', title: 'Design', desc: 'Criamos o logo, paleta, tipografia e todos os elementos visuais da identidade.' },
              { step: '04', title: 'Entrega', desc: 'Finalizamos com o brand guide completo e todos os arquivos em formatos digitais e impressos.' },
            ].map((item) => (
              <div key={item.step} style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                <span style={{ color: '#0071e3', fontSize: '0.875rem', fontWeight: 700, fontVariantNumeric: 'tabular-nums', flexShrink: 0, paddingTop: 2 }}>
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
          background: 'radial-gradient(ellipse 1000px 500px at 50% 50%, rgba(0,113,227,0.09), transparent), #0a0a0a',
          padding: '6rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto max-w-[600px] text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-white leading-[1.15]">
            Pronto para criar sua identidade?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7 }}>
            Vamos conversar sobre a sua marca e criar algo único juntos.
          </p>
          <StarBorder
            as="a"
            href="/#contato"
            color="#0071e3"
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
