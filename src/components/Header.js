import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";

const Header = () => {
   const [btnName, setBtnName] = useState("Log Out");
   const onlineStatus = useOnlineStatus();
   
   return (
      <div className="header">
         <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
         </div>
         <div className="nav-items">
            <ul>
               <li>
                  onlineStatus : {onlineStatus ? "✅" : "🔴"}
               </li>
               <li>
                  <Link to="/">Home</Link>
               </li>
               <li>
                  <Link to="/about">About Us</Link>
               </li>
               <li>
                  <Link to="/contact">Contact Us</Link>
               </li>
               <li>
                  <Link to="/cart">Cart</Link>
               </li>
               <li>
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