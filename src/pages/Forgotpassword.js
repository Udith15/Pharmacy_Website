import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Forgotpassword.css';

function Forgotpassword() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // Logic to update password in localStorage
        const storedData = localStorage.getItem(email);
        if (!storedData) {
            alert("User not found");
            return;
        }

        const parsedData = JSON.parse(storedData);
        parsedData.password = password;
        localStorage.setItem(email, JSON.stringify(parsedData));

        alert("Password reset successfully");
        navigate('/loginpage');
    };

    return (
        <div className='forgot-container'>
            <div className='forgot-header'>
                <button 
                    className='forgot-back-btn'
                    onClick={() => { navigate('/loginpage') }}
                >
                    &larr; Go back
                </button>
                <h2 className='forgot-tagline'>Reset your password securely</h2>
            </div>
            <div className='forgot-content'>
                <div className='forgot-form-container'>
                    <div className='forgot-form-wrapper'>
                        <h1 className='forgot-title'>Forgot Password</h1>
                        <form onSubmit={handleSubmit} className='forgot-form'>
                            <div className='form-group'>
                                <label className='form-label'>Email</label>
                                <input 
                                    className='form-input email-input' 
                                    type="email" 
                                    placeholder='Enter your email' 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>New Password</label>
                                <input 
                                    className='form-input password-input' 
                                    type="password" 
                                    placeholder='Enter new password' 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                />
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Confirm Password</label>
                                <input 
                                    className='form-input password-input' 
                                    type="password" 
                                    placeholder='Confirm new password' 
                                    value={confirmPassword} 
                                    onChange={(e) => setConfirmPassword(e.target.value)} 
                                    required 
                                />
                            </div>
                            <button type='submit' className='forgot-submit-btn'>
                                Reset Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forgotpassword;
