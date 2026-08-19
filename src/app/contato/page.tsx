'use client';

import BlurText from '@/components/BlurText';
import NavbarWHP from '@/components/NavbarWHP';
import Footer from '@/components/Footer';
import FadeIn from '@/components/FadeIn';
import { useTranslation } from '@/i18n/LanguageContext';
import { WHATSAPP_URL } from '@/lib/contact';

export default function ContatoPage() {
  const { t } = useTranslation();

  return (
    <>
      <NavbarWHP />

      {/* Hero */}
      <section
        style={{
          background: 'radial-gradient(ellipse 900px 500px at 50% 60%, rgba(52,199,89,0.1), transparent), #0a0a0a',
          padding: '10rem 4rem 6rem',
          minHeight: '60vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FadeIn className="mx-auto max-w-[800px] text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#34c759]">
            {t.contactPage.label}
          </p>
          <BlurText
            text={t.contactPage.heading}
            className="text-[clamp(2.25rem,5.5vw,4rem)] font-bold tracking-[-0.035em] text-white justify-center leading-[1.08]"
            delay={60}
            animateBy="words"
            direction="bottom"
          />
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: 560 }}>
            {t.contactPage.subtitle}
          </p>
        </FadeIn>
      </section>

      {/* WhatsApp — canal único */}
      <section
        style={{
          background: 'radial-gradient(ellipse 800px 500px at 50% 40%, rgba(52,199,89,0.08), transparent), #0a0a0a',
          padding: '3rem 4rem 5rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <FadeIn className="mx-auto max-w-[640px]">
          <div
            style={{
              padding: '3rem 2.5rem',
              background: '#111',
              border: '1px solid rgba(52,199,89,0.15)',
              borderRadius: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <div style={{ width: 64, height: 64, borderRadius: 16, background: 'rgba(52,199,89,0.1)', border: '1px solid rgba(52,199,89,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#34c759', marginBottom: '1.5rem' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </div>
            <h2 className="text-[1.75rem] font-bold tracking-[-0.03em] text-white" style={{ marginBottom: '0.75rem' }}>
              {t.contactPage.whatsappTitle}
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7, maxWidth: 440, marginBottom: '2rem' }}>
              {t.contactPage.whatsappText}
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '1rem 2.5rem',
                background: '#25D366',
                borderRadius: '100px',
                color: '#fff',
                fontSize: '1rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                boxShadow: '0 8px 24px rgba(37,211,102,0.3)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(37,211,102,0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.3)';
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.002-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t.contactPage.whatsappBtn}
            </a>
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
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[#86868b]" style={{ marginBottom: '0.5rem' }}>{t.contactPage.locationLabel}</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {t.contactPage.locationValue}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[#86868b]" style={{ marginBottom: '0.5rem' }}>{t.contactPage.hoursLabel}</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {t.contactPage.hoursValue}
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[#86868b]" style={{ marginBottom: '0.5rem' }}>{t.contactPage.responseLabel}</p>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                {t.contactPage.responseValue}
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <Footer />
    </>
  );
}
