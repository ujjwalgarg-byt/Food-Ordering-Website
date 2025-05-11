import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { useState } from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { CDN_URL } from "../utils/constants";

const Menu = () => {
  const { resId } = useParams();
  const menuData = useRestaurantMenu(resId);
  const [showItems, setShowItems] = useState(false);

  if (menuData === null) {
    return <ShimmerUi />;
  }

  const { name, cuisines, costForTwoMessage } =
    menuData?.cards?.[2]?.card?.card?.info || {};
  const itemCards =
    menuData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];

  const toggleItems = () => setShowItems((prev) => !prev);

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-bold mb-2 text-gray-800">{name}</h1>
      <p className="text-gray-600 mb-6 text-sm">
        {cuisines?.join(", ")} • {costForTwoMessage}
      </p>

      <div className="border-t pt-4">
        <button
          onClick={toggleItems}
          className="w-full text-left flex justify-between items-center text-xl font-semibold text-blue-700 hover:text-blue-900 transition"
        >
          <span>Recommended</span>
          <span>{showItems ? "▲" : "▼"}</span>
        </button>

        {showItems && (
          <ul className="mt-4 space-y-3">
            {itemCards.map((item) => (
              <li
                key={item.card.info.id}
                className="p-4 bg-gray-50 hover:bg-gray-100 rounded-md shadow-sm transition"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">
                    {item.card.info.name}
                  <p className="text-gray-700 text-sm">
                    ₹{(item.card.info.price ?? item.card.info.defaultPrice) / 100}
                  </p>
                  </span>
                  <span>
                    <img className="w-20 h-20 rounded-lg" src={CDN_URL+item.card.info.imageId}/>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Menu;
