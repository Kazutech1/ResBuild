import React from 'react';
import { FileText, Eye, Download } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Everything you need to create a standout resume
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform combines professional templates with an intuitive interface to help you
            create the perfect resume for your career goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* ATS-Optimized Templates */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-50">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              ATS-Optimized Templates
            </h3>
            <p className="text-gray-600">
              Our templates are designed to pass Applicant Tracking Systems while maintaining
              a professional and modern appearance.
            </p>
          </div>

          {/* Real-Time Preview */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-50">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Real-Time Preview
            </h3>
            <p className="text-gray-600">
              See your changes instantly as you type, ensuring your resume looks perfect
              before you download or share it.
            </p>
          </div>

          {/* Export Options */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-lg hover:bg-blue-50">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <Download className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Export Options
            </h3>
            <p className="text-gray-600">
              Download your resume in multiple formats including PDF, Word, and plain text
              for maximum compatibility.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
