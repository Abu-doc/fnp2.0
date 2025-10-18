import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "./cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border rounded-lg p-4 text-center shadow-md">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md mb-3"
      />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-600 text-sm">{product.description}</p>
      <p className="text-green-700 font-bold mt-2">₹{product.price}</p>

      <button
        onClick={() => dispatch(addToCart(product))}
        className="mt-3 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
