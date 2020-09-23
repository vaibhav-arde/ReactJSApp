import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <div className="menu_style">
                <NavLink exact activeClassName="active_tab" to="/" >Home</NavLink>
                <NavLink activeClassName="active_tab" to="/user/Dear/Guest" >User</NavLink>
                <NavLink exact activeClassName="active_tab" to="/search" >Search</NavLink>
                <NavLink exact activeClassName="active_tab" to="/about" >About Us</NavLink>
                <NavLink exact activeClassName="active_tab" to="/contact" >Contact us</NavLink>
            </div>
        </>
    )
}
export default NavBar;