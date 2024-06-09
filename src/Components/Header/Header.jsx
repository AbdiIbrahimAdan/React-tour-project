import {useState} from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import './Header.css';
import HeaderTop from './HeaderTop';
const Header = () => {
  const[click, setClick] = useState(false)
  return (
    <>
    <HeaderTop/>
    <header>
        <nav className='main'>
            <ul className={click ? "mobile-nav" : "main"} onClick={() => setClick(false)}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/destination'>Destination</Link></li>
                <li><Link to='/trip'>Trip</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>

            <div className='start'>
            <div className='button'>BOOK NOW</div>
            </div>
               <button className='toggle' onClick={() => setClick(!click)}>
               {click ? <FaTimes /> : <FaBars />}
             </button>
        </nav>
</header>
</>
  )
}

export default Header