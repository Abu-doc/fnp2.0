import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from './cartSlice';
import { IoCartSharp } from 'react-icons/io5';
import { FaCartArrowDown } from 'react-icons/fa';

const Buy = ({ product }) => { // <-- receive product as prop
    const dispatch = useDispatch();
    const [notification, setNotification] = useState(false);

    const handleAddToCart = () => {
        // Add the real product to cart
        const item = { ...product, quantity: 1 };
        dispatch(addToCart(item));
        triggerNotification();
    };

    const triggerNotification = () => {
        setNotification(true);
        setTimeout(() => setNotification(false), 3000);
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

            {notification && (
                <div className="fixed top-10 right-10 bg-black text-white p-3 rounded-lg shadow-lg animate-fade-in">
                    <h4 className="text-sm font-semibold">Item added to cart!</h4>
                </div>
            )}
        </div>
    );
};

export default Buy;
