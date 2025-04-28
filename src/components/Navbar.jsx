import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    const navi=useNavigate();
  return (
    <div className="navbar">
      <button className="button1" onClick={()=>{navi('/mainpage')}}>Shop</button>
      <button className="button1" onClick={()=>{navi('/cartpage')}}>Cart page</button>
      <button className="button1" onClick={()=>{navi('/homepage')}}>About us</button>
      <button className="button1" onClick={()=>{navi('/homepage')}}>Privacy Policy</button>
      <button className="button1" onClick={()=>{navi('/homepage')}}>FAQ</button>
      <button className="button1" onClick={()=>{navi('/homepage')}}>Terms and Conditions</button>
      <button className="button1" onClick={()=>{navi('/')}}>Logout</button>
    </div>
  )
}

export default Navbar
