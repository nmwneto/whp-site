import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { webPageSchema, topLevelBreadcrumbSchema } from '@/lib/schema';

const TITLE = 'Blog';
const DESCRIPTION =
  'Ideias e estratégias de marketing digital, branding, web, SEO e social media pela WHP. Conteúdo prático para fazer sua marca crescer.';
const PATH = '/blog';

export const metadata: Metadata = buildMetadata({ title: TITLE, description: DESCRIPTION, path: PATH });

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: TITLE, description: DESCRIPTION, path: PATH, type: 'CollectionPage' }),
          topLevelBreadcrumbSchema({ name: TITLE, path: PATH }),
        ]}
      />
      {children}
    </>
  );
}
