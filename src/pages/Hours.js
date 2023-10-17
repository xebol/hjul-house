import "./Hours.css";
import logo from "../images/detailed-bike-logo-premium-quality_23-2148828806-PhotoRoom.png"


function Hours() {
  return (
    <div className="business-hours">
      <h1>HOURS OF OPERATION</h1>
        <div className="hours">
        <img src={logo} alt="logo" className="hours-background"/>

          <div className="day">Mon - Fri</div>
          <div className="hours-open">10AM - 8PM</div>

          <div className="day">Sat</div>
          <div className="hours-open">10AM - 5PM</div>

          <div className="day">Sun</div>
          <div className="hours-open">CLOSED</div>
        </div>
      </div>
  );
}


export default Hours;