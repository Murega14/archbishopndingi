import React from 'react';
import Navbar from '../Navbar/Navbar';
import Home from '../Home';

export default function Hero() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <section className="container w-full mx-auto py-12">
        <Home />
      </section>
    </div>
  );
}

