import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';
import { FaArrowLeft, FaDownload, FaInfoCircle, FaCog, FaWrench, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router';

const BallValves = () => {
  const [activeTab, setActiveTab] = useState('single-piece-screwed');

  const valveTypes = [
    {
      id: 'single-piece-screwed',
      name: 'Single Piece Screwed Reduce & Full Bore',
      image: '/sre/valves/actuator ball valve.jpg',
      description: 'High-quality single piece ball valves with screwed ends, available in both reduce and full bore configurations.'
    },
    {
      id: 'single-piece-flanged',
      name: 'Single Piece Flanged End Valves',
      image: '/sre/valves/actuator offcentric butterfly valve.jpg',
      description: 'Robust single piece flanged end ball valves designed for high-pressure applications.'
    },
    {
      id: 'three-piece-flanged',
      name: 'Three Piece Flanged End',
      image: '/sre/valves/repairing safety valve.jpg',
      description: 'Three-piece design flanged end ball valves offering easy maintenance and repair capabilities.'
    },
    {
      id: 'three-piece-screwed',
      name: 'Three Piece Screwed Valves',
      image: '/sre/valves/actuator ball valve.jpg',
      description: 'Three-piece screwed end ball valves with excellent sealing performance and durability.'
    }
  ];

  const specifications = {
    'single-piece-screwed': {
      features: [
        'Female Screwed BSP, NPT And Socket Weld',
        'Pressure Rating ASME 150/300/800 Class & BS Equ.',
        'Screwed End As Per ASME B2.1',
        'Socket Weld Ends ASME B16.11',
        'Buttweld ASME B16.26',
        'Testing Std. BS 5146 / API 598',
        'P.T.F.E Seats And Seals',
        'Special Filled P.T.F.E Seats Are Available',
        'For Test Pressure Upto 204 Kg. / Cm2',
        'Design Std : BS 5351',
        'Fire Safe / Non Fire Safe',
        'Blow Out Proof Stem & Floating Ball'
      ],
      dimensions: [
        { size: '1/4"', d: '6.00mm', l: '61', h: '62', hl: '120' },
        { size: '3/8"', d: '9.00mm', l: '61', h: '62', hl: '120' },
        { size: '1/2"', d: '12.00mm', l: '64', h: '62', hl: '120' },
        { size: '3/4"', d: '14.30mm\n19.05mm', l: '80', h: '66', hl: '142' },
        { size: '1"', d: '20.65mm\n25.40mm', l: '88', h: '68', hl: '142' },
        { size: '1" 1/2"', d: '31.50mm\n38.10mm', l: '110', h: '91', hl: '230' },
        { size: '2"', d: '38.10mm\n50.80mm', l: '128', h: '101', hl: '230' }
      ]
    },
    'single-piece-flanged': {
      features: [
        'Available Upto 16" Size',
        'Available In Singe Piece Design Upto 4"',
        'Pressure Rating ASME 150/300 Class & Bs Equ.',
        'Face To Face As Per ASME B 16.10',
        'Flanged As Per ASME B 16.5 Rf Or Bs 10 Table "D", "E" & "F"',
        'Testing Std. API 598 / Bs 5146 Part-1',
        'P.T.F.E Seats And Seals',
        'Special Filled P.T.E.F Seats Are Available',
        'Design Std : BS 5351',
        'Fire Safe / Non Fire Safe',
        'Also Available In 2 Piece Design',
        'Floating Ball & Blow Out Proof Stem'
      ],
      materials: [
        'ASTM A 216 GR. WCB',
        'ASTM A 351 GR. CF8/CF8M/CF8C/CF3/ CF3M / ALLOY - 20 / HASTALLOY B & C.',
        'CAST IRON'
      ],
      dimensions: [
        { size: '1/2"', d: '12.00', hl: '120', r: '35', l: '108', f: '89', e: '60', t: '11' },
        { size: '3/4"', d: '14.30\n19.05', hl: '142', r: '43', l: '118', f: '99', e: '70', t: '13' },
        { size: '1"', d: '20.65\n25.40', hl: '142', r: '51', l: '127', f: '106', e: '79', t: '14' },
        { size: '1 1/2"', d: '31.50\n38.10', hl: '230', r: '73', l: '165', f: '127', e: '96', t: '14' },
        { size: '2"', d: '38.10\n50.80', hl: '230', r: '92', l: '178', f: '152', e: '121', t: '16' }
      ]
    },
    'three-piece-flanged': {
      features: [
        'Available Upto 16" Size',
        'Available In Singe Piece Design Upto 4"',
        'Pressure Rating ASME 150/300 Class & Bs Equ.',
        'Face To Face As Per ASME B 16.10',
        'Flanged As Per ASME B 16.5 Rf Or Bs 10 Table "D", "E" & "F"',
        'Testing Std. API 598 / Bs 5146 Part-1',
        'P.T.F.E Seats And Seals',
        'Special Filled P.T.E.F Seats Are Available',
        'Design Std : BS 5351',
        'Fire Safe / Non Fire Safe',
        'Also Available In 2 Piece Design',
        'Floating Ball & Blow Out Proof Stem'
      ],
      materials: [
        'ASTM A 216 GR. WCB',
        'ASTM A 351 GR. CF8/CF8M/CF8C/CF3/ CF3M / ALLOY - 20 / HASTALLOY B & C.',
        'CAST IRON'
      ],
      dimensions: [
        { size: '1/2"', d: '12.00', hl: '120', r: '35', l: '108', f: '89', e: '60', t: '11' },
        { size: '3/4"', d: '14.30\n19.05', hl: '142', r: '43', l: '118', f: '99', e: '70', t: '13' },
        { size: '1"', d: '20.65\n25.40', hl: '142', r: '51', l: '127', f: '106', e: '79', t: '14' },
        { size: '1 1/2"', d: '31.50\n38.10', hl: '230', r: '73', l: '165', f: '127', e: '96', t: '14' },
        { size: '2"', d: '38.10\n50.80', hl: '230', r: '92', l: '178', f: '152', e: '121', t: '16' }
      ]
    },
    'three-piece-screwed': {
      features: [
        'Female Screwed BSP, Npt And Socket Weld',
        'Pressure Rating ASME 150/300/800 Class & Bs Equ.',
        'Screwed End As Per ASME B2.1',
        'Socket Weld Ends ASME B16.11',
        'Buttweld ASME B16.26',
        'Testing Std. Bs 5146 / API 598',
        'P.T.F.E Seats And Seals',
        'Special Filled P.T.F.E Seats Are Available',
        'For Test Pressure Upto 204 Kg. / Cm2',
        'Design Std : Bs 5351',
        'Fire Safe / Non Fire Safe',
        'Blow Out Proof Stem & Floating Ball'
      ],
      materials: [
        'ASTM A 216 GR. WCB',
        'ASTM A 351 GR. CF8 / CF8M / CF8C / CF3/ CF3M / ALLOY - 20 / HASTALLOY B & C.',
        'CAST IRON'
      ],
      dimensions: [
        { size: '1/2"', d: '12.00mm', l: '80', h: '52', hl: '120' },
        { size: '3/4"', d: '14.30mm\n19.05mm', l: '93', h: '61', hl: '142' },
        { size: '1"', d: '20.65mm\n25.40mm', l: '95', h: '65', hl: '142' },
        { size: '1" 1/2"', d: '31.50mm\n38.40mm', l: '110', h: '90', hl: '230' },
        { size: '2"', d: '38.10mm\n50.80mm', l: '127', h: '95', hl: '230' },
        { size: '3"', d: '58.00mm\n76.10mm', l: '160', h: '174', hl: '380' },
        { size: '4"', d: '76.20mm\n101.00mm', l: '185', h: '200', hl: '495' }
      ]
    }
  };

  const currentSpec = specifications[activeTab];
  const currentValve = valveTypes.find(v => v.id === activeTab);

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
              Ball Valves
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              High-quality ball valves for industrial applications with comprehensive specifications
            </p>
          </div>
        </section>

        {/* Valve Types Tabs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Ball Valve Types
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Choose from our comprehensive range of ball valve configurations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {valveTypes.map((valve, index) => (
                <div 
                  key={valve.id}
                  className={`cursor-pointer p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg animate-fade-in-up ${
                    activeTab === valve.id 
                      ? 'border-[var(--blue)] bg-blue-50' 
                      : 'border-gray-200 bg-white hover:border-blue-300'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setActiveTab(valve.id)}
                >
                  <LazyImage
                    src={valve.image}
                    alt={valve.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {valve.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {valve.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Valve Details */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Image and Description */}
              <div className="animate-slide-in-left">
                <LazyImage
                  src={currentValve.image}
                  alt={currentValve.name}
                  className="w-full h-96 object-cover rounded-lg shadow-xl mb-6"
                />
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  {currentValve.name}
                </h3>
                <p className="text-lg text-gray-600 mb-6">
                  {currentValve.description}
                </p>
                
                {/* Features */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <FaInfoCircle className="text-[var(--blue)] mr-2" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {currentSpec.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Specifications and Tables */}
              <div className="animate-slide-in-right">
                {/* Materials */}
                {currentSpec.materials && (
                  <div className="bg-white p-6 rounded-lg shadow-md mb-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <FaCog className="text-[var(--blue)] mr-2" />
                      Material Options
                    </h4>
                    <ul className="space-y-2">
                      {currentSpec.materials.map((material, index) => (
                        <li key={index} className="flex items-start">
                          <FaWrench className="text-[var(--blue)] mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{material}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Dimensions Table */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <FaWrench className="text-[var(--blue)] mr-2" />
                    Dimensions
                  </h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-[var(--blue)] text-white">
                        <tr>
                          <th className="px-4 py-2 text-left">Size</th>
                          <th className="px-4 py-2 text-left">D</th>
                          <th className="px-4 py-2 text-left">L</th>
                          <th className="px-4 py-2 text-left">H</th>
                          <th className="px-4 py-2 text-left">HL</th>
                        </tr>
                      </thead>
                      <tbody>
                        {currentSpec.dimensions.map((dim, index) => (
                          <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                            <td className="px-4 py-2 font-medium">{dim.size}</td>
                            <td className="px-4 py-2">{dim.d}</td>
                            <td className="px-4 py-2">{dim.l}</td>
                            <td className="px-4 py-2">{dim.h}</td>
                            <td className="px-4 py-2">{dim.hl}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">All valves are tested to international standards</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-1">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCog className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Tailored solutions for specific requirements</p>
              </div>
              <div className="text-center animate-fade-in-up stagger-2">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWrench className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Technical Support</h3>
                <p className="text-gray-600">Expert technical assistance and guidance</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-[var(--blue)] to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              Need More Information?
            </h2>
            <p className="text-xl mb-8 animate-slide-up">
              Contact us for detailed specifications and pricing
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

export default BallValves;
