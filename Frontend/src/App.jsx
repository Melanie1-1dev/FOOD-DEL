import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home/Home'
import Cart from "./Components/Pages/Cart/Cart";
import Placeorder from './Components/Pages/PlaceOrder/Placeorder'
import Footer from './Components/Footer/Footer';
import AppDownload from './Components/AppDownload/AppDownload';

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/order' element={<Placeorder/>}/>

      </Routes>
    <AppDownload/>

    </div>
    <Footer/>
    </>

    
  )
}

export default App
