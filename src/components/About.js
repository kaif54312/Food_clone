import { Outlet } from "react-router-dom";

// import Profile from "./Profile.js";
const About = ()=>{
    return(
        <div>
            <h1>Hello!</h1>
            <h2>about us</h2>
             <Outlet/>
        </div>
    );
};



export default About;