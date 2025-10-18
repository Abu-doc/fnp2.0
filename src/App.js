import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/Store';

import Final from './Pages/Final';
import Generic from './Pages/Generic';
import Home from './Pages/Home';
import Checkout from "./Pages/Checkout";
import OrderSuccess from "./Pages/OrderSuccess";
import Profile from "./Pages/Profile";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generic/:link" element={<Generic />} />
        <Route path="/final/:id" element={<Final />} /> {/* ✅ Updated */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/generic/profile" element={<Profile />} />
      </Routes>
    </Provider>
  );
}

export default App;
