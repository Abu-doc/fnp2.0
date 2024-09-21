import React from "react";
import airtel from './images/airtel.png'

const Offers = () => {
    return (
        <div>
             <h1 className="font-semibold text-left text-lg mt-3">Top Offers</h1>
            <div className="flex items-center justify-between border border-red-300 h-10 bg-gray-100 rounded-lg px-2 mt-2 mb-4 cursor-pointer lg-xl:w-106 md-lg:w-80 ">
                <div className="flex items-center">
                    <span>
                    <img src={airtel} alt='airtel' className='w-28'></img>
                    </span>
                    <h3 className="ml-2">15% Off* on 1st Order,Code:FNPONE</h3>
                </div>
                <div>
                    <h3 className="font-semibold text-blue-800">*T&C</h3></div> 
            </div>
            <div className="flex items-center justify-between border border-red-300 h-10 bg-gray-100 rounded-lg px-2 my-4 cursor-pointer lg-xl:w-106 md-lg:w-80">
                <div className="flex items-center">
                    <span>
                    <img src={airtel} alt='airtel' className='w-28'></img>
                    </span>
                    <h3 className="ml-2">15% Off* on 1st Order,Code:FNPONE</h3>
                </div>
                <div>
                    <h3 className="font-semibold text-blue-800">*T&C</h3></div> 
            </div>
            
            <div className="flex items-center justify-between border border-red-300 h-10 bg-gray-100 rounded-lg px-2 my-4 cursor-pointer lg-xl:w-106 md-lg:w-80">
                <div className="flex items-center">
                    <span>
                    <img src={airtel} alt='airtel' className='w-28'></img>
                    </span>
                    <h3 className="ml-2">15% Off* on 1st Order,Code:FNPONE</h3>
                </div>
                <div>
                    <h3 className="font-semibold text-blue-800">*T&C</h3></div> 
            </div>
            
            <div className="flex items-center justify-between border border-red-300 h-10 bg-gray-100 rounded-lg px-2 my-4 cursor-pointer lg-xl:w-106 md-lg:w-80">
                <div className="flex items-center">
                    <span>
                    <img src={airtel} alt='airtel' className='w-28'></img>
                    </span>
                    <h3 className="ml-2">15% Off* on 1st Order,Code:FNPONE</h3>
                </div>
                <div>
                    <h3 className="font-semibold text-blue-800">*T&C</h3></div> 
            </div>
            
            
        </div>
    )
}

export default Offers;