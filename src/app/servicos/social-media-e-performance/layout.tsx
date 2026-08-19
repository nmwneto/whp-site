import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

const NAME = 'Social Media & Performance';
const DESCRIPTION =
  'Gestão de redes sociais, tráfego pago (Meta e Google Ads) e análise de performance para crescer sua marca com ROI comprovado.';
const PATH = '/servicos/social-media-e-performance';

export const metadata: Metadata = buildMetadata({ title: NAME, description: DESCRIPTION, path: PATH });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceSchema({ name: NAME, description: DESCRIPTION, path: PATH }), breadcrumbSchema({ name: NAME, path: PATH })]} />
      {children}
    </>
  );
}
