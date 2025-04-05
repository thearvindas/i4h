import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>navigating pelvic pain,<br /><em>together</em></h1>
        </div>
      </section>

      <section className="institutions">
        <div className="container">
          <h2>Curated by researchers & doctors from</h2>
          <div className="logos-grid">
            <img src="/logos/ua_logo_green_rgb.png" alt="UA Logo" />
            <img src="/logos/lhhw_logo_transparent.png" alt="LHHW Logo" />
          </div>
        </div>
      </section>

      <section className="main-content">
        <div className="content-grid">
          <div className="content-flex">
            <div className="content-left">
              <h2>your go-to resource<br />for all things<br />pelvic pain</h2>
              <a href="/resources" className="discover-button">discover resources</a>
            </div>
            <div className="content-right">
              <p className="welcome-text">
                Welcome to a world of limitless possibilities, where the journey is as exhilarating as the destination. As we navigate the intricate tapestry of existence, we are constantly presented with choices, each a potential pathway to something extraordinary. This is a world where creativity knows no bounds, where the curious mind finds solace, and where the fearless heart discovers uncharted territories. Navigating life's intricate fabric, choices unfold paths to the extraordinary, demanding creativity, curiosity, and courage for a truly fulfilling journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-content">
                <h3>Expert Knowledge</h3>
                <p>Access evidence-based information curated by healthcare professionals</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-content">
                <h3>Comprehensive Resources</h3>
                <p>Find everything you need to understand and manage pelvic pain</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-content">
                <h3>Patient-Centered Approach</h3>
                <p>Information tailored to your needs and journey to recovery</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <div className="container">
          <blockquote>
            "Chronic pain is not all about the body, and it's not all about the brain – it's everything. Target everything. Take back your life."
            <cite>
              <span className="author">Sean Mackey</span>
              <span className="title">Professor of Pain Medicine at Stanford</span>
            </cite>
          </blockquote>
        </div>
      </section>
    </div>
  );
};

export default Home; 