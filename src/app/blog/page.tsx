import Link from 'next/link';
import Image from 'next/image';
import NavbarWHP from '@/components/NavbarWHP';
import Footer from '@/components/Footer';
import { getPosts } from '@/sanity/queries';
import { urlForImage } from '@/sanity/image';

export const revalidate = 60;

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
  } catch {
    return '';
  }
}

export default async function BlogIndex() {
  const posts = await getPosts();

  return (
    <>
      <NavbarWHP />

      {/* Hero */}
      <section
        style={{
          background: 'radial-gradient(ellipse 900px 500px at 50% 60%, rgba(0,113,227,0.10), transparent), #0a0a0a',
          padding: '10rem 4rem 4rem',
          textAlign: 'center',
        }}
      >
        <div className="mx-auto max-w-[800px]" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', alignItems: 'center' }}>
          <p className="text-[0.75rem] font-semibold uppercase tracking-[0.2em] text-[#0071e3]">Blog</p>
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-bold tracking-[-0.035em] text-white leading-[1.08]">
            Ideias que fazem marcas crescerem
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: 560 }}>
            Estratégias práticas de branding, web, SEO, social media e performance.
          </p>
        </div>
      </section>

      {/* Lista */}
      <section style={{ background: '#0a0a0a', padding: '2rem 4rem 6rem' }}>
        <div className="mx-auto max-w-[1100px]">
          {posts.length === 0 ? (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 2rem',
                background: '#111',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '1.25rem',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              <p style={{ fontSize: '1.0625rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>
                Conteúdo a caminho 🚀
              </p>
              <p style={{ fontSize: '0.9375rem', lineHeight: 1.7 }}>
                Estamos preparando os primeiros artigos. Volte em breve.
              </p>
            </div>
          ) : (
            <div className="blog-grid grid gap-6" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {posts.map((post) => {
                const cover = post.coverImage ? urlForImage(post.coverImage)?.width(800).height(500).url() : null;
                return (
                  <Link
                    key={post._id}
                    href={`/blog/${post.slug}`}
                    style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', background: '#111', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '1.25rem', overflow: 'hidden' }}
                  >
                    {cover && (
                      <div style={{ position: 'relative', aspectRatio: '16/10' }}>
                        <Image src={cover} alt={post.title} fill sizes="(max-width: 768px) 100vw, 350px" style={{ objectFit: 'cover' }} />
                      </div>
                    )}
                    <div style={{ padding: '1.5rem' }}>
                      {post.categories?.[0] && (
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#0071e3', marginBottom: '0.75rem' }}>
                          {post.categories[0]}
                        </p>
                      )}
                      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: '0.75rem' }}>
                        {post.title}
                      </h2>
                      {post.excerpt && (
                        <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '1rem' }}>
                          {post.excerpt}
                        </p>
                      )}
                      <p style={{ fontSize: '0.8125rem', color: 'rgba(255,255,255,0.35)' }}>
                        {post.author?.name ? `${post.author.name} · ` : ''}{formatDate(post.publishedAt)}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
