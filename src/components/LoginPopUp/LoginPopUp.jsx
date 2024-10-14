import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from '../../assets/assets'
const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState('Login')
  return (
    <div className='loginPopUp'>
      <form className="loginPopUp-container">
        <div className="loginPopUp-tittle">
          <h2>{currState}</h2>
          <img src={assets.cross_icon} alt="" onClick={() => { setShowLogin(false) }} />
        </div>
        <div className="loginPopUp-inputs">
          {currState === 'Login' ? <></> : <input type='text' placeholder='enter your name' required />}

          <input type="email" placeholder='enter your email address' required />

          <input type="password" placeholder='enter your password address' required />
        </div>
        <button>{currState === 'SihnUp' ? 'Create account' : 'Login'}</button>
        <div className="login-popup-condition">
          <input type='checkbox' required />
          <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>
        {currState === 'Login' ?
         <p>Create a new account?  <span onClick={()=>setCurrState('Sign Up')}>Click Here</span></p> :
         <p>Already have an account? <span onClick={()=>setCurrState('Login')}>Login Here</span></p>}



      </form>
    </div>
  )
}

export default LoginPopUp
