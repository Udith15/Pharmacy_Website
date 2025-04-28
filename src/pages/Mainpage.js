import React from 'react';
import './Mainpage.css';
import {GiPoliceBadge} from 'react-icons/gi';
// import {GiMedicalDrip} from 'react-icons/gi';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

function Mainpage() {

    const navi=useNavigate()

    return (
        <div className="Mainpage">
            <div className="d1">
                <img src="https://www.cryptologos.cc/logos/bitcoin-btc-logo.png?v=014" alt="logo" />
                <nav>
                    <button onClick={()=>{navi('/loginpage')}}>Login</button>
                    <button onClick={()=>{navi('/signuppage')}}>Signup</button>
                </nav>
            </div>
            <div className="d2">
                <div className="d2-1">
                    <h1>Consult Our Trusted Surgeons, Book an Appointment</h1>
                    <p>The best of modern healthcare to ensure you stay healthy, always.</p>
                </div>
                <div className="d2-2">
                    <img src="https://www.cryptologos.cc/logos/bitcoin-btc-logo.png?v=014" alt="logo" />
                </div>
            </div>
            <div className="d3">
                <h1>Centers of Excellence</h1>
                <p>Combining the best specialists and equipment to provide you nothing short of the best in healthcare.</p>
            </div>
            <div className="d4">
                <div className='d4sec1'>
                    <div className="d4-1">
                        <GiPoliceBadge />
                        <h3>Cardiology</h3>
                    </div>
                    <div className="d4-2">
                        <GiPoliceBadge />
                        <h3>Cardiology</h3>
                    </div>
                    <div className="d4-3">
                        <GiPoliceBadge />
                        <h3>Cardiology</h3>
                    </div>               
                </div>
                <div className='d4sec2'>
                    <div className="d4-4">
                        <GiPoliceBadge />
                        <h3>Cardiology</h3>
                    </div>
                    <div className="d4-5">
                        <GiPoliceBadge />
                        <h3>Cardiology</h3>
                    </div>
                    <div className="d4-6">
                        <GiPoliceBadge />
                        <h3>Cardiology</h3>
                    </div>
                </div>
            </div>
            <div className="d5">
                <img src="/image1.jpg" alt='img'/>
                <h1 >Need the best medicines?</h1>
                <button onClick={()=>{navi('/loginpage')}}>Login First</button>
            </div>
            <Footer/>
        </div>
    )
}

export default Mainpage;