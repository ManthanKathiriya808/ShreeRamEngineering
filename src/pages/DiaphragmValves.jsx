import React from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';
import { FaArrowLeft, FaInfoCircle, FaCog, FaWrench, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const DiaphragmValves = () => {
  const specifications = [
    { name: 'Design Std.', value: 'BS 5156' },
    { name: 'Testing Std.', value: 'BS 6755-1' },
    { name: 'Face To Face', value: 'BS 5156' },
    { name: 'Body Material', value: 'CI / DI / WCB / CF8 / CF8M / CN7M etc.' },
    { name: 'Body Lining', value: 'Ebonite, Natural, Butyl, Neoprene, EPDM, Nilrile and Other Elastomers & even PFA etc.' },
    { name: 'Diaphragm', value: 'Natural, Butyl, Neoprene, EPDM, Nilrile and Other Elastomers & even PTFE etc.' },
    { name: 'End Connection', value: 'Flanged End' }
  ];

  const dimensions = [
    { size: '15', a: '114', b: '15', c: '95', d: '85', e: '64' },
    { size: '20', a: '123', b: '20', c: '102', d: '92', e: '64' },
    { size: '25', a: '133', b: '25', c: '114', d: '106', e: '100' },
    { size: '32', a: '152', b: '32', c: '121', d: '128.5', e: '100' },
    { size: '40', a: '165', b: '40', c: '140', d: '146', e: '150' },
    { size: '50', a: '196', b: '50', c: '152', d: '169.5', e: '150' },
    { size: '65', a: '222', b: '65', c: '178', d: '193.5', e: '175' },
    { size: '80', a: '261', b: '76', c: '191', d: '234.5', e: '250' },
    { size: '100', a: '312', b: '100', c: '229', d: '269', e: '250' },
    { size: '125', a: '364', b: '127', c: '254', d: '286.5', e: '280' },
    { size: '150', a: '414', b: '150', c: '279', d: '344', e: '368' },
    { size: '200', a: '531', b: '200', c: '343', d: '471.5', e: '483' },
    { size: '250', a: '645', b: '250', c: '406', d: '548.5', e: '584' },
    { size: '300', a: '759', b: '300', c: '483', d: '627', e: '698' }
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
              Diaphragm Valves
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Diaphragm valves for precise flow control
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <LazyImage
                  src="/sre/valves/actuator offcentric butterfly valve.jpg"
                  alt="Diaphragm Valves"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="animate-slide-in-right">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Diaphragm Valve Design</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our diaphragm valves feature diaphragms available in both close and open type configurations. 
                  PTFE diaphragms are available in both screwed and bayonet connections for versatile applications.
                </p>
                <div className="bg-gradient-to-r from-[var(--blue)] to-blue-600 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-2">Key Features</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Close and open type diaphragms</li>
                    <li>• PTFE diaphragms available</li>
                    <li>• Screwed and bayonet connections</li>
                    <li>• Multiple material options</li>
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
                Comprehensive specifications for diaphragm valve applications
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
          </div>
        </section>

        {/* Dimensions Table */}
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

            <div className="bg-white rounded-lg shadow-xl overflow-hidden animate-fade-in-up">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[var(--blue)] text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Size</th>
                      <th className="px-4 py-3 text-left">A</th>
                      <th className="px-4 py-3 text-left">B</th>
                      <th className="px-4 py-3 text-left">C</th>
                      <th className="px-4 py-3 text-left">D</th>
                      <th className="px-4 py-3 text-left">E</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dimensions.map((dim, index) => (
                      <tr 
                        key={index} 
                        className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-4 py-3 font-medium">{dim.size}</td>
                        <td className="px-4 py-3">{dim.a}</td>
                        <td className="px-4 py-3">{dim.b}</td>
                        <td className="px-4 py-3">{dim.c}</td>
                        <td className="px-4 py-3">{dim.d}</td>
                        <td className="px-4 py-3">{dim.e}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
                Advanced features for precise flow control
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Precise Control</h3>
                <p className="text-gray-600">Excellent throttling characteristics for precise flow control</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-1">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCog className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Multiple Materials</h3>
                <p className="text-gray-600">Various diaphragm materials for different applications</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-2">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWrench className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Maintenance</h3>
                <p className="text-gray-600">Simple design allows easy maintenance and repair</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[var(--blue)] to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              Need Diaphragm Valve Specifications?
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

export default DiaphragmValves;
