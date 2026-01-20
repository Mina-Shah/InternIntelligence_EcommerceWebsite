import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import products from "./Products";

const ProductList = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams(); // To read the URL
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("none");

  // 1. Sync local state with URL parameters
  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      // We capitalize it to match your data ("sports" -> "Sports")
      const formattedCategory =
        categoryFromUrl.charAt(0).toUpperCase() + categoryFromUrl.slice(1);
      setCategory(formattedCategory);
    } else {
      setCategory("All");
    }
  }, [searchParams]);

  // Flatten the product list
  const allItems = products.flatMap((product) =>
    product.items.map((item) => ({
      id: item.id,
      name: item.name,
      category: product.category,
      image: item.image,
      price: item.price,
    })),
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

  // Handle manual category change via Dropdown
  const handleDropdownChange = (value) => {
    if (value === "All") {
      setSearchParams({}); // Clear URL
    } else {
      setSearchParams({ category: value }); // Update URL
    }
  };

  return (
    <div className="container mx-auto p-6 pt-32 animate-slide-in-up">
      <h1 className="text-[#133250] text-center text-4xl font-black uppercase tracking-tighter mb-10 italic">
        {category === "All" ? "Featured Collection" : `${category} Collection`}
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
        <div className="flex gap-4 w-full md:w-auto">
          <select
            value={category}
            onChange={(e) => handleDropdownChange(e.target.value)}
            className="p-3 border-2 border-slate-100 rounded-xl font-bold text-sm bg-white outline-none focus:border-[#80B5D7] w-full"
          >
            <option value="All">All Categories</option>
            <option value="Casual">Casual</option>
            <option value="Formal">Formal</option>
            <option value="Sports">Sports</option>
          </select>

          <select
            onChange={(e) => setSort(e.target.value)}
            className="p-3 border-2 border-slate-100 rounded-xl font-bold text-sm bg-white outline-none focus:border-[#80B5D7] w-full"
          >
            <option value="none">Sort By</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
          </select>
        </div>

        <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">
          Showing {sortedProducts.length} Products
        </p>
      </div>

      {/* Display Products */}
      {sortedProducts.length === 0 ? (
        <div className="py-20 text-center">
          <p className="text-gray-400 text-xl font-medium">
            No products found in this category.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sortedProducts.map((item) => (
            <div
              key={item.id}
              onClick={() => navigate(`/product/${item.id}`)}
              className="group bg-white shadow-sm rounded-[2rem] overflow-hidden border border-[#133250] hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[#133250] text-lg font-black uppercase tracking-tight leading-tight">
                    {item.name}
                  </h3>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <div>
                    <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-1">
                      {item.category}
                    </p>
                    <p className="text-[#133250] text-xl font-black tracking-tighter">
                      Rs. {item.price}
                    </p>
                  </div>
                  <button className="bg-[#133250] text-white px-5 py-2 rounded-xl text-xs font-bold uppercase hover:bg-[#80B5D7] transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
