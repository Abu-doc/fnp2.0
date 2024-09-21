import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";


const Headings = () => {
    return (
        <div className="">
            <h1 className="font-semibold text-2xl text-left md-lg:text-base ">Love Red Roses Bouquet & Chocolate Cake</h1>
            <div className="flex items-center mt-1">
            <h2 className="font-semibold text-3xl md-lg:text-xl">₹1620</h2>
        <h2 className="font-semibold text-3xl text-gray-400 line-through ml-3 md-lg:text-xl ">₹1800</h2>
        <h2 className="font-semibold text-3xl text-green-600 ml-3 md-lg:text-xl ">10% Off</h2>
        <span><IoIosInformationCircleOutline className="text-gray-500 text-2xl ml-2 cursor-pointer  md-lg:text-lg"/></span>
        </div> 
        <div className="">
            <div className="flex items-center text-lg mt-2 border rounded-xl w-40">
           <h3 className="text-green-500"> <FaStar /> </h3>
            <h3 className="ml-1">4.5</h3>
            <span className="ml-1 text-gray-300">|</span>
            <h3 className="ml-1">256 Reviews</h3>
            </div>
        </div>
        </div>
    )
}

export default Headings;