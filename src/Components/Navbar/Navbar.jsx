import "./Navbar.css"
import logo from "../../assets/logo.png"

const Navbar = () => {
    return (
        <nav>
            <img src={logo} alt="logo" className="logo" />
            <ul className="nav__menu">
                <li>Home</li>
                <li>Programs</li>
                <li>Why Us</li>
                <li>Plan</li>
                <li>Testimonials</li>
            </ul>
        </nav>
    );
};

export default Navbar;