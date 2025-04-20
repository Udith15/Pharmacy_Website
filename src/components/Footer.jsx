import React from 'react'
import './Footer.css'
import Footerlist from './Footerlist'

const Footer = () => {
  return (
    <div>
      <div className='f1'>
        <img src="https://www.cryptologos.cc/logos/bitcoin-btc-logo.png?v=014" alt="logo" />
        <p className='f1p'>
        Pharmacy.com is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable prices <br></br>
        to over 9 million happy customers – PAN India.</p>
      </div>
      <div className='f2'>
        <Footerlist tit={"Title1"} lis={['About Us','Contact Us','Privacy Policy','Terms of Use','FAQs','Blog']}/>
        <Footerlist tit={"Title2"} lis={['About Us','Contact Us','Privacy Policy','Terms of Use','FAQs','Blog']}/>
        <Footerlist tit={"Title3"} lis={['About Us','Contact Us','Privacy Policy','Terms of Use','FAQs','Blog']}/>
        <Footerlist tit={"Title4"} lis={['About Us','Contact Us','Privacy Policy','Terms of Use','FAQs','Blog']}/>
        <Footerlist tit={"Title5"} lis={['About Us','Contact Us','Privacy Policy','Terms of Use','FAQs','Blog']}/>
      </div>
      <div className='f3'>
        <h3>Our payment partners</h3>
        <p>Google Pay PhonePe Paytm SimplRupay Visa Card Network MasterCard</p>
      </div>
      <div className='f4'>
        <p>Copyright© 2025. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
