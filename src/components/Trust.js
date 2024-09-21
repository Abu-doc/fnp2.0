import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaRegSmileBeam } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

const Trust = () => {
    return (
        <div>
            <div className="flex items-center justify-evenly mt-8 bg-gray-200 h-28">
                <div className="flex items-center justify-evenly">
                    <span className="text-custom-green font-bold text-4xl top-1 relative">
                    <VscWorkspaceTrusted />
                    </span>
                    <span className="text-custom-green font-bold text-6xl ml-1">
                        25+
                    </span>
                    <span className="text-gray-700">
                        Years Of Trust and Servive
                    </span>
                </div>
                <div className="flex items-center justify-evenly">
                    <span className="text-custom-green font-bold text-4xl top-1 relative">
                    <FaRegSmileBeam />
                    </span>
                    <span className="text-custom-green font-bold text-6xl ml-1">
                        108K+
                    </span>
                    <span className="text-gray-700">
                        Happy Customers Served
                    </span>
                </div>
                <div className="flex items-center justify-evenly">
                    <span className="text-custom-green font-bold text-4xl top-1 relative">
                    <FaEarthAmericas />
                    </span>
                    <span className="text-custom-green font-bold text-6xl ml-1">
                        30+
                    </span>
                    <span className="text-gray-700">
                       Countries Has Branches
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Trust;