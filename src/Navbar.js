import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Songsaver list</Link>
            <Link to="/AboutUs">About Us</Link>
        </nav>
    )    
}