import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "./Products";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    let foundProduct = null;

    for (const category of products) {
      foundProduct = category.items.find((item) => item.id === Number(id));
      if (foundProduct) break;
    }

    setProduct(foundProduct);
  }, [id]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  if (!product) {
    return (
      <div className="text-center text-orange-500 text-lg">
        Product not found
      </div>
    );
  }

  return (
    <div className="bg-gray-100 flex items-center justify-center p-12 animate-slide-in-up">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row">
        <img
          src={product.image}
          alt={product.name}
          className="w-full md:w-1/2 rounded-lg"
        />

        <div className="lg:mt-16 md:ml-8 w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-xl font-semibold text-gray-900 mt-4">
            ${product.price}
          </p>

          <div className="mt-4">
            <label className="block text-gray-700 font-medium">Quantity</label>
            <input
              type="number"
              value={quantity}
              min="1"
              onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
              className="w-16 px-2 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
          </div>

          <button
            className="mt-6 w-full bg-blue-900 text-white font-semibold py-2 rounded-lg hover:bg-blue-950 transition duration-300"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
