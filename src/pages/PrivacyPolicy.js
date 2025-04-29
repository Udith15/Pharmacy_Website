import React from 'react';
import './PrivacyPolicy.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'

function PrivacyPolicy() {
    return (
        <div className="privacy-container">
            <Navbar/>
            <div className="privacy-header">
                <h1>Privacy Policy</h1>
            </div>
            <div className="privacy-content">
                <h2>Information We Collect</h2>
                <p>
                    We collect personal details such as your name, contact number, email address, delivery address, and health-related data when you register or use our services.
                </p>

                <h2>How We Use Your Information</h2>
                <p>
                    Your information is used solely to provide healthcare services, deliver medicines, facilitate doctor consultations, and improve your user experience.
                </p>

                <h2>Data Security</h2>
                <p>
                    We use industry-standard security practices including encryption and multi-layer firewalls to protect your data. Your privacy is our top priority.
                </p>

                <h2>Third-Party Disclosure</h2>
                <p>
                    We do not share your data with third parties, except when legally required or to trusted vendors bound by confidentiality.
                </p>

                <h2>Cookies</h2>
                <p>
                    We use cookies to enhance your experience. These help us remember your preferences and optimize website functionality.
                </p>

                <h2>Changes to this Policy</h2>
                <p>
                    Pharmacy.com reserves the right to modify this privacy policy at any time. Please review it periodically for updates.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default PrivacyPolicy;
