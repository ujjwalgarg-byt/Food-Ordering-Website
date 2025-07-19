import { render,screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"

describe("Contact us page test cases",()=>{
    test("should load heading inside contact us page",()=>{

    render(<ContactUs/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    });

    test("should load button inside contact us page",()=>{

        render(<ContactUs/>);
        const button = screen.getByRole("button");
        // const button = screen.getByText("Submit");

        // Check if the button is in the document
        expect(button).toBeInTheDocument();
    });

    test("should load input name inside contact us page",()=>{

        render(<ContactUs/>);
        const inputName = screen.getByPlaceholderText("name");
        //check if the input is in the document
        expect(inputName).toBeInTheDocument();
    });

    test("should load 2 input boxes inside contact us page",()=>{

        render(<ContactUs/>);
        const inputBoxes = screen.getAllByRole("textbox"); // Check if there are exactly 2 input boxes
        // console.log(inputBoxes);
        //return jsx elements
        
        expect(inputBoxes.length).toBe(2);
    });
})