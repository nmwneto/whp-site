import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Social Media & Performance',
  description:
    'Gestão de redes sociais, tráfego pago (Meta e Google Ads) e análise de performance para crescer sua marca com ROI comprovado.',
  path: '/servicos/social-media-e-performance',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
