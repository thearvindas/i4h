import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>navigating<br />pelvic pain,<br />together.</h1>
        </div>
        <div className="search-container">
          <input 
            type="text" 
            placeholder="Search for resources..." 
            className="search-input"
          />
          <button className="search-button">
            <span>🔍</span>
          </button>
        </div>
      </section>

      <section className="institutions">
        <h2>Curated by researchers & doctors from</h2>
        <div className="logo-grid">
          <img src="/logos/lhhw_logo_transparent.png" alt="Lois Hole Hospital for Women" />
          <img src="/logos/ua_logo_green_rgb.png" alt="University of Alberta" />
        </div>
      </section>

      <section className="quote-card">
        <p className="quote-text">"Chronic pain is not all about the body, and it's not all about the brain – it's everything. Target everything. Take back your life."</p>
        <p className="quote-author">Sean Mackey</p>
        <p>Professor of Pain Medicine at Stanford</p>
      </section>

      <section className="content-section">
        <h2>Why Choose Us</h2>
        <div className="value-props">
          <div className="value-prop">
            <h3>Research-Based</h3>
            <p>Evidence-based information and latest findings from trusted medical professionals.</p>
          </div>
          <div className="value-prop">
            <h3>Patient Stories</h3>
            <p>Real experiences and insights from people who understand your journey.</p>
          </div>
          <div className="value-prop">
            <h3>Community Support</h3>
            <p>Connect with others and find support in your healing journey.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 