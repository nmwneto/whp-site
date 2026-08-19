import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Blog',
  description:
    'Ideias e estratégias de marketing digital, branding, web, SEO e social media pela WHP. Conteúdo prático para fazer sua marca crescer.',
  path: '/blog',
});

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
