'use client';

import BlurText from '@/components/BlurText';
import SpotlightCard from '@/components/SpotlightCard';
import StarBorder from '@/components/StarBorder';
import NavbarWHP from '@/components/NavbarWHP';
import Footer from '@/components/Footer';

const values = [
  {
    title: 'Estratégia primeiro',
    description: 'Cada decisão de design e tecnologia é fundamentada em dados, objetivos de negócio e entendimento profundo do público-alvo.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    color: '#0071e3',
    spotlight: 'rgba(0,113,227,0.2)',
  },
  {
    title: 'Design com propósito',
    description: 'Não criamos apenas coisas bonitas — criamos experiências visuais que comunicam, engajam e convertem.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    color: '#bf5af2',
    spotlight: 'rgba(191,90,242,0.2)',
  },
  {
    title: 'Tecnologia de ponta',
    description: 'Utilizamos as melhores ferramentas e frameworks do mercado para entregar produtos rápidos, escaláveis e seguros.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    color: '#34c759',
    spotlight: 'rgba(52,199,89,0.2)',
  },
  {
    title: 'Resultados mensuráveis',
    description: 'Tudo o que fazemos é orientado a métricas. Relatórios claros, KPIs definidos e otimização contínua.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    color: '#ff9f0a',
    spotlight: 'rgba(255,159,10,0.2)',
  },
];

const teamMembers = [
  {
    name: 'Nelson Mozart',
    role: 'Designer Multidisciplinar',
    bio: 'Lidera a visão criativa e estratégica de cada projeto, unindo branding, UI/UX e direção de arte.',
    image: '/images/team/nelson.webp',
    accentColor: '#0071e3',
    spotlightColor: 'rgba(0, 113, 227, 0.25)',
    social: { label: '@nelsonmozart', url: 'https://instagram.com/' },
  },
  {
    name: 'Braian C. Gomes',
    role: 'Designer de Produto',
    bio: 'Especialista em experiência do usuário e design de produto com foco em usabilidade e conversão.',
    image: '/images/team/braian.webp',
    accentColor: '#34c759',
    spotlightColor: 'rgba(52, 199, 89, 0.25)',
    social: { label: '@braiangomes', url: 'https://instagram.com/' },
  },
  {
    name: 'Jean Vialli',
    role: 'Especialista em SEO',
    bio: 'Conecta marcas ao público certo com estratégias de conteúdo e otimização orientadas a dados.',
    image: '/images/team/jean.webp',
    accentColor: '#ff9f0a',
    spotlightColor: 'rgba(255, 159, 10, 0.25)',
    social: { label: '@jeanvialli', url: 'https://instagram.com/' },
  },
  {
    name: 'Gabriel Mattiolli',
    role: 'Engenheiro de IA',
    bio: 'Desenvolve soluções inteligentes com inteligência artificial aplicada a automação, dados e performance.',
    image: '/images/team/gabriel.webp',
    accentColor: '#bf5af2',
    spotlightColor: 'rgba(191, 90, 242, 0.25)',
    social: { label: '@gabrielmattiolli', url: 'https://instagram.com/' },
  },
];

const milestones = [
  { year: '2018', text: 'Fundação da WHP com foco em estratégia, design e tecnologia para marcas.' },
  { year: '2019', text: 'Internacionalização dos trabalhos, atendendo clientes fora do Brasil.' },
  { year: '2022', text: 'Conquista de clientes de grande porte, consolidando a atuação no mercado.' },
  { year: '2026', text: 'Rebrand completo da marca — nova identidade visual, posicionamento e site.' },
];

