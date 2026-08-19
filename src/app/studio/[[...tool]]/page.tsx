import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config';

// O Studio é totalmente client-side; renderiza como rota estática.
export const dynamic = 'force-static';

export { metadata, viewport } from 'next-sanity/studio';

export default function StudioPage() {
  return <NextStudio config={config} />;
}
