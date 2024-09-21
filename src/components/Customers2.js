import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import Splide CSS
import './styles.css'
import profile from './images/people.png'
import { FaStar } from "react-icons/fa";
import './styles.css'

const Customer = () => {
  return (
    <div className=" Customer">
      <h1 className="font-semibold text-3xl text-left mb-6 mt-6">Hear It From Our Customers</h1>
      <Splide
        options={{
          perPage    : 3 ,
          perMove : 1,
          gap        : '1rem',
          pagination : false,
          arrows     : true,
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
          <div className="flex flex-col w-96 p-5 border border-gray-300 rounded-lg ">
            <div className=" flex items-center">
                <div className="w-10">
                    <img src={profile} alt="profile" />
                </div>
                <div className=" flex flex-col ml-1 ">
                    <div className="flex items-center justify-start">'
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                    <span className="text-gray-800 font-medium">Amit Kapoor &#x2022; 2 months ago</span>
                </div>
            </div>
            <div className="text-left font-medium mt-3">
                <span>Thank You so much for making my friend's day sepcial!!!</span>
            </div>
            <div className="flex mt-2">
                <span className="bg-gray-300 rounded-md p-1">Occasion: Birthday </span>
                <span className="bg-gray-300 rounded-md ml-2 p-1">City: Delhi </span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex flex-col w-96 p-5 border border-gray-300 rounded-lg">
            <div className=" flex items-center">
                <div className="w-10">
                    <img src={profile} alt="profile" />
                </div>
                <div className=" flex flex-col ml-1 ">
                    <div className="flex items-center justify-start">'
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                    <span className="text-gray-800 font-medium">Amit Kapoor &#x2022; 2 months ago</span>
                </div>
            </div>
            <div className="text-left font-medium mt-3">
                <span>Thank You so much for making my friend's day sepcial!!!</span>
            </div>
            <div className="flex mt-2">
                <span className="bg-gray-300 rounded-md p-1">Occasion: Birthday </span>
                <span className="bg-gray-300 rounded-md ml-2 p-1">City: Delhi </span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex flex-col w-96 p-5 border border-gray-300 rounded-lg absolute bottom-0">
            <div className=" flex items-center">
                <div className="w-10">
                    <img src={profile} alt="profile" />
                </div>
                <div className=" flex flex-col ml-1 ">
                    <div className="flex items-center justify-start">'
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                    <span className="text-gray-800 font-medium">Amit Kapoor &#x2022; 2 months ago</span>
                </div>
            </div>
            <div className="text-left font-medium mt-3">
                <span>Thank You so much for making my friend's day sepcial!!!</span>
            </div>
            <div className="flex mt-2">
                <span className="bg-gray-300 rounded-md p-1">Occasion: Birthday </span>
                <span className="bg-gray-300 rounded-md ml-2 p-1">City: Delhi </span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex flex-col w-96 p-5 border border-gray-300 rounded-lg absolute bottom-0">
            <div className=" flex items-center">
                <div className="w-10">
                    <img src={profile} alt="profile" />
                </div>
                <div className=" flex flex-col ml-1 ">
                    <div className="flex items-center justify-start">'
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                    <span className="text-gray-800 font-medium">Amit Kapoor &#x2022; 2 months ago</span>
                </div>
            </div>
            <div className="text-left font-medium mt-3">
                <span>Thank You so much for making my friend's day sepcial!!!</span>
            </div>
            <div className="flex mt-2">
                <span className="bg-gray-300 rounded-md p-1">Occasion: Birthday </span>
                <span className="bg-gray-300 rounded-md ml-2 p-1">City: Delhi </span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex flex-col w-96 p-5 border border-gray-300 rounded-lg absolute bottom-0">
            <div className=" flex items-center">
                <div className="w-10">
                    <img src={profile} alt="profile" />
                </div>
                <div className=" flex flex-col ml-1 ">
                    <div className="flex items-center justify-start">'
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                    <span className="text-gray-800 font-medium">Amit Kapoor &#x2022; 2 months ago</span>
                </div>
            </div>
            <div className="text-left font-medium mt-3">
                <span>Thank You so much for making my friend's day sepcial!!!</span>
            </div>
            <div className="flex mt-2">
                <span className="bg-gray-300 rounded-md p-1">Occasion: Birthday </span>
                <span className="bg-gray-300 rounded-md ml-2 p-1">City: Delhi </span>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="flex flex-col w-96 p-5 border border-gray-300 rounded-lg absolute bottom-0">
            <div className=" flex items-center">
                <div className="w-10">
                    <img src={profile} alt="profile" />
                </div>
                <div className=" flex flex-col ml-1 ">
                    <div className="flex items-center justify-start">'
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    </div>
                    <span className="text-gray-800 font-medium">Amit Kapoor &#x2022; 2 months ago</span>
                </div>
            </div>
            <div className="text-left font-medium mt-3">
                <span>Thank You so much for making my friend's day sepcial!!!</span>
            </div>
            <div className="flex mt-2">
                <span className="bg-gray-300 rounded-md p-1">Occasion: Birthday </span>
                <span className="bg-gray-300 rounded-md ml-2 p-1">City: Delhi </span>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default Customer;
