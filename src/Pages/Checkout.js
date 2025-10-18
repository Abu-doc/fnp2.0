// src/Pages/Checkout.js
import React, { useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
// adjust the next import path if your cartSlice lives elsewhere
import { clearCart } from "../components/cartSlice";

function Money({ amount }) {
  // simple INR format
  return <>₹{amount.toLocaleString("en-IN")}</>;
}

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cartItems = useSelector((s) => s.cart?.items ?? []);
  const total = useMemo(
    () => cartItems.reduce((sum, it) => sum + (it.price || 0) * (it.quantity || 1), 0),
    [cartItems]
  );

  // Shipping form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [stateName, setStateName] = useState("");
  const [pincode, setPincode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cod"); // cod | upi | card
  const [isPlacing, setIsPlacing] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    if (!name.trim() || !phone.trim() || !address.trim()) {
      setError("Please fill name, phone and address.");
      return false;
    }
    if (phone.trim().length < 8) {
      setError("Enter a valid phone number.");
      return false;
    }
    setError("");
    return true;
  };

  const handlePlaceOrder = () => {
    if (!validate()) return;
    if (cartItems.length === 0) {
      setError("Your cart is empty.");
      return;
    }

    setIsPlacing(true);

    // create a simple order object (you can send to backend instead)
    const order = {
      id: `ORD-${Date.now()}`,
      items: cartItems,
      shipping: { name, phone, email, address, city, state: stateName, pincode },
      paymentMethod,
      total,
      createdAt: new Date().toISOString(),
    };

    // simulate API call delay
    setTimeout(() => {
      console.log("Order placed:", order); // replace with API call
      // clear cart
      dispatch(clearCart());
      setIsPlacing(false);
      // navigate to a success page and pass order (state) optionally
      navigate("/order-success", { state: { order } });
    }, 700);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-6xl mx-auto py-8 px-4">
        <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left: Shipping & Payment */}
            <div className="flex-1 border rounded-lg p-6">
              <h2 className="text-lg font-medium mb-4">Shipping Details</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Full name"
                  className="border p-3 rounded"
                />
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                  className="border p-3 rounded"
                />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email (optional)"
                  className="border p-3 rounded"
                />
                <input
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  placeholder="Pincode"
                  className="border p-3 rounded"
                />
              </div>

              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Full address"
                className="border p-3 rounded w-full mt-3"
                rows={3}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                <input
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="City"
                  className="border p-3 rounded"
                />
                <input
                  value={stateName}
                  onChange={(e) => setStateName(e.target.value)}
                  placeholder="State"
                  className="border p-3 rounded"
                />
              </div>

              <h2 className="text-lg font-medium mt-6 mb-3">Payment Method</h2>

              <div className="flex flex-col gap-2">
                <label className={`p-3 border rounded cursor-pointer ${paymentMethod === "cod" ? "ring-2 ring-green-400" : ""}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="mr-2"
                  />
                  Cash on Delivery (COD)
                </label>

                <label className={`p-3 border rounded cursor-pointer ${paymentMethod === "upi" ? "ring-2 ring-green-400" : ""}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={() => setPaymentMethod("upi")}
                    className="mr-2"
                  />
                  UPI (mock)
                </label>

                <label className={`p-3 border rounded cursor-pointer ${paymentMethod === "card" ? "ring-2 ring-green-400" : ""}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="mr-2"
                  />
                  Card (mock)
                </label>
              </div>

              {error && <div className="mt-4 text-red-600">{error}</div>}

              <div className="mt-6 flex items-center gap-3">
                <button
                  onClick={handlePlaceOrder}
                  disabled={isPlacing}
                  className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 disabled:opacity-60"
                >
                  {isPlacing ? "Placing order..." : "Place Order"}
                </button>

                <button
                  onClick={() => navigate(-1)}
                  className="border px-4 py-2 rounded"
                >
                  Continue Shopping
                </button>
              </div>
            </div>

            {/* Right: Order Summary */}
            <aside className="w-full lg:w-96 border rounded-lg p-6 bg-gray-50">
              <h2 className="text-lg font-medium mb-4">Order Summary</h2>

              <div className="space-y-4 max-h-64 overflow-y-auto">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                  cartItems.map((it) => (
                    <div key={it.id} className="flex items-center gap-3">
                      <img src={it.image} alt={it.name} className="w-16 h-16 object-cover rounded" />
                      <div className="flex-1">
                        <div className="font-medium text-sm">{it.name}</div>
                        <div className="text-xs text-gray-500">Qty: {it.quantity || 1}</div>
                      </div>
                      <div className="text-sm font-semibold">
                        <Money amount={(it.price || 0) * (it.quantity || 1)} />
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="border-t mt-4 pt-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Subtotal</span>
                  <span className="font-semibold"><Money amount={total} /></span>
                </div>

                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600">Delivery</span>
                  <span className="font-semibold"><Money amount={0} /></span>
                </div>

                <div className="flex justify-between text-lg font-bold mt-3">
                  <span>Total</span>
                  <span><Money amount={total} /></span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
