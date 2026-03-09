'use client';

import { useState, useEffect } from 'react';
import Aurora from '@/components/Aurora';
import StarBorder from '@/components/StarBorder';
import SplitText from '@/components/SplitText';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

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

      {/* Nav */}
      <nav
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1.25rem 4rem',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <span
          style={{
            color: '#fff',
            fontSize: '1.125rem',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}
        >
          WHP
        </span>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Home', 'Serviços', 'Projetos', 'Contato'].map((item) => (
            <a
              key={item}
              href="#"
              style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.875rem',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'color 0.25s ease',
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

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
          minHeight: 'calc(100vh - 80px)',
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
          Disponível para novos projetos
        </div>

        {/* Heading */}
        <div style={{ maxWidth: '800px' }}>
          <SplitText
            text="Cresça sua marca ou produtos com estratégia, design e tecnologia."
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
          Auxiliamos empresas a alavancar seus negócios utilizando metodologias criativas.
        </p>

        {/* CTAs */}
        <div
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
            color="#5AC8FA"
            speed="5s"
            thickness={2}
            className="teste-cta-star"
          >
            Iniciar projeto
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
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  );
}
