'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { ArrowUpRight, ChevronDown, Menu } from 'lucide-react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from '@/i18n/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

function ServicesDropdown({ href }: { href: string }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const servicesLinks = [
    { title: t.nav.serviceLinks[0], href: '/servicos/identidade-de-marca', color: '#0071e3' },
    { title: t.nav.serviceLinks[1], href: '/servicos/web-design-e-dev', color: '#34c759' },
    { title: t.nav.serviceLinks[2], href: '/servicos/seo-e-conteudo', color: '#ff9f0a' },
    { title: t.nav.serviceLinks[3], href: '/servicos/social-media-e-performance', color: '#bf5af2' },
    { title: t.nav.serviceLinks[4], href: '/servicos/projetos-personalizados', color: '#ff375f' },
  ];

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  return (
    <NavigationMenuItem
      style={{ position: 'relative' }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <a
        href={href}
        className="rounded-full px-4 py-2 text-sm font-medium transition"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.25rem',
          color: open ? '#fff' : 'rgba(255,255,255,0.5)',
          background: open ? 'rgba(255,255,255,0.06)' : 'transparent',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        {t.nav.services}
        <ChevronDown
          size={14}
          style={{
            transition: 'transform 0.2s ease',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </a>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            paddingTop: '0.5rem',
            zIndex: 100,
          }}
        >
          <div
            style={{
              background: '#111',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '1rem',
              padding: '0.5rem',
              minWidth: '240px',
              boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
            }}
          >
            {servicesLinks.map((service) => (
              <a
                key={service.href}
                href={service.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.625rem 0.875rem',
                  borderRadius: '0.625rem',
                  textDecoration: 'none',
                  transition: 'background 0.2s ease',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.8125rem',
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: service.color,
                    flexShrink: 0,
                  }}
                />
                {service.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </NavigationMenuItem>
  );
}

export default function NavbarWHP() {
  const { t } = useTranslation();
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navigationData = [
    { title: t.nav.home, href: '/' },
    { title: t.nav.services, href: '/#servicos' },
    { title: t.nav.projects, href: '/#projetos' },
    { title: t.nav.about, href: '/sobre' },
    { title: t.nav.contact, href: '/contato' },
  ];

  const servicesLinks = [
    { title: t.nav.serviceLinks[0], href: '/servicos/identidade-de-marca', color: '#0071e3' },
    { title: t.nav.serviceLinks[1], href: '/servicos/web-design-e-dev', color: '#34c759' },
    { title: t.nav.serviceLinks[2], href: '/servicos/seo-e-conteudo', color: '#ff9f0a' },
    { title: t.nav.serviceLinks[3], href: '/servicos/social-media-e-performance', color: '#bf5af2' },
    { title: t.nav.serviceLinks[4], href: '/servicos/projetos-personalizados', color: '#ff375f' },
  ];

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      <div
        className="mx-auto max-w-[1200px]"
        style={{ padding: '1rem 4rem' }}
      >
        <nav
          className={cn(
            'flex w-full items-center justify-between gap-4 transition-all duration-500',
            sticky
              ? 'rounded-full border border-white/[0.06] bg-[#0a0a0a]/80 px-5 py-2.5 shadow-2xl backdrop-blur-xl'
              : 'border-transparent bg-transparent py-1'
          )}
        >
          {/* Logo + Language Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href="/"
              style={{
                fontFamily: "'Kangge', sans-serif",
                fontSize: '1.75rem',
                color: '#fff',
                textDecoration: 'none',
                letterSpacing: '0.02em',
              }}
            >
              whp
            </a>
            <LanguageSwitcher />
          </div>

          {/* Desktop nav */}
          <NavigationMenu className="max-lg:hidden">
            <NavigationMenuList
              className="flex gap-0 rounded-full p-0.5"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              {navigationData.map((item) =>
                item.title === t.nav.services ? (
                  <ServicesDropdown key={item.title} href={item.href} />
                ) : (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      href={item.href}
                      className="rounded-full px-4 py-2 text-sm font-medium transition"
                      style={{
                        color: 'rgba(255,255,255,0.5)',
                        textDecoration: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA */}
          <a
            href="/contato"
            className="hidden lg:flex"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1.25rem',
              background: 'linear-gradient(135deg, #bf5af2, transparent)',
              color: '#fff',
              fontSize: '0.8125rem',
              fontWeight: 600,
              borderRadius: '100px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #a845d9, rgba(191,90,242,0.1))';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #bf5af2, transparent)';
            }}
          >
            {t.nav.startProject}
            <ArrowUpRight size={14} />
          </a>

          {/* Mobile menu */}
          <div className="lg:hidden">
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger
                className="flex cursor-pointer items-center justify-center rounded-full p-2 outline-none transition-colors"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#fff',
                }}
              >
                <Menu size={20} />
                <span className="sr-only">Menu</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="mt-2 w-56"
                style={{
                  background: '#111',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <DropdownMenuItem className="cursor-pointer justify-center" style={{ padding: '0.5rem' }}>
                  <LanguageSwitcher />
                </DropdownMenuItem>
                {navigationData.map((item) => (
                  <DropdownMenuItem key={item.title} className="cursor-pointer">
                    <a
                      href={item.href}
                      className="w-full text-sm font-medium"
                      style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
                    >
                      {item.title}
                    </a>
                  </DropdownMenuItem>
                ))}
                <div style={{ padding: '0.375rem 0', margin: '0.25rem 0.5rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                  <p style={{ fontSize: '0.6875rem', fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.375rem 0.5rem' }}>
                    {t.nav.services}
                  </p>
                  {servicesLinks.map((service) => (
                    <DropdownMenuItem key={service.href} className="cursor-pointer">
                      <a
                        href={service.href}
                        className="w-full text-sm font-medium"
                        style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}
                      >
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: service.color, flexShrink: 0 }} />
                        {service.title}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
}
