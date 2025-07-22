import { render,screen } from "@testing-library/react";
import RestaurantCard, { CardWithOneBenifits } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render the ResCard component with correct props", () => {
    render(<RestaurantCard resData={MOCK_DATA}/>)
    const name = screen.getByText("The Cook House");
    expect(name).toBeInTheDocument();
});

// now test a high order component(cardWithOneBenifits)
const WrappedCard = CardWithOneBenifits(RestaurantCard);


it("should render the ResCard component with CardWithOneBenifit label", () => {
    render(<WrappedCard resData={MOCK_DATA} />);
    const label = screen.getByText("pure veg");
    expect(label).toBeInTheDocument();
});