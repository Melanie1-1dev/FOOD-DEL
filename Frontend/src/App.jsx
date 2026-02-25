import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import Cart from "./Components/Pages/Cart/Cart";
import PlaceOrder from './Components/Pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer';
import AppDownload from './Components/AppDownload/AppDownload';
import LoginPopup from './Components/LoginPopUp/LoginPopUp';

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Order' element={<PlaceOrder/>}/> 

      </Routes>
    <AppDownload/>

    </div>
    <Footer/>
    </>

    
  )
}

export default App
