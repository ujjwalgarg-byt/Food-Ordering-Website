import { useState,useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
const Menu=()=>{
    const [menuData,setMenuData]=useState(null);
    const {resId} = useParams();


    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu=async()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setMenuData(json.data);
    }
    if(menuData===null){
        return <ShimmerUi/>
    };

    const{name,cuisines,costForTwoMessage}=menuData?.cards[2]?.card?.card?.info;
    const{itemCards}=menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log('itemCards',itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")}-{costForTwoMessage}</p>
            <h1>Menu</h1>
            <ul className="menu-list">
                {itemCards.map((item)=>(
                    <li key={item.card.info.id}>
                        {item.card.info.name} - {"Rs."}{item.card.info.price/100  || item.card.info.defaultPrice/100}
                    </li>
                
                ))}
                 
            </ul>

        </div>
    );
};
export default Menu;