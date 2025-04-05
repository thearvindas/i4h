import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Healing Beyond Pelvic Pain</h3>
          <p>Your trusted resource for comprehensive pelvic health information and support.</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/pelvic-pain-101">Pelvic Pain 101</a></li>
            <li><a href="/overcoming-pain">Overcoming Pain</a></li>
            <li><a href="/patient-recs">Patient Recommendations</a></li>
            <li><a href="/about">About</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li><a href="/treatment">Treatment Options</a></li>
            <li><a href="/research">Latest Research</a></li>
            <li><a href="/support">Support Groups</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Healing Beyond Pelvic Pain. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 