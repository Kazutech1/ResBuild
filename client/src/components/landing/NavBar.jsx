import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-semibold text-gray-900">ResumeBuilder</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="./rb">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-transform transform hover:scale-105 hover:shadow-lg">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
