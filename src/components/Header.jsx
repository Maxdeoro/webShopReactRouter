import { NavLink } from "react-router-dom";
// import styles from './Header.module.css';

function Header() {
    return (
        <header className="bg-lime-200 py-8 px-5 flex justify-between shadow-md">
            <img className="h-6" src="/logo.svg" alt="logo" />
            {/* <h1 className="text-3xl text-text">Header</h1> */}
            <nav>
                <ul className="flex gap-x-10">
                    <li>
                        <NavLink to='/' className='links'>Home</NavLink>
                        {/* <NavLink to='/' className='font-bold'>Home</NavLink> */}
                    </li>
                    <li>
                        <NavLink to='/about' className='links'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart' className='links'>Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to='/categories' className='links'>Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to='/product' className='links'>Product details</NavLink>
                    </li>
                </ul>    
            </nav>
        </header>
    )
};

export default Header;