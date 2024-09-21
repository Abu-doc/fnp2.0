import React from "react";
import { TbWorldHeart } from "react-icons/tb";
import { MdPayment } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";

const Worldwide = () => {
    return (
        <div>
            <div className="flex items-center justify-evenly h-28 border-t-2">
                <div className="flex items-center justify-evenly">
                    <span className="text-gray-900 font-bold text-4xl top-1 relative">
                    <TbWorldHeart />
                    </span>
                    <div className="flex flex-col ml-2">
                    <span className="text-gray-900  text-left font-bold text-xl">
                    Worldwide Delivery
                    </span>
                    <span className="text-gray-700 text-left">
                    We Deliver gifts to over 70 countries
                    </span>
                    </div>
                </div>
                <div className="flex items-center justify-evenly">
                    <span className="text-gray-900 font-bold text-4xl top-1 relative">
                    < MdPayment />
                    </span>
                    <div className="flex flex-col ml-2">
                    <span className="text-gray-900  text-left font-bold text-xl">
                        100% Safe & Secure Payments
                    </span>
                    <span className="text-gray-700 text-left">
                       Pay using secure payment method
                    </span>
                    </div>
                </div>
                <div className="flex items-center justify-evenly">
                    <span className="text-gray-900 font-bold text-4xl top-1 relative">
                     <RiCustomerService2Line />
                    </span>
                    <div className="flex flex-col ml-2">
                    <span className="text-gray-900  text-left font-bold text-xl">
                        Dedicated Help Center
                    </span>
                    <span className="text-gray-700 text-left">
                        Call Us +91 9212422000 | 8:00AM-10:30PM
                    </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Worldwide;