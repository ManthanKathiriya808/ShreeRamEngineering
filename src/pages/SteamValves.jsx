import React from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';
import { FaArrowLeft, FaInfoCircle, FaCog, FaWrench, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const SteamValves = () => {
  const specifications = [
    { name: 'Type', value: 'Horizontal Bucket / Vertical Bucket' },
    { name: 'Material', value: 'Cast Iron, Stainless Steel, Steel' },
    { name: 'Size Range', value: '1/2" to 2"' },
    { name: 'Ends', value: 'Screwed / Flanged' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[var(--blue)] to-blue-600 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6 animate-fade-in">
              <Link to="/products/valve-types" className="flex items-center text-white hover:text-blue-200 transition-colors">
                <FaArrowLeft className="mr-2" />
                Back to Valve Types
              </Link>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Steam Valves
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Specialized steam valves for high-temperature applications
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <LazyImage
                  src="/sre/valves/stream.jpg"
                  alt="Steam Valves"
                  className="w-full lg:h-60 lg:p-5 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="animate-slide-in-right">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Steam Valve Design</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our steam valves are designed for high-temperature steam applications with horizontal and vertical bucket configurations. 
                  They provide reliable steam control in demanding industrial environments.
                </p>
                <div className="bg-gradient-to-r from-[var(--blue)] to-blue-600 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-2">Key Features</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Horizontal and vertical bucket designs</li>
                    <li>• High-temperature resistant materials</li>
                    <li>• Screwed and flanged end connections</li>
                    <li>• Reliable steam control</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Technical Specifications
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Comprehensive specifications for steam valve applications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {specifications.map((spec, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{spec.name}</h3>
                  <p className="text-gray-600">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Key Features
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Advanced features for steam applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">High Temperature</h3>
                <p className="text-gray-600">Designed for high-temperature steam applications</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-1">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCog className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Configurations</h3>
                <p className="text-gray-600">Horizontal and vertical bucket designs available</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-2">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWrench className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Durable Materials</h3>
                <p className="text-gray-600">Cast iron, stainless steel, and steel options</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[var(--blue)] to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              Need Steam Valve Specifications?
            </h2>
            <p className="text-xl mb-8 animate-slide-up">
              Contact us for detailed information and pricing
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link
                to="/contact"
                className="bg-white text-[var(--blue)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Get Quote
              </Link>
              <a
                href="tel:+919428009512"
                className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--blue)] transition-colors duration-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default SteamValves;
