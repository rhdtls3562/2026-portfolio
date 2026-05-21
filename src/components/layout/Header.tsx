'use client';

import { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';

type NavItem = {
  label: string;
  href: string;
};

const NAV_ITEMS: NavItem[] = [
  { label: 'ABOUT', href: '#about' },
  { label: 'RECORD', href: '#record' },
  { label: 'SOCIAL', href: '#social' },
  { label: 'MAIL', href: '#mail' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-[var(--color-bg)]/95 backdrop-blur-sm border-b border-[var(--color-border)]'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 md:h-20 flex items-center justify-between">
        {/* 로고 */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-[var(--color-gold)] tracking-[0.3em] text-sm font-semibold uppercase hover:opacity-70 transition-opacity"
          aria-label="맨 위로 이동"
        >
          KSR
        </button>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] tracking-[0.2em] text-xs font-medium uppercase transition-colors duration-300"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* 모바일 햄버거 */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
        >
          <span
            className={cn(
              'block w-6 h-px bg-[var(--color-text-primary)] transition-all duration-300',
              isMenuOpen && 'rotate-45 translate-y-2'
            )}
          />
          <span
            className={cn(
              'block w-6 h-px bg-[var(--color-text-primary)] transition-all duration-300',
              isMenuOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block w-6 h-px bg-[var(--color-text-primary)] transition-all duration-300',
              isMenuOpen && '-rotate-45 -translate-y-2'
            )}
          />
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          isMenuOpen ? 'max-h-64' : 'max-h-0'
        )}
      >
        <nav className="flex flex-col px-6 pb-6 border-t border-[var(--color-border)] bg-[var(--color-bg)]/95 backdrop-blur-sm">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] tracking-[0.2em] text-xs font-medium uppercase transition-colors duration-300 py-4 text-left border-b border-[var(--color-border)] last:border-0"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
