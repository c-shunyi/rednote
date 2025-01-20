// pages/index.js
import React from 'react';
import Introduce from '../components/introduce';
import Home from '../components/home';
import Case from '../components/case';
import FAQ from '../components/faq';
import Footer from '../components/footer';

export default function page() {
  return (
    <div className="bg-white">
      <div className="bg-white max-w-[1200px] mx-auto">
        <div className="min-h-screen">
          <Home />
        </div>
        <Introduce />
        <Case />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}
