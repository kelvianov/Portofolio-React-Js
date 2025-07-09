import React from "react";
import "../styles/Project1.css";

import Header from "../components/Header";
import InfiniteMarquee from "../components/InfiniteMarquee";

const Project = () => {
  return (
    <div className="project-page">
      <Header />
      <div className="project-content">
        <div className="project-meta">
          <span className="project-date">FEBRUARY 12, 2022</span>
        </div>
        <h1 className="project-title">COMPANY PROFILE</h1>
        <p className="project-desc">
          Seventy Seven is a bold, minimal garage portfolio showcasing projects with striking visuals. Ideal for designers and creators seeking a sleek, impactful presence.
        </p>
        <button className="project-live-btn">LIVE PREVIEW</button>
      </div>

      {/* Gambar project1.0.png di bawah project-content */}
      <div className="project-image-block">
        <img
          src="/images/project1.0.png"
          alt="Company Profile Project"
          className="project-main-image"
        />
      </div>

      {/* Info Grid Section */}
      <div className="project-info-grid">
        <div className="project-info-item">
          <span className="project-info-label">YEAR</span>
          <span className="project-info-value">2025</span>
        </div>
        <div className="project-info-item">
          <span className="project-info-label">CLIENT</span>
          <span className="project-info-value">MONYENYO</span>
        </div>
        <div className="project-info-item">
          <span className="project-info-label">CATEGORY</span>
          <span className="project-info-value">COMPANY PROFILE</span>
        </div>
        <div className="project-info-item">
          <span className="project-info-label">PRODUCT DURATION</span>
          <span className="project-info-value">3-4 WEEKS</span>
        </div>
      </div>
        {/* Research Section */}
      <div className="project-section research-section">
        <div className="research-title">RESEARCH</div>
        <div className="research-desc">
          Research is the cornerstone of innovation and progress, involving the systematic investigation of questions, problems, or phenomena to uncover new knowledge or insights. It enables us to validate theories, develop solutions, and deepen our understanding of the world.
        </div>
      </div>

      {/* Design Section */}
      <div className="project-section design-section">
        <div className="design-title">DESIGN</div>
        <div className="design-desc">
          Design plays a crucial role in shaping perceptions and creating memorable experiences. A well-crafted design not only communicates ideas effectively but also evokes emotions, captures attention, and builds trust. From striking visuals to thoughtful layouts, every element of design contributes to telling a unique story.
        </div>
      </div>

      {/* Gambar project1.1.png di bawah Design Section */}
      <div className="project-image-block" style={{ marginTop: '170px' }}>
        <img
          src="/images/project1.1.png"
          alt="Design Section Project"
          className="project-main-image"
        />
      </div>

      {/* Development Section */}
      <div className="project-section development-section">
        <div className="development-title">DEVELOPMENT</div>
        <div className="development-desc">
          Seventy Seven is meticulously crafted with cutting-edge web technologies to ensure a seamless user experience. The portfolio is built for speed, responsiveness, and adaptability across devices, making it accessible to all audiences. Every detail, from interactive elements to smooth animations, has been carefully optimized to create an engaging and modern digital showcase.
        </div>
      </div>

      {/* Gambar project1.2.png di bawah Development Section */}
      <div className="project-image-block" style={{ marginTop: '120px' }}>
        <img
          src="/images/project1.2.png"
          alt="Development Section Project"
          className="project-main-image"
        />
      </div>

      {/* Infinite Marquee Section */}
      <InfiniteMarquee />
    </div>
  );
};

export default Project;
