import React from 'react';
import {NavLink} from "react-router-dom";


const Header = () => {
    return (

        <header className='header'>
            <div className="container">
                <NavLink className="header__links-item" to="/reg">About Us</NavLink>
                <NavLink className="header__links-item" to="/contact-us">Contact Us</NavLink>
                <NavLink className="header__links-item" to="/portfolio">Portfolio</NavLink>
                <NavLink className="header__links-item" to="/videos">Videos</NavLink>
                <NavLink className="header__links-item" to="/book-now">Book Now</NavLink>
            </div>


        </header>

)
    ;
};

export default Header;