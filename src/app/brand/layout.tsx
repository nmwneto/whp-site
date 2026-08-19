import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

// Manual de marca de uso interno — fora dos índices de busca.
export const metadata: Metadata = buildMetadata({
  title: 'Manual de Marca',
  description: 'Manual de identidade visual da WHP — uso interno.',
  path: '/brand',
  noindex: true,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
