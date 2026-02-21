import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './Components/Pages/Cart/Cart'
import Home from './Components/Pages/Cart/Home/Home'
import Placeholder from './Components/Pages/PlaceOrder/Placeorder'
import StoreContextProvider, { StoreContext } from './Context/StoreContext'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
          
        <Route path='/' element={<Home/>} />
         <Route path='/Cart' element={<Cart/>} />
         <Route path='/order' element={<Placeholder/>} />
      </Routes>
      <StoreContextProvider/>
      
    </div>
  )
}

export default App
