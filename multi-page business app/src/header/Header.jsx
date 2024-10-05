import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

function Header() {
    return(
        <header>
            <h1>Karpentry</h1>

            <nav>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
                    Home
                    </NavLink></li>
                    
                    <li><NavLink to="/About" className={({ isActive }) => isActive ? styles.active : ''}>
                    About
                    </NavLink></li>
                    
                    <li><NavLink to="/Services" className={({ isActive }) => isActive ? styles.active : ''}>
                    Services
                    </NavLink></li>
                    
                    <li><NavLink to="/Contact" className={({ isActive }) => isActive ? styles.active : ''}>
                    Contact
                    </NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
