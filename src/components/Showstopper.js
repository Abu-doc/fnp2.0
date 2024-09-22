import React from 'react';
import bouquet from './images/bouquets.jpg'; // Example import, use actual images for the rest
import arrangement from './images/arrangements.jpeg';
import standing from './images/standing.jpg';
import box from './images/box.jpg';
import sleeves from './images/sleeves.jpg';
import zodiac from './images/zodiac.jpg';
import { Link } from 'react-router-dom';

const Showstopper = () => {
  const items = [
    { id: 'bouquet', text: 'Flower Bouquets', imgSrc: bouquet },
    { id: 'arrangements', text: 'Flower Arrangements', imgSrc: arrangement },
    { id: 'standing', text: 'Standing Bouquets', imgSrc: standing },
    { id: 'zodiac', text: 'Zodiac Flowers', imgSrc: zodiac },
    { id: 'sleeves', text: 'Sleeves', imgSrc: sleeves },
    { id: 'box', text: 'Flower in a Box', imgSrc: box },
  ];

  return (
    <div className="showstopper px-6 py-0 mb-8">
      <h1 className="text-gray-600 mt-16 mb-12 text-3xl font-semibold font-serif text-center">The Showstopper Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link key={item.id} to={`/generic/${item.id}`}>
            <div className="relative cursor-pointer">
              <img
                src={item.imgSrc}
                alt={item.text}
                className="w-full h-[250px] object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 p-4 flex items-center bg-white bg-opacity-80 rounded-bl-lg rounded-tr-3xl w-[280px] h-[56px] z-10">
                <h3 className="text-[#474545] font-semibold">{item.text}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Showstopper;
