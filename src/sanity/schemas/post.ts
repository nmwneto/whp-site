import { defineArrayMember, defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Resumo',
      type: 'text',
      rows: 3,
      description: 'Usado na listagem, meta description e Open Graph (ideal ~155 caracteres).',
      validation: (r) => r.max(200),
    }),
    defineField({ name: 'coverImage', title: 'Imagem de capa', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'author', title: 'Autor', type: 'reference', to: [{ type: 'author' }] }),
    defineField({
      name: 'categories',
      title: 'Categorias',
      type: 'array',
      of: [defineArrayMember({ type: 'reference', to: [{ type: 'category' }] })],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'body',
      title: 'Conteúdo',
      type: 'array',
      of: [
        defineArrayMember({ type: 'block' }),
        defineArrayMember({ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Texto alternativo', type: 'string' }] }),
      ],
    }),
    defineField({
      name: 'seoTitle',
      title: 'SEO — Título (opcional)',
      type: 'string',
      description: 'Sobrescreve o <title>. Se vazio, usa o título do post.',
    }),
    defineField({ name: 'noindex', title: 'Não indexar (noindex)', type: 'boolean', initialValue: false }),
  ],
  orderings: [
    { title: 'Publicação (mais recente)', name: 'publishedDesc', by: [{ field: 'publishedAt', direction: 'desc' }] },
  ],
  preview: { select: { title: 'title', subtitle: 'publishedAt', media: 'coverImage' } },
});
