'use client';

import { motion } from 'motion/react';
import BlurText from '@/components/BlurText';
import FadeIn from '@/components/FadeIn';

const projects = [
  {
    image: 'https://images.shadcnspace.com/assets/portfolio/flowbank.webp',
    title: 'Flowbank',
    tags: ['Identidade Visual', 'Web Design'],
    accentColor: '#0071e3',
  },
  {
    image: 'https://images.shadcnspace.com/assets/portfolio/academy.webp',
    title: 'Academy.co',
    tags: ['Product Design', 'UI/UX'],
    accentColor: '#bf5af2',
  },
  {
    image: 'https://images.shadcnspace.com/assets/portfolio/genome.webp',
    title: 'Genome',
    tags: ['Branding', 'Estratégia'],
    accentColor: '#34c759',
  },
  {
    image: 'https://images.shadcnspace.com/assets/portfolio/hotto.webp',
    title: 'Hotto',
    tags: ['Web Design', 'SEO'],
    accentColor: '#ff9f0a',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Portfolio() {
  return (
    <section
      id="projetos"
      style={{
        background:
          'radial-gradient(ellipse 900px 600px at 80% 20%, rgba(0,113,227,0.10), transparent), radial-gradient(ellipse 800px 550px at 15% 75%, rgba(191,90,242,0.09), transparent), radial-gradient(ellipse 600px 400px at 50% 50%, rgba(52,199,89,0.05), transparent), #0a0a0a',
        padding: '7rem 4rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <FadeIn className="text-center" style={{ marginBottom: '3.5rem' }}>
          <p
            className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#86868b]"
            style={{ marginBottom: '1rem' }}
          >
            Portfólio
          </p>
          <BlurText
            text="Projetos que transformaram marcas"
            className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.03em] text-white justify-center"
            delay={60}
            animateBy="words"
            direction="bottom"
          />
          <p className="mx-auto mt-4 max-w-[520px] text-base font-normal leading-relaxed text-[#86868b]">
            Conheça alguns dos trabalhos que entregamos para nossos clientes.
          </p>
        </FadeIn>

        {/* Grid */}
        <div
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={cardVariants}
              className="group"
              style={{ cursor: 'pointer' }}
            >
              <div
                style={{
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.06)',
                  background: '#111',
                  transition: 'border-color 0.3s ease, transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Image */}
                <div style={{ overflow: 'hidden', aspectRatio: '16/10' }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>

                {/* Info */}
                <div style={{ padding: '1.25rem 1.5rem' }}>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 600,
                      color: '#fff',
                      letterSpacing: '-0.02em',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {project.title}
                  </h3>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          display: 'inline-flex',
                          padding: '0.3rem 0.875rem',
                          borderRadius: '100px',
                          fontSize: '0.75rem',
                          fontWeight: 500,
                          color: project.accentColor,
                          background: `${project.accentColor}15`,
                          border: `1px solid ${project.accentColor}20`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
