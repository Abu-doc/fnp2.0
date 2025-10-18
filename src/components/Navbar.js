import React from "react";
import fnp1 from './images/fnp1.png';
import { MdNotListedLocation } from "react-icons/md";
import { FaSearch, FaTruck, FaRupeeSign, FaRegBell } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { CiSquareMore } from "react-icons/ci";
import CartIcon from './CartIcon'; 
import './styles.css';
import { Link } from 'react-router-dom';

const Navbar = ({ onMoreClick }) => {
  return (
    <nav className="navbar flex flex-wrap items-center justify-between px-4 py-2 border-b-2">
      {/* Left: Logo + Location */}
      <div className="flex items-center flex-shrink-0">
        <Link to="/">
          <img 
            src={fnp1} 
            alt="fnp" 
            className="w-28 sm:w-32 md:w-36 lg:w-40 cursor-pointer"
          />
        </Link>
        <div className="hidden sm:flex items-center ml-3">
          <MdNotListedLocation className="text-xl sm:text-2xl text-gray-700" />
          <div className="ml-1 text-sm sm:text-base">
            <h3 className="leading-tight">Where To Deliver?</h3>
            <select name="location" className="text-red-600 text-xs sm:text-sm">
              <option value="location-drop">Location Missing</option>
            </select>
          </div>
        </div>
      </div>

      {/* Center: Search */}
      <div className="w-full sm:w-auto mt-2 sm:mt-0 sm:mx-4 flex justify-center">
        <div className="flex items-center border border-black rounded-lg bg-gray-100 w-full sm:w-64 md:w-80 lg:w-96">
          <button type="button" className="text-lg ml-2">
            <FaSearch />
          </button>
          <input
            type="search"
            placeholder="What are you looking for?"
            className="flex-1 h-9 md:h-11 px-2 bg-gray-100 border-none rounded-lg text-sm md:text-base"
          />
        </div>
      </div>

      {/* Right: Icons */}
      <div className="hidden sm:flex items-center space-x-4 md:space-x-6 text-xs sm:text-sm md:text-base">
        {/* Same Day */}
        <div className="flex flex-col items-center">
          <FaTruck className="text-lg sm:text-xl" />
          <h3>Same Day</h3>
        </div>

        {/* Currency */}
        <div className="flex flex-col items-center">
          <FaRupeeSign className="text-lg sm:text-xl" />
          <h3>INR</h3>
        </div>

        {/* Reminder */}
        <div className="flex flex-col items-center">
          <FaRegBell className="text-lg sm:text-xl" />
          <h3>Reminder</h3>
        </div>

        {/* Cart */}
        <CartIcon />

        {/* Profile Icon (Now links to profile page) */}
        <Link to="/generic/profile" className="flex flex-col items-center hover:text-green-600 transition">
          <RiAdminLine className="text-lg sm:text-xl" />
          <h3>Abhishek</h3>
        </Link>

        {/* More Button (Triggers Sidebar) */}
        <div 
          className="flex flex-col items-center cursor-pointer hover:text-green-600 transition"
          onClick={onMoreClick}
        >
          <CiSquareMore className="text-lg sm:text-xl" />
          <h3>More</h3>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
