import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import { FaEnvelope } from 'react-icons/fa'; // Make sure to install react-icons
import { FaArrowRight } from "react-icons/fa6";

const HelpPanel = () => {
    return (
        <div className="flex justify-around items-start p-6 bg-gray-100">
            {/* Help Panel Content */}
            <div className="flex gap-20 lg-xl:gap-3 md-lg:gap-0">
                {/* POLICY INFO */}
                <ul className="space-y-2">
                    <p className="font-semibold">POLICY INFO</p>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Terms & Conditions</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Privacy & Policy</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Terms of Use</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Disclaimer</Link></li>
                </ul>
                {/* ABOUT COMPANY */}
                <ul className="space-y-2">
                    <p className="font-semibold">ABOUT COMPANY</p>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">About Us</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">FNP Team</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Careers</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Testimonials</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">News Room</Link></li>
                </ul>
                {/* FNP BUSINESS */}
                <ul className="space-y-2">
                    <p className="font-semibold">FNP BUSINESS</p>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Decoration Services</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Corporate Services</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Affiliate Program</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Retail Store</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Franchise</Link></li>
                </ul>
                {/* NEED HELP? */}
                <ul className="space-y-2">
                    <p className="font-semibold">NEED HELP?</p>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Contact Us</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">FAQs</Link></li>
                </ul>
                {/* USEFUL LINKS */}
                <ul className="space-y-2">
                    <p className="font-semibold">USEFUL LINKS</p>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Quotes N Wishes</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Flower Astrology</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Article Hub</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Care Guide</Link></li>
                    <li><Link to="/" className="text-sm text-gray-700 hover:text-orange-600">Blog</Link></li>
                </ul>
                <ul className="space-y-2">
                    <p className="font-semibold">Subscribe Now</p>
                    <li><Link to="/" className="text-sm text-gray-700 ">Get updates on promotions and offers coupons.</Link></li>
                    <form className="relative flex items-center w-50">
                    <FaEnvelope className="absolute text-gray-500 text-lg ml-3 pointer-events-none" />
                    <input
                        type="email"
                        placeholder="Enter Email address"
                        className="pl-10 pr-4 py-2 border rounded-md focus:outline-none w-80"
                    />
                    <FaArrowRight className='absolute text-gray-600 text-lg left-72 cursor-pointer' />
                </form>

                </ul>


            </div>

          
        </div>
    );
};

export default HelpPanel;
