import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import the Splide CSS
import hero1 from './images/hero1.jpg'
import choco from './images/chocolate.jpg'
import birthday from './images/birthday.jpg'
import flower from './images/flowes.jpg'
import diwali from './images/diwaliii.jpg'

const Hero = () => {
  return (
    <div className="h-72 mr-16 hidden lg:block"> {/* hidden on <1024px */}
      <Splide
        options={{
          type       : 'fade',   
          pagination : false,    
          arrows     : true,     
          autoplay   : true,     
          interval   : 3000,    
          pauseOnHover: true,   
          speed      : 600,      
          rewind     : true,
        }}
      >
        <SplideSlide>
          <img src={diwali} alt="Slide 4" className='w-full h-full object-cover rounded-lg' />
        </SplideSlide>
        <SplideSlide>
          <img src={choco} alt="Slide 2" className='w-full h-full object-cover rounded-lg' />
        </SplideSlide>
        <SplideSlide>
          <img src={birthday} alt="Slide 3" className='w-full h-full object-cover rounded-lg' />
        </SplideSlide>
        <SplideSlide>
          <img src={flower} alt="Slide 4" className='w-full h-full object-cover rounded-lg' />
        </SplideSlide>
        <SplideSlide>
          <img src={hero1} alt="Slide 1" className='w-full h-full object-cover rounded-lg' />
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Hero;
