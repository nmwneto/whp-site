import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'SEO & Conteúdo',
  description:
    'Estratégias de SEO e conteúdo que colocam sua marca nas primeiras posições do Google e geram tráfego orgânico qualificado.',
  path: '/servicos/seo-e-conteudo',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
