import React, { useState } from 'react';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <div className="nav-left">
            <a href="/" className="logo">Healing Beyond Pelvic Pain</a>
          </div>
          
          <div className="nav-center">
            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
              <a href="/pelvic-pain-101">Pelvic Pain 101</a>
              <a href="/overcoming-pain">Overcoming Pain</a>
              <a href="/patient-recs">Patient Recs</a>
              <a href="/about">About</a>
            </div>
          </div>

          <HamburgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
      </div>
    </header>
  );
};

export default Header; 