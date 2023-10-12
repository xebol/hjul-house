import "./Services.css";


function Services() {
  return (
    <div className="services-page">
      <h1>Services</h1>
      <div className="services-title">
        <div className="services-label">The Basics        </div>
        <div className="services-content">
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

      <div className="services-title">
        <div className="services-label">The Essentials</div>
        <div className="services-content">
          <h5>Includes the Basics</h5>
          <ul>
            <li>Full bike wash</li>
            <li>Deep clean drive train components</li>
            <li>Wheels trued</li>
            <li>Adjust wheel bearings</li>
          </ul>

        </div>
      </div>

      <div className="services-title">
        <div className="services-label">The Works</div>
        <div className="services-content">
          <h5>Includes the Essentials</h5>
          <ul>
            <li>Disassemble entire bike and clean parts </li>
            <li>Overhaul & replace bearing systems</li>
            <li>Flush hydraulic system</li>
            <li>Replace & reroute all cables and housing</li>
            <li>Service front suspension</li>
          </ul>
        </div>
      </div>
      <h1>All parts and installation are extra</h1>
    </div>
  );
}


export default Services;