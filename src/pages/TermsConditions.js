import React from 'react';
import './TermsConditions.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function TermsConditions() {
    return (
        <div className="terms-container">
            <Navbar/>
            <div className="terms-header">
                <h1>Terms & Conditions</h1>
            </div>
            <div className="terms-content">
                <h2>Acceptance of Terms</h2>
                <p>By accessing Pharmacy.com, you agree to be bound by our terms and conditions as outlined on this page.</p>

                <h2>Eligibility</h2>
                <p>Users must be 18 years or older to use our services. You are responsible for maintaining the confidentiality of your login credentials.</p>

                <h2>Use of Services</h2>
                <p>Our services are for personal and non-commercial use. Any misuse, tampering, or unauthorized resale is strictly prohibited.</p>

                <h2>Medical Disclaimer</h2>
                <p>Pharmacy.com is not a substitute for emergency medical care. Consult in person in case of severe or urgent conditions.</p>

                <h2>Limitation of Liability</h2>
                <p>We are not liable for any indirect or incidental damages arising from the use of our services.</p>

                <h2>Amendments</h2>
                <p>We reserve the right to modify these terms at any time. Continued usage constitutes your acceptance of the changes.</p>
            </div>
            <Footer />
        </div>
    );
}

export default TermsConditions;
