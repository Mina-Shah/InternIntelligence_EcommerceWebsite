const TrustSection = () => {
  const trustPoints = [
    { title: "Fast Delivery", desc: "2-3 Days via TCS/Leopards", icon: "🚚" },
    { title: "Open Parcel", desc: "Check before you pay", icon: "📦" },
    { title: "7-Day Exchange", desc: "Easy size swaps", icon: "🔄" },
    { title: "Best Price", desc: "Direct from manufacturer", icon: "💰" },
  ];

  return (
    <div className="bg-slate-50 border-y border-slate-100 py-10 px-6 my-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {trustPoints.map((point, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <span className="text-3xl mb-3">{point.icon}</span>
            <h4 className="font-bold text-slate-900">{point.title}</h4>
            <p className="text-sm text-slate-500">{point.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSection;