import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { removeFromCart, addToCart, clearCart } from "../components/cartSlice";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const Sidebar = ({ onClose }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate(); // ✅ Initialize navigate

  // Ensure cartItems is always an array
  const validCartItems = Array.isArray(cartItems)
    ? cartItems.filter((item) => item && item.name)
    : [];

  // Calculate total price
  const totalPrice = validCartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // ✅ Handle Checkout Navigation
  const handleCheckout = () => {
    onClose(); // Close the sidebar
    navigate("/checkout"); // Navigate to the checkout page
  };

  return (
    <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-red-500 transition">
          <FaTimes size={20} />
        </button>
      </div>

      {/* Cart Items */}
      <div className="flex-1 overflow-y-auto p-4">
        {validCartItems.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">Your cart is empty.</p>
        ) : (
          <ul className="space-y-4">
            {validCartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b pb-3"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-md object-cover"
                />

                {/* Product Details */}
                <div className="flex-1 ml-3">
                  <p className="font-medium text-sm">{item.name}</p>
                  <p className="text-xs text-gray-500">
                    ₹{item.price} x {item.quantity}
                  </p>
                  <p className="text-sm font-semibold mt-1">
                    ₹{item.price * item.quantity}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    <FaMinus size={12} />
                  </button>
                  <span className="text-sm font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => dispatch(addToCart(item))}
                    className="p-1 bg-gray-200 rounded hover:bg-gray-300"
                  >
                    <FaPlus size={12} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer */}
      {validCartItems.length > 0 && (
        <div className="p-4 border-t">
          {/* Total Price */}
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-lg">₹{totalPrice}</span>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={() => dispatch(clearCart())}
              className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
            <button
              onClick={handleCheckout} // ✅ Call function here
              className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
