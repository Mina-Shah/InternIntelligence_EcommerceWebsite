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
      <h1 className="text-yellow-700 text-center text-3xl font-semibold mb-4">
        Featured
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
        <div className="border-yellow-900 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {sortedProducts.map((item) => (
            <div
              key={item.id}
              className="bg-gray-300 rounded shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full object-cover h-60 "
              />
              <h3 className="px-4 pt-5 text-yellow-700 text-lg font-bold mt-2">{item.name}</h3>
              <p className="px-4 text-gray-600 font-bold">Rs {item.price}</p>
              <p className="px-4 text-sm text-gray-500">Category: {item.category}</p>
              <button
                className="m-4 bg-yellow-400 text-white font-bold py-2 px-4 rounded-lg hover:bg-yellow-500"
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
