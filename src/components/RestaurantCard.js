import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
  const { deliveryTime } = resData?.info.sla;

  return (
    <div className="m-4 p-4 w-[280px] bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300">
      {/* Restaurant Image */}
      <img 
        className="w-full h-40 object-cover rounded-lg" 
        alt="restaurant-logo" 
        src={CDN_URL + cloudinaryImageId }
      />

      {/* Restaurant Details */}
      <div className="mt-4">
        <h3 className="font-bold text-lg text-gray-900">{name}</h3>
        <h4 className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</h4>
        
        {/* Rating and Cost Row */}
        <div className="flex justify-between items-center mt-2">
          <span className="bg-green-500 text-white text-sm font-semibold px-2 py-1 rounded-md">
            ⭐ {avgRating}
          </span>
          <h4 className="text-gray-800 font-semibold">{costForTwo}</h4>
        </div>

        {/* Delivery Time */}
        <h4 className="text-gray-500 text-sm mt-2">🚀 {deliveryTime} mins</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
