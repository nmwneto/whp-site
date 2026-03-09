'use client';

import { useState, useEffect } from 'react';
import LiquidEther from '@/components/LiquidEther';

export default function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
      }}
    >
      <LiquidEther
        colors={['#0071e3', '#5AC8FA', '#bf5af2']}
        mouseForce={15}
        cursorSize={80}
        resolution={0.5}
        autoDemo
        autoSpeed={0.4}
        autoIntensity={1.8}
      />
    </div>
  );
}
