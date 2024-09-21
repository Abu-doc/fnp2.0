import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Final from './Pages/Final';
import Generic from './Pages/Generic';
import Home from './Pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/generic/:link" element={<Generic />} />
      <Route path="/final" element={<Final />} />
    </Routes>
  );
}

export default App;
