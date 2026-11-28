import React from 'react';

const heroImage = '/manus-storage/async-images/d69Gop2TFdDVLB6vLFxLFv/image-1.webp';

const Hero: React.FC = () => {
  return (
    <section id="top" className="hero">
      <div className="hero-media" style={{ backgroundImage: `url(${heroImage})` }} aria-hidden="true" />
      <div className="hero-shade" aria-hidden="true" />
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">24/7 road-side support</span>
          <h1 className="hero-title">Keep moving.<br /><em>We’ll handle</em><br />the rest.</h1>
          <p className="hero-lede">
            Fast, capable motorcycle help when a small problem threatens a big day. Tell us where you are and our mobile workshop comes to you.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#request-service">Request a mechanic <span aria-hidden="true">↗</span></a>
            <a className="button button-outline" href="tel:+1234567890">Call dispatch <span aria-hidden="true">→</span></a>
          </div>
          <div className="hero-foot">
            <span className="hero-foot-line" aria-hidden="true" />
            <span>Real mechanics. Real tools. No tow-truck runaround.</span>
          </div>
        </div>

        <aside className="hero-side" aria-label="Dispatch status">
          <div className="status-card">
            <div className="status-card-top">
              <div>
                <span className="mono-label">Live dispatch</span>
                <h3>Workshop unit 04</h3>
              </div>
              <span className="status-time">00:24:17</span>
            </div>
            <div className="status-number">30–45 min</div>
            <p className="status-caption">Typical arrival window across our active service area.</p>
            <div className="status-tags">
              <span className="status-tag">Available now</span>
              <span className="status-tag">All makes</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
