import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h2 className="footer-heading">Zaphy Tour</h2>
        <p className="footer-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="footer-nav">
        <h2 className='footer-heading'>Quick Link</h2>
        <ul>
       <li><Link to='/'>Home</Link></li>
       <li><Link to='/destination'>Destination</Link></li>
      <li><Link to='/trip'>Trip</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      </ul>
      </div>
      <div className="footer-social">
        <h3 className='footer-heading'>Follow Us</h3>
        <div className="social-links">
          <a href="#" className="social-link">{<FaFacebook />}</a>
          <br></br>

          <a href="#" className="social-link">{<FaTwitter />}</a>
          <a href="#" className="social-link">{<FaInstagram />}</a>
        </div>
      </div>
      <div className="footer-contact">
        <h3 className='footer-heading'>Contact Information</h3>
        <p>Phone: +254 123 456 789</p>
        <p>Email: info@zaphtours.com</p>
      </div>
      <hr className="footer-divider" />
      <div className="footer-copyright">
        <p>&copy; 2024 Abdi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
