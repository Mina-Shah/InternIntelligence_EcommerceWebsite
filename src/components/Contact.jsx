import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiSend,
  FiMail,
  FiUser,
  FiMessageSquare,
  FiPhone,
} from "react-icons/fi";

const Contact = () => {
  const navigate = useNavigate();
  const [messageSent, setMessageSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulated API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setMessageSent(true);

      // Auto-navigate back to home after 3 seconds
      setTimeout(() => {
        setMessageSent(false);
        navigate("/");
      }, 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen mt-20 bg-slate-50 flex items-center justify-center p-6 animate-slide-in-up">
      <div className="bg-white shadow-2xl mt-6 rounded-[2.5rem] p-8 md:p-12 max-w-lg w-full border border-slate-100">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-[#133250] uppercase italic tracking-tighter">
            Contact <span className="text-[#80B5D7]">Us</span>
          </h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mt-2">
             Premium Footwear Team
          </p>
        </div>

        {messageSent && (
          <div className="bg-green-50 text-green-600 p-4 rounded-2xl mb-6 text-center font-bold text-xs uppercase tracking-widest animate-pulse border border-green-100">
            ✅ Message received! We'll contact you soon.
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name Input */}
          <div>
            <label className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#133250] mb-2 ml-1">
              <FiUser className="text-[#80B5D7]" /> Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-[#80B5D7] focus:bg-white transition-all font-medium text-sm"
              placeholder="Mina Asif"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#133250] mb-2 ml-1">
              <FiMail className="text-[#80B5D7]" /> Email
            </label>
            <input
              type="email"
              name="email"
              className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-[#80B5D7] focus:bg-white transition-all font-medium text-sm"
              placeholder="mina@example.com"
              required
            />
          </div>

          {/* Phone Input (Crucial for PK Market) */}
          <div>
            <label className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#133250] mb-2 ml-1">
              <FiPhone className="text-[#80B5D7]" /> Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-[#80B5D7] focus:bg-white transition-all font-medium text-sm"
              placeholder="03xx xxxxxxx"
              required
            />
          </div>

          {/* Message Input */}
          <div>
            <label className="flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#133250] mb-2 ml-1">
              <FiMessageSquare className="text-[#80B5D7]" /> Message
            </label>
            <textarea
              name="message"
              className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-50 rounded-2xl focus:outline-none focus:border-[#80B5D7] focus:bg-white transition-all font-medium text-sm"
              placeholder="How can we help you?"
              rows="3"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-3 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs transition-all 
              ${
                isSubmitting
                  ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-[#133250] text-white hover:bg-[#80B5D7] hover:-translate-y-1 active:scale-95 shadow-blue-100"
              }`}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message <FiSend size={16} />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
