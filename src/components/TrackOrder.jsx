import React, { useState } from "react";
import { Truck, Package, CheckCircle, Clock, MapPin } from "lucide-react";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");
  const [tracking, setTracking] = useState(false);

  // Mock tracking data
  const steps = [
    {
      title: "Order Placed",
      date: "Jan 10, 2026",
      icon: <Package size={20} />,
      status: "complete",
    },
    {
      title: "Processing",
      date: "Jan 11, 2026",
      icon: <Clock size={20} />,
      status: "complete",
    },
    {
      title: "Shipped",
      date: "Jan 12, 2026",
      icon: <Truck size={20} />,
      status: "current",
    },
    {
      title: "Delivered",
      date: "Pending",
      icon: <CheckCircle size={20} />,
      status: "upcoming",
    },
  ];

  const handleTrack = (e) => {
    e.preventDefault();
    if (orderId) setTracking(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-yellow-700 tracking-tight">
            TRACK YOUR ORDER
          </h1>
          <p className="text-slate-500 mt-2">
            Enter your Order ID to see your delivery status.
          </p>
        </div>

        {/* Input Form */}
        <div className="bg-white p-8 rounded-[32px] shadow-xl border border-slate-100 mb-8">
          <form
            onSubmit={handleTrack}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="text"
              placeholder="Example: SP-12345"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="flex-grow p-4 border-2 border-slate-100 rounded-2xl focus:border-yellow-700 focus:outline-none transition-all font-medium"
              required
            />
            <button
              type="submit"
              className="bg-[#FFD700] text-white px-8 py-4 rounded-2xl font-black shadow-lg hover:bg-yellow-500 hover:text-white transition-all transform active:scale-95"
            >
              Track Now
            </button>
          </form>
        </div>

        {/* Tracking Results */}
        {tracking && (
          <div className="bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Status Header */}
            <div className="bg-yellow-700 p-6 text-white flex justify-between items-center">
              <div>
                <p className="text-slate-200 text-xs uppercase font-bold tracking-widest">
                  Tracking Number
                </p>
                <h2 className="text-xl font-bold">{orderId}</h2>
              </div>
              <div className="text-right">
                <p className="text-white] font-black text-sm italic">
                  In Transit
                </p>
                <p className="text-xs text-slate-200">
                  Estimated Delivery: Jan 15
                </p>
              </div>
            </div>

            {/* Tracking Steps */}
            <div className="p-8">
              <div className="relative">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-start mb-8 last:mb-0">
                    {/* Line Connection */}
                    {index !== steps.length - 1 && (
                      <div
                        className={`absolute left-5 top-10 w-0.5 h-12 ${
                          step.status === "complete"
                            ? "bg-yellow-700"
                            : "bg-slate-100"
                        }`}
                      ></div>
                    )}

                    {/* Icon Circle */}
                    <div
                      className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${
                        step.status === "complete"
                          ? "bg-yellow-700 text-white"
                          : step.status === "current"
                          ? "bg-[#FFD700] text-slate-900 ring-4 ring-yellow-100"
                          : "bg-green-500 text-white"
                      }`}
                    >
                      {step.icon}
                    </div>

                    {/* Step Details */}
                    <div className="ml-6">
                      <h3
                        className={`font-bold text-lg ${
                          step.status === "upcoming"
                            ? "text-slate-600"
                            : "text-slate-900"
                        }`}
                      >
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500">{step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Address Section */}
            <div className="bg-slate-50 p-6 border-t border-slate-100 flex items-center gap-4">
              <div className="bg-white p-3 rounded-xl shadow-sm">
                <MapPin className="text-red-500" size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  Shipping To
                </p>
                <p className="text-slate-700 font-medium">
                  House #42, Block 5, Gulshan-e-Iqbal, Karachi
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
