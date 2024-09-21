import React from 'react';
import { FaBluesky } from "react-icons/fa6";
import { IoArrowForwardOutline } from 'react-icons/io5';

const BloomsGlobal = () => {
    const cities = ['USA', 'Canada', 'UK', 'UAE', 'Australia', 'Worldwide'];
    const colors = [
        'bg-red-200', // Example colors
        'bg-yellow-200',
        'bg-green-200',
        'bg-orange-200',
        'bg-purple-200',
        'bg-pink-200'
    ];

    return (
        <div className="flex flex-col px-8 py-8">
            <h1 className="text-gray-600 mt-4 mb-14 text-3xl font-semibold font-serif text-center">
                Delivering Blooms Globally
            </h1>
            <div className="flex overflow-x-auto space-x-6">
                {cities.map((city, index) => (
                    <div
                        key={city}
                        className={`w-[215px] h-[120px] ${colors[index % colors.length]} rounded-lg flex flex-col justify-evenly p-4`}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <FaBluesky className="text-4xl ml-6 mr-16 text-gray-600" />
                                <div className="bg-[#7d8035] text-white w-9 h-9 flex items-center justify-center rounded-full">
                                    <IoArrowForwardOutline className="text-lg cursor-pointer" />
                                </div>
                            </div>
                        </div>
                        <div className="text-[#474545] text-lg font-semibold text-center">
                            <h3>{city}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BloomsGlobal;
