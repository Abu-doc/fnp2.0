import React, { useState } from "react";
import { MdOutlineDescription } from "react-icons/md";
import { FaReadme, FaTruck } from "react-icons/fa";

const AccordionItem = ({ title, content, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggle}
        className="w-full max-w-full px-4 py-2 text-left font-bold bg-gray-100 hover:bg-gray-200 focus:outline-none mb-3 flex items-center justify-between rounded-lg"
      >
        <div className="flex items-center">
          <div className="flex items-center bg-gray-200 rounded-xl w-5 h-5 justify-center mr-2">
            <span className="text-custom-green">{icon}</span>
          </div>
          {title}
        </div>
        <div>
          <svg
            className={`w-5 h-5 inline-block ml-2 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-4 py-2 text-gray-600">
          {content}
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1 className="font-semibold text-left text-lg mt-3">About the Product</h1>
      <div className="w-full max-w-xl  mx-auto mt-4 mb-3 lg-xl:w-106">
        <AccordionItem
          title="Product Features"
          content={
            <div>
              Handpicked baby pink carnations to let the special someone know how much you miss them. Show your emotions with carnations, beautifully arranged in bouquet style and sprinkled with White Gypsophila Gypsy Fillers. These beautiful flowers will make the receiver feel happy and special.
              <p>Description of feature 1.</p>
              <h2 className="text-xl font-semibold">Feature 2</h2>
              <p>Description of feature 2.</p>
            </div>
          }
          icon={<MdOutlineDescription />}
        />
        <AccordionItem
          title="Care Instructions"
          content={
            <div>
              <p>Handpicked baby pink carnations to let the special someone know how much you miss them. Show your emotions with carnations, beautifully arranged in bouquet style and sprinkled with White Gypsophila Gypsy Fillers. These beautiful flowers will make the receiver feel happy and special.</p>
              <p>Details about care instruction 1.</p>
              <h2 className="text-xl font-semibold">Care Instruction 2</h2>
              <p>Details about care instruction 2.</p>
            </div>
          }
          icon={<FaReadme />}
        />
        <AccordionItem
          title="Delivery Information"
          content={
            <div>
              <h2 className="text-xl font-semibold">Delivery Info 1</h2>
              <p>Details about delivery info 1.</p>
              Handpicked baby pink carnations to let the special someone know how much you miss them. Show your emotions with carnations, beautifully arranged in bouquet style and sprinkled with White Gypsophila Gypsy Fillers. These beautiful flowers will make the receiver feel happy and special.
            </div>
          }
          icon={<FaTruck />}
        />
      </div>
    </div>
  );
}

export default About;
