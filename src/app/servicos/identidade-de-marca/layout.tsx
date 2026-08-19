import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Identidade de Marca',
  description:
    'Identidade visual completa: logo, paleta, tipografia e brand guidelines. Marcas memoráveis do digital ao impresso.',
  path: '/servicos/identidade-de-marca',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
