'use client';

import GradualBlur from '@/components/GradualBlur';

export default function PageBlur() {
  return (
    <>
      <GradualBlur
        position="top"
        target="page"
        height="8rem"
        strength={2.5}
        curve="ease-out"
        divCount={6}
        zIndex={50}
      />
      <GradualBlur
        position="bottom"
        target="page"
        height="8rem"
        strength={2.5}
        curve="ease-out"
        divCount={6}
        zIndex={50}
      />
    </>
  );
}
