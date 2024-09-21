// src/CarouselWithMainPic.js
import React, { useState } from 'react';
import SideCrousel from './VerticalSlider';
import Mainpic from './Mainpic';
import roses from './images/roses.jpg';
import roses2 from './images/roses2.jpg';
import roses3 from './images/roses3.jpg';
import roses4 from './images/roses4.jpg';
import roses5 from './images/roses5.jpg';

const images = [roses, roses2, roses3, roses4, roses5];

const CarouselWithMainPic = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    const handleImageSelect = (image) => {
        setSelectedImage(image);
    };

    return (
        <div className="flex">
            <SideCrousel onSelectImage={handleImageSelect} />
            <Mainpic src={selectedImage} />
        </div>
    );
};

export default CarouselWithMainPic;
