import React from 'react';
import { FaCheckCircle, FaCog, FaAward, FaHeadset, FaTruck, FaShieldAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaCheckCircle,
      title: "Quality Assurance",
      description: "ISO 9001:2008 certified with rigorous quality control processes ensuring every product meets the highest standards."
    },
    {
      icon: FaCog,
      title: "Precision Engineering",
      description: "State-of-the-art machinery and precision tools for high-quality manufacturing with micron-level accuracy."
    },
    {
      icon: FaAward,
      title: "Industry Experience",
      description: "Years of experience in industrial valve manufacturing and engineering solutions for various industries."
    },
    {
      icon: FaHeadset,
      title: "Expert Support",
      description: "Technical expertise and customer support for all your industrial valve and engineering needs."
    },
    {
      icon: FaTruck,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality, ensuring your projects stay on schedule."
    },
    {
      icon: FaShieldAlt,
      title: "Reliable Service",
      description: "Consistent performance and reliability in demanding industrial environments with comprehensive testing."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Why Choose ShreeRam Engineering?
          </h2>
          <p className="text-xl text-gray-600 animate-slide-up">
            We combine traditional craftsmanship with modern technology
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4 animate-glow">
                <feature.icon className="text-white text-2xl" />
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
  );
};

export default WhyChooseUs;
