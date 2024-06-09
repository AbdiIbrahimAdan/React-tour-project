
import './App.css';
import Header from './Components/Header/Header';
import Home from './page/Home/Home'
import Destination from './page/Destination/Destination';
import Trip from './page/Trip/Trip';
import Contact from './page/Contact/Contact';
import Footer from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route  path ='/' element={<Home/>}/>
     <Route  path ='/destination' element={<Destination/>}/>
     <Route  path ='/trip' element={<Trip/>}/>
     <Route  path ='/contact' element={<Contact/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App
