import { LOGO_URL } from "../utils/constants";
import { use, useState } from "react";
import { Link } from "react-router-dom";
import useCheckStatus from "../utils/useCheckStatus";
const Header=()=>{
  const [btnName,setBtnName]=useState("LogIn");
  const onlineStatus = useCheckStatus();
    return (
     <div className="flex justify-between border-1 border-black bg-gray-300 items-center mb-4 p-2 shadow-2xl shadow-gray-100">
      <div className="logo-container">
        <img className=" w-24 rounded-lg shadow-lg" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul className="flex space-x-4 text-lg ">
          
          <li className="p-2.5 m-2.5"><Link to="/" style={{ textDecoration: 'none', color:"black" }}>Home</Link></li>
          <li className="p-2.5 m-2.5"><Link to="/about" style={{ textDecoration: 'none', color:"black" }}>About Us</Link></li>
          <li className="p-2.5 m-2.5"><Link to="/contact" style={{ textDecoration: 'none', color:"black" }}>Contact Us</Link></li>
          <li className="p-2.5 m-2.5">Cart</li>
          <button className="login" 
            onClick={()=>{
            btnName==="LogIn"
            ? setBtnName("LogOut")
            : setBtnName("LogIn");
            
            }}
          >
            {btnName}

          </button>
          <li className="p-2.5 m-2.5">User's Status:{onlineStatus ? "🟢" :"🔴"}</li>
        </ul>
      </div>
     </div>
    );
  };

  export default Header;