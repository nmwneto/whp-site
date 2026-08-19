import imageUrlBuilder from '@sanity/image-url';
import type { Image } from 'sanity';
import { projectId, dataset, isSanityConfigured } from './env';

const builder = isSanityConfigured ? imageUrlBuilder({ projectId, dataset }) : null;

/** Gera URL de uma imagem do Sanity (ex.: urlForImage(post.coverImage).width(1200).url()). */
export function urlForImage(source: Image) {
  return builder ? builder.image(source) : null;
}
