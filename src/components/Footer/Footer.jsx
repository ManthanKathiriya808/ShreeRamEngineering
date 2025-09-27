import React from "react";
import { Link } from "react-router";
import LazyImage from "../LazyImage/LazyImage";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#1E293B] text-white py-10">

              <div className="flex px-6  items-center justify-center mb-5 pb-5 space-x-2">
          <LazyImage src="/SRE LOGO.gif" className="h-10 w-10" alt="logo" effect="opacity" />
          <span className="text-2xl title-font text-[var(--blue)] font-bold">
            SHREE RAM ENGINEERING
          </span>
        </div>

      <div className="max-w-7xl md:place-items-start mx-auto px-6 grid md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
              {/* <div className="flex items-center space-x-2">
          <img src="SRE LOGO.gif" className="h-10 w-10" alt="logo" />
          <span className="text-2xl text-[var(--blue)] font-bold">
            SHREE RAM ENGINEERING
          </span>
        </div> */}
       
          <p className="my-3 text-lg text-gray-300">
           An ISO 9001:2008 Co.

          </p>
          <LazyImage src="/certificate.jpg" alt="ISO Certificate" className="w-32 h-auto" effect="opacity" />
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-[#0A93E0] transition-colors">Home</Link></li>
            <li><Link to="/facilities" className="hover:text-[#0A93E0] transition-colors">Facilities</Link></li>
            <li><Link to="/products" className="hover:text-[#0A93E0] transition-colors">Products</Link></li>
            <li><Link to="/quality" className="hover:text-[#0A93E0] transition-colors">Quality</Link></li>
            <li><Link to="/about" className="hover:text-[#0A93E0] transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#0A93E0] transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Custom Engineering</li>
            <li>Product Design</li>
            <li>Consultation</li>
            <li>Maintenance</li>
            <li>Quality Testing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-[#0A93E0] text-sm" />
              <span>185/A, G I D C, Chitra, Bhavnagar, Gujarat 364004</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-[#0A93E0] text-sm" />
              <span>+91 9428009512</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhone className="text-[#0A93E0] text-sm" />
              <span>+91 9879799379</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-[#0A93E0] text-sm" />
              <span>info@srebvn.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-[#0A93E0] text-sm" />
              <span>srebvn@hotmail.com</span>
            </div>
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-[#0A93E0] transition-colors">
              <FaGlobe className="text-xl" />
            </a>
            <a href="#" className="hover:text-[#0A93E0] transition-colors">
              <FaLinkedin className="text-xl" />
            </a>
            <a href="#" className="hover:text-[#0A93E0] transition-colors">
              <FaFacebook className="text-xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} SHREE RAM ENGINEERING. All rights reserved | Developed By Manthan Kathiriya
      </div>
    </footer>
  );
};

export default Footer;
