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
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', opacity: locale === 'pt' ? 1 : 0.4, color: locale === 'pt' ? '#fff' : undefined, transition: 'opacity 0.2s ease' }}>
        <svg width="14" height="10" viewBox="0 0 640 480" style={{ borderRadius: 2, flexShrink: 0 }}>
          <rect width="640" height="480" fill="#009b3a" />
          <polygon points="320,40 600,240 320,440 40,240" fill="#fedf00" />
          <circle cx="320" cy="240" r="80" fill="#002776" />
          <path d="M200,240 Q320,180 440,240" fill="none" stroke="#fff" strokeWidth="8" />
        </svg>
        PT
      </span>
      <span style={{ width: 1, height: 12, background: 'rgba(255,255,255,0.15)' }} />
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', opacity: locale === 'en' ? 1 : 0.4, color: locale === 'en' ? '#fff' : undefined, transition: 'opacity 0.2s ease' }}>
        <svg width="14" height="10" viewBox="0 0 640 480" style={{ borderRadius: 2, flexShrink: 0 }}>
          <rect width="640" height="480" fill="#bd3d44" />
          <rect y="37" width="640" height="37" fill="#fff" />
          <rect y="111" width="640" height="37" fill="#fff" />
          <rect y="185" width="640" height="37" fill="#fff" />
          <rect y="259" width="640" height="37" fill="#fff" />
          <rect y="333" width="640" height="37" fill="#fff" />
          <rect y="407" width="640" height="37" fill="#fff" />
          <rect width="260" height="259" fill="#192f5d" />
        </svg>
        EN
      </span>
    </button>
  );
}
