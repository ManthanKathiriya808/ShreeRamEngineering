import React from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';
import { FaArrowLeft, FaInfoCircle, FaCog, FaWrench, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const PPValves = () => {
  const valveTypes = [
    {
      name: 'Ball Valve Flanged End',
      features: ['Three Piece Design', 'Size: 15 mm to 150 mm', 'End Connection: Flanged to ASA 150, BS Table D, Din', 'MOC: Polypropylene', 'Full Bore Allows 100% Flow', 'Hydro Tested @ 10 kg/cm²']
    },
    {
      name: 'Diaphragm Valve',
      features: ['One Piece Rugged Body with Cross Ribs', 'Available with Neoprene, EPDM, Hyplon, Butyl, Teflon Coated and Pure Teflon Diaphragms', 'Size: 15 mm to 100 mm', 'End Connection: Flanged to ASA 150, BS Table D, Din', 'MOC: Polypropylene', 'Hydro Tested @ 10 kg/cm²']
    },
    {
      name: 'Sight Glass',
      features: ['Three Piece Rigid Design', 'Size: 25 mm to 150 mm', 'End Connection: Flanged to ASA 150, BS Table D, Din', 'MOC: Polypropylene', 'Available with Plain Borosil Tube Section Glass', 'Coloured Glass for High Pressure Application']
    },
    {
      name: 'Ball Valve Screwed End',
      features: ['Three Piece Design', 'Size: 15 mm to 150 mm', 'End Connection: Screwed to BSPT / PVC Socket Weld', 'MOC: Polypropylene', 'Full Bore Allows 100% Flow', 'Hydro Tested @ 10 kg/cm²']
    }
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
              P.P. Valves & Fittings
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Polypropylene valves and fittings for chemical applications
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <LazyImage
                  src="/sre/valves/actuator ball valve.jpg"
                  alt="PP Valves & Fittings"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="animate-slide-in-right">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">PP Valves & Fittings</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our polypropylene valves and fittings are designed for chemical applications with excellent corrosion resistance. 
                  They provide reliable performance in demanding chemical environments.
                </p>
                <div className="bg-gradient-to-r from-[var(--blue)] to-blue-600 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-2">Key Features</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Chemical resistant polypropylene material</li>
                    <li>• Full bore design for 100% flow</li>
                    <li>• Hydro tested for reliability</li>
                    <li>• Multiple valve types available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Valve Types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Valve Types
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Comprehensive range of PP valves and fittings
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {valveTypes.map((valve, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{valve.name}</h3>
                  <ul className="space-y-2">
                    {valve.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <FaCheckCircle className="text-[var(--blue)] mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                Advanced features for chemical applications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Chemical Resistance</h3>
                <p className="text-gray-600">Excellent resistance to chemical corrosion</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-1">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCog className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Bore Design</h3>
                <p className="text-gray-600">Allows 100% flow for maximum efficiency</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-2">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWrench className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hydro Tested</h3>
                <p className="text-gray-600">Every valve is hydro tested for reliability</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[var(--blue)] to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              Need PP Valve Specifications?
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

export default PPValves;
