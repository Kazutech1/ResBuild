import React from 'react'
import { FileText, Eye, Download, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';


const CTAsection = () => {
  return (
    <div className="bg-gray-50 py-20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to build your professional resume?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of professionals who have already created impressive resumes using our platform.
        </p>
        <Link to="./"rb>
         <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent 
          text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 hover:bg-blue-700 transition-all transform hover:scale-105 hover:shadow-lg">
          Get Started For Free
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>
        </Link>
       
      </div>
    </div>
  </div>

  )
}

export default CTAsection