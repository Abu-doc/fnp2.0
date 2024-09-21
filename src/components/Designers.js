import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

// Import images
import designerImage from './images/lovenextdoor.jpg'; 
import queen from './images/QOt.jpg'; 
import lovely from './images/lovelyrunner.jpg'; 
import mydemon from './images/demon.jpg'; 
import twinkling from './images/twinkling.jpg'; 
import trruee from './images/true.jpg'; 
import business from './images/bussiness.jpg'; 
import twentyfive from './images/twentyfive.jpg'; 
import doctor from './images/doctor.jpg'; 
import itsokay from './images/itsokay.jpg'; 
import strong from './images/strong.jpg'; 
import kim from './images/kim.jpg'; 
import hospital from './images/hospital.jpg'; 
import itaewon from './images/itaewon.jpg'; 
import reply from './images/reply.jpg'; 
import crash from './images/crash.jpg'; 
import sun from './images/sun.jpg'; 
import squid from './images/squid.jpg'; 
import hometown from './images/hometown.jpg'; 
import vincenzo from './images/vincenzo.jpg'; 
import summer from './images/summer.jpg'; 
import guardian from './images/guardian.jpg';

import './styles.css';

const slides = [
  { src: designerImage, alt: "Designer", title: "Love Next Door", description: "Hand font underline variant underline roatate" },
  { src: queen, alt: "Queen", title: "Queen Of Tears", description: "Hand font underline variant underline roatate" },
  { src: lovely, alt: "Lovely Runner", title: "Lovely Runner", description: "Hand font underline variant underline roatate" },
  { src: twentyfive, alt: "twentyfive", title: "Twenty-Five Twenty-One", description: "Hand font underline variant underline roatate" },
  { src: mydemon, alt: "My Demon", title: "My Demon", description: "Hand font underline variant underline roatate" },
  { src: twinkling, alt: "Twinkling", title: "Twinkling Watermelon", description: "Hand font underline variant underline roatate" },
  { src: trruee, alt: "TruEe", title: "True Beauty", description: "Hand font underline variant underline roatate" },
  { src: business, alt: "Business", title: "Business Proposal", description: "Hand font underline variant underline roatate" },
  { src: doctor, alt: "Doctor", title: "Doctor Slump", description: "Hand font underline variant underline roatate" },
  { src: itsokay, alt: "It's Okay", title: "It's Okay to Not Be Okay", description: "Hand font underline variant underline roatate" },
  { src: kim, alt: "Kim", title: "What's Wrong with Secretary Kim", description: "Hand font underline variant underline roatate" },
  { src: hospital, alt: "Hospital", title: "Hospital Playlist", description: "Hand font underline variant underline roatate" },
  { src: itaewon, alt: "Itaewon", title: "Itaewon Class", description: "Hand font underline variant underline roatate" },
  { src: strong, alt: "strong", title: "Strong Girl Bong-soon", description: "Hand font underline variant underline roatate" },
  { src: reply, alt: "Reply", title: "Reply 1988", description: "Hand font underline variant underline roatate" },
  { src: crash, alt: "Crash", title: "Crash Landing On You", description: "Hand font underline variant underline roatate" },
  { src: sun, alt: "Sun", title: "Descendants of the Sun", description: "Hand font underline variant underline roatate" },
  { src: squid, alt: "Squid", title: "Squid Game", description: "Hand font underline variant underline roatate" },
  { src: hometown, alt: "Hometown", title: "Hometown Cha-Cha-Cha", description: "Hand font underline variant underline roatate" },
  { src: vincenzo, alt: "Vincenzo", title: "Vincenzo", description: "Hand font underline variant underline roatate" },
  { src: summer, alt: "Summer", title: "Our Beloved Summer", description: "Hand font underline variant underline roatate" },
  { src: guardian, alt: "Guardian", title: "Guardian", description: "Hand font underline variant underline roatate" },
];

const DesignersPick = () => {
  return (
    <div className="py-0 px-4 flex flex-col">
      <h1 className="text-gray-600 mt-6 mb-12 text-3xl  font-semibold font-serif text-center">Designer's Picks</h1>
      <Splide
        options={{
          perPage    : 4,
          perMove    : 1,
          pagination : false,
          arrows     : true,
          cover      : true,
          breakpoints: {
            768: {
              perPage: 2,
            },
            480: {
              perPage: 1,
            },
          },
        }}
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col items-center">
              <div className="bg-violet-500 rounded-xl overflow-hidden w-[270px] h-[408px] border">
                <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover cursor-pointernp" />
              </div>
              <div className="mt-3 text-center">
                <h3 className="text-gray-800 mt-1 text-lg font-serif font-semibold">{slide.title}</h3>
                <h4 className="text-gray-600 mt-1 text-sm font-serif font-medium">{slide.description}</h4>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default DesignersPick;
