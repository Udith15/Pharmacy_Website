import React from 'react';
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Signuppage.css'

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
        <div className='signuppage'>
            <div className='c1'>
                <button onClick={()=>{navi('/')}}>Go back</button>
                <h2>You are two steps away from being healthy</h2>
            </div>
            <div className='c2'>
                <div className='c2-1'>
                    <div>
                    <h1>Signup page</h1>
                    <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <input className='inp1' type="text" placeholder='Enter your name' value={name} onChange={(e)=>{setName(e.target.value)}} /><br></br>
                        <label>Email</label>
                        <input className='inp2' type="email" placeholder='Enter your email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /><br></br>
                        <label>Password</label>
                        <input className='inp3' type="password" placeholder='Enter your password' value={password} onChange={(e)=>{setPassword(e.target.value)}} /><br></br>
                        <button type='submit'>Register</button>
                    </form>
                    </div>
                </div>
                <div className='c2-2'>
                    <img className="image2" src='/image2.png' alt='img'/>
                </div>
            </div>
        </div>
    )
}

export default Signuppage;