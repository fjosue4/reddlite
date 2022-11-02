import React from "react";
import logo from '../../img/logo.svg'
import SearchBar from "../SearchBar/SearchBar";
import './NavBar.css'

function NavBar (props) {
    return (
    <div className="nav-bar">
        <div className="logo">
            <img src={logo} alt="reddlite logo"/> 
        </div>
        <SearchBar />
    </div>)
}

export default NavBar;