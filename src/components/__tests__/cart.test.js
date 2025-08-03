import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react"
import Menu from "../Menu"
import MOCK_DATA from "../mocks/mockResMenu.json"
import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"
import FoodCartPage from "../FoodCartPage"
global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should Load Res Menu Component",async()=>{
    await act(async()=>render(
        <Provider store={appStore}>
            <Menu/>
        </Provider>
        
    ));

    const accordionHeader = screen.getByText("Breakfast (14)");
    // expect(accordionHeader).toBeInTheDocument();
    fireEvent.click(accordionHeader);
    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(14);  

})

it("Should check cart items after click on add button",async()=>{
    await act(async()=>render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Menu/>
                <Header/>
                <FoodCartPage/>
            </Provider>
        </BrowserRouter>
    ));

    const accordionHeader = screen.getByText("Breakfast (14)");
    // expect(accordionHeader).toBeInTheDocument();
    fireEvent.click(accordionHeader);
    const foodItemsBefore = screen.getAllByTestId("foodItems");
    expect(foodItemsBefore.length).toBe(14);  
    const addBtns = screen.getAllByRole("button",{name:"Add"});
    expect(addBtns.length).toBe(14);
    
    // Add first item to cart
    fireEvent.click(addBtns[0]);
    
    
    // Check if cart is updated
    const cartItems = screen.getByText("Cart(1 items)")
    expect(cartItems).toBeInTheDocument();
});