import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

const NAME = 'Identidade de Marca';
const DESCRIPTION =
  'Identidade visual completa: logo, paleta, tipografia e brand guidelines. Marcas memoráveis do digital ao impresso.';
const PATH = '/servicos/identidade-de-marca';

export const metadata: Metadata = buildMetadata({ title: NAME, description: DESCRIPTION, path: PATH });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceSchema({ name: NAME, description: DESCRIPTION, path: PATH }), breadcrumbSchema({ name: NAME, path: PATH })]} />
      {children}
    </>
  );
}
