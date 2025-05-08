import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    //destructuring
    const{ resData }=props;
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (    
      <div className="res-card m-[5px] p-[5px] w-[200px] h-[350px] rounded-lg bg-[#A8F1FF] hover:bg-[#6FE6FC] shadow-xl cursor-pointer break-words">
        <img className="res-img w-[100%] h-33 rounded-md" src={CDN_URL+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h3>{sla.deliveryTime} minutes</h3>
      </div>
    )
  }
  export default RestaurantCard;