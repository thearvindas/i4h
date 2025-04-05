import React, { useState, useEffect } from 'react';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="nav">
        <div className="nav-left">
          <a href="/" className="logo">
            <span className="logo-icon">🦋</span>
            Healing Beyond
          </a>
        </div>
        
        <HamburgerMenu 
          isOpen={isMenuOpen} 
          toggleMenu={() => setIsMenuOpen(!isMenuOpen)} 
        />

        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <div className="nav-center">
            <a href="/pelvic-pain-101" onClick={() => setIsMenuOpen(false)}>Pelvic Pain 101</a>
            <a href="/overcoming-pain" onClick={() => setIsMenuOpen(false)}>Overcoming Pain</a>
            <a href="/treatment" onClick={() => setIsMenuOpen(false)}>Treatment</a>
            <a href="/patient-recommendations" onClick={() => setIsMenuOpen(false)}>Resources</a>
            <a href="/about" onClick={() => setIsMenuOpen(false)}>About Us</a>
          </div>
          
          <div className="nav-right">
            <a href="https://instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">📸</span>
            </a>
            <a href="https://facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">👥</span>
            </a>
            <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">
              <span className="social-icon">🐦</span>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 