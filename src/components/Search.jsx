import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleUser } from "lucide-react";

const data = [
  {
    id: 1,
    category: "Sports",
    items: [
      {
        id: 101,
        image:
          "https://speedsports.pk/cdn/shop/files/31004002_sv03.jpg?v=1735293435&width=600",
        price: 100,
        name: "Black",
      },
      {
        id: 102,
        image:
          "https://onedegree.com.pk/cdn/shop/files/004_3.jpg?v=1738353125&width=360",
        price: 110,
        name: "Grey",
      },
      {
        id: 103,
        image:
          "https://onedegree.com.pk/cdn/shop/files/002_963657bf-b59f-42d0-b546-4b53e7a671e9.jpg?v=1738353129&width=360",
        price: 90,
        name: "Dark Grey",
      },
      {
        id: 104,
        image:
          "https://onedegree.com.pk/cdn/shop/files/asj_1of1_-2.jpg?v=1738353128&width=360",
        price: 80,
        name: "Olive",
      },
      {
        id: 105,
        image:
          "https://onedegree.com.pk/cdn/shop/files/02copy_af2f5b9a-1af5-4fd7-ad6a-4399fcd493cd.jpg?v=1738353124&width=360",
        price: 50,
        name: "White",
      },
      {
        id: 106,
        image:
          "https://onedegree.com.pk/cdn/shop/files/02copy_02b53ba4-7004-4aee-a656-a8e7d9152ed5.jpg?v=1738353126&width=360",
        price: 30,
        name: "Black",
      },
      {
        id: 107,
        image:
          "https://onedegree.com.pk/cdn/shop/files/002_d8e8b340-a0b9-489f-a7f7-e5d841f90b62.jpg?v=1738353114&width=360",
        price: 100,
        name: "Seagreen",
      },
      {
        id: 108,
        image:
          "https://onedegree.com.pk/cdn/shop/files/001_17b54ac0-03ab-4d46-854a-bc8e60dba28f.jpg?v=1738353115&width=360",
        price: 50,
        name: "Grey and Black",
      },
      {
        id: 109,
        image:
          "https://onedegree.com.pk/cdn/shop/files/05_12de26d6-abc8-4d9a-9699-6f9f0a319507.jpg?v=1738353111&width=360",
        price: 40,
        name: "Grey",
      },
      {
        id: 110,
        image:
          "https://onedegree.com.pk/cdn/shop/files/01_807b4ca0-b611-4074-bed1-0d4af3862075.jpg?v=1738353110&width=360",
        price: 40,
        name: "Seablue",
      },
    ],
  },
  {
    id: 2,
    category: "Formal",
    items: [
      {
        id: 111,
        image:
          "https://www.ndure.com/cdn/shop/files/1_1b01031e-89cd-4427-9177-85e714b3813d.jpg?v=1726465453&width=493",
        price: 70,
        name: "Formal Black Shoes",
      },
      {
        id: 112,
        image:
          "https://www.ndure.com/cdn/shop/files/1_9ded95b4-ac45-47fe-a8e7-4056d84de7bb.jpg?v=1726134109&width=493",
        price: 60,
        name: "Formal Brown Shoes",
      },
      {
        id: 113,
        image:
          "https://www.ndure.com/cdn/shop/files/1_8f7c00d5-a174-45d6-ab2c-23ff03e80abb.jpg?v=1725449326&width=493",
        price: 50,
        name: "Formal Brown Shoes",
      },
      {
        id: 114,
        image:
          "https://www.ndure.com/cdn/shop/files/1_e6e3b282-e025-42f0-b395-874e77b8d0c1.jpg?v=1729145992&width=493",
        price: 60,
        name: "Formal Black Shoes",
      },
      {
        id: 115,
        image:
          "https://www.ndure.com/cdn/shop/files/1_c0dfdb07-2069-44aa-ab94-8b641b7de8a1.jpg?v=1727949023&width=493",
        price: 40,
        name: "Formal Black Shoes",
      },
    ],
  },
  {
    id: 3,
    name: "Blue Sports Shoes",
    category: "Casual",
    items: [
      {
        id: 116,
        image:
          "https://onedegree.com.pk/cdn/shop/files/Grey-4.jpg?v=1738353192&width=360",
        price: 20,
        name: "Grey Casual",
      },
      {
        id: 117,
        image:
          "https://onedegree.com.pk/cdn/shop/files/One-Degree-Blue-and-White-Slides-5_2.jpg?v=1738353190&width=360",
        price: 22,
        name: "Blue Casual",
      },
      {
        id: 118,
        image:
          "https://onedegree.com.pk/cdn/shop/files/Blue-and-Orange-2.jpg?v=1738353191&width=360",
        price: 21,
        name: "White Casual",
      },
    ],
  },
];

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // Flattening product list
  const allProducts = data.flatMap((category) => category.items);

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredData([]);
      return;
    }
    const results = allProducts.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col items-center px-4 w-full">
    {/* Search Input and User Button */}
    <div className="flex items-center justify-between w-full max-w-3xl mt-5 space-x-3">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyPress}
        className="p-2 border border-gray-500 rounded-full w-full sm:w-[28rem] md:w-[36rem] lg:w-[40rem] focus:outline-none"
      />
      <button
        className="p-2 rounded-full hover:bg-gray-200 flex items-center justify-center"
        onClick={() => navigate("/signin")}
      >
        <CircleUser size={32} className="text-gray-600" />
      </button>
    </div>
  
    {/* Product Grid */}
    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 w-full max-w-7xl px-2">
      {filteredData.map((item) => (
        <div
          key={item.id}
          className="p-3 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center bg-white"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          <img
            src={item.image}
            alt={item.name}
            className="h-28 w-36 rounded object-cover mb-3"
          />
          <div className="text-center">
            <h3 className="text-black text-lg font-semibold">{item.name}</h3>
            <p className="text-black">Price: ${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>  
  );
};

export default Search;
