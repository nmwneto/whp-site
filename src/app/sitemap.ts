import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

// Páginas indexáveis do site (/brand fica de fora — é noindex/uso interno).
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/sobre', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contato', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/servicos/identidade-de-marca', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/servicos/web-design-e-dev', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/servicos/seo-e-conteudo', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/servicos/social-media-e-performance', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/servicos/projetos-personalizados', priority: 0.8, changeFrequency: 'monthly' },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
