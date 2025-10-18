// src/Pages/OrderSuccess.js
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const OrderSuccess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const order = state?.order;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-3xl mx-auto text-center py-24">
        <h1 className="text-3xl font-bold mb-4">Thank you! Your order is placed</h1>
        <p className="mb-4 text-gray-600">Order ID: <span className="font-mono">{order?.id || "N/A"}</span></p>
        <p className="mb-6">We have sent a confirmation to your email / phone.</p>

        <button onClick={() => navigate("/")} className="bg-green-600 text-white px-5 py-2 rounded">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default OrderSuccess;
