import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; // Only import these for route handling, not Router itself
import Navbar from '../components/Navbar';
import Dropdown from '../components/Dropdown';
import Matter from '../components/Matter';
import Customer from '../components/Customers';
import Recent from '../components/Recently';
import Like from '../components/Like';
import Others from '../components/Others';
import Trust from '../components/Trust';
import ReadMore from '../components/Read';
import Worldwide from '../components/Worldwide';
import HelpPanel from '../components/Help';
import CarouselWithMainPic from '../components/CarouselMainPic';

function Final() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleComboSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="Final">
      <Navbar />
      {/* Main content */}
      <Routes>
        <Route path="/" element={<Dropdown />} />
        {/* Add other routes here if needed */}
      </Routes>
      <h3 className='text-left pl-36 mt-3 font-normal text-gray-500 lg-xl:pl-3 md-lg:pl-2'>Home/Flowers/Send Flower Online</h3>
      <div className='flex'>
        <CarouselWithMainPic selectedImage={selectedImage} />
        <Matter onComboSelect={handleComboSelect} />
      </div>
      <Customer />
      <Recent />
      <Like />
      <Others />
      <Trust />
      <ReadMore />
      <Worldwide />
      <HelpPanel />
    </div>
  );
}

export default Final;
