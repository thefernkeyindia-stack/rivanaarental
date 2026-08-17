'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-luxe',
          solid ? 'bg-ivory-100/95 shadow-sm backdrop-blur-md' : 'bg-transparent',
        )}
      >
        <nav className="container-luxe flex h-20 items-center justify-between">
          <a href="#home" className="shrink-0">
            <Logo light={!solid} />
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    'text-sm font-medium tracking-wide transition-colors duration-300 hover:text-gold-600',
                    solid ? 'text-charcoal-800' : 'text-ivory-100/90',
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a href="#booking" className="btn-primary">
              Check Availability
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className={cn(
              'flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden',
              solid ? 'border-charcoal-900/20 text-charcoal-900' : 'border-ivory-100/40 text-ivory-100',
            )}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      {/*
        Rendered as a sibling of <header>, not nested inside it: the header
        uses `backdrop-blur` (a backdrop-filter) when solid, which creates a
        new containing block for `position: fixed` descendants. Nesting this
        fixed overlay inside header would make its `inset-0` resolve against
        the 80px-tall header box instead of the viewport.
      */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex bg-charcoal-950/60 lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="ml-auto flex h-full w-[82%] max-w-sm flex-col bg-ivory-100 px-8 py-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-charcoal-900/20 text-charcoal-900"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="mt-12 flex flex-col gap-1">
                {siteConfig.nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * i, duration: 0.4 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-charcoal-900/10 py-4 font-serif text-2xl text-charcoal-950"
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <a href="#booking" onClick={() => setMobileOpen(false)} className="btn-primary mt-8 w-full">
                Check Availability
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
