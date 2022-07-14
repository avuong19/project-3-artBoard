import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <Link className="font-bold text-5xl" to="/">
            ARTBOARD
        </Link>
        <nav>
           <Link className="text-4xl login" to="/login">LOGIN</Link> 
        </nav>
    </header>
    )
}

export default Header;
