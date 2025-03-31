import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
   const [resInfo, setResInfo] = useState(null);

   useEffect(() => {
      fetchData();
   }, []); 

   const fetchData = async () => {
      try {
         const response = await fetch(MENU_API + resId);
         const json = await response.json();
         setResInfo(json?.data);
      } catch (error) {
         console.error("Error fetching menu data:", error);
      }
   };

   return resInfo;
};

export default useRestaurantMenu;
