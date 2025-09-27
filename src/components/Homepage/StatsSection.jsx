import React from 'react';
import { FaIndustry, FaCog, FaAward, FaGlobe } from 'react-icons/fa';

const StatsSection = () => {
  const stats = [
    {
      icon: FaIndustry,
      number: "2000+",
      label: "Sq. Ft. Workshop",
      description: "State-of-the-art manufacturing facility"
    },
    {
      icon: FaCog,
      number: "25",
      label: "HP Power",
      description: "High-capacity power connection"
    },
    {
      icon: FaAward,
      number: "500",
      label: "Kg/CM² Pressure",
      description: "High-pressure testing capability"
    },
    {
      icon: FaGlobe,
      number: "100+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide"
    }
  ];

  return (
    <section className="py-16 bg-[var(--blue)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">
            Our Achievements
          </h2>
          <p className="text-xl animate-slide-up">
            Numbers that reflect our commitment to excellence
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                <stat.icon className="text-3xl" />
              </div>
              <div className="text-4xl font-bold mb-2 animate-count-up">
                {stat.number}
              </div>
              <div className="text-lg font-semibold mb-2">
                {stat.label}
              </div>
              <div className="text-sm opacity-90">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
