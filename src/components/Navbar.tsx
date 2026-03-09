'use client';

import { useState, useEffect } from 'react';
import Magnet from '@/components/Magnet';

const navLinks = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4 md:px-10">
          <a href="#" className="relative z-[101] select-none text-xl font-extrabold tracking-tight text-[var(--whp-text)]">
            WHP<span className="text-[var(--whp-accent)]">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Magnet key={link.href} padding={40} magnetStrength={3}>
                <a href={link.href} className="nav__link">{link.label}</a>
              </Magnet>
            ))}
          </div>

          <div className="hidden md:block">
            <Magnet padding={50} magnetStrength={3}>
              <a href="#contato" className="inline-flex items-center gap-2 rounded-full bg-[var(--whp-text)] px-5 py-2.5 text-sm font-semibold text-[var(--whp-bg)] transition-all duration-300 hover:bg-black hover:scale-[1.02]">
                Iniciar projeto
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
            </Magnet>
          </div>

          <button
            className={`hamburger relative z-[101] md:hidden ${menuOpen ? 'hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="hamburger__line" />
            <span className="hamburger__line" />
            <span className="hamburger__line" />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="mobile-menu__link" onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#contato" className="hero__cta mt-4" onClick={() => setMenuOpen(false)}>
          Iniciar projeto
        </a>
      </div>
    </>
  );
}
