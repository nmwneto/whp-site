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
import { ArrowUpRight, Menu } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

const navigationData = [
  { title: 'Home', href: '#' },
  { title: 'Serviços', href: '#servicos' },
  { title: 'Projetos', href: '#projetos' },
  { title: 'Sobre', href: '#sobre' },
  { title: 'Contato', href: '#contato' },
];

export default function NavbarWHP() {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
          {/* Logo */}
          <a
            href="#"
            style={{
              fontSize: '1.125rem',
              fontWeight: 800,
              color: '#fff',
              letterSpacing: '-0.04em',
              textDecoration: 'none',
            }}
          >
            WHP
          </a>

          {/* Desktop nav */}
          <NavigationMenu className="max-lg:hidden">
            <NavigationMenuList
              className="flex gap-0 rounded-full p-0.5"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              {navigationData.map((item) => (
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
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA */}
          <a
            href="#contato"
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
            Iniciar projeto
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
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
}
