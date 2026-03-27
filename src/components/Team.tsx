'use client';

import SpotlightCard from '@/components/SpotlightCard';
import BlurText from '@/components/BlurText';
import FadeIn from '@/components/FadeIn';
import { useTranslation } from '@/i18n/LanguageContext';

const teamMembersData = [
  {
    name: 'Nelson Mozart',
    image: '/images/team/nelson.webp',
    accentColor: '#0071e3',
    spotlightColor: 'rgba(0, 113, 227, 0.25)',
    social: { label: 'Nelson Mozart', url: 'https://www.linkedin.com/in/nmwneto/' },
  },
  {
    name: 'Braian C. Gomes',
    image: '/images/team/braian.webp',
    accentColor: '#34c759',
    spotlightColor: 'rgba(52, 199, 89, 0.25)',
    social: { label: 'Braian C. Gomes', url: 'https://www.linkedin.com/in/braiangomes/' },
  },
  {
    name: 'Jean Vialli',
    image: '/images/team/jean.webp',
    accentColor: '#ff9f0a',
    spotlightColor: 'rgba(255, 159, 10, 0.25)',
    social: { label: 'Jean Vialli', url: 'https://www.linkedin.com/in/jean-lucca-vialli/' },
  },
  {
    name: 'Gabriel Mattiolli',
    image: '/images/team/gabriel.webp',
    accentColor: '#bf5af2',
    spotlightColor: 'rgba(191, 90, 242, 0.25)',
    social: { label: 'Gabriel Mattiolli', url: 'https://www.linkedin.com/in/gabriel-belich-886a46143/' },
  },
  {
    name: 'Lucas Zanatta',
    image: '/images/team/zanatta.webp',
    accentColor: '#5AC8FA',
    spotlightColor: 'rgba(90, 200, 250, 0.25)',
    social: { label: 'Lucas Zanatta', url: 'https://www.linkedin.com/' },
  },
  {
    name: 'João Balzer',
    image: '/images/team/balzer.webp',
    accentColor: '#ff375f',
    spotlightColor: 'rgba(255, 55, 95, 0.25)',
    social: { label: 'João Balzer', url: 'https://www.linkedin.com/' },
  },
];

export default function Team() {
  const { t } = useTranslation();

  const teamMembers = teamMembersData.map((member, i) => ({
    ...member,
    role: t.team.roles[i],
    bio: t.team.bios[i],
  }));

  return (
    <section
      id="sobre"
      style={{
        background: 'radial-gradient(ellipse 800px 600px at 90% 25%, rgba(191,90,242,0.09), transparent), radial-gradient(ellipse 700px 500px at 8% 70%, rgba(0,113,227,0.07), transparent), #0a0a0a',
        padding: '7rem 4rem',
      }}
    >
      <FadeIn className="mx-auto max-w-[1100px] text-center" style={{ marginBottom: '3.5rem' }}>
        <p
          className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#86868b]"
          style={{ marginBottom: '1rem' }}
        >
          {t.team.label}
        </p>
        <BlurText
          text={t.team.heading}
          className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white justify-center"
          delay={60}
          animateBy="words"
          direction="bottom"
        />
        <p className="mx-auto mt-4 max-w-[520px] text-base font-normal leading-relaxed text-[#86868b]">
          {t.team.subtitle}
        </p>
      </FadeIn>

      <FadeIn delay={0.2}
        className="team-grid mx-auto max-w-[1100px] grid gap-5"
        style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}
      >
        {teamMembers.map((member) => (
          <SpotlightCard
            key={member.name}
            spotlightColor={member.spotlightColor}
            className="team-card"
          >
            {/* Avatar */}
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                padding: 2,
                background: `linear-gradient(135deg, ${member.accentColor}, transparent 70%)`,
                marginBottom: '1.25rem',
              }}
            >
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Info */}
            <h3
              style={{
                fontSize: '1.0625rem',
                fontWeight: 600,
                color: '#fff',
                letterSpacing: '-0.02em',
                lineHeight: 1.3,
              }}
            >
              {member.name}
            </h3>
            <p
              style={{
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: member.accentColor,
                marginTop: '0.25rem',
              }}
            >
              {member.role}
            </p>
            <p
              style={{
                fontSize: '0.8125rem',
                fontWeight: 400,
                color: 'rgba(255,255,255,0.4)',
                lineHeight: 1.6,
                marginTop: '0.75rem',
              }}
            >
              {member.bio}
            </p>

            {/* Social */}
            <a
              href={member.social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
                marginTop: '1rem',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.35)',
                textDecoration: 'none',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = member.accentColor)}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              {member.social.label}
            </a>
          </SpotlightCard>
        ))}
      </FadeIn>
    </section>
  );
}
