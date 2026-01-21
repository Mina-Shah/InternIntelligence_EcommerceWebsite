import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppHelp = () => {
  const phoneNumber = "923214791236";
  const message =
    "Hi ShoePoint! I'm interested in your footwear collection. Can you help me?";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[999] group flex items-center gap-3"
      aria-label="Contact us on WhatsApp"
    >
      {/* Tooltip that shows on hover */}
      <span className="bg-white text-[#133250] px-4 py-2 rounded-full shadow-xl text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block border border-slate-100">
        Need help? Chat with us
      </span>

      {/* The Button */}
      <div className="relative bg-[#25D366] text-white p-4 rounded-full hover:scale-110 active:scale-95 transition-all duratin-300">
        <FaWhatsapp size={32} />

      
      </div>
    </a>
  );
};

export default WhatsAppHelp;
