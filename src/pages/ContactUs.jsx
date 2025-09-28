import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaGlobe, FaLinkedin, FaFacebook, FaAward, FaBolt, FaWrench } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Using Formspree - Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/mkgqoyzj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Track successful form submission
        if (window.gtag) {
          window.gtag('event', 'contact_form_submit', {
            event_category: 'engagement',
            event_label: 'contact_form_success',
            value: 1
          });
        }
      } else {
        setSubmitStatus('error');
        
        // Track failed form submission
        if (window.gtag) {
          window.gtag('event', 'contact_form_error', {
            event_category: 'engagement',
            event_label: 'contact_form_failed',
            value: 0
          });
        }
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      details: "185/A, G I D C, Chitra, Chitra, Bhavnagar, Gujarat 364004",
      description: "Our main manufacturing facility"
    },
    {
      icon: FaPhone,
      title: "Phone",
      details: "+91 9428009512",
      details2: "+91 9879799379",
      description: "Call us for immediate assistance"
    },
    {
      icon: FaEnvelope,
      title: "Email",
      details: "info@srebvn.com",
      details2: "srebvn@hotmail.com",
      description: "Send us your enquiries"
    },
    {
      icon: FaClock,
      title: "Working Hours",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      details2: "Saturday: 9:00 AM - 2:00 PM",
      description: "We're here to help you"
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
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-slide-up">
              Get in touch with our team for all your industrial valve needs
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="animate-slide-in-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors animate-fade-in-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="text-3xl text-[var(--blue)]">
                        <info.icon />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-lg text-gray-700 font-medium">{info.details}</p>
                        {info.details2 && (
                          <p className="text-lg text-gray-700 font-medium">{info.details2}</p>
                        )}
                        <p className="text-gray-600 text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 bg-[var(--blue)] rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors hover:scale-110">
                      <FaGlobe />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[var(--blue)] rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors hover:scale-110">
                      <FaLinkedin />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[var(--blue)] rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors hover:scale-110">
                      <FaFacebook />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-slide-in-right">
                <div className="bg-white p-8 rounded-lg shadow-xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--blue)] focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--blue)] focus:border-transparent transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--blue)] focus:border-transparent transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--blue)] focus:border-transparent transition-colors"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                        ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                      </div>
                    )}
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                        ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[var(--blue)] text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Find Us
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                Visit our manufacturing facility in Bhavnagar, Gujarat
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden animate-fade-in-up">
              <div className="h-96">

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1550.2439733251292!2d72.09738339794885!3d21.757290015186694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395f50e2ffffffff%3A0x691059fa24066795!2sShree%20Ram%20Engineering!5e0!3m2!1sen!2sin!4v1758969621674!5m2!1sen!2sin"
                 width="100%"
                 height="100%"
                 style={{ border: 0 }}
                 allowFullScreen=""
                 loading="lazy"
                 referrerPolicy="no-referrer-when-downgrade"
                 title="ShreeRam Engineering Location"></iframe>
              </div>
              <div className="p-6 bg-gray-50">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">ShreeRam Engineering</h3>
                <p className="text-gray-600 mb-2">185/A, G I D C, Chitra, Chitra, Bhavnagar, Gujarat 364004</p>
                <p className="text-sm text-gray-500">Click on the map to get directions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
                Why Choose Us
              </h2>
              <p className="text-xl text-gray-600 animate-slide-up">
                We provide exceptional service and support
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center animate-fade-in-up">
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaAward className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">ISO 9001:2008 certified with rigorous quality control processes</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaBolt className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Quick turnaround times without compromising on quality</p>
              </div>
              <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-[var(--blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaWrench className="text-white text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">Technical expertise and customer support for all your needs</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default ContactUs;
