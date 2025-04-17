import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";


const Body=()=>{

  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
 // we can also write the above line as below
  // const arr = useState(resList);
  // const listOfRestaurant = arr[0];
  // const setListOfRestaurant = arr[1];
    return(
      <div className="body">
        <div className="filter">
        <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurant.filter(
            (res) => res.info.avgRating > 4
          );
          setListOfRestaurant(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>

        </div>
        <div className="restro-container">
          {/* <RestaurantCard resData = {resList[0]}/> */}
          {listOfRestaurant.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}
          
        </div>
      </div>
    )
  }
  export default Body;