'use client';

import StarBorder from '@/components/StarBorder';
import BlurText from '@/components/BlurText';
import FadeIn from '@/components/FadeIn';
import { useTranslation } from '@/i18n/LanguageContext';

export default function CtaBanner() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        background: 'radial-gradient(ellipse 1000px 500px at 50% 50%, rgba(90,200,250,0.09), transparent), #0a0a0a',
        padding: '7rem 4rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <FadeIn
        className="mx-auto max-w-[800px] flex flex-col items-center text-center"
        style={{ gap: '1.5rem' }}
      >
        <BlurText
          text={t.ctaBanner.heading}
          className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold tracking-[-0.03em] text-white leading-[1.15]"
          delay={60}
          animateBy="words"
          direction="bottom"
        />
        <p
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '1.0625rem',
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: '500px',
          }}
        >
          {t.ctaBanner.subtitle}
        </p>
        <div className="cta-buttons" style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingTop: '0.5rem' }}>
          <StarBorder
            as="a"
            href="#contato"
            color="#bf5af2"
            speed="4s"
            thickness={3}
            className="teste-cta-star"
          >
            {t.ctaBanner.cta}
          </StarBorder>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
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
            {t.ctaBanner.ctaSecondary}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
