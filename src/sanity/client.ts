import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion, isSanityConfigured } from './env';

// client é null até o projeto Sanity ser conectado (evita erro de projectId vazio no build).
export const client = isSanityConfigured
  ? createClient({ projectId, dataset, apiVersion, useCdn: true })
  : null;
