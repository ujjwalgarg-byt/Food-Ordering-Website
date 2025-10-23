import RestaurantCard,{CardWithOneBenifits} from "./RestaurantCard";
import { use, useEffect, useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useCheckStatus from "../utils/useCheckStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Body=()=>{

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
 // we can also write the above line as below
  // const arr = useState(resList);
  // const listOfRestaurant = arr[0];
  // const setListOfRestaurant = arr[1];

  const [searchText, setSearchText] = useState("");
  const CardWithBenifits = CardWithOneBenifits(RestaurantCard);
  const {loggedInUser,setUserName} = useContext(UserContext); 

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
      <div className="body bg-[#F4FFC3]">
        <div className="filter flex">
        <div className=" search m-4 p-4 ">
          <input
           type="text"
           data-testid="search-input"
           className="border border-solid border-black rounded-md bg-white text-center"
           value={searchText}
           onChange={(e)=>{
            setSearchText(e.target.value);

           }} />
          <button className="search-btn bg-amber-100 px-3 py-0.5 m-3 rounded-lg border border-solid border-black cursor-pointer"
           onClick={()=>{
            // console.log(searchText);
            const filteredRestaurant = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
              
            );
            setFilteredRestaurant(filteredRestaurant);
           }} 
          >
           Search
          </button>
        </div>
        <div className=" top-restro m-4 p-4 flex items-center">
        <button
         className="m-2.5 bg-amber-100 px-3 py-0.5 rounded-lg border border-solid border-black cursor-pointer" 
          onClick={() => {
          const filteredList = listOfRestaurant.filter(
            (res) => res.info.avgRating > 4.3
          );
          setFilteredRestaurant(filteredList);
          }}
        >
        Top Rated Restaurants
        </button>

        </div>
          <div className=" top-restro m-4 p-4 flex items-center">
            <label className="font-bold">UserName : </label>
             <input 
                    className="border border-black m-2 p-0.5 rounded-lg text-center bg-white"
                    type="text"
                    value={loggedInUser}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
             />
          </div>
        </div>
        

        <div className="restro-container flex flex-wrap justify-center "> 
          {/* <RestaurantCard resData = {resList[0]}/> */}
          {filteredRestaurant.map((restaurant)=>(
            <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} style={{ textDecoration: 'none', color:"black" }}>
              {
                restaurant?.info?.veg ?
                              <CardWithBenifits key ={restaurant?.info?.id} resData = {restaurant} /> :
                              <RestaurantCard key ={restaurant?.info?.id} resData = {restaurant} />
                            
              }
            </Link>
          ))}
          
        </div>
      </div>
    )
  }
  export default Body;