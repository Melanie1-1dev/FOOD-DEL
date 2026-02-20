import React, { useState } from 'react'
import './Navbar.css'
import assets from "../../assets/logo.png"
import search_icon from "../../assets/search_icon.png"
import basket_icon from "../../assets/basket_icon.png"
const Navbar = () => {

    const [menu, setMenu] = useState("Home")
  return (
    <div className='navbar'>
        <img src={assets} className = "logo" alt="logo" />
        <ul className="navbar-menu">
            <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
            <li onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
            <li onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</li>
            <li onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""}>Contact us</li>
        </ul>
        <div className="navbar-right">
            <img src={search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={basket_icon} alt="" />
                <div className="dot"></div>
                <button>Sign in</button>
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
