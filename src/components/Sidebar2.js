import React from "react";
import { FaTimes, FaUser, FaTags, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const MoreSidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-72 bg-white text-gray-800 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out 
      ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-green-600">More Options</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-red-500 transition-colors duration-200"
        >
          <FaTimes size={20} />
        </button>
      </div>

      {/* Menu Items */}
      <div className="p-4 space-y-4">
        {/* Deals */}
        <Link
          to="/generic/deals"
          onClick={onClose}
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
        >
          <FaTags className="text-green-600" />
          <span className="font-medium">Today's Deals</span>
        </Link>

        {/* Profile - Updated Path */}
        <Link
          to="/profile"
          onClick={onClose}
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
        >
          <FaUser className="text-green-600" />
          <span className="font-medium">Your Profile</span>
        </Link>

        {/* About Us */}
        <Link
          to="/generic/about"
          onClick={onClose}
          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
        >
          <FaInfoCircle className="text-green-600" />
          <span className="font-medium">About Us</span>
        </Link>
      </div>

      {/* Footer / Branding */}
      <div className="absolute bottom-4 left-0 w-full text-center text-xs text-gray-400">
        © 2025 Ferns N Petals
      </div>
    </div>
  );
};

export default MoreSidebar;
