import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/lib/seo';
import { WHATSAPP_NUMBER } from '@/lib/contact';

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const ORG_DESCRIPTION =
  'Agência de marketing digital que une estratégia, design e tecnologia para fazer marcas crescerem: identidade visual, sites, SEO e social media.';

/** Entidade da empresa — referenciada por @id em todos os outros schemas. */
export const organizationSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'WHP — We Have a Plan',
  alternateName: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/whp-logo.svg`,
  image: `${SITE_URL}${OG_IMAGE}`,
  description: ORG_DESCRIPTION,
  areaServed: 'BR',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: `+${WHATSAPP_NUMBER}`,
    areaServed: 'BR',
    availableLanguage: ['Portuguese', 'English'],
  },
};

/** O site em si. */
export const websiteSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'WHP — We Have a Plan',
  inLanguage: 'pt-BR',
  publisher: { '@id': ORG_ID },
};

/** Schema de um serviço, para as páginas em /servicos/*. */
export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    serviceType: input.name,
    description: input.description,
    url: `${SITE_URL}${input.path}`,
    provider: { '@id': ORG_ID },
    areaServed: 'BR',
  };
}

/** Trilha de navegação: Início > Serviços > [página]. */
export function breadcrumbSchema(input: { name: string; path: string }): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Serviços', item: `${SITE_URL}/#servicos` },
      { '@type': 'ListItem', position: 3, name: input.name, item: `${SITE_URL}${input.path}` },
    ],
  };
}
