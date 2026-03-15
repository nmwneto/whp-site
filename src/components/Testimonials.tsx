'use client';

import SpotlightCard from '@/components/SpotlightCard';
import BlurText from '@/components/BlurText';
import FadeIn from '@/components/FadeIn';

const testimonials = [
  {
    quote:
      'A WHP transformou completamente a presença digital da nossa empresa. O resultado superou todas as expectativas — nosso tráfego orgânico triplicou em 4 meses.',
    name: 'Carlos Mendes',
    role: 'CEO',
    company: 'TechVision',
    image: 'https://i.pravatar.cc/100?img=12',
    accentColor: '#0071e3',
    spotlightColor: 'rgba(0, 113, 227, 0.2)',
  },
  {
    quote:
      'Profissionalismo e criatividade em cada detalhe. A identidade visual que criaram para nós transmite exatamente o que somos. Recomendo de olhos fechados.',
    name: 'Ana Oliveira',
    role: 'Diretora de Marketing',
    company: 'Bloom Studio',
    image: 'https://i.pravatar.cc/100?img=5',
    accentColor: '#bf5af2',
    spotlightColor: 'rgba(191, 90, 242, 0.2)',
  },
  {
    quote:
      'O site que a WHP desenvolveu não é apenas bonito — ele converte. Nossas vendas online aumentaram 60% no primeiro trimestre após o lançamento.',
    name: 'Rafael Costa',
    role: 'Fundador',
    company: 'NovaPay',
    image: 'https://i.pravatar.cc/100?img=33',
    accentColor: '#34c759',
    spotlightColor: 'rgba(52, 199, 89, 0.2)',
  },
];

function StarRating() {
  return (
    <div style={{ display: 'flex', gap: '0.125rem' }}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#ff9f0a"
          stroke="none"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      style={{
        background: 'radial-gradient(ellipse 750px 550px at 12% 35%, rgba(255,159,10,0.08), transparent), radial-gradient(ellipse 800px 500px at 88% 65%, rgba(52,199,89,0.08), transparent), #0a0a0a',
        padding: '7rem 4rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <FadeIn className="text-center" style={{ marginBottom: '3.5rem' }}>
          <p
            className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#86868b]"
            style={{ marginBottom: '1rem' }}
          >
            Depoimentos
          </p>
          <BlurText
            text="O que nossos clientes dizem"
            className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white justify-center"
            delay={60}
            animateBy="words"
            direction="bottom"
          />
          <p className="mx-auto mt-4 max-w-[520px] text-base font-normal leading-relaxed text-[#86868b]">
            Resultados reais de marcas que confiaram no nosso trabalho.
          </p>
        </FadeIn>

        {/* Cards */}
        <FadeIn delay={0.2}>
        <div
          className="testimonials-grid mx-auto grid gap-5"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
        >
          {testimonials.map((t) => (
            <SpotlightCard
              key={t.name}
              spotlightColor={t.spotlightColor}
              className="testimonial-card"
            >
              {/* Quote icon */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                style={{ marginBottom: '1.25rem', opacity: 0.15, overflow: 'visible' }}
              >
                <path
                  d="M4 24c3 0 7-1 7-8V8c0-1.25-.76-2-1.76-2H4.24C3.24 6 2.5 6.75 2.5 8v6c0 1.25.75 2 1.75 2H10c0 3.75-2.5 6-6 6.5"
                  fill="white"
                />
                <path
                  d="M20 24c3 0 7-1 7-8V8c0-1.25-.76-2-1.76-2h-4.5C19.24 6 18.5 6.75 18.5 8v6c0 1.25.75 2 1.75 2H26c0 3.75-2.5 6-6 6.5"
                  fill="white"
                />
              </svg>

              <StarRating />

              {/* Quote */}
              <p
                style={{
                  fontSize: '0.9375rem',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.7)',
                  lineHeight: 1.7,
                  marginTop: '1rem',
                  marginBottom: '1.5rem',
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginTop: 'auto',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: `1.5px solid ${t.accentColor}`,
                  }}
                />
                <div>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: '#fff',
                      lineHeight: 1.3,
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 400,
                      color: 'rgba(255,255,255,0.4)',
                      lineHeight: 1.4,
                    }}
                  >
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
