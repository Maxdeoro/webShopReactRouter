import { NavLink } from "react-router-dom";
import NavLinkMenu from "./ui/NavLinkMenu";
// import styles from './Header.module.css';

function Header() {
    return (
        <header className="bg-lime-200 py-8 px-5 flex justify-between shadow-md">
            <img className="h-6" src="/logo.svg" alt="logo" />
            <nav>
                <ul className="flex gap-x-10">
                    <li>
                        <NavLinkMenu to={'/'}>Home</NavLinkMenu>
                    </li>
                    <li>
                        <NavLinkMenu to={'/about'}>About</NavLinkMenu>
                    </li>
                    <li>
                        <NavLinkMenu to={'/cart'}>Cart</NavLinkMenu>
                    </li>
                    <li>
                        <NavLinkMenu to={'/categories'}>Categories</NavLinkMenu>
                    </li>
                    <li>
                        <NavLinkMenu to={'/product'}>Product</NavLinkMenu>
                    </li>
                </ul>    
            </nav>
        </header>
    )
};

export default Header;