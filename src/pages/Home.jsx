import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            HOME
            <Link to='/'>Home</Link>
            <Link to='about'>About</Link>
            <Link to='categories'>Categories</Link>
            <Link to='product'>Product details</Link>
            <Link to='cart'>Cart</Link>
        </div>
    )
}

export default Home;

