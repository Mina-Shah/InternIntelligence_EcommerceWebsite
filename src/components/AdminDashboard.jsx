import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { ref, onValue, update, remove } from "firebase/database";
import {
  FiPackage,
  FiUser,
  FiMapPin,
  FiClock,
  FiTrash2,
  FiCheckCircle,
  FiLock,
  FiDownload,
  FiLogOut,
} from "react-icons/fi";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [passkey, setPasskey] = useState("");

  // --- 1. Security Check ---
  const handleLogin = (e) => {
    e.preventDefault();
    if (passkey === "Mina2026") {
      setIsAdmin(true);
    } else {
      alert("Unauthorized Access Denied");
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setPasskey("");
  };

  useEffect(() => {
    if (!isAdmin) return;

    const ordersRef = ref(db, "orders");
    const unsubscribe = onValue(ordersRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const ordersList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setOrders(ordersList.reverse());
      } else {
        setOrders([]);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [isAdmin]);

  // --- 2. CSV Export Logic ---
  const downloadCSV = () => {
    if (orders.length === 0) return;

    const headers = [
      "Order ID",
      "Date",
      "Customer Name",
      "Email",
      "Address",
      "City",
      "Total Price",
      "Status",
    ];
    const rows = orders.map((order) => [
      order.id,
      new Date(order.orderDate).toLocaleDateString(),
      order.customer.name,
      order.customer.email,
      `"${order.customer.address}"`, // Quotes prevent comma issues in Excel
      order.customer.city,
      order.total,
      order.status,
    ]);

    const csvContent = [headers, ...rows].map((e) => e.join(",")).join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `ShoePoint_Orders_${new Date().toLocaleDateString()}.csv`,
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // --- 3. Order Actions ---
  const handleStatusUpdate = (orderId, newStatus) => {
    const orderRef = ref(db, `orders/${orderId}`);
    update(orderRef, { status: newStatus });
  };

  const handleDelete = (orderId) => {
    if (window.confirm("Are you sure you want to delete this order record?")) {
      const orderRef = ref(db, `orders/${orderId}`);
      remove(orderRef);
    }
  };

  // Login Screen
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#133250] px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white p-10 rounded-[2.5rem] shadow-2xl text-center max-w-sm w-full"
        >
          <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <FiLock className="text-[#133250]" size={24} />
          </div>
          <h2 className="text-2xl font-black text-[#133250] mb-2 uppercase italic tracking-tighter">
            Admin Portal
          </h2>
          <input
            type="password"
            placeholder="Passkey"
            className="w-full border-2 border-slate-50 bg-slate-50 p-4 rounded-2xl mb-4 outline-none focus:border-[#80B5D7] text-center font-bold"
            onChange={(e) => setPasskey(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-[#133250] text-white py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-[#80B5D7] transition-all"
          >
            Login
          </button>
        </form>
      </div>
    );
  }

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen mt-28 bg-slate-50 p-4 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <div>
            <h2 className="text-4xl font-black text-[#133250] uppercase italic tracking-tighter">
              Order <span className="text-[#80B5D7]">Hub</span>
            </h2>
            <div className="flex gap-4 mt-2">
              <button
                onClick={downloadCSV}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#80B5D7] hover:text-[#133250] transition-colors"
              >
                <FiDownload /> Export to Excel
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-red-400 hover:text-red-600 transition-colors"
              >
                <FiLogOut /> Logout
              </button>
            </div>
          </div>

          <div className="text-right">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
              Total Revenue
            </p>
            <p className="text-2xl font-black text-[#133250] italic tracking-tighter">
              Rs. {orders.reduce((sum, o) => sum + Number(o.total), 0)}
            </p>
          </div>
        </div>

        {/* --- Orders List --- */}
        <div className="grid gap-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex flex-col lg:flex-row justify-between gap-8 hover:shadow-md transition-all"
            >
              {/* Reuse your existing order mapping UI here */}
              <div className="space-y-3 min-w-[200px]">
                <div className="flex items-center gap-3">
                  <FiUser className="text-[#80B5D7]" />
                  <span className="font-black uppercase text-sm text-[#133250] tracking-tight">
                    {order.customer.name}
                  </span>
                </div>
                <div
                  className={`mt-4 inline-block px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${order.status === "Shipped" ? "bg-green-100 text-green-600" : "bg-orange-100 text-orange-600"}`}
                >
                  {order.status}
                </div>
              </div>

              <div className="flex-1 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <ul className="text-xs font-bold text-[#133250] space-y-2">
                  {order.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex justify-between border-b border-slate-200 pb-1"
                    >
                      <span>{item.name}</span>
                      <span className="text-[#80B5D7]">x{item.quantity}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex-1 space-y-6">
                <p className="text-xs font-bold text-[#133250] leading-relaxed">
                  {order.customer.address}, {order.customer.city}
                </p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleStatusUpdate(order.id, "Shipped")}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#133250] text-white py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-green-600 transition-colors"
                  >
                    <FiCheckCircle size={14} /> Ship Order
                  </button>
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="px-4 bg-slate-100 text-slate-400 py-3 rounded-xl hover:bg-red-50 hover:text-red-500"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>

              <div className="text-right flex flex-col justify-center border-l border-slate-100 pl-8 min-w-[150px]">
                <span className="text-3xl font-black text-[#133250] italic tracking-tighter">
                  Rs. {order.total}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
