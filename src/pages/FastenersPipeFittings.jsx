import React from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';

const FastenersPipeFittings = () => {
  const items = [
    { name: 'Fasteners & Pipe Fittings', image: '/sre/general engineering items/01genaral.jpg' },
    { name: 'Pipe Fittings 1', image: '/sre/general engineering items/02medical.jpg' },
    { name: 'Pipe Fittings 2', image: '/sre/general engineering items/03pumps.jpg' },
    { name: 'Fasteners 1', image: '/sre/general engineering items/04power01.jpg' },
    { name: 'Fasteners 2', image: '/sre/general engineering items/04power02.jpg' },
    { name: 'Pipe Components', image: '/sre/general engineering items/05instru01.jpg' },
    { name: 'Fitting Components', image: '/sre/general engineering items/05instru02.jpg' },
    { name: 'Industrial Fasteners', image: '/sre/general engineering items/05instrument.jpg' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Fasteners & Pipe Fittings</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive range of fasteners and pipe fittings for industrial applications.
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
                    High-quality fasteners and pipe fittings for industrial use
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

export default FastenersPipeFittings;
