import React from 'react';
import bouquet from './images/cake.jpg'; // Example import, use actual images for the rest
import arrangement from './images/chocolate2.jpg'
import standing from './images/teddy.jpg'
import box from './images/guitarist.jpg'
import sleeves from './images/plants.jpg'
import zodiac from './images/greeting.jpg'


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
      <h1 className="text-gray-600 mt-16 mb-12 text-3xl  font-semibold font-serif text-center">Pair With Flowers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="relative">
            <img
              src={item.imgSrc} // Use the imported or static image path
              alt={item.text}
              className="w-full h-[250px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 p-4 flex items-center bg-white bg-opacity-80 rounded-bl-lg rounded-tr-3xl w-[280px] h-[56px] z-10">
              <h3 className="text-[#474545] font-semibold">{item.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pair;
