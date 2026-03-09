'use client';

import SpotlightCard from '@/components/SpotlightCard';
import BlurText from '@/components/BlurText';

const services = [
  {
    title: 'Identidade Visual',
    description: 'Logotipos, paletas, tipografia e guidelines que traduzem a essência da sua marca em cada ponto de contato.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    spotlightColor: 'rgba(0, 113, 227, 0.25)',
    accentColor: '#0071e3',
  },
  {
    title: 'Web Design & Dev',
    description: 'Sites de alta performance com design único, responsivos, otimizados e construídos com tecnologia de ponta.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    spotlightColor: 'rgba(52, 199, 89, 0.25)',
    accentColor: '#34c759',
  },
  {
    title: 'SEO & Performance',
    description: 'Estratégias de otimização para motores de busca que colocam a sua marca nas primeiras posições do Google.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    spotlightColor: 'rgba(255, 159, 10, 0.25)',
    accentColor: '#ff9f0a',
  },
  {
    title: 'Social Media',
    description: 'Gestão de redes sociais com conteúdo estratégico, design consistente e análise de métricas para crescimento real.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    spotlightColor: 'rgba(191, 90, 242, 0.25)',
    accentColor: '#bf5af2',
  },
];

export default function Services() {
  return (
    <section
      id="servicos"
      style={{
        background: 'radial-gradient(ellipse 800px 600px at 5% 30%, rgba(52,199,89,0.08), transparent), radial-gradient(ellipse 700px 500px at 95% 70%, rgba(255,159,10,0.08), transparent), #0a0a0a',
        padding: '7rem 4rem',
      }}
    >
      <div className="mx-auto max-w-[1100px] text-center" style={{ marginBottom: '3.5rem' }}>
        <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#86868b]" style={{ marginBottom: '1rem' }}>
          O que fazemos
        </p>
        <BlurText
          text="Serviços"
          className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white justify-center"
          delay={60}
          animateBy="words"
          direction="bottom"
        />
        <p className="mx-auto mt-4 max-w-[520px] text-base font-normal leading-relaxed text-[#86868b]">
          Soluções completas para marcas que querem se destacar no digital.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1100px] gap-4" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {services.map((service) => (
          <SpotlightCard
            key={service.title}
            spotlightColor={service.spotlightColor}
            className="services-card"
          >
            <div
              className="services-card__icon"
              style={{ color: service.accentColor }}
            >
              {service.icon}
            </div>
            <h3
              className="mt-5 text-lg font-semibold tracking-[-0.02em] text-white"
            >
              {service.title}
            </h3>
            <p className="mt-2 text-sm font-normal leading-relaxed text-[#86868b]">
              {service.description}
            </p>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
