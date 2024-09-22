import React  from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import Splide CSS
import blackpink from './images/blackpink.jpg'
import bts from './images/bts.png'
import exo from './images/EXO.png'
import twice from './images/TWICE.png'
import shinee from './images/SHINee.png'
import redv from './images/Red-Velvet.png'
import mamamoo from './images/MAMAMOO.png'
import itzy from './images/Itzy.png'
import aespa from './images/Aespa.png'
import gidle from './images/(G)I-DLE.png'
import seventeen from './images/Seventeen.png'
import got7 from './images/GOT7.png'
import twone1 from './images/2ne1.png'
import lesserafim from './images/LE_SSERAFIM.jpg'
import skz from './images/skz.jpg'
import babym from './images/babymonster.jpg'
import nmixx from './images/nmixx.jpg'
import everglow from './images/everglow.jpg'
import './styles.css';












const Stories = () => {

   
            
    return (
        <div className="recent px-16 mt-7">
            <Splide
                options={{
                    type: 'loop', // Enables infinite scrolling
                    perPage: 10,
                    
                    gap: '1rem',
                    pagination: false,
                    arrows: false, // Hide arrows to make it look like a seamless loop
                    drag: false, // Disable drag to avoid interruption
                    speed: 0, // No transition speed (handled by CSS)
                    breakpoints: {
                        1200: {
                            perPage: 2,
                        },
                        768: {
                            perPage: 1,
                        },
                    },
                }}
                className="flow-carousel"
                
            >
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={blackpink} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">All Flowers</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={bts} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">Luxe</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={itzy} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">Anniversaries</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={twice} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">Birthdays</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={shinee} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-2">Lillies</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={aespa} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">Roses</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={redv} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">Combos</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={seventeen} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">BestSeller</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={gidle} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">Carnations</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={exo} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">International</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={twone1} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">All Flowers</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={mamamoo} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">All Flowers</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={got7} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">All Flowers</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={lesserafim} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">All Flowers</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={skz} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">All Flowers</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={everglow} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">All Flowers</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={babym} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">All Flowers</span>
                    </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className=" w-24 rounded-full   cursor-pointer">
                    <div className="flex flex-col items-center justify-center">
                        <img src={nmixx} alt="dummy" className="w-24 rounded-full h-full" />
                        <span className="font-medium mt-1">All Flowers</span>
                    </div>
                    </div>
                </SplideSlide>
            </Splide>
           
        </div>
    );
}

export default Stories;
