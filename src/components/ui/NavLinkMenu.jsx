import { NavLink } from "react-router-dom";

function NavLinkMenu({to, children}) {
    return (
         <NavLink to={to} className='text-xl text-gray-500 hover:text-gray-900'>{children}</NavLink>
    )
}

export default NavLinkMenu;
