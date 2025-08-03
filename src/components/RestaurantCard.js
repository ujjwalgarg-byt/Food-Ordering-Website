import { CDN_URL } from "../utils/constants";

const RestaurantCard=(props)=>{
    //destructuring
    const{ resData }=props;
    // console.log('resData', resData );
    
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = resData?.info || {};
    const {header, subHeader} = resData?.info?.aggregatedDiscountInfoV3 || {};
    
    return (    
      <div data-testid="resCards" className="res-card m-[5px] p-[5px] w-[200px] h-[350px] rounded-lg bg-[#A8F1FF] hover:bg-[#6FE6FC] shadow-xl cursor-pointer relative break-words  ">
        <div className="relative">
          <img className="res-img w-[100%] h-33 rounded-md" src={CDN_URL+cloudinaryImageId}></img>
          {header || subHeader ? (
                    <div className="absolute -bottom-2 rounded-lg left-0 right-0 font-extrabold text-white text-center py-2">
                        <h3>{header} {subHeader}</h3>
                    </div>
                ) : null}
        </div>
        
        <h3 className="font-bold my-3">{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <div className="inline-flex  items-center py-3 absolute bottom-8">
         <p className="pl-4 pr-1 font-semibold">{avgRating}</p>
         <i className="fas fa-star text-green-700"></i>
         <p className="pl-10 font-semibold">{sla.slaString}</p>
        </div>
        
        {/* <h4>{costForTwo}</h4> */}
      </div>
    )
  }
export const CardWithOneBenifits = (RestaurantCard) => {
    return (props) =>{
        return(
            <div className="relative">
                <label className="bg-green-500 rounded p-1 absolute top-0 left-0 z-10 text-white ">pure veg</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}
  export default RestaurantCard;