import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Sobre',
  description:
    'Conheça a WHP: agência de design e tecnologia que transforma marcas em referências digitais com estratégia, criatividade e execução.',
  path: '/sobre',
});

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return children;
}
