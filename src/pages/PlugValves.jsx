import React from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';
import { FaArrowLeft, FaInfoCircle, FaCog, FaWrench, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const PlugValves = () => {
  const features = [
    'Bi-directional inline bubble tight seal independent of line pressure',
    'Full lip at port openings protects PTFE sleeve',
    'Drilled and tapped flange mounting pads independent of cover and top seal assembly',
    'Other drilling option available'
  ];

  const specifications = [
    { name: 'Design', value: 'API 599' },
    { name: 'End Connection', value: 'FLANGED END ASME B 16.5' },
    { name: 'Face To Face', value: 'ASME 16.10' },
    { name: 'Testing Standards', value: 'API 598' },
    { name: 'Material Options', value: 'CI / WCB / CF 8 / CF 8M / CF3 / CF 3M / CN 7M' },
    { name: 'Operation', value: 'LEVER/GEAR OPERATED' }
  ];

  const dimensions150 = [
    { size: '15', l: '108.0', d: '88.9', r: '35.0', e: '60.5', t: '9.5', h: '86' },
    { size: '20', l: '117.5', d: '98.5', r: '42.9', e: '69.9', t: '9.5', h: '86' },
    { size: '25', l: '127', d: '108.0', r: '50.8', e: '79.5', t: '11.2', h: '114' },
    { size: '40', l: '165.1', d: '127.0', r: '73.2', e: '98.6', t: '14.2', h: '135' },
    { size: '50', l: '177.8', d: '152.4', r: '92.0', e: '120.7', t: '16.0', h: '159' },
    { size: '65', l: '203.2', d: '190.5', r: '104.6', e: '139.7', t: '19.0', h: '167' },
    { size: '80', l: '203.2', d: '190.5', r: '127.0', e: '152.4', t: '19.0', h: '167' },
    { size: '100', l: '228.6', d: '228.6', r: '157.2', e: '190.5', t: '23.9', h: '194' },
    { size: '150', l: '266.7', d: '279.4', r: '215.9', e: '241.3', t: '25.4', h: '274' },
    { size: '200', l: '292.1', d: '342.9', r: '269.8', e: '298.5', t: '28.7', h: '324' },
    { size: '250', l: '330.2', d: '406.4', r: '323.9', e: '362.0', t: '30.2', h: '373' },
    { size: '300', l: '355.6', d: '482.6', r: '381.0', e: '431.8', t: '31.8', h: '417' }
  ];

  const dimensions300 = [
    { size: '15', l: '139.7', d: '95.30', r: '35', e: '66.8', t: '14', h: '86' },
    { size: '20', l: '152.4', d: '117.6', r: '42.7', e: '82.6', t: '16', h: '86' },
    { size: '25', l: '165.1', d: '124', r: '50.8', e: '88.9', t: '17.5', h: '124' },
    { size: '40', l: '190.5', d: '195.7', r: '73.2', e: '114.3', t: '20.6', h: '135' },
    { size: '50', l: '215.9', d: '165.1', r: '92', e: '127', t: '22.4', h: '169' },
    { size: '65', l: '282.7', d: '209.6', r: '104.6', e: '149.4', t: '28.7', h: '167' },
    { size: '80', l: '282.7', d: '209.6', r: '127', e: '168.4', t: '28.7', h: '167' },
    { size: '100', l: '304.8', d: '254', r: '157.2', e: '200.2', t: '31.8', h: '191' },
    { size: '150', l: '403.4', d: '317.5', r: '215.9', e: '270', t: '36.6', h: '274' },
    { size: '200', l: '419.1', d: '381', r: '269.8', e: '330.2', t: '41.4', h: '324' },
    { size: '250', l: '457.2', d: '444.5', r: '323.9', e: '387.4', t: '47.8', h: '373' },
    { size: '300', l: '501.7', d: '520.7', r: '381', e: '450.9', t: '50.85', h: '417' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[var(--blue)] to-blue-600 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center mb-6 animate-fade-in">
              <Link to="/products/industrial-valves" className="flex items-center text-white hover:text-blue-200 transition-colors">
                <FaArrowLeft className="mr-2" />
                Back to Industrial Valves
              </Link>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Plug Valves
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              High-performance plug valves with excellent sealing capabilities
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
                  alt="Plug Valves"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="animate-slide-in-right">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Plug Valve Design</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our plug valves feature bi-directional inline bubble tight seal independent of line pressure, 
                  with full lip at port openings that protects PTFE sleeve for enhanced durability and performance.
                </p>
                <div className="bg-gradient-to-r from-[var(--blue)] to-blue-600 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-2">Design Features</h3>
                  <ul className="space-y-1 text-sm">
                    {features.map((feature, index) => (
                      <li key={index}>• {feature}</li>
                    ))}
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
                Comprehensive specifications for all plug valve configurations
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
                        <th className="px-4 py-3 text-left">T</th>
                        <th className="px-4 py-3 text-left">H</th>
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
                          <td className="px-4 py-3">{dim.t}</td>
                          <td className="px-4 py-3">{dim.h}</td>
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
                        <th className="px-4 py-3 text-left">T</th>
                        <th className="px-4 py-3 text-left">H</th>
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
                          <td className="px-4 py-3">{dim.t}</td>
                          <td className="px-4 py-3">{dim.h}</td>
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
                Advanced features for superior performance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Bubble Tight Seal</h3>
                <p className="text-gray-600">Bi-directional inline bubble tight seal independent of line pressure</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-1">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCog className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">PTFE Protection</h3>
                <p className="text-gray-600">Full lip at port openings protects PTFE sleeve for enhanced durability</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-2">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWrench className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Mounting</h3>
                <p className="text-gray-600">Drilled and tapped flange mounting pads with other drilling options</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[var(--blue)] to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              Need Technical Specifications?
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

export default PlugValves;
