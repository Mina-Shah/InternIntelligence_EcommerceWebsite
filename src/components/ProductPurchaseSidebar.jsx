import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductPurchaseSidebar = ({ product }) => {
  const [viewers, setViewers] = useState(8);
  const navigate = useNavigate();

  // Simulate live viewers
  useEffect(() => {
    const timer = setInterval(() => {
      setViewers((prev) => Math.floor(Math.random() * (15 - 3 + 1) + 3));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // --- THE FIX: Logic to actually save the item ---
  const handleAddToCart = () => {
    // 1. Get existing cart from localStorage or start with empty array
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // 2. Check if this product is already in the cart
    const existingItemIndex = existingCart.findIndex(
      (item) => item.id === product.id,
    );

    if (existingItemIndex > -1) {
      // If it exists, just increase quantity
      existingCart[existingItemIndex].quantity += 1;
    } else {
      // If it's new, add the product with quantity 1
      existingCart.push({ ...product, quantity: 1 });
    }

    // 3. Save the updated cart back to localStorage
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // 4. Trigger an event so the Navbar count updates immediately
    window.dispatchEvent(new Event("storage"));

    // 5. Now navigate to the cart page
    navigate("/cart");
  };

  return (
    <div className="p-6 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-6">
      {/* Urgency Badge */}
      <div className="bg-orange-50 border border-orange-100 p-3 rounded-xl flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
        <p className="text-orange-700 text-sm font-bold">
          Limited Stock: Only 4 pairs remaining!
        </p>
      </div>

      {/* Pricing and Social Proof */}
      <div>
        <h2 className="text-3xl font-black text-slate-900">
          Rs. {product.price}
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          🔥 <span className="font-bold">{viewers} people</span> are viewing
          this right now
        </p>
      </div>

      {/* Buy Button */}
      <button
        className="w-full bg-[#133250] hover:bg-blue-400 text-white font-bold py-4 rounded-2xl shadow-lg transition-all active:scale-[0.98]"
        onClick={handleAddToCart} // Changed from navigate directly to our new function
      >
        Add to Shopping Cart
      </button>

      <p className="text-center text-xs text-slate-400 font-medium">
        Free shipping on orders above Rs. 5000
      </p>
    </div>
  );
};

export default ProductPurchaseSidebar;
