import React from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';
import { FaArrowLeft, FaInfoCircle, FaCog, FaWrench, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const SwingCheckValves = () => {
  const specifications = [
    { name: 'Design', value: 'BS 1868 / API 6D / API 594 / DIN EN 558-2' },
    { name: 'Specifications', value: 'Swing Type Disk, Bolted Cover, Renewable Integral Seating Arrangement' },
    { name: 'Dimensions', value: 'Face - Face ANSI B 16.10' },
    { name: 'End Connection', value: 'Flanged End: ASME B 16.5, SW End: ASME B 16.11, BW End: ASME B 16.25, Screwed End: ASME B 1.20.1 / ASME B 2.1' },
    { name: 'Testing Standards', value: 'API 598 / BS 6755 Part 1 / BS 5146' }
  ];

  const materials = [
    'ASTM A 216 GR. WCB',
    'ASTM A 351 GR. CF8/CF8M/CF8C/CF3/ CF3M / ALLOY - 20 / HASTALLOY B & C.',
    'C.I. TO I.S. 210 G.R. 20.',
    'ALLOY STEEL TO ASTM A 217 C5, WC6, WC9, WC12'
  ];

  const dimensions150 = [
    { size: '1 1/2"', l: '165', d: '127', r: '112', e: '14' },
    { size: '2"', l: '203', d: '152', r: '138', e: '16' },
    { size: '2 1/2"', l: '216', d: '178', r: '160', e: '18' },
    { size: '3"', l: '241', d: '191', r: '170', e: '19' },
    { size: '4"', l: '292', d: '229', r: '185', e: '24' },
    { size: '5"', l: '330', d: '254', r: '215', e: '24' },
    { size: '6"', l: '356', d: '280', r: '245', e: '25.4' },
    { size: '8"', l: '495', d: '343', r: '305', e: '28.6' },
    { size: '10"', l: '622', d: '407', r: '340', e: '30.5' },
    { size: '12"', l: '698', d: '483', r: '400', e: '32' }
  ];

  const dimensions300 = [
    { size: '1 1/2"', l: '241', d: '156', r: '140', e: '21' },
    { size: '2"', l: '267', d: '165', r: '160', e: '23' },
    { size: '2 1/2"', l: '292', d: '191', r: '180', e: '26' },
    { size: '3"', l: '318', d: '210', r: '200', e: '29' },
    { size: '4"', l: '356', d: '254', r: '225', e: '32' },
    { size: '5"', l: '400', d: '280', r: '250', e: '35' },
    { size: '6"', l: '445', d: '318', r: '265', e: '37' },
    { size: '8"', l: '534', d: '381', r: '325', e: '42' },
    { size: '10"', l: '623', d: '445', r: '390', e: '48' },
    { size: '12"', l: '712', d: '521', r: '465', e: '51' }
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
              Swing Check Valves
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Reliable swing check valves for backflow prevention
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
                  alt="Swing Check Valves"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="animate-slide-in-right">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Swing Check Valve Design</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our swing check valves feature swing type disk design with bolted cover and renewable integral seating arrangement. 
                  They provide reliable backflow prevention with minimal pressure drop.
                </p>
                <div className="bg-gradient-to-r from-[var(--blue)] to-blue-600 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-2">Key Features</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Swing type disk for efficient flow</li>
                    <li>• Bolted cover for easy maintenance</li>
                    <li>• Renewable integral seating arrangement</li>
                    <li>• Multiple end connection options</li>
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
                Comprehensive specifications for all swing check valve configurations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {specifications.map((spec, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{spec.name}</h3>
                  <p className="text-gray-600 text-sm">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Materials */}
            <div className="bg-white p-6 rounded-lg shadow-md animate-fade-in-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Material Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {materials.map((material, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-[var(--blue)] mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{material}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dimensions Tables */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Dimensions
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Detailed dimensional specifications for all sizes
              </p>
            </div>

            {/* Class 150 Dimensions */}
            <div className="mb-12 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Class 150</h3>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[var(--blue)] text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Size</th>
                        <th className="px-4 py-3 text-left">L</th>
                        <th className="px-4 py-3 text-left">D</th>
                        <th className="px-4 py-3 text-left">R</th>
                        <th className="px-4 py-3 text-left">E</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dimensions150.map((dim, index) => (
                        <tr 
                          key={index} 
                          className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-4 py-3 font-medium">{dim.size}</td>
                          <td className="px-4 py-3">{dim.l}</td>
                          <td className="px-4 py-3">{dim.d}</td>
                          <td className="px-4 py-3">{dim.r}</td>
                          <td className="px-4 py-3">{dim.e}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Class 300 Dimensions */}
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Class 300</h3>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[var(--blue)] text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Size</th>
                        <th className="px-4 py-3 text-left">L</th>
                        <th className="px-4 py-3 text-left">D</th>
                        <th className="px-4 py-3 text-left">R</th>
                        <th className="px-4 py-3 text-left">E</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dimensions300.map((dim, index) => (
                        <tr 
                          key={index} 
                          className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          <td className="px-4 py-3 font-medium">{dim.size}</td>
                          <td className="px-4 py-3">{dim.l}</td>
                          <td className="px-4 py-3">{dim.d}</td>
                          <td className="px-4 py-3">{dim.r}</td>
                          <td className="px-4 py-3">{dim.e}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Key Features
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Advanced features for reliable backflow prevention
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Backflow Prevention</h3>
                <p className="text-gray-600">Reliable swing disk design prevents backflow effectively</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-1">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCog className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Low Pressure Drop</h3>
                <p className="text-gray-600">Minimal pressure drop for efficient flow</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-2">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWrench className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Maintenance</h3>
                <p className="text-gray-600">Bolted cover design allows easy access for maintenance</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[var(--blue)] to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              Need Swing Check Valve Specifications?
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

export default SwingCheckValves;
