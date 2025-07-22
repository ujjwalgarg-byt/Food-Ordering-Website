import { LOGO_URL } from "../utils/constants";
import {  useState,useContext } from "react";
import { Link } from "react-router-dom";
import useCheckStatus from "../utils/useCheckStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
  
  const [btnName,setBtnName]=useState("LogIn");
  const onlineStatus = useCheckStatus();
  const {loggedInUser} = useContext(UserContext);
  //subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  // console.log('cartItems:', cartItems);
  

    return (
     <div className="flex justify-between border-1 border-black bg-[#FFFA8D]  p-2 shadow-lg">
      <div className="logo-container">
        <img className=" w-23 rounded-xl shadow-lg" src={LOGO_URL}/>
      </div>
      <div className="flex  items-center">
        <ul className="flex ">
          <li className="p-2.5 m-2.5 font-semibold">Online Status:{onlineStatus ? "🟢" :"🔴"}</li>
          <li className="p-2.5 m-2.5 font-semibold"><Link to="/" >Home <i className="fa-solid fa-house"></i></Link></li>
          
          <li className="p-2.5 m-2.5 font-semibold"><Link to="/about" >About Us <i className="fas fa-users"></i></Link></li>
          <li className="p-2.5 m-2.5 font-semibold"><Link to="/contact" >Contact Us <i className="fas fa-envelope"></i></Link></li>
          <li className="p-2.5 m-2.5 font-semibold"><Link to="/cart">Cart({cartItems.length}) <i className="fa-solid fa-cart-shopping"></i></Link></li>
          <button className="login bg-[#F6EFBD] p-2.5 m-2.5 rounded-lg border border-solid border-black cursor-pointer"  
            onClick={()=>{
            btnName==="LogIn"
            ? setBtnName("LogOut")
            : setBtnName("LogIn");
            
            }}
          >
            {btnName}

          </button>
          {btnName==="LogOut" && (
            <li className="p-2.5 m-2.5 font-bold">{loggedInUser}</li>
          )}
          
        </ul>
      </div>
     </div>
    );
  };

  export default Header;