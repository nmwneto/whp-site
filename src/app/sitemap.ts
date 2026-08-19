import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { getPosts } from '@/sanity/queries';

export const revalidate = 3600;

// Páginas indexáveis do site (/brand e /studio ficam de fora — noindex/uso interno).
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' },
    { path: '/sobre', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/contato', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/servicos/identidade-de-marca', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/servicos/web-design-e-dev', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/servicos/seo-e-conteudo', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/servicos/social-media-e-performance', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/servicos/projetos-personalizados', priority: 0.8, changeFrequency: 'monthly' },
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  // Posts do blog (vazio enquanto o Sanity não estiver conectado).
  const posts = await getPosts();
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticEntries, ...postEntries];
}
