import React from "react";
import { useNavigate } from "react-router-dom";
import ProductList from "./ProductList";
import Search from "./Search";

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
];

const Home = () => {
    const navigate = useNavigate();
  
  return (
    <>
    <Search/>
      <div className="container mx-auto p-6">
        {/* Hero Section */}
        <div className="bg-blue-900 text-white text-center p-10 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold">Step into Comfort and Style</h1>
          <p className="mt-2">Discover the latest trends in footwear</p>
          <button
            className="mt-4 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
            onClick={() => navigate("/products")}
          >
            Shop Now
          </button>
        </div>

        {/* Promotions Section */}
        <div className="mt-10 animate-slide-in-up">
          <h2 className="text-center text-3xl font-semibold text-blue-900 animate-pulse">
            Season Sales
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 mt-4">
            {promotions.map((promo) => (
              <div
                key={promo.id}
                className="p-4 text-center border rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={() => navigate(`/product/${item.id}`)}       >
            
                <img
                  src={promo.image}
                  alt={promo.title}
                  className="w-full h-60 object-cover rounded-lg"
                />
                <h3 className="text-lg font-bold mt-2 animate-pulse">
                  {promo.title}
                </h3>
                <p className="text-gray-600">{promo.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Products Section */}
        <div className="mt-10 animate-slide-in-up">
          <h2 className="text-center text-3xl font-semibold text-blue-900">
            Featured
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="p-4 text-center border rounded-lg hover:shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProductList />
    </>
  );
};

export default Home;
