import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const Menu=()=>{
    
    const {resId} = useParams();
    const menuData=useRestaurantMenu(resId);

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
            <h2>Recommanded</h2>
            {/* <select className="menu-list">
                {itemCards.map((item)=>(
                    <option key={item.card.info.id} value={item.card.info.name}>
                        {item.card.info.name} - {"Rs."}{item.card.info.price/100  || item.card.info.defaultPrice/100}
                    </option>
                ))}
            </select>     */}
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