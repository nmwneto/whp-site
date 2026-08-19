import Image from 'next/image';
import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { urlForImage } from '@/sanity/image';
import type { Image as SanityImage } from 'sanity';

const components: PortableTextComponents = {
  types: {
    image: ({ value }: { value: SanityImage & { alt?: string } }) => {
      const url = urlForImage(value)?.width(1200).url();
      if (!url) return null;
      return (
        <span style={{ display: 'block', position: 'relative', width: '100%', aspectRatio: '16/9', margin: '2rem 0', borderRadius: '0.75rem', overflow: 'hidden' }}>
          <Image src={url} alt={value.alt || ''} fill sizes="(max-width: 768px) 100vw, 720px" style={{ objectFit: 'cover' }} />
        </span>
      );
    },
  },
  block: {
    h2: ({ children }) => <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', margin: '2.5rem 0 1rem' }}>{children}</h2>,
    h3: ({ children }) => <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', margin: '2rem 0 0.75rem' }}>{children}</h3>,
    normal: ({ children }) => <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', margin: '0 0 1.25rem' }}>{children}</p>,
    blockquote: ({ children }) => <blockquote style={{ borderLeft: '3px solid #0071e3', padding: '0.5rem 0 0.5rem 1.25rem', margin: '1.5rem 0', color: 'rgba(255,255,255,0.6)', fontStyle: 'italic' }}>{children}</blockquote>,
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer" style={{ color: '#0071e3', textDecoration: 'underline' }}>{children}</a>
    ),
    strong: ({ children }) => <strong style={{ color: '#fff', fontWeight: 700 }}>{children}</strong>,
  },
  list: {
    bullet: ({ children }) => <ul style={{ margin: '0 0 1.25rem 1.25rem', color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', lineHeight: 1.75, listStyle: 'disc' }}>{children}</ul>,
    number: ({ children }) => <ol style={{ margin: '0 0 1.25rem 1.25rem', color: 'rgba(255,255,255,0.7)', fontSize: '1.0625rem', lineHeight: 1.75, listStyle: 'decimal' }}>{children}</ol>,
  },
};

export default function PortableTextBody({ value }: { value: unknown[] }) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <PortableText value={value as any} components={components} />;
}
