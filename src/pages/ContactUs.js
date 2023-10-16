import { useState } from "react";
import contact from "../images/contact-us.jpg";
import "./ContactUs.css";

function ContactUs() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInfo({
      ...info,
      [name]: value
    });

  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setInfo({
      name: "",
      email: "",
      message: ""
    });
  };


  return (
    <div className="contact-us">
      <img src={contact} alt="contact" className="contact-us-img"></img>
      <div className="contact-info">
        <h1>Contact Us</h1>
        <form autoComplete="off" className="contact-form" onSubmit={handleSubmit}>
          <label> Name</label>
          <input type="text" name="name" value={info.name} onChange={handleChange} className="value-input"/>
          <label> Email </label>
          <input type="email" name="email" value={info.email} onChange={handleChange}  className="value-input"/>
          <label>Message</label>
          <textarea name="message" className="message-to-send" value={info.message} onChange={handleChange}></textarea>
          <input type="submit" className="contact-us-btn" />
        </form>
      </div>
    </div>
  );
}


export default ContactUs;