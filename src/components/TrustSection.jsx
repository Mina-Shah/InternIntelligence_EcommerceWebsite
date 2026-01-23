import React from "react";
import { FaTruck, FaBoxOpen, FaExchangeAlt, FaTag } from "react-icons/fa";

const TrustSection = () => {
  const trustPoints = [
    {
      title: "Fast Delivery",
      desc: "2-3 Days via TCS/Leopards",
      icon: <FaTruck size={24} />,
    },
    {
      title: "Open Parcel",
      desc: "Check before you pay",
      icon: <FaBoxOpen size={24} />,
    },
    {
      title: "7-Day Exchange",
      desc: "Easy size swaps",
      icon: <FaExchangeAlt size={24} />,
    },
    {
      title: "Best Price",
      desc: "Direct from manufacturer",
      icon: <FaTag size={24} />,
    },
  ];

  return (
    <div className="bg-white border-y border-slate-100 py-16 px-6 my-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12">
        {trustPoints.map((point, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center group"
          >
            {/* Blue and White Icon Container */}
            <div className="w-16 h-16 bg-[#133250] text-white rounded-2xl flex items-center justify-center mb-5 shadow-lg shadow-blue-100 group-hover:bg-[#80B5D7] transition-all duration-300 transform group-hover:-translate-y-1">
              {point.icon}
            </div>

            <h4 className="font-black text-[#133250] uppercase tracking-tighter italic text-lg">
              {point.title}
            </h4>
            <p className="text-xs text-slate-400 font-bold uppercase mt-1 tracking-wide">
              {point.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSection;
