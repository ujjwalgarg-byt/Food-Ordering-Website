import React from "react";
import ReactDOM from "react-dom/client";
// create app  component
/**
 * Header
 *  -logo
 *  -nav Items(home,about us, cart ,contact us)
 * Body
 *  -Search bar
 *  -Restaurant container
 *    -restaurant card
 *      -img
 *      -name of restro ,  start rating ,cuisine,delivery time etc.
 * Footer
 *  -copyrights
 *  -disclaimer
 *  -some links
 *  -address details
 * 
 */
// all these component inject inside a applayout component

const Header=()=>{
  return (
   <div className="header">
    <div className="logo-container">
      <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"/>
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
   </div>
  );
};

const RestaurantCard=(props)=>{
  //destructuring
  const{ resData }=props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = resData?.info;
  return (    
    <div className="res-card">
      <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  )
}

const resList =[
  {
  "info": {
  "id": "518651",
  "name": "Burger King",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/24/c426307b-c764-44e7-9130-e3c966363e44_518651.jpg",
  "locality": "Mohammadpur",
  "areaName": "Mission Compound",
  "costForTwo": "₹350 for two",
  "cuisines": [
  "Burgers",
  "American"
  ],
  "avgRating": 4.4,
  "parentId": "166",
  "avgRatingString": "4.4",
  "totalRatingsString": "4.0K+",
  "sla": {
  "deliveryTime": 24,
  "lastMileTravel": 4.9,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "4.9 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-15 02:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "60% OFF",
  "subHeader": "UPTO ₹120"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/burger-king-mohammadpur-mission-compound-rest518651",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "111127",
  "name": "Janak Dhaba",
  "cloudinaryImageId": "kfppwjnl3ua1pnjlo75a",
  "locality": "Rameshwar Mandir Road",
  "areaName": "Ram Jivan Nagar",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "North Indian",
  "South Indian",
  "Chinese",
  "Pizzas",
  "Burgers",
  "Desserts"
  ],
  "avgRating": 4.2,
  "veg": true,
  "parentId": "109524",
  "avgRatingString": "4.2",
  "totalRatingsString": "18K+",
  "sla": {
  "deliveryTime": 18,
  "lastMileTravel": 1.4,
  "serviceability": "SERVICEABLE",
  "slaString": "15-20 mins",
  "lastMileTravelString": "1.4 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-14 23:30:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "bolt/bolt%206.png",
  "description": "bolt!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "bolt!",
  "imageId": "bolt/bolt%206.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹29"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/janak-dhaba-rameshwar-mandir-road-ram-jivan-nagar-rest111127",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "384495",
  "name": "Five Star Janta",
  "cloudinaryImageId": "tu5zfqe79hbmwtopl3lm",
  "locality": "Clock Tower",
  "areaName": "Subash Nagar",
  "costForTwo": "₹350 for two",
  "cuisines": [
  "Bakery",
  "Desserts",
  "Snacks"
  ],
  "avgRating": 4.4,
  "veg": true,
  "parentId": "15743",
  "avgRatingString": "4.4",
  "totalRatingsString": "1.0K+",
  "sla": {
  "deliveryTime": 17,
  "lastMileTravel": 1.5,
  "serviceability": "SERVICEABLE",
  "slaString": "15-20 mins",
  "lastMileTravelString": "1.5 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-14 22:45:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "bolt/bolt%206.png",
  "description": "bolt!"
  }
  ]
  },
  "isOpen": true,
  "aggregatedDiscountInfoV2": {},
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "bolt!",
  "imageId": "bolt/bolt%206.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/five-star-janta-clock-tower-subash-nagar-rest384495",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "108942",
  "name": "Pindi Chole Bhature",
  "cloudinaryImageId": "39bd3f5cd7dae505016020eaa0bee677",
  "locality": "Sadar Thana Road",
  "areaName": "Gill Colony",
  "costForTwo": "₹150 for two",
  "cuisines": [
  "North Indian"
  ],
  "avgRating": 4.4,
  "veg": true,
  "parentId": "157913",
  "avgRatingString": "4.4",
  "totalRatingsString": "5.5K+",
  "sla": {
  "deliveryTime": 20,
  "lastMileTravel": 2.8,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-14 17:30:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "aggregatedDiscountInfoV2": {},
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/pindi-chole-bhature-sadar-thana-road-gill-colony-rest108942",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "383490",
  "name": "Five Star Premium",
  "cloudinaryImageId": "joexzaqpvppiu0etm5xg",
  "locality": "Tilak Nagar Main Road",
  "areaName": "Main Tilak Nagar Rd",
  "costForTwo": "₹450 for two",
  "cuisines": [
  "Bakery",
  "Desserts",
  "Snacks"
  ],
  "avgRating": 4.4,
  "veg": true,
  "parentId": "80090",
  "avgRatingString": "4.4",
  "totalRatingsString": "1.9K+",
  "sla": {
  "deliveryTime": 25,
  "lastMileTravel": 3.9,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "3.9 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-14 23:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "aggregatedDiscountInfoV2": {},
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/five-star-premium-tilak-nagar-main-road-main-tilak-nagar-rd-rest383490",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "440784",
  "name": "Hangries",
  "cloudinaryImageId": "kbxozy86o2nly7dktepd",
  "locality": "Chakrata Road",
  "areaName": "Jwala Nagar",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Italian",
  "Desserts"
  ],
  "avgRating": 4.4,
  "veg": true,
  "parentId": "93241",
  "avgRatingString": "4.4",
  "totalRatingsString": "1.2K+",
  "sla": {
  "deliveryTime": 17,
  "lastMileTravel": 0.7,
  "serviceability": "SERVICEABLE",
  "slaString": "15-20 mins",
  "lastMileTravelString": "0.7 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-14 23:59:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "bolt/bolt%206.png",
  "description": "bolt!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "bolt!",
  "imageId": "bolt/bolt%206.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/hangries-chakrata-road-jwala-nagar-rest440784",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "395578",
  "name": "Pizza Heart",
  "cloudinaryImageId": "lmf1kiyrjcm6i6lzde3w",
  "locality": "Ambala Road",
  "areaName": "Ambala Road Opp- Sky Land Hotel",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Italian",
  "Pizzas",
  "Burgers",
  "Chinese"
  ],
  "avgRating": 4.4,
  "veg": true,
  "parentId": "158623",
  "avgRatingString": "4.4",
  "totalRatingsString": "393",
  "sla": {
  "deliveryTime": 33,
  "lastMileTravel": 2.2,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "2.2 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-14 23:45:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "pureveg",
  "imageId": "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹59"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/pizza-heart-ambala-road-ambala-road-opp-sky-land-hotel-rest395578",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "794562",
  "name": "Frozen Bottle",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/26/0b1f4e2e-cce6-4473-9526-4d8e416fc80e_794562.jpg",
  "locality": "Saharanpur Nagar",
  "areaName": "COURT ROAD",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Beverages",
  "Ice Cream",
  "Desserts"
  ],
  "avgRating": 4.2,
  "veg": true,
  "parentId": "380662",
  "avgRatingString": "4.2",
  "totalRatingsString": "56",
  "sla": {
  "deliveryTime": 25,
  "lastMileTravel": 2.8,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "2.8 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-14 23:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹200 OFF",
  "subHeader": "ABOVE ₹599",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/frozen-bottle-nagar-court-road-rest794562",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "788778",
  "name": "Barista Coffee",
  "cloudinaryImageId": "d8061a234209ddf1bbb00c588a25a478",
  "locality": "Haqikatnagar",
  "areaName": "Haqikatnagar",
  "costForTwo": "₹350 for two",
  "cuisines": [
  "Beverages",
  "Snacks",
  "Desserts"
  ],
  "avgRating": 4.6,
  "parentId": "416281",
  "avgRatingString": "4.6",
  "totalRatingsString": "42",
  "sla": {
  "deliveryTime": 22,
  "lastMileTravel": 2.6,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "2.6 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-15 02:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹200 OFF",
  "subHeader": "ABOVE ₹599",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "4.2",
  "ratingCount": "75"
  },
  "source": "GOOGLE",
  "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/barista-coffee-haqikatnagar-rest788778",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "159704",
  "name": "Bharawan Da Dhaba",
  "cloudinaryImageId": "ajd1s7kzx7xrmhcm80mc",
  "locality": "Nawabganj",
  "areaName": "Subhash Nagar",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "North Indian",
  "Chinese"
  ],
  "avgRating": 4.3,
  "veg": true,
  "parentId": "6440",
  "avgRatingString": "4.3",
  "totalRatingsString": "9.9K+",
  "sla": {
  "deliveryTime": 24,
  "lastMileTravel": 1.2,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "1.2 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-14 17:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "bolt/bolt%206.png",
  "description": "bolt!"
  },
  {
  "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "bolt!",
  "imageId": "bolt/bolt%206.png"
  }
  },
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹35"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/bharawan-da-dhaba-nawabganj-subhash-nagar-rest159704",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "289922",
  "name": "Oregano",
  "cloudinaryImageId": "8d25df546febf6941e15a6fbadcf5345",
  "locality": "Mission Compound",
  "areaName": "Court Road",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Chinese",
  "Italian",
  "Continental",
  "Pizzas"
  ],
  "avgRating": 4,
  "veg": true,
  "parentId": "14662",
  "avgRatingString": "4.0",
  "totalRatingsString": "9.3K+",
  "sla": {
  "deliveryTime": 35,
  "lastMileTravel": 2.6,
  "serviceability": "SERVICEABLE",
  "slaString": "35-40 mins",
  "lastMileTravelString": "2.6 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-14 23:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/oregano-mission-compound-court-road-rest289922",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "439956",
  "name": "Grill Masters",
  "cloudinaryImageId": "zfovkvbokxt9dtpiyxkj",
  "locality": "Awas Vikas Market",
  "areaName": "Delhi Road Saranpur",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Continental",
  "Pizzas",
  "Chinese",
  "Burgers"
  ],
  "avgRating": 4.1,
  "parentId": "19537",
  "avgRatingString": "4.1",
  "totalRatingsString": "812",
  "sla": {
  "deliveryTime": 27,
  "lastMileTravel": 4,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "4.0 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-15 00:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹100"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/grill-masters-awas-vikas-market-delhi-road-saranpur-rest439956",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "370998",
  "name": "Gourmet Ice Cream Cakes by Baskin Robbins",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/318a1af4-ec67-48fe-9079-fde85384ac8c_370998.JPG",
  "locality": "NEAR MOHAN PANDY NARSING HOME",
  "areaName": "Saharanpur",
  "costForTwo": "₹150 for two",
  "cuisines": [
  "Desserts",
  "Ice Cream",
  "Bakery"
  ],
  "avgRating": 4.5,
  "veg": true,
  "parentId": "21932",
  "avgRatingString": "4.5",
  "totalRatingsString": "9",
  "sla": {
  "deliveryTime": 23,
  "lastMileTravel": 4.6,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "4.6 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-15 02:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "v1695133679/badges/Pure_Veg111.png",
  "description": "pureveg"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "pureveg",
  "imageId": "v1695133679/badges/Pure_Veg111.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹80"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/gourmet-ice-cream-cakes-by-baskin-robbins-near-mohan-pandy-narsing-home-saharanpur-rest370998",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "694042",
  "name": "Pizza Wings",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/d112a6d7-d173-4ca7-a5ee-40f845719d18_694042.JPG",
  "locality": "south city complex",
  "areaName": "Vasant Vihar",
  "costForTwo": "₹300 for two",
  "cuisines": [
  "Pizzas",
  "Pastas",
  "Rolls & Wraps",
  "Italian",
  "Desserts"
  ],
  "avgRating": 4.3,
  "parentId": "159048",
  "avgRatingString": "4.3",
  "totalRatingsString": "2.2K+",
  "sla": {
  "deliveryTime": 28,
  "lastMileTravel": 4.4,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "4.4 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-15 02:00:00",
  "opened": true
  },
  "badges": {
  "imageBadges": [
  {
  "imageId": "Rxawards/_CATEGORY-Pizza.png",
  "description": "Delivery!"
  }
  ]
  },
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {
  "badgeObject": [
  {
  "attributes": {
  "description": "Delivery!",
  "imageId": "Rxawards/_CATEGORY-Pizza.png"
  }
  }
  ]
  },
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹129"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/pizza-wings-south-city-complex-vasant-vihar-rest694042",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "513403",
  "name": "KFC",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/1bdaf350-1323-4f46-8204-d7d05c1871f7_513403.JPG",
  "locality": "City Mall",
  "areaName": "Chander Nagar",
  "costForTwo": "₹400 for two",
  "cuisines": [
  "Burgers",
  "Fast Food",
  "Rolls & Wraps"
  ],
  "avgRating": 4,
  "parentId": "547",
  "avgRatingString": "4.0",
  "totalRatingsString": "1.0K+",
  "sla": {
  "deliveryTime": 27,
  "lastMileTravel": 4.9,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "4.9 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-15 01:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "50% OFF",
  "subHeader": "UPTO ₹80"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/kfc-city-mall-chander-nagar-rest513403",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "289959",
  "name": "Baskin Robbins - Ice Cream Desserts",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/12/23a8920a-0ac3-4450-a401-91bab1377904_289959.jpg",
  "locality": "NEAR MOHAN PANDY NARSING HOME",
  "areaName": "Saharanpur",
  "costForTwo": "₹150 for two",
  "cuisines": [
  "Desserts",
  "Ice Cream"
  ],
  "avgRating": 4.4,
  "veg": true,
  "parentId": "5588",
  "avgRatingString": "4.4",
  "totalRatingsString": "340",
  "sla": {
  "deliveryTime": 23,
  "lastMileTravel": 4.6,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "4.6 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-15 02:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "ITEMS",
  "subHeader": "AT ₹59"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/baskin-robbins-ice-cream-desserts-near-mohan-pandy-narsing-home-saharanpur-rest289959",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "668125",
  "name": "The Belgian Waffle Co.",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/359a6df3-e659-43a5-9cec-b548fe717d7f_668125.JPG",
  "locality": "MOHAMMADPUR",
  "areaName": "MAFI DAR ABADI",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Waffle",
  "Desserts",
  "Ice Cream",
  "Beverages"
  ],
  "avgRating": 4.6,
  "veg": true,
  "parentId": "2233",
  "avgRatingString": "4.6",
  "totalRatingsString": "369",
  "sla": {
  "deliveryTime": 32,
  "lastMileTravel": 4.6,
  "serviceability": "SERVICEABLE",
  "slaString": "30-35 mins",
  "lastMileTravelString": "4.6 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-14 23:55:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹200 OFF",
  "subHeader": "ABOVE ₹899",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/the-belgian-waffle-co-mohammadpur-mafi-dar-abadi-rest668125",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "809308",
  "name": "La Pino'z Pizza",
  "cloudinaryImageId": "e5f54df4ed8bac458b801ede76ee37d0",
  "locality": "JAGDISH COLONY",
  "areaName": "Saharanpur Nagar",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "Pizzas",
  "Pastas",
  "Italian",
  "Desserts",
  "Beverages"
  ],
  "avgRating": 4.1,
  "parentId": "4961",
  "avgRatingString": "4.1",
  "totalRatingsString": "1.6K+",
  "sla": {
  "deliveryTime": 28,
  "lastMileTravel": 3.7,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "3.7 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-15 02:00:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹125 OFF",
  "subHeader": "ABOVE ₹349",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/la-pinoz-pizza-jagdish-colony-saharanpur-nagar-rest809308",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "497312",
  "name": "Kwality Walls Ice Cream and More",
  "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/d86aa020-faad-4863-820d-a2d759c7a7a3_497312.JPG",
  "locality": "Naven Nagar",
  "areaName": "Chander Nagar",
  "costForTwo": "₹200 for two",
  "cuisines": [
  "Desserts",
  "Ice Cream",
  "Ice Cream Cakes"
  ],
  "avgRating": 4.7,
  "veg": true,
  "parentId": "582",
  "avgRatingString": "4.7",
  "totalRatingsString": "1.4K+",
  "sla": {
  "deliveryTime": 20,
  "lastMileTravel": 3.7,
  "serviceability": "SERVICEABLE",
  "slaString": "20-25 mins",
  "lastMileTravelString": "3.7 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-14 23:55:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹150 OFF",
  "subHeader": "ABOVE ₹399",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/kwality-walls-ice-cream-and-more-naven-nagar-chander-nagar-rest497312",
  "type": "WEBLINK"
  }
  },
  {
  "info": {
  "id": "174024",
  "name": "Sagar Ratna",
  "cloudinaryImageId": "byu10o7ozyjkfqvy4wk5",
  "locality": "Yashoda madan",
  "areaName": "Haqikatnagar",
  "costForTwo": "₹250 for two",
  "cuisines": [
  "South Indian",
  "North Indian",
  "Chinese"
  ],
  "avgRating": 4.2,
  "veg": true,
  "parentId": "793",
  "avgRatingString": "4.2",
  "totalRatingsString": "1.1K+",
  "sla": {
  "deliveryTime": 26,
  "lastMileTravel": 2.4,
  "serviceability": "SERVICEABLE",
  "slaString": "25-30 mins",
  "lastMileTravelString": "2.4 km",
  "iconType": "ICON_TYPE_EMPTY"
  },
  "availability": {
  "nextCloseTime": "2025-04-14 23:45:00",
  "opened": true
  },
  "badges": {},
  "isOpen": true,
  "type": "F",
  "badgesV2": {
  "entityBadges": {
  "imageBased": {},
  "textBased": {},
  "textExtendedBadges": {}
  }
  },
  "aggregatedDiscountInfoV3": {
  "header": "₹175 OFF",
  "subHeader": "ABOVE ₹449",
  "discountTag": "FLAT DEAL"
  },
  "differentiatedUi": {
  "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
  "differentiatedUiMediaDetails": {
  "lottie": {},
  "video": {}
  }
  },
  "reviewsSummary": {},
  "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
  "restaurantOfferPresentationInfo": {},
  "externalRatings": {
  "aggregatedRating": {
  "rating": "--"
  }
  },
  "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
  },
  "analytics": {
  "context": "seo-data-2e49b3ed-7d9c-4612-a427-7702aef7e050"
  },
  "cta": {
  "link": "https://www.swiggy.com/city/saharanpur/sagar-ratna-yashoda-madan-haqikatnagar-rest174024",
  "type": "WEBLINK"
  }
  }
  ]
    


const Body=()=>{
  return(
    <div className="body">
      <div className="search">
        <input type="text" className="search-input" placeholder="Search for restaurant and food items"></input>
        <button className="search-btn">Search</button>
      </div>
      <div className="restro-container">
        {/* <RestaurantCard resData = {resList[0]}/> */}
        {resList.map((restaurant)=>(
          <RestaurantCard key={restaurant.info.id} resData={restaurant}/>
          ))}
        
      </div>
    </div>
  )
}

const AppLayout =() =>{
  return(
    <div className="app">
      <Header/>
      <Body/>
    </div>
  );
};

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout/>);
  //"main": "App.js",