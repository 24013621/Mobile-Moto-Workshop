import React, { useState } from 'react';
import { CheckCircleIcon, ExclamationCircleIcon } from './icons';

interface FormData {
  name: string;
  phone: string;
  location: string;
  bikeModel: string;
  problem: string;
}

const initialForm: FormData = { name: '', phone: '', location: '', bikeModel: '', problem: '' };

const RequestForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const missingFields = [
      ['name', 'your name'],
      ['phone', 'a phone number'],
      ['location', 'your current location'],
      ['problem', 'a quick description of the problem'],
    ].filter(([field]) => !formData[field as keyof FormData].trim());

    if (missingFields.length > 0) {
      setError(`Please add ${missingFields[0][1]}.`);
      return;
    }

    setError('');
    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="request-service" className="section request-section">
      <div className="container request-layout">
        <div className="request-aside">
          <span className="eyebrow">Send a dispatch request</span>
          <h2>Don’t wait it out on the shoulder.</h2>
          <p>Give us the essentials and we’ll call to confirm the details, your location, and the next available mechanic.</p>
          <ul className="assurance-list">
            <li>Available for urgent roadside faults, 24 hours a day.</li>
            <li>We’ll always confirm before any work begins.</li>
            <li>Your phone number is only used for this request.</li>
          </ul>
        </div>

        <div className="dispatch-card">
          {isSubmitted ? (
            <div className="success-state" role="status" aria-live="polite">
              <div>
                <div className="success-mark"><CheckCircleIcon /></div>
                <h3>Request received.</h3>
                <p>Thanks for reaching out. Our dispatcher will call <strong>{formData.phone}</strong> shortly to confirm the location and send help your way.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="dispatch-card-head">
                <div>
                  <span className="mono-label">Step 01 / 01</span>
                  <h3>Where should we send the workshop?</h3>
                </div>
                <span className="dispatch-badge"><span className="availability-dot" /> Usually replies in minutes</span>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-grid">
                  <div className="form-field">
                    <label htmlFor="name">Your name *</label>
                    <input id="name" name="name" type="text" placeholder="Rider name" value={formData.name} onChange={handleChange} autoComplete="name" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone number *</label>
                    <input id="phone" name="phone" type="tel" placeholder="Best number to reach you" value={formData.phone} onChange={handleChange} autoComplete="tel" required />
                  </div>
                  <div className="form-field full">
                    <label htmlFor="location">Current location *</label>
                    <input id="location" name="location" type="text" placeholder="Road, landmark, or map pin" value={formData.location} onChange={handleChange} autoComplete="street-address" required />
                  </div>
                  <div className="form-field full">
                    <label htmlFor="bikeModel">Bike make & model</label>
                    <input id="bikeModel" name="bikeModel" type="text" placeholder="e.g. Royal Enfield Himalayan" value={formData.bikeModel} onChange={handleChange} />
                  </div>
                  <div className="form-field full">
                    <label htmlFor="problem">What’s going on? *</label>
                    <textarea id="problem" name="problem" placeholder="Flat tire, won’t start, strange noise..." rows={4} value={formData.problem} onChange={handleChange} required />
                  </div>
                </div>

                {error && (
                  <div className="form-error" role="alert">
                    <ExclamationCircleIcon />
                    <span>{error}</span>
                  </div>
                )}

                <div className="form-actions">
                  <span className="form-hint">By sending this request, you’re asking our dispatch team to call you back.</span>
                  <button className="button button-primary" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending request…' : <>Send request <span aria-hidden="true">↗</span></>}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default RequestForm;
