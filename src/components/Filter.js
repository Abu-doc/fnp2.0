import React, { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={toggle}
        className="w-full px-4 py-2 text-left font-semibold text-gray-600 border-t hover:bg-gray-100 focus:outline-none mb-3 flex items-center justify-between"
      >
        <div>{title}</div>
        {isOpen ? <MdRemove className="w-5 h-5" /> : <MdAdd className="w-5 h-5" />}
      </button>
      <div className={`transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"}`}>
        <div className="px-4 py-2 text-gray-600">{content}</div>
      </div>
    </div>
  );
};

const Filter = () => {
  return (
    // ✅ Use Tailwind responsive classes to hide below md (768px)
    <aside className="w-60 ml-10 mr-6 mt-4 mb-3 border bg-slate-50 h-auto rounded-md sticky top-0 hidden lg:block">
      <h1 className="font-semibold my-3 ml-3 text-2xl">Filter</h1>

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
            {["Roses", "Lilies", "Mixed Flowers", "Carnations", "Orchids", "Gerberas"].map((flower) => (
              <label key={flower} className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> {flower}
              </label>
            ))}
          </div>
        }
      />

      <AccordionItem
        title="Arrangement"
        content={
          <div>
            {["Bouquet", "Vase", "Unique", "Basket"].map((arr) => (
              <label key={arr} className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> {arr}
              </label>
            ))}
          </div>
        }
      />

      <AccordionItem
        title="Color"
        content={
          <div>
            {["Red", "Green", "Blue", "Yellow", "Purple", "Black", "Pink"].map((color) => (
              <label key={color} className="block mb-2 hover:text-orange-500 cursor-pointer">
                <input type="checkbox" className="mr-2" /> {color}
              </label>
            ))}
          </div>
        }
      />
    </aside>
  );
};

export default Filter;
