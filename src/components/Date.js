import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdNavigateNext } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";

// Custom Input Component
const CustomInput = ({ value, onClick }) => (
    <div
        className="relative border rounded px-2 py-1 flex items-center w-full max-w-xl"
        onClick={onClick}
    >   
        <TbCalendarTime className="text-gray-500 mr-2" />
        <input
            type="text"
            value={value}
            readOnly
            placeholder="Select Delivery Date & Time Slot"
            className="flex-1 border-none outline-none"
        />
        <MdNavigateNext className="absolute right-2 text-gray-500" />
    </div>
);

const DateComponent = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className="px-4">
            <h1 className="font-semibold text-left text-lg mt-3">
                Select Delivery Date & Time Slot
            </h1>

            <div className="mt-3 w-full max-w-xl rounded-lg border">
                <DatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                    dateFormat="dd/MM/yyyy"
                    customInput={<CustomInput />}
                />
            </div>
        </div>
    );
};

export default DateComponent;
