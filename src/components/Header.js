import { LOGO_URL } from "../utils/constants";
import { use, useState } from "react";
import { Link } from "react-router-dom";
import useCheckStatus from "../utils/useCheckStatus";
const Header=()=>{
  const [btnName,setBtnName]=useState("LogIn");
  const onlineStatus = useCheckStatus();
    return (
     <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}/>
      </div>
      <div className="nav-items">
        <ul>
          
          <li><Link to="/" style={{ textDecoration: 'none', color:"black" }}>Home</Link></li>
          <li><Link to="/about" style={{ textDecoration: 'none', color:"black" }}>About Us</Link></li>
          <li><Link to="/contact" style={{ textDecoration: 'none', color:"black" }}>Contact Us</Link></li>
          <li>Cart</li>
          <button className="login" 
            onClick={()=>{
            btnName==="LogIn"
            ? setBtnName("LogOut")
            : setBtnName("LogIn");
            
            }}
          >
            {btnName}

          </button>
          <li>User's Status:{onlineStatus ? "🟢" :"🔴"}</li>
        </ul>
      </div>
     </div>
    );
  };

  export default Header;