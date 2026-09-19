import { NavLink } from "react-router-dom";

function NavLinkMenu({to, children}) {
    return (
        <NavLink to={to} className={({isActive}) => 
            isActive ? 'text-xl text-gray-900 font-semibold hover:text-blue-600' 
            : 'text-xl text-gray-500 hover:text-blue-600 hover:text-2xl'
        }>
            {children}
        </NavLink>
    )
}

export default NavLinkMenu;
