import React from 'react';
import { FaArrowRight } from 'react-icons/fa'; // Import the arrow icon from react-icons

const PerfectSurprise = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-gray-600 mt-16 mb-20 text-3xl  font-semibold font-serif text-center">Plan the Perfect Surprise</h1>
      <div className="flex justify-evenly w-full">
        {['For Him', 'For Her', 'For Them'].map((item, index) => (
          <div key={index} className="flex flex-col items-center justify-center">
            <div className="h-[194px] w-[370px] rounded-[53%_47%_56%_44%_/_76%_56%_44%_24%] bg-red-400"></div>
            <div className="bg-[#7d8035] text-[#f8f8f8] rounded-3xl flex items-center justify-center h-[44px] w-[180px] my-8">
              <h3>{item}</h3>
              <div className="relative flex items-center justify-center bg-white text-[#7d8035] rounded-full w-[28px] h-[28px] ml-8 cursor-pointer">
                <FaArrowRight size={24} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfectSurprise;
