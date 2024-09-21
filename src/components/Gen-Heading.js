import React from "react";
import { FaStar } from "react-icons/fa";

const GenericHeading = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <h1 className="font-bold text-3xl">Send Flowers Online</h1>
                <span className="font-normal text-gray-500 text-xl ml-3 mt-1">36 of 271 Gifts</span>
                <span className="text-xl ml-2">|</span>
                <div className=" flex items-center border rounded-lg ml-2 w-12 px-1 mt-1">
                    <span className="text-green-500">
                    <FaStar />
                    </span>
                    <span className="font-normal ml-1">
                        4.5
                    </span>
                </div>
                <div className=" text-xl ml-3 lg-xl:text-sm  md-lg:text-sm">
                        <select name="location" className="text-blue-500">
                            <option value="location-drop">84577 Reviews</option>
                        </select>
                </div>


            </div>
            <div className=" text-base mr-16 border rounded-lg p-1 lg-xl:text-sm  md-lg:text-sm">
                        <select name="location" className="text-gray-700">
                            <option value="location-drop">Sort by : Recommended</option>
                        </select>
                </div>


        </div>
    )
}

export default GenericHeading;