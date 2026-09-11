import { NavLink } from "react-router-dom";
// import styles from './Header.module.css';

function Header() {
    return (
        <header className="bg-lime-200">
            <h1 className="text-3xl text-text">Header</h1>
            <NavLink to='/' className='font-bold'>Home</NavLink>
            <NavLink to='/about' className='font-bold'>About</NavLink>
            <NavLink to='/categories' className='font-bold'>Categories</NavLink>
            <NavLink to='/product' className='font-bold'>Product details</NavLink>
            <NavLink to='/cart' className='font-bold'>Cart</NavLink>
            <hr></hr>
        </header>
    )
};

export default Header;