import React from 'react';
import { FileText, Eye, Download, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Herosection = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Create professional resumes in minutes
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Build and customize your professional resume with our intuitive builder. 
              Stand out to employers with ATS-friendly templates designed by HR experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="./rb">
                <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
                  text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg">
                  Create Your Resume
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>

              <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 
                text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all transform hover:scale-105 hover:shadow-lg">
                View Templates
              </button>
            </div>
            <div className="mt-8 flex items-center gap-8">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Free templates</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="space-y-6">
                <div className="h-12 bg-gray-100 rounded-md w-3/4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-100 rounded-md w-full"></div>
                  <div className="h-4 bg-gray-100 rounded-md w-5/6"></div>
                  <div className="h-4 bg-gray-100 rounded-md w-4/6"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-28 bg-gray-100 rounded-md"></div>
                  <div className="h-28 bg-gray-100 rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
};

export default Herosection;
