import React from 'react';
import './AboutUs.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function AboutUs() {
    return (
        <div className="about-container">
            <Navbar/>
            <div className="about-header">
                <h1>About Us</h1>
            </div>
            <div className="about-content">
                <h2>Our Vision</h2>
                <p>
                    At Pharmacy.com, we envision a world where everyone has easy access to reliable healthcare, quality medicines, and expert medical guidance – all from the comfort of their home.
                </p>

                <h2>Who We Are</h2>
                <p>
                    We are a dedicated team of healthcare professionals, tech experts, and passionate individuals who believe in making health services more transparent, affordable, and accessible.
                    Our platform connects patients with certified doctors, offers authentic medicines at the best prices, and provides a wide range of health-related information.
                </p>

                <h2>What We Offer</h2>
                <ul>
                    <li>Online consultations with verified doctors</li>
                    <li>Genuine medicine delivery across India</li>
                    <li>Health records storage and tracking</li>
                    <li>Personalized care and reminders</li>
                </ul>

                <h2>Our Journey</h2>
                <p>
                    Since our inception in 2021, Pharmacy.com has served over a million customers and continues to grow rapidly with trust and support from people across the country. We aim to revolutionize digital healthcare through innovation and customer-first service.
                </p>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUs;
