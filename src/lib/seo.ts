import type { Metadata } from 'next';

// Domínio de produção — usado para URLs absolutas (canonical, Open Graph).
export const SITE_URL = 'https://whpdigital.com';
export const SITE_NAME = 'WHP';
export const DEFAULT_TITLE = 'WHP — Agência de Marketing Digital, Design e Tecnologia';
export const OG_IMAGE = '/og-image.jpg';

type SeoInput = {
  /** Título curto da página (o template " | WHP" é aplicado pelo layout raiz). */
  title: string;
  description: string;
  /** Caminho da página, ex.: '/contato'. */
  path: string;
  /** Remove a página dos índices de busca (ex.: manual de marca interno). */
  noindex?: boolean;
};

/**
 * Monta o objeto Metadata completo de uma página (title, description, canonical,
 * Open Graph e Twitter Card). metadataBase é herdado do layout raiz e resolve
 * os caminhos relativos (canonical e imagem OG) para URLs absolutas.
 */
export function buildMetadata({ title, description, path, noindex }: SeoInput): Metadata {
  const ogTitle = `${title} | ${SITE_NAME}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    ...(noindex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: 'website',
      locale: 'pt_BR',
      url: path,
      siteName: SITE_NAME,
      title: ogTitle,
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'WHP — We Have a Plan' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      images: [OG_IMAGE],
    },
  };
}
