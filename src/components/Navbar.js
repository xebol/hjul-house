import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/Screenshot 2023-10-09 at 4.35.24 PM.png";
function Navbar() {
  return (
    <div className="nav">
      <div className="nav-links-container">
        <div className="nav-links">
          <Link to="/" as={NavLink} className="link">Home</Link>
          <Link to="/about" as={NavLink} className="link">About</Link>
          <Link to="/services" as={NavLink} className="link">Services</Link>
          <Link to="/contact" as={NavLink} className="link">Contact Us</Link>
          <Link to="/hours" as={NavLink} className="link">Hours</Link>
        </div>
        <div className="logo">
          <Link to="/" as={NavLink} className="link">
            <img src={logo} alt="logo" className="logo-image" />
          </Link>
        </div>
      </div>
    </div>
  );
}


export default Navbar;