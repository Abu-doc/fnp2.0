import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Dropdown from '../components/Dropdown';
import Filter from '../components/Filter';
import Hero from '../components/Hero';
import GenericHeading from '../components/Gen-Heading';
import Banner from '../components/Banner';
import BestSeller from '../components/BestSeller';
import Customers from '../components/Customers2';
import Recentlly from '../components/Recently2';
import ReadMore from '../components/Read';
import Worldwide from '../components/Worldwide';
import HelpPanel from '../components/Help';
import Bottom from '../components/Bottom';
import Footer from '../components/Finish';
import ProductLists from '../components/ProductContent';

const Generic = () => {
  return (
    <div>
      <Navbar />
      <Dropdown />
      <h3 className="text-left pl-10 mt-3 font-normal text-gray-500 lg-xl:pl-3 md-lg:pl-2">
        Home / Send Flowers Online
      </h3>

      <div className="flex">
        <Filter />
        <div>
          <Hero />
          <GenericHeading />

          {/* ✅ Replace all multiple <Content /> with one dynamic ProductList */}
          <ProductLists />

          {/* You can still keep other sections below */}
          <Banner />
          <BestSeller />
          <Customers />
          <Recentlly />
        </div>
      </div>

      <ReadMore />
      <Worldwide />
      <HelpPanel />
      <Outlet />
      <Bottom />
      <Footer />
    </div>
  );
};

export default Generic;
