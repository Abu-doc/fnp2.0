import React, { useState, useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa';

const TimeComponent = ({ initialSeconds }) => {
  const [seconds, setSeconds] = useState(initialSeconds || 0);

  useEffect(() => {
    if (seconds <= 0) return;

    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => {
        if (prevSeconds <= 1) {
          clearInterval(intervalId); // Stop the interval when seconds reach 0
          return 0;
        }
        return prevSeconds - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [seconds]);

  // Calculate hours, minutes, and seconds
  const getFormattedTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    // Format hours, minutes, and seconds as two digits
    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0')
    };
  };

  const { hours, minutes, seconds: displaySeconds } = getFormattedTime(seconds);

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex mb-4 space-x-2 font-semibold bg-slate-100 w-full rounded-lg items-center justify-center lg:w-96">
        <FaRegClock className="text-xl" />
        <span className="font-semibold">Time Left To Get Delivered Today</span>
        <span className='text-red-600'>
        {seconds <= 0 ? '00:00:00' : `${hours}:${minutes}:${displaySeconds}`}
        </span>
      </div>
    </div>
  );
};

export default TimeComponent;
