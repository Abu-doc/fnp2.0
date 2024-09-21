// CartIcon.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import { FaShoppingCart } from 'react-icons/fa';
import Sidebar from './Sidebar'; // Import the Sidebar component

const CartIcon = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const cartCount = useSelector((state) => state.cart.count); // Get cart count from Redux store

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            <div className="relative flex flex-col items-center justify-evenly ml-8 md-lg:ml-3">
                <div className="relative">
                    <FaShoppingCart 
                        className="text-2xl cursor-pointer" 
                        onClick={toggleSidebar} 
                    />
                    {cartCount > 0 && (
                        <div className="absolute top-[-10px] right-[-10px] bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                            {cartCount}
                        </div>
                    )}
                </div>
                <h3 className="text-sm">Cart</h3>
            </div>
            {isSidebarOpen && <Sidebar onClose={() => setIsSidebarOpen(false)} />}
        </>
    );
};

export default CartIcon;
