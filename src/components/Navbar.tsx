import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-3xl font-serif text-gray-900">LUXE</Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/fashion" className="text-gray-700 hover:text-gray-900">Fashion</Link>
            <Link to="/travel" className="text-gray-700 hover:text-gray-900">Travel</Link>
            <Link to="/lifestyle" className="text-gray-700 hover:text-gray-900">Lifestyle</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
            <button className="text-gray-700 hover:text-gray-900">
              <Search size={20} />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700">Home</Link>
            <Link to="/fashion" className="block px-3 py-2 text-gray-700">Fashion</Link>
            <Link to="/travel" className="block px-3 py-2 text-gray-700">Travel</Link>
            <Link to="/lifestyle" className="block px-3 py-2 text-gray-700">Lifestyle</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700">About</Link>
          </div>
        </div>
      )}
    </nav>
  );
}