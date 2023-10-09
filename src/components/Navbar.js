import "./Navbar.css";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <div>
        <div className="nav-links">
          <Link to="/" as={NavLink} className="link">Home</Link>
          <Link to="/about" as={NavLink} className="link">About</Link>
          <Link to="/services" as={NavLink} className="link">Services</Link>
          <Link to="/contactus" as={NavLink} className="link">Contact Us</Link>
          <Link to="/hours" as={NavLink} className="link">Hours</Link>

        </div>
      </div>
    </div>
  );
}


export default Navbar;