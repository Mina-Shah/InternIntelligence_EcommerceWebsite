import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "./Products";
import ProductPurchaseSidebar from "./ProductPurchaseSidebar";
import MobileStickyBar from "./MobileStickyBar";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    let foundProduct = null;
    for (const category of products) {
      foundProduct = category.items.find((item) => item.id === Number(id));
      if (foundProduct) break;
    }
    setProduct(foundProduct);
  }, [id]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  if (!product) {
    return (
      <div className="text-center text-orange-500 py-20 text-lg font-bold">
        Product not found
      </div>
    );
  }

  return (
    // Added pb-20 so the content isn't hidden behind the MobileStickyBar
    <div className="bg-gray-50 min-h-screen pb-20 mt-20 md:pb-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* LEFT & MIDDLE: Product Images and Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-4 rounded-[40px] shadow-sm overflow-hidden border border-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto lg:h-96 rounded-[32px] object-cover"
              />
            </div>

            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-gray-100">
              <h1 className="text-4xl font-black text-[#133250] mb-4 uppercase tracking-tighter">
                {product.name}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Experience premium comfort with our latest {product.name}. Built
                with breathable materials and high-traction soles, these are
                perfect for your daily hustle in Karachi.
              </p>

              <div className="mt-8">
                <label className="block text-slate-900 font-bold mb-2 uppercase text-xs tracking-widest">
                  Select Quantity
                </label>
                <input
                  type="number"
                  value={quantity}
                  min="1"
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-24 px-4 py-3 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-yellow-400 font-bold text-lg"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Desktop Sidebar */}
          {/* hidden on mobile, block on lg screens */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28">
              <ProductPurchaseSidebar
                product={product}
                onAddToCart={addToCart}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE ONLY: The Sticky Bar */}
      {/* lg:hidden ensures it disappears on desktop */}
      <div className="lg:hidden">
        <MobileStickyBar product={product} onAddToCart={addToCart} />
      </div>
    </div>
  );
};

export default ProductDetails;
