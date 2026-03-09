'use client';

import LogoLoop from '@/components/LogoLoop';

const logos = [
  { node: 'Next.js', title: 'Next.js' },
  { node: 'React', title: 'React' },
  { node: 'Figma', title: 'Figma' },
  { node: 'Tailwind', title: 'Tailwind CSS' },
  { node: 'Vercel', title: 'Vercel' },
  { node: 'TypeScript', title: 'TypeScript' },
  { node: 'Google Ads', title: 'Google Ads' },
  { node: 'Meta Ads', title: 'Meta Ads' },
];

export default function Logos() {
  return (
    <section
      style={{
        background: '#0a0a0a',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '2.5rem 0',
        overflow: 'hidden',
      }}
    >
      <LogoLoop
        logos={logos}
        speed={80}
        direction="left"
        logoHeight={18}
        gap={64}
        pauseOnHover
        fadeOut
        fadeOutColor="#0a0a0a"
        className="logos-loop"
      />
    </section>
  );
}
