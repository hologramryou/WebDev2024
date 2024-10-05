import "./Header.module.css"
import { Link } from "react-router-dom"

function Header() {
    return(
        <header>
            <h1>Karpentry</h1>

            <nav>
                <ul>
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Services">Services</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header