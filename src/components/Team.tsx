'use client';

import SpotlightCard from '@/components/SpotlightCard';
import BlurText from '@/components/BlurText';

const teamMembers = [
  {
    name: 'Nelson Mozart',
    role: 'Designer Multidisciplinar',
    bio: 'Lidera a visão criativa e estratégica de cada projeto, unindo branding, UI/UX e direção de arte.',
    image: 'https://i.pravatar.cc/300?img=8',
    accentColor: '#0071e3',
    spotlightColor: 'rgba(0, 113, 227, 0.25)',
    social: { label: '@nelsonmozart', url: 'https://instagram.com/' },
  },
  {
    name: 'Braian C. Gomes',
    role: 'Designer de Produto',
    bio: 'Especialista em experiência do usuário e design de produto com foco em usabilidade e conversão.',
    image: 'https://i.pravatar.cc/300?img=11',
    accentColor: '#34c759',
    spotlightColor: 'rgba(52, 199, 89, 0.25)',
    social: { label: '@braiangomes', url: 'https://instagram.com/' },
  },
  {
    name: 'Jean Vialli',
    role: 'Especialista em SEO',
    bio: 'Conecta marcas ao público certo com estratégias de conteúdo e otimização orientadas a dados.',
    image: 'https://i.pravatar.cc/300?img=3',
    accentColor: '#ff9f0a',
    spotlightColor: 'rgba(255, 159, 10, 0.25)',
    social: { label: '@jeanvialli', url: 'https://instagram.com/' },
  },
  {
    name: 'Gabriel Mattiolli',
    role: 'Engenheiro de IA',
    bio: 'Desenvolve soluções inteligentes com inteligência artificial aplicada a automação, dados e performance.',
    image: 'https://i.pravatar.cc/300?img=16',
    accentColor: '#bf5af2',
    spotlightColor: 'rgba(191, 90, 242, 0.25)',
    social: { label: '@gabrielmattiolli', url: 'https://instagram.com/' },
  },
];

export default function Team() {
  return (
    <section
      id="sobre"
      style={{
        background: 'radial-gradient(ellipse 800px 600px at 90% 25%, rgba(191,90,242,0.09), transparent), radial-gradient(ellipse 700px 500px at 8% 70%, rgba(0,113,227,0.07), transparent), #0a0a0a',
        padding: '7rem 4rem',
      }}
    >
      <div className="mx-auto max-w-[1100px] text-center" style={{ marginBottom: '3.5rem' }}>
        <p
          className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#86868b]"
          style={{ marginBottom: '1rem' }}
        >
          Quem faz acontecer
        </p>
        <BlurText
          text="Sobre o time"
          className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white justify-center"
          delay={60}
          animateBy="words"
          direction="bottom"
        />
        <p className="mx-auto mt-4 max-w-[520px] text-base font-normal leading-relaxed text-[#86868b]">
          Uma equipa multidisciplinar unida por um objetivo: transformar marcas
          em referência através de design e tecnologia.
        </p>
      </div>

      <div
        className="mx-auto max-w-[1100px] grid gap-5"
        style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}
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
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              {member.social.label}
            </a>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
