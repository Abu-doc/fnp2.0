import React from "react";
import dummy7 from './images/dummy7.jpg'
import { FaStar } from "react-icons/fa";

const BestSeller = () => {
    return (
        <div className="border border-gray-200 w-90 rounded-lg cursor-pointer">
        <div className="relative">
            <img src={dummy7} alt="dummy" className="w-90 h-auto" />
            <div className="absolute top-2 left-2 flex items-center justify-center">
                <span className="text-lg text-white font-semibold bg-black bg-opacity-50 p-1 rounded">BEST SELLER</span>
            </div>
            <div className="flex bg-white bg-opacity-50 p-1 absolute bottom-3 left-2 rounded-xl">
                <div className="flex items-center justify-center">
                    <span className="text-green-600">
                    <FaStar />
                    </span>
                    <span>
                        4.5
                    </span>
             </div>
             <span className="text-gray-600 ml-1"> | 2.6K </span>
            </div>
        </div>
        <div className="flex flex-col items-start mt-2 p-4">
            <h3 className="text-lg font-semibold">Love For Pastel Carnation Bouquet</h3>
            <div className="flex items-center mt-1">
<h2 className="font-semibold text-xl">₹549</h2>
<h2 className="font-semibold text-xl text-gray-400 line-through ml-3 ">₹1800</h2>
<h2 className="font-semibold text-xl text-green-600 ml-3 ">75% Off</h2>
</div>
<span className="text-blue-600 mt-1">Earliest Delivery: Today</span> 
        </div>
        </div>
    )
}
export default BestSeller;