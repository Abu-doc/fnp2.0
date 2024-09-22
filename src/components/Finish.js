import React from "react";
import { FaFacebook, FaTwitter, FaPinterest, FaInstagram } from "react-icons/fa"; // Import FontAwesome icons
import visa from './images/visa.png';
import maestro from './images/maestro.png';
import mastercard from './images/mastercard.png';
import paytm from './images/paytm.png';
import paypal from './images/paypal.png';

const Footer = () => {
  return (
    <div className="last-footer bg-gray-800 text-white font-medium text-sm flex justify-between items-center px-9 py-2 max-w-[1600px] mx-auto relative">
      <span>© 1994-2024 fnp.com. All rights reserved.</span>
      <div className="keep-in-touch flex items-center">
        <span id="keepintouch" className="mr-2">Keep in Touch</span>
        
        {/* Social media icons */}
        <FaFacebook className="mx-1 p-2 rounded-full text-4xl cursor-pointer" aria-label="Facebook" />
        <FaTwitter className="mx-1 p-2 rounded-full text-4xl cursor-pointer" aria-label="Twitter" />
        <FaPinterest className="mx-1 p-2 rounded-full text-4xl cursor-pointer" aria-label="Pinterest" />
        <FaInstagram className="mx-1 p-2 rounded-full text-4xl cursor-pointer" aria-label="Instagram" />
        
      </div>
      <div className="payment-icons flex items-center">
        <img className="ml-1 w-7 h-7" src={visa} alt="Visa" />
        <img className="ml-1 w-7 h-7" src={maestro} alt="Maestro" />
        <img className="ml-1 w-7 h-7" src={mastercard} alt="Mastercard" />
        <img className="ml-1 w-7 h-7" src={paytm} alt="Paytm" />
        <img className="ml-1 w-7 h-7" src={paypal} alt="Paypal" />
      </div>
    </div>
  );
};

export default Footer;
