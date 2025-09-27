import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      company: "ABC Industries",
      text: "ShreeRam Engineering has been our trusted partner for industrial valves. Their quality and service are exceptional.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      company: "XYZ Manufacturing",
      text: "The precision and quality of their products have helped us improve our manufacturing efficiency significantly.",
      rating: 5
    },
    {
      name: "Amit Patel",
      company: "DEF Engineering",
      text: "Outstanding customer service and reliable delivery. Highly recommended for all industrial valve needs.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 animate-slide-up">
            Testimonials from satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-[var(--blue)] text-3xl mb-4">
                <FaQuoteLeft />
              </div>
              <p className="text-gray-600 mb-4 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-sm" />
                ))}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
