import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { webPageSchema, topLevelBreadcrumbSchema } from '@/lib/schema';

const TITLE = 'Contato';
const DESCRIPTION =
  'Fale com a WHP pelo WhatsApp e receba uma proposta personalizada para seu projeto de marca, site, SEO ou social media.';
const PATH = '/contato';

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function ContatoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH, type: 'ContactPage' }),
          topLevelBreadcrumbSchema({ name: TITLE, path: PATH }),
        ]}
      />
      {children}
    </>
  );
}
