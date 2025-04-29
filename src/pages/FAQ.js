import React from 'react';
import './FAQ.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'

function FAQ() {
    return (
        <div className="faq-container">
            <Navbar/>
            <div className="faq-header">
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="faq-content">
                <h2>How can I consult a doctor online?</h2>
                <p>You can book an appointment through our app or website. A licensed doctor will connect with you via video call at your selected time.</p>

                <h2>Is it safe to buy medicines online?</h2>
                <p>Absolutely. We only provide 100% genuine medicines sourced from verified pharmaceutical distributors.</p>

                <h2>How long does medicine delivery take?</h2>
                <p>Typically, we deliver within 24-48 hours in major cities. Remote areas may take slightly longer.</p>

                <h2>Can I cancel or reschedule my doctor appointment?</h2>
                <p>Yes, appointments can be rescheduled or canceled up to 2 hours in advance without any charges.</p>

                <h2>Are my health records safe on Pharmacy.com?</h2>
                <p>Yes. We use secure servers and strong encryption to protect all your personal health records.</p>
            </div>
            <Footer />
        </div>
    );
}

export default FAQ;
