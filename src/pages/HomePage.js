import React from 'react';
import Home from '../homePage/Home';
import HowItWorks from '../homePage/HowItWorks';
import About from '../homePage/About';
import Testimonials from '../homePage/Testimonials';
import Contact from '../homePage/Contact';

const HomePage = () => {
  return (
    <div>
      <Home />
      <HowItWorks />
      <About />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default HomePage;