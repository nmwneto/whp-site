/**
 * Catálogo de serviços da WHP — fonte única de verdade.
 * Consumido pelos layouts de /servicos/*, pelo schema (hasOfferCatalog) e pelo llms.txt.
 */

export type Service = {
  /** Nome comercial, usado como <title> e como `serviceType` no Schema.org. */
  name: string;
  /** Descrição curta (meta description e `description` do Service). */
  description: string;
  /** Caminho da página, ex.: '/servicos/seo-e-conteudo'. */
  path: string;
  /** Chave do serviço em translations.servicePages — liga o catálogo ao conteúdo bilíngue. */
  i18nKey: 'brandIdentity' | 'webDesign' | 'seoContent' | 'socialMedia' | 'customProjects';
  /** Entregáveis concretos — viram `itemListElement` da oferta e bullets no llms.txt. */
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    name: 'Identidade de Marca',
    description:
      'Identidade visual completa: logo, paleta, tipografia e brand guidelines. Marcas memoráveis do digital ao impresso.',
    path: '/servicos/identidade-de-marca',
    i18nKey: 'brandIdentity',
    deliverables: [
      'Logotipo e variações',
      'Paleta de cores e tipografia',
      'Brand guidelines',
      'Papelaria e social media kit',
    ],
  },
  {
    name: 'Web Design & Desenvolvimento',
    description:
      'Sites de alta performance com design único e código limpo em React/Next.js. UX que converte, SEO técnico e carregamento ultrarrápido.',
    path: '/servicos/web-design-e-dev',
    i18nKey: 'webDesign',
    deliverables: [
      'Design UI/UX sob medida',
      'Desenvolvimento em React e Next.js',
      'Responsividade e acessibilidade',
      'SEO técnico e deploy em infraestrutura moderna',
    ],
  },
  {
    name: 'SEO & Conteúdo',
    description:
      'Estratégias de SEO e conteúdo que colocam sua marca nas primeiras posições do Google e geram tráfego orgânico qualificado.',
    path: '/servicos/seo-e-conteudo',
    i18nKey: 'seoContent',
    deliverables: [
      'Auditoria técnica de SEO',
      'Pesquisa de palavras-chave',
      'Otimização on-page',
      'Estratégia e produção de conteúdo',
    ],
  },
  {
    name: 'Social Media & Performance',
    description:
      'Gestão de redes sociais, tráfego pago (Meta e Google Ads) e análise de performance para crescer sua marca com ROI comprovado.',
    path: '/servicos/social-media-e-performance',
    i18nKey: 'socialMedia',
    deliverables: [
      'Gestão estratégica de redes sociais',
      'Design de posts e gestão de comunidade',
      'Tráfego pago (Meta Ads e Google Ads)',
      'Análise de métricas e ROI',
    ],
  },
  {
    name: 'Projetos Personalizados',
    description:
      'Soluções sob medida que unem design, tecnologia e estratégia — de branding a automação e IA — para desafios únicos do seu negócio.',
    path: '/servicos/projetos-personalizados',
    i18nKey: 'customProjects',
    deliverables: [
      'Consultoria estratégica e prototipagem',
      'Integrações e APIs',
      'Automação de processos',
      'Soluções com IA',
    ],
  },
];

/** Busca um serviço pelo caminho — usado pelos layouts de /servicos/*. */
export function getService(path: string): Service {
  const service = SERVICES.find((s) => s.path === path);
  if (!service) throw new Error(`Serviço não encontrado para o caminho "${path}"`);
  return service;
}
