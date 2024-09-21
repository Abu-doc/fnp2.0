// Navbar.js
import React from "react";
import fnp1 from './images/fnp1.png';
import { MdNotListedLocation } from "react-icons/md";
import { FaSearch, FaTruck, FaRupeeSign, FaRegBell } from "react-icons/fa";
import { RiAdminLine } from "react-icons/ri";
import { CiSquareMore } from "react-icons/ci";
import CartIcon from './CartIcon'; // Import CartIcon
import './styles.css';

const Navbar = () => {

    return (
        <nav className="navbar flex items-center justify-around mt-2 border-b-2">
            <div className="navbar-left flex justify-between">
                <img src={fnp1} alt="fnp" className="w-40 mr-9 lg-xl:w-36 lg-xl:mr-0 md-lg:w-20 md-lg:mr-0" />
                <div className="direction flex justify-center items-center">
                    <div className="direction-1 text-2xl text-gray-700 lg-xl:text-xl md-lg:text-lg ">
                        <MdNotListedLocation />
                    </div>
                    <div className="direction-2 lg-xl:text-sm  md-lg:text-sm">
                        <h3>Where To Deliver?</h3>
                        <select name="location" className="text-red-600">
                            <option value="location-drop">Location Missing</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="navbar-center flex items-center">
                <div className="searchbar flex content-between items-center border border-black rounded-lg bg-gray-100">
                    <div className="bg-gray-100">
                        <button type="button" id="search" className="search text-xl text-op font-thin ml-1">
                            <FaSearch />
                        </button>
                    </div>
                    <div className="text">
                        <input
                            type="search"
                            placeholder="What are you looking for?"
                            id="header-search-input"
                            className="w-128 h-11 lg-xl:w-40 md-lg:w-32 md-lg:h-9 border-none bg-gray-100 ml-3 rounded-lg"
                        />
                    </div>
                </div>
            </div>
            <div className="navbar-right flex items-center justify-around cursor-pointer md-lg:text-sm">
                <div className="flex flex-col items-center justify-evenly ml-1">
                    <div className="text-2xl">
                        <FaTruck />
                    </div>
                    <h3>Same Day</h3>
                </div>
                <div className="flex flex-col items-center justify-evenly ml-8 md-lg:ml-3">
                    <div className="text-2xl">
                        <FaRupeeSign />
                    </div>
                    <h3>INR</h3>
                </div>
                <div className="flex flex-col items-center justify-evenly ml-8 md-lg:ml-3">
                    <div className="text-2xl">
                        <FaRegBell />
                    </div>
                    <h3>Reminder</h3>
                </div>
                <CartIcon /> {/* Use CartIcon here */}
                <div className="flex flex-col items-center justify-evenly ml-8 md-lg:ml-3">
                    <div className="text-2xl">
                        <RiAdminLine />
                    </div>
                    <h3>Abhishek</h3>
                </div>
                <div className="flex flex-col items-center justify-evenly ml-8 md-lg:ml-3 mr-4">
                    <div className="text-2xl">
                        <CiSquareMore />
                    </div>
                    <h3>More</h3>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
