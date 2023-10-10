import contact from "../images/contact-us.jpg";
import "./ContactUs.css";


function ContactUs() {
  return (
    <div className="contact-us">
      <img src={contact} alt="contact" className="contact-us-img"></img>
      <div className="contact-info">
        <h1>Contact Us</h1>
        <form className="contact-form">
          <label> Fullname</label>
          <input type="text" name="name" />
          <label> Email </label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message"></textarea>
          <input type="submit" className="contact-us-btn" />
        </form>
      </div>
    </div>
  );
}


export default ContactUs;