
import React from 'react';
import '../styles/HeroSection.css';
import LanyardPortal from './LanyardPortal';


const HeroSection = () => {
  return (
    <section className="hero-section" style={{ minHeight: 500 }}>
      <div className="hero-content hero-content-left">
        <div className="hero-subtitle">
          I’m Specialized in<br />
          Creating Website Design.
        </div>
        <h1 className="hero-title">MPIW</h1>
      </div>
      <LanyardPortal />
    </section>
  );
};

export default HeroSection;
