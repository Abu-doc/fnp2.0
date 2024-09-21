// src/SideCrousel.js
import React, { useRef, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './styles.css';

// Import your images
import roses from './images/roses.jpg';
import roses2 from './images/roses2.jpg';
import roses3 from './images/roses3.jpg';
import roses4 from './images/roses4.jpg';
import roses5 from './images/roses5.jpg';
import roses6 from './images/roses6.jpg';
import roses7 from './images/roses7.jpg';
import roses8 from './images/roses8.jpg';

// Define the list of images
const images = [roses, roses2, roses3, roses4, roses5, roses6, roses7, roses8];

const SideCrousel = ({ onSelectImage, selectedImage }) => {
    const splideRef = useRef(null);

    useEffect(() => {
        const splideInstance = splideRef.current.splide;
        
        // Update selected image on move
        splideInstance.on('moved', (newIndex) => {
            const newImage = images[newIndex];
            onSelectImage(newImage);
        });

        return () => {
            splideInstance.off('moved');
        };
    }, [onSelectImage]);

    return (
        <div className="vertical-slide Customer sticky top-0">
            <Splide
                ref={splideRef}
                options={{
                    direction: 'ttb',
                    height: '440px',
                    perPage: 5,
                    perMove: 1,
                    pagination: true,
                    arrows: true,
                    autoplay: false,
                    interval: 3000,
                    speed: 600,
                }}
            >
                {images.map((image, index) => (
                    <SplideSlide key={index} onClick={() => onSelectImage(image)}>
                        <div
                            className={`rosess ${selectedImage === image ? 'border-black border-2 rounded-lg' : ''}`}
                        >
                            <img
                                src={image}
                                alt={`slide ${index}`}
                                className='rounded-lg cursor-pointer'
                            />
                        </div>
                    </SplideSlide>
                ))}
            </Splide>
        </div>
    );
};

export default SideCrousel;
