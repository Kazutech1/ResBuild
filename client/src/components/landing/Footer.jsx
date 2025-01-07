import React from 'react'


const Footer = () => {
  return (
    <footer className="bg-white border-t">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-500 text-sm">
          © 2025 ResumeBuilder. All rights reserved.
        </div>
        <div className="flex gap-8">
          <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Privacy Policy</a>
          <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Terms of Service</a>
          <a href="#" className="text-gray-500 hover:text-gray-700 text-sm">Contact</a>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer