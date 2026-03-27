'use client';

import { useState, useEffect, ReactNode } from 'react';
import Aurora from '@/components/Aurora';
import StarBorder from '@/components/StarBorder';
import SplitText from '@/components/SplitText';
import { OrbitingCircleIcons } from '@/components/shadcn-space/orbiting-circles/orbiting-circles';
import { useTranslation } from '@/i18n/LanguageContext';

function OrbitIcon({ label, color, bg, href, size = 28, pad = 10, children }: { label: string; color: string; bg: string; href?: string; size?: number; pad?: number; children: ReactNode }) {
  const [hovered, setHovered] = useState(false);
  const Tag = href ? 'a' : 'div';
  return (
    <Tag
      {...(href ? { href, style: { textDecoration: 'none' } } : {})}
      style={{
        position: 'relative',
        padding: pad,
        borderRadius: '50%',
        background: hovered ? bg.replace('0.15', '0.4') : bg,
        cursor: 'pointer',
        pointerEvents: 'auto',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease',
        transform: hovered ? 'scale(1.4)' : 'scale(1)',
        boxShadow: hovered ? `0 0 24px ${color}50` : 'none',
        opacity: hovered ? 4 : 1,
        textDecoration: 'none',
        display: 'block',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
      <div
        style={{
          position: 'absolute',
          bottom: '100%',
          left: '50%',
          transform: `translateX(-50%) scale(${hovered ? 1 : 0.8})`,
          marginBottom: 10,
          padding: '0.4rem 0.85rem',
          background: 'rgba(10,10,10,0.95)',
          border: `1px solid ${color}40`,
          borderRadius: '0.5rem',
          whiteSpace: 'nowrap',
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: color,
          boxShadow: `0 4px 20px rgba(0,0,0,0.5), 0 0 12px ${color}15`,
          pointerEvents: 'none',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
      >
        {label}
      </div>
    </Tag>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: '#0a0a0a',
        overflow: 'hidden',
      }}
    >
      {/* Aurora background */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '-30%',
          height: '160%',
          zIndex: 0,
          transform: 'scaleY(1)',
        }}
      >
        {mounted && (
          <Aurora
            colorStops={['#0071e3', '#5AC8FA', '#bf5af2']}
            blend={1.2}
            amplitude={1.8}
            speed={0.5}
          />
        )}
      </div>

      {/* Orbiting service icons */}
      {mounted && (
        <div
          className="hero-orbits"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '1000px',
            height: '1000px',
            zIndex: 15,
            opacity: 0.75,
            pointerEvents: 'none',
          }}
        >
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Outer orbit — 4 service icons */}
            <OrbitingCircleIcons radius={440} speed={0.4} path={false}>
              <OrbitIcon label={t.hero.orbitLabels[0]} color="#0071e3" bg="rgba(0,113,227,0.15)" href="/servicos/identidade-de-marca">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </OrbitIcon>
              <OrbitIcon label={t.hero.orbitLabels[1]} color="#34c759" bg="rgba(52,199,89,0.15)" href="/servicos/web-design-e-dev">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </OrbitIcon>
              <OrbitIcon label={t.hero.orbitLabels[2]} color="#ff9f0a" bg="rgba(255,159,10,0.15)" href="/servicos/seo-e-conteudo">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ff9f0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="20" x2="18" y2="10" />
                  <line x1="12" y1="20" x2="12" y2="4" />
                  <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
              </OrbitIcon>
              <OrbitIcon label={t.hero.orbitLabels[3]} color="#bf5af2" bg="rgba(191,90,242,0.15)" href="/servicos/social-media-e-performance">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#bf5af2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </OrbitIcon>
            </OrbitingCircleIcons>

            {/* Inner orbit — secondary icons, reverse */}
            <OrbitingCircleIcons radius={280} reverse speed={0.3} path={false}>
              <OrbitIcon label={t.hero.orbitLabels[4]} color="#5AC8FA" bg="rgba(90,200,250,0.15)" size={22} pad={8} href="/sobre">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5AC8FA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </OrbitIcon>
              <OrbitIcon label={t.hero.orbitLabels[5]} color="#34c759" bg="rgba(52,199,89,0.15)" size={22} pad={8} href="/servicos/seo-e-conteudo">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34c759" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                  <polyline points="17 6 23 6 23 12" />
                </svg>
              </OrbitIcon>
              <OrbitIcon label={t.hero.orbitLabels[6]} color="#ff9f0a" bg="rgba(255,159,10,0.15)" size={22} pad={8} href="/servicos/social-media-e-performance">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ff9f0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </OrbitIcon>
              <OrbitIcon label={t.hero.orbitLabels[7]} color="#0071e3" bg="rgba(0,113,227,0.15)" size={22} pad={8} href="/servicos/web-design-e-dev">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0071e3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" />
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                  <path d="M2 2l7.586 7.586" />
                  <circle cx="11" cy="11" r="2" />
                </svg>
              </OrbitIcon>
            </OrbitingCircleIcons>
          </div>
        </div>
      )}

      {/* Hero content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          minHeight: '100vh',
          padding: '0 4rem',
          gap: '1.5rem',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.375rem 1rem',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '100px',
            fontSize: '0.8125rem',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#34c759',
            }}
          />
          {t.hero.badge}
        </div>

        {/* Heading */}
        <div style={{ maxWidth: '800px' }}>
          <SplitText
            text={t.hero.heading}
            className="hero-split-heading"
            tag="h1"
            delay={80}
            duration={1.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            onLetterAnimationComplete={() => {}}
          />
        </div>

        {/* Subtitle */}
        <p
          style={{
            color: 'rgba(255,255,255,0.5)',
            fontSize: '1.0625rem',
            fontWeight: 400,
            lineHeight: 1.6,
            maxWidth: '600px',
          }}
        >
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div
          className="hero-ctas"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            paddingTop: '0.5rem',
          }}
        >
          <StarBorder
            as="a"
            href="#contato"
            color="#bf5af2"
            speed="4s"
            thickness={3}
            className="teste-cta-star"
          >
            {t.hero.cta}
          </StarBorder>
          <a
            href="#projetos"
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
            {t.hero.ctaSecondary}
          </a>
        </div>
      </div>
    </div>
  );
}
