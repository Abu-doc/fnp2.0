import React, { useState } from "react";
import { FaBirthdayCake } from "react-icons/fa";

const MessageInput = () => {
    const [message, setMessage] = useState("");
    const charLimit = 25;

    const handleChange = (event) => {
        const input = event.target.value;

        if (input.length <= charLimit) {
            setMessage(input);
        } else {
            // Optionally handle the exceeding characters here, e.g., truncate input
            // setMessage(input.slice(0, charLimit));
        }
    };

    return (
        <div>
            <h1 className="font-semibold text-left text-lg mt-3 mb-2">Message On Cake</h1>
            <div className="relative flex justify-between w-full lg-xl:w-96 md-lg:w-72">
                <div className="relative w-128 lg-xl:w-80 md-lg:w-60 ">
                    <textarea
                        value={message}
                        onChange={handleChange}
                        placeholder=""
                        className="border rounded px-10 py-2 w-full h-10 lg-xl:w-80 md-lg:w-80"
                        rows="2"
                        maxLength={charLimit} 
                    />
                    {message.length === 0 && (
                        <div className="absolute top-2 left-3 flex items-center text-gray-400 pointer-events-none">
                            <FaBirthdayCake />
                            <span className="ml-2">Message On Cake</span>
                        </div>
                    )}
                </div>
                <div className="mt-2 text-gray-600 relative right-24 md-lg:left-6 ">
                    <span>{message.length} / {charLimit}</span>
                </div>
            </div>
        </div>
    );
};

export default MessageInput;
