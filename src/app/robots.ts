import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

// Rotas fora dos índices: manual de marca interno, CMS e assinatura de e-mail.
const DISALLOW = ['/brand', '/studio', '/assinatura', '/assinatura.html'];

/**
 * Agentes de IA (busca generativa e assistentes) liberados explicitamente.
 * O `User-Agent: *` já permitiria tudo, mas várias auditorias de "agent readiness"
 * só pontuam quando o bot aparece nomeado — e alguns crawlers (Applebot-Extended,
 * Google-Extended) só consideram o consentimento válido se ele for explícito.
 */
const AI_AGENTS = [
  // OpenAI
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  // Anthropic
  'ClaudeBot',
  'Claude-User',
  'Claude-SearchBot',
  'anthropic-ai',
  // Perplexity
  'PerplexityBot',
  'Perplexity-User',
  // Google / Apple / Microsoft
  'Google-Extended',
  'GoogleOther',
  'Applebot',
  'Applebot-Extended',
  'BingBot',
  // Outros
  'meta-externalagent',
  'Amazonbot',
  'DuckAssistBot',
  'cohere-ai',
  'YouBot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: DISALLOW },
      ...AI_AGENTS.map((userAgent) => ({ userAgent, allow: '/', disallow: DISALLOW })),
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
