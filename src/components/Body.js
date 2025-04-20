import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";

import ShimmerUi from "./ShimmerUi";
const Body=()=>{

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
 // we can also write the above line as below
  // const arr = useState(resList);
  // const listOfRestaurant = arr[0];
  // const setListOfRestaurant = arr[1];

  const [searchText, setSearchText] = useState("");

  useEffect(()=>{
    fetchData();

  },[]);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9680035&lng=77.55520659999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    // setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    //this is not a good way of writing it so we need optional chaining like below
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  if(listOfRestaurant.length === 0) {
    return <ShimmerUi/>;
  }
  // if we do not have any data then we will show the shimmer ui

    return(
      <div className="body">
        <div className="filter">
        <div className="search">
          <input
           type="text"
           className="search-box"
           value={searchText}
           onChange={(e)=>{
            setSearchText(e.target.value);

           }} />
          <button className="search-btn"
           onClick={()=>{
            console.log(searchText);
            const filteredRestaurant = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
              
            );
            setFilteredRestaurant(filteredRestaurant);
           }} 
          >
           Search
          </button>
        </div>
        <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurant.filter(
            (res) => res.info.avgRating > 4.5
          );
          setListOfRestaurant(filteredList);
        }}
      >
        Top Rated Restaurants
      </button>

        </div>
        <div className="restro-container">
          {/* <RestaurantCard resData = {resList[0]}/> */}
          {filteredRestaurant.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
            ))}
          
        </div>
      </div>
    )
  }
  export default Body;