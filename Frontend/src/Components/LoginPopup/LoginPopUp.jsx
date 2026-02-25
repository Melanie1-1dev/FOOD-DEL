import React, { useState } from 'react'
import './LoginPopUp.css'

const LoginPopup = () => {
    const [currState,setcurrState] = useState("Sign Up")
  return (
    <div className='login-popup'>
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
            </div>
        </form>
      
    </div>
  )
}

export default LoginPopup
