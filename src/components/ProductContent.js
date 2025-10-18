import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ProductLists = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fnp-backend.onrender.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log("Error fetching products:", err));
  }, []);

  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden px-2 sm:px-4 md:px-6 mt-5">
      <div className="grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        lg:grid-cols-4 
        gap-4 sm:gap-6 md:gap-8 
        place-items-center">
        
        {products.map((item) => (
          <Link 
            to={`/final/${item._id}`} 
            key={item._id} 
            className="w-full flex justify-center"
          >
            <div className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] 
              border border-gray-200 rounded-lg shadow-md 
              hover:shadow-xl transition-all duration-300 
              bg-white overflow-hidden flex flex-col">
              
              {/* IMAGE SECTION */}
              <div className="relative w-full h-44 sm:h-52 md:h-60 lg:h-64">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-t-lg"
                />
                <div className="flex bg-white bg-opacity-70 p-1 absolute bottom-2 left-2 rounded-xl text-xs sm:text-sm md:text-base">
                  <div className="flex items-center">
                    <span className="text-green-600"><FaStar /></span>
                    <span className="ml-1">4.5</span>
                  </div>
                  <span className="text-gray-600 ml-2">| 2.6K</span>
                </div>
              </div>

              {/* PRODUCT INFO */}
              <div className="p-3 sm:p-4 flex flex-col flex-grow text-center sm:text-left">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold truncate">{item.name}</h3>
                <div className="flex justify-center sm:justify-start items-center mt-1">
                  <h2 className="font-semibold text-base sm:text-lg md:text-xl">₹{item.price}</h2>
                </div>
                <span className="text-blue-600 mt-1 text-xs sm:text-sm md:text-base">
                  Earliest Delivery: Today
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductLists;
