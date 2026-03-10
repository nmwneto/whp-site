'use client';

import { useState } from 'react';
import BlurText from '@/components/BlurText';
import SpotlightCard from '@/components/SpotlightCard';
import NavbarWHP from '@/components/NavbarWHP';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';

const contactChannels = [
  {
    title: 'E-mail',
    value: 'contato@whp.com',
    href: 'mailto:contato@whp.com',
    description: 'Para propostas, orçamentos e parcerias comerciais.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    color: '#0071e3',
    spotlight: 'rgba(0,113,227,0.2)',
  },
  {
    title: 'WhatsApp',
    value: 'Fale agora',
    href: 'https://wa.me/',
    description: 'Atendimento rápido para tirar dúvidas e alinhar projetos.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    color: '#34c759',
    spotlight: 'rgba(52,199,89,0.2)',
  },
  {
    title: 'Instagram',
    value: '@whp.agency',
    href: 'https://instagram.com/',
    description: 'Acompanhe nosso trabalho e bastidores dos projetos.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    color: '#bf5af2',
    spotlight: 'rgba(191,90,242,0.2)',
  },
  {
    title: 'LinkedIn',
    value: 'WHP Agency',
    href: 'https://linkedin.com/',
    description: 'Conecte-se conosco para networking e oportunidades B2B.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: '#5AC8FA',
    spotlight: 'rgba(90,200,250,0.2)',
  },
];

