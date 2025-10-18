import React from "react";
import Navbar from "../components/Navbar";
import { FaBoxOpen, FaMapMarkerAlt, FaCreditCard, FaHeart, FaTruck, FaSignOutAlt } from "react-icons/fa";
import akaza from "../components/images/Akaza.jpg"

const Profile = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar at the top */}
      <Navbar />

      {/* Profile Header */}
      <div className="flex flex-col items-center mt-8 px-4">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-500 shadow-md">
          <img
            src={akaza}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">Abu Bakar</h2>
        <p className="text-gray-500 text-sm">abubakar@example.com</p>
      </div>

      {/* Quick Action Section */}
      <div className="mt-10 max-w-3xl mx-auto px-4 space-y-6">
        {/* My Orders */}
        <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center space-x-4">
            <FaBoxOpen className="text-green-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">My Orders</h3>
              <p className="text-gray-500 text-sm">View and manage all your orders</p>
            </div>
          </div>
        </div>

        {/* Track Shipment */}
        <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center space-x-4">
            <FaTruck className="text-green-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Track Shipment</h3>
              <p className="text-gray-500 text-sm">Track your package in real-time</p>
            </div>
          </div>
        </div>

        {/* Manage Addresses */}
        <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-green-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Manage Addresses</h3>
              <p className="text-gray-500 text-sm">Add or edit your shipping addresses</p>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center space-x-4">
            <FaCreditCard className="text-green-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Payment Methods</h3>
              <p className="text-gray-500 text-sm">Manage cards, UPI, and wallets</p>
            </div>
          </div>
        </div>

        {/* Wishlist */}
        <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-between hover:shadow-lg transition cursor-pointer">
          <div className="flex items-center space-x-4">
            <FaHeart className="text-green-600 text-2xl" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Wishlist</h3>
              <p className="text-gray-500 text-sm">View your saved products</p>
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-10 text-center">
        <button className="bg-red-500 text-white py-2 px-6 rounded-full flex items-center mx-auto hover:bg-red-600 transition">
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-400 text-sm">
        © 2025 Ferns N Petals. All Rights Reserved.
      </div>
    </div>
  );
};

export default Profile;
