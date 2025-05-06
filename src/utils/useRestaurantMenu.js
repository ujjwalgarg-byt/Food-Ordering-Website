import { useState,useEffect } from "react";
import { MENU_API } from "../utils/constants";
const useRestaurantMenu = (resId) => {
    const [menuData,setMenuData]=useState(null);
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu=async()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setMenuData(json.data);
    }
    return menuData;
}
export default useRestaurantMenu;
// This custom hook fetches the restaurant menu data from the API and returns it. It uses the useEffect hook to fetch the data when the component mounts. The useState hook is used to manage the state of the menu data. The fetchMenu function is defined inside the useEffect hook and is called immediately to fetch the data. The fetched data is then set in the state using setMenuData.