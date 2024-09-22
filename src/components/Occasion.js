import React from 'react';
import birthday from './images/birthday-content.jpg';
import diwali from './images/Diwali_3.jpg';
import anniversary from './images/anniversary.jpg';
import housewarming from './images/housewarming.jpg';
import loveu from './images/love u.jpg';
import wedding from './images/wedding.jpg';
import farewell from './images/farewell.jpg';
import condolences from './images/condolences.jpg';
import wellsoon from './images/wellsoon.jpg';
import miss from './images/miss.jpg';
import sorry from './images/sorry.jpg';
import thanku from './images/thankyou.jpg';
import { Link } from 'react-router-dom';

const ChooseOccasion = () => {
  return (
    <div className="relative px-5 bg-[#f7f2ec] mt-16 p-5">
      <h1 className="text-center text-3xl font-bold text-gray-600 my-4">
        Flowers For Every Occasion
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 mt-10 ml-4">
        <Link to="/generic/birthday">
          <div className="relative flex items-end justify-start rounded-2xl h-[200px] cursor-pointer overflow-hidden">
            <img src={birthday} alt="Birthday" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 bg-[rgba(57,56,56,0.5)] shadow-md backdrop-blur-sm border border-[rgba(255,255,255,0.03)] flex items-center justify-start w-full h-[40px] rounded-b-2xl z-10">
              <h3 className="text-white text-lg font-bold pl-4">Birthday</h3>
            </div>
          </div>
        </Link>

        <Link to="/generic/diwali">
          <div className="relative flex items-end justify-start rounded-2xl h-[200px] cursor-pointer overflow-hidden">
            <img src={diwali} alt="Celebrations" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 bg-[rgba(57,56,56,0.5)] shadow-md backdrop-blur-sm border border-[rgba(255,255,255,0.03)] flex items-center justify-start w-full h-[40px] rounded-b-2xl z-10">
              <h3 className="text-white text-lg font-bold pl-4">Celebrations</h3>
            </div>
          </div>
        </Link>

        <Link to="/generic/anniversary">
          <div className="relative flex items-end justify-start rounded-2xl h-[200px] cursor-pointer overflow-hidden">
            <img src={anniversary} alt="Anniversary" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 bg-[rgba(57,56,56,0.5)] shadow-md backdrop-blur-sm border border-[rgba(255,255,255,0.03)] flex items-center justify-start w-full h-[40px] rounded-b-2xl z-10">
              <h3 className="text-white text-lg font-bold pl-4">Anniversary</h3>
            </div>
          </div>
        </Link>

        <Link to="/generic/housewarming">
          <div className="relative flex items-end justify-start rounded-2xl h-[200px] cursor-pointer overflow-hidden">
            <img src={housewarming} alt="Housewarming" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 bg-[rgba(57,56,56,0.5)] shadow-md backdrop-blur-sm border border-[rgba(255,255,255,0.03)] flex items-center justify-start w-full h-[40px] rounded-b-2xl z-10">
              <h3 className="text-white text-lg font-bold pl-4">Housewarming</h3>
            </div>
          </div>
        </Link>

        <Link to="/generic/loveu">
          <div className="relative flex items-end justify-start rounded-2xl h-[200px] cursor-pointer overflow-hidden">
            <img src={loveu} alt="I Love You" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 bg-[rgba(57,56,56,0.5)] shadow-md backdrop-blur-sm border border-[rgba(255,255,255,0.03)] flex items-center justify-start w-full h-[40px] rounded-b-2xl z-10">
              <h3 className="text-white text-lg font-bold pl-4">I Love You</h3>
            </div>
          </div>
        </Link>

        <Link to="/generic/wedding">
          <div className="relative flex items-end justify-start rounded-2xl h-[200px] cursor-pointer overflow-hidden">
            <img src={wedding} alt="Wedding" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 bg-[rgba(57,56,56,0.5)] shadow-md backdrop-blur-sm border border-[rgba(255,255,255,0.03)] flex items-center justify-start w-full h-[40px] rounded-b-2xl z-10">
              <h3 className="text-white text-lg font-bold pl-4">Wedding</h3>
            </div>
          </div>
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 ml-3 mb-8">
        <Link to="/generic/farewell">
          <div className="relative flex items-end justify-start rounded-lg h-[180px] cursor-pointer overflow-hidden">
            <img src={farewell} alt="Farewell" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 bg-[rgba(57,56,56,0.5)] shadow-md backdrop-blur-sm border border-[rgba(255,255,255,0.03)] flex items-center justify-start w-full h-[40px] rounded-b-lg z-10">
              <h3 className="text-white text-base font-bold pl-4">Farewell</h3>
            </div>
          </div>
        </Link>

        <Link to="/generic/thankyou">
          <div className="relative flex items-end justify-start rounded-lg h-[180px] cursor-pointer overflow-hidden">
            <img src={thanku} alt="Thank You" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 bg-[rgba(57,56,56,0.5)] shadow-md backdrop-blur-sm border border-[rgba(255,255,255,0.03)] flex items-center justify-start w-full h-[40px] rounded-b-lg z-10">
              <h3 className="text-white text-base font-bold pl-4">Thank You</h3>
            </div>
          </div>
        </Link>

        <Link to="/generic/sorry">
          <div className="relative flex items-end justify-start rounded-lg h-[180px] cursor-pointer overflow-hidden">
            <img src={sorry} alt="I am Sorry" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 bg-[rgba(57,56,56,0.5)] shadow-md backdrop-blur-sm border border-[rgba(255,255,255,0.03)] flex items-center justify-start w-full h-[40px] rounded-b-lg z-10">
              <h3 className="text-white text-base font-bold pl-4">I am Sorry</h3>
            </div>
          </div>
        </Link>

        <Link to="/generic/wellsoon">
          <div className="relative flex items-end justify-start rounded-lg h-[180px] cursor-pointer overflow-hidden">
            <img src={wellsoon} alt="Get Well Soon" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 bg-[rgba(57,56,56,0.5)] shadow-md backdrop-blur-sm border border-[rgba(255,255,255,0.03)] flex items-center justify-start w-full h-[40px] rounded-b-lg z-10">
              <h3 className="text-white text-base font-bold pl-4">Get Well Soon</h3>
            </div>
          </div>
        </Link>

        <Link to="/generic/miss">
          <div className="relative flex items-end justify-start rounded-lg h-[180px] cursor-pointer overflow-hidden">
            <img src={miss} alt="I Miss You" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 bg-[rgba(57,56,56,0.5)] shadow-md backdrop-blur-sm border border-[rgba(255,255,255,0.03)] flex items-center justify-start w-full h-[40px] rounded-b-lg z-10">
              <h3 className="text-white text-base font-bold pl-4">I Miss You</h3>
            </div>
          </div>
        </Link>

        <Link to="/generic/condolences">
          <div className="relative flex items-end justify-start rounded-lg h-[180px] cursor-pointer overflow-hidden">
            <img src={condolences} alt="Condolences" className="object-cover w-full h-full" />
            <div className="absolute bottom-0 bg-[rgba(57,56,56,0.5)] shadow-md backdrop-blur-sm border border-[rgba(255,255,255,0.03)] flex items-center justify-start w-full h-[40px] rounded-b-lg z-10">
              <h3 className="text-white text-base font-bold pl-4">Condolences</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ChooseOccasion;
