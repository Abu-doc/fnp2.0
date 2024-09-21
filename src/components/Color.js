import React from 'react';

const colorClasses = {
  red: 'bg-red-600',
  purple: 'bg-purple-600',
  pink: 'bg-pink-300',
  peach: 'bg-orange-300',
  warm: 'bg-[rgba(210,74,25,0.779)]',
  pastel: 'bg-[rgba(255,192,203,0.363)]',
  orange: 'bg-orange-500',
  blue: 'bg-blue-600',
  white: 'bg-[#ebe4e4]',
  yellow: 'bg-yellow-400',
  cool: 'bg-[rgba(0,0,255,0.275)]',
  mix: 'bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400',
};

const FavouriteColor = () => {
  return (
    <div className="flex flex-col items-center mt-14 px-8 py-6 bg-[#f7f2ec] h-[450px] w-[96vw] mx-auto">
      <h1 className="text-center text-3xl font-bold text-gray-600 mb-12">Choose a Favourite Colour</h1>
      <div className="grid grid-cols-3 gap-y-8 md:grid-cols-4 lg:grid-cols-6 gap-x-28">
        {['red', 'purple', 'pink', 'peach', 'warm', 'pastel', 'orange', 'blue', 'white', 'yellow', 'cool', 'mix'].map((color, index) => (
          <div key={index} className="flex flex-col items-center justify-center cursor-pointer">
            <div className={`h-[110px] w-[110px] rounded-full ${colorClasses[color]} bg-cover`} />
            <h5 className="mt-3 text-[#474545]">{capitalizeFirstLetter(color)}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

// Utility function to capitalize the first letter of the color name
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default FavouriteColor;
