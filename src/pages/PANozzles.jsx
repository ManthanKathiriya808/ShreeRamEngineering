import React from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';

const PANozzles = () => {
  const items = [
    { name: 'PA Nozzle 1', image: '/sre/PA Nozzles/DSC02710.JPG' },
    { name: 'PA Nozzle 2', image: '/sre/PA Nozzles/DSC02711.JPG' },
    { name: 'PA Nozzle 3', image: '/sre/PA Nozzles/DSCN7085.JPG' },
    { name: 'PA Nozzle 4', image: '/sre/PA Nozzles/DSCN7086.JPG' },
    { name: 'PA Nozzle 5', image: '/sre/PA Nozzles/DSCN7087.JPG' },
    { name: 'PA Nozzle 6', image: '/sre/PA Nozzles/DSCN7088.JPG' },
    { name: 'PA Nozzle 7', image: '/sre/PA Nozzles/DSCN7089.JPG' },
    { name: 'PA Nozzle 8', image: '/sre/PA Nozzles/DSCN7090.JPG' },
    { name: 'PA Nozzle 9', image: '/sre/PA Nozzles/DSCN7091.JPG' },
    { name: 'PA Nozzle 10', image: '/sre/PA Nozzles/DSCN7092.JPG' },
    { name: 'PA Nozzle 11', image: '/sre/PA Nozzles/DSCN7093.JPG' },
    { name: 'PA Nozzle 12', image: '/sre/PA Nozzles/DSCN7094.JPG' },
    { name: 'PA Nozzle 13', image: '/sre/PA Nozzles/DSCN7095.JPG' },
    { name: 'PA Nozzle 14', image: '/sre/PA Nozzles/DSCN7096.JPG' },
    { name: 'PA Nozzle 15', image: '/sre/PA Nozzles/DSCN7097.JPG' },
    { name: 'PA Nozzle 16', image: '/sre/PA Nozzles/DSCN7098.JPG' },
    { name: 'PA Nozzle 17', image: '/sre/PA Nozzles/DSCN7099.JPG' },
    { name: 'PA Nozzle 18', image: '/sre/PA Nozzles/DSCN7100.JPG' },
    { name: 'PA Nozzle 19', image: '/sre/PA Nozzles/DSCN7101.JPG' },
    { name: 'PA Nozzle 20', image: '/sre/PA Nozzles/DSCN7102.JPG' },
    { name: 'PA Nozzle 21', image: '/sre/PA Nozzles/WP_20150226_004.jpg' },
    { name: 'PA Nozzle 22', image: '/sre/PA Nozzles/WP_20150329_003.jpg' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">PA Nozzles</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Precision PA nozzles for various industrial applications and processes.
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
                    High-precision nozzles for industrial applications
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

export default PANozzles;
