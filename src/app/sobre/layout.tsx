import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { webPageSchema, topLevelBreadcrumbSchema } from '@/lib/schema';

const TITLE = 'Sobre';
const DESCRIPTION =
  'Conheça a WHP: agência de design e tecnologia que transforma marcas em referências digitais com estratégia, criatividade e execução.';
const PATH = '/sobre';

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function SobreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH, type: 'AboutPage' }),
          topLevelBreadcrumbSchema({ name: TITLE, path: PATH }),
        ]}
      />
      {children}
    </>
  );
}
