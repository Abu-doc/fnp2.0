import React, { useState } from 'react';
import roses from './images/roses.jpg';
import { FaEdit } from 'react-icons/fa';

const Combos = ({ onComboSelect }) => {
    const [selectedCombo, setSelectedCombo] = useState(null);

    const handleComboClick = (combo) => {
        console.log("Selected Combo:", combo.id); // Log the selected combo id
        setSelectedCombo(combo.id); // Update state with the selected combo ID
        onComboSelect(combo.id); // Notify parent component about the selection
    };

    const comboList = [
        { id: 1, src: roses, name: 'Design 1', price: '₹1620' },
        { id: 2, src: roses, name: 'Design 2', price: '₹1620' },
        { id: 3, src: roses, name: 'Design 3', price: '₹1620' }
    ];

    return (
        <div>
            <h1 className="text-left font-semibold text-lg mt-3">Available Combos</h1>
            <div className="flex place-items-start gap-4 mt-2 w-full">
                {comboList.map((combo) => (
                    <div
                        key={combo.id}
                        className={`w-32 flex flex-col justify-center items-center rounded-xl cursor-pointer md-lg:w-24 ${
                            selectedCombo === combo.id ? 'border-2 bg-pink-200 border-black' : 'border border-gray-200'
                        }`}
                        onClick={() => handleComboClick(combo)}
                    >
                        <div className="mt-2">
                            <img src={combo.src} alt={combo.name} className="rounded-lg w-28 md-lg:w-20" />
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-500 mt-1">
                            <span className="mr-7 md-lg:mr-4">{combo.name}</span>
                            <span className="ml-2"><FaEdit /></span>
                        </div>
                        <span className="mr-14 text-lg text-gray-700 md-lg:text-base md-lg:mr-10">{combo.price}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Combos;
