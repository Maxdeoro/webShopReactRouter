import { NavLink } from "react-router-dom";
// import styles from './Header.module.css';

function Header() {
    return (
        <header className="bg-lime-200 py-8 px-5 flex justify-between">
            <img className="h-6" src="/logo.svg" alt="logo" />
            {/* <h1 className="text-3xl text-text">Header</h1> */}
            <nav>
                <ul className="flex gap-x-10">
                    <li>
                        <NavLink to='/' className='font-bold'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className='font-bold'>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/cart' className='font-bold'>Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to='/categories' className='font-bold'>Categories</NavLink>
                    </li>
                    <li>
                        <NavLink to='/product' className='font-bold'>Product details</NavLink>
                    </li>
                </ul>    
            </nav>
        </header>
    )
};

export default Header;