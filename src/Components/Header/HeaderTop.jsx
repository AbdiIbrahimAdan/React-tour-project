
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const HeaderTop = () => {
  return (
    <>
  <section className='head'>
    <div className='container main'>
      <div className='logo'>
        <h1>Zaphy Tour</h1>
        <span>Best safaris and adventure tours</span>
      </div>
      <div className='social-links-icon'>
    
      <a href="#" className="social-links">{<FaFacebook />}</a>
     <br></br>
      <a href="#" className="social-links">{<FaTwitter />}</a>
     <a href="#" className="social-links">{<FaInstagram />}</a>
     

      </div>
    </div>
  </section>
</>
  )
}

export default HeaderTop