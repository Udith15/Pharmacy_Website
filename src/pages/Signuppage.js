import React from 'react';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Signuppage(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const navi=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()

        const data={
            name:name,
            email:email,
            password:password
        }
        localStorage.setItem(email,JSON.stringify(data))

        alert("registration successful")
        navi("/loginpage")
    }

    return (
        <div>
            <h1>Signup page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your text' value={name} onChange={(e)=>{setName(e.target.value)}} />
                <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Signuppage;