import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <h1>
            ART SITE
        </h1>
        <nav>
           <Link to="/login">LOGIN</Link> 
        </nav>
    </header>
    )
}

export default Header;
