import React, { useState } from "react";

const Location = () => {
    const [searchTerm, setSearchTerm] = useState("");

    // Handle input change
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }
    return (
        <div>
            <h1 className="font-semibold text-left text-lg mt-3">Gift Reciever's Location</h1>
            <div className="flex border w-128 border-gray-300 rounded-lg mt-2 lg-xl:w-80 md-lg:w-80">
            <select name="location" className="border-r-2 border rounded-l-lg border-r-gray-400">
                            <option value="India">India</option>
                            <option value="Qatar">Qatar</option>
                            <option value="UAE">UAE</option>

                        </select>
                        <div className="text w-128 rounded-l-lg lg-xl:w-80c md-lg:w-80">
                        <input
                            type="search"
                            placeholder="*Enter Reciever's Pincode, Location Area"
                            id="header-search-input"
                            value={searchTerm} // Use state as value
                            onChange={handleInputChange} // Update state on change
                            className="w-96 h-11 border-none rounded-r-lg lg-xl:w-60 md-lg:w-52"
                        />
                    </div>
            </div>
        </div>
    )
}

export default Location;