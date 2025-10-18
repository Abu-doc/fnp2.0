import React from "react";
import { FaStar } from "react-icons/fa";

const GenericHeading = () => {
  return (
    <div className="flex flex-wrap justify-between items-center px-4 py-3 gap-3">
      
      {/* Left section */}
      <div className="flex flex-wrap items-center gap-2">
        <h1 className="font-bold" style={{ fontSize: 'clamp(1.2rem, 4vw, 2.5rem)' }}>
          Send Flowers Online
        </h1>
        <span className="text-gray-500" style={{ fontSize: 'clamp(0.8rem, 2vw, 1.2rem)' }}>
          36 of 271 Gifts
        </span>
        <span style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}>|</span>
        <div className="flex items-center border rounded px-2 py-1">
          <span className="text-green-500"><FaStar /></span>
          <span style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }} className="ml-1">4.5</span>
        </div>
        <select 
          className="border rounded px-2 py-1 ml-2"
          style={{ fontSize: 'clamp(0.7rem, 2vw, 1rem)' }}
        >
          <option value="reviews">84577 Reviews</option>
        </select>
      </div>

      {/* Right section */}
      <select 
        className="border rounded px-2 py-1 mt-2 sm:mt-0"
        style={{ fontSize: 'clamp(0.7rem, 2vw, 1rem)' }}
      >
        <option value="sort">Sort by: Recommended</option>
      </select>

    </div>
  );
};

export default GenericHeading;
