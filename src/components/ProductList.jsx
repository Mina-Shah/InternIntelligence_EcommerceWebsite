import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import products from "./Products";

const ProductList = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("none");

  // Flatten the product list while preserving details
  const allItems = products.flatMap((product) =>
    product.items.map((item) => ({
      id: item.id,
      name: item.name,
      category: product.category, 
      image: item.image,
      price: item.price,
    }))
  );

  // Filter products by selected category
  const filteredProducts =
    category === "All"
      ? allItems
      : allItems.filter((item) => item.category === category);

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="container mx-auto p-6 animate-slide-in-up">
      <h1 className="text-blue-900 text-center text-3xl font-semibold mb-4">
        Categories
      </h1>

      <div className="flex justify-between items-center mb-6">
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="All">All Categories</option>
          <option value="Casual">Casual</option>
          <option value="Formal">Formal</option>
          <option value="Sports">Sports</option>
        </select>

        <select
          onChange={(e) => setSort(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="none">Sort By</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* Display Products */}
      {sortedProducts.length === 0 ? (
        <p className="text-center text-black">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedProducts.map((item) => (
            <div
              key={item.id}
              className="border p-4 rounded shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-lg font-bold mt-2">{item.name}</h3>
              <p className="text-gray-600">${item.price}</p>
              <p className="text-sm text-gray-500">Category: {item.category}</p>
              <button
                className="mt-2 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                Buy Now
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
