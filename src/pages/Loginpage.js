import React from 'react';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Loginpage(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navi=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()

        const storeddata=JSON.parse(localStorage.getItem(email))

        if(storeddata.password===password){
            alert("login successful")
            navi("/homepage")
        }
        else{
            alert("invalid credentials")
        }

    }
    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}} />
                <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Loginpage;