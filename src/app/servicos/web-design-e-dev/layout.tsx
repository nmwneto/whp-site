import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Web Design & Desenvolvimento',
  description:
    'Sites de alta performance com design único e código limpo em React/Next.js. UX que converte, SEO técnico e carregamento ultrarrápido.',
  path: '/servicos/web-design-e-dev',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
