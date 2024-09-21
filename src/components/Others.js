import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import Splide CSS
import dummy9 from './images/dummy9.jpg'
import { FaStar } from "react-icons/fa";
import './styles.css'; // Ensure to import your CSS file
import dummy10 from './images/dummy10.jpg'
import dummy11 from './images/dummy11.jpg'
import dummy12 from './images/dummy12.jpg'
import dummy13 from './images/dummy13.jpg'
import dummy14 from './images/dummy14.jpg'
import dummy15 from './images/dummy15.jpg'
import dummy16 from './images/dummy16.jpg'


const Others = () => {
    return (
        <div className="recent px-16">
            <h1 className="font-semibold text-3xl text-left mb-6 mt-4">What Others Are Viewing</h1>
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
                        <img src={dummy9} alt="dummy" className="w-80 h-auto" />
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
                        <img src={dummy10} alt="dummy" className="w806 h-auto" />
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
                        <img src={dummy11} alt="dummy" className="w806 h-auto" />
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
                        <img src={dummy12} alt="dummy" className="w806 h-auto" />
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
                        <img src={dummy13} alt="dummy" className="w806 h-auto" />
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
                        <img src={dummy14} alt="dummy" className="w806 h-auto" />
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
                        <img src={dummy15} alt="dummy" className="w806 h-auto" />
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
                        <img src={dummy16} alt="dummy" className="w806 h-auto" />
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

export default Others;
