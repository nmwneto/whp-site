import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/schema';

const NAME = 'Web Design & Desenvolvimento';
const DESCRIPTION =
  'Sites de alta performance com design único e código limpo em React/Next.js. UX que converte, SEO técnico e carregamento ultrarrápido.';
const PATH = '/servicos/web-design-e-dev';

export const metadata: Metadata = buildMetadata({ title: NAME, description: DESCRIPTION, path: PATH });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={[serviceSchema({ name: NAME, description: DESCRIPTION, path: PATH }), breadcrumbSchema({ name: NAME, path: PATH })]} />
      {children}
    </>
  );
}
