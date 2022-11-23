import { Link } from "react-router-dom";
import './Navbar.css';


export default function Navbar() {
    return (
        <nav className="Navbar">
            <Link to="/">Songsaver list</Link>
            <Link to="/AboutUs">About Us</Link>
        </nav>
    )    
}