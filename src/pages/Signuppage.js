import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signuppage.css';

function Signuppage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name: name,
            email: email,
            password: password
        };

        localStorage.setItem(email, JSON.stringify(data));
        alert("Registration successful");
        navigate("/loginpage");
    };

    return (
        <div className='signup-container'>
            <div className='signup-header'>
                <button 
                    className='signup-back-btn'
                    onClick={() => { navigate('/') }}
                >
                    &larr; Go back
                </button>
                <h2 className='signup-tagline'>You are two steps away from being healthy</h2>
            </div>
            <div className='signup-content'>
                <div className='signup-form-container'>
                    <div className='signup-form-wrapper'>
                        <h1 className='signup-title'>Create Account</h1>
                        <form onSubmit={handleSubmit} className='signup-form'>
                            <div className='form-group'>
                                <label className='form-label'>Name</label>
                                <input 
                                    className='form-input name-input' 
                                    type="text" 
                                    placeholder='Enter your name' 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)} 
                                    required 
                                />
                            </div>
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
                                <label className='form-label'>Password</label>
                                <input 
                                    className='form-input password-input' 
                                    type="password" 
                                    placeholder='Enter your password' 
                                    value={password} 
                                    onChange={(e) => setPassword(e.target.value)} 
                                    required 
                                />
                            </div>
                            <button type='submit' className='signup-submit-btn'>
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signuppage;
