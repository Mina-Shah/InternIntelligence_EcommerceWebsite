import React, { useState, useEffect } from "react";
import { FaTrash, FaMinus, FaPlus } from "react-icons/fa"; // Added icons for better mobile UX
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item,
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      <Helmet>
        <title>{`Your Shopping Bag (${cart.length} items) | ShoePoint.pk`}</title>{" "}
        <meta
          name="description"
          content="Review your selected footwear and proceed to secure checkout."
        />
        {/* This prevents Google from showing your Cart page in search results, which is good for privacy */}
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <div className="min-h-screen bg-slate-50 mt-24 p-4 md:p-10 animate-slide-in-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl text-center md:text-5xl font-black text-[#133250] mb-8 tracking-tighter italic uppercase">
            Shopping <span className="text-[#80B5D7]">Cart</span>
          </h2>

          {cart.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-[2rem] shadow-sm">
              <p className="text-xl text-gray-400 font-medium">
                Your cart is empty.
              </p>
              <button
                onClick={() => navigate("/products")}
                className="mt-4 text-[#80B5D7] font-bold underline"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Desktop Header - Hidden on Mobile */}
              <div className="hidden md:grid grid-cols-6 gap-4 px-6 py-4 text-gray-400 font-bold text-xs uppercase tracking-widest border-b">
                <div className="col-span-3">Product</div>
                <div className="text-center">Price</div>
                <div className="text-center">Quantity</div>
                <div className="text-right">Total</div>
              </div>

              {/* Cart Items List */}
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[2rem] p-4 md:p-6 shadow-sm border border-slate-100 flex flex-col md:grid md:grid-cols-6 md:items-center gap-4"
                >
                  {/* Image & Name Section */}
                  <div className="flex items-center gap-4 md:col-span-3">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-slate-100 rounded-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-black text-[#133250] uppercase tracking-tight text-lg leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-gray-400 lg:text-xs font-bold md:hidden">
                        Rs. {item.price}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-400 text-xs font-bold mt-2 flex items-center gap-1 md:hidden"
                      >
                        <FaTrash size={10} /> Remove
                      </button>
                    </div>
                  </div>

                  {/* Price - Hidden on Mobile (shown under name instead) */}
                  <div className="hidden md:block text-center font-bold text-[#133250]">
                    Rs. {item.price}
                  </div>

                  {/* Quantity Controller */}
                  <div className="flex items-center justify-between md:justify-center rounded-xl p-2 md:p-1">
                    <span className="md:hidden text-xs font-bold text-gray-400 uppercase">
                      Quantity
                    </span>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-8 h-8 flex items-center justify-center bg-white rounded-lg shadow-sm text-[#133250]"
                      >
                        <FaMinus size={10} />
                      </button>
                      <span className="font-black text-[#133250] w-4 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-8 h-8 flex items-center justify-center bg-[#133250] text-white rounded-lg shadow-sm"
                      >
                        <FaPlus size={10} />
                      </button>
                    </div>
                  </div>

                  {/* Total & Desktop Trash */}
                  <div className="flex items-center justify-between md:justify-end gap-4">
                    <span className="md:hidden text-xs font-bold text-gray-400 uppercase">
                      Subtotal
                    </span>
                    <div className="flex items-center gap-4">
                      <span className="font-black text-[#133250] text-lg">
                        Rs. {item.price * item.quantity}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="hidden md:block text-slate-300 hover:text-red-500 transition-colors"
                      >
                        <FaTrash size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {/* Order Summary Section */}
              <div className="lg:col-span-1">
                <div className="border border-[#133250] text-[#133250] p-8 rounded-[2.5rem] shadow-xl sticky top-32">
                  <h3 className="text-xl font-black uppercase mb-6 border-b border-white/10 pb-4 tracking-widest">
                    Summary
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between text-[#133250]">
                      <span>Subtotal</span>
                      <span>Rs. {totalPrice}</span>
                    </div>
                    <div className="flex justify-between text-[#133250]">
                      <span>Shipping</span>
                      <span className="text-[#80B5D7]">FREE</span>
                    </div>
                    <div className="flex justify-between text-xl font-black pt-4 border-t border-white/10">
                      <span>Total</span>
                      <span className="">Rs. {totalPrice}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => navigate("/checkout")}
                    className="w-full bg-[#133250] text-white hover:bg-blue-400 hover:text-[#133250]  font-black py-4 rounded-2xl mt-8 transition-all uppercase tracking-widest"
                  >
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartPage;
