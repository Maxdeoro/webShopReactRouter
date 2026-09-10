import { NavLink } from "react-router-dom";
// import styles from './Header.module.css';

function Header() {
    return (
        <header className="bg-lime-200">
            <h1 className="text-3xl text-text">Header</h1>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/categories'>Categories</NavLink>
            <NavLink to='/product'>Product details</NavLink>
            <NavLink to='/cart'>Cart</NavLink>
            <hr></hr>
        </header>
    )
};

export default Header;