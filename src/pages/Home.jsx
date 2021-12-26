import React from 'react';
import Contact from '../components/Contact';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';

const HomePage = ({ user }) => {
  return (
    <React.Fragment>
      <Header user={user} />
      <ProductListing />
      <CTA />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