export default function ContatoPage() {
  const [formData, setFormData] = useState({ name: '', email: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.875rem 1rem',
    background: '#111',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '0.75rem',
    color: '#fff',
    fontSize: '0.9375rem',
    fontFamily: 'inherit',
    outline: 'none',
    transition: 'border-color 0.3s ease',
  };

  return (
    <>
      <NavbarWHP />

      {/* Hero */}
      <section
        style={{
          background: 'radial-gradient(ellipse 900px 500px at 50% 60%, rgba(191,90,242,0.1), transparent), #0a0a0a',
          padding: '10rem 4rem 6rem',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FadeIn className="mx-auto max-w-[800px] text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#bf5af2]">
            Contato
          </p>
          <BlurText
            text="Vamos conversar?"
            className="text-[clamp(2.25rem,5.5vw,4rem)] font-bold tracking-[-0.035em] text-white justify-center leading-[1.08]"
            delay={60}
            animateBy="words"
            direction="bottom"
          />
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: 560 }}>
            Conte-nos sobre o seu projeto. Respondemos em até 24 horas com uma proposta personalizada.
          </p>
        </FadeIn>
      </section>

      {/* Contact channels */}
      <section
        style={{
          background: '#0a0a0a',
          padding: '3rem 4rem 5rem',
        }}
      >
        <FadeIn className="mx-auto max-w-[1100px]">
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {contactChannels.map((ch) => (
              <a key={ch.title} href={ch.href} target={ch.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'flex', height: '100%' }}>
                <SpotlightCard spotlightColor={ch.spotlight} className="services-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' as const }}>
                  <div className="services-card__icon" style={{ color: ch.color }}>
                    {ch.icon}
                  </div>
                  <h3 className="mt-4 text-base font-semibold tracking-[-0.02em] text-white">{ch.title}</h3>
                  <p style={{ fontSize: '0.8125rem', fontWeight: 500, color: ch.color, marginTop: '0.25rem' }}>{ch.value}</p>
                  <p className="mt-2 text-sm font-normal leading-relaxed text-[#86868b]">{ch.description}</p>
                </SpotlightCard>
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Form + Info */}
      <section
        style={{
          background: 'radial-gradient(ellipse 800px 500px at 30% 40%, rgba(191,90,242,0.07), transparent), radial-gradient(ellipse 700px 400px at 80% 70%, rgba(0,113,227,0.06), transparent), #0a0a0a',
          padding: '5rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <FadeIn className="mx-auto max-w-[1100px]">
          {/* Form + WhatsApp CTA side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '3rem', alignItems: 'start' }}>
            {/* Form */}
            <div>
              <h2 className="text-[1.75rem] font-bold tracking-[-0.03em] text-white" style={{ marginBottom: '0.5rem' }}>
                Envie sua mensagem
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9375rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Preencha o formulário abaixo e entraremos em contato o mais breve possível.
              </p>

              {submitted ? (
                <div
                  style={{
                    padding: '2.5rem',
                    background: '#111',
                    border: '1px solid rgba(52,199,89,0.2)',
                    borderRadius: '1.25rem',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(52,199,89,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#34c759' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-white" style={{ marginBottom: '0.5rem' }}>Mensagem enviada!</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9375rem' }}>Retornaremos em até 24 horas.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                    <input
                      type="text"
                      placeholder="Seu nome"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,90,242,0.4)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                    <input
                      type="email"
                      placeholder="Seu e-mail"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,90,242,0.4)')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                    />
                  </div>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    style={{ ...inputStyle, color: formData.service ? '#fff' : 'rgba(255,255,255,0.4)', appearance: 'none' as const }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,90,242,0.4)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                  >
                    <option value="" disabled>Selecione o serviço</option>
                    <option value="identidade">Identidade de Marca</option>
                    <option value="web">Web Design & Dev</option>
                    <option value="seo">SEO & Conteúdo</option>
                    <option value="social">Social Media & Performance</option>
                    <option value="outro">Outro</option>
                  </select>
                  <textarea
                    placeholder="Conte-nos sobre o seu projeto..."
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'vertical' as const, minHeight: '120px' }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = 'rgba(191,90,242,0.4)')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
                  />
                  <button
                    type="submit"
                    style={{
                      padding: '0.875rem 2.5rem',
                      background: 'linear-gradient(135deg, #bf5af2, transparent)',
                      color: '#fff',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      fontFamily: 'inherit',
                      borderRadius: '100px',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      alignSelf: 'flex-start',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'linear-gradient(135deg, #a845d9, rgba(191,90,242,0.1))')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'linear-gradient(135deg, #bf5af2, transparent)')}
                  >
                    Enviar mensagem
                  </button>
                </form>
              )}
            </div>

            {/* WhatsApp CTA */}
            <div
              style={{
                padding: '2rem',
                background: '#111',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '1.25rem',
                marginTop: '4.25rem',
                display: 'flex',
                flexDirection: 'column',
                height: 'fit-content',
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(52,199,89,0.1)', border: '1px solid rgba(52,199,89,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34c759', marginBottom: '1.25rem' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white" style={{ marginBottom: '0.5rem' }}>
                Prefere conversar diretamente?
              </h3>
              <p style={{ fontSize: '0.875rem', fontWeight: 400, color: 'rgba(255,255,255,0.5)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Agende uma call de 15 minutos sem compromisso pelo WhatsApp. Respondemos rapidamente.
              </p>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'rgba(52,199,89,0.1)',
                  border: '1px solid rgba(52,199,89,0.2)',
                  borderRadius: '100px',
                  color: '#34c759',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  alignSelf: 'flex-start',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(52,199,89,0.15)';
                  e.currentTarget.style.borderColor = 'rgba(52,199,89,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(52,199,89,0.1)';
                  e.currentTarget.style.borderColor = 'rgba(52,199,89,0.2)';
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                Abrir WhatsApp
              </a>
            </div>
          </div>

          {/* Info row centered below */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '4rem',
              marginTop: '3.5rem',
              paddingTop: '2.5rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[#86868b]" style={{ marginBottom: '0.5rem' }}>Localização</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Brasil & Internacional
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[#86868b]" style={{ marginBottom: '0.5rem' }}>Horário</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Seg — Sex, 09:00 — 18:00
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[#86868b]" style={{ marginBottom: '0.5rem' }}>Tempo de resposta</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                Até 24 horas úteis
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}
