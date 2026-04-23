'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home' },
  { href: '/trips', label: 'Trips' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#faf6ef]/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-4">
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image
              src="/logo/triks-logo.svg"
              alt="Trinity River International Kayak School"
              width={160}
              height={160}
              priority
              className="h-20 w-20 md:h-32 md:w-32 lg:h-40 lg:w-40 object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg md:text-xl text-stone-900 hover:text-emerald-700 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/trips"
              className="bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-emerald-800 transition-colors"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-stone-900 hover:bg-stone-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300 bg-[#faf6ef] border-t border-stone-200',
          mobileOpen ? 'max-h-80' : 'max-h-0'
        )}
      >
        <div className="px-4 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-stone-900 hover:text-emerald-700 font-medium py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/trips"
            className="block text-center bg-emerald-700 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-emerald-800 transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
