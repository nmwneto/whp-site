'use client';

import Noise from '@/components/Noise';

export default function NoiseOverlay() {
  return <Noise patternAlpha={15} patternRefreshInterval={3} />;
}
