import React from 'react';
import Layout from '../components/Layout/Layout';
import LazyImage from '../components/LazyImage/LazyImage';

const FabricationItems = () => {
  const items = [
    { name: 'Aerator', image: '/sre/fabrication/aerator.jpg' },
    { name: 'Aerator 2', image: '/sre/fabrication/aerator2.jpg' },
    { name: 'Bellow Cone', image: '/sre/fabrication/bellow cone.jpg' },
    { name: 'Screw Conveyor', image: '/sre/fabrication/screw conveyor/screw conveyor.jpg' },
    { name: 'Screw Conveyor 2', image: '/sre/fabrication/screw conveyor/screw conveyor-2.jpg' },
    { name: 'Screw Conveyor 3', image: '/sre/fabrication/screw conveyor/screw conveyor-3.jpg' },
    { name: 'Screw Conveyor 5', image: '/sre/fabrication/screw conveyor/screw conveyor-5.jpg' },
    { name: 'Rotary Air Lock 1', image: '/sre/fabrication/rotary air lock/DSCN3929.JPG' },
    { name: 'Rotary Air Lock 2', image: '/sre/fabrication/rotary air lock/DSCN3930.JPG' },
    { name: 'Rotary Air Lock 3', image: '/sre/fabrication/rotary air lock/DSCN3931.JPG' },
    { name: 'Rotary Air Lock 4', image: '/sre/fabrication/rotary air lock/DSCN3932.JPG' },
    { name: 'Belt Conveyor Frame 1', image: '/sre/fabrication/frames/P_20160622_174826.jpg' },
    { name: 'Belt Conveyor Frame 2', image: '/sre/fabrication/frames/P_20160622_174850.jpg' },
    { name: 'Belt Conveyor Frame 3', image: '/sre/fabrication/frames/P_20160622_174927.jpg' },
    { name: 'Belt Conveyor Frame 4', image: '/sre/fabrication/frames/P_20160622_174936.jpg' },
    { name: 'Belt Conveyor Frame 5', image: '/sre/fabrication/frames/P_20160622_183922.jpg' },
    { name: 'Belt Conveyor Frame 6', image: '/sre/fabrication/frames/P_20160622_184017.jpg' },
    { name: 'Self Aligning Frame', image: '/sre/fabrication/frames/self aligning frame for belt conveyor.jpg' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Fabrication Items</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Custom fabricated components and equipment for industrial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <LazyImage
                  src={item.image}
                  alt={item.name}
                  className="w-full h-60  object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">
                    Precision fabricated components for industrial use
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

export default FabricationItems;
