import React from 'react';
import './Mainpage.css';
import { GiPoliceBadge } from 'react-icons/gi';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
function Mainpage() {
    const navi = useNavigate();

    return (
        <div className="Mainpage">
            <div className="d1">
                <img src="/bgimage1.png" alt="logo" />
                <h2 style={{ color: 'white', marginLeft: '120px' }}>Pharmacy.com</h2>
                <nav>
                    <button onClick={() => { navi('/loginpage') }}>Login</button>
                    <button onClick={() => { navi('/signuppage') }}>Signup</button>
                </nav>
            </div>

            <div className="d2">
                <div className="d2-1">
                    <h1>Your Health, Our Priority</h1>
                    <p>
                        Discover top-rated doctors, book appointments instantly, and shop trusted health essentials —
                        all in one place. Welcome to the future of healthcare.
                    </p>
                    <ul style={{ color: 'white', marginTop: '20px', fontSize: '18px', lineHeight: '1.6' }}>
                        <li>✓ 24/7 Virtual Consultations</li>
                        <li>✓ Expert Verified Doctors</li>
                        <li>✓ Hassle-free Appointment Booking</li>
                        <li>✓ Trusted Pharmacy & Health Products</li>
                    </ul>
                    <button
                        style={{
                            marginTop: '25px',
                            backgroundColor: 'crimson',
                            border: 'none',
                            padding: '10px 20px',
                            fontSize: '16px',
                            borderRadius: '15px',
                            color: 'white',
                            cursor: 'pointer'
                        }}
                        onClick={() => navi('/signuppage')}
                    >
                        Get Started
                    </button>
                </div>
                <div className="d2-2">
                    <img src="/bgimage1.png" alt="Doctor" />
                </div>
            </div>

            <div className="d3">
                <h1>Centers of Excellence</h1>
                <p>Combining the best specialists and equipment to provide you nothing short of the best in healthcare.</p>
            </div>

            <div className="d4">
                <div className='d4sec1'>
                    <div className="d4-1"><GiPoliceBadge /><h3>Cardiology</h3></div>
                    <div className="d4-2"><GiPoliceBadge /><h3>Neurology</h3></div>
                    <div className="d4-3"><GiPoliceBadge /><h3>Orthopedics</h3></div>
                </div>
                <div className='d4sec2'>
                    <div className="d4-4"><GiPoliceBadge /><h3>Pediatrics</h3></div>
                    <div className="d4-5"><GiPoliceBadge /><h3>Dermatology</h3></div>
                    <div className="d4-6"><GiPoliceBadge /><h3>Gynecology</h3></div>
                </div>
            </div>

            <div className="d5">
                <h1>Need the best medicines?</h1>
                <button onClick={() => { navi('/loginpage') }}>Login First</button>
            </div>

            <Footer />
        </div>
    );
}

export default Mainpage;
