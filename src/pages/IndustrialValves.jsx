import React from 'react';
import { Link } from 'react-router';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';

const IndustrialValves = () => {
  const valveTypes = [
    { 
      name: 'Ball Valves', 
      image: '/sre/valves/actuator ball valve.jpg',
      link: '/products/ball-valves',
      description: 'High-quality ball valves with comprehensive specifications and multiple configurations'
    },
    { 
      name: 'Plug Valves', 
      image: '/sre/valves/actuator offcentric butterfly valve.jpg',
      link: '/products/plug-valves',
      description: 'Bi-directional plug valves with excellent sealing capabilities'
    },
    { 
      name: 'Globe Valves', 
      image: '/sre/valves/repairing safety valve.jpg',
      link: '/products/globe-valves',
      description: 'Precision globe valves for flow control applications'
    },
    { 
      name: 'Swing Check Valves', 
      image: '/sre/valves/actuator ball valve.jpg',
      link: '/products/swing-check-valves',
      description: 'Reliable swing check valves for backflow prevention'
    },
    { 
      name: 'Steam Valves', 
      image: '/sre/valves/actuator offcentric butterfly valve.jpg',
      link: '/products/steam-valves',
      description: 'Specialized steam valves for high-temperature applications'
    },
    { 
      name: 'Strainer Valves', 
      image: '/sre/valves/repairing safety valve.jpg',
      link: '/products/strainer-valves',
      description: 'Efficient strainer valves for filtration systems'
    },
    { 
      name: 'P.P. Valves & Fittings', 
      image: '/sre/valves/actuator ball valve.jpg',
      link: '/products/pp-valves',
      description: 'Polypropylene valves and fittings for chemical applications'
    },
    { 
      name: 'Diaphragm Valves', 
      image: '/sre/valves/actuator offcentric butterfly valve.jpg',
      link: '/products/diaphragm-valves',
      description: 'Diaphragm valves for precise flow control'
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Industrial Valves</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              High-quality industrial valves designed for various applications and industries.
            </p>
            <Link 
              to="/products/valve-types" 
              className="inline-block bg-[var(--blue)] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              View All Valve Types
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {valveTypes.map((valve, index) => (
              <Link 
                key={index} 
                to={valve.link}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 group block card-animate"
              >
                <LazyImage
                  src={valve.image}
                  alt={valve.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[var(--blue)] transition-colors">
                    {valve.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {valve.description}
                  </p>
                  <div className="mt-4 text-[var(--blue)] text-sm font-medium group-hover:underline">
                    View Details →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default IndustrialValves;
