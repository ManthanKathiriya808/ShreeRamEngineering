import React from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';
import { FaIndustry, FaCog, FaTools, FaFlask, FaCheckCircle, FaAward, FaRuler, FaWrench, FaMicroscope } from 'react-icons/fa';

const Facilities = () => {
  const facilities = [
    {
      title: "Main Workshop",
      area: "2000 sq. ft.",
      power: "25 HP",
      description: "Fully equipped workshop with modern machinery and precision tools",
      image: "/sre/general engineering items/01genaral.jpg"
    },
    {
      title: "Testing Facility",
      area: "Multi-stage Testing",
      power: "500 Kg/CM²",
      description: "High-pressure testing benches for hydraulic and pneumatic testing",
      image: "/sre/general engineering items/05instru01.jpg"
    },
    {
      title: "Quality Control Lab",
      area: "Chemical & Physical Testing",
      power: "Spectrometer",
      description: "Advanced testing equipment for material analysis and quality assurance",
      image: "/sre/general engineering items/05instru02.jpg"
    }
  ];

  const machinery = [
    { name: "Lathe Machine", icon: FaCog },
    { name: "Milling Machine", icon: FaTools },
    { name: "Shaping Machine", icon: FaWrench },
    { name: "Air Compressor", icon: FaIndustry },
    { name: "Ball Machining Equipment", icon: FaFlask },
    { name: "Test Benches", icon: FaCheckCircle }
  ];

  const testingCapabilities = [
    {
      title: "Hydraulic Testing",
      pressure: "Up to 500 Kg/CM²",
      description: "Multi-stage high pressure testing for valves",
      icon: FaTools
    },
    {
      title: "Pneumatic Testing",
      pressure: "Multi-stage Facility",
      description: "Six valves at a time for both hydraulic and pneumatic testing",
      icon: FaCog
    },
    {
      title: "Quality Control",
      pressure: "Chemical & Physical Testing",
      description: "Raw material testing and dimensional check-up",
      icon: FaMicroscope
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
              Our Facilities
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              State-of-the-art manufacturing and testing facilities
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Main Workshop */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <LazyImage
                  src="gate.jpeg"
                  alt="Main Workshop"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="animate-slide-in-right">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Main Workshop</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[var(--blue)] rounded-full flex items-center justify-center">
                      <FaRuler className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Area</h4>
                      <p className="text-gray-600">2000 sq. ft. built-in area</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[var(--blue)] rounded-full flex items-center justify-center">
                      <FaCog className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Power</h4>
                      <p className="text-gray-600">25 HP power connection</p>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  Our workshop is equipped with various types of machineries including Lathe machine, 
                  Milling machine, Shaping machine, Air Compressor and specially developed machinery 
                  for Ball machining.
                </p>
                <div className="bg-gradient-to-r from-[var(--blue)] to-blue-600 p-6 rounded-lg text-white">
                  <h4 className="text-xl font-bold mb-2">Workshop Features</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Modernized instruments and machines</li>
                    <li>• Precision quality work</li>
                    <li>• Smooth machining of components</li>
                    <li>• Quality inspection at each stage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Machinery */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Our Machinery
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Advanced equipment for precision manufacturing
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
              {machinery.map((machine, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg  shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4 text-center text-[var(--blue)]">
                    <machine.icon />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center">
                    {machine.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Capabilities */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Testing Capabilities
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Comprehensive testing facilities for quality assurance
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-[var(--blue)] to-blue-600 p-8 rounded-lg text-white animate-slide-in-left">
                <div className="flex items-center mb-4">
                  <FaTools className="text-2xl mr-3" />
                  <h3 className="text-2xl font-bold">Hydraulic Testing</h3>
                </div>
                <ul className="space-y-2">
                  <li>• High pressure up to 500 Kg/CM²</li>
                  <li>• Multi-stage testing facility</li>
                  <li>• Six valves at a time</li>
                  <li>• Fully automatic testing bench</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg animate-fade-in-up">
                <div className="flex items-center mb-4">
                  <FaCog className="text-2xl mr-3 text-[var(--blue)]" />
                  <h3 className="text-2xl font-bold text-gray-900">Pneumatic Testing</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• Multi-stage testing facility</li>
                  <li>• Six valves at a time</li>
                  <li>• Precision pressure control</li>
                  <li>• Automated testing process</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-lg text-white animate-slide-in-right">
                <div className="flex items-center mb-4">
                  <FaCheckCircle className="text-2xl mr-3" />
                  <h3 className="text-2xl font-bold">Quality Control</h3>
                </div>
                <ul className="space-y-2">
                  <li>• Chemical property testing</li>
                  <li>• Physical property testing</li>
                  <li>• Dimensional check-up</li>
                  <li>• Raw material inspection</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sister Concern Foundry */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Sister Concern Foundry</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaFlask className="text-[var(--blue)] text-xl mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Heat Treatment</h4>
                      <p className="text-gray-600">In-house heat treatment facilities</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaMicroscope className="text-[var(--blue)] text-xl mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Testing Lab</h4>
                      <p className="text-gray-600">Chemical and physical testing lab with modern instruments</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaAward className="text-[var(--blue)] text-xl mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Spectrometer</h4>
                      <p className="text-gray-600">Advanced testing instruments for material analysis</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="animate-slide-in-right">
                <LazyImage
                  src="/machine1.jpeg"
                  alt="Foundry Facility"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Ball Machining */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Specialized Ball Machining
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Precision equipment for ball machining with micron-level accuracy
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-[var(--blue)] to-blue-600 p-8 rounded-lg text-white animate-fade-in-up">
                <h3 className="text-2xl font-bold mb-4">Equipment Specifications</h3>
                <ul className="space-y-2">
                  <li>• Size range: 1/4" to 16"</li>
                  <li>• Sphereosity tolerance: Microns</li>
                  <li>• Specially developed equipment</li>
                  <li>• Precision machining capabilities</li>
                </ul>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Standards</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Micron-level precision</li>
                  <li>• Rigorous quality control</li>
                  <li>• Advanced testing methods</li>
                  <li>• Customer satisfaction focus</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Assurance */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Quality Assurance Process
              </h2>
              <p className="text-xl mb-8 animate-slide-up">
                Every component undergoes rigorous testing and inspection
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="animate-fade-in-up">
                <div className="text-4xl mb-4 text-[var(--blue)]">
                  <FaMicroscope />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inspection Standards</h3>
                <p>Each process stage has specific inspection requirements</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="text-4xl mb-4 text-[var(--blue)]">
                  <FaFlask />
                </div>
                <h3 className="text-xl font-semibold mb-2">Material Testing</h3>
                <p>Chemical and physical properties testing of raw materials</p>
              </div>
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="text-4xl mb-4 text-[var(--blue)]">
                  <FaCheckCircle />
                </div>
                <h3 className="text-xl font-semibold mb-2">Final Inspection</h3>
                <p>Comprehensive quality check before product delivery</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Facilities;
