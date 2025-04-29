import React from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import './Healthcare.css'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'

function Healthcare() {
    const navi=useNavigate()
    return (
        <div className='healthcare'>
        <Navbar />
        <div className='hc2'>
            <div className='hc2-1'>
                <button onClick={()=>{navi('/homepage')}}>Go back</button>
            <h2>Healthcare</h2>
            </div>
            <div className='hc2-2'>
            <Card title="VLCC" price="25.99$" imgpath="hc1.jpeg"/>
            <Card title="Ethi Sun" price="29.99$" imgpath="hc2.jpeg"/>
            <Card title="Minimalist SS" price="35.99$" imgpath="hc3.jpeg"/>
            <Card title="Foxtale" price="55.99$" imgpath="hc4.jpeg"/>
            <Card title="LA Shield" price="15.99$" imgpath="hc5.jpeg"/>
            <Card title="Dermina" price="49.99$" imgpath="hc6.jpeg"/>
            <Card title="Plum" price="31.99$" imgpath="hc7.jpeg"/>
            </div>
        </div>
        <Footer />
        </div>
    )
}
export default Healthcare