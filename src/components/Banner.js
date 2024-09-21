import React from "react";
import Banner7 from './images/Banner.jpg';

const Banner = () => {
    return (
        <div 
            className="border border-gray-200 w-90 rounded-lg cursor-pointer"
            style={{ 
                backgroundImage: `url(${Banner7})`,
                backgroundSize: 'cover',  // Ensures the image covers the entire div
                backgroundPosition: 'center', // Centers the image within the div
                backgroundRepeat: 'no-repeat', // Prevents the image from repeating
                height: 'auto', // Adjust the height as needed or use a fixed height
            }}
        >
            {/* Content inside the banner can go here */}
        </div>
    );
};

export default Banner;
