import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <Link className="font-bold text-5xl ml-3 mt-2" to="/">
            ARTBOARD
        </Link>
        <nav>
           <Link className="text-4xl login mr-3" to="/login">LOGIN</Link> 
        </nav>
    </header>
    )
}

export default Header;
