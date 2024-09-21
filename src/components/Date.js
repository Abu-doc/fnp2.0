import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { MdNavigateNext } from "react-icons/md";
import { TbCalendarTime } from "react-icons/tb";

// Custom Input Component
const CustomInput = ({ value, onClick }) => (
    <div
        className="relative border rounded px-2 py-1 w-128 flex items-center lg-xl:w-96 md-lg:w-80"
        onClick={onClick}
    >   
        <TbCalendarTime className="text-gray-500 mr-1" />
        <input
            type="text"
            value={value}
            readOnly
            placeholder="Select Delivery Date & Time Slot"
            className="w-128 border-none outline-none lg-xl:w-96 md-lg:w-60"
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
        <div>
            <h1 className="font-semibold text-left text-lg mt-3">Select Delivery Date & Time Slot</h1>

            <div className="mt-3 w-128 rounded-lg border lg-xl:w-96 md-lg:w-80">
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

