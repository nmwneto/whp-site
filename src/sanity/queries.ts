import { groq } from 'next-sanity';
import { client } from './client';

export type PostListItem = {
  _id: string;
  title: string;
  slug: string;
  excerpt?: string;
  publishedAt: string;
  coverImage?: import('sanity').Image;
  author?: { name: string };
  categories?: string[];
};

export type PostFull = PostListItem & {
  body?: unknown[];
  seoTitle?: string;
  noindex?: boolean;
  author?: { name: string; role?: string; bio?: string; image?: import('sanity').Image; linkedin?: string };
};

const postFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  coverImage,
  "author": author->{ name, role, bio, image, linkedin },
  "categories": categories[]->title
`;

const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){ ${postFields} }`;
const slugsQuery = groq`*[_type == "post" && defined(slug.current)][].slug.current`;
const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0]{ ${postFields}, body, seoTitle, noindex }`;

// revalida a cada 60s (ISR) quando conectado
const opts = { next: { revalidate: 60 } } as const;

export async function getPosts(): Promise<PostListItem[]> {
  if (!client) return [];
  try { return await client.fetch(postsQuery, {}, opts); } catch { return []; }
}

export async function getPostSlugs(): Promise<string[]> {
  if (!client) return [];
  try { return await client.fetch(slugsQuery, {}, opts); } catch { return []; }
}

export async function getPost(slug: string): Promise<PostFull | null> {
  if (!client) return null;
  try { return await client.fetch(postBySlugQuery, { slug }, opts); } catch { return null; }
}
