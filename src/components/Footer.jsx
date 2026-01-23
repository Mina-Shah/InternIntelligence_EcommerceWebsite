import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#133250] text-slate-300 py-12 mt-10 border-t-4 border-[#133250]">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
        {/* Logo and Description */}
        <div className="space-y-4">
          <h2 className="text-3xl font-black text-white">
            SHOE<span className="text-[#80B5D7]">POINT</span>
            <span className="text-sm text-white font-normal italic">.pk</span>
          </h2>
          <p className="text-white leading-relaxed max-w-xs mx-auto md:mx-0">
            Premium footwear for every step. We bring you the best selection of
            sports, formal, and casual styles.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="/products"
                className="hover:text-blue-300 hover:underline transition-colors duration-300"
              >
                Shop Collection
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-300 hover:underline transition-colors duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/track-order"
                className="hover:text-blue-300 hover:underline transition-colors duration-300"
              >
                Track Order
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-bold text-white uppercase tracking-widest mb-4">
            Follow Us
          </h3>
          <p className="text-sm text-white mb-4">
            Stay updated with our latest drops.
          </p>
          <div className="flex justify-center md:justify-start space-x-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-all transform hover:-translate-y-1"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-all transform hover:-translate-y-1"
            >
              <FaInstagram size={28} />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-300 transition-all transform hover:-translate-y-1"
            >
              <FaTwitter size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="container mx-auto px-6 mt-6 pt-3 border-t border-white/20 flex flex-col items-center justify-center text-center text-sm text-white">
        <p className="mt-6">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-bold uppercase tracking-wider">
            Shoe Point.pk
          </span>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
