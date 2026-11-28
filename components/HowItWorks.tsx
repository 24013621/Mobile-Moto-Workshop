import React from 'react';
import { MapPinIcon, PhoneIcon, WrenchIcon } from './icons';

const steps = [
  {
    number: '01',
    icon: <PhoneIcon className="h-6 w-6" />,
    title: 'Tell us what happened',
    description: 'Call dispatch or use the form below. Share your location, bike, and the symptoms you’re seeing.',
  },
  {
    number: '02',
    icon: <MapPinIcon className="h-6 w-6" />,
    title: 'We find your bike',
    description: 'A dispatcher confirms your pin and sends the nearest equipped workshop unit your way.',
  },
  {
    number: '03',
    icon: <WrenchIcon className="h-6 w-6" />,
    title: 'We get you rolling',
    description: 'Your mechanic diagnoses the issue, makes a safe on-the-spot repair, and talks you through next steps.',
  },
];

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="section process-section">
    <div className="container">
      <div className="process-heading">
        <div className="section-heading">
          <span className="eyebrow">Simple by design</span>
          <h2>From stuck to sorted in three moves.</h2>
          <p>When you’re on the shoulder, clarity matters. Here’s exactly what happens after you reach out.</p>
        </div>
        <p className="process-note">No membership. No mystery pricing. Just practical help from a real mechanic.</p>
      </div>

      <div className="steps">
        {steps.map((step) => (
          <article className="step" key={step.number}>
            <span className="step-number">{step.number}</span>
            <span className="step-icon" aria-hidden="true">{step.icon}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
