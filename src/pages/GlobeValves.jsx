import React from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';
import { FaArrowLeft, FaInfoCircle, FaCog, FaWrench, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const GlobeValves = () => {
  const specifications = [
    { name: 'Design', value: 'BS-1873' },
    { name: 'Specifications', value: 'Outside Screw and Yoke Type, Rising Spindle & Hand Wheel, Bolted Bonnet, Swivel Disc' },
    { name: 'Dimensions', value: 'Face To Face ASME B 16.10/BS-2080/DIN 3300' },
    { name: 'End Connection', value: 'Flange ASME B 16.5 / Screwed End & Butt Weld' },
    { name: 'Testing Standards', value: 'BS-5146/API 598' },
    { name: 'Pressure Rating', value: '150/300/600/900/1500/2500 Class' }
  ];

  const materials = [
    'ASTM A 216 GR. WCB',
    'ASTM A 351 GR. CF 8/CF 8M/CF 8C/CF3/ CF3M / ALLOY - 20 / HASTALLOY B & C.',
    'C.I. TO I.S. 210 G.R. 20.',
    'ALLOY STEEL TO ASTM A 217 C5, WC6, WC9, WC12.'
  ];

  const dimensions150 = [
    { size: '25', l: '127', d: '108', r: '51', t: '11', e: '79', w: '150' },
    { size: '40', l: '165', d: '127', r: '73', t: '14', e: '98.5', w: '210' },
    { size: '50', l: '203', d: '152', r: '92', t: '16', e: '120.5', w: '210' },
    { size: '65', l: '216', d: '178', r: '105', t: '17.5', e: '140', w: '255' },
    { size: '80', l: '241', d: '190.5', r: '127', t: '19', e: '154', w: '255' },
    { size: '100', l: '292', d: '229', r: '157', t: '24', e: '190.5', w: '405' },
    { size: '125', l: '356', d: '254', r: '186', t: '24', e: '216', w: '490' },
    { size: '150', l: '406', d: '279', r: '216', t: '25', e: '241', w: '490' },
    { size: '200', l: '485', d: '343', r: '270', t: '28.5', e: '298', w: '610' },
    { size: '250', l: '622', d: '406', r: '324', t: '30', e: '362', w: '625' },
    { size: '300', l: '698', d: '483', r: '381', t: '32', e: '432', w: '675' }
  ];

  const dimensions300 = [
    { size: '25', l: '203', d: '124', r: '51', t: '17.5', e: '89', w: '210' },
    { size: '40', l: '229', d: '155.5', r: '73', t: '20.5', e: '114', w: '250' },
    { size: '50', l: '267', d: '165', r: '92', t: '22', e: '127', w: '250' },
    { size: '65', l: '292', d: '190.5', r: '105', t: '25', e: '149', w: '405' },
    { size: '80', l: '317.5', d: '209.5', r: '127', t: '28.5', e: '168', w: '405' },
    { size: '100', l: '356', d: '254', r: '157', t: '32', e: '200', w: '490' },
    { size: '125', l: '375', d: '279', r: '186', t: '35', e: '235', w: '490' },
    { size: '150', l: '444.5', d: '317.5', r: '216', t: '36.5', e: '270', w: '490' },
    { size: '200', l: '533', d: '381', r: '270', t: '41', e: '330', w: '610' },
    { size: '250', l: '622', d: '444.5', r: '324', t: '47.5', e: '387', w: '625' },
    { size: '300', l: '711', d: '521', r: '381', t: '51', e: '451', w: '675' }
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
              Globe Valves
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Precision globe valves for flow control applications
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <LazyImage
                  src="/sre/valves/repairing safety valve.jpg"
                  alt="Globe Valves"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="animate-slide-in-right">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Globe Valve Design</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our globe valves feature outside screw and yoke type design with rising spindle and hand wheel operation. 
                  They are designed for precise flow control with renewable seat ring and integral seating arrangements.
                </p>
                <div className="bg-gradient-to-r from-[var(--blue)] to-blue-600 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-2">Key Features</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Bolted bonnet design for easy maintenance</li>
                    <li>• Swivel disc for optimal sealing</li>
                    <li>• Renewable seat ring and integral seating</li>
                    <li>• Renewable/integral back seating arrangement</li>
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
                Comprehensive specifications for all globe valve configurations
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
                  <p className="text-gray-600">{spec.value}</p>
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

            {/* ASA 150 Dimensions */}
            <div className="mb-12 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">ASA 150</h3>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[var(--blue)] text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Size</th>
                        <th className="px-4 py-3 text-left">L</th>
                        <th className="px-4 py-3 text-left">D</th>
                        <th className="px-4 py-3 text-left">R</th>
                        <th className="px-4 py-3 text-left">T</th>
                        <th className="px-4 py-3 text-left">E</th>
                        <th className="px-4 py-3 text-left">W</th>
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
                          <td className="px-4 py-3">{dim.t}</td>
                          <td className="px-4 py-3">{dim.e}</td>
                          <td className="px-4 py-3">{dim.w}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ASA 300 Dimensions */}
            <div className="animate-fade-in-up">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">ASA 300</h3>
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[var(--blue)] text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Size</th>
                        <th className="px-4 py-3 text-left">L</th>
                        <th className="px-4 py-3 text-left">D</th>
                        <th className="px-4 py-3 text-left">R</th>
                        <th className="px-4 py-3 text-left">T</th>
                        <th className="px-4 py-3 text-left">E</th>
                        <th className="px-4 py-3 text-left">W</th>
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
                          <td className="px-4 py-3">{dim.t}</td>
                          <td className="px-4 py-3">{dim.e}</td>
                          <td className="px-4 py-3">{dim.w}</td>
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
                Advanced features for superior flow control
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Precise Flow Control</h3>
                <p className="text-gray-600">Excellent throttling characteristics for precise flow regulation</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-1">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCog className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Maintenance</h3>
                <p className="text-gray-600">Bolted bonnet design allows easy access for maintenance</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-2">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWrench className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Renewable Seats</h3>
                <p className="text-gray-600">Renewable seat ring and integral seating arrangements</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[var(--blue)] to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              Need Globe Valve Specifications?
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

export default GlobeValves;
