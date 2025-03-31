import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
   const [showItems, setShowItems] = useState(false);

   const handleClick = () => {
      setShowItems(!showItems);
   };

   return (
      <div className="w-8/12 mx-auto my-4 bg-white shadow-lg rounded-lg overflow-hidden">
         <div 
            className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer hover:bg-gray-200 transition duration-300"
            onClick={handleClick}
         >
            <span className="text-lg font-semibold text-gray-800">{data.title} ({data.itemCards.length})</span>
            <span className="text-xl">{showItems ? "🔼" : "🔽"}</span>
         </div>

         {showItems && (
            <div className="p-4 bg-white">
               <ItemList items={data.itemCards} />
            </div>
         )}
      </div>
   );
};

export default RestaurantCategory;
