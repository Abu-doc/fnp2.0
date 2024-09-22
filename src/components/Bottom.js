import React from "react";
import bottom from './images/bottom.png'; // Import the image

const Bottom = () => {
    return (
        <div className="bg-gray-200 flex items-center justify-center">
            <img src={bottom} className="cursor-pointer p-7" alt="Bottom section" />
        </div>
    );
}

export default Bottom;
