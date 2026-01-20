import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import TrustSection from "./TrustSection";
import Search from "./Search";

const slides = [
  {
    image:
      "https://onedegree.com.pk/cdn/shop/files/02copy_af2f5b9a-1af5-4fd7-ad6a-4399fcd493cd.jpg?v=1738353124&width=360",
    title: "STEP INTO COMFORT & STYLE",
    sub: "Discover the latest trends in footwear.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012&auto=format&fit=crop",
    title: "STEP INTO COMFORT & STYLE",
    sub: "Discover the latest trends in footwear.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=2080&auto=format&fit=crop",
    title: "STEP INTO COMFORT & STYLE",
    sub: "Discover the latest trends in footwear.",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Formal",
    price: "$70",
    image:
      "https://www.ndure.com/cdn/shop/files/1_1b01031e-89cd-4427-9177-85e714b3813d.jpg?v=1726465453&width=493",
  },
  {
    id: 2,
    name: "Sports",
    price: "$50",
    image:
      "https://onedegree.com.pk/cdn/shop/files/02copy_af2f5b9a-1af5-4fd7-ad6a-4399fcd493cd.jpg?v=1738353124&width=360",
  },
  {
    id: 3,
    name: "Casual",
    price: "$20",
    image:
      "https://onedegree.com.pk/cdn/shop/files/Grey-4.jpg?v=1738353192&width=360",
  },
];

const promotions = [
  {
    id: 1,
    title: "Mega Sale - Up to 50% Off!",
    description: "Get the best deals. Limited time offer!",
    image:
      "https://onedegree.com.pk/cdn/shop/files/01_807b4ca0-b611-4074-bed1-0d4af3862075.jpg?v=1738353110&width=360",
  },
  {
    id: 2,
    title: "Don't miss out!",
    description: "Exclusive deal on selected footwear.",
    image:
      "https://www.ndure.com/cdn/shop/files/1_1b01031e-89cd-4427-9177-85e714b3813d.jpg?v=1726465453&width=493",
  },
]

const Home = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <>
      <Search />

      {/* 1. HERO SECTION */}
      <div className="relative h-[60vh] md:h-[96vh] w-full flex items-center justify-center overflow-hidden bg-slate-900">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-105"
                : "opacity-0 scale-100"
            }`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          ></div>
        ))}
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>

        <div className="relative z-10 w-full px-4 text-center">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter uppercase drop-shadow-2xl">
            {slides[currentSlide].title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-slate-200 font-medium max-w-lg mx-auto drop-shadow-lg">
            {slides[currentSlide].sub}
          </p>
          <button
            className="mt-10 mx-auto bg-[#133250] hover:bg-blue-500 text-slate-200 py-4 px-12 rounded-2xl font-black text-lg transition-all shadow-xl active:scale-95"
            onClick={() => navigate("/products")}
          >
            Shop Collection
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-8 bg-[#133250]" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 2. TRUST SECTION (The "Sweet Spot") */}
      {/* We place it here to convert "Interest" from the Hero into "Trust" before showing products */}
      <TrustSection />

      {/* 3. PROMOTIONS SECTION */}
      <div className="container mx-auto px-4 md:px-10 py-20">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-center text-4xl md:text-6xl font-black text-[#133250] tracking-tighter uppercase italic">
              Season <span className="text-[#80B5D7]">Deals</span>
            </h2>
            <p className="text-slate-400 text-center font-bold uppercase tracking-widest text-xs mt-2">
              Limited time offers for the Karachi collection
            </p>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="hidden md:block text-sm font-black uppercase tracking-widest border-b-2 border-[#133250] pb-1 hover:text-[#80B5D7] hover:border-[#80B5D7] transition-all"
          >
            View All Sales
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className="relative aspect-[4/5] md:aspect-[4/4] w-full overflow-hidden"
              onClick={() => navigate(`/products`)}
            >
              {/* Background Image */}
              <img
                src={promo.image}
                alt={promo.title}
                className="h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

              {/* Text Content - Positioned at the bottom */}
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full text-white">
                <span className="bg-[#80B5D7] text-[#133250] px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 inline-block">
                  Special Offer
                </span>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic leading-none">
                  {promo.title}
                </h3>
                <p className="text-slate-300 mt-2 font-medium max-w-xs text-sm md:text-base">
                  {promo.description}
                </p>

                {/* Modern CTA Link */}
                <div className="mt-6 flex items-center gap-2 group/link">
                  <span className="text-sm font-black uppercase tracking-widest">
                    Claim Offer
                  </span>
                  <div className="h-[2px] w-8 bg-white transition-all group-hover/link:w-16"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ProductList />
    </>
  );
};

export default Home;



















