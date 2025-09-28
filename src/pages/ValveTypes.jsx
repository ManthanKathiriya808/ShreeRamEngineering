import React from 'react';
import { Link } from 'react-router';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';

const ValveTypes = () => {
  const valveTypes = [
    { 
      name: 'Ball Valves', 
      image: '/sre/valves/ballValve1.jpg',
      link: '/products/ball-valves',
      description: 'High-performance ball valves for various industrial applications'
    },
    { 
      name: 'Plug Valves', 
      image: '/sre/valves/plug.jpg',
      link: '/products/plug-valves',
      description: 'Reliable plug valves for flow control applications'
    },
    { 
      name: 'Globe Valves', 
      image: '/sre/valves/globe.jpg',
      link: '/products/globe-valves',
      description: 'Precision globe valves for throttling and shut-off applications'
    },
    { 
      name: 'Swing Check Valves', 
      image: '/sre/valves/swing.jpg',
      link: '/products/swing-check-valves',
      description: 'Automatic swing check valves for preventing backflow'
    },
    { 
      name: 'Steam Valves', 
      image: '/sre/valves/stream.jpg',
      link: '/products/steam-valves',
      description: 'Specialized steam valves for high-temperature applications'
    },
    { 
      name: 'Strainer Valves', 
      image: '/sre/valves/strainer.jpg',
      link: '/products/strainer-valves',
      description: 'Strainer valves for filtering and protecting downstream equipment'
    },
    { 
      name: 'P.P. Valves & Fittings', 
      image: '/sre/valves/ppValve.jpg',
      link: '/products/pp-valves',
      description: 'Polypropylene valves and fittings for corrosive applications'
    },
    { 
      name: 'Diaphragm Valves', 
      image: '/sre/valves/diaphram.jpg',
      link: '/products/diaphragm-valves',
      description: 'Diaphragm valves for handling corrosive and abrasive fluids'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Industrial Valve Types</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of industrial valves designed for various applications and industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {valveTypes.map((valve, index) => (
              <Link 
                key={index} 
                to={valve.link}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 card-animate group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <LazyImage
                  src={valve.image}
                  alt={valve.name}
                  className="w-full p-4   object-cover "
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[var(--blue)] transition-colors">
                    {valve.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {valve.description}
                  </p>
                  <div className="text-[var(--blue)] text-sm font-medium group-hover:underline">
                    View Details →
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Industrial Valves?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">High Quality</h3>
                <p className="text-gray-600">Manufactured to the highest standards with premium materials</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliable Performance</h3>
                <p className="text-gray-600">Consistent performance in demanding industrial environments</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Custom Solutions</h3>
                <p className="text-gray-600">Tailored solutions to meet specific industrial requirements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ValveTypes;
