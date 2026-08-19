import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Projetos Personalizados',
  description:
    'Soluções sob medida que unem design, tecnologia e estratégia — de branding a automação e IA — para desafios únicos do seu negócio.',
  path: '/servicos/projetos-personalizados',
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
