import React from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';
import { FaArrowLeft, FaInfoCircle, FaCog, FaWrench, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const StrainerValves = () => {
  const specifications = [
    { name: 'Design Std.', value: 'Manufacturer' },
    { name: 'Testing Std.', value: 'API 598' },
    { name: 'Material', value: 'Cast Steel, Cast Iron, Stainless Steel, Brass, Stainless Steel' },
    { name: 'Size Range', value: '1/2" to 12"' }
  ];

  const endConnections = [
    'Flanged - ASME B 16.5',
    'SW END - ASME B 16.11',
    'BW END - ANSI B 16.25',
    'SCREWED END - ANSI B 1.20.1 / ANSI B 2.1',
    'FACE TO FACE - ANSI B 16.10'
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
              Strainer Valves
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Efficient strainer valves for filtration systems
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <LazyImage
                  src="/sre/valves/strainer.jpg"
                  alt="Strainer Valves"
                  className="w-full lg:h-60 lg:p-5 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="animate-slide-in-right">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Strainer Valve Design</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our strainer valves are designed for efficient filtration in various industrial applications. 
                  They provide reliable protection against contaminants with multiple material and connection options.
                </p>
                <div className="bg-gradient-to-r from-[var(--blue)] to-blue-600 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-2">Key Features</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Multiple material options</li>
                    <li>• Various end connection types</li>
                    <li>• Wide size range (1/2" to 12")</li>
                    <li>• Efficient filtration design</li>
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
                Comprehensive specifications for strainer valve applications
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

            {/* End Connections */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">End Connections</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {endConnections.map((connection, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-[var(--blue)] mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{connection}</span>
                  </div>
                ))}
              </div>
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
                Advanced features for efficient filtration
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Efficient Filtration</h3>
                <p className="text-gray-600">Designed for efficient contaminant removal</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-1">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCog className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Materials</h3>
                <p className="text-gray-600">Cast steel, cast iron, stainless steel, and brass options</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-2">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWrench className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Wide Size Range</h3>
                <p className="text-gray-600">Available from 1/2" to 12" sizes</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[var(--blue)] to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              Need Strainer Valve Specifications?
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

export default StrainerValves;
