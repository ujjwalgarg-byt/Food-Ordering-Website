import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Menu from "./components/Menu";
import UserContext from "./utils/UserContext";
import { useState} from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import FoodCartPage from "./components/FoodCartPage";
import Footer from "./components/Footer";

    
const AppLayout =() =>{
  const [userName,setUserName]=useState();
  useEffect(()=>{
    const data={
      name:" ",
    }
    setUserName(data.name);
  },[]);

  return(
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
          <Footer />
        </div>
      </UserContext.Provider>
    </Provider>
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
      {
        path:"/cart",
        element:<FoodCartPage/>,
      },
      
    ],

    errorElement:<Error/>,

  },
 
]);
  

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter}/>);
  