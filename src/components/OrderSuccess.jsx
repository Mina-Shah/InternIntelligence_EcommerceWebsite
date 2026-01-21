import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FiCheckCircle } from "react-icons/fi";

const OrderSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 1. Clear the cart from browser memory
    localStorage.removeItem("cart");

    // 2. IMPORTANT: Notify the rest of the app (like the Navbar)
    // that the cart is now empty (0)
    window.dispatchEvent(new Event("storage"));

    // Optional: Scroll to top of the page
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Order Confirmed | ShoePoint.pk</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="max-w-md w-full bg-white rounded-[3rem] p-10 mt-28 shadow-xl text-center border border-slate-100 animate-slide-in-up">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <FiCheckCircle className="text-green-600" size={60} />
            </div>
          </div>

          <h1 className="text-3xl font-black text-[#133250] uppercase italic tracking-tighter mb-2">
            Order Confirmed!
          </h1>
          <p className="text-slate-500 font-medium mb-8">
            Thank you for shopping with ShoePoint. Your order is being processed
            and will be delivered to your Karachi address soon.
          </p>

          <div className="space-y-4">
            <button
              onClick={() => navigate("/products")}
              className="w-full bg-[#133250] hover:bg-[#80B5D7] text-white font-black py-4 rounded-2xl transition-all uppercase tracking-widest text-sm shadow-lg"
            >
              Continue Shopping
            </button>

            <button
              onClick={() => navigate("/")}
              className="w-full bg-slate-100 hover:bg-slate-200 text-[#133250] font-bold py-4 rounded-2xl transition-all uppercase tracking-widest text-xs"
            >
              Back to Home
            </button>
          </div>

          <p className="mt-8 text-[10px] text-slate-400 uppercase font-bold tracking-widest">
            A confirmation email has been sent.
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
