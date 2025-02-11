import  useRestaurantMenu  from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";


// const RestaurantMenu = () => {
//    const {resId} = useParams();
//    const resInfo = useRestaurantMenu(resId);
   
//    if(resInfo === null) return <Shimmer />;

//    const {name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
//    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

//    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presen food.v2.ItemCategory");
   
//    return (
//       <div className="text-center">
//          <h1 className="font-bold my-6 text-2xl">{name}</h1>
//          <p className="font-bold text-lg">
//             {cuisines.join(", ")} - {costForTwoMessage}
//          </p>
//          {categories.map((category) => (
//             <RestaurantCategory data={category?.card?.card}/>
//          ))}
//       </div>
//    )
// };

// export default RestaurantMenu;

const RestaurantMenu = () => {
   const { resId } = useParams();
   const resInfo = useRestaurantMenu(resId);

   if (resInfo === null) return <Shimmer />;

   console.log("API Response:", resInfo);  // Debugging API response

   const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
   
   const categories =
     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
       (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presen food.v2.ItemCategory"
     ) || []; // Fallback to empty array

   return (
      <div className="text-center">
         <h1 className="font-bold my-6 text-2xl">{name}</h1>
         <p className="font-bold text-lg">
            {cuisines?.join(", ") || "No cuisines available"} - {costForTwoMessage}
         </p>
         {categories.length > 0 ? (
            categories.map((category) => (
               <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card} />
            ))
         ) : (
            <p>No categories available</p>
         )}
      </div>
   );
};

export default RestaurantMenu;
