import React from 'react';
import { Link } from 'react-router';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';

const Products = () => {
  const productCategories = [
    {
      name: 'Industrial Valves',
      description: 'High-quality industrial valves for various applications',
      image: '/sre/valves/actuator ball valve.jpg',
      link: '/products/industrial-valves',
      subcategories: ['Ball Valves', 'Plug Valves', 'Globe Valves', 'Swing Check Valves', 'Steam Valves', 'Strainer Valves', 'P.P. Valves & Fittings', 'Diaphragm Valves']
    },
    {
      name: 'General Engineering Items',
      description: 'Comprehensive range of general engineering items',
      image: '/sre/general engineering items/01genaral.jpg',
      link: '/products/general-items',
      subcategories: ['Medical Equipment', 'Pumps', 'Power Equipment', 'Instrumentation', 'Valve Equipment', 'Gear Systems']
    },
    {
      name: 'Fabrication Items',
      description: 'Custom fabricated components and equipment',
      image: '/sre/fabrication/aerator.jpg',
      link: '/products/fabrication-items',
      subcategories: ['Aerators', 'Screw Conveyors', 'Rotary Air Locks', 'Belt Conveyor Frames', 'Bellow Cones']
    },
    {
      name: 'Pump Spares',
      description: 'High-quality pump spares and components',
      image: '/sre/pump spares/impeller--1.jpg',
      link: '/products/pump-spares',
      subcategories: ['Impellers', 'Pump Casings', 'Pump Components', 'Maintenance Parts']
    },
    {
      name: 'PA Nozzles',
      description: 'Precision PA nozzles for industrial applications',
      image: '/sre/PA Nozzles/DSC02710.JPG',
      link: '/products/pa-nozzels',
      subcategories: ['Industrial Nozzles', 'Spray Nozzles', 'Atomizing Nozzles', 'Specialized Nozzles']
    },
    {
      name: 'Fasteners & Pipe Fittings',
      description: 'Comprehensive range of fasteners and pipe fittings',
      image: '/sre/general engineering items/gear.jpg',
      link: '/products/fasteners-pipe',
      subcategories: ['Industrial Fasteners', 'Pipe Fittings', 'Pipe Components', 'Fitting Components']
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of industrial products and engineering solutions for various applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <LazyImage
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Categories:</h4>
                    <div className="flex flex-wrap gap-1">
                      {category.subcategories.slice(0, 3).map((sub, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {sub}
                        </span>
                      ))}
                      {category.subcategories.length > 3 && (
                        <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          +{category.subcategories.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Link
                    to={category.link}
                    className="w-full bg-[var(--blue)] text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-center block"
                  >
                    View Products
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Our Products?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600">All products meet the highest quality standards and industry specifications</p>
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

export default Products;
