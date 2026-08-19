import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contato',
  description:
    'Fale com a WHP pelo WhatsApp e receba uma proposta personalizada para seu projeto de marca, site, SEO ou social media.',
  path: '/contato',
});

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
