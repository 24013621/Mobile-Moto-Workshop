import React from 'react';
import { BatteryIcon, CircleStackIcon, CogIcon, FireIcon, LightBulbIcon, WrenchScrewdriverIcon } from './icons';

interface Service {
  icon: React.ReactNode;
  title: string;
  detail: string;
}

const services: Service[] = [
  { icon: <FireIcon className="h-7 w-7" />, title: 'Flat tire repair', detail: 'Punctures, valves, tubes, and safe tire swaps.' },
  { icon: <BatteryIcon className="h-7 w-7" />, title: 'Battery rescue', detail: 'Jumpstarts, testing, and replacement batteries.' },
  { icon: <WrenchScrewdriverIcon className="h-7 w-7" />, title: 'Engine diagnostics', detail: 'Clear the guesswork and find the real fault.' },
  { icon: <CogIcon className="h-7 w-7" />, title: 'Chain & sprockets', detail: 'Adjustments and urgent drivetrain fixes.' },
  { icon: <LightBulbIcon className="h-7 w-7" />, title: 'Electrical faults', detail: 'Lighting, fuses, charging, and loose connections.' },
  { icon: <CircleStackIcon className="h-7 w-7" />, title: 'Fuel delivery', detail: 'A safe top-up to get your route moving again.' },
];

const Services: React.FC = () => (
  <section id="services" className="section services-section">
    <div className="container">
      <div className="services-heading">
        <div className="section-heading">
          <span className="eyebrow">The mobile toolkit</span>
          <h2>Small fixes. Big difference.</h2>
          <p>Our workshop vans carry the practical kit to solve the most common breakdowns where they happen.</p>
        </div>
        <span className="service-count"><strong>06</strong> core services / built for the road</span>
      </div>

      <div className="service-grid">
        {services.map((service, index) => (
          <article className="service-card" key={service.title}>
            <div className="service-card-top">
              <span className="service-icon" aria-hidden="true">{service.icon}</span>
              <span className="service-index">0{index + 1}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.detail}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
