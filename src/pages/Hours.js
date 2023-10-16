import "./Hours.css";
import logo from "../images/detailed-bike-logo-premium-quality_23-2148828806-PhotoRoom.png"


function Hours() {
  return (
    <div className="business-hours">
      <h1>HOURS OF OPERATION</h1>
        <div className="hours">
        <img src={logo} alt="logo" className="hours-background"/>
          <div className="day">Sunday</div>
          <div className="hours-open">CLOSE</div>

          <div className="day">Monday</div>
          <div className="hours-open">10AM - 8PM</div>

          <div className="day">Tuesday</div>
          <div className="hours-open">10AM - 8PM</div>

          <div className="day">Wednesday</div>
          <div className="hours-open">10AM - 8PM</div>

          <div className="day">Thursday</div>
          <div className="hours-open">10AM - 8PM</div>

          <div className="day">Friday</div>
          <div className="hours-open">10AM - 8PM</div>

          <div className="day">Saturday</div>
          <div className="hours-open">10AM - 6PM</div>
        </div>
      </div>
  );
}


export default Hours;