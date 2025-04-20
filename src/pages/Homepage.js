import React from 'react'
import { useNavigate } from 'react-router-dom';

function Homepage(){

    const navi=useNavigate()
    
    return (
        <div>
            <h1>Home page</h1>
            <button onClick={()=>{navi('/')}}>Logout</button>
        </div>
    )
}

export default Homepage;