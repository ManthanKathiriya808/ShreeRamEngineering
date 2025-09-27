import React from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';
import { FaCheckCircle, FaMicroscope, FaCog, FaShieldAlt, FaCertificate, FaAward } from 'react-icons/fa';

const Quality = () => {
  const qualityParameters = [
    {
      test: "Visual Inspection",
      method: "",
      criteria: ""
    },
    {
      test: "Chemical Analysis",
      method: "ASTM E350",
      criteria: "Relevant ASTM"
    },
    {
      test: "Mechanical Properties",
      method: "ASTM A370",
      criteria: "Relevant ASTM"
    },
    {
      test: "Radiographic Inspection",
      method: "ASTE B16.34",
      criteria: "ASME/ANSI B16.34"
    },
    {
      test: "Magnetic Particle Inspection",
      method: "ASTM E709",
      criteria: ""
    },
    {
      test: "Liquid Penetrate Inspection",
      method: "ASTM E165",
      criteria: ""
    },
    {
      test: "Ultrasonic Inspection",
      method: "ASTM A388",
      criteria: ""
    },
    {
      test: "Pressure Testing",
      method: "API 598/BS 6755 Part 1",
      criteria: "API 598/BS 6755 Part 1"
    },
    {
      test: "Dimensional Inspection",
      method: "",
      criteria: "Valve Standard"
    }
  ];

  const testPressures = [
    { class: "150", shell: "450 psig (32 Kg/cm²)", backSeat: "315 psig (22 Kg/cm²)", closure: "100 psig (7 Kg/cm²)" },
    { class: "300", shell: "1125 psig (79 Kg/cm²)", backSeat: "815 psig (57 Kg/cm²)", closure: "100 psig (7 Kg/cm²)" },
    { class: "600", shell: "2225 psig (156 Kg/cm²)", backSeat: "1630 psig (115 Kg/cm²)", closure: "100 psig (7 Kg/cm²)" }
  ];

  const qualityFeatures = [
    {
      icon: FaCheckCircle,
      title: "Comprehensive Quality Assurance",
      description: "Adopted comprehensive quality assurance system in design, manufacturing, assembling, testing, examination, and packing"
    },
    {
      icon: FaMicroscope,
      title: "Advanced Testing Methods",
      description: "Chemical analysis, mechanical testing, radiography, crack detection, dye penetrate and ultrasonic testing"
    },
    {
      icon: FaCog,
      title: "Department Responsibility",
      description: "Each department is responsible for implementing and maintaining quality assurance system"
    },
    {
      icon: FaShieldAlt,
      title: "Third Party Inspection",
      description: "Third party inspection of reputed consultants available if customers require the same"
    },
    {
      icon: FaCertificate,
      title: "Test Certificates",
      description: "Each Dhoriya brand valve is inspected and pressure tested with test certificates provided"
    },
    {
      icon: FaAward,
      title: "Customer Satisfaction",
      description: "Maintain high standard of quality to customer's satisfaction and full conformity with specifications"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-[var(--blue)] to-blue-600 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Quality Control
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Committed to maintaining the highest standards of quality and excellence
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Quality Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Our Quality Commitment
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Shree Ram Engineering complies with all codes and standards applicable to products manufactured by the company
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <LazyImage
                  src="/machine1.jpeg"
                  alt="Quality Control Process"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="animate-slide-in-right">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Quality Assurance System</h3>
                <p className="text-lg text-gray-600 mb-6">
                  We are committed to maintain high standard of quality in compliance with customer specification. 
                  To achieve and maintain this, company has adopted a comprehensive quality assurance system in 
                  design, manufacturing, assembling, testing, examination, and packing in accordance with standard 
                  and specification.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Each department is responsible for implementing and maintaining quality assurance system. 
                  The effectiveness of the entire system is assured by participation of all employees who 
                  contribute to high quality of every product of company.
                </p>
                <div className="bg-gradient-to-r from-[var(--blue)] to-blue-600 p-6 rounded-lg text-white">
                  <h4 className="text-xl font-bold mb-2">Our Assurance</h4>
                  <p className="text-sm">
                    We undertake and assure quality by carrying chemical analysis and mechanical testing 
                    radiography, crack detection, dye penetrate and ultrasonic testing and IGC test practice 
                    through our reliable and reputed labs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Quality Features
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Comprehensive quality control measures ensuring excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {qualityFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4 text-[var(--blue)]">
                    <feature.icon />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Motto */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Our Motto
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaCheckCircle className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Adopt Recognized Standards</h3>
                <p className="text-gray-600">Adopt recognized standard of quality system</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaAward className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maintain High Standards</h3>
                <p className="text-gray-600">Maintain high standard of quality to customer's satisfaction</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaShieldAlt className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Conformity</h3>
                <p className="text-gray-600">Products should be fully in conformity with customer's specification and design</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Parameters Table */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Quality Parameters
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Comprehensive testing and inspection methods
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden animate-fade-in-up">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[var(--blue)] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Test/Inspection</th>
                      <th className="px-6 py-4 text-left font-semibold">Method</th>
                      <th className="px-6 py-4 text-left font-semibold">Acceptance Criteria</th>
                    </tr>
                  </thead>
                  <tbody>
                    {qualityParameters.map((param, index) => (
                      <tr 
                        key={index} 
                        className={`border-b border-gray-200 hover:bg-gray-50 transition-colors animate-fade-in-up`}
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <td className="px-6 py-4 font-medium text-gray-900">{param.test}</td>
                        <td className="px-6 py-4 text-gray-600">{param.method}</td>
                        <td className="px-6 py-4 text-gray-600">{param.criteria}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Test Pressures */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Test Pressures
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                ASME Class pressure testing specifications
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testPressures.map((test, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-[var(--blue)] to-blue-600 p-8 rounded-lg text-white animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-center">ASME Class {test.class}</h3>
                  <div className="space-y-4">
                    <div className="border-b border-white/30 pb-2">
                      <h4 className="font-semibold">Shell</h4>
                      <p className="text-sm opacity-90">{test.shell}</p>
                    </div>
                    <div className="border-b border-white/30 pb-2">
                      <h4 className="font-semibold">Back Seat</h4>
                      <p className="text-sm opacity-90">{test.backSeat}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Closure Test</h4>
                      <p className="text-sm opacity-90">{test.closure}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8 animate-fade-in">
              Quality Certification
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-xl animate-fade-in-up">
              <LazyImage
                src="/certificate.jpg"
                alt="ISO 9001:2008 Certificate"
                className="w-64 h-auto mx-auto mb-6"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">ISO 9001:2008 Certified</h3>
              <p className="text-lg text-gray-600 mb-6">
                Each Dhoriya brand valves manufacturing at Shree Ram Engineering is inspected and pressure tested 
                to API 598/BS 6755 Part 1 and test certificate are provided along with supply.
              </p>
              <div className="flex justify-center space-x-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--blue)]">API 598</div>
                  <div className="text-gray-600">Standard</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--blue)]">BS 6755</div>
                  <div className="text-gray-600">Part 1</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[var(--blue)]">ASME</div>
                  <div className="text-gray-600">Compliant</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Quality;
