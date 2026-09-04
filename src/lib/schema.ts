import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/lib/seo';
import { WHATSAPP_NUMBER } from '@/lib/contact';
import { SERVICES, type Service } from '@/lib/services';
import { translations } from '@/i18n/translations';

export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const ORG_DESCRIPTION =
  'Agência de marketing digital que une estratégia, design e tecnologia para fazer marcas crescerem: identidade visual, sites, SEO e social media.';

/**
 * Dados institucionais que o Schema.org usa para desambiguar a WHP de outras
 * entidades com nome parecido. Campos em `null` são simplesmente omitidos do
 * JSON-LD — preencher aqui é o único passo necessário para publicá-los.
 */
export const ORG_PROFILE = {
  /** Perfis oficiais DA EMPRESA (não dos sócios). Ex.: LinkedIn company page, Instagram. */
  sameAs: [] as string[],
  /** E-mail público de contato. */
  email: null as string | null,
  /** Ano de fundação no formato ISO, ex.: '2023'. */
  foundingDate: null as string | null,
};

// Sem `address`: o atendimento é remoto e não há escritório aberto ao público,
// então `areaServed: Brasil` descreve a operação melhor que um endereço postal.

/** Temas sobre os quais a WHP tem autoridade — sinal de E-E-A-T para buscadores generativos. */
const KNOWS_ABOUT = [
  'Identidade visual',
  'Branding',
  'Design gráfico',
  'Web design',
  'Desenvolvimento web',
  'Next.js',
  'React',
  'SEO',
  'Marketing de conteúdo',
  'Social media',
  'Tráfego pago',
  'Google Ads',
  'Meta Ads',
  'Automação e IA aplicada a marketing',
];

/** Cada serviço vira uma `Offer` dentro do catálogo da agência. */
function offerCatalog(): Record<string, unknown> {
  return {
    '@type': 'OfferCatalog',
    name: 'Serviços WHP',
    itemListElement: SERVICES.map((service, index) => ({
      '@type': 'Offer',
      position: index + 1,
      itemOffered: {
        '@type': 'Service',
        '@id': `${SITE_URL}${service.path}/#service`,
        name: service.name,
        description: service.description,
        url: `${SITE_URL}${service.path}`,
      },
    })),
  };
}

/**
 * Entidade da empresa — referenciada por @id em todos os outros schemas.
 * `ProfessionalService` é um subtipo de Organization e de LocalBusiness: descreve
 * melhor uma agência do que `Organization` puro e habilita campos de negócio.
 */
export const organizationSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': ORG_ID,
  name: 'WHP — We Have a Plan',
  alternateName: SITE_NAME,
  legalName: 'WHP — We Have a Plan',
  slogan: 'We Have a Plan',
  url: SITE_URL,
  logo: `${SITE_URL}/images/whp-logo.svg`,
  image: `${SITE_URL}${OG_IMAGE}`,
  description: ORG_DESCRIPTION,
  areaServed: { '@type': 'Country', name: 'Brasil' },
  knowsAbout: KNOWS_ABOUT,
  knowsLanguage: ['pt-BR', 'en'],
  telephone: `+${WHATSAPP_NUMBER}`,
  hasOfferCatalog: offerCatalog(),
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    telephone: `+${WHATSAPP_NUMBER}`,
    url: `${SITE_URL}/contato`,
    areaServed: 'BR',
    availableLanguage: ['Portuguese', 'English'],
  },
  ...(ORG_PROFILE.sameAs.length ? { sameAs: ORG_PROFILE.sameAs } : {}),
  ...(ORG_PROFILE.email ? { email: ORG_PROFILE.email } : {}),
  ...(ORG_PROFILE.foundingDate ? { foundingDate: ORG_PROFILE.foundingDate } : {}),
};

/** O site em si. */
export const websiteSchema: Record<string, unknown> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  url: SITE_URL,
  name: 'WHP — We Have a Plan',
  description: ORG_DESCRIPTION,
  inLanguage: 'pt-BR',
  publisher: { '@id': ORG_ID },
};

/**
 * Identidade da página em si. Dá ao agente um nó `WebPage` (ou subtipo) com
 * `isPartOf` e `about` explícitos, em vez de deixá-lo inferir a partir do HTML.
 */
export function webPageSchema(input: {
  name: string;
  description: string;
  path: string;
  /** Subtipo mais específico quando couber: 'AboutPage', 'ContactPage', 'CollectionPage'. */
  type?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': input.type ?? 'WebPage',
    '@id': `${SITE_URL}${input.path}#webpage`,
    url: `${SITE_URL}${input.path}`,
    name: input.name,
    description: input.description,
    inLanguage: 'pt-BR',
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
  };
}

/** Schema de um serviço, para as páginas em /servicos/*. */
export function serviceSchema(service: Service): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}${service.path}/#service`,
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: `${SITE_URL}${service.path}`,
    provider: { '@id': ORG_ID },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: `${SITE_URL}${service.path}`,
      servicePhone: `+${WHATSAPP_NUMBER}`,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `O que inclui — ${service.name}`,
      itemListElement: service.deliverables.map((item, index) => ({
        '@type': 'Offer',
        position: index + 1,
        itemOffered: { '@type': 'Service', name: item },
      })),
    },
  };
}

/**
 * FAQ da página de serviço. O conteúdo vem de `translations.pt` porque pt-BR é a
 * língua canônica do site (o seletor de idioma é client-side e não gera URL própria),
 * então é o texto em português que o crawler enxerga no HTML servido.
 */
export function faqSchema(service: Service): Record<string, unknown> {
  const faq = translations.pt.servicePages[service.i18nKey].faq;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}${service.path}/#faq`,
    inLanguage: 'pt-BR',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
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

/** Trilha rasa: Início > [página]. Para /sobre, /contato e /blog. */
export function topLevelBreadcrumbSchema(input: { name: string; path: string }): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Início', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: input.name, item: `${SITE_URL}${input.path}` },
    ],
  };
}
