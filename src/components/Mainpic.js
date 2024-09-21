// src/Mainpic.js
import React, { useState, useEffect } from 'react';
import './styles.css';

const Mainpic = ({ src }) => {
    const [className, setClassName] = useState('fade-in');

    useEffect(() => {
        // Trigger fade-out effect before changing image
        setClassName('fade-out');
        const timer = setTimeout(() => {
            setClassName('fade-in');
        }, 300); // Match this duration with the CSS transition duration

        return () => clearTimeout(timer);
    }, [src]);

    return (
        <div className="mainpic-container w-128 ml-6 mt-3 rounded-lg lg-xl:w-96 md-lg:w-72">
            <img
                src={src}
                alt="Selected"
                className={`mainpic-image ${className}`}
            />
        </div>
    );
};

export default Mainpic;
