import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CircleUser, Search as SearchIcon, X } from "lucide-react";

// The data object remains the same as you provided...
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
];

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  // 1. Flatten products for easier searching
  const allProducts = data.flatMap((category) => category.items);

  // 2. LIVE SEARCH LOGIC: useEffect triggers every time searchTerm changes
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredData([]);
    } else {
      const results = allProducts.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(results);
    }
  }, [searchTerm]);

  const clearSearch = () => {
    setSearchTerm("");
    setFilteredData([]);
  };

  return (
    <div className="flex flex-col items-center w-full sticky top-0 z-[100] bg-white/80 backdrop-blur-md pb-4">
      {/* Search Input Bar */}
      <div className="flex items-center justify-between w-full max-w-5xl px-6 mt-5 space-x-4">
        <div className="relative flex-grow group">
          <SearchIcon
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-700 transition-colors"
            size={20}
          />
          <input
            type="text"
            placeholder="Search for your style (e.g. 'Black', 'Casual')..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-12 pr-12 py-3 border-2 border-yellow-700 rounded-2xl w-full bg-slate-50 focus:bg-white focus:border-yellow-900 focus:outline-none transition-all shadow-sm"
          />
          {searchTerm && (
            <button
              onClick={clearSearch}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500"
            >
              <X size={20} />
            </button>
          )}
        </div>

        <button
          className="p-2 rounded-2xl hover:bg-slate-100 transition-colors"
          onClick={() => navigate("/signin")}
        >
          <CircleUser color="#5e4708" size={42} />
        </button>
      </div>

      {/* Instant Search Results Dropdown/Grid */}
      {searchTerm && (
        <div className="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-slate-100 max-h-[70vh] overflow-y-auto animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="container mx-auto p-6">
            {filteredData.length > 0 ? (
              <>
                <p className="text-slate-400 text-sm mb-4">
                  Found {filteredData.length} matches
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {filteredData.map((item) => (
                    <div
                      key={item.id}
                      className="cursor-pointer group flex flex-col items-center p-2 rounded-3xl hover:bg-slate-50 transition-all"
                      onClick={() => {
                        navigate(`/product/${item.id}`);
                        clearSearch();
                      }}
                    >
                      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100 mb-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <h3 className="font-bold text-sm text-center line-clamp-1">
                        {item.name}
                      </h3>
                      <p className="font-black text-sm">${item.price}</p>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="py-20 text-center">
                <p className="text-slate-400 text-lg">
                  No shoes found for "
                  <span className="text-slate-900 font-bold">{searchTerm}</span>
                  "
                </p>
                <button onClick={clearSearch} className="mt-2 underline">
                  Clear search
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
