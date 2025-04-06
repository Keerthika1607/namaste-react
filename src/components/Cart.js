
import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";

const Cart = () => {
   const cartItems = useSelector((store) => store.cart.items);
   const dispatch = useDispatch();

   const handleClearCart = () => {
      dispatch(clearItem());
   };

   return (
      <div className="flex flex-col items-center mt-10">
         {/* Cart Header */}
         <h1 className="text-3xl font-extrabold text-gray-700 mb-6">🛒 Shopping Cart</h1>

         {/* Cart Container */}
         <div className="w-3/5 bg-gray-50 p-6 shadow-lg rounded-xl">
            {/* Clear Cart Button */}
            <button 
               className="px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition mb-4"
               onClick={handleClearCart}
            >
               🗑️ Clear Cart
            </button>

            {/* Empty Cart Message */}
            {cartItems.length === 0 ? (
               <h1 className="text-gray-500 text-lg mt-4">Your cart is empty! 🛍️ Add some items.</h1>
            ) : (
               <ItemList items={cartItems} />
            )}
         </div>
      </div>
   );
};

export default Cart;
