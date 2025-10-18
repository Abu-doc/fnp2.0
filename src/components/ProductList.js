import React from "react";
import products from "./Products"; // Import your product data
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
