import { CDN_URL } from "../utils/constants";

const styleCard = {
   backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {//props is an object.
   // console.log(props);
   const { resData } = props;
   const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
   const {deliveryTime} = resData?.info.sla;
   return (
      <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-900">
         <img 
            className="rounded-lg" 
            alt="res-logo" 
            src={CDN_URL + cloudinaryImageId }
         />
         <h3 className="font-bold py-4 text-lg">{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
         <h4>{avgRating}</h4>
         <h4>{costForTwo}</h4>
         <h4>{deliveryTime} minutes</h4>
      </div>
   )
};

//Higher Order Component
export const withPromotedLabel = (RestaurantCard) => {
   return(props) => {
      return (
         <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
               Promoted
            </label>
            <RestaurantCard {...props} />
         </div>
      );
   };
};

export default RestaurantCard;