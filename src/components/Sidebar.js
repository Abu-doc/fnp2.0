// Sidebar.js
import React from 'react';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import { FaTimes } from 'react-icons/fa'; // Import close icon

const Sidebar = ({ onClose }) => {
    const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux store

    // Ensure cartItems is an array and filter out any undefined or invalid items
    const validCartItems = Array.isArray(cartItems) ? cartItems.filter(item => item && item.name) : [];

    return (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold">Your Cart</h2>
                <button onClick={onClose} className="text-gray-500">
                    <FaTimes />
                </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
                {/* Render cart items here */}
                {validCartItems.length === 0 ? (
                    <p className="text-center">Your cart is empty.</p>
                ) : (
                    <ul>
                        {validCartItems.map((item, index) => (
                            <li key={index} className="py-2 border-b">
                                {item.name} - {item.quantity}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            <div className="p-4 border-t">
                <button className="w-full bg-green-500 text-white py-2 rounded">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
