import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Offers from '../components/Offers';

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Offers />
      <Testimonials />
    </div>
  );
};

export default Home;