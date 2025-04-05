import React from 'react';

const HamburgerMenu = ({ isOpen, toggleMenu }) => {
  return (
    <button 
      className={`hamburger ${isOpen ? 'open' : ''}`} 
      onClick={toggleMenu}
      aria-label="Menu"
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </button>
  );
};

export default HamburgerMenu; 