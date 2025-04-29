import React from 'react'

import Navbar from '../components/Navbar'
import Card from '../components/Card'
import './Medicinepage.css'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

function Medicinepage() {
    const navi=useNavigate()
    return (
        <div className='medicinepage'>
        <Navbar />
        <div className='mp2'>
            <div className='mp2-1'>
            <button onClick={()=>{navi('/homepage')}}>Go back</button>
            <h2>Medicine</h2>
            </div>
            <div className='mp2-2'>
            <Card title="Dolo650" price="6.99$" imgpath="medi1.jpeg" />
            <Card title="UD HCL" price="15.99$" imgpath="medi2.jpg" />
            <Card title="Ginkoba" price="9.99$" imgpath="medi3.jpg" />
            <Card title="Ambro" price="11.99$" imgpath="medi4.jpg" />
            <Card title="Brain Touch 500" price="24.99$" imgpath="medi5.jpg" />
            <Card title="Fekit" price="27.99$" imgpath="medi9.jpg" />
            <Card title="Granisafe" price="41.99$" imgpath="medi7.jpg" />
            <Card title="Betadine" price="29.99$" imgpath="medi8.jpg" />
            </div>
        </div>
        <Footer />
        </div>
        )
}

export default Medicinepage;