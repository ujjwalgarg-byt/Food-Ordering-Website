import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useState } from "react";
import ItemCategory from "./ItemCategory";

const Menu = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (menuData === null) {
    return <ShimmerUi />;
  }

  const { name, cuisines, costForTwoMessage } =
    menuData?.cards?.[2]?.card?.card?.info;


  // console.log(menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  // console.log('category',categories);
  
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-2 my-6 text-gray-800">{name}</h1>
      <p className="text-gray-600  text-sm ">
        {cuisines?.join(", ")} • {costForTwoMessage}
      </p>
      {
       categories.map((category,index) => (
        <ItemCategory
         key={category?.card?.card.title}
         data={category?.card?.card}
         showItems={index===showIndex?true:false}
         showIndex={showIndex}
         index={index}
         setShowIndex={setShowIndex}
        />
       ))
      }
    </div>
  );
};

export default Menu;
