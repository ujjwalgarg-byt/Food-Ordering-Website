import { fireEvent, render,screen } from "@testing-library/react"
import { act } from "react"
import Body from "../Body"
import "@testing-library/jest-dom"
import MOCK_DATA from "../mocks/mockResListData.json"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
});
// Test for Body component
it("Should search res list for pizza text input ",async()=>{
    await act(async()=>render(
        <BrowserRouter>
          <Body/>
        </BrowserRouter>
    ));
    // check how many cards are there before search
    // we are expecting 20 cards before search
    const cardsBeforeSearch = screen.getAllByTestId("resCards");
    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button",{name:"Search"});
    
    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput,{target:{value:"Pizza"}});
    fireEvent.click(searchBtn);

    // check how many cards are there after search
    // we are expecting 4 cards after search
    const cardsAfterSearch = screen.getAllByTestId("resCards");
    expect(cardsAfterSearch.length).toBe(4);
    expect(searchInput).toBeInTheDocument();

    expect(searchBtn).toBeInTheDocument();
});

it("Should filter Top Rated Restaurants",async()=>{
    await act(async()=>render(
        <BrowserRouter>
          <Body/>
        </BrowserRouter>
    ));
    // check how many cards are there before search
    // we are expecting 20 cards before search
    const cardsBeforeFilter= screen.getAllByTestId("resCards");
    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button",{name:"Top Rated Restaurants"});
    
    fireEvent.click(topRatedBtn);
    // check how many cards are there after search
    // we are expecting 4 cards after search
    const cardsAfterFilter= screen.getAllByTestId("resCards");
    expect(cardsAfterFilter.length).toBe(7);
    expect(topRatedBtn).toBeInTheDocument();

});