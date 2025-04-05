import React from 'react';

const About = () => {
  return (
    <div className="about">
      <section className="mission">
        <h1>About Us</h1>
        <p className="mission-statement">
          Healing Beyond is dedicated to providing accessible, evidence-based information and resources 
          for individuals experiencing chronic pelvic pain. Our mission is to empower patients with 
          knowledge and support throughout their healing journey.
        </p>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <h3>Dr. Sarah Johnson</h3>
            <p className="role">Medical Director</p>
            <p>Board-certified specialist in pelvic pain with over 15 years of experience.</p>
          </div>

          <div className="team-member">
            <h3>Dr. Michael Chen</h3>
            <p className="role">Research Lead</p>
            <p>PhD in pain management research, focusing on chronic pelvic pain.</p>
          </div>

          <div className="team-member">
            <h3>Lisa Martinez</h3>
            <p className="role">Patient Advocate</p>
            <p>Experienced physical therapist specializing in pelvic floor rehabilitation.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 