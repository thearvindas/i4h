import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Healing Beyond</h3>
          <p>Navigating Pelvic Pain Together</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="/pelvic-pain-101">Pelvic Pain 101</a>
          <a href="/treatment">Treatment Options</a>
          <a href="/patient-recommendations">Resources</a>
        </div>
        <div className="footer-section">
          <p>&copy; {new Date().getFullYear()} Healing Beyond. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 