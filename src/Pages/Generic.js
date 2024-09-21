// src/Pages/Generic.js
import React from 'react';
import { Outlet } from 'react-router-dom'; // This will render the `Final` component based on the route
import Navbar from '../components/Navbar';
import Dropdown from '../components/Dropdown';
import Filter from '../components/Filter';
import Hero from '../components/Hero';
import GenericHeading from '../components/Gen-Heading';
import Content from '../components/Content';
import Banner from '../components/Banner';
import BestSeller from '../components/BestSeller';
import Customer2 from '../components/Customers2';
import Recentlly from '../components/Recently2';
import ReadMore from '../components/Read';
import Worldwide from '../components/Worldwide';
import HelpPanel from '../components/Help';

const Generic = () => {
  return (
    <div>
      <Navbar />
      <Dropdown />
      <h3 className='text-left pl-10 mt-3 font-normal text-gray-500 lg-xl:pl-3 md-lg:pl-2'>Home/Send Flowers Online</h3>
      <div className='flex'>
      <Filter />
      <div>
      <Hero />
      <GenericHeading />
      <div className='flex justify-between mr-16 mt-5'>
      <Content />
      <Content />
      <Banner />
      </div>
      <div className='flex justify-between mr-16 mt-5'>
      <BestSeller />
      <Content />
      <Content />
      </div>
      <div className='flex justify-between mr-16 mt-5'>
      <BestSeller />
      <Content />
      <Content />
      </div>
      <Customer2 />
      <div className='flex justify-between mr-16 mt-5'>
      <Content />
      <Content />
      <Content />
      </div>
      <div className='flex justify-between mr-16 mt-5'>
      <Content />
      <Banner />
      <Content />
      </div>
      <Recentlly />
      </div>
      </div>
      <ReadMore />
      <Worldwide />
      <HelpPanel />
      <Outlet />
    </div>
  );
};

export default Generic;
