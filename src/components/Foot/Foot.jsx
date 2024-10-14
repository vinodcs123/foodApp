import React from 'react'
import { assets } from '../../assets/assets'
import './Foot.css'
const Foot = () => {
  return (
   <div className="footer" id="footer">
    <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt='logo'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit quidem quos quam laborum dolor, adipisci maiores fugit numquam aliquid ullam sunt error quaerat facere nam repellat provident magni! Doloribus, non.</p>
            <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt='' />
            <img src={assets.twitter_icon} alt='' />
            <img src={assets.linkedin_icon} alt='' />
            </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delhivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>+91 3245678992</li>
                <li>contact@o4h.com</li>
            </ul>
        </div>
    </div>
    <hr/>
    <p className='footer-copyright'>Copyright 2024 © o4h.com -All right Reserved</p>
   </div>
  )
}

export default Foot
