import { useState, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col items-center mx-auto p-4 sm:p-6 max-w-6xl animate-slide-in-up">
      <h2 className="text-center text-yellow-700 text-2xl sm:text-3xl font-bold mb-4">
        Shopping Cart
      </h2>
      {cart.length === 0 ? (
        <p className="flex-grow flex items-center justify-center text-xl sm:text-2xl text-gray-500">
          Your cart is empty.
        </p>
      ) : (
        <div className="bg-white shadow-lg rounded-lg p-4 overflow-x-auto w-full">
          <table className="w-full border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Product</th>
                <th className="text-left p-2">Image</th>
                <th className="text-left p-2">Price</th>
                <th className="text-center p-2">Quantity</th>
                <th className="text-left p-2">Total</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b text-sm sm:text-base">
                  <td className="p-2">{item.name}</td>
                  <td className="p-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-2">$ {item.price}</td>
                  <td className="p-2 text-center">
                    <input
                      type="number"
                      className="border p-1 w-12 sm:w-16 text-center"
                      value={item.quantity}
                      min="1"
                      onChange={(e) =>
                        updateQuantity(item.id, parseInt(e.target.value) || 1)
                      }
                    />
                  </td>
                  <td className="p-2">$ {item.price * item.quantity}</td>
                  <td className="p-2 text-center">
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => removeItem(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="text-right mt-4">
            <h3 className="text-lg sm:text-xl font-bold">
              Total: $ {totalPrice}
            </h3>
            <button
              className="bg-yellow-400 font-bold text-white px-3 sm:px-4 py-2 rounded mt-2 hover:bg-yellow-500"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
