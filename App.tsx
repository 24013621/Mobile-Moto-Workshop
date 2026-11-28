import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import RequestForm from './components/RequestForm';
import Services from './components/Services';

const App: React.FC = () => (
  <div className="site-shell">
    <Header />
    <main>
      <Hero />
      <HowItWorks />
      <Services />
      <RequestForm />
    </main>
    <Footer />
  </div>
);

export default App;
