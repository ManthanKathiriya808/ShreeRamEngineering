import React from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';

const GeneralEngineeringItems = () => {
  const items = [
    { name: 'General Engineering', image: '/sre/general engineering items/01genaral.jpg' },
    { name: 'Medical Equipment', image: '/sre/general engineering items/02medical.jpg' },
    { name: 'Pumps', image: '/sre/general engineering items/03pumps.jpg' },
    { name: 'Power Equipment 1', image: '/sre/general engineering items/04power01.jpg' },
    { name: 'Power Equipment 2', image: '/sre/general engineering items/04power02.jpg' },
    { name: 'Instrumentation 1', image: '/sre/general engineering items/05instru01.jpg' },
    { name: 'Instrumentation 2', image: '/sre/general engineering items/05instru02.jpg' },
    { name: 'Instrumentation', image: '/sre/general engineering items/05instrument.jpg' },
    { name: 'Valve Equipment 1', image: '/sre/general engineering items/06valve01.jpg' },
    { name: 'Valve Equipment 2', image: '/sre/general engineering items/06valve02.jpg' },
    { name: 'Gear Systems', image: '/sre/general engineering items/gear.jpg' },
    { name: 'Nozzle for Kiln 1', image: '/sre/general engineering items/nozzle for kiln-1.jpg' },
    { name: 'Nozzle for Kiln', image: '/sre/general engineering items/nozzle for kiln.jpg' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">General Engineering Items</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of general engineering items for various industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <LazyImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">
                    High-quality engineering components for industrial use
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default GeneralEngineeringItems;
