'use client';

import CountUp from '@/components/CountUp';
import BlurText from '@/components/BlurText';
import FadeIn from '@/components/FadeIn';
import { useTranslation } from '@/i18n/LanguageContext';

export default function Stats() {
  const { t } = useTranslation();

  const tags = [
    { label: t.stats.tags[0], color: '#7c3aed', bg: 'rgba(124, 58, 237, 0.1)' },
    { label: t.stats.tags[1], color: '#0071e3', bg: 'rgba(0, 113, 227, 0.1)' },
    { label: t.stats.tags[2], color: '#ff9f0a', bg: 'rgba(255, 159, 10, 0.1)' },
    { label: t.stats.tags[3], color: '#34c759', bg: 'rgba(52, 199, 89, 0.1)' },
  ];

  const stats = [
    { value: 40, label: t.stats.labels[0] },
    { value: 10, label: t.stats.labels[1] },
    { value: 5, label: t.stats.labels[2] },
  ];

  return (
    <section
      style={{
        background: 'radial-gradient(ellipse 900px 600px at 85% 20%, rgba(0,113,227,0.1), transparent), radial-gradient(ellipse 700px 500px at 10% 80%, rgba(124,58,237,0.07), transparent), #0a0a0a',
        padding: '7rem 4rem',
      }}
    >
      <FadeIn className="mx-auto max-w-[1100px]">
        {/* Heading */}
        <div className="mx-auto text-center" style={{ maxWidth: '800px' }}>
          <BlurText
            text={t.stats.heading}
            className="text-[clamp(1.75rem,4vw,3rem)] font-bold leading-[1.15] tracking-[-0.03em] text-white justify-center"
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
          className="stats-grid mt-16 grid grid-cols-3"
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
      </FadeIn>
    </section>
  );
}
