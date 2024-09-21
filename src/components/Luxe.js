import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5'; // Importing React Icons
import border from './images/border.jpg'; // Import the image

const Luxe = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center bg-palegoldenrod h-160 mt-6 bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${border})` }} // Use the imported image
    >
      <div className="text-center mt-20 mb-8 px-4">
        <h1 className="text-6xl font-semibold font-serif italic">Luxe Arrangements</h1>
        <h4 className="text-xl mt-5 font-semibold font-serif text-gray-700">Opulent Designs for Discerning Tastes</h4>
      </div>
      <div className="relative bottom-[-90px] flex items-center justify-center w-[188px] bg-black text-white cursor-pointer p-2 rounded-3xl">
        <h3 className="text-center">Shop Now</h3>
        <div className="flex items-center justify-center bg-white text-black w-9 h-9 rounded-full ml-2">
          <IoArrowForwardOutline />
        </div>
      </div>
    </div>
  );
};

export default Luxe;
