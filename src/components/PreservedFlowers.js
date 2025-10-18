import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import border from './images/border4.jpg'; // Import the image

const Preserved = () => {
  return (
    <div
      className="relative grid place-items-center text-center px-6 py-12 sm:px-12 md:px-20 lg:px-32 xl:px-40 bg-palegoldenrod"
      style={{
        backgroundImage: `url(${border})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Heading Section */}
      <div className="max-w-4xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif italic font-bold text-[#474545]">
          Preserved Flowers
        </h1>
        <h4 className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#474545]">
          Eternal Blooms for Lasting Memories
        </h4>
      </div>

      {/* Button Section */}
      <div className="mt-8">
        <button className="flex items-center justify-center text-lg sm:text-xl md:text-2xl font-semibold text-white bg-black py-3 px-6 rounded-3xl hover:bg-gray-800 transition">
          Shop Now
          <span className="flex items-center justify-center w-9 h-9 bg-white text-black rounded-full ml-3">
            <IoArrowForwardOutline className="text-2xl" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Preserved;
