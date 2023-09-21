import {NavLink} from "react-router-dom";
import './navigation.css';

function Navigation() {
    const isActive = true;

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive === true ? 'active-menu-link' : 'default-menu-link'}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/new" className={({isActive}) => isActive === true ? 'active-menu-link' : 'default-menu-link'}>
                        New
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/blogposts" className={({isActive}) => isActive === true ? 'active-menu-link' : 'default-menu-link'}>
                        Blogposts
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;