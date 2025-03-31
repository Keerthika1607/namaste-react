import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
   const { resId } = useParams();//returns a dynamic parameter of the URL that the user is currently on.
   const resInfo = useRestaurantMenu(resId);

   if (!resInfo) return <Shimmer />;

   const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
   
   const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
       (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   ) || [];

   return (
      <div className="max-w-4xl mx-auto py-8 px-4 text-gray-800">
         <h1 className="text-3xl font-bold text-center mb-4">{name}</h1>
         <p className="text-lg text-center text-gray-600">{cuisines?.join(", ") || "No cuisines available"} - {costForTwoMessage}</p>

         <div className="mt-6">
            {categories.length > 0 ? (
               categories.map((category) => (
                  <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} />
               ))
            ) : (
               <p className="text-center text-gray-500">No categories available</p>
            )}
         </div>
      </div>
   );
};

export default RestaurantMenu;

