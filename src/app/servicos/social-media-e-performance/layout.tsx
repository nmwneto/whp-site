import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/seo';
import JsonLd from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema, webPageSchema, faqSchema } from '@/lib/schema';
import { getService } from '@/lib/services';

const service = getService('/servicos/social-media-e-performance');

export const metadata: Metadata = buildMetadata({
  title: service.name,
  description: service.description,
  path: service.path,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ name: service.name, description: service.description, path: service.path }),
          serviceSchema(service),
          faqSchema(service),
          breadcrumbSchema({ name: service.name, path: service.path }),
        ]}
      />
      {children}
    </>
  );
}
