import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import { fireEvent, render,screen } from "@testing-library/react"
import appStore from "../../utils/appStore"
import "@testing-library/jest-dom"



test('should render Header component with a login button', () => {
  render(<BrowserRouter>
          <Provider store={appStore}>
            <Header />
            </Provider>
         </BrowserRouter>
        );
    
  //const  loginButton=screen.getByRole("button");
  const  loginButton=screen.getByRole("button",{name:"LogIn"});// use if there are multiple buttons

  //const loginButton = screen.getByText("LogIn");
  expect(loginButton).toBeInTheDocument();      
});

test('should render Header component with a cart items', () => {
  render(<BrowserRouter>
          <Provider store={appStore}>
            <Header />
            </Provider>
         </BrowserRouter>
        );
    //const cartItems = screen.getByText("Cart(0)"); // Matches "Cart(0)" or "Cart(1)" etc.  
    const cartItems = screen.getByText(/Cart/); // rejex to match any number of items in the cart  
     
    expect(cartItems).toBeInTheDocument();
});

test('should change login button to logout', () => {
  render(<BrowserRouter>
          <Provider store={appStore}>
            <Header />
            </Provider>
         </BrowserRouter>
        );
    const  loginButton=screen.getByRole("button",{name:"LogIn"});
    // Simulate a click on the login button
    fireEvent.click(loginButton);
    // Check if the button text has changed to "LogOut"
    const logoutButton = screen.getByRole("button",{name:"LogOut"});
    expect(logoutButton).toBeInTheDocument();
  
});


