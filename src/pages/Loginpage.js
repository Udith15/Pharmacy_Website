import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loginpage.css';

function Loginpage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedData = JSON.parse(localStorage.getItem(email));

        if (storedData) {
            if (storedData.password === password) {
                alert("Login successful");
                navigate("/homepage");
            } else {
                alert("Invalid credentials");
            }
        } else {
            alert("Email not registered");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='login-container'>
            <div className='login-header'>
                <button 
                    className='login-back-btn'
                    onClick={() => { navigate('/') }}
                >
                    &larr; Go back
                </button>
                <h2 className='login-tagline'>You are one step away from being healthy</h2>
            </div>
            <div className='login-content'>
                <div className='login-form-container'>
                    <div className='login-form-wrapper'>
                        <h1 className='login-title'>Welcome Back</h1>
                        <form onSubmit={handleSubmit} className='login-form'>
                            <div className='form-group'>
                                <label className='form-label'>Email</label>
                                <input 
                                    className='form-input email-input' 
                                    type="email" 
                                    placeholder='Enter your email' 
                                    value={email} 
                                    onChange={(e) => { setEmail(e.target.value) }} 
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <label className='form-label'>Password</label>
                                <div className='password-input-group'>
                                    <input 
                                        className='form-input password-input' 
                                        type={showPassword ? "text" : "password"} 
                                        placeholder='Enter your password' 
                                        value={password} 
                                        onChange={(e) => { setPassword(e.target.value) }} 
                                        required
                                    />
                                    <button 
                                        type="button" 
                                        className='password-toggle-btn'
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? '👁️' : '👁️‍🗨️'}
                                    </button>
                                </div>
                            </div>
                            <button type='submit' className='login-submit-btn'>
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loginpage;