import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
// --- Firebase Imports ---
import { db } from "./firebase";
import { ref, push, set } from "firebase/database";

const CheckoutPage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid =
    formData.name &&
    formData.email.includes("@") &&
    formData.address &&
    formData.city &&
    formData.cardNumber.length >= 13;

  // --- Updated HandleSubmit with Firebase ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid) {
      try {
        // 1. Create a unique reference in 'orders'
        console.log('order taken')
        const ordersRef = ref(db, "orders");
        const newOrderRef = push(ordersRef);

        // 2. Map the order data
        const orderData = {
          orderId: newOrderRef.key,
          customer: {
            name: formData.name,
            email: formData.email,
            address: formData.address,
            city: formData.city,
            zip: formData.zip,
          },
          items: cart,
          total: totalPrice,
          status: "Pending",
          orderDate: new Date().toISOString(),
        };

        // 3. Save to Firebase
        await set(newOrderRef, orderData);

        // 4. Navigate to success
        navigate("/order-success");
      } catch (error) {
        console.error("Firebase Error:", error);
        alert("Order failed to save. Please check your internet connection.");
      }
    }
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <>
      <Helmet>
        <title>{`Secure Checkout | ShoePoint.pk Karachi`}</title>
        <meta
          name="description"
          content="Enter your shipping details for fast delivery in Karachi and nationwide."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="min-h-screen mt-28 bg-slate-50 flex justify-center p-4 md:p-10 animate-slide-in-up">
        <div className="bg-white p-8 rounded-[2.5rem] shadow-xl w-full max-w-3xl border border-slate-100">
          <h2 className="text-3xl font-black text-center text-[#133250] mb-8 uppercase italic tracking-tighter">
            Secure <span className="text-[#80B5D7]">Checkout</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Shipping Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Mina Asif"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-slate-50 bg-slate-50 p-4 rounded-2xl outline-none focus:border-[#80B5D7] transition-all"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="mina@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-slate-50 bg-slate-50 p-4 rounded-2xl outline-none focus:border-[#80B5D7] transition-all"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">
                  Shipping Address
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="House #, Street, Area"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-slate-50 bg-slate-50 p-4 rounded-2xl outline-none focus:border-[#80B5D7] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Karachi"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-slate-50 bg-slate-50 p-4 rounded-2xl outline-none focus:border-[#80B5D7] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zip"
                  placeholder="75500"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                  className="w-full border-2 border-slate-50 bg-slate-50 p-4 rounded-2xl outline-none focus:border-[#80B5D7] transition-all"
                />
              </div>
            </div>

            {/* Payment Info */}
            <div className="pt-6 border-t border-slate-100">
              <h3 className="text-lg font-black text-[#133250] mb-4 uppercase tracking-tight">
                Payment Method
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="0000 0000 0000 0000"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    required
                    className="w-full border-2 border-slate-50 bg-slate-50 p-4 rounded-2xl outline-none focus:border-[#80B5D7] transition-all"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">
                      Expiry
                    </label>
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/YY"
                      value={formData.expiry}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-slate-50 bg-slate-50 p-4 rounded-2xl outline-none focus:border-[#80B5D7] transition-all"
                    />
                  </div>
                  <div className="w-1/3">
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">
                      CVV
                    </label>
                    <input
                      type="text"
                      name="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={handleChange}
                      required
                      className="w-full border-2 border-slate-50 bg-slate-50 p-4 rounded-2xl outline-none focus:border-[#80B5D7] transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Total & Submit */}
            <div className="pt-8 flex flex-col items-end gap-4">
              <div className="text-right">
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">
                  Grand Total
                </p>
                <h3 className="text-3xl font-black text-[#133250] tracking-tighter italic">
                  Rs. {totalPrice}
                </h3>
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest transition-all shadow-lg 
                  ${
                    isFormValid
                      ? "bg-[#133250] text-white hover:bg-[#80B5D7] active:scale-95"
                      : "bg-slate-100 text-slate-300 cursor-not-allowed"
                  }`}
              >
                {isFormValid ? "Complete Purchase" : "Fill Shipping Details"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
