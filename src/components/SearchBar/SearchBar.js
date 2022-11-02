import React, { useState } from "react";
import { Icon } from "@iconify/react";
import './SearchBar.css'

function SearchBar (props) {
    const [searchTerm, setSearchTerm] = useState("");

    return(
        <div className="search-bar">
            <Icon icon="ant-design:search-outlined" className="search-icon" />
            <input type="search" placeholder="Search ReddLite" className="search-input"></input>
        </div>
    )
}

export default SearchBar;