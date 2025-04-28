import React from 'react';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Loginpage.css'

function Loginpage(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navi=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()

        const storeddata=JSON.parse(localStorage.getItem(email))

        if(storeddata){
            if(storeddata.password===password){
                alert("login successful")
                navi("/homepage")
            }
            else{
                alert("invalid credentials")
            }
        }
        else{
            alert("invalid email")
        }

    }
    return (
        <div className='loginpage'>
            <div className='c1'>
                <button onClick={()=>{navi('/')}}>Go back</button>
                <h2>You are one step away from being healthy</h2>
            </div>
            <div className='c2'>
                <div className='c2-1'>
                    <div>
                        <h1>Login page</h1>
                        <form onSubmit={handleSubmit}>
                            <label>Email </label>
                            <input className='inp1' type="email" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br></br>
                            <label>Password </label>
                            <input className='inp2' type="password" placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br></br>
                            <button type='submit'>Login</button>
                        </form>
                    </div>
                </div>
                <div className='c2-2'>
                    <img className="image1" src='/image2.png' alt="img"/>
                </div>
            </div>
        </div>
    )
}

export default Loginpage;