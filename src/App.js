import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Menu from "./components/Menu";
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

    
const AppLayout =() =>{
  return(
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<AboutUs/>,
    
      },
      {
        path:"/contact",
        element:<ContactUs/>,
    
      },
      {
        path:"/restaurants/:resId",
        element:<Menu/>,
    
      },
    ],

    errorElement:<Error/>,

  },
 
]);
  

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter}/>);
  