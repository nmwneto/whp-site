'use client';

import CountUp from '@/components/CountUp';
import BlurText from '@/components/BlurText';

const stats = [
  { value: 40, label: 'Projetos realizados' },
  { value: 10, label: 'Anos de experiência de mercado' },
  { value: 5, label: 'Países atendidos' },
];

const tags = [
  { label: 'Criatividade', color: '#7c3aed', bg: 'rgba(124, 58, 237, 0.1)' },
  { label: 'Inovação', color: '#0071e3', bg: 'rgba(0, 113, 227, 0.1)' },
  { label: 'Estratégia', color: '#ff9f0a', bg: 'rgba(255, 159, 10, 0.1)' },
];

export default function Stats() {
  return (
    <section
      style={{
        background: 'radial-gradient(ellipse 900px 600px at 85% 20%, rgba(0,113,227,0.1), transparent), radial-gradient(ellipse 700px 500px at 10% 80%, rgba(124,58,237,0.07), transparent), #0a0a0a',
        padding: '7rem 4rem',
      }}
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Heading */}
        <div className="mx-auto text-center" style={{ maxWidth: '800px' }}>
          <BlurText
            text="Somos o parceiro estratégico ideal para gerar resultados e o crescimento exponencial do seu negócio."
            className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.15] tracking-[-0.03em] text-white"
            delay={60}
            animateBy="words"
            direction="bottom"
          />
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {tags.map((tag) => (
            <span
              key={tag.label}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                padding: '0.5rem 1.25rem',
                borderRadius: '100px',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: tag.color,
                background: tag.bg,
              }}
            >
              {tag.label}
            </span>
          ))}
        </div>

        {/* Counters */}
        <div
          className="mt-16 grid grid-cols-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '3rem' }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
              style={{
                borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
              }}
            >
              <div className="flex items-start">
                <span
                  style={{
                    fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.4)',
                    lineHeight: 1,
                    marginTop: '0.25em',
                  }}
                >
                  +
                </span>
                <CountUp
                  to={stat.value}
                  from={0}
                  duration={2.5}
                  className="text-[clamp(3rem,8vw,6rem)] font-bold tracking-[-0.04em] text-white"
                  separator=""
                />
              </div>
              <p
                style={{
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  marginTop: '0.5rem',
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
