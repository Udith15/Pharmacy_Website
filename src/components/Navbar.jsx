import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const navi=useNavigate();
  return (
    <div className="navr">
      <div className="subdiv1">
        <h2>Pharmacy.com</h2>
      </div>
      <div className="subdiv2">
        <button className="button1" onClick={()=>{navi('/homepage')}}>Shop</button>
        <button className="button1" onClick={()=>{navi('/cartpage')}}>Cart page</button>
        <button className="button1" onClick={()=>{navi('/aboutuspage')}}>About us</button>
        <button className="button1" onClick={()=>{navi('/privacypolicypage')}}>Privacy Policy</button>
        <button className="button1" onClick={()=>{navi('/faqpage')}}>FAQ</button>
        <button className="button1" onClick={()=>{navi('/termsconditionspage')}}>Terms and Conditions</button>
        <button className="button1" onClick={()=>{navi('/')}}>Logout</button>

      </div>
    </div>
  )
}

export default Navbar
