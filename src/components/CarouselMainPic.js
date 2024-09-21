// src/CarouselWithMainPic.js
import React, { useState, useEffect } from 'react';
import SideCrousel from './SideCrousel';
import Mainpic from './Mainpic';
import roses from './images/roses.jpg';
import roses2 from './images/roses2.jpg';
import roses3 from './images/roses3.jpg';
import roses4 from './images/roses4.jpg';
import roses5 from './images/roses5.jpg';
import roses6 from './images/roses6.jpg';
import roses7 from './images/roses7.jpg';
import roses8 from './images/roses8.jpg';
import './styles.css';

const images = [roses, roses2, roses3, roses4, roses5, roses6, roses7, roses8];

const CarouselWithMainPic = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [isSticky, setIsSticky] = useState(true);

    const handleImageSelect = (image) => {
        setSelectedImage(image);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY < 400);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`transition ${isSticky ? 'sticky' : 'relative'} bg-white p-4`}>
            <div className="flex sticky top-0">
                <SideCrousel
                    onSelectImage={handleImageSelect}
                    selectedImage={selectedImage}
                />
                <Mainpic src={selectedImage} />
            </div>
        </div>
    );
};

export default CarouselWithMainPic;
