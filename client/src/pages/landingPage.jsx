import React from 'react';
import { FileText, Eye, Download, ArrowRight, Check } from 'lucide-react';
import NavBar from '../components/landing/NavBar';
import Herosection from '../components/landing/Herosection';
import FeaturesSection from '../components/landing/FeaturesSection';
import Footer from '../components/landing/Footer';
import CTAsection from '../components/landing/CTAsection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
     <Herosection />
      {/* Features Section */}
    <FeaturesSection />
      {/* CTA Section */}
     <CTAsection />

      {/* Footer */}
    <Footer />
    </div>
  );
};

export default LandingPage;