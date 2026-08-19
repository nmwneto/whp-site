import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

const NAME = 'Projetos Personalizados';
const DESCRIPTION =
  'Soluções sob medida que unem design, tecnologia e estratégia — de branding a automação e IA — para desafios únicos do seu negócio.';
const PATH = '/servicos/projetos-personalizados';

export const metadata: Metadata = buildMetadata({ title: NAME, description: DESCRIPTION, path: PATH });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceSchema({ name: NAME, description: DESCRIPTION, path: PATH }), breadcrumbSchema({ name: NAME, path: PATH })]} />
      {children}
    </>
  );
}
