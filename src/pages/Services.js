import "./Services.css";


function Services() {

  const toggleAccordion = (event) => {
    const servicesTitle = event.target.closest('.services-title');
    if (servicesTitle) {
      servicesTitle.classList.toggle('active');
    }
  };

  return (
    <div className="services-page">
      <h1>In need of a tune up?</h1>
      <div className="services-title" onClick={toggleAccordion}>
        <div className="services-label">The Basics</div>
        <div className="services-content" >
          <ul>
            <li>Hanger alignment</li>
            <li>Align and adjust brakes</li>
            <li>Alight and adjust shifting</li>
            <li>Adjust headset</li>
            <li>Bottom bracket inspection</li>
            <li>Lube chain</li>
          </ul>
          <h5>$89.99</h5>
        </div>
      </div>

      <div className="services-title" onClick={toggleAccordion}>
        <div className="services-label">The Essentials</div>
        <div className="services-content" >
          <h5>INCLUDES THE BASICS</h5>
          <ul>
            <li>Full bike wash</li>
            <li>Deep clean drivetrain components</li>
            <li>Wheels trued</li>
            <li>Adjust wheel bearings</li>
          </ul>
          <h5>$159.99</h5>
        </div>
      </div>

      <div className="services-title" onClick={toggleAccordion}>
        <div className="services-label">The Works</div>
        <div className="services-content">
          <h5>INCLUDES THE ESSENTIALS</h5>
          <ul>
            <li>Disassemble entire bike and clean parts </li>
            <li>Overhaul & replace bearing systems</li>
            <li>Flush hydraulic system</li>
            <li>Replace & reroute all cables and housing</li>
            <li>Service front suspension</li>
          </ul>
          <h5>$349.99</h5>
        </div>
      </div>
      <h1>All parts and installation are extra</h1>

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
      {/* make the Contact us and link to the Contact us page */}
      <h1>Don't see what you're looking for? Contact us</h1> 
    </div>
  );
}


export default Services;