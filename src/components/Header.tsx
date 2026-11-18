import {useState} from 'react';
import {Menu, X} from 'lucide-react';
import {CONTACT_INFO} from '../data/consultancyData';

interface HeaderProps {
  onBookClick: () => void;
}

const NAV_LINKS = [
  {label: 'Services', href: '#services'},
  {label: 'Accreditations', href: '#accreditations'},
  {label: 'Approach', href: '#approach'},
  {label: 'About', href: '#about'},
  {label: 'FAQ', href: '#faq'},
];

export function Header({onBookClick}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMobileNav = () => {
    setMobileOpen(false);
  };

  const handleMobileCta = () => {
    setMobileOpen(false);
    onBookClick();
  };

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-[#0E3B6E] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0277BD]"
        >
          <img
            src={CONTACT_INFO.logoSrc}
            alt="ISM360 Ltd Plan Do Check Act logo"
            referrerPolicy="no-referrer"
            className="h-9 w-9 object-contain"
          />
          <span className="font-display">ISM360 Ltd</span>
        </a>

        {/* Zone 2: 5 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-1 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-[#0E3B6E] hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0277BD]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onBookClick}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#0E3B6E] px-4 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#0277BD] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0277BD] cursor-pointer"
          >
            Book Discovery Call
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 md:hidden hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0277BD] cursor-pointer"
          >
            {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-navigation" className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleMobileNav}
                className="flex min-h-[44px] items-center rounded-md px-3 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0E3B6E]"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={handleMobileCta}
              className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#0E3B6E] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0277BD] cursor-pointer"
            >
              Book Discovery Call
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
