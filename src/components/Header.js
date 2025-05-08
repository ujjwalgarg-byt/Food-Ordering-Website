import { LOGO_URL } from "../utils/constants";
import { use, useState } from "react";
import { Link } from "react-router-dom";
import useCheckStatus from "../utils/useCheckStatus";
const Header=()=>{
  const [btnName,setBtnName]=useState("LogIn");
  const onlineStatus = useCheckStatus();
    return (
     <div className="flex justify-between border-1 border-black bg-[#FFFA8D]  p-2 shadow-lg">
      <div className="logo-container">
        <img className=" w-24 rounded-lg shadow-lg" src={LOGO_URL}/>
      </div>
      <div className="flex  items-center">
        <ul className="flex ">
          <li className="p-2.5 m-2.5">Online Status:{onlineStatus ? "🟢" :"🔴"}</li>
          <li className="p-2.5 m-2.5"><Link to="/" style={{ textDecoration: 'none', color:"black" }}>Home</Link></li>
          <li className="p-2.5 m-2.5"><Link to="/about" style={{ textDecoration: 'none', color:"black" }}>About Us</Link></li>
          <li className="p-2.5 m-2.5"><Link to="/contact" style={{ textDecoration: 'none', color:"black" }}>Contact Us</Link></li>
          <li className="p-2.5 m-2.5">Cart</li>
          <button className="login bg-[#F6EFBD] p-2.5 m-2.5 rounded-lg border border-solid border-black cursor-pointer"  
            onClick={()=>{
            btnName==="LogIn"
            ? setBtnName("LogOut")
            : setBtnName("LogIn");
            
            }}
          >
            {btnName}

          </button>
          
        </ul>
      </div>
     </div>
    );
  };

  export default Header;