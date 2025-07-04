import React, { useEffect, useRef, useState } from 'react';
import '../styles/AboutSection.css';

const AboutSection = () => {
  const titleRef = useRef(null);
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    const currentTitle = titleRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTitleVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (currentTitle) {
      observer.observe(currentTitle);
    }

    return () => {
      if (currentTitle) {
        observer.unobserve(currentTitle);
      }
    };
  }, []);

  return (
    <section className="about-section">
      <div className="about-header">
        <span className="section-number">01</span>
        <span className="section-title">//APPROACH</span>
        <span className="section-subtitle">THREE PHASES</span>
      </div>

      <div className="about-content">
        <h2 ref={titleRef} className={`about-title ${titleVisible ? 'animate' : ''}`}>
          <div className="title-line">
            <span className="word">I'M</span>
            <span className="word">KELVIANOV</span>
            <span className="word">BASED</span>
            <span className="word">IN</span>
          </div>
          <div className="title-line">
            <span className="word">BANDUNG,</span>
            <span className="word">INDONESIA.</span>
          </div>
        </h2>

        <p className="about-description">
          I employed responsive design skills to maintain<br />
          consistency across all devices.
        </p>

        <div className="process-indicators">
          <div className="indicator active">01</div>
          <div className="indicator">02</div>
          <div className="indicator">03</div>
        </div>
        
        <div className="process-phases">
          <div className="phase">
            <div className="phase-dots">
              <div className="dot-indicator">
                <div className="dot active"></div>
                <div className="dot"></div>
                <div className="dot"></div>
              </div>
            </div>
            <div className="phase-images">
              <div className="image-thumb">
                <img src="https://skillicons.dev/icons?i=figma&theme=light" alt="Figma" />
              </div>
              <div className="image-thumb">
                <img src="https://skillicons.dev/icons?i=photoshop&theme=light" alt="Photoshop" />
              </div>
              <div className="image-thumb">
                <img src="https://skillicons.dev/icons?i=git&theme=light" alt="Git" />
              </div>
              <div className="image-thumb">
                <img src="https://skillicons.dev/icons?i=vscode&theme=light" alt="VS Code" />
              </div>
            </div>
            <h3 className="phase-title">DISCOVER AND ANALYSIS</h3>
            <p className="phase-description">
              Research, planning, and wireframing<br />
              with design and development tools.
            </p>
          </div>
          
          <div className="phase">
            <div className="phase-dots">
              <div className="dot-indicator">
                <div className="dot active"></div>
                <div className="dot active"></div>
                <div className="dot"></div>
              </div>
            </div>
            <div className="phase-images">
              <div className="image-thumb">
                <img src="https://skillicons.dev/icons?i=html&theme=light" alt="HTML5" />
              </div>
              <div className="image-thumb">
                <img src="https://skillicons.dev/icons?i=css&theme=light" alt="CSS3" />
              </div>
              <div className="image-thumb">
                <img src="https://skillicons.dev/icons?i=vite&theme=light" alt="Vite" />
              </div>
              <div className="image-thumb">
                <img src="https://skillicons.dev/icons?i=react&theme=light" alt="React" />
              </div>
              
            </div>
            <h3 className="phase-title">DESIGN AND IMPLEMENT</h3>
            <p className="phase-description">
              Frontend development with modern<br />
              web technologies and frameworks.
            </p>
          </div>
          
          <div className="phase">
            <div className="phase-dots">
              <div className="dot-indicator">
                <div className="dot active"></div>
                <div className="dot active"></div>
                <div className="dot active"></div>
              </div>
            </div>
            <div className="phase-images">
              <div className="image-thumb">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" />
              </div>
              <div className="image-thumb">
                <img src="https://skillicons.dev/icons?i=laravel&theme=light" alt="Laravel" />
              </div>
              <div className="image-thumb">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" />
              </div>
              <div className="image-thumb">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
              </div>
            </div>
            <h3 className="phase-title">DELIVER AND MONITOR</h3>
            <p className="phase-description">
              Backend development and server-side<br />
              implementation with deployment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;