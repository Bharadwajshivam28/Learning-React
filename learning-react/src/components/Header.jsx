import React from 'react';
import { Link } from 'react-router-dom';

function Header (){
    return(
    <>
    <Link to="/About">
    <button>About Us</button>
    </Link>

    <Link to="/Contact">
    <button>Contact Me</button>
    </Link>

    <Link to="/Product">
    <button>For Product Click me</button>
    </Link>

    </>
    );
}
 
export default Header
 
 