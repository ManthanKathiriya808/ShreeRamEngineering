import React from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';

const PumpSpares = () => {
  const items = [
    { name: 'Pump Spare 1', image: '/sre/pump spares/IMG_20160613_172100.jpg' },
    { name: 'Pump Spare 2', image: '/sre/pump spares/IMG_20160613_172110.jpg' },
    { name: 'Impeller 1', image: '/sre/pump spares/impeller--1.jpg' },
    { name: 'Impeller 2', image: '/sre/pump spares/impeller-2.jpg' },
    { name: 'Impeller 3', image: '/sre/pump spares/impeller-3.jpg' },
    { name: 'Impeller 4', image: '/sre/pump spares/impeller-4.jpg' },
    { name: 'Impeller 5', image: '/sre/pump spares/impeller-5.jpg' },
    { name: 'Impeller 6', image: '/sre/pump spares/impeller-6.jpg' },
    { name: 'Impeller 7', image: '/sre/pump spares/impeller-7.jpg' },
    { name: 'Pump Casing', image: '/sre/pump spares/pump casing.jpg' },
    { name: 'Pump Casing 2', image: '/sre/pump spares/pump casing-2.jpg' },
    { name: 'Pump Casing 3', image: '/sre/pump spares/pump casing-3.jpg' },
    { name: 'Pump Component', image: '/sre/pump spares/P-01.jpg' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Pump Spares</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-quality pump spares and components for various pump systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <LazyImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">
                    Reliable pump spares for maintenance and repair
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

export default PumpSpares;
