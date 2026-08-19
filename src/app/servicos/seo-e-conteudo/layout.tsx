import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

const NAME = 'SEO & Conteúdo';
const DESCRIPTION =
  'Estratégias de SEO e conteúdo que colocam sua marca nas primeiras posições do Google e geram tráfego orgânico qualificado.';
const PATH = '/servicos/seo-e-conteudo';

export const metadata: Metadata = buildMetadata({ title: NAME, description: DESCRIPTION, path: PATH });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceSchema({ name: NAME, description: DESCRIPTION, path: PATH }), breadcrumbSchema({ name: NAME, path: PATH })]} />
      {children}
    </>
  );
}
