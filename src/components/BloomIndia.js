// src/BloomsIndia.js
import React from 'react';
import { FaBluesky } from "react-icons/fa6";
import { IoArrowForwardOutline } from 'react-icons/io5';

const BloomCard = ({ city }) => (
    <div className="w-[215px] h-[120px] bg-[#47454520] rounded-lg flex flex-col justify-evenly p-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <FaBluesky className="text-4xl ml-6 mr-16  text-gray-600" />
                <div className="bg-[#7d8035] text-white w-9 h-9 flex items-center justify-center rounded-full">
                    <IoArrowForwardOutline className="text-lg cursor-pointer" />
                </div>
            </div>
        </div>
        <div className="text-[#474545] text-lg font-semibold text-center ">
            <h3>{city}</h3>
        </div>
    </div>
);

const BloomsIndia = () => {
    const cities = ['Delhi NCR', 'Hyderabad', 'Pune', 'Mumbai', 'Chennai', 'Bangalore'];

    return (
        <div className="flex flex-col px-8 py-8">
            <h1 className="text-gray-600 mt-16 mb-14 text-3xl  font-semibold font-serif text-center">Delivering Blooms Across India</h1>
            <div className="flex overflow-x-auto space-x-6">
                {cities.map((city) => (
                    <BloomCard key={city} city={city} />
                ))}
            </div>
        </div>
    );
};

export default BloomsIndia;
