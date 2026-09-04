import { SITE_URL } from '@/lib/seo';
import { WHATSAPP_URL } from '@/lib/contact';
import { SERVICES } from '@/lib/services';
import { getPosts } from '@/sanity/queries';

const TAGLINE =
  'Agência de marketing digital que une estratégia, design e tecnologia para fazer marcas crescerem. A WHP entrega identidade visual, sites de alta performance, SEO, conteúdo, social media e projetos personalizados, do branding ao código.';

const CONTACT_LINE = `O atendimento e os orçamentos são feitos exclusivamente pelo WhatsApp: ${WHATSAPP_URL.split('?')[0]}`;

const INSTITUTIONAL = [
  { title: 'Home', path: '/', summary: 'Visão geral da agência, serviços, projetos e time.' },
  {
    title: 'Sobre',
    path: '/sobre',
    summary:
      'Missão, visão, história e time da WHP — agência de design e tecnologia que transforma marcas em referências digitais.',
  },
  {
    title: 'Blog',
    path: '/blog',
    summary: 'Artigos sobre branding, web, SEO, social media e performance.',
  },
  {
    title: 'Contato',
    path: '/contato',
    summary: 'Fale com a WHP pelo WhatsApp e receba uma proposta personalizada.',
  },
];

function link(title: string, path: string, summary: string) {
  return `- [${title}](${SITE_URL}${path === '/' ? '/' : path}): ${summary}`;
}

/** Índice enxuto no padrão llms.txt: cabeçalho, resumo e links por seção. */
export async function buildLlmsTxt(): Promise<string> {
  const posts = await getPosts();

  const sections = [
    '# WHP — We Have a Plan',
    '',
    `> ${TAGLINE}`,
    '',
    CONTACT_LINE,
    '',
    '## Institucional',
    '',
    ...INSTITUTIONAL.map((p) => link(p.title, p.path, p.summary)),
    '',
    '## Serviços',
    '',
    ...SERVICES.map((s) => link(s.name, s.path, s.description)),
  ];

  if (posts.length) {
    sections.push('', '## Blog', '');
    for (const post of posts) {
      sections.push(link(post.title, `/blog/${post.slug}`, post.excerpt || 'Artigo do blog da WHP.'));
    }
  }

  return `${sections.join('\n')}\n`;
}

/** Versão expandida: mesma estrutura, com entregáveis de cada serviço em texto corrido. */
export async function buildLlmsFullTxt(): Promise<string> {
  const posts = await getPosts();

  const sections = [
    '# WHP — We Have a Plan',
    '',
    `> ${TAGLINE}`,
    '',
    CONTACT_LINE,
    '',
    '## Sobre a WHP',
    '',
    'A WHP é uma agência brasileira de marketing digital, design e tecnologia. Atua em todo o Brasil, atende em',
    'português e inglês, e cobre o ciclo completo de uma marca: estratégia, identidade visual, site, conteúdo,',
    'mídia paga e automação. O diferencial é entregar design e engenharia sob o mesmo teto — a mesma equipe que',
    'define o posicionamento escreve o código que o coloca no ar.',
    '',
    '## Serviços',
  ];

  for (const service of SERVICES) {
    sections.push(
      '',
      `### ${service.name}`,
      '',
      service.description,
      '',
      'O que inclui:',
      ...service.deliverables.map((item) => `- ${item}`),
      '',
      `Página: ${SITE_URL}${service.path}`,
    );
  }

  sections.push(
    '',
    '## Contato',
    '',
    `WhatsApp: ${WHATSAPP_URL.split('?')[0]}`,
    `Página de contato: ${SITE_URL}/contato`,
    '',
    '## Páginas institucionais',
    '',
    ...INSTITUTIONAL.map((p) => link(p.title, p.path, p.summary)),
  );

  if (posts.length) {
    sections.push('', '## Blog', '');
    for (const post of posts) {
      sections.push(
        `### ${post.title}`,
        '',
        post.excerpt || 'Artigo do blog da WHP.',
        '',
        `Publicado em ${post.publishedAt?.slice(0, 10) ?? 'data não informada'} · ${SITE_URL}/blog/${post.slug}`,
        '',
      );
    }
  }

  return `${sections.join('\n')}\n`;
}
