import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon from react-icons

const PerfectSurprise = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <h1 className="text-gray-600 mt-16 mb-20 text-3xl font-semibold font-serif text-center">
        Plan the Perfect Surprise
      </h1>

      {/* Grid layout for responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
        {['For Him', 'For Her', 'For Them'].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center"
          >
            {/* Smaller Shape */}
            <div className="h-[120px] w-[200px] sm:h-[140px] sm:w-[240px] lg:h-[160px] lg:w-[280px] rounded-[53%_47%_56%_44%_/_76%_56%_44%_24%] bg-red-400"></div>

            {/* Button */}
            <div className="bg-[#7d8035] text-[#f8f8f8] rounded-3xl flex items-center justify-center h-[40px] w-[160px] my-6">
              <h3>{item}</h3>
              <div className="relative flex items-center justify-center bg-white text-[#7d8035] rounded-full w-[26px] h-[26px] ml-6 cursor-pointer">
                <FaArrowRight size={18} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfectSurprise;
