import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import bike from "../images/Screenshot 2023-10-09 at 4.35-PhotoRoom.png";
// import bike from "../images/bike.png";

function Navbar() {
  return (
    <div className="nav">
      <div className="nav-links-container">
        <div className="home-nav">
          <Link to="/" as={NavLink} className="link">
            <img src={bike} alt="bike" className="logo-image" />
          </Link>
        </div>
      </div>
      <div className="links-container">
        <Link to="/about" as={NavLink} className="link">About</Link>
        <Link to="/services" as={NavLink} className="link">Services</Link>
        <Link to="/contact" as={NavLink} className="link">Contact Us</Link>
        <Link to="/hours" as={NavLink} className="link">Hours</Link>
      </div>
    </div>
  );
}


export default Navbar;