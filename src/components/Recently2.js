import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import Splide CSS
import dummy from './images/dummy.jpg'
import { FaStar } from "react-icons/fa";
import './styles.css'; // Ensure to import your CSS file
import dummy2 from './images/dummy2.jpg'
import dummy3 from './images/dummy3.jpg'
import dummy4 from './images/dummy4.jpg'
import dummy5 from './images/dummy5.jpg'
import dummy6 from './images/dummy6.jpg'
import dummy7 from './images/dummy7.jpg'
import dummy8 from './images/dummy8.jpg'
import { Link } from 'react-router-dom';



const Recentlly = () => {
    return (
        <div className="recent">
            <h1 className="font-semibold text-3xl text-left mb-6 mt-4">Recently Viewed By You</h1>
            <Splide
                options={{
                    perPage: 3,
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
                    <Link to='/final'>
                    <div className="border border-gray-200 w-90 rounded-lg cursor-pointer ">
                    <div className="relative">
                        <img src={dummy} alt="dummy" className="w-90 h-auto" />
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
                    </Link>
                </SplideSlide>
                <SplideSlide>
                <Link to='/final'>
                    <div className="border border-gray-200 w-90 rounded-lg cursor-pointer  ">
                    <div className="relative">
                        <img src={dummy2} alt="dummy" className="w90 h-auto" />
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
                    </Link>
                </SplideSlide>
                <SplideSlide>
                <Link to='/final'>

                    <div className="border border-gray-200 w-90 rounded-lg cursor-pointer absolute bottom-0 ">
                    <div className="relative">
                        <img src={dummy3} alt="dummy" className="w90 h-auto" />
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
                   </Link>
                </SplideSlide>
                <SplideSlide>
                <Link to='/final'>

                    <div className="border border-gray-200 w-90 rounded-lg cursor-pointer absolute bottom-0 ">
                    <div className="relative">
                        <img src={dummy4} alt="dummy" className="w90 h-auto" />
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
                    </Link>
                </SplideSlide>
                <SplideSlide>
                <Link to='/final'>
                    <div className="border border-gray-200 w-90 rounded-lg cursor-pointer absolute bottom-0 ">
                    <div className="relative">
                        <img src={dummy5} alt="dummy" className="w90 h-auto" />
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
                    </Link>
                </SplideSlide>
                <SplideSlide>
                <Link to='/final'>
                    <div className="border border-gray-200 w-90 rounded-lg cursor-pointer absolute bottom-0 ">
                    <div className="relative">
                        <img src={dummy6} alt="dummy" className="w90 h-auto" />
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
                    </Link>
                </SplideSlide>
                <SplideSlide>
                <Link to='/final'>

                    <div className="border border-gray-200 w-90 rounded-lg cursor-pointer absolute bottom-0 ">
                    <div className="relative">
                        <img src={dummy7} alt="dummy" className="w90 h-auto" />
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
                    </Link>
                </SplideSlide>
                <SplideSlide>
                <Link to='/final'>
                    <div className="border border-gray-200 w-90 rounded-lg cursor-pointer absolute bottom-0 ">
                    <div className="relative">
                        <img src={dummy8} alt="dummy" className="w90 h-auto" />
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
                    </Link>
                </SplideSlide>
            </Splide>
        </div>
    );
}

export default Recentlly;
