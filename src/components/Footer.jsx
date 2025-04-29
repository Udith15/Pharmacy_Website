import React from 'react';
import './Footer.css';
import Footerlist from './Footerlist';

const Footer = () => {
  return (
    <div className="footer">
      <div className='f1'>
        <img src="/bgimage1.png" alt="logo" />
        <p className='f1p'>
          Pharmacy.com is India’s trusted online pharmacy offering genuine medicines, health products, and medical equipment at <br></br>affordable prices across the country.
        </p>
      </div>

      <div className='f2'>
        <Footerlist 
          tit="Company" 
          lis={['About Us', 'Careers', 'Press', 'Affiliate Program', 'Sustainability']} 
        />
        <Footerlist 
          tit="Help & Support" 
          lis={['FAQs', 'Contact Us', 'Order Tracking', 'Return Policy', 'Cancellation Policy']} 
        />
        <Footerlist 
          tit="Our Services" 
          lis={['Medicines', 'Lab Tests', 'Doctor Consultation', 'Health Blog', 'Offers']} 
        />
        <Footerlist 
          tit="Legal" 
          lis={['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Compliance']} 
        />
        <Footerlist 
          tit="Connect With Us" 
          lis={['Facebook', 'Twitter', 'Instagram', 'LinkedIn', 'YouTube']} 
        />
      </div>

      <div className='f3'>
        <h3>Our Payment Partners</h3>
        <p>
          Google Pay &nbsp;|&nbsp; PhonePe &nbsp;|&nbsp; Paytm &nbsp;|&nbsp; UPI &nbsp;|&nbsp; Visa &nbsp;|&nbsp; MasterCard &nbsp;|&nbsp; Rupay &nbsp;|&nbsp; Netbanking
        </p>
      </div>

      <div className='f4'>
        <p>© 2025 Pharmacy.com. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