export default function SobrePage() {
  return (
    <>
      <NavbarWHP />

      {/* Hero */}
      <section
        style={{
          background: 'radial-gradient(ellipse 900px 500px at 50% 60%, rgba(90,200,250,0.1), transparent), #0a0a0a',
          padding: '10rem 4rem 6rem',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="mx-auto max-w-[800px] text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#5AC8FA]">
            Sobre nós
          </p>
          <BlurText
            text="We Have a Plan"
            className="text-[clamp(2.25rem,5.5vw,4rem)] font-bold tracking-[-0.035em] text-white justify-center leading-[1.08]"
            delay={60}
            animateBy="words"
            direction="bottom"
          />
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: 620 }}>
            Somos uma agência de design e tecnologia que transforma marcas em referências digitais.
            Combinamos estratégia, criatividade e execução técnica para entregar resultados reais.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section
        style={{
          background: '#0a0a0a',
          padding: '5rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto max-w-[1000px]" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#86868b]" style={{ marginBottom: '1rem' }}>
              Nossa missão
            </p>
            <h2 className="text-[1.75rem] font-bold tracking-[-0.03em] text-white" style={{ marginBottom: '1.25rem' }}>
              Impulsionar negócios através de design e tecnologia
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7 }}>
              Acreditamos que toda marca tem potencial para se tornar referência. Nossa missão é desbloquear esse potencial com estratégias criativas, design de excelência e soluções tecnológicas que geram crescimento sustentável.
            </p>
          </div>
          <div>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#86868b]" style={{ marginBottom: '1rem' }}>
              Nossa visão
            </p>
            <h2 className="text-[1.75rem] font-bold tracking-[-0.03em] text-white" style={{ marginBottom: '1.25rem' }}>
              Ser a parceira estratégica de marcas ambiciosas
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7 }}>
              Queremos ser reconhecidos como a agência que empresas procuram quando precisam de mais do que bonito — precisam de resultados. Do branding ao código, entregamos soluções completas que fazem marcas crescerem de verdade.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        style={{
          background: 'radial-gradient(ellipse 800px 500px at 20% 40%, rgba(191,90,242,0.07), transparent), radial-gradient(ellipse 700px 500px at 80% 60%, rgba(0,113,227,0.07), transparent), #0a0a0a',
          padding: '5rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#86868b]" style={{ marginBottom: '1rem' }}>
              Valores
            </p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.03em] text-white">
              O que nos guia
            </h2>
          </div>

          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {values.map((v) => (
              <SpotlightCard key={v.title} spotlightColor={v.spotlight} className="services-card">
                <div className="services-card__icon" style={{ color: v.color }}>
                  {v.icon}
                </div>
                <h3 className="mt-4 text-base font-semibold tracking-[-0.02em] text-white">{v.title}</h3>
                <p className="mt-2 text-sm font-normal leading-relaxed text-[#86868b]">{v.description}</p>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        style={{
          background: '#0a0a0a',
          padding: '5rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto max-w-[700px]">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#86868b]" style={{ marginBottom: '1rem' }}>
              Trajetória
            </p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.03em] text-white">
              Nossa história
            </h2>
          </div>

          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            {/* Vertical line */}
            <div
              style={{
                position: 'absolute',
                left: 3,
                top: 8,
                bottom: 8,
                width: 1,
                background: 'rgba(255,255,255,0.08)',
              }}
            />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              {milestones.map((m) => (
                <div key={m.year} style={{ position: 'relative' }}>
                  {/* Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-2rem',
                      top: 6,
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#5AC8FA',
                      transform: 'translateX(-50%)',
                    }}
                  />
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#5AC8FA' }}>{m.year}</span>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9375rem', lineHeight: 1.7, marginTop: '0.375rem' }}>{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section
        style={{
          background: 'radial-gradient(ellipse 800px 600px at 90% 25%, rgba(191,90,242,0.09), transparent), radial-gradient(ellipse 700px 500px at 8% 70%, rgba(0,113,227,0.07), transparent), #0a0a0a',
          padding: '5rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto max-w-[1100px]">
          <div className="text-center" style={{ marginBottom: '3.5rem' }}>
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#86868b]" style={{ marginBottom: '1rem' }}>
              Quem faz acontecer
            </p>
            <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-bold tracking-[-0.03em] text-white">
              Nosso time
            </h2>
            <p className="mx-auto mt-4 max-w-[520px] text-base font-normal leading-relaxed text-[#86868b]">
              Uma equipe multidisciplinar unida por um objetivo: transformar marcas em referência.
            </p>
          </div>

          <div className="grid gap-5" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {teamMembers.map((member) => (
              <SpotlightCard key={member.name} spotlightColor={member.spotlightColor} className="team-card">
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
                    style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <h3 style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#fff', letterSpacing: '-0.02em' }}>{member.name}</h3>
                <p style={{ fontSize: '0.8125rem', fontWeight: 500, color: member.accentColor, marginTop: '0.25rem' }}>{member.role}</p>
                <p style={{ fontSize: '0.8125rem', fontWeight: 400, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6, marginTop: '0.75rem' }}>{member.bio}</p>
                <a
                  href={member.social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.375rem', marginTop: '1rem', fontSize: '0.8125rem', fontWeight: 500, color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.25s ease' }}
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
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          background: 'radial-gradient(ellipse 1000px 500px at 50% 50%, rgba(90,200,250,0.09), transparent), #0a0a0a',
          padding: '6rem 4rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto max-w-[600px] text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold tracking-[-0.03em] text-white leading-[1.15]">
            Vamos trabalhar juntos?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem', lineHeight: 1.7 }}>
            Conheça nossos serviços ou entre em contato para discutir o seu projeto.
          </p>
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <StarBorder
              as="a"
              href="/contato"
              color="#5AC8FA"
              speed="4s"
              thickness={3}
              className="teste-cta-star"
            >
              Fale conosco
            </StarBorder>
            <a
              href="/#servicos"
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
              Ver serviços
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
