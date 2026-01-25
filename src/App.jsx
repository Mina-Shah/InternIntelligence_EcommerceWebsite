import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Search from "./components/Search";
import SignIn from "./components/SignIn";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TrackOrder from "./components/TrackOrder";
import OrderSuccess from "./components/OrderSuccess";
import ScrollToTop from "./components/ScrollToTop";
import AdminDashboard from "./components/AdminDashboard";
import "./index.css";

function App() {
  const location = useLocation();

  // Logic: Hide footer if the URL starts with "/product/"
const showFooter = location.pathname !== "/checkout";
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 flex flex-col">
      {/* ScrollToTop ensures the user starts at the top when changing pages */}
      <ScrollToTop />
      {/* Global Navbar appears on every page */}
      <Navbar />
      {/* Main content area expands to fill space */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/track-order" element={<TrackOrder />} />
          <Route path="/order-success" element={<OrderSuccess />} />
          <Route path="/admin-portal-99" element={<AdminDashboard />} />
        </Routes>
      </main>
      {/* Conditional Rendering: Footer only shows if it's NOT a product page */}
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
