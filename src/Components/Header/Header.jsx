import {useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import HeaderTop from './HeaderTop'
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
            </ul>

            <div className='start'>
            <div className='button'>BOOK NOW</div>
            </div>
               <button className='toggle' onClick={() => setClick(!click)}>
               {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
             </button>
        </nav>
</header>
</>
  )
}

export default Header