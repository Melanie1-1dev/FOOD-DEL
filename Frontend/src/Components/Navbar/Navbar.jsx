import React, { useState } from 'react'
import './Navbar.css'
import assets from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.png"
import basket_icon from "../../assets/basket_icon.png"
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("Menu");
  return (
    <div className='navbar'>
        <img src={assets} className = "logo" alt="logo" />
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
            <a href='#footer' onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={basket_icon} alt="" />
                <div className="dot"></div>
                <button onClick={()=>setShowLogin(true)}>Sign in</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
