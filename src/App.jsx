
import './App.css';
import Header from './Components/Header/Header';
import Home from './page/Home/Home'
import Destination from './page/Destination/Destination';
import Trip from './page/Trip/Trip';
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

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App