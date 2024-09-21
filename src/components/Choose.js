import React from 'react';
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa";
import { IoRoseOutline } from "react-icons/io5";
import { FaHeadset } from "react-icons/fa6";

const ChooseSection = () => {
  return (
    <div className="p-6">
      <h1 className="text-gray-600  text-3xl  font-semibold font-serif text-center mb-12 mt-8 ">Why Choose FNP?</h1>
      <div className="flex flex-wrap justify-evenly items-center">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-200 text-custom-green text-3xl mb-3 cursor-pointer">
            <IoRoseOutline />
          </div>
          <h3 className="text-gray-600 mt-3 font-medium text-lg">Premium Flowers</h3>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-200 text-custom-green text-3xl mb-3 cursor-pointer">
            <FaHandsHoldingCircle />
          </div>
          <h3 className="text-gray-600 mt-3 font-medium text-lg">Handcrafted Arrangements</h3>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-200 text-custom-green text-3xl mb-3 cursor-pointer">
            <FaTruck />
          </div>
          <h3 className="text-gray-600 mt-3 font-medium text-lg">Hassle-Free Delivery</h3>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex items-center justify-center w-24 h-24 rounded-full bg-gray-200 text-custom-green text-3xl mb-3 cursor-pointer">
            <FaHeadset />
          </div>
          <h3 className="text-gray-600 mt-3 font-medium text-lg">Customer Support</h3>
        </div>
      </div>
    </div>
  );
};

export default ChooseSection;
