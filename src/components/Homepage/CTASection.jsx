import React from 'react';
import { Link } from 'react-router';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[var(--blue)] to-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4 animate-fade-in">
          Ready to Get Started?
        </h2>
        <p className="text-xl mb-8 animate-slide-up">
          Contact us today for all your industrial valve and engineering needs
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
          <Link
            to="/contact"
            className="bg-white text-[var(--blue)] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2"
          >
            <FaEnvelope />
            <span>Send Enquiry</span>
          </Link>
          <a
            href="tel:+919428009512"
            className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-200 flex items-center space-x-2"
          >
            <FaPhone />
            <span>Call Now</span>
          </a>
          <a
            href="https://wa.me/9428009512?text=Hello%2C%20I%20need%20help!"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
          >
            <FaWhatsapp />
            <span>WhatsApp</span>
          </a>
        </div>
        <div className="mt-8 text-sm opacity-90 animate-slide-up">
          <p className="flex items-center justify-center space-x-4">
            <span className="flex items-center space-x-1">
              <FaPhone className="text-sm" />
              <span>+91 9428009512 | +91 9879799379</span>
            </span>
          </p>
          <p className="flex items-center justify-center space-x-4 mt-2">
            <span className="flex items-center space-x-1">
              <FaEnvelope className="text-sm" />
              <span>info@srebvn.com | srebvn@hotmail.com</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
