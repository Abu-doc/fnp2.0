import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { addToCart } from './cartSlice'; // Import addToCart action
import { IoCartSharp } from 'react-icons/io5';
import { FaCartArrowDown } from 'react-icons/fa';

const Buy = () => {
    const dispatch = useDispatch(); // Initialize dispatch
    const [notification, setNotification] = useState(false); // Notification state

    const handleAddToCart = () => {
        const item = { name: 'Example Item', quantity: 1 }; // Replace with actual item data
        dispatch(addToCart(item));
        triggerNotification(); // Show notification on add to cart
    };

    const triggerNotification = () => {
        setNotification(true); // Show notification
        setTimeout(() => {
            setNotification(false); // Hide notification after 3 seconds
        }, 3000);
    };

    return (
        <div>
            <div className="flex items-center justify-evenly">
                <div
                    className="flex items-center justify-center border border-custom-green w-64 h-10 text-lg rounded-lg cursor-pointer lg-xl:w-52 md-lg:w-36"
                    onClick={handleAddToCart}
                >
                    <span className="text-custom-green">
                        <IoCartSharp />
                    </span>
                    <h4 className="text-custom-green font-semibold ml-2">Add To Cart</h4>
                </div>
                <div
                    className="flex items-center justify-center border bg-custom-green border-custom-green w-64 h-10 text-lg rounded-lg cursor-pointer lg-xl:w-52 md-lg:w-36"
                >
                    <span className="text-white">
                        <FaCartArrowDown />
                    </span>
                    <h4 className="text-white font-semibold ml-2">Buy Now</h4>
                </div>
            </div>

            {/* Notification pop-up */}
            {notification && (
                <div className="fixed top-10 right-10 bg-black text-white p-3 rounded-lg shadow-lg animate-fade-in">
                    <h4 className="text-sm font-semibold">Item added to cart!</h4>
                </div>
            )}
        </div>
    );
};

export default Buy;
