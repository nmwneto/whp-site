'use client';

import { useTranslation } from '@/i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { locale, toggleLocale } = useTranslation();

  return (
    <button
      onClick={toggleLocale}
      aria-label={locale === 'pt' ? 'Switch to English' : 'Mudar para Português'}
      title={locale === 'pt' ? 'Switch to English' : 'Mudar para Português'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        padding: '0.375rem 0.875rem',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '100px',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: '0.75rem',
        fontWeight: 600,
        letterSpacing: '0.04em',
        color: 'rgba(255,255,255,0.5)',
        transition: 'all 0.25s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
        e.currentTarget.style.color = '#fff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
        e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
      }}
    >
      <span style={{ opacity: locale === 'pt' ? 1 : 0.4, color: locale === 'pt' ? '#fff' : undefined, transition: 'opacity 0.2s ease' }}>
        PT
      </span>
      <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.15)' }} />
      <span style={{ opacity: locale === 'en' ? 1 : 0.4, color: locale === 'en' ? '#fff' : undefined, transition: 'opacity 0.2s ease' }}>
        EN
      </span>
    </button>
  );
}
