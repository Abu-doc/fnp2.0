import React from "react";
import dummy7 from './images/dummy7.jpg'
import { FaStar } from "react-icons/fa";

const BestSeller = () => {
    return (
        <div className="border border-gray-200 w-full sm:max-w-xs md:max-w-sm lg:max-w-md rounded-lg cursor-pointer overflow-hidden">
            <div className="relative">
                <img 
                    src={dummy7} 
                    alt="dummy" 
                    className="w-full h-auto object-cover" 
                />
                <div className="absolute top-2 left-2 flex items-center justify-center">
                    <span className="text-xs sm:text-sm md:text-lg text-white font-semibold bg-black bg-opacity-50 px-2 py-1 rounded">
                        BEST SELLER
                    </span>
                </div>
                <div className="flex bg-white bg-opacity-70 p-1 absolute bottom-3 left-2 rounded-xl text-xs sm:text-sm">
                    <div className="flex items-center justify-center">
                        <span className="text-green-600">
                            <FaStar />
                        </span>
                        <span className="ml-1">4.5</span>
                    </div>
                    <span className="text-gray-600 ml-1">| 2.6K</span>
                </div>
            </div>

            <div className="flex flex-col items-start mt-2 p-3 sm:p-4">
                <h3 className="text-base sm:text-lg font-semibold leading-tight">
                    Love For Pastel Carnation Bouquet
                </h3>
                <div className="flex items-center mt-1 flex-wrap">
                    <h2 className="font-semibold text-lg sm:text-xl">₹549</h2>
                    <h2 className="font-semibold text-gray-400 line-through ml-2 sm:ml-3">₹1800</h2>
                    <h2 className="font-semibold text-green-600 ml-2 sm:ml-3">75% Off</h2>
                </div>
                <span className="text-blue-600 mt-1 text-sm sm:text-base">
                    Earliest Delivery: Today
                </span> 
            </div>
        </div>
    )
}
export default BestSeller;
