// src/components/Matter.js
import React from 'react';
import Headings from './Matter-Headings';
import Combos from './Combos';
import Location from './Location';
import DateComponent from './Date';
import MessageInput from './Message';
import TimeComponent from './Time';
import Buy from './Add-Buy';
import Offers from './Offers';
import About from './About';

const Matter = ({ onComboSelect }) => {
  const initialSeconds = 10000;

  return (
    <div className="Main-matter ml-14 lg-xl:ml-2 md-lg:ml-0">
      <Headings />
      <Combos onComboSelect={onComboSelect} />
      <Location />
      <DateComponent />
      <MessageInput />
      <TimeComponent initialSeconds={initialSeconds} />
      <Buy />
      <Offers />
      <About />
    </div>
  );
};

export default Matter;
