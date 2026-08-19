import { defineField, defineType } from 'sanity';

export const author = defineType({
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Nome', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'name' } }),
    defineField({ name: 'role', title: 'Cargo / Função', type: 'string' }),
    defineField({ name: 'bio', title: 'Bio', type: 'text', rows: 3, description: 'Credenciais e experiência (reforça E-E-A-T).' }),
    defineField({ name: 'image', title: 'Foto', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'linkedin', title: 'LinkedIn (URL)', type: 'url' }),
  ],
  preview: { select: { title: 'name', subtitle: 'role', media: 'image' } },
});
