import React from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';
import { FaIndustry, FaCog, FaCheckCircle, FaGlobe, FaAward, FaUsers, FaTools, FaMicroscope } from 'react-icons/fa';

const AboutUs = () => {
  const features = [
    {
      icon: FaIndustry,
      title: "Established Excellence",
      description: "Years of experience in industrial valve manufacturing and engineering solutions"
    },
    {
      icon: FaCog,
      title: "Precision Engineering",
      description: "State-of-the-art machinery and precision tools for high-quality manufacturing"
    },
    {
      icon: FaCheckCircle,
      title: "Quality Assurance",
      description: "ISO 9001:2008 certified with rigorous quality control processes"
    },
    {
      icon: FaGlobe,
      title: "Global Reach",
      description: "Serving clients worldwide with reliable industrial solutions"
    }
  ];

  const stats = [
    { number: "2000+", label: "Sq. Ft. Workshop" },
    { number: "25", label: "HP Power Connection" },
    { number: "500", label: "Kg/CM² Testing Pressure" },
    { number: "100+", label: "Happy Clients" }
  ];

  const team = [
    {
      name: "Engineering Team",
      role: "Technical Excellence",
      description: "Our skilled engineers ensure precision in every product"
    },
    {
      name: "Quality Control",
      role: "Quality Assurance",
      description: "Dedicated team maintaining highest quality standards"
    },
    {
      name: "Production Team",
      role: "Manufacturing",
      description: "Expert craftsmen delivering superior products"
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
              About ShreeRam Engineering
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Leading manufacturer of industrial valves and engineering solutions
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in-left">
                <LazyImage
                  src="/office.jpeg"
                  alt="ShreeRam Engineering Workshop"
                  className="w-full h-96 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="animate-slide-in-right">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
                <p className="text-lg text-gray-600 mb-6">
                  ShreeRam Engineering has been at the forefront of industrial valve manufacturing 
                  and engineering solutions for years. We have built our reputation on quality, 
                  reliability, and innovation.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our commitment to excellence has made us a trusted partner for industries 
                  worldwide, providing high-quality products that meet the most demanding 
                  specifications and standards.
                </p>
                <div className="bg-gradient-to-r from-[var(--blue)] to-blue-600 p-6 rounded-lg text-white">
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-sm">
                    To deliver superior industrial valves and engineering solutions that exceed 
                    customer expectations while maintaining the highest standards of quality and reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-[var(--blue)] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 animate-fade-in">Our Achievements</h2>
              <p className="text-xl animate-slide-up">Numbers that reflect our commitment to excellence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-4xl font-bold mb-2 animate-count-up">
                    {stat.number}
                  </div>
                  <div className="text-lg font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                We combine traditional craftsmanship with modern technology
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-4xl mb-4 text-center text-[var(--blue)]">
                    <feature.icon />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Our Expertise
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Comprehensive engineering solutions for diverse industries
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="animate-slide-in-left">
                <LazyImage
                  src="/gate.jpeg"
                  alt="Engineering Excellence"
                  className="w-full h-80 object-cover rounded-lg shadow-xl"
                />
              </div>
              <div className="animate-slide-in-right">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing Excellence</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <FaTools className="text-[var(--blue)] text-xl mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Precision Manufacturing</h4>
                      <p className="text-gray-600">State-of-the-art machinery for precision engineering</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaMicroscope className="text-[var(--blue)] text-xl mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Quality Testing</h4>
                      <p className="text-gray-600">Comprehensive testing and inspection processes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <FaAward className="text-[var(--blue)] text-xl mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Certified Quality</h4>
                      <p className="text-gray-600">ISO 9001:2008 certified quality management system</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Our Team
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Dedicated professionals committed to excellence
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="text-center">
                    <div className="w-20 h-20 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                      <FaUsers className="text-white text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-[var(--blue)] font-medium mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-[var(--blue)] to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4 animate-fade-in">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 animate-slide-up">
              Let's discuss your industrial valve and engineering requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <a 
                href="/contact" 
                className="bg-white text-[var(--blue)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Get in Touch
              </a>
              <a 
                href="/products" 
                className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[var(--blue)] transition-colors duration-200"
              >
                View Products
              </a>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AboutUs;