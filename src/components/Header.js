import { useContext, useState } from "react";
import FoodVilla from "../assets/FoodVilla.png";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
import { useSelector } from "react-redux"; 

const Header = () => {
   const [isLoggedIn, setIsLoggedIn] = useState(true); 
   const onlineStatus = useOnlineStatus();
   {/* Subscribing to the store using selector */}
   const cartItems = useSelector((store) => store.cart.items);

   return (
      <div className="flex justify-between items-center h-24 px-8 bg-gradient-to-r from-green-500 to-blue-600 text-white shadow-lg">
         {/* Logo */}
         <div className="logo-container">
            <img className="h-20 w-auto" src={FoodVilla} alt="FoodVilla Logo"/>
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
               <li className="relative">
                  <Link 
                     to="/cart" 
                     className="flex items-center gap-2 text-lg font-bold bg-white text-gray-800 px-3 py-2 rounded-lg shadow-md hover:bg-gray-300 transition"
                  >
                     <span className="text-2xl">🛒</span> 
                     <span>Cart</span> 
                     {cartItems.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-sm px-2 py-1 rounded-full">
                           {cartItems.length}
                        </span>
                     )}
                  </Link>
               </li>

               <li className="hover:text-gray-200 transition">
                  <Link to="/grocery">Grocery</Link>
               </li>
               <li>
                  <button 
                     className={`ml-4 px-4 py-2 rounded-lg transition shadow-md ${
                        isLoggedIn ? "bg-red-500 text-white hover:bg-red-600" : "bg-green-500 text-white hover:bg-green-600"
                     }`}
                     onClick={() => setIsLoggedIn(!isLoggedIn)}
                  >
                     {isLoggedIn ? "Log Out" : "Login"}
                  </button>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Header;