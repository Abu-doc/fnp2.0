import React from 'react';
import orchid from './images/orchid.png';
import mixed from './images/mixed.png';
import carnation from './images/carnation.png';
import lily from './images/lily.png';
import gerbera from './images/gerbera.png';
import rose from './images/rose.png';

const rangeItems = [
  { id: 1, src: rose, alt: 'Roses', name: 'Roses' },
  { id: 2, src: gerbera, alt: 'Gerberas', name: 'Gerberas' },
  { id: 3, src: orchid, alt: 'Orchids', name: 'Orchids' },
  { id: 4, src: lily, alt: 'Lilies', name: 'Lilies' },
  { id: 5, src: carnation, alt: 'Carnations', name: 'Carnations' },
  { id: 6, src: mixed, alt: 'Mixed', name: 'Mixed' },
];

const RangeDisplay = () => {
  return (
    <div className="text-center mt-14">
      <h1 className="text-gray-600 mt-10 text-3xl  font-semibold font-serif text-center mb-10">Explore Our Exquisite Range</h1>
      <div className="flex justify-evenly items-center">
        {rangeItems.map(item => (
          <div key={item.id} className="flex flex-col items-center justify-center bg-pink-100 rounded-2xl h-[380px] w-[215px] p-4">
            <img src={item.src} alt={item.alt} className="w-106 rounded-xl" />
            <div className="flex items-center justify-center h-[40px] w-[125px] bg-gray-100 rounded-full mt-4">
              <h3 className="text-gray-600 cursor-pointer">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RangeDisplay;
