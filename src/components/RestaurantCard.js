import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    //destructuring
    const{ resData }=props;
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = resData?.info;
    return (    
      <div className="res-card">
        <img className="res-img" src={CDN_URL+cloudinaryImageId}></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} minutes</h4>
      </div>
    )
  }
  export default RestaurantCard;