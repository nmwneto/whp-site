import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import NavbarWHP from '@/components/NavbarWHP';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';
import PortableTextBody from '@/components/PortableTextBody';
import { getPost, getPostSlugs } from '@/sanity/queries';
import { urlForImage } from '@/sanity/image';
import { SITE_URL, SITE_NAME, OG_IMAGE } from '@/lib/seo';
import { ORG_ID } from '@/lib/schema';

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post não encontrado' };
  const path = `/blog/${post.slug}`;
  const ogImage = post.coverImage ? urlForImage(post.coverImage)?.width(1200).height(630).url() : null;
  return {
    title: post.seoTitle || post.title,
    description: post.excerpt,
    alternates: { canonical: path },
    ...(post.noindex ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: 'article',
      locale: 'pt_BR',
      url: path,
      siteName: SITE_NAME,
      title: post.seoTitle || post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      images: [{ url: ogImage || OG_IMAGE, width: 1200, height: 630, alt: post.title }],
    },
    twitter: { card: 'summary_large_image', title: post.seoTitle || post.title, description: post.excerpt, images: [ogImage || OG_IMAGE] },
  };
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return '';
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const cover = post.coverImage ? urlForImage(post.coverImage)?.width(1600).height(900).url() : null;
  const ogImage = post.coverImage ? urlForImage(post.coverImage)?.width(1200).height(630).url() : `${SITE_URL}${OG_IMAGE}`;

  const articleSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    image: ogImage,
    url: `${SITE_URL}/blog/${post.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}` },
    publisher: { '@id': ORG_ID },
    ...(post.author?.name ? { author: { '@type': 'Person', name: post.author.name, ...(post.author.linkedin ? { sameAs: post.author.linkedin } : {}) } } : {}),
  };

  return (
    <>
      <NavbarWHP />
      <JsonLd data={articleSchema} />

      <article style={{ background: '#0a0a0a', padding: '9rem 4rem 5rem' }}>
        <div className="mx-auto max-w-[760px]">
          <Link href="/blog" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>← Blog</Link>

          <header style={{ margin: '1.5rem 0 2.5rem' }}>
            {post.categories?.[0] && (
              <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#0071e3', marginBottom: '1rem' }}>
                {post.categories[0]}
              </p>
            )}
            <h1 style={{ fontSize: 'clamp(2rem,4.5vw,3rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', lineHeight: 1.12, marginBottom: '1.25rem' }}>
              {post.title}
            </h1>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.4)' }}>
              {post.author?.name ? `${post.author.name} · ` : ''}{formatDate(post.publishedAt)}
            </p>
          </header>

          {cover && (
            <div style={{ position: 'relative', aspectRatio: '16/9', borderRadius: '1rem', overflow: 'hidden', marginBottom: '2.5rem' }}>
              <Image src={cover} alt={post.title} fill sizes="(max-width: 768px) 100vw, 760px" priority style={{ objectFit: 'cover' }} />
            </div>
          )}

          {post.body && <PortableTextBody value={post.body} />}
        </div>
      </article>

      <Footer />
    </>
  );
}
