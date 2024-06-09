import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Us</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Email: info@zaphytours.com</p>
          <p>Phone: +254 98930040</p>
          <p>Address: 45 Kiharu Road, Kiharu, Kenya</p>
          <h4>Office Hours</h4>
          <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p>Saturday: 10:00 AM - 3:00 PM</p>
          <p>Sunday: Closed</p>
          <br></br>
          <h4>Follow Us</h4>
          <br></br>
          <div className="social-links">
            <a href="#" className="social-link">{<FaFacebook />}</a>
            <a href="#" className="social-link">{<FaTwitter />}</a>
            <a href="#" className="social-link">{<FaInstagram />}</a>
          </div>
        </div>
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form id="contact-us">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="subject">Subject</label>
            <input type="text" id="subject" name="subject" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="map">
        <h3>Our Location</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.507567541968!2d37.14447627372415!3d-0.7151076352659999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1828996ce41f9c39%3A0xe9bd5117f20559ee!2sMuranga%20University%20Main%20Gate!5e0!3m2!1sen!2ske!4v1717940338891!5m2!1sen!2ske"
         width="600" 
         height="450" 
         style={{border:0, display: "block", width: "100%"}} allowfullscreen="" loading="lazy"></iframe>
      </div>
    </section>
  );
};

export default Contact;









































