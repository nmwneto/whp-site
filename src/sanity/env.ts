// Configuração do Sanity via variáveis de ambiente (valores públicos, não são segredos).
// Defina em .env.local (dev) e no painel da Vercel (produção):
//   NEXT_PUBLIC_SANITY_PROJECT_ID=<seu projectId>
//   NEXT_PUBLIC_SANITY_DATASET=production
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '';
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production';
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-10-01';

/** true quando o projeto Sanity já foi conectado. Enquanto false, o blog mostra estado vazio. */
export const isSanityConfigured = projectId.length > 0;
