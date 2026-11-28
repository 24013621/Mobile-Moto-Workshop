import React, { useState } from 'react';
import { Bars3Icon, WrenchScrewdriverIcon, XMarkIcon } from './icons';

const navLinks = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#services', label: 'Services' },
  { href: '#request-service', label: 'Request help' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand-lockup" href="#top" aria-label="MotoAssist home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">
            <WrenchScrewdriverIcon />
          </span>
          <span className="brand-copy">
            <span className="brand-name">MOTOASSIST</span>
            <span className="brand-subtitle">Road-side workshop</span>
          </span>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a className="nav-link" key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <span className="availability"><span className="availability-dot" /> Dispatch online</span>
          <a className="button button-primary" href="#request-service">Get help</a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
        </button>
      </div>

      <div className={`container mobile-nav${isMenuOpen ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <a className="nav-link" key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a className="button button-primary" href="#request-service" onClick={closeMenu}>Request assistance</a>
      </div>
    </header>
  );
};

export default Header;
