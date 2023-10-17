import "./Services.css";
import { Link, NavLink } from "react-router-dom";

function Services() {

  const toggleAccordion = (event) => {
    const servicesTitle = event.target.closest('.services-title');
    if (servicesTitle) {
      servicesTitle.classList.toggle('active');
    }
  };

  return (
    <div className="services-page">
      <div className="services-offered">
      </div>
      <h1>In need of a tune up?</h1>
      <h2>Checkout these packages</h2>
      <div className="services-title" onClick={toggleAccordion}>
        <div className="services-label">The Basics</div>
        <div className="services-content" >
          <h5 className="price">$89.99</h5>
          <ul>
            <li>Hanger alignment</li>
            <li>Align and adjust brakes</li>
            <li>Alight and adjust shifting</li>
            <li>Adjust headset</li>
            <li>Bottom bracket inspection</li>
            <li>Lube chain</li>
          </ul>
        </div>
      </div>

      <div className="services-title" onClick={toggleAccordion}>
        <div className="services-label">The Essentials</div>
        <div className="services-content" >
          <h5 className="price">$159.99</h5>
          <ul>
            <li className="upgrade">INCLUDES THE BASICS</li>
            <li>Full bike wash</li>
            <li>Deep clean drivetrain components</li>
            <li>Wheels trued</li>
            <li>Adjust wheel bearings</li>
          </ul>
        </div>
      </div>

      <div className="services-title" onClick={toggleAccordion}>
        <div className="services-label">The Works</div>
        <div className="services-content">
          <h5 className="price">$349.99</h5>
          <ul>
            <li className="upgrade">INCLUDES THE ESSENTIALS</li>
            <li>Disassemble entire bike and clean parts </li>
            <li>Overhaul & replace bearing systems</li>
            <li>Flush hydraulic system</li>
            <li>Replace & reroute all cables and housing</li>
            <li>Service front suspension</li>
          </ul>
        </div>
      </div>

      <div className="other-services">
        <h1>Other Services</h1>
        <div className="services-title" onClick={toggleAccordion}>
          <div className="services-label">Wheels and Tires</div>
          <div className="services-content" >
            <ul>
              <li>Tire Patch</li>
              <li>Tire Installation</li>
              <li>Tubeless Tire Installation</li>
              <li>Wheel Building</li>
            </ul>
          </div>
        </div>

        <div className="services-title" onClick={toggleAccordion}>
          <div className="services-label">Drivetrain</div>
          <div className="services-content" >
            <ul>
              <li>Bottom Bracket & Chainring Installation</li>
              <li>Cassette Installation</li>
              <li>Front Derailleur Installation</li>
              <li>Rear Derailleur Installation</li>
              <li>Derailleur Alignments</li>
              <li>Chain Installation</li>
            </ul>
          </div>
        </div>

        <div className="services-title" onClick={toggleAccordion}>
          <div className="services-label">Brakes</div>
          <div className="services-content">
            <ul>
              <li>Cable Brake Installation</li>
              <li>Hydraulic Brake Installation</li>
              <li>Hydraulic Brake Flush</li>
              <li>Brake Pad Replacement</li>
            </ul>
          </div>
        </div>
        <div className="services-title" onClick={toggleAccordion}>
          <div className="services-label">Suspension</div>
          <div className="services-content">
            <ul>
              <li>Service Front Suspension</li>
              <li>Service Rear Suspension</li>
            </ul>
          </div>
        </div>
      </div>
      <h1>All parts and installation are extra</h1>
      <div className="other-services">
        <h1>Don't see what you're looking for?</h1>  <Link to="/contact" as={NavLink} id="services-link">Contact Us</Link>
      </div>
    </div>
  );
}


export default Services;