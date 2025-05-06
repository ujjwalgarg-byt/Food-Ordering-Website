import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useCheckStatus from "../utils/useCheckStatus";


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
    const data = await fetch(RESTAURANT_API);
    const json = await data.json();
    console.log(json);
    // setListOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    //this is not a good way of writing it so we need optional chaining like below
    setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus = useCheckStatus();
  if(onlineStatus=== false) {
    // if the online status is false then we will show the below message
    return (
      <div>
        <h1>Looks like you are offline, please check your internet connection</h1>
        
      </div>
    )
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
            <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} style={{ textDecoration: 'none', color:"black" }}><RestaurantCard resData={restaurant}/></Link>
          ))}
          
        </div>
      </div>
    )
  }
  export default Body;