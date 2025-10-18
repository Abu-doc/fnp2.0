import React, { useState } from "react";

const Location = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="px-4">
            <h1 className="font-semibold text-left text-lg mt-3">
                Gift Receiver's Location
            </h1>
            <div className="flex border border-gray-300 rounded-lg mt-2 w-full max-w-xl">
                <select 
                    name="location" 
                    className="border-r-2 border-r-gray-400 px-2 rounded-l-lg"
                >
                    <option value="India">India</option>
                    <option value="Qatar">Qatar</option>
                    <option value="UAE">UAE</option>
                </select>
                <input
                    type="search"
                    placeholder="*Enter Receiver's Pincode, Location Area"
                    id="header-search-input"
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="flex-1 h-11 border-none rounded-r-lg px-2"
                />
            </div>
        </div>
    );
}

export default Location;
