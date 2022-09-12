import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "./logo.svg"

const Header = () => {
    return (

        <header className='header'>
            <div className="container">
                <div className="header__logo">
                    <img src={logo} alt="Future Academy"/>
                </div>
                <nav className="header__nav">
                    <NavLink className="header__links-item" to="/reg">About Us</NavLink>
                    <NavLink className="header__links-item" to="/contact-us">Contact Us</NavLink>
                    <NavLink className="header__links-item" to="/portfolio">Portfolio</NavLink>
                    <NavLink className="header__links-item" to="/videos">Videos</NavLink>
                    <NavLink className="header__links-item" to="/book-now">Book Now</NavLink>
                </nav>
            </div>


        </header>

)
    ;
};

export default Header;