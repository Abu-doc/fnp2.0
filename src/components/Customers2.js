import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import profile from './images/people.png';
import { FaStar } from "react-icons/fa";

const Customer = () => {
  const reviews = [
    { name: "Amit Kapoor", time: "2 months ago", message: "Thank You so much for making my friend's day special!!!", occasion: "Birthday", city: "Delhi" },
    { name: "Rina Sharma", time: "1 month ago", message: "Amazing service and beautiful bouquet!", occasion: "Anniversary", city: "Mumbai" },
    { name: "Karan Singh", time: "3 weeks ago", message: "Highly recommend! Fast delivery.", occasion: "Wedding", city: "Bangalore" },
    { name: "Neha Gupta", time: "1 month ago", message: "Lovely arrangement, prompt delivery!", occasion: "Birthday", city: "Pune" },
    { name: "Rahul Verma", time: "2 weeks ago", message: "Exceeded expectations!", occasion: "Anniversary", city: "Chennai" },
  ];

  return (
    <div className="customer px-4 md:px-8 lg:px-16 py-10 hidden lg:block">
      <h1 className="font-semibold text-3xl text-left mb-6 mt-6">Hear It From Our Customers</h1>
      
      {/* Carousel is hidden below 768px */}
      <div className="hidden lg:block">
        <Splide
          options={{
            perPage: 3,
            perMove: 1,
            gap: '1rem',
            pagination: false,
            arrows: true,
            breakpoints: {
              1200: { perPage: 2 },
              // 768 breakpoint removed because it’s now hidden completely
            },
          }}
        >
          {reviews.map((review, idx) => (
            <SplideSlide key={idx}>
              <div className="flex flex-col w-full max-w-sm p-5 border border-gray-300 rounded-lg mx-auto">
                <div className="flex items-center mb-3">
                  <img src={profile} alt="profile" className="w-12 h-12 rounded-full" />
                  <div className="flex flex-col ml-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                    </div>
                    <span className="text-gray-800 font-medium text-sm">{review.name} &#x2022; {review.time}</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{review.message}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-200 px-2 py-1 rounded-md text-sm">Occasion: {review.occasion}</span>
                  <span className="bg-gray-200 px-2 py-1 rounded-md text-sm">City: {review.city}</span>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Customer;
