import { useContext, useState } from "react";
import FoodVilla from "../assets/FoodVilla.png";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
import { useSelector } from "react-redux";
import cartIcon from "../assets/shopping-cart.png"; // or .svg/.jpg depending on your file

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const onlineStatus = useOnlineStatus();
  {
    /* Subscribing to the store using selector */
  }
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center h-24 px-8 bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg">
      {/* Logo */}
      <div className="logo-container">
        <img className="h-20 w-auto" src={FoodVilla} alt="FoodVilla Logo" />
      </div>

      {/* Navigation Menu */}
      <div className="flex items-center">
        <ul className="flex space-x-6 text-lg font-semibold">
          <li className="hover:text-gray-200 transition">
            Online: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="hover:text-gray-200 transition">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-200 transition">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-gray-200 transition">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="relative hover:text-gray-200 transition">
            <Link to="/cart" className="flex items-center gap-1">
              <img src={cartIcon} alt="Cart" className="w-6 h-6" />
              <span>Cart</span>
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </li>

          <li className="hover:text-gray-200 transition">
            <Link to="/grocery">Grocery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
