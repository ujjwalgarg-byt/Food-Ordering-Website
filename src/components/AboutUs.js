import { json } from "react-router-dom";
import User from "./User";
import UserClass from "./UserClass";
const AboutUs = () => {
    return (
        <div className="about-us">
            <h1>About Us</h1>
            {/* <User name = {"Ujjwal garg"}/> */}
            <h3>Find User's details here</h3>
            <UserClass />
        </div>
    )
};
export default AboutUs;