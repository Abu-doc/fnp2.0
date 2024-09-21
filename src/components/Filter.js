import React, { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

const AccordionItem = ({ title, content, icon }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggle}
        className="w-full max-w-full px-4 py-2 text-left font-semibold text-gray-600 border-t hover:bg-gray-100 focus:outline-none mb-3 flex items-center justify-between"
      >
        <div className="">
          {title}
        </div>
        <div>
          {isOpen ? (
            <MdRemove className="w-5 h-5 inline-block ml-2" />
          ) : (
            <MdAdd className="w-5 h-5 inline-block ml-2" />
          )}
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

const Filter = () => {
  return (
    <div>
      <div className="w-60 ml-10 mr-6 mx-auto mt-4 mb-3 lg-xl:w-106 border bg-slate-50 h-106 rounded-md sticky top-0 ">
      <h1 className="font-semibold  my-3 ml-3 text-2xl">Filter</h1>
        <AccordionItem
          title="Price"
          content={
            <div>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> $0 - $499
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> $500 - $999
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> $1000 and above
              </label>
            </div>
          }
        />
         <AccordionItem
          title="Flower Type"
          content={
            <div>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Roses
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Lilies
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Mixed Flowers
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Carnations
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Orchids
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Gerbaras
              </label>
            </div>
          }
        />
         <AccordionItem
          title="Arrangement"
          content={
            <div>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Bouquet
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Vase
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Unique
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Basket
              </label>
            </div>
          }
        />
         <AccordionItem
          title="Color"
          content={
            <div>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Red
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Green
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Blue
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Yellow
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Purple
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Black
              </label>
              <label className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> Pink
              </label>
            </div>
          }
        />
        
      </div>
    </div>
  );
}

export default Filter;
