import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;