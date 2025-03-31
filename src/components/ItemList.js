import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
   const dispatch = useDispatch();

   const handleAddItem = (item) => {
      dispatch(addItem(item));
   };

   return (
      <div className="flex flex-col space-y-4">
         {items.map((item) => (
            <div 
               key={item.card.info.id}
               className="flex justify-between items-center bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition duration-300"
            >
               <div className="w-9/12">
                  <h3 className="text-lg font-semibold text-gray-800">{item.card.info.name}</h3>
                  <p className="text-gray-500 text-sm">{item.card.info.description}</p>
                  <span className="text-gray-700 font-bold">₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
               </div>
               
               <div className="w-3/12 flex flex-col items-center">
                  {item.card.info.imageId && (
                     <img src={CDN_URL + item.card.info.imageId} className="w-24 h-24 object-cover rounded-md shadow-md" alt="Food"/>
                  )}
                  <button 
                     className="mt-2 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
                     onClick={() => handleAddItem(item)}
                  >
                     Add +
                  </button>
               </div>
            </div>
         ))}
      </div>
   );
};

export default ItemList;


