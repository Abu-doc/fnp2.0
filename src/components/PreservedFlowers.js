import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';
import border from './images/border4.jpg'; // Import the image

const Preserved = () => {
    return (
        <div
            className="relative flex flex-col items-start justify-center px-[190px] py-0 mt-20 mb-4 h-[615px] w-[102vw] -mx-[calc(35px+1rem)] bg-palegoldenrod"
            style={{ backgroundImage: `url(${border})`, backgroundSize: 'cover' }} // Use inline style for background image
        >
            <div className="text-left mb-8">
                <h1 className="text-8xl font-serif italic relative left-56 font-bold text-center text-[#474545]">Preserved Flowers</h1>
                <h4 className="text-3xl font-semibold relative left-44 text-center text-[#474545] mt-2">Eternal Blooms for Lasting Memories</h4>
            </div>
            <div className="flex items-center relative left-128 space-x-4 mt-4">
                <h3 className="text-3xl font-semibold text-white bg-black py-2 px-4 rounded-3xl cursor-pointer flex items-center">
                    Shop Now
                    <div className="flex items-center justify-center  w-9 h-9 bg-white text-black rounded-full ml-4">
                        <IoArrowForwardOutline className="text-2xl" />
                    </div>
                </h3>
            </div>
        </div>
    );
};

export default Preserved;
