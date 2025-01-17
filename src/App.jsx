
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import LatestNews from './pages/LatestNews'
import Company from './pages/Company'
import Shop from './pages/Shop'
import Sustianablity from './pages/Sustianablity'
import Team from './pages/Team'
import References from './pages/References'
import Downloads from './pages/Downloads'
import Contact from './pages/Contact'
import Header from './components/Header'
import Warrenty from './pages/Warrenty'
import Auth from './pages/Auth'
import Footer from './components/Footer'
import Ventilation from './Shop/Ventilation'
import Endoscopes from './Shop/Endoscopes'
import OpertingTable from './Shop/OpertingTable'
import HtSurgery from './Shop/HtSurgery'
import Defibilortors from './Shop/Defibilortors'
import Infusurs from './Shop/Infusurs'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/latest-news' element={<LatestNews/>}/>
      <Route path='/company' element={<Company/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/sustainability' element={<Sustianablity/>}/>
      <Route path='/team' element={<Team/>}/>
      <Route path='/references' element={<References/>}/>
      <Route path='/Downloads' element={<Downloads/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/warrenty' element={<Warrenty/>}/>
      <Route path='/shop/Anesthesia-and-ventilation' element={<Ventilation/>}/>
      <Route path='/shop/Flexible-endoscopes' element={<Endoscopes/>}/>
      <Route path='/shop/Operating-tables-and-patient-trolleys' element={<OpertingTable/>}/>
      <Route path='/shop/HF-Surgery' element={<HtSurgery/>}/>
      <Route path='/shop/Defibrillators' element={<Defibilortors/>}/>
      <Route path='/shop/Infusors-perfusors' element={<Infusurs/>}/>

    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
