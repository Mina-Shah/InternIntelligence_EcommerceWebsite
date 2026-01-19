import React, { useState, useEffect } from "react";

const ProductPurchaseSidebar = ({ product }) => {
  const [viewers, setViewers] = useState(8);

  // Simulate live viewers
  useEffect(() => {
    const timer = setInterval(() => {
      setViewers((prev) => Math.floor(Math.random() * (15 - 3 + 1) + 3));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
      <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-yellow-100 transition-all active:scale-[0.98]">
        Add to Shopping Cart
      </button>

      <p className="text-center text-xs text-slate-400">
        Free shipping on orders above Rs. 5000
      </p>
    </div>
  );
};

export default ProductPurchaseSidebar;