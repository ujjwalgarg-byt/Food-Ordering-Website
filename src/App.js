import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

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
      <Body/>
    </div>
  );
};

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout/>);
  //"main": "App.js",