import React from 'react';
import { WrenchScrewdriverIcon } from './icons';

const Footer: React.FC = () => (
  <footer className="site-footer">
    <div className="container">
      <div className="footer-grid">
        <div className="footer-intro">
          <a className="brand-lockup" href="#top" aria-label="MotoAssist home">
            <span className="brand-mark" aria-hidden="true"><WrenchScrewdriverIcon /></span>
            <span className="brand-copy">
              <span className="brand-name">MOTOASSIST</span>
              <span className="brand-subtitle">Road-side workshop</span>
            </span>
          </a>
          <p>Practical roadside motorcycle help for the moment your ride decides to be difficult.</p>
        </div>
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="#how-it-works">How it works</a>
          <a href="#services">Services</a>
          <a href="#request-service">Request assistance</a>
        </div>
        <div className="footer-column">
          <h3>Dispatch</h3>
          <a href="tel:+1234567890">1-234-567-890</a>
          <a href="mailto:dispatch@motoassist.example">dispatch@motoassist.example</a>
          <p>Available 24/7 for urgent roadside help.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} MotoAssist Workshop</span>
        <span>Built for the road ahead</span>
      </div>
    </div>
  </footer>
);

export default Footer;
