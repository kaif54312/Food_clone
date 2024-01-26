import { Link } from "react-router-dom";
import Logo from "../Assests/img/logo.png";

const Title = ()=>(
    <a href="/">
    <img
    className="img"
    alt="logo"
     src={Logo}></img>
    </a>
);


const Header = () =>{
    return(
        
        <div className="Header">
            <Title/>
            <div className="nav-items">
            <ul>
               <Link to="/">
                <li >home</li>
                </Link>
                <Link to="/about">
                <li>About</li>
                </Link> 
                <li>contact</li>
                <li>cart</li>

                <Link to="/instamart">
                <li>Instamart</li>
                </Link>

            </ul>
            </div>
        </div>
    );
};

export default Header;