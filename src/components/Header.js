import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";

const Header = () => {
   const [btnName, setBtnName] = useState("Log Out");
   const onlineStatus = useOnlineStatus();
   
   return (
      <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
         <div className="logo-container">
            <img className="w-56" src={LOGO_URL} />
         </div>
         <div className="flex items-center">
            <ul className="flex p-4 m-4">
               <li className="px-4">
                  onlineStatus : {onlineStatus ? "✅" : "🔴"}
               </li>
               <li className="px-4">
                  <Link to="/">Home</Link>
               </li>
               <li className="px-4">
                  <Link to="/about">About Us</Link>
               </li>
               <li className="px-4">
                  <Link to="/contact">Contact Us</Link>
               </li>
               <li className="px-4">
                  <Link to="/cart">Cart</Link>
               </li>
               <li className="px-4">
                  <Link to="/grocery">Grocery</Link>
               </li>
               <button className="login" onClick={() => {
                  btnName === "Log Out" ? setBtnName("Login") : setBtnName("Log Out");
               }}>{btnName}</button>
            </ul>
         </div>
      </div>
   )
};

export default Header;