import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-slate-300 mt-10 py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold">ShoeBrand</h2>
          <p className="mt-2">
            Your one-stop shop for stylish and comfortable shoes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
          <li>
            <Link to="/products" className="hover:text-orange-500">
              Shop
            </Link>
          </li>
            <li>
            <Link to="/contact" className="hover:text-orange-500">
              Contact
            </Link>
          </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold">Follow Us</h3>
          <div className="mt-2 flex justify-center md:justify-start space-x-4">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-2xl">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-2xl">
              <FaInstagram />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 border-t border-white-700 pt-4">
        <p>&copy; {new Date().getFullYear()} ShoeStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
