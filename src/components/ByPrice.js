// src/ShopByPrice.js
import React from 'react';
import border from './images/border3.jpg'

const ShopByPrice = () => {
    return (
        <div className="relative mx-auto mt-20  bg-cover h-160 bg-center" style={{ backgroundImage:`url(${border})`  }}>
            
            <div className="relative z-10 flex flex-col items-center py-6 px-4  rounded-lg top-52 mx-[-35px] w-[calc(100vw)] ">
                <h1 className="text-5xl font-serif italic  font-bold text-[#474545] mb-8">Shop by Price</h1>
                <div className="flex justify-center items-center mb-4">
                    <div className="bg-red-100 text-[#474545] h-[45px] w-[150px] flex items-center justify-center rounded-3xl cursor-pointer mx-2">
                        <h3 className="text-lg">Under &#8377;599</h3>
                    </div>
                    <div className="bg-red-100 text-[#474545] h-[45px] w-[150px] flex items-center justify-center rounded-3xl cursor-pointer mx-2">
                        <h3 className="text-lg">Under &#8377;999</h3>
                    </div>
                    <div className="bg-red-100 text-[#474545] h-[45px] w-[150px] flex items-center justify-center rounded-3xl cursor-pointer mx-2">
                        <h3 className="text-lg">Under &#8377;1499</h3>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <div className="bg-red-100 text-[#474545] h-[45px] w-[150px] flex items-center justify-center rounded-3xl cursor-pointer mx-2">
                        <h3 className="text-lg">Under &#8377;1999</h3>
                    </div>
                    <div className="bg-red-100 text-[#474545] h-[45px] w-[150px] flex items-center justify-center rounded-3xl cursor-pointer mx-2">
                        <h3 className="text-lg">Under &#8377;2000</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShopByPrice;
