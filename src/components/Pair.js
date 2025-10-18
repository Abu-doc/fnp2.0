import React from 'react';
import bouquet from './images/cake.jpg';
import arrangement from './images/chocolate2.jpg';
import standing from './images/teddy.jpg';
import box from './images/guitarist.jpg';
import sleeves from './images/plants.jpg';
import zodiac from './images/greeting.jpg';
import { Link } from 'react-router-dom';

const Pair = () => {
  const items = [
    { id: 'bouquet', text: 'Flower and Cakes', imgSrc: bouquet },
    { id: 'arrangements', text: 'Flowers and Chocolates', imgSrc: arrangement },
    { id: 'standing', text: 'Flowers and Teddy Bears', imgSrc: standing },
    { id: 'zodiac', text: 'Flower and Guitarist', imgSrc: zodiac },
    { id: 'sleeves', text: 'Flower and Plants', imgSrc: sleeves },
    { id: 'box', text: 'Flowers and Greeting Cards', imgSrc: box },
  ];

  return (
    <div className="showstopper px-6 py-0">
      <h1 className="text-gray-600 mt-16 mb-12 text-3xl font-semibold font-serif text-center">
        Pair With Flowers
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <Link key={item.id} to={`/generic/${item.id}`}>
            <div className="relative cursor-pointer">
              {/* Image */}
              <img
                src={item.imgSrc}
                alt={item.text}
                className="w-full h-[250px] object-cover rounded-lg"
              />

              {/* Overlay label */}
              <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-80 rounded-bl-lg rounded-tr-3xl w-full min-h-[56px] flex items-center">
                <h3 className="text-[#474545] font-semibold truncate">
                  {item.text}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Pair;
