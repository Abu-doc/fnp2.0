import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import Splide CSS
import dummy17 from './images/dummy17.jpg'
import { FaStar } from "react-icons/fa";
import './styles.css' // Ensure to import your CSS file
import dummy18 from './images/dummy18.jpg'
import dummy19 from './images/dummy19.jpg'
import dummy20 from './images/dummy20.jpg'
import dummy21 from './images/dummy21.jpg'
import dummy22 from './images/dummy22.jpg'
import dummy23 from './images/dummy23.jpg'
import dummy24 from './images/dummy24.jpg'


const Like = () => {
    return (
        <div className="recent px-16">
            <h1 className="font-semibold text-3xl text-left mb-6 mt-4">You May Also Like</h1>
            <Splide
                options={{
                    perPage: 4,
                    perMove: 1,
                    gap: '1rem',
                    pagination: false,
                    arrows: true,
                    breakpoints: {
                        1200: {
                            perPage: 2,
                        },
                        768: {
                            perPage: 1,
                        },
                    },
                }}
            >
                <SplideSlide>
                    <div className="border border-gray-200 w-80 rounded-lg cursor-pointer">
                    <div className="relative">
                        <img src={dummy17} alt="dummy" className="w-80 h-auto" />
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
                </SplideSlide>
                <SplideSlide>
                    <div className="border border-gray-200 w-80 rounded-lg cursor-pointer">
                    <div className="relative">
                        <img src={dummy18} alt="dummy" className="w-80 h-auto" />
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
                </SplideSlide>
                <SplideSlide>
                    <div className="border border-gray-200 w-80 rounded-lg cursor-pointer">
                    <div className="relative">
                        <img src={dummy19} alt="dummy" className="w-80 h-auto" />
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
                </SplideSlide>
                <SplideSlide>
                    <div className="border border-gray-200 w-80 rounded-lg cursor-pointer">
                    <div className="relative">
                        <img src={dummy20} alt="dummy" className="w-80 h-auto" />
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
                </SplideSlide>
                <SplideSlide>
                    <div className="border border-gray-200 w-80 rounded-lg cursor-pointer">
                    <div className="relative">
                        <img src={dummy21} alt="dummy" className="w-80 h-auto" />
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
                </SplideSlide>
                <SplideSlide>
                    <div className="border border-gray-200 w-80 rounded-lg cursor-pointer">
                    <div className="relative">
                        <img src={dummy22} alt="dummy" className="w-80 h-auto" />
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
                </SplideSlide>
                <SplideSlide>
                    <div className="border border-gray-200 w-80 rounded-lg cursor-pointer">
                    <div className="relative">
                        <img src={dummy23} alt="dummy" className="w-80 h-auto" />
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
                </SplideSlide>
                <SplideSlide>
                    <div className="border border-gray-200 w-80 rounded-lg cursor-pointer">
                    <div className="relative">
                        <img src={dummy24} alt="dummy" className="w-80 h-auto" />
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
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default Like;
