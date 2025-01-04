'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Icon } from './Icon';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`}>
      <Link href="/">
        <h1 className="logo-text">
          ISHA<span className="GP"> Home Stay</span>
        </h1>
      </Link>

      <nav className="main-nav">
        <ul className="main-nav-list">
          <li><Link href="/" className="main-nav-link">Home</Link></li>
          <li><Link href="#Rooms" className="main-nav-link">Rooms</Link></li>
          <li><Link href="#meals" className="main-nav-link">Facilities</Link></li>
          <li><Link href="#testimonials" className="main-nav-link">Tenants</Link></li>
          <li><Link href="#location" className="main-nav-link">Location</Link></li>
          <li><Link href="#pricing" className="main-nav-link">Pricing</Link></li>
          <li><Link href="#cta" className="main-nav-link nav-cta">Register!</Link></li>
        </ul>
      </nav>

      <button 
        className="btn-mobile-nav"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Icon 
          name={isMobileMenuOpen ? "close-outline" : "menu-outline"}
          className="icon-mobile-nav"
        />
      </button>
    </header>
  );
}